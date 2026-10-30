import React, { useState, useEffect } from 'react';
import { MedicineReminder, loadReminders, saveReminders } from '../lib/medicineReminder';
import { Bell, Plus, Trash2, X, Clock, Pill, CheckCircle2, AlertCircle } from 'lucide-react';

interface MedicineReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'bn' | 'en';
}

export const MedicineReminderModal: React.FC<MedicineReminderModalProps> = ({
  isOpen,
  onClose,
  lang = 'bn',
}) => {
  const [reminders, setReminders] = useState<MedicineReminder[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('1+0+1');
  const [timing, setTiming] = useState<MedicineReminder['timing']>('after_meal');
  const [time1, setTime1] = useState('08:00');
  const [time2, setTime2] = useState('20:00');
  const [hasSecondTime, setHasSecondTime] = useState(true);
  const [notes, setNotes] = useState('');
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>('default');

  useEffect(() => {
    if (isOpen) {
      setReminders(loadReminders());
      if ('Notification' in window) {
        setNotificationPermission(Notification.permission);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSaveReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    const times = [time1];
    if (hasSecondTime && time2) {
      times.push(time2);
    }

    const newReminder: MedicineReminder = {
      id: Date.now().toString(),
      name: name.trim(),
      dosage: dosage.trim() || '1+0+1',
      timing,
      timesOfDay: times,
      notes: notes.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    const updated = [newReminder, ...reminders];
    setReminders(updated);
    saveReminders(updated);

    // Reset form
    setName('');
    setNotes('');
    setShowAddForm(false);
  };

  const handleDeleteReminder = (id: string) => {
    const updated = reminders.filter((r) => r.id !== id);
    setReminders(updated);
    saveReminders(updated);
  };

  const requestNotification = async () => {
    if ('Notification' in window) {
      const perm = await Notification.requestPermission();
      setNotificationPermission(perm);
      if (perm === 'granted') {
        new Notification(lang === 'bn' ? 'ডাক্তার আছেন' : 'Dakter Achen', {
          body: lang === 'bn' ? 'ওষুধের রিমাইন্ডার সফলভাবে সক্রিয় করা হয়েছে!' : 'Medicine reminder notifications enabled!',
          icon: '/assets/icon-192.png',
        });
      }
    }
  };

  const getTimingLabel = (t: MedicineReminder['timing']) => {
    switch (t) {
      case 'before_meal':
        return lang === 'bn' ? 'খাবারের পূর্বে' : 'Before Meal';
      case 'after_meal':
        return lang === 'bn' ? 'খাবারের পরে' : 'After Meal';
      case 'with_meal':
        return lang === 'bn' ? 'খাবারের সাথে' : 'With Meal';
      case 'empty_stomach':
        return lang === 'bn' ? 'খালি পেটে' : 'Empty Stomach';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-indigo-100">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-700 via-blue-700 to-indigo-800 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-100 text-xs font-medium mb-1">
              <Pill className="w-3.5 h-3.5" />
              {lang === 'bn' ? 'দৈনিক প্রেসক্রিপশন ও ওষুধ রুটিন' : 'Daily Medicine Tracker'}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">
              {lang === 'bn' ? 'ওষুধ খাওয়ার রিমাইন্ডার' : 'Medicine Reminders'}
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 mt-0.5">
              {lang === 'bn'
                ? 'নিয়মিত ওষুধ খাওয়ার সময় ও মাত্রা সাজিয়ে রাখুন'
                : 'Keep your daily medicine times and dosages organized'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Top notification permission bar if applicable */}
        {notificationPermission !== 'granted' && 'Notification' in window && (
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-2.5 flex items-center justify-between gap-3 text-xs text-amber-800">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                {lang === 'bn'
                  ? 'মোবাইলে নোটিফিকেশন পেতে অনুমতি দিন'
                  : 'Enable browser notifications for pill alerts'}
              </span>
            </div>
            <button
              onClick={requestNotification}
              className="px-2.5 py-1 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded text-xs transition-colors shrink-0"
            >
              {lang === 'bn' ? 'অনুমতি দিন' : 'Enable'}
            </button>
          </div>
        )}

        {/* Action button */}
        <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-700">
            {lang === 'bn'
              ? `মোট সংরক্ষিত ওষুধ: ${reminders.length} টি`
              : `Saved medicines: ${reminders.length}`}
          </span>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors shadow-xs"
          >
            {showAddForm ? (
              <>
                <X className="w-4 h-4" />
                {lang === 'bn' ? 'বাতিল' : 'Cancel'}
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                {lang === 'bn' ? 'নতুন ওষুধ যুক্ত করুন' : 'Add Medicine'}
              </>
            )}
          </button>
        </div>

        {/* Modal body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {/* Add form */}
          {showAddForm && (
            <form
              onSubmit={handleSaveReminder}
              className="bg-indigo-50/50 border border-indigo-200 rounded-xl p-4 sm:p-5 space-y-3.5 animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <h3 className="text-sm font-bold text-indigo-900 flex items-center gap-1.5">
                <Pill className="w-4 h-4 text-indigo-600" />
                {lang === 'bn' ? 'ওষুধের তথ্য দিন' : 'Enter Medicine Details'}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {lang === 'bn' ? 'ওষুধের নাম ও শক্তি *' : 'Medicine Name & Power *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'bn' ? 'যেমন: Napa Extra, Seclo 20mg' : 'e.g., Napa Extra 500mg, Seclo 20mg'}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {lang === 'bn' ? 'মাত্রা (Dosage)' : 'Dosage'}
                  </label>
                  <input
                    type="text"
                    value={dosage}
                    onChange={(e) => setDosage(e.target.value)}
                    placeholder="1+0+1, 1+1+1 বা ১টি করে"
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {lang === 'bn' ? 'খাওয়ার নিয়ম' : 'Intake Schedule'}
                  </label>
                  <select
                    value={timing}
                    onChange={(e) => setTiming(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  >
                    <option value="after_meal">{lang === 'bn' ? 'খাবারের পরে (After Meal)' : 'After Meal'}</option>
                    <option value="before_meal">{lang === 'bn' ? 'খাবারের পূর্বে (Before Meal)' : 'Before Meal'}</option>
                    <option value="with_meal">{lang === 'bn' ? 'খাবারের সাথে (With Meal)' : 'With Meal'}</option>
                    <option value="empty_stomach">{lang === 'bn' ? 'খালি পেটে (Empty Stomach)' : 'Empty Stomach'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    {lang === 'bn' ? 'সময় ১' : 'Time 1'}
                  </label>
                  <input
                    type="time"
                    value={time1}
                    onChange={(e) => setTime1(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              {hasSecondTime && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {lang === 'bn' ? 'সময় ২ (রাতের বা দুপুরের ডোজ)' : 'Time 2 (Night or Noon Dose)'}
                    </label>
                    <input
                      type="time"
                      value={time2}
                      onChange={(e) => setTime2(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      {lang === 'bn' ? 'বিশেষ সতর্কতা বা নোট' : 'Special Notes'}
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={lang === 'bn' ? 'যেমন: ভরা পেটে খাবেন, পর্যাপ্ত পানি পান করুন' : 'e.g. Drink plenty of water'}
                      className="w-full px-3 py-2 text-xs sm:text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="px-3.5 py-1.5 text-xs text-gray-600 hover:text-gray-800 rounded-lg font-medium"
                >
                  {lang === 'bn' ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm"
                >
                  {lang === 'bn' ? 'সংরক্ষণ করুন' : 'Save Reminder'}
                </button>
              </div>
            </form>
          )}

          {/* List of existing reminders */}
          {reminders.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <Pill className="w-12 h-12 mx-auto text-indigo-200 mb-3" />
              <p className="font-semibold text-gray-700">
                {lang === 'bn' ? 'এখনো কোনো ওষুধ যুক্ত করা হয়নি' : 'No medicine reminders added yet'}
              </p>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1">
                {lang === 'bn'
                  ? 'আপনার প্রেসক্রিপশনের ওষুধগুলো যুক্ত করে রাখুন, যাতে সঠিক সময়ে খাওয়ার কথা মনে থাকে।'
                  : 'Add medications from your prescription to keep track of your daily doses.'}
              </p>
              <button
                onClick={() => setShowAddForm(true)}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                <Plus className="w-4 h-4" />
                {lang === 'bn' ? 'প্রথম ওষুধটি যোগ করুন' : 'Add First Medicine'}
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {reminders.map((rem) => (
                <div
                  key={rem.id}
                  className="p-4 rounded-xl border border-gray-200 bg-white hover:border-indigo-300 shadow-xs flex items-start justify-between gap-3 transition-all"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 text-base">
                        {rem.name}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                        {rem.dosage}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600">
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-medium border border-emerald-100">
                        {getTimingLabel(rem.timing)}
                      </span>

                      <div className="flex items-center gap-1 text-gray-500">
                        <Clock className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{rem.timesOfDay.join(', ')}</span>
                      </div>
                    </div>

                    {rem.notes && (
                      <p className="text-xs text-gray-500 bg-gray-50 p-1.5 rounded border border-gray-100">
                        💡 {rem.notes}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleDeleteReminder(rem.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                    title={lang === 'bn' ? 'মুছে ফেলুন' : 'Delete'}
                    aria-label="Delete reminder"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500">
          {lang === 'bn'
            ? '🔒 আপনার সকল ওষুধের তথ্য আপনার ব্রাউজারেই সম্পূর্ণ নিরাপদে সংরক্ষিত থাকে।'
            : '🔒 Your medicine schedules are kept private and stored securely in your local browser.'}
        </div>
      </div>
    </div>
  );
};
