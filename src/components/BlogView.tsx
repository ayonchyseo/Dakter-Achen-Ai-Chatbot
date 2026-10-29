import { useState, useMemo } from 'react';
import {
  Search,
  BookOpen,
  Bookmark,
  Clock,
  Calendar,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  X,
  Stethoscope
} from 'lucide-react';
import { BlogPost, BlogCategoryKey } from '../types/blog';
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blogData';
import DailyTipCard from './DailyTipCard';

interface BlogViewProps {
  lang: 'bn' | 'en';
  onSelectArticle: (slug: string) => void;
  onNavigateToSpecialty: (specialtyKey: string) => void;
  onToast: (msg: string) => void;
}

export default function BlogView({
  lang,
  onSelectArticle,
  onNavigateToSpecialty,
  onToast
}: BlogViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategoryKey | 'all' | 'saved'>('all');

  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('dakterachen_saved_articles');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    let next: string[];
    if (bookmarkedArticles.includes(slug)) {
      next = bookmarkedArticles.filter(s => s !== slug);
      onToast(lang === 'bn' ? 'সংরক্ষিত তালিকা থেকে সরানো হয়েছে' : 'Removed from saved');
    } else {
      next = [...bookmarkedArticles, slug];
      onToast(lang === 'bn' ? 'নিবন্ধটি সেভ করা হয়েছে 🔖' : 'Article saved to bookmarks 🔖');
    }
    setBookmarkedArticles(next);
    try {
      localStorage.setItem('dakterachen_saved_articles', JSON.stringify(next));
    } catch {}
  };

  // Filtered posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      // Category filter
      if (selectedCategory === 'saved') {
        if (!bookmarkedArticles.includes(post.slug)) return false;
      } else if (selectedCategory !== 'all') {
        if (post.categoryKey !== selectedCategory) return false;
      }

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchTitle = post.titleBn.toLowerCase().includes(q) || post.titleEn.toLowerCase().includes(q);
        const matchExcerpt = post.excerptBn.toLowerCase().includes(q) || post.excerptEn.toLowerCase().includes(q);
        const matchTag = post.tags.some(t => t.toLowerCase().includes(q));
        const matchCategory = post.categoryBn.toLowerCase().includes(q) || post.categoryEn.toLowerCase().includes(q);
        if (!matchTitle && !matchExcerpt && !matchTag && !matchCategory) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, bookmarkedArticles]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-in space-y-10">
      {/* Blog Hero Header */}
      <div className="bg-gradient-to-b from-cyan-50/70 via-white to-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-30"
          style={{
            backgroundImage: 'radial-gradient(#0E7490 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            maskImage: 'linear-gradient(180deg, #000 0%, transparent 90%)'
          }}
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading and Search */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-900 text-xs sm:text-sm font-bold">
              <BookOpen className="w-4 h-4 text-cyan-700" />
              <span>{lang === 'bn' ? 'স্বাস্থ্য সচেতনতা ও তথ্য ব্লগ' : 'Health Blog & Medical Guides'}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2]">
              {lang === 'bn' ? 'সুস্থ থাকুন প্রতিদিন — ' : 'Live Healthier Every Day — '}
              <span className="text-[#0E7490]">{lang === 'bn' ? 'চিকিৎসকদের পরামর্শে' : 'Physician Verified'}</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-xl">
              {lang === 'bn'
                ? 'ডেঙ্গু, ডায়াবেটিস, হৃদরোগ, মা ও শিশুর স্বাস্থ্যসহ জরুরি প্রাথমিক চিকিৎসার সঠিক তথ্য ও দৈনিক জীবনযাত্রার সহজ টিপস।'
                : 'Reliable healthcare guides, chronic disease prevention, child wellness, and daily actionable habits verified by doctors.'}
            </p>

            {/* Live Search Input */}
            <div className="relative max-w-lg pt-2">
              <div className="flex items-center bg-white border border-slate-300 rounded-2xl px-4 py-2.5 shadow-xs focus-within:border-cyan-600 focus-within:ring-2 focus-within:ring-cyan-100 transition-all">
                <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={lang === 'bn' ? 'নিবন্ধ খুঁজুন (যেমন: ডেঙ্গু, ডায়াবেটিস, প্রেসার, মা ও শিশু)...' : 'Search guides (e.g., dengue, diet, blood pressure)...'}
                  className="w-full bg-transparent text-sm sm:text-base font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-slate-400 hover:text-slate-600 p-1"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Daily Health Tip Feature Widget */}
          <div className="lg:col-span-5">
            <DailyTipCard lang={lang} onToast={onToast} />
          </div>
        </div>
      </div>

      {/* Category Segmented Control & Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
        {BLOG_CATEGORIES.map(cat => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#0E7490] text-white shadow-2xs'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
              }`}
            >
              {lang === 'bn' ? cat.bn : cat.en}
            </button>
          );
        })}

        {/* Bookmarks Tab */}
        <button
          type="button"
          onClick={() => setSelectedCategory('saved')}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap inline-flex items-center gap-1.5 transition-all cursor-pointer ${
            selectedCategory === 'saved'
              ? 'bg-amber-600 text-white shadow-2xs'
              : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
          }`}
        >
          <Bookmark className={`w-3.5 h-3.5 ${selectedCategory === 'saved' ? 'fill-white' : ''}`} />
          <span>{lang === 'bn' ? 'সংরক্ষিত' : 'Saved'}</span>
          {bookmarkedArticles.length > 0 && (
            <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold num ${
              selectedCategory === 'saved' ? 'bg-amber-800 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {bookmarkedArticles.length}
            </span>
          )}
        </button>
      </div>

      {/* Featured Article Banner (Only on "All" and when no search query is typed) */}
      {selectedCategory === 'all' && !searchQuery.trim() && featuredPost && (
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#0E7490]" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0E7490]">
              {lang === 'bn' ? 'গুরুত্বপূর্ণ বিশেষ নিবন্ধ' : 'Featured Health Editorial'}
            </span>
          </div>

          <div
            onClick={() => onSelectArticle(featuredPost.slug)}
            className="group bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all cursor-pointer grid grid-cols-1 md:grid-cols-12"
          >
            <div className="md:col-span-6 relative overflow-hidden h-64 md:h-full min-h-[260px]">
              <img
                src={featuredPost.coverImage}
                alt={lang === 'bn' ? featuredPost.titleBn : featuredPost.titleEn}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-xs font-bold shadow-xs">
                  {lang === 'bn' ? featuredPost.categoryBn : featuredPost.categoryEn}
                </span>
              </div>
            </div>

            <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                {/* Zero-pill metadata */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredPost.readTimeMin} {lang === 'bn' ? 'মিনিট পাঠ' : 'min read'}</span>
                  </span>
                  <span>·</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredPost.publishedDate}</span>
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-[#0E7490] transition-colors tracking-tight leading-snug">
                  {lang === 'bn' ? featuredPost.titleBn : featuredPost.titleEn}
                </h2>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {lang === 'bn' ? featuredPost.excerptBn : featuredPost.excerptEn}
                </p>
              </div>

              {/* Reviewer credit and action bar */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="text-slate-400 font-medium block">
                      {lang === 'bn' ? 'রিভিউ করেছেন' : 'Reviewed by'}
                    </span>
                    <span className="font-bold text-slate-800">
                      {lang === 'bn' ? featuredPost.reviewedBy.nameBn : featuredPost.reviewedBy.nameEn}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => toggleBookmark(e, featuredPost.slug)}
                    title="Bookmark"
                    className="p-2 rounded-xl text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                  >
                    <Bookmark className={`w-4 h-4 ${bookmarkedArticles.includes(featuredPost.slug) ? 'fill-amber-600 text-amber-600' : ''}`} />
                  </button>

                  <span className="inline-flex items-center gap-1 text-sm font-extrabold text-[#0E7490] group-hover:translate-x-0.5 transition-transform">
                    <span>{lang === 'bn' ? 'সম্পূর্ণ পড়ুন' : 'Read Article'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Articles Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            {selectedCategory === 'saved'
              ? (lang === 'bn' ? 'সংরক্ষিত নিবন্ধসমূহ' : 'Saved Articles')
              : selectedCategory === 'all'
              ? (lang === 'bn' ? 'সকল স্বাস্থ্য নিবন্ধ' : 'All Health Articles')
              : (BLOG_CATEGORIES.find(c => c.key === selectedCategory)?.[lang === 'bn' ? 'bn' : 'en'])}
          </h2>
          <span className="text-xs font-bold text-slate-500 num">
            {filteredPosts.length} {lang === 'bn' ? 'টি নিবন্ধ' : 'articles'}
          </span>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => {
              const isSaved = bookmarkedArticles.includes(post.slug);
              return (
                <article
                  key={post.slug}
                  onClick={() => onSelectArticle(post.slug)}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Cover Image Container */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <img
                        src={post.coverImage}
                        alt={lang === 'bn' ? post.titleBn : post.titleEn}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-bold">
                          {lang === 'bn' ? post.categoryBn : post.categoryEn}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => toggleBookmark(e, post.slug)}
                        title="Save article"
                        className="absolute top-3 right-3 p-2 rounded-xl bg-white/90 backdrop-blur-xs text-slate-600 hover:text-amber-600 shadow-2xs transition-all"
                      >
                        <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-600 text-amber-600' : ''}`} />
                      </button>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-2.5">
                      {/* Zero-pill metadata */}
                      <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                        <span className="inline-flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-slate-400" />
                          <span>{post.readTimeMin} {lang === 'bn' ? 'মিনিট' : 'min'}</span>
                        </span>
                        <span>·</span>
                        <span>{post.publishedDate}</span>
                      </div>

                      <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#0E7490] transition-colors leading-snug line-clamp-2">
                        {lang === 'bn' ? post.titleBn : post.titleEn}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal line-clamp-2">
                        {lang === 'bn' ? post.excerptBn : post.excerptEn}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-5 pt-0 mt-2 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="truncate max-w-[150px] font-medium">
                        {lang === 'bn' ? post.reviewedBy.nameBn : post.reviewedBy.nameEn}
                      </span>
                    </div>

                    <span className="font-bold text-[#0E7490] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5 shrink-0">
                      <span>{lang === 'bn' ? 'পড়ুন' : 'Read'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">
              {lang === 'bn' ? 'কোনো নিবন্ধ পাওয়া যায়নি' : 'No articles match your search'}
            </h3>
            <p className="text-sm text-slate-500 max-w-sm mx-auto">
              {selectedCategory === 'saved'
                ? (lang === 'bn' ? 'আপনি এখনো কোনো নিবন্ধ সেভ করেননি। পড়ার সময় বুকমার্ক আইকনে ক্লিক করে সংরক্ষণ করুন।' : 'You have not saved any articles yet. Click the bookmark icon to save.')
                : (lang === 'bn' ? 'অন্য কোনো বিষয় বা উপসর্গ দিয়ে খুঁজে দেখুন।' : 'Try searching with a different term or keyword.')}
            </p>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-2 text-xs font-bold text-[#0E7490] hover:underline"
              >
                {lang === 'bn' ? 'সার্চ ক্লিয়ার করুন' : 'Clear Search'}
              </button>
            )}
          </div>
        )}
      </section>

      {/* Cross-linking CTA to Doctor Consultation */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold tracking-wider uppercase text-cyan-400">
            {lang === 'bn' ? 'বিশেষজ্ঞ চেম্বার ও সিরিয়াল' : 'Doctor Directory'}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            {lang === 'bn' ? 'চট্টগ্রামের ৫০০+ বিশেষজ্ঞ ডাক্তারের সময়সূচি' : 'Find 500+ Specialist Doctors in Chattogram'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl">
            {lang === 'bn'
              ? 'চেম্বারের ঠিকানা, বসার সময় ও অফিসিয়াল সিরিয়াল নম্বর সরাসরি দেখে কল করুন।'
              : 'Direct verified clinic phone numbers, sitting days, and consultation hours.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigateToSpecialty('all')}
          className="px-6 py-3.5 rounded-xl bg-[#0E7490] hover:bg-[#155E75] text-white font-black text-sm shadow-md transition-all shrink-0 cursor-pointer active:scale-95 inline-flex items-center gap-2"
        >
          <Stethoscope className="w-4 h-4" />
          <span>{lang === 'bn' ? 'ডাক্তার খুঁজুন' : 'Search Doctors'}</span>
        </button>
      </section>
    </div>
  );
}
