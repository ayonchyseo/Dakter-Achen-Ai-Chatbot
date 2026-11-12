import { Doctor } from '../types/doctor';

export const STORAGE_KEY_USER_DOCTORS = 'dakterachen_user_added_doctors';
export const STORAGE_KEY_ALL_DOCTORS = 'dakterachen_doctors';

/**
 * Loads all user-added doctors from localStorage.
 * Inspects both the dedicated user-added storage and the general doctors storage.
 */
export function loadUserAddedDoctors(): Doctor[] {
  const result: Doctor[] = [];
  const seenSlugs = new Set<string>();

  // 1. Try dedicated storage first
  try {
    const raw = localStorage.getItem(STORAGE_KEY_USER_DOCTORS);
    if (raw) {
      const parsed: Doctor[] = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        parsed.forEach((doc) => {
          if (doc && doc.slug && !seenSlugs.has(doc.slug)) {
            seenSlugs.add(doc.slug);
            result.push({ ...doc, isUserAdded: true });
          }
        });
      }
    }
  } catch (err) {
    console.warn('Error reading user-added doctors from dedicated storage:', err);
  }

  // 2. Fallback check: migrate any legacy user-added doctors from STORAGE_KEY_ALL_DOCTORS and clean up oversized cache
  try {
    const rawAll = localStorage.getItem(STORAGE_KEY_ALL_DOCTORS);
    if (rawAll) {
      const parsedAll: Doctor[] = JSON.parse(rawAll);
      if (Array.isArray(parsedAll)) {
        let migratedAny = false;
        parsedAll.forEach((doc) => {
          if (doc && doc.slug && (doc.isUserAdded || doc.slug.startsWith('user-doc-')) && !seenSlugs.has(doc.slug)) {
            seenSlugs.add(doc.slug);
            result.push({ ...doc, isUserAdded: true });
            migratedAny = true;
          }
        });
        if (migratedAny) {
          localStorage.setItem(STORAGE_KEY_USER_DOCTORS, JSON.stringify(result));
        }
      }
      // Remove legacy full-array cache so 16,800+ doctors are never shadowed or quota-limited
      localStorage.removeItem(STORAGE_KEY_ALL_DOCTORS);
    }
  } catch (err) {
    console.warn('Error migrating legacy doctors storage:', err);
  }

  return result;
}

/**
 * Saves a new or updated user-added doctor to localStorage.
 */
export function saveUserAddedDoctorToStorage(
  newDoc: Doctor,
  _initialDoctors: Doctor[],
  currentList: Doctor[]
): { updatedList: Doctor[]; userDoctors: Doctor[] } {
  const docWithMeta: Doctor = {
    ...newDoc,
    isUserAdded: true,
    addedAt: newDoc.addedAt || new Date().toISOString(),
  };

  const existingUserDocs = loadUserAddedDoctors();
  const filtered = existingUserDocs.filter((d) => d.slug !== docWithMeta.slug);
  const updatedUserDocs = [docWithMeta, ...filtered];

  // Save to dedicated storage
  try {
    localStorage.setItem(STORAGE_KEY_USER_DOCTORS, JSON.stringify(updatedUserDocs));
  } catch (err) {
    console.warn('Failed to save to STORAGE_KEY_USER_DOCTORS:', err);
  }

  // Update full doctors list state in memory
  const currentFiltered = currentList.filter((d) => d.slug !== docWithMeta.slug);
  const updatedAll = [docWithMeta, ...currentFiltered];

  return {
    updatedList: updatedAll,
    userDoctors: updatedUserDocs,
  };
}

/**
 * Checks localStorage for any user-added doctors and merges them with initial doctors
 * ensuring the main doctorsList state remains consistent across browser reloads or multiple tabs.
 */
export function checkAndSyncUserDoctors(
  initialDoctors: Doctor[],
  currentList: Doctor[]
): { updatedList: Doctor[]; hasChanges: boolean; newDoctorsCount: number } {
  const userDocs = loadUserAddedDoctors();
  if (userDocs.length === 0) {
    // If no user docs in localStorage, verify if current list had user docs that got cleared
    const currentUserDocsCount = currentList.filter((d) => d.isUserAdded).length;
    if (currentUserDocsCount > 0) {
      // User docs were deleted or cleared in storage
      const initialMap = new Map(initialDoctors.map((d) => [d.slug, d]));
      const cleaned = currentList.filter((d) => initialMap.has(d.slug));
      return {
        updatedList: cleaned.length > 0 ? cleaned : initialDoctors,
        hasChanges: true,
        newDoctorsCount: 0,
      };
    }
    return { updatedList: currentList, hasChanges: false, newDoctorsCount: 0 };
  }

  // Check which user docs are missing from the current state
  const currentSlugs = new Set(currentList.map((d) => d.slug));
  const missingFromState = userDocs.filter((ud) => !currentSlugs.has(ud.slug));

  // Also check if any existing user docs had updates in localStorage
  let userDocsModified = false;
  const userDocsMap = new Map(userDocs.map((ud) => [ud.slug, ud]));

  const updatedCurrentList = currentList.map((doc) => {
    if (doc.isUserAdded && userDocsMap.has(doc.slug)) {
      const stored = userDocsMap.get(doc.slug)!;
      if (JSON.stringify(stored) !== JSON.stringify(doc)) {
        userDocsModified = true;
        return stored;
      }
    }
    return doc;
  });

  if (missingFromState.length > 0 || userDocsModified) {
    const finalMerged = [...missingFromState, ...updatedCurrentList];

    return {
      updatedList: finalMerged,
      hasChanges: true,
      newDoctorsCount: missingFromState.length,
    };
  }

  return { updatedList: currentList, hasChanges: false, newDoctorsCount: 0 };
}
