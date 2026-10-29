import React, { useState } from 'react';
import {
  FileText,
  User,
  MapPin,
  ExternalLink,
  BookOpen,
  Search,
  CheckCircle,
  FolderTree,
  ArrowRight,
  Download,
  HelpCircle
} from 'lucide-react';
import { INITIAL_DOCTORS } from '../data/doctors';
import { BLOG_POSTS } from '../data/blogData';
import { CHATTOGRAM_AREAS, SPECIALTIES } from '../lib/sitemapGenerator';

interface SitemapViewProps {
  lang: 'bn' | 'en';
  onSelectDoctor: (slug: string) => void;
  onSelectArticle: (slug: string) => void;
  onNavigateHome: () => void;
}

const SPECIALTY_NAMES: Record<string, { bn: string; en: string }> = {
  medicine: { bn: 'মেডিসিন ও ডায়াবেটিস', en: 'Medicine & Diabetes' },
  gynae: { bn: 'গাইনি ও প্রসূতি', en: 'Gynae & Obstetrics' },
  child: { bn: 'শিশু বিশেষজ্ঞ', en: 'Child Specialist' },
  eye: { bn: 'চক্ষু রোগ', en: 'Eye Specialist' },
  ent: { bn: 'নাক-কান-গলা', en: 'ENT Specialist' },
  heart: { bn: 'হৃদরোগ (কার্ডিওলজি)', en: 'Cardiology' },
  ortho: { bn: 'হাড় ও জোড়া (অর্থোপেডিক)', en: 'Bone & Joint' },
  skin: { bn: 'চর্ম ও যৌন রোগ', en: 'Skin & Dermatology' },
  dental: { bn: 'দন্ত চিকিৎসা (ডেন্টাল)', en: 'Dental Care' },
  neuro: { bn: 'নিউরো মেডিসিন ও ব্রেন', en: 'Neurology' },
  kidney: { bn: 'কিডনি রোগ (নেফ্রোলজি)', en: 'Kidney & Urology' },
  surgery: { bn: 'জেনারেল সার্জারি', en: 'General Surgery' },
};

