export interface ChamberPresenceVote {
  doctorSlug: string;
  isSittingToday: boolean;
  votedAt: string;
}

const STORAGE_KEY = 'dakterachen_crowd_presence_votes';

export function loadChamberVotes(): Record<string, { present: number; absent: number; lastVotedDate: string; userVote?: 'yes' | 'no' }> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    }
  } catch (e) {
    console.error('Error loading crowd votes:', e);
  }
  return {};
}

export function recordChamberVote(
  doctorSlug: string,
  vote: 'yes' | 'no'
): Record<string, { present: number; absent: number; lastVotedDate: string; userVote?: 'yes' | 'no' }> {
  const store = loadChamberVotes();
  const todayStr = new Date().toISOString().split('T')[0];
  const current = store[doctorSlug] || { present: 0, absent: 0, lastVotedDate: todayStr };

  // If new day, reset daily vote counts
  if (current.lastVotedDate !== todayStr) {
    current.present = 0;
    current.absent = 0;
    current.lastVotedDate = todayStr;
    delete current.userVote;
  }

  if (vote === 'yes') {
    current.present += 1;
    current.userVote = 'yes';
  } else {
    current.absent += 1;
    current.userVote = 'no';
  }

  store[doctorSlug] = current;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch (e) {
    console.error('Error saving crowd vote:', e);
  }
  return store;
}
