export interface MedicineReminder {
  id: string;
  name: string;
  dosage: string; // e.g. 1+0+1, 500mg
  timing: 'before_meal' | 'after_meal' | 'with_meal' | 'empty_stomach';
  timesOfDay: string[]; // e.g. ['08:00', '20:00']
  notes?: string;
  createdAt: string;
}

const STORAGE_KEY = 'dakterachen_medicine_reminders';

export function loadReminders(): MedicineReminder[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    console.error('Error loading reminders:', e);
  }
  return [];
}

export function saveReminders(reminders: MedicineReminder[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reminders));
  } catch (e) {
    console.error('Error saving reminders:', e);
  }
}