export default function SitemapView({ lang, onSelectDoctor, onSelectArticle, onNavigateHome }: SitemapViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'doctors' | 'blogs' | 'specialties' | 'areas'>('all');
  const [filterQuery, setFilterQuery] = useState('');

  const q = filterQuery.toLowerCase().trim();

  const filteredDoctors = INITIAL_DOCTORS.filter(
    (d) =>
      !q ||
      d.name.toLowerCase().includes(q) ||
      d.nameEn.toLowerCase().includes(q) ||
      d.specialtyBn.toLowerCase().includes(q) ||
      d.specialtyEn.toLowerCase().includes(q) ||
      d.ch.some((c) => c.area.toLowerCase().includes(q))
  );

  const filteredBlogs = BLOG_POSTS.filter(
    (b) =>
      !q ||
      b.titleBn.toLowerCase().includes(q) ||
      b.titleEn.toLowerCase().includes(q) ||
      b.categoryBn.toLowerCase().includes(q) ||
      b.categoryEn.toLowerCase().includes(q)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0E7490] to-[#0284C7] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-white">
            <FolderTree size={14} />
            <span>{lang === 'bn' ? 'এইচটিএমএল ও এক্সএমএল সাইটম্যাপ' : 'HTML & XML Sitemap'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'bn' ? 'ডাক্তার আছেন সম্পূর্ণ সাইটম্যাপ' : 'Dakter Achen Complete Sitemap'}
          </h1>

          <p className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed">
            {lang === 'bn'
              ? 'চট্টগ্রামের ৫০০+ বিশেষজ্ঞ চিকিৎসক, ১০৬+ স্বাস্থ্য প্রবন্ধ, ১২টি মেডিকেল বিভাগ এবং ১৪টি অঞ্চলের পূর্ণাঙ্গ সূচিপত্র।'
              : 'Complete index of 500+ specialist doctors, 106+ medical articles, 12 specialties, and 14 Chittagong healthcare hubs.'}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0E7490] hover:bg-cyan-50 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow transition-all active:scale-95"
            >
              <FileText size={15} />
              <span>{lang === 'bn' ? 'সরাসরি সাইটম্যাপ (sitemap.xml)' : 'Combined Sitemap'}</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="/wp-sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all"
            >
              <FolderTree size={15} />
              <span>{lang === 'bn' ? 'ওয়ার্ডপ্রেস ইনডেক্স (wp-sitemap.xml)' : 'WP Sitemap Index'}</span>
              <ExternalLink size={13} />
            </a>

            <a
              href="/dakterachen-wordpress-import.xml"
              download="dakterachen-wordpress-import.xml"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold shadow transition-all active:scale-95"
            >
              <Download size={15} />
              <span>{lang === 'bn' ? 'ওয়ার্ডপ্রেস XML এক্সপোর্ট ডাউনলোড (১০৬+ পোস্ট)' : 'Download WP XML (106+ Posts)'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* WordPress & Domain Migration Info Banner */}
      <div className="bg-amber-50 border border-amber-200/90 rounded-2xl p-4 sm:p-5 text-amber-950 text-xs sm:text-sm space-y-2 shadow-xs">
        <div className="flex items-center gap-2 font-bold text-amber-900 text-sm sm:text-base">
          <HelpCircle size={18} className="text-amber-700 shrink-0" />
          <span>{lang === 'bn' ? 'dakterachen.com ডোমেইনে পোস্ট ও সাইটম্যাপ যুক্ত করার উপায়:' : 'How to show posts & sitemap on dakterachen.com:'}</span>
        </div>
        <p className="leading-relaxed text-slate-700">
          {lang === 'bn' ? (
            <>
              ১. <strong>এই আধুনিক অ্যাপে:</strong> সমস্ত <strong>১০৬+ স্বাস্থ্য প্রবন্ধ</strong> ও <strong>২৬০+ ডাক্তার প্রোফাইল</strong> ইতিমধ্যেই লাইভ এবং উপরের <strong>&quot;স্বাস্থ্য ব্লগ&quot;</strong> ও <strong>&quot;ডাক্তার খুঁজুন&quot;</strong> বাটনে ক্লিক করলেই পড়তে পারবেন।<br />
              ২. <strong>আপনার dakterachen.com সাইটে:</strong> যদি আপনার লাইভ ডোমেইনে ওয়ার্ডপ্রেস চলমান থাকে, তবে উপরের হলুদ বাটনে ক্লিক করে <code>dakterachen-wordpress-import.xml</code> ডাউনলোড করুন। এরপর আপনার ওয়ার্ডপ্রেস অ্যাডমিনে গিয়ে <strong>Tools &gt; Import &gt; WordPress</strong> এ আপলোড করলেই সাথে সাথে ১০৬টি নতুন পোস্ট আপনার ওয়ার্ডপ্রেস সাইট ও sitemap-এ যুক্ত হয়ে যাবে!
            </>
          ) : (
            <>
              1. <strong>In this app:</strong> All 106+ articles and 260+ doctors are already live under the &quot;Health Blog&quot; and &quot;Find Doctors&quot; sections.<br />
              2. <strong>For dakterachen.com:</strong> If your live domain is running WordPress, click the yellow button above to download the <code>dakterachen-wordpress-import.xml</code> file, then go to <strong>Tools &gt; Import &gt; WordPress</strong> in your WordPress dashboard to import all 106+ posts instantly.
            </>
          )}
        </p>
      </div>

      {/* Search & Filter Nav */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto no-scrollbar">
          {[
            { id: 'all', label: lang === 'bn' ? 'সব পেজ' : 'All', count: INITIAL_DOCTORS.length + BLOG_POSTS.length + 26 },
            { id: 'doctors', label: lang === 'bn' ? 'ডাক্তার প্রোফাইল' : 'Doctors', count: INITIAL_DOCTORS.length },
            { id: 'blogs', label: lang === 'bn' ? 'স্বাস্থ্য ব্লগ' : 'Blogs', count: BLOG_POSTS.length },
            { id: 'specialties', label: lang === 'bn' ? 'মেডিকেল বিভাগ' : 'Specialties', count: SPECIALTIES.length },
            { id: 'areas', label: lang === 'bn' ? 'এলাকা হাব' : 'Areas', count: CHATTOGRAM_AREAS.length },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-[#0E7490] text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${activeTab === tab.id ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-700'}`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-64">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder={lang === 'bn' ? 'সাইটম্যাপে খুঁজুন...' : 'Search sitemap...'}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-[#0E7490] focus:bg-white transition-all"
          />
        </div>
      </div>

      {/* Main Section Content */}
      <div className="space-y-8">
        {/* Core Pages */}
        {activeTab === 'all' && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle size={18} className="text-[#0E7490]" />
              <span>{lang === 'bn' ? 'মূল পেজ ও প্রধান নেভিগেশন' : 'Core Platform Pages'}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); onNavigateHome(); }}
                className="p-3.5 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/40 transition-all group"
              >
                <div className="font-bold text-xs text-slate-900 group-hover:text-[#0E7490] flex items-center justify-between">
                  <span>{lang === 'bn' ? 'হোমপেজ (Home)' : 'Homepage'}</span>
                  <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">/ (Root)</p>
              </a>

              <a
                href="#list"
                className="p-3.5 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/40 transition-all group"
              >
                <div className="font-bold text-xs text-slate-900 group-hover:text-[#0E7490] flex items-center justify-between">
                  <span>{lang === 'bn' ? 'ডাক্তার ডিরেক্টরি' : 'Doctors Directory'}</span>
                  <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">/#list</p>
              </a>

              <a
                href="#blog"
                className="p-3.5 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/40 transition-all group"
              >
                <div className="font-bold text-xs text-slate-900 group-hover:text-[#0E7490] flex items-center justify-between">
                  <span>{lang === 'bn' ? 'স্বাস্থ্য ব্লগ ও টিপস' : 'Health Blog & Tips'}</span>
                  <ArrowRight size={13} className="text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">/#blog</p>
              </a>

              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl border border-cyan-200 bg-cyan-50/50 hover:bg-cyan-100/50 transition-all group"
              >
                <div className="font-bold text-xs text-[#0E7490] flex items-center justify-between">
                  <span>{lang === 'bn' ? 'এক্সএমএল সাইটম্যাপ' : 'XML Sitemap'}</span>
                  <ExternalLink size={13} />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">/sitemap.xml</p>
              </a>
            </div>
          </div>
        )}

        {/* Specialties Categories */}
        {(activeTab === 'all' || activeTab === 'specialties') && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FolderTree size={18} className="text-[#0E7490]" />
              <span>{lang === 'bn' ? '১২টি বিশেষজ্ঞ চিকিৎসা বিভাগ' : '12 Specialty Categories'}</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {SPECIALTIES.map((spec) => {
                const info = SPECIALTY_NAMES[spec] || { bn: spec, en: spec };
                const count = INITIAL_DOCTORS.filter((d) => d.specialtyKey === spec).length;
                return (
                  <a
                    key={spec}
                    href={`#list?specialty=${spec}`}
                    className="p-3 rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/30 transition-all flex items-center justify-between text-xs"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{lang === 'bn' ? info.bn : info.en}</div>
                      <div className="text-[11px] text-slate-500">#{spec}</div>
                    </div>
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      {count} {lang === 'bn' ? 'ডাক্তার' : 'Docs'}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Chattogram Healthcare Area Hubs */}
        {(activeTab === 'all' || activeTab === 'areas') && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <MapPin size={18} className="text-[#0E7490]" />
              <span>{lang === 'bn' ? 'চট্টগ্রামের প্রধান স্বাস্থ্যসেবা এলাকা (Area Hubs)' : 'Chattogram Healthcare Area Hubs'}</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {CHATTOGRAM_AREAS.map((area) => (
                <a
                  key={area}
                  href={`#list?area=${encodeURIComponent(area)}`}
                  className="p-2.5 rounded-xl border border-slate-200 hover:border-cyan-400 hover:bg-cyan-50/30 transition-all text-center group"
                >
                  <MapPin size={13} className="mx-auto text-cyan-600 mb-1 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-xs text-slate-800">{area}</div>
                  <div className="text-[10px] text-slate-400">চট্টগ্রাম</div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Doctors Directory List */}
        {(activeTab === 'all' || activeTab === 'doctors') && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <User size={18} className="text-[#0E7490]" />
                <span>{lang === 'bn' ? 'বিশেষজ্ঞ চিকিৎসক তালিকা' : 'Specialist Doctors Directory'}</span>
                <span className="text-xs font-normal text-slate-500">({filteredDoctors.length} {lang === 'bn' ? 'জন' : 'doctors'})</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto p-1 border border-slate-100 rounded-xl">
              {filteredDoctors.slice(0, 150).map((doc) => (
                <button
                  key={doc.slug}
                  onClick={() => onSelectDoctor(doc.slug)}
                  className="p-3 text-left rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/30 transition-all flex items-start gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 text-[#0E7490] font-bold text-xs flex items-center justify-center shrink-0">
                    {doc.name.replace(/^ডাঃ\s*/, '').slice(0, 1)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-xs text-slate-900 truncate group-hover:text-[#0E7490]">
                      {doc.name}
                    </div>
                    <div className="text-[11px] text-slate-500 truncate">{doc.specialtyBn}</div>
                    <div className="text-[10px] text-cyan-700 truncate mt-0.5">
                      {doc.ch[0]?.name || 'চেম্বারের ঠিকানা'} ({doc.ch[0]?.area})
                    </div>
                  </div>
                </button>
              ))}
            </div>
            {filteredDoctors.length > 150 && (
              <p className="text-xs text-center text-slate-500 pt-1">
                {lang === 'bn'
                  ? `আরও ${filteredDoctors.length - 150} জন ডাক্তার দেখতে উপরে সার্চ বা ফিল্টার করুন।`
                  : `Search above to see remaining ${filteredDoctors.length - 150} doctors.`}
              </p>
            )}
          </div>
        )}

        {/* Health Blog Articles List */}
        {(activeTab === 'all' || activeTab === 'blogs') && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen size={18} className="text-[#0E7490]" />
              <span>{lang === 'bn' ? '১০৬+ স্বাস্থ্য ও সচেতনতা প্রবন্ধ' : '106+ Health Articles & Tips'}</span>
              <span className="text-xs font-normal text-slate-500">({filteredBlogs.length} {lang === 'bn' ? 'টি' : 'articles'})</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-h-[500px] overflow-y-auto p-1 border border-slate-100 rounded-xl">
              {filteredBlogs.map((blog) => (
                <button
                  key={blog.slug}
                  onClick={() => onSelectArticle(blog.slug)}
                  className="p-3 text-left rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-cyan-50/30 transition-all flex items-start gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center shrink-0">
                    <FileText size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-xs text-slate-900 line-clamp-1 group-hover:text-[#0E7490]">
                      {lang === 'bn' ? blog.titleBn : blog.titleEn}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{lang === 'bn' ? blog.categoryBn : blog.categoryEn}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1.5">
                      <span>{blog.publishedDate}</span> • <span>{blog.readTimeMin} {lang === 'bn' ? 'মিনিট' : 'min'}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
