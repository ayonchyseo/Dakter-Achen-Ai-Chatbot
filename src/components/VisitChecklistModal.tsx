import React, { useState, useEffect } from 'react';
import { DOCTOR_VISIT_CHECKLIST, ChecklistItem } from '../data/checklistData';
import { CheckSquare, Square, X, ClipboardCheck, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

interface VisitChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'bn' | 'en';
}

const STORAGE_KEY = 'dakterachen_visit_checklist_completed';

export const VisitChecklistModal: React.FC<VisitChecklistModalProps> = ({
  isOpen,
  onClose,
  lang = 'bn',
}) => {
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedIds));
    } catch (e) {
      console.error(e);
    }
  }, [completedIds]);

  if (!isOpen) return null;

  const toggleItem = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const resetAll = () => {
    setCompletedIds([]);
  };

  const totalItems = DOCTOR_VISIT_CHECKLIST.length;
  const completedCount = completedIds.length;
  const progressPercent = Math.round((completedCount / totalItems) * 100);

  // Group by category
  const categoriesMap = DOCTOR_VISIT_CHECKLIST.reduce<Record<string, ChecklistItem[]>>((acc, item) => {
    const cat = lang === 'bn' ? item.categoryBn : item.categoryEn;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-teal-100">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-teal-500/30 text-teal-100 text-xs font-medium mb-1">
              <ClipboardCheck className="w-3.5 h-3.5" />
              {lang === 'bn' ? 'চেম্বার প্রস্তুতি সহায়িকা' : 'Doctor Visit Preparation'}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">
              {lang === 'bn' ? 'ডাক্তার দেখানোর প্রস্তুতি চেকলিস্ট' : 'Doctor Visit Preparation Checklist'}
            </h2>
            <p className="text-xs sm:text-sm text-teal-100/90 mt-0.5">
              {lang === 'bn'
                ? 'চেম্বারে যাওয়ার আগে প্রয়োজনীয় কাগজপত্র ও উপসর্গ গুছিয়ে নিন'
                : 'Prepare your records, previous tests, and key questions beforehand'}
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

        {/* Progress Bar & Reset Action */}
        <div className="p-4 bg-teal-50/70 border-b border-teal-100 flex items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex justify-between items-center text-xs font-semibold text-teal-900 mb-1.5">
              <span>
                {lang === 'bn'
                  ? `অগ্রগতি: ${completedCount}/${totalItems} টি সম্পন্ন (${progressPercent}%)`
                  : `Progress: ${completedCount}/${totalItems} completed (${progressPercent}%)`}
              </span>
              {progressPercent === 100 && (
                <span className="flex items-center gap-1 text-emerald-700 font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  {lang === 'bn' ? 'সম্পূর্ণ প্রস্তুত!' : 'Ready for visit!'}
                </span>
              )}
            </div>
            <div className="w-full h-2.5 bg-teal-200/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          {completedCount > 0 && (
            <button
              onClick={resetAll}
              className="text-xs text-teal-700 hover:text-teal-900 underline flex items-center gap-1 shrink-0"
              title={lang === 'bn' ? 'সব রিসেট করুন' : 'Reset all'}
            >
              <RefreshCw className="w-3 h-3" />
              {lang === 'bn' ? 'রিসেট' : 'Reset'}
            </button>
          )}
        </div>

        {/* Checklist Content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {Object.entries(categoriesMap).map(([category, items]) => (
            <div key={category} className="space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800 bg-teal-100/60 px-3 py-1 rounded-md inline-block">
                {category}
              </h3>
              <div className="space-y-2">
                {items.map((item) => {
                  const isChecked = completedIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                        isChecked
                          ? 'bg-emerald-50/60 border-emerald-300 text-gray-700'
                          : 'bg-white border-gray-200 hover:border-teal-300 hover:shadow-xs'
                      }`}
                    >
                      <button
                        type="button"
                        aria-label="Toggle item"
                        className="mt-0.5 text-teal-700 shrink-0"
                      >
                        {isChecked ? (
                          <CheckSquare className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      <div className="flex-1">
                        <div
                          className={`text-sm font-semibold ${
                            isChecked ? 'line-through text-gray-500' : 'text-gray-900'
                          }`}
                        >
                          {lang === 'bn' ? item.titleBn : item.titleEn}
                        </div>
                        <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                          {lang === 'bn' ? item.tipBn : item.tipEn}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer tip */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-teal-600 shrink-0" />
            <span>
              {lang === 'bn'
                ? 'চেম্বারে সিরিয়াল নিশ্চিত করতে নির্ধারিত সময়ের ৩০ মিনিট আগে পৌঁছান।'
                : 'Arrive 30 minutes before your serial time to ensure your appointment.'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-lg text-xs transition-colors shrink-0 ml-2"
          >
            {lang === 'bn' ? 'সম্পন্ন' : 'Done'}
          </button>
        </div>
      </div>
    </div>
  );
};
