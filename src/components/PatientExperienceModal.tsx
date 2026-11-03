import React, { useState, useEffect } from 'react';
import { Star, X, MessageSquarePlus, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import type { Chamber } from '../types/doctor';

interface PatientExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName: string;
  doctorNameEn?: string;
  specialtyBn: string;
  chambers: Chamber[];
  initialChamberName?: string;
  existingRating?: number;
  existingComment?: string;
  existingTags?: string[];
  lang: 'bn' | 'en';
  onSubmitFeedback: (rating: number, comment?: string, tags?: string[]) => void;
}

const QUICK_EXPERIENCE_TAGS = [
  { bn: 'মন দিয়ে কথা শোনেন', en: 'Listens attentively' },
  { bn: 'যথেষ্ট সময় দেন', en: 'Gives ample time' },
  { bn: 'সঠিক রোগ নির্ণয়', en: 'Accurate diagnosis' },
  { bn: 'সিরিয়াল ব্যবস্থাপনা ভালো', en: 'Smooth serial management' },
  { bn: 'চেম্বারের পরিবেশ পরিচ্ছন্ন', en: 'Clean chamber environment' },
  { bn: 'ভদ্র ও আন্তরিক ব্যবহার', en: 'Polite & caring behavior' }
];

export default function PatientExperienceModal({
  isOpen,
  onClose,
  doctorName,
  doctorNameEn,
  specialtyBn,
  chambers,
  initialChamberName,
  existingRating,
  existingComment,
  existingTags,
  lang,
  onSubmitFeedback
}: PatientExperienceModalProps) {
  const [rating, setRating] = useState<number>(existingRating || 0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [selectedChamber, setSelectedChamber] = useState<string>(
    initialChamberName || chambers[0]?.name || ''
  );
  const [comment, setComment] = useState<string>(existingComment || '');
  const [selectedTags, setSelectedTags] = useState<string[]>(existingTags || []);
  const [waitTime, setWaitTime] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setRating(existingRating || 0);
      setComment(existingComment || '');
      setSelectedTags(existingTags || []);
      setSelectedChamber(initialChamberName || chambers[0]?.name || '');
      setErrorMsg('');
    }
  }, [isOpen, existingRating, existingComment, existingTags, initialChamberName, chambers]);

  if (!isOpen) return null;

  const activeStar = hoverRating || rating;

  const getRatingLabel = (stars: number) => {
    switch (stars) {
      case 5:
        return lang === 'bn' ? 'অসাধারণ অভিজ্ঞতা (৫/৫)' : 'Excellent Experience (5/5)';
      case 4:
        return lang === 'bn' ? 'খুব ভালো (৪/৫)' : 'Very Good (4/5)';
      case 3:
        return lang === 'bn' ? 'মোটামুটি সন্তোষজনক (৩/৫)' : 'Average / Satisfactory (3/5)';
      case 2:
        return lang === 'bn' ? 'মানসম্মত নয় (২/৫)' : 'Below Expectations (2/5)';
      case 1:
        return lang === 'bn' ? 'খারাপ অভিজ্ঞতা (১/৫)' : 'Poor Experience (1/5)';
      default:
        return lang === 'bn' ? 'স্টার ট্যাপ করে রেটিং দিন *' : 'Tap stars to rate *';
    }
  };

  const toggleTag = (tagText: string) => {
    setSelectedTags(prev =>
      prev.includes(tagText) ? prev.filter(t => t !== tagText) : [...prev, tagText]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating < 1 || rating > 5) {
      setErrorMsg(
        lang === 'bn'
          ? 'অনুগ্রহ করে ১ থেকে ৫ স্টারের মধ্যে একটি রেটিং নির্বাচন করুন।'
          : 'Please select a star rating between 1 and 5.'
      );
      return;
    }

    const enrichedTags = [...selectedTags];
    if (waitTime && !enrichedTags.includes(waitTime)) {
      enrichedTags.push(waitTime);
    }

    const finalComment = comment.trim()
      ? selectedChamber
        ? `[${selectedChamber}] ${comment.trim()}`
        : comment.trim()
      : undefined;

    onSubmitFeedback(
      rating,
      finalComment,
      enrichedTags.length > 0 ? enrichedTags : undefined
    );
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/65 backdrop-blur-xs animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="patient-experience-modal-title"
    >
      {/* Backdrop click to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal / Bottom Sheet Card */}
      <div className="relative z-10 w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 p-5 sm:p-6 space-y-5">
        {/* Mobile grab handle */}
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto sm:hidden -mt-1 mb-2" />

        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0">
              <MessageSquarePlus className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <h3
                id="patient-experience-modal-title"
                className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug truncate"
              >
                {lang === 'bn' ? 'চেম্বার অভিজ্ঞতা ও মতামত দিন' : 'Share Chamber Experience'}
              </h3>
              <p className="text-xs text-slate-500 truncate mt-0.5">
                {lang === 'bn' ? doctorName : (doctorNameEn || doctorName)} · {specialtyBn}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            aria-label={lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 1-5 Star Interactive Selector */}
          <div className="bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 text-center space-y-2.5">
            <label className="block text-xs sm:text-sm font-bold text-slate-800">
              {lang === 'bn'
                ? 'ডাক্তার ও চেম্বারের সেবা কেমন লেগেছে? (১-৫ স্টার) *'
                : 'How was your experience at the chamber? (1-5 Stars) *'}
            </label>

            <div className="flex items-center justify-center gap-2 sm:gap-3 py-1">
              {[1, 2, 3, 4, 5].map((star) => {
                const isSelected = activeStar >= star;
                return (
                  <button
                    key={star}
                    type="button"
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => {
                      setRating(star);
                      setErrorMsg('');
                    }}
                    className={`min-w-[48px] min-h-[48px] sm:min-w-[54px] sm:min-h-[54px] rounded-2xl border flex flex-col items-center justify-center gap-0.5 transition-all cursor-pointer active:scale-95 ${
                      isSelected
                        ? 'bg-amber-50 border-amber-400 text-amber-700 shadow-xs scale-105'
                        : 'bg-white border-slate-200 text-slate-400 hover:border-amber-300'
                    }`}
                    aria-label={`${star} Stars`}
                  >
                    <Star
                      className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform ${
                        isSelected ? 'fill-amber-400 text-amber-500' : 'text-slate-300'
                      }`}
                    />
                    <span className="text-[10px] font-extrabold num">{star}★</span>
                  </button>
                );
              })}
            </div>

            <p
              className={`text-xs sm:text-sm font-bold ${
                activeStar >= 4
                  ? 'text-emerald-700'
                  : activeStar === 3
                  ? 'text-amber-700'
                  : activeStar > 0
                  ? 'text-rose-700'
                  : 'text-slate-500'
              }`}
            >
              {getRatingLabel(activeStar)}
            </p>

            {errorMsg && (
              <p className="text-xs font-bold text-rose-600 bg-rose-50 border border-rose-200 rounded-lg py-1.5 px-3">
                {errorMsg}
              </p>
            )}
          </div>

          {/* Chamber Selector (if doctor has chambers) */}
          {chambers.length > 0 && (
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#0E7490]" />
                <span>{lang === 'bn' ? 'কোন চেম্বারে দেখিয়েছেন?' : 'Which chamber did you visit?'}</span>
              </label>
              <select
                value={selectedChamber}
                onChange={(e) => setSelectedChamber(e.target.value)}
                className="w-full min-h-[44px] px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:border-[#0E7490]"
              >
                {chambers.map((ch, idx) => (
                  <option key={idx} value={ch.name}>
                    {ch.name} ({ch.area})
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Quick Experience Highlights */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" />
              <span>
                {lang === 'bn'
                  ? 'চেম্বারের বিশেষ দিকগুলো নির্বাচন করুন (ঐচ্ছিক)'
                  : 'Select Chamber Highlights (Optional)'}
              </span>
            </label>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {QUICK_EXPERIENCE_TAGS.map((tagObj) => {
                const label = lang === 'bn' ? tagObj.bn : tagObj.en;
                const active = selectedTags.includes(label);
                return (
                  <button
                    key={tagObj.en}
                    type="button"
                    onClick={() => toggleTag(label)}
                    className={`min-h-[36px] px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      active
                        ? 'bg-cyan-50 border-[#0E7490] text-[#0E7490] font-bold shadow-2xs'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {active ? '✓ ' : '+ '}
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Waiting Time Quick Pill */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              {lang === 'bn' ? 'চেম্বারে আনুমানিক অপেক্ষার সময় (ঐচ্ছিক)' : 'Approximate Waiting Time (Optional)'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { bn: '১৫-৩০ মিনিট', en: '15-30 mins' },
                { bn: '৩০-৬০ মিনিট', en: '30-60 mins' },
                { bn: '১ ঘণ্টার বেশি', en: 'Over 1 hour' }
              ].map((w) => {
                const val = lang === 'bn' ? `অপেক্ষা: ${w.bn}` : `Wait: ${w.en}`;
                const isSelected = waitTime === val;
                return (
                  <button
                    key={w.en}
                    type="button"
                    onClick={() => setWaitTime(isSelected ? '' : val)}
                    className={`min-h-[40px] px-2 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {lang === 'bn' ? w.bn : w.en}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Comments Textarea */}
          <div>
            <label
              htmlFor="patient-experience-comment"
              className="block text-xs font-bold text-slate-700 mb-1.5"
            >
              {lang === 'bn'
                ? 'আপনার অভিজ্ঞতা বা মন্তব্য লিখুন (রোগীদের সহায়তার জন্য)'
                : 'Your Comments & Chamber Experience'}
            </label>
            <textarea
              id="patient-experience-comment"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={
                lang === 'bn'
                  ? 'ডাক্তারের পরামর্শ, সিরিয়াল পাওয়ার অভিজ্ঞতা বা চেম্বারের পরিবেশ সম্পর্কে সংক্ষেপে লিখুন...'
                  : 'Share details about the consultation, serial booking process, or chamber environment...'
              }
              className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0E7490] focus:ring-2 focus:ring-cyan-500/15"
            />
          </div>

          {/* Submit & Cancel Actions */}
          <div className="pt-2 flex items-center justify-end gap-2.5 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[44px] px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {lang === 'bn' ? 'বাতিল' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="flex-1 sm:flex-initial min-h-[44px] px-6 py-2.5 rounded-xl bg-[#047857] hover:bg-[#065F46] text-white font-bold text-xs sm:text-sm shadow-sm inline-flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>
                {existingRating
                  ? (lang === 'bn' ? 'মতামত আপডেট করুন' : 'Update Feedback')
                  : (lang === 'bn' ? 'মতামত জমা দিন' : 'Submit Feedback')}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
