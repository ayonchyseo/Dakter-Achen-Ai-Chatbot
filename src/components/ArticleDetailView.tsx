import { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Share2,
  Bookmark,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  ChevronRight,
  ShieldCheck,
  User,
  ExternalLink
} from 'lucide-react';
import { BlogPost } from '../types/blog';
import { BLOG_POSTS } from '../data/blogData';

interface ArticleDetailViewProps {
  article: BlogPost;
  lang: 'bn' | 'en';
  onBack: () => void;
  onNavigateToSpecialty: (specialtyKey: string) => void;
  onSelectArticle: (slug: string) => void;
  onToast: (msg: string) => void;
}

export default function ArticleDetailView({
  article,
  lang,
  onBack,
  onNavigateToSpecialty,
  onSelectArticle,
  onToast
}: ArticleDetailViewProps) {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dakterachen_saved_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const isBookmarked = bookmarkedArticles.includes(article.slug);

  const toggleBookmark = () => {
    let next: string[];
    if (isBookmarked) {
      next = bookmarkedArticles.filter(slug => slug !== article.slug);
      onToast(lang === 'bn' ? 'নিবন্ধটি সংরক্ষিত তালিকা থেকে সরানো হয়েছে' : 'Article removed from saved list');
    } else {
      next = [...bookmarkedArticles, article.slug];
      onToast(lang === 'bn' ? 'নিবন্ধটি সেভ করা হয়েছে 🔖' : 'Article saved to bookmarks 🔖');
    }
    setBookmarkedArticles(next);
    try {
      localStorage.setItem('dakterachen_saved_articles', JSON.stringify(next));
    } catch {}
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = lang === 'bn' ? article.titleBn : article.titleEn;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: lang === 'bn' ? article.excerptBn : article.excerptEn,
          url
        });
        return;
      } catch {}
    }

    try {
      await navigator.clipboard.writeText(url);
      onToast(lang === 'bn' ? 'নিবন্ধের লিংক কপি হয়েছে!' : 'Article link copied to clipboard!');
    } catch {
      onToast(lang === 'bn' ? 'লিংক কপি করা যায়নি' : 'Failed to copy link');
    }
  };

  // Find related articles in same category or other articles
  const relatedArticles = BLOG_POSTS.filter(p => p.slug !== article.slug).slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-in">
      {/* Top Navigation / Breadcrumbs */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#0E7490] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{lang === 'bn' ? 'ব্লগে ফিরে যান' : 'Back to Blog'}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleBookmark}
            title={isBookmarked ? (lang === 'bn' ? 'বুকমার্ক মুছুন' : 'Remove Bookmark') : (lang === 'bn' ? 'বুকমার্ক করুন' : 'Bookmark Article')}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              isBookmarked
                ? 'bg-amber-50 border-amber-300 text-amber-800'
                : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-600 text-amber-600' : ''}`} />
            <span>{isBookmarked ? (lang === 'bn' ? 'সংরক্ষিত' : 'Saved') : (lang === 'bn' ? 'সেভ করুন' : 'Save')}</span>
          </button>

          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'শেয়ার' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Article Header Metadata */}
      <header className="space-y-4">
        {/* Category & Reading Time (Zero-pill metadata discipline) */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 flex-wrap">
          <span className="font-bold text-[#0E7490] uppercase tracking-wide">
            {lang === 'bn' ? article.categoryBn : article.categoryEn}
          </span>
          <span className="text-slate-300">·</span>
          <span className="inline-flex items-center gap-1 text-slate-600">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.readTimeMin} {lang === 'bn' ? 'মিনিট পাঠ' : 'min read'}</span>
          </span>
          <span className="text-slate-300">·</span>
          <span className="inline-flex items-center gap-1 text-slate-600">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{article.publishedDate}</span>
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-slate-900 leading-[1.25]">
          {lang === 'bn' ? article.titleBn : article.titleEn}
        </h1>

        {/* Excerpt Lead */}
        <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
          {lang === 'bn' ? article.excerptBn : article.excerptEn}
        </p>

        {/* Verified Medical Reviewer Card */}
        <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-emerald-900">
                  {lang === 'bn' ? 'মেডিকেল রিভিউ সম্পন্ন' : 'Medically Reviewed'}
                </span>
                <span className="text-emerald-600 font-bold text-xs">✓</span>
              </div>
              <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                {lang === 'bn' ? article.reviewedBy.nameBn : article.reviewedBy.nameEn}
              </p>
              <p className="text-xs text-slate-600 font-medium">
                {lang === 'bn' ? article.reviewedBy.degreesBn : article.reviewedBy.degreesEn}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onNavigateToSpecialty(article.recommendedSpecialty)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-emerald-300 text-emerald-800 text-xs font-bold hover:bg-emerald-100 transition-colors self-start sm:self-center cursor-pointer shadow-2xs"
          >
            <Stethoscope className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'এই বিশেষজ্ঞের সিরিয়াল দেখুন' : 'Find Specialists'}</span>
          </button>
        </div>
      </header>

      {/* Featured Cover Image */}
      <figure className="my-8 rounded-2xl overflow-hidden border border-slate-200 shadow-xs">
        <img
          src={article.coverImage}
          alt={lang === 'bn' ? article.titleBn : article.titleEn}
          className="w-full h-64 sm:h-96 object-cover"
          loading="lazy"
        />
        <figcaption className="text-right text-[11px] text-slate-500 py-1.5 px-3 bg-slate-50 border-t border-slate-100">
          {lang === 'bn' ? 'তথ্য ও চিত্র: ডাক্তার আছেন স্বাস্থ্য সচেতনতা আর্কাইভ' : 'Source: Dakter Achen Health Archive'}
        </figcaption>
      </figure>

      {/* Key Takeaways Box */}
      <div className="my-8 bg-gradient-to-br from-cyan-50/90 to-slate-50 border border-cyan-200/90 rounded-2xl p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="w-5 h-5 text-cyan-700" />
          <h2 className="text-base sm:text-lg font-black text-slate-900 tracking-tight">
            {lang === 'bn' ? 'এক নজরে মূল বিষয়সমূহ (Key Takeaways)' : 'Key Takeaways at a Glance'}
          </h2>
        </div>
        <ul className="space-y-2.5">
          {(lang === 'bn' ? article.keyTakeawaysBn : article.keyTakeawaysEn).map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              <span className="w-2 h-2 rounded-full bg-[#0E7490] mt-2 shrink-0" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Article Body Sections */}
      <div className="space-y-8 my-8 text-slate-800 leading-relaxed font-normal">
        {article.contentSections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight pt-2 border-t border-slate-100">
              {lang === 'bn' ? sec.titleBn : sec.titleEn}
            </h2>

            {(lang === 'bn' ? sec.paragraphsBn : sec.paragraphsEn).map((p, pIdx) => (
              <p key={pIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {p}
              </p>
            ))}

            {/* Sub-bullet / Checklist points if present */}
            {((lang === 'bn' ? sec.tipsListBn : sec.tipsListEn) || []).length > 0 && (
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5 my-4">
                <ul className="space-y-2">
                  {((lang === 'bn' ? sec.tipsListBn : sec.tipsListEn) || []).map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-800 font-medium">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Warning Callout Box if present */}
            {(lang === 'bn' ? sec.warningCalloutBn : sec.warningCalloutEn) && (
              <div className="bg-rose-50 border-l-4 border-rose-500 rounded-r-2xl p-4 sm:p-5 my-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-rose-900 font-semibold leading-relaxed">
                  {lang === 'bn' ? sec.warningCalloutBn : sec.warningCalloutEn}
                </p>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Frequently Asked Questions (FAQ) Accordion */}
      {article.faqs && article.faqs.length > 0 && (
        <section className="my-10 pt-6 border-t border-slate-200">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mb-4">
            {lang === 'bn' ? 'সাধারণ জিজ্ঞাসাসমূহ (FAQ)' : 'Frequently Asked Questions'}
          </h3>

          <div className="space-y-3">
            {article.faqs.map((faq, fIdx) => {
              const isOpen = expandedFaq === fIdx;
              return (
                <div
                  key={fIdx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : fIdx)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {lang === 'bn' ? faq.questionBn : faq.questionEn}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                      {lang === 'bn' ? faq.answerBn : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Medical Disclaimer Callout */}
      <div className="my-8 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-500 leading-relaxed">
        <p>
          <strong className="text-slate-700">{lang === 'bn' ? 'দায়মুক্তি বিবৃতি (Medical Disclaimer): ' : 'Medical Disclaimer: '}</strong>
          {lang === 'bn'
            ? 'এই নিবন্ধে প্রদত্ত সকল তথ্য শুধুমাত্র সাধারণ জনসচেতনতার উদ্দেশ্যে সংকলিত। কোনো ওষুধ গ্রহণ বা শারীরিক সমস্যার তাৎক্ষণিক চিকিৎসা হিসেবে এটি প্রযোজ্য নয়। সবসময় একজন রেজিস্টার্ড চিকিৎসকের ব্যক্তিগত পরামর্শ গ্রহণ করুন।'
            : 'All medical and health guidance in this article is provided solely for public awareness and educational purposes. Always consult a licensed physician for diagnosis and prescription treatment.'}
        </p>
      </div>

      {/* Specialist Callout Banner (Cross-linking to Doctors) */}
      <div className="my-10 bg-gradient-to-r from-[#0E7490] to-[#155E75] text-white rounded-2xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center sm:text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold backdrop-blur-xs">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'বিশেষজ্ঞ ডাক্তারের সিরিয়াল' : 'Doctor Serial Directory'}</span>
          </div>
          <h4 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {lang === 'bn' ? 'চট্টগ্রামের বিশেষজ্ঞ ডাক্তার খুঁজছেন?' : 'Need to consult a specialist in Chattogram?'}
          </h4>
          <p className="text-xs sm:text-sm text-cyan-100 max-w-lg leading-relaxed">
            {lang === 'bn'
              ? 'চেম্বারের ঠিকানা, বসার সময়সূচি ও সরাসরি সিরিয়াল নম্বরের সম্পূর্ণ তালিকা দেখুন।'
              : 'View confirmed sitting hours, clinic locations, and direct booking contact numbers.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigateToSpecialty(article.recommendedSpecialty)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-[#0E7490] font-black text-sm shadow-md hover:bg-cyan-50 transition-all shrink-0 cursor-pointer active:scale-95"
        >
          <span>{lang === 'bn' ? 'ডাক্তারদের তালিকা দেখুন' : 'View Doctor List'}</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <section className="my-12 pt-8 border-t border-slate-200">
          <h3 className="text-xl font-black text-slate-900 tracking-tight mb-6">
            {lang === 'bn' ? 'আরও স্বাস্থ্য সচেতনতা নিবন্ধ' : 'Related Health Articles'}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                onClick={() => {
                  onSelectArticle(rel.slug);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-md transition-all cursor-pointer group flex flex-col"
              >
                <div className="h-36 overflow-hidden bg-slate-100">
                  <img
                    src={rel.coverImage}
                    alt={lang === 'bn' ? rel.titleBn : rel.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    <span className="text-[11px] font-bold text-[#0E7490] uppercase tracking-wider block">
                      {lang === 'bn' ? rel.categoryBn : rel.categoryEn}
                    </span>
                    <h5 className="font-bold text-sm text-slate-900 line-clamp-2 mt-1 group-hover:text-[#0E7490] transition-colors leading-snug">
                      {lang === 'bn' ? rel.titleBn : rel.titleEn}
                    </h5>
                  </div>
                  <div className="pt-2 text-[11px] text-slate-500 flex items-center justify-between border-t border-slate-100">
                    <span>{rel.readTimeMin} {lang === 'bn' ? 'মিনিট' : 'min'}</span>
                    <span className="font-bold text-[#0E7490] flex items-center gap-0.5">
                      {lang === 'bn' ? 'পড়ুন' : 'Read'} →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
