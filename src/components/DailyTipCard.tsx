import { useState, useEffect } from 'react';
import {
  Droplets,
  Heart,
  Apple,
  Moon,
  Footprints,
  Shield,
  Brain,
  Copy,
  Check,
  Bookmark,
  Share2,
  ChevronLeft,
  ChevronRight,
  Info,
  Sparkles
} from 'lucide-react';
import { DailyHealthTip } from '../types/blog';
import { DAILY_HEALTH_TIPS } from '../data/blogData';

interface DailyTipCardProps {
  lang: 'bn' | 'en';
  onToast: (msg: string) => void;
  className?: string;
  variant?: 'banner' | 'card' | 'compact';
}

export default function DailyTipCard({ lang, onToast, className = '', variant = 'card' }: DailyTipCardProps) {
  // Determine today's default tip based on day of the year
  const getTodayIndex = () => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    return dayOfYear % DAILY_HEALTH_TIPS.length;
  };

  const [currentIndex, setCurrentIndex] = useState<number>(getTodayIndex);
  const [completedTips, setCompletedTips] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('dakterachen_completed_tips');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [bookmarkedTips, setBookmarkedTips] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dakterachen_saved_tips');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showFact, setShowFact] = useState(false);

  const currentTip: DailyHealthTip = DAILY_HEALTH_TIPS[currentIndex] || DAILY_HEALTH_TIPS[0];
  const isCompleted = !!completedTips[currentTip.id];
  const isBookmarked = bookmarkedTips.includes(currentTip.id);

  const toggleComplete = () => {
    const next = { ...completedTips, [currentTip.id]: !isCompleted };
    setCompletedTips(next);
    try {
      localStorage.setItem('dakterachen_completed_tips', JSON.stringify(next));
    } catch {}
    if (!isCompleted) {
      onToast(lang === 'bn' ? 'দারুণ! আজকের স্বাস্থ্য লক্ষ্য সম্পন্ন হয়েছে 🎉' : 'Great! Today’s health target marked complete 🎉');
    }
  };

  const toggleBookmark = () => {
    let next: string[];
    if (isBookmarked) {
      next = bookmarkedTips.filter(id => id !== currentTip.id);
      onToast(lang === 'bn' ? 'বুকমার্ক থেকে সরানো হয়েছে' : 'Removed from bookmarks');
    } else {
      next = [...bookmarkedTips, currentTip.id];
      onToast(lang === 'bn' ? 'টিপসটি বুকমার্কে সংরক্ষিত হয়েছে 🔖' : 'Tip saved to bookmarks 🔖');
    }
    setBookmarkedTips(next);
    try {
      localStorage.setItem('dakterachen_saved_tips', JSON.stringify(next));
    } catch {}
  };

  const copyTipText = () => {
    const text = lang === 'bn'
      ? `💡 দৈনিক স্বাস্থ্য টিপস (${currentTip.categoryBn}):\n\n📌 ${currentTip.titleBn}\n${currentTip.tipBn}\n\n✅ করণীয়: ${currentTip.actionStepBn}\n\n— ডাক্তার আছেন (dakterachen.com)`
      : `💡 Daily Health Tip (${currentTip.categoryEn}):\n\n📌 ${currentTip.titleEn}\n${currentTip.tipEn}\n\n✅ Action: ${currentTip.actionStepEn}\n\n— Dakter Achen (dakterachen.com)`;

    try {
      navigator.clipboard.writeText(text);
      onToast(lang === 'bn' ? 'স্বাস্থ্য টিপস কপি হয়েছে! শেয়ার করতে পারেন।' : 'Tip copied to clipboard!');
    } catch {
      onToast(lang === 'bn' ? 'কপি করা সম্ভব হয়নি' : 'Failed to copy');
    }
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % DAILY_HEALTH_TIPS.length);
    setShowFact(false);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + DAILY_HEALTH_TIPS.length) % DAILY_HEALTH_TIPS.length);
    setShowFact(false);
  };

  const renderIcon = () => {
    switch (currentTip.iconType) {
      case 'water':
        return <Droplets className="w-5 h-5 text-cyan-600" />;
      case 'heart':
        return <Heart className="w-5 h-5 text-rose-500 fill-rose-100" />;
      case 'apple':
        return <Apple className="w-5 h-5 text-emerald-600" />;
      case 'moon':
        return <Moon className="w-5 h-5 text-indigo-500" />;
      case 'walk':
        return <Footprints className="w-5 h-5 text-amber-600" />;
      case 'brain':
        return <Brain className="w-5 h-5 text-purple-600" />;
      case 'shield':
      default:
        return <Shield className="w-5 h-5 text-teal-600" />;
    }
  };

  // Format today's date in Dhaka style
  const todayLabel = new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }).format(new Date());

  if (variant === 'compact') {
    return (
      <div className={`bg-gradient-to-r from-cyan-50/90 via-teal-50/60 to-emerald-50/50 border border-cyan-200/80 rounded-2xl p-4 sm:p-5 ${className}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white border border-cyan-200/80 shadow-2xs flex items-center justify-center shrink-0">
              {renderIcon()}
            </div>
            <div>
              <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-800">
                {lang === 'bn' ? 'আজকের স্বাস্থ্য টিপস' : 'Daily Health Tip'}
              </span>
              <p className="text-xs text-slate-500 font-medium">{todayLabel}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Tip"
              className="p-1 rounded-lg text-slate-500 hover:bg-white hover:text-slate-800 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-bold text-slate-500 num px-1">
              {currentIndex + 1}/{DAILY_HEALTH_TIPS.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Tip"
              className="p-1 rounded-lg text-slate-500 hover:bg-white hover:text-slate-800 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-3">
          <h4 className="font-bold text-sm text-slate-900 leading-snug">
            {lang === 'bn' ? currentTip.titleBn : currentTip.titleEn}
          </h4>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            {lang === 'bn' ? currentTip.tipBn : currentTip.tipEn}
          </p>
        </div>

        <div className="mt-3 pt-2.5 border-t border-cyan-200/60 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={toggleComplete}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg transition-colors ${
              isCompleted
                ? 'bg-emerald-600 text-white'
                : 'bg-white/90 text-slate-700 hover:bg-white border border-slate-200'
            }`}
          >
            <Check className={`w-3.5 h-3.5 ${isCompleted ? 'text-white' : 'text-slate-400'}`} />
            <span>{isCompleted ? (lang === 'bn' ? 'পালন করেছি' : 'Done today') : (lang === 'bn' ? 'আজ পালন করব' : 'I’ll do this')}</span>
          </button>

          <button
            type="button"
            onClick={copyTipText}
            className="text-xs text-cyan-800 hover:text-cyan-950 font-semibold inline-flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-white/70"
          >
            <Copy className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'কপি' : 'Copy'}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-7 shadow-xs hover:shadow-md transition-shadow ${className}`}>
      {/* Decorative Top Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 via-teal-500 to-emerald-500" />

      {/* Header bar: Label, Date & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-cyan-50 border border-cyan-200/70 text-cyan-700 flex items-center justify-center shrink-0">
            {renderIcon()}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold text-[#0E7490] tracking-wide uppercase">
                {lang === 'bn' ? 'দৈনিক স্বাস্থ্য টিপস' : 'Daily Health Tip'}
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-medium">
                {lang === 'bn' ? currentTip.categoryBn : currentTip.categoryEn}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-0.5">{todayLabel}</p>
          </div>
        </div>

        {/* Carousel pagination and quick action buttons */}
        <div className="flex items-center gap-1.5 self-end sm:self-center">
          <button
            type="button"
            onClick={toggleBookmark}
            title={isBookmarked ? (lang === 'bn' ? 'বুকমার্ক সরানো' : 'Remove Bookmark') : (lang === 'bn' ? 'বুকমার্ক সংরক্ষণ' : 'Bookmark Tip')}
            className={`p-2 rounded-xl transition-all ${
              isBookmarked
                ? 'bg-amber-100 text-amber-800'
                : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-600' : ''}`} />
          </button>

          <button
            type="button"
            onClick={copyTipText}
            title={lang === 'bn' ? 'টিপসটি কপি করুন' : 'Copy Tip Text'}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <div className="h-4 w-px bg-slate-200 mx-1" />

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Health Tip"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <span className="text-xs font-bold text-slate-600 num px-1">
            {currentIndex + 1} / {DAILY_HEALTH_TIPS.length}
          </span>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Health Tip"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-5 space-y-3">
        <h3 className="text-lg sm:text-xl font-black text-slate-900 tracking-tight leading-snug">
          {lang === 'bn' ? currentTip.titleBn : currentTip.titleEn}
        </h3>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
          {lang === 'bn' ? currentTip.tipBn : currentTip.tipEn}
        </p>

        {/* Actionable takeaway highlight */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 sm:p-4 flex items-start gap-3 mt-3">
          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
            ✓
          </div>
          <div className="flex-1">
            <span className="block text-xs font-bold uppercase tracking-wider text-emerald-800">
              {lang === 'bn' ? 'আজকের করণীয় পদক্ষেপ' : 'Action Step for Today'}
            </span>
            <p className="text-xs sm:text-sm text-slate-800 font-medium mt-0.5 leading-relaxed">
              {lang === 'bn' ? currentTip.actionStepBn : currentTip.actionStepEn}
            </p>
          </div>
        </div>

        {/* Scientific Context Toggle */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setShowFact(!showFact)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-800 hover:text-cyan-950 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>
              {showFact
                ? (lang === 'bn' ? 'বিজ্ঞানসম্মত ব্যাখ্যা লুকান' : 'Hide scientific context')
                : (lang === 'bn' ? 'চিকিৎসা বিজ্ঞানের তথ্য জানুন' : 'Why does this work? (Medical fact)')}
            </span>
          </button>

          {showFact && (
            <div className="mt-2 text-xs text-slate-600 bg-cyan-50/60 border border-cyan-100 rounded-xl p-3 leading-relaxed animate-fade-in flex items-start gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
              <span>{lang === 'bn' ? currentTip.scientificFactBn : currentTip.scientificFactEn}</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer CTA Bar */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={toggleComplete}
          className={`inline-flex items-center gap-2 min-h-[42px] px-4 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-2xs active:scale-95 cursor-pointer ${
            isCompleted
              ? 'bg-emerald-600 text-white hover:bg-emerald-700'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          <Check className={`w-4 h-4 ${isCompleted ? 'text-white' : 'text-emerald-400'}`} />
          <span>
            {isCompleted
              ? (lang === 'bn' ? 'আজকের লক্ষ্য সম্পন্ন!' : 'Completed for today!')
              : (lang === 'bn' ? 'আমি আজ এটি মেনে চলব' : 'I commit to this today')}
          </span>
        </button>

        <span className="text-xs text-slate-500 font-medium">
          {lang === 'bn' ? 'প্রতিদিন নতুন স্বাস্থ্য পরামর্শ পেতে নিয়মিত ভিজিট করুন' : 'Updated daily with verified lifestyle tips'}
        </span>
      </div>
    </div>
  );
}
