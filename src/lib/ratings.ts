export interface DoctorRatingData {
  sum: number;
  count: number;
  userRating?: number;
  userComment?: string;
  userTags?: string[];
  userRatedAt?: string;
}

const STORAGE_KEY = 'dakterachen_doctor_ratings';

export function getBaseRating(slug: string, rank: number = 5): { sum: number; count: number } {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash << 5) - hash + slug.charCodeAt(i);
    hash |= 0;
  }
  const abs = Math.abs(hash);
  // Realistic base reviews: 24 to 75 + rank * 2
  const count = 24 + (abs % 45) + Math.min(20, (rank || 5) * 2);
  // Realistic average between 4.6 and 4.9
  const baseAvgs = [4.7, 4.8, 4.9, 4.6, 4.8, 4.9, 4.7, 4.85];
  const avg = baseAvgs[abs % baseAvgs.length];
  const sum = Math.round(count * avg);
  return { sum, count };
}

export function loadAllRatings(): Record<string, DoctorRatingData> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading ratings from storage:', e);
  }
  return {};
}

export function saveAllRatings(ratings: Record<string, DoctorRatingData>): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ratings));
  } catch (e) {
    console.error('Error saving ratings to storage:', e);
  }
}

export function getDoctorRating(
  allRatings: Record<string, DoctorRatingData>,
  slug: string,
  rank: number = 5
): { avg: number; count: number; sum: number; userRating?: number; userComment?: string; userTags?: string[] } {
  const custom = allRatings[slug];
  const base = getBaseRating(slug, rank);

  if (!custom) {
    const avg = Number((base.sum / base.count).toFixed(1));
    return {
      avg,
      count: base.count,
      sum: base.sum,
      userRating: undefined,
      userComment: undefined,
      userTags: undefined
    };
  }

  const effectiveCount = Math.max(custom.count, 1);
  const avg = Number((custom.sum / effectiveCount).toFixed(1));
  return {
    avg,
    count: effectiveCount,
    sum: custom.sum,
    userRating: custom.userRating,
    userComment: custom.userComment,
    userTags: custom.userTags
  };
}

export function saveDoctorRating(
  allRatings: Record<string, DoctorRatingData>,
  slug: string,
  newRating: number,
  rank: number = 5,
  comment?: string,
  tags?: string[]
): {
  updatedStore: Record<string, DoctorRatingData>;
  result: { avg: number; count: number; sum: number; userRating: number };
} {
  const current = allRatings[slug] || {
    ...getBaseRating(slug, rank)
  };

  const oldUserRating = current.userRating;
  let newSum = current.sum;
  let newCount = current.count;

  if (oldUserRating !== undefined && oldUserRating > 0) {
    // User already rated; update the sum with difference
    newSum = newSum - oldUserRating + newRating;
  } else {
    // First rating from this user
    newSum = newSum + newRating;
    newCount = newCount + 1;
  }

  const updatedEntry: DoctorRatingData = {
    sum: newSum,
    count: newCount,
    userRating: newRating,
    userComment: comment !== undefined ? comment : current.userComment,
    userTags: tags !== undefined ? tags : current.userTags,
    userRatedAt: new Date().toISOString()
  };

  const updatedStore: Record<string, DoctorRatingData> = {
    ...allRatings,
    [slug]: updatedEntry
  };

  saveAllRatings(updatedStore);

  const avg = Number((newSum / Math.max(newCount, 1)).toFixed(1));
  return {
    updatedStore,
    result: {
      avg,
      count: newCount,
      sum: newSum,
      userRating: newRating
    }
  };
}
