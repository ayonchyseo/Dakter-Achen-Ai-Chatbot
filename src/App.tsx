import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  MapPin,
  Clock,
  Phone,
  Copy,
  ChevronRight,
  Check,
  Shield,
  Stethoscope,
  Activity,
  Heart,
  Baby,
  Eye,
  Bone,
  Sparkles,
  Zap,
  Droplet,
  Filter,
  Share2,
  Edit3,
  Plus,
  Building2,
  X,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Star,
  BookOpen,
  HeartPulse
} from 'lucide-react';
import Chatbot from './components/Chatbot';
import DoctorRatingSection from './components/DoctorRatingSection';
import BlogView from './components/BlogView';
import ArticleDetailView from './components/ArticleDetailView';
import DailyTipCard from './components/DailyTipCard';
import { INITIAL_DOCTORS } from './data/doctors';
import { BLOG_POSTS } from './data/blogData';
import type { BlogPost } from './types/blog';
import { loadAllRatings, saveDoctorRating, getDoctorRating } from './lib/ratings';
import type { DoctorRatingData } from './lib/ratings';

export type { Chamber, Doctor } from './types/doctor';
import type { Chamber, Doctor } from './types/doctor';

// Helper to open the AI chatbot
const openChat = (message?: string) => {
  window.dispatchEvent(new CustomEvent('open-chat', { detail: { message } }));
};

const WEEK_DAYS = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const BN_DAYS: Record<string, string> = {
  Sat: 'শনি',
  Sun: 'রবি',
  Mon: 'সোম',
  Tue: 'মঙ্গল',
  Wed: 'বুধ',
  Thu: 'বৃহঃ',
  Fri: 'শুক্র'
};

// Initial Doctors Dataset imported from ./data/doctors (260+ doctors across 12 categories)

// Specialties metadata
const SPECIALTIES = [
  { key: 'medicine', icon: Activity, bn: 'মেডিসিন ও ডায়াবেটিস', en: 'Medicine & Diabetes' },
  { key: 'gynae', icon: Heart, bn: 'গাইনি ও প্রসূতি', en: 'Gynae & Obstetrics' },
  { key: 'child', icon: Baby, bn: 'শিশু বিশেষজ্ঞ', en: 'Child Specialist' },
  { key: 'eye', icon: Eye, bn: 'চক্ষু রোগ', en: 'Eye Specialist' },
  { key: 'ent', icon: Activity, bn: 'নাক-কান-গলা', en: 'ENT Specialist' },
  { key: 'heart', icon: Zap, bn: 'হৃদরোগ (কার্ডিওলজি)', en: 'Cardiology' },
  { key: 'ortho', icon: Bone, bn: 'হাড় ও জোড়া (অর্থোপেডিক)', en: 'Bone & Joint' },
  { key: 'skin', icon: Sparkles, bn: 'চর্ম ও যৌন রোগ', en: 'Skin & Dermatology' },
  { key: 'dental', icon: Stethoscope, bn: 'দন্ত চিকিৎসা (ডেন্টাল)', en: 'Dental Care' },
  { key: 'neuro', icon: Zap, bn: 'নিউরো মেডিসিন ও ব্রেন', en: 'Neurology' },
  { key: 'kidney', icon: Droplet, bn: 'কিডনি রোগ (নেফ্রোলজি)', en: 'Kidney & Urology' },
  { key: 'surgery', icon: Activity, bn: 'জেনারেল সার্জারি', en: 'General Surgery' }
];

// Dhaka time calculation helpers
function getDhakaNow() {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Dhaka',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).formatToParts(new Date());
    const obj: Record<string, string> = {};
    parts.forEach(p => { obj[p.type] = p.value; });
    return {
      day: obj.weekday,
      min: ((parseInt(obj.hour, 10) % 24) * 60) + parseInt(obj.minute, 10)
    };
  } catch {
    const d = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return {
      day: days[d.getDay()],
      min: (d.getHours() * 60) + d.getMinutes()
    };
  }
}

function timeToMin(h: string) {
  const [a, b] = h.split(':').map(Number);
  return (a * 60) + (b || 0);
}

function formatTime(h: string, lang: 'bn' | 'en') {
  if (!h) return '';
  let [a, b] = h.split(':').map(Number);
  const ap = a >= 12 ? (lang === 'bn' ? 'সন্ধ্যা/রাত' : 'PM') : (lang === 'bn' ? 'সকাল' : 'AM');
  const h12 = a % 12 || 12;
  const m = String(b || 0).padStart(2, '0');
  return `${h12}:${m} ${ap}`;
}

function getDoctorStatus(c: Chamber, lang: 'bn' | 'en'): { type: 'now' | 'today' | 'off' | 'next'; label: string } {
  const now = getDhakaNow();
  const dayNameBn = BN_DAYS[now.day] || now.day;
  
  if (c.days.includes(now.day)) {
    const startM = timeToMin(c.start);
    const endM = timeToMin(c.end);
    if (now.min >= startM && now.min < endM) {
      return { type: 'now', label: lang === 'bn' ? 'এখন বসছেন' : 'Sitting now' };
    }
    if (now.min < endM) {
      return {
        type: 'today',
        label: lang === 'bn' ? `আজ বসছেন · ${formatTime(c.start, 'bn')}` : `Sitting today · ${formatTime(c.start, 'en')}`
      };
    }
  }

  // Find next available day
  const idx = WEEK_DAYS.indexOf(now.day);
  for (let k = 1; k <= 7; k++) {
    const nextDay = WEEK_DAYS[(idx + k) % 7];
    if (c.days.includes(nextDay)) {
      const nextDayLabel = lang === 'bn' ? BN_DAYS[nextDay] : nextDay;
      const wasToday = c.days.includes(now.day);
      const prefix = wasToday ? (lang === 'bn' ? 'আজ সময় শেষ · ' : 'Ended today · ') : (lang === 'bn' ? 'আজ বন্ধ · ' : 'Off today · ');
      return {
        type: wasToday ? 'next' : 'off',
        label: `${prefix}${lang === 'bn' ? 'পরের দিন' : 'Next'}: ${nextDayLabel}`
      };
    }
  }

  return { type: 'off', label: lang === 'bn' ? 'আজ বন্ধ' : 'Off today' };
}

function DoctorAvatar({ img, name, ini, className = "w-13 h-13 rounded-2xl text-sm" }: { img?: string; name: string; ini: string; className?: string }) {
  const [error, setError] = useState(false);
  if (img && !error) {
    return (
      <img
        src={img}
        alt={name}
        onError={() => setError(true)}
        className={`${className} object-cover shrink-0 border border-slate-200`}
        loading="lazy"
      />
    );
  }
  return (
    <div className={`${className} bg-cyan-100 text-cyan-800 font-bold flex items-center justify-center shrink-0 border border-cyan-200`}>
      {ini}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<'bn' | 'en'>('bn');
  const [doctorsList, setDoctorsList] = useState<Doctor[]>(() => {
    try {
      const saved = localStorage.getItem('dakterachen_doctors');
      if (saved) {
        const parsed: Doctor[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const initSlugs = new Set(INITIAL_DOCTORS.map(d => d.slug));
          const customUserDoctors = parsed.filter(d => !initSlugs.has(d.slug));
          const updatedInitial = INITIAL_DOCTORS.map(init => {
            const match = parsed.find(p => p.slug === init.slug);
            return match ? { ...init, ...match, name: init.name, degrees: init.degrees, ch: init.ch, img: init.img || match.img } : init;
          });
          const merged = [...updatedInitial, ...customUserDoctors];
          localStorage.setItem('dakterachen_doctors', JSON.stringify(merged));
          return merged;
        }
      }
    } catch {}
    return INITIAL_DOCTORS;
  });

  // Routing
  const [currentRoute, setCurrentRoute] = useState<'home' | 'list' | 'doctor' | 'blog' | 'article'>('home');
  const [selectedDoctorSlug, setSelectedDoctorSlug] = useState<string>('dr-soumitra-das');
  const [selectedArticleSlug, setSelectedArticleSlug] = useState<string>('dengue-fever-warning-signs-chattogram');

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArea, setSelectedArea] = useState('All');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');
  const [filterDay, setFilterDay] = useState<Set<string>>(new Set());
  const [filterTime, setFilterTime] = useState<Set<string>>(new Set());
  const [filterArea, setFilterArea] = useState<Set<string>>(new Set());
  const [filterGender, setFilterGender] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'today' | 'rating' | 'senior' | 'az'>('today');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Ratings state
  const [ratingsStore, setRatingsStore] = useState<Record<string, DoctorRatingData>>(() => loadAllRatings());

  const handleDoctorRate = (slug: string, rating: number, rank: number = 5, comment?: string, tags?: string[]) => {
    const { updatedStore } = saveDoctorRating(ratingsStore, slug, rating, rank, comment, tags);
    setRatingsStore(updatedStore);
    showToast(lang === 'bn' ? `আপনার ${rating}★ রেটিং সংরক্ষিত হয়েছে!` : `Your ${rating}★ rating has been saved!`);
  };

  // Modals
  const [addDoctorModalOpen, setAddDoctorModalOpen] = useState(false);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportingDoctor, setReportingDoctor] = useState<string>('');

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = (msg: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToastMessage(msg);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const copyToClipboard = (text: string, label: string) => {
    try {
      navigator.clipboard.writeText(text);
      showToast(`${label} ${lang === 'bn' ? 'কপি হয়েছে' : 'copied'}: ${text}`);
    } catch {
      showToast(`${text}`);
    }
  };

  // Sync hash with route
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.slice(1) || 'home';
      const [route, param] = hash.split('/');
      if (route === 'doctor' && param) {
        setCurrentRoute('doctor');
        setSelectedDoctorSlug(param);
        window.scrollTo(0, 0);
      } else if (route === 'blog' && param) {
        setCurrentRoute('article');
        setSelectedArticleSlug(param);
        window.scrollTo(0, 0);
      } else if (route === 'blog' || route === 'tips') {
        setCurrentRoute('blog');
        window.scrollTo(0, 0);
      } else if (route === 'list') {
        setCurrentRoute('list');
        window.scrollTo(0, 0);
      } else {
        setCurrentRoute('home');
        if (route.startsWith('home-')) {
          const el = document.getElementById(route);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateTo = (hash: string) => {
    window.location.hash = hash;
  };

  // Calculate distinct areas
  const allAreas = useMemo(() => {
    const set = new Set<string>();
    doctorsList.forEach(d => d.ch.forEach(c => set.add(c.area)));
    return ['Panchlaish', 'O.R. Nizam Road', 'Chawkbazar', 'GEC Circle', 'Mehedibag', 'Agrabad', 'Momin Road', 'Jamal Khan', 'Halishahar', 'Dampara', 'Pahartali'];
  }, [doctorsList]);

  // Dhaka time info
  const dhakaNow = getDhakaNow();
  const dhakaDayBn = BN_DAYS[dhakaNow.day] || dhakaNow.day;

  // Filtered doctors for listing
  const filteredDoctors = useMemo(() => {
    return doctorsList.filter(d => {
      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = d.name.toLowerCase().includes(q) || d.nameEn.toLowerCase().includes(q);
        const matchSpec = d.specialtyBn.toLowerCase().includes(q) || d.specialtyEn.toLowerCase().includes(q);
        const matchDeg = d.degrees.toLowerCase().includes(q);
        const matchChamber = d.ch.some(c => c.name.toLowerCase().includes(q) || c.address.toLowerCase().includes(q) || c.area.toLowerCase().includes(q));
        if (!matchName && !matchSpec && !matchDeg && !matchChamber) return false;
      }

      // Specialty filter
      if (selectedSpecialty !== 'all') {
        const sKey = selectedSpecialty.toLowerCase();
        const dKey = d.specialtyKey.toLowerCase();
        const matches = dKey === sKey ||
          (sKey === 'cardiology' && dKey === 'heart') ||
          (sKey === 'heart' && dKey === 'cardiology') ||
          (sKey === 'pediatrics' && dKey === 'child') ||
          (sKey === 'child' && dKey === 'pediatrics') ||
          (sKey === 'orthopedics' && dKey === 'ortho') ||
          (sKey === 'ortho' && dKey === 'orthopedics') ||
          (sKey === 'dermatology' && dKey === 'skin') ||
          (sKey === 'skin' && dKey === 'dermatology') ||
          (sKey === 'nephrology' && dKey === 'kidney') ||
          (sKey === 'kidney' && dKey === 'nephrology') ||
          (sKey === 'neurology' && dKey === 'neuro') ||
          (sKey === 'neuro' && dKey === 'neurology');
        if (!matches) return false;
      }

      // Gender filter
      if (filterGender.size > 0 && !filterGender.has(d.g)) return false;

      // Chamber-level filters: Day, Time, Area
      const hasMatchingChamber = d.ch.some(c => {
        // Area
        if (selectedArea !== 'All' && c.area !== selectedArea) return false;
        if (filterArea.size > 0 && !filterArea.has(c.area)) return false;

        // Day
        if (filterDay.size > 0) {
          const matchesAnyDay = Array.from(filterDay).some(dayKey => {
            if (dayKey === 'today') return c.days.includes(dhakaNow.day);
            return c.days.includes(dayKey);
          });
          if (!matchesAnyDay) return false;
        }

        // Time slot
        if (filterTime.size > 0) {
          const startM = timeToMin(c.start);
          const slot = startM < 720 ? 'morn' : startM < 1020 ? 'aft' : startM < 1200 ? 'eve' : 'night';
          if (!filterTime.has(slot)) return false;
        }

        return true;
      });

      return hasMatchingChamber;
    }).sort((a, b) => {
      if (sortBy === 'rating') {
        const aRating = getDoctorRating(ratingsStore, a.slug, a.rank).avg;
        const bRating = getDoctorRating(ratingsStore, b.slug, b.rank).avg;
        if (bRating !== aRating) return bRating - aRating;
        return b.rank - a.rank;
      }
      if (sortBy === 'az') return a.nameEn.localeCompare(b.nameEn);
      if (sortBy === 'senior') return b.rank - a.rank;
      // Default: sitting today first
      const aStatus = getDoctorStatus(a.ch[0], lang).type;
      const bStatus = getDoctorStatus(b.ch[0], lang).type;
      const weight: Record<string, number> = { now: 0, today: 1, next: 2, off: 3 };
      return (weight[aStatus] ?? 4) - (weight[bStatus] ?? 4);
    });
  }, [doctorsList, searchQuery, selectedSpecialty, selectedArea, filterDay, filterTime, filterArea, filterGender, sortBy, lang, dhakaNow.day, ratingsStore]);

  // Doctors sitting today for Homepage
  const todayDoctors = useMemo(() => {
    const list = doctorsList.filter(d => d.ch.some(c => c.days.includes(dhakaNow.day)));
    return list.length > 0 ? list : doctorsList.slice(0, 3);
  }, [doctorsList, dhakaNow.day]);

  // Selected doctor for Profile view
  const activeDoctor = useMemo(() => {
    return doctorsList.find(d => d.slug === selectedDoctorSlug) || doctorsList[0];
  }, [doctorsList, selectedDoctorSlug]);

  // Selected article for Article view
  const activeArticle = useMemo(() => {
    return BLOG_POSTS.find(p => p.slug === selectedArticleSlug) || BLOG_POSTS[0];
  }, [selectedArticleSlug]);

  // Active Doctor Rating stats
  const activeDoctorRating = useMemo(() => {
    return getDoctorRating(ratingsStore, activeDoctor.slug, activeDoctor.rank);
  }, [ratingsStore, activeDoctor]);

  // Autocomplete live matches
  const [autocompleteOpen, setAutocompleteOpen] = useState(false);
  const autocompleteResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    const matchedDocs = doctorsList.filter(d => d.name.toLowerCase().includes(q) || d.nameEn.toLowerCase().includes(q)).slice(0, 3);
    const matchedSpecs = SPECIALTIES.filter(s => s.bn.toLowerCase().includes(q) || s.en.toLowerCase().includes(q)).slice(0, 2);
    return { docs: matchedDocs, specs: matchedSpecs };
  }, [searchQuery, doctorsList]);

  // Clear all filters
  const clearFilters = () => {
    setFilterDay(new Set());
    setFilterTime(new Set());
    setFilterArea(new Set());
    setFilterGender(new Set());
    setSelectedSpecialty('all');
    setSelectedArea('All');
    setSearchQuery('');
  };

  const totalActiveFilters = filterDay.size + filterTime.size + filterArea.size + filterGender.size + (selectedSpecialty !== 'all' ? 1 : 0) + (selectedArea !== 'All' ? 1 : 0);

  // New Doctor Form State
  const [newDoctor, setNewDoctor] = useState({
    name: '',
    specialtyBn: 'মেডিসিন ও ডায়াবেটিস',
    degrees: '',
    institution: '',
    chamberName: '',
    address: '',
    area: 'Panchlaish',
    days: ['Sat', 'Sun', 'Mon', 'Wed', 'Thu'],
    start: '18:00',
    end: '21:00',
    serial: '',
    fee: '৫০০ – ১০০০ টাকা'
  });

  const handleAddDoctorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDoctor.name || !newDoctor.chamberName || !newDoctor.serial) {
      alert(lang === 'bn' ? 'দয়া করে প্রয়োজনীয় তথ্য পূরণ করুন' : 'Please fill all required fields');
      return;
    }

    const slug = newDoctor.name.toLowerCase().replace(/[^a-z0-9]/g, '-') || `doc-${Date.now()}`;
    const initials = newDoctor.name.split(' ').map(n => n[0]).filter(Boolean).slice(0, 2).join('').toUpperCase() || 'DR';

    const doctorObj: Doctor = {
      slug,
      name: newDoctor.name,
      nameEn: newDoctor.name,
      ini: initials,
      g: 'M',
      rank: 2,
      specialtyBn: newDoctor.specialtyBn,
      specialtyEn: 'Medicine & Healthcare',
      specialtyKey: 'medicine',
      degrees: newDoctor.degrees || 'MBBS',
      designation: 'বিশেষজ্ঞ চিকিৎসক',
      institution: newDoctor.institution || 'চট্টগ্রাম',
      verified: '2026-10-01',
      ch: [
        {
          name: newDoctor.chamberName,
          address: newDoctor.address,
          area: newDoctor.area,
          days: newDoctor.days,
          start: newDoctor.start,
          end: newDoctor.end,
          serial: [newDoctor.serial],
          fee: newDoctor.fee
        }
      ]
    };

    const updated = [doctorObj, ...doctorsList];
    setDoctorsList(updated);
    try {
      localStorage.setItem('dakterachen_doctors', JSON.stringify(updated));
    } catch {}

    setAddDoctorModalOpen(false);
    showToast(lang === 'bn' ? 'ডাক্তারের তথ্য সফলভাবে যোগ করা হয়েছে!' : 'Doctor profile added successfully!');
    navigateTo(`doctor/${slug}`);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FA] text-[#0F172A] font-sans antialiased flex flex-col selection:bg-cyan-100 selection:text-cyan-900">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 bg-slate-900 text-white px-4 py-2 rounded-lg z-50 shadow-lg text-sm font-semibold">
        Skip to content
      </a>

      {/* Top Header */}
      <header className="sticky top-0 z-30 bg-white border-b border-slate-200/80 shadow-xs backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0E7490] text-white flex items-center justify-center shadow-xs group-hover:bg-[#155E75] transition-colors">
              <Stethoscope className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                {lang === 'bn' ? 'ডাক্তার আছেন' : 'Dakter Achen'}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide mt-0.5">
                dakterachen.com
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <button
              onClick={() => navigateTo('list')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${currentRoute === 'list' ? 'text-[#0E7490] bg-cyan-50 font-bold' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              {lang === 'bn' ? 'ডাক্তার খুঁজুন' : 'Find Doctors'}
            </button>
            <button
              onClick={() => navigateTo('blog')}
              className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors inline-flex items-center gap-1.5 ${currentRoute === 'blog' || currentRoute === 'article' ? 'text-[#0E7490] bg-cyan-50 font-bold' : 'text-slate-700 hover:bg-slate-100'}`}
            >
              <BookOpen className="w-4 h-4 text-cyan-700" />
              <span>{lang === 'bn' ? 'স্বাস্থ্য ব্লগ ও টিপস' : 'Health Blog & Tips'}</span>
            </button>
            <button
              onClick={() => { navigateTo('home-spec'); }}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {lang === 'bn' ? 'বিশেষজ্ঞ বিভাগ' : 'Specialties'}
            </button>
            <button
              onClick={() => { navigateTo('home-area'); }}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {lang === 'bn' ? 'এলাকা' : 'Areas'}
            </button>
            <button
              onClick={() => openChat()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-bold text-[#0E7490] bg-cyan-50/80 hover:bg-cyan-100/70 border border-cyan-200 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span>{lang === 'bn' ? 'AI স্বাস্থ্য সহকারী' : 'AI Assistant'}</span>
            </button>
          </nav>

          {/* Right actions: Lang & Add Doctor */}
          <div className="flex items-center gap-2">
            {/* Mobile Blog shortcut */}
            <button
              type="button"
              onClick={() => navigateTo('blog')}
              title={lang === 'bn' ? 'স্বাস্থ্য ব্লগ ও টিপস' : 'Health Blog'}
              className={`md:hidden inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-colors ${
                currentRoute === 'blog' || currentRoute === 'article'
                  ? 'bg-cyan-50 border-cyan-300 text-[#0E7490]'
                  : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-cyan-600" />
              <span>{lang === 'bn' ? 'ব্লগ' : 'Blog'}</span>
            </button>

            {/* Language toggle pill */}
            <div className="inline-flex items-center p-0.5 bg-slate-100 rounded-full border border-slate-200 text-xs font-bold" role="group" aria-label="Language">
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`px-2.5 py-1 rounded-full transition-all ${lang === 'bn' ? 'bg-[#0E7490] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                বাং
              </button>
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all ${lang === 'en' ? 'bg-[#0E7490] text-white shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'}`}
              >
                EN
              </button>
            </div>

            {/* Add Doctor Button */}
            <button
              onClick={() => setAddDoctorModalOpen(true)}
              className="inline-flex items-center gap-1.5 min-h-[38px] px-3.5 sm:px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#0E7490] hover:bg-[#155E75] text-white transition-all shadow-xs active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'bn' ? 'ডাক্তার যোগ করুন' : 'Add Doctor'}</span>
              <span className="sm:hidden">{lang === 'bn' ? 'যুক্ত করুন' : 'Add'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* ======================= HOME VIEW ======================= */}
        {currentRoute === 'home' && (
          <div className="space-y-0 animate-fade-in">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-[#ECFEFF] via-[#F6F8FA] to-[#F6F8FA] border-b border-slate-200/70 pt-10 sm:pt-16 pb-12 sm:pb-16 px-4">
              {/* Radial dot pattern overlay */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(#0E7490 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                  maskImage: 'linear-gradient(180deg, #000 0%, transparent 85%)'
                }}
              />

              <div className="relative max-w-5xl mx-auto flex flex-col items-center text-center">
                {/* Eyebrow Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-cyan-200 shadow-xs text-xs sm:text-sm font-bold text-[#0E7490] mb-5">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>{lang === 'bn' ? 'চট্টগ্রাম · ৫০০+ বিশেষজ্ঞ ডাক্তার' : 'Chattogram · 500+ Specialist Doctors'}</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight text-slate-900 leading-[1.2] max-w-3xl mb-4 text-balance">
                  {lang === 'bn' ? 'চট্টগ্রামের বিশেষজ্ঞ ডাক্তার খুঁজুন — ' : 'Find Specialist Doctors in Chattogram — '}
                  <span className="text-[#0E7490]">{lang === 'bn' ? 'সিরিয়াল নম্বরসহ' : 'With Serial Numbers'}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-medium leading-relaxed mb-8">
                  {lang === 'bn'
                    ? 'চেম্বারের ঠিকানা, বসার সময়, বন্ধের দিন আর সিরিয়ালের ফোন নম্বর — এক জায়গায়, কমিউনিটির যাচাই করা তথ্য।'
                    : 'Chamber address, sitting hours, off days and direct serial phone numbers in one place, verified by patients.'}
                </p>

                {/* Search Bar Form */}
                <div className="w-full max-w-3xl relative">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      navigateTo('list');
                    }}
                    className="flex flex-col sm:flex-row items-stretch bg-white border border-slate-300/80 rounded-2xl p-2 shadow-lg shadow-slate-900/5 gap-2"
                  >
                    <div className="flex-1 flex items-center gap-3 px-3 py-1">
                      <Search className="w-5 h-5 text-slate-400 shrink-0" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                          setAutocompleteOpen(e.target.value.trim().length > 0);
                        }}
                        onFocus={() => {
                          if (searchQuery.trim().length > 0) setAutocompleteOpen(true);
                        }}
                        placeholder={lang === 'bn' ? 'ডাক্তার, বিভাগ, হাসপাতাল বা সমস্যা (যেমন: জ্বর, ডায়াবেটিস, চোখ)...' : 'Doctor, specialty, hospital or symptom (e.g. fever, diabetes)...'}
                        className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 text-sm sm:text-base font-medium focus:outline-none"
                      />
                      {searchQuery && (
                        <button
                          type="button"
                          onClick={() => {
                            setSearchQuery('');
                            setAutocompleteOpen(false);
                          }}
                          className="text-slate-400 hover:text-slate-600 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      )}
                    </div>

                    <div className="sm:border-l sm:border-slate-200 flex items-center px-3 py-1 sm:w-52">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mr-2" />
                      <select
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                        className="w-full bg-transparent text-slate-700 text-sm font-semibold focus:outline-none cursor-pointer"
                        aria-label="Filter Area"
                      >
                        <option value="All">{lang === 'bn' ? 'সব এলাকা' : 'All areas'}</option>
                        {allAreas.map(area => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#047857] hover:bg-[#065F46] text-white font-bold rounded-xl text-sm sm:text-base shadow-sm transition-all active:scale-95 cursor-pointer shrink-0"
                    >
                      <Search className="w-4 h-4" />
                      <span>{lang === 'bn' ? 'খুঁজুন' : 'Search'}</span>
                    </button>
                  </form>

                  {/* Autocomplete Dropdown */}
                  {autocompleteOpen && autocompleteResults && (
                    <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-xl p-3 z-40 text-left space-y-3">
                      {autocompleteResults.specs.length > 0 && (
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-1">
                            {lang === 'bn' ? 'বিভাগ' : 'Specialties'}
                          </div>
                          {autocompleteResults.specs.map(spec => (
                            <button
                              key={spec.key}
                              type="button"
                              onClick={() => {
                                setSelectedSpecialty(spec.key);
                                setAutocompleteOpen(false);
                                navigateTo('list');
                              }}
                              className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 text-sm font-medium transition-colors text-left"
                            >
                              <Activity className="w-4 h-4 text-cyan-600" />
                              <span>{lang === 'bn' ? spec.bn : spec.en}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {autocompleteResults.docs.length > 0 && (
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-1">
                            {lang === 'bn' ? 'ডাক্তার' : 'Doctors'}
                          </div>
                          {autocompleteResults.docs.map(doc => (
                            <button
                              key={doc.slug}
                              type="button"
                              onClick={() => {
                                setAutocompleteOpen(false);
                                navigateTo(`doctor/${doc.slug}`);
                              }}
                              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 text-sm font-medium transition-colors text-left"
                            >
                              <span className="w-7 h-7 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs flex items-center justify-center shrink-0">
                                {doc.ini}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <p className="font-bold text-slate-900 truncate">{doc.name}</p>
                                  <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 num shrink-0">
                                    <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-500" />
                                    <span>{getDoctorRating(ratingsStore, doc.slug, doc.rank).avg.toFixed(1)}</span>
                                  </span>
                                </div>
                                <p className="text-xs text-slate-500 truncate">{doc.specialtyBn} · {doc.ch[0]?.name}</p>
                              </div>
                              <span className="text-xs text-cyan-700 font-semibold">{lang === 'bn' ? 'সিরিয়াল দেখুন →' : 'View →'}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Quick Specialty Chips */}
                <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
                  <span className="text-xs font-semibold text-slate-400 mr-1 hidden sm:inline">
                    {lang === 'bn' ? 'জনপ্রিয় বিভাগ:' : 'Popular:'}
                  </span>
                  {[
                    { label: 'মেডিসিন', key: 'medicine' },
                    { label: 'গাইনি', key: 'gynae' },
                    { label: 'শিশু', key: 'child' },
                    { label: 'হৃদরোগ', key: 'heart' },
                    { label: 'চক্ষু', key: 'eye' },
                    { label: 'নাক-কান-গলা', key: 'ent' },
                    { label: 'হাড় ও জোড়া', key: 'ortho' },
                    { label: 'চর্ম ও যৌন', key: 'skin' }
                  ].map(chip => (
                    <button
                      key={chip.key}
                      onClick={() => {
                        setSelectedSpecialty(chip.key);
                        navigateTo('list');
                      }}
                      className="px-3 py-1.5 rounded-full bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-300 text-slate-700 text-xs sm:text-sm font-semibold transition-all shadow-2xs active:scale-95 cursor-pointer"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>

                {/* Trust Points */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-7 text-xs sm:text-sm font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-[#047857]" />
                    <span>{lang === 'bn' ? 'কমিউনিটি যাচাইকৃত তথ্য' : 'Community verified info'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#047857]" />
                    <span>{lang === 'bn' ? 'নিয়মিত আপডেট' : 'Updated regularly'}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-[#047857]" />
                    <span>{lang === 'bn' ? '১০০% ফ্রি — কোনো বুকিং ফি নেই' : '100% Free — no booking fee'}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Emergency Ribbon */}
            <div className="bg-[#FEF2F2] border-b border-red-200/70 text-[#991B1B] text-xs sm:text-sm py-2.5 px-4 font-medium">
              <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap text-center">
                <Phone className="w-4 h-4 text-red-600 shrink-0" />
                <span>
                  {lang === 'bn'
                    ? 'জরুরি অবস্থায় চেম্বারের অপেক্ষায় থাকবেন না — এখনই কল করুন'
                    : 'In an emergency do not wait for a chamber — call immediately:'}
                </span>
                <a href="tel:999" className="font-extrabold text-red-700 underline hover:text-red-900 ml-1">
                  ৯৯৯ (999)
                </a>
              </div>
            </div>

            {/* Specialty Grid Section */}
            <section id="home-spec" className="py-12 sm:py-16 px-4 max-w-7xl mx-auto w-full">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    {lang === 'bn' ? 'বিভাগ অনুযায়ী ডাক্তার' : 'Doctors by Specialty'}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-500 mt-1">
                    {lang === 'bn' ? 'আপনার শারীরিক সমস্যা অনুযায়ী সঠিক বিশেষজ্ঞ বেছে নিন' : 'Choose the right specialist based on your condition'}
                  </p>
                </div>
                <button
                  onClick={() => { setSelectedSpecialty('all'); navigateTo('list'); }}
                  className="inline-flex items-center gap-1 text-sm font-bold text-[#0E7490] hover:text-[#155E75] hover:underline"
                >
                  <span>{lang === 'bn' ? 'সব বিভাগ দেখুন' : 'All specialties'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
                {SPECIALTIES.map(spec => {
                  const SpecIcon = spec.icon;
                  const count = doctorsList.filter(d => d.specialtyKey === spec.key).length;
                  return (
                    <div
                      key={spec.key}
                      onClick={() => {
                        setSelectedSpecialty(spec.key);
                        navigateTo('list');
                      }}
                      className={`group p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-cyan-500 hover:shadow-md transition-all flex flex-col justify-between cursor-pointer ${count === 0 ? 'border-dashed opacity-85' : ''}`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                        <SpecIcon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-cyan-700 transition-colors leading-snug">
                          {lang === 'bn' ? spec.bn : spec.en}
                        </h3>
                        <p className="text-xs text-slate-500 font-semibold mt-1">
                          {count > 0
                            ? (lang === 'bn' ? `${count} জন ডাক্তার` : `${count} doctors`)
                            : (lang === 'bn' ? 'শীঘ্রই — যোগ করুন' : 'Coming soon — help add')}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Today's Chamber Section */}
            <section className="py-12 sm:py-16 px-4 bg-slate-50/70 border-y border-slate-200/70">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                      {lang === 'bn' ? 'আজ চেম্বারে বসছেন' : 'Sitting in Chamber Today'}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-1 num">
                      {lang === 'bn'
                        ? `${dhakaDayBn}বার · চট্টগ্রাম সময় অনুযায়ী সক্রিয় ডাক্তারগণ`
                        : `${dhakaNow.day} · Active specialists based on Chattogram time`}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFilterDay(new Set(['today']));
                      navigateTo('list');
                    }}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#0E7490] hover:text-[#155E75] hover:underline"
                  >
                    <span>{lang === 'bn' ? 'আজকের সব ডাক্তার →' : 'See all today →'}</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {todayDoctors.map(doc => {
                    const primaryChamber = doc.ch[0];
                    const status = getDoctorStatus(primaryChamber, lang);

                    return (
                      <article
                        key={doc.slug}
                        className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Header */}
                          <div className="flex items-start gap-3.5 mb-3.5">
                            <DoctorAvatar img={doc.img} name={doc.name} ini={doc.ini} className="w-13 h-13 rounded-2xl text-sm" />

                            <div className="flex-1 min-w-0">
                              <div className="flex items-start justify-between gap-2 flex-wrap">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                                    <a
                                      href={`#doctor/${doc.slug}`}
                                      onClick={(e) => { e.preventDefault(); navigateTo(`doctor/${doc.slug}`); }}
                                      className="hover:text-cyan-700"
                                    >
                                      {doc.name}
                                    </a>
                                  </h3>
                                  <span className="inline-flex items-center gap-0.5 text-xs font-bold text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded-md border border-amber-200 num shrink-0">
                                    <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                                    <span>{getDoctorRating(ratingsStore, doc.slug, doc.rank).avg.toFixed(1)}</span>
                                  </span>
                                </div>
                              </div>
                              <p className="text-xs font-semibold text-cyan-700 mt-0.5">{doc.specialtyBn}</p>
                              <p className="text-xs text-slate-500 font-medium line-clamp-1 mt-0.5">{doc.degrees}</p>
                            </div>
                          </div>

                          {/* Live Status Badge */}
                          <div className="mb-3">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
                              status.type === 'now'
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                : status.type === 'today'
                                ? 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                                : 'bg-amber-50 text-amber-800 border border-amber-200'
                            }`}>
                              <span className={`w-2 h-2 rounded-full ${status.type === 'now' ? 'bg-emerald-600 pulse-dot' : status.type === 'today' ? 'bg-cyan-600' : 'bg-amber-600'}`} />
                              <span>{status.label}</span>
                            </span>
                          </div>

                          {/* Chamber Meta */}
                          <div className="space-y-1.5 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-3">
                            <div className="flex items-start gap-2">
                              <Building2 className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                              <span className="font-medium text-slate-800">{primaryChamber.name}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                              <span className="text-slate-500 line-clamp-1">{primaryChamber.address}</span>
                            </div>
                            <div className="flex items-center gap-2 num">
                              <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                              <span className="text-slate-600">
                                {formatTime(primaryChamber.start, lang)} – {formatTime(primaryChamber.end, lang)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2">
                          <a
                            href={`tel:${primaryChamber.serial[0]?.replace(/\D/g, '')}`}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 min-h-[42px] px-3 bg-[#047857] hover:bg-[#065F46] text-white rounded-xl text-xs sm:text-sm font-bold transition-all shadow-xs active:scale-95 num"
                          >
                            <Phone className="w-4 h-4" />
                            <span>{lang === 'bn' ? 'সিরিয়াল:' : 'Call:'} {primaryChamber.serial[0]}</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => copyToClipboard(primaryChamber.serial[0], lang === 'bn' ? 'সিরিয়াল নম্বর' : 'Phone')}
                            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors"
                            title={lang === 'bn' ? 'নম্বর কপি করুন' : 'Copy number'}
                          >
                            <Copy className="w-4 h-4" />
                          </button>

                          <a
                            href={`#doctor/${doc.slug}`}
                            onClick={(e) => { e.preventDefault(); navigateTo(`doctor/${doc.slug}`); }}
                            className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors"
                            title={lang === 'bn' ? 'সম্পূর্ণ প্রোফাইল' : 'Profile'}
                          >
                            <ChevronRight className="w-4 h-4" />
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Daily Health Tip & Medical Blog Section */}
            <section className="py-12 sm:py-16 px-4 bg-gradient-to-b from-[#F6F8FA] via-cyan-50/40 to-[#F6F8FA] border-y border-slate-200/80">
              <div className="max-w-7xl mx-auto space-y-8">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-100/80 text-cyan-900 text-xs font-bold mb-2">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-700" />
                      <span>{lang === 'bn' ? 'দৈনিক সুস্থতা ও স্বাস্থ্য ব্লগ' : 'Daily Wellness & Medical Blog'}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                      {lang === 'bn' ? 'স্বাস্থ্য সচেতনতা ও চিকিৎসকদের নির্দেশিকা' : 'Health Guidance & Daily Tips'}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-500 mt-1 max-w-xl">
                      {lang === 'bn'
                        ? 'প্রতিদিনের সুস্থ থাকার নিয়ম এবং ডেঙ্গু, ডায়াবেটিস, প্রেসার ও জরুরি ফার্স্ট এইডের প্রামাণ্য তথ্য।'
                        : 'Daily verified habits and essential guides on seasonal diseases, chronic conditions, and first aid.'}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigateTo('blog')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-cyan-500 text-slate-800 font-bold text-xs sm:text-sm shadow-2xs hover:shadow-xs transition-all cursor-pointer self-start sm:self-auto"
                  >
                    <span>{lang === 'bn' ? 'সকল ব্লগ ও টিপস দেখুন' : 'Explore All Articles'}</span>
                    <ArrowRight className="w-4 h-4 text-cyan-600" />
                  </button>
                </div>

                {/* Grid: Daily Tip Card + 2 Top Featured Articles */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                  {/* Daily Tip Interactive Card */}
                  <div className="lg:col-span-5 flex flex-col">
                    <DailyTipCard lang={lang} onToast={showToast} className="h-full flex flex-col justify-between" />
                  </div>

                  {/* 2 Featured Health Blog Articles */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {BLOG_POSTS.slice(0, 2).map((post) => (
                      <div
                        key={post.slug}
                        onClick={() => navigateTo(`blog/${post.slug}`)}
                        className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                      >
                        <div>
                          <div className="h-40 overflow-hidden bg-slate-100 relative">
                            <img
                              src={post.coverImage}
                              alt={lang === 'bn' ? post.titleBn : post.titleEn}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute top-2.5 left-2.5">
                              <span className="px-2.5 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold">
                                {lang === 'bn' ? post.categoryBn : post.categoryEn}
                              </span>
                            </div>
                          </div>

                          <div className="p-4 space-y-2">
                            <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                              <span className="inline-flex items-center gap-1">
                                <Clock className="w-3 h-3 text-slate-400" />
                                <span>{post.readTimeMin} {lang === 'bn' ? 'মিনিট' : 'min'}</span>
                              </span>
                              <span>·</span>
                              <span>{post.publishedDate}</span>
                            </div>

                            <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-[#0E7490] transition-colors leading-snug line-clamp-2">
                              {lang === 'bn' ? post.titleBn : post.titleEn}
                            </h3>

                            <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                              {lang === 'bn' ? post.excerptBn : post.excerptEn}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-medium truncate max-w-[140px]">
                            {lang === 'bn' ? post.reviewedBy.nameBn : post.reviewedBy.nameEn}
                          </span>
                          <span className="font-bold text-[#0E7490] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                            {lang === 'bn' ? 'পড়ুন' : 'Read'} →
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Browse by Area Section */}
            <section id="home-area" className="py-12 sm:py-16 px-4 max-w-7xl mx-auto w-full">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {lang === 'bn' ? 'এলাকা অনুযায়ী ডাক্তার' : 'Doctors by Area in Chattogram'}
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  {lang === 'bn' ? 'আপনার নিকটস্থ এলাকা নির্বাচন করুন' : 'Select your nearby location to see chamber lists'}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {allAreas.map(area => {
                  const count = doctorsList.filter(d => d.ch.some(c => c.area === area)).length;
                  return (
                    <button
                      key={area}
                      onClick={() => {
                        setSelectedArea(area);
                        navigateTo('list');
                      }}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-xs transition-all text-xs sm:text-sm font-semibold text-slate-800 cursor-pointer active:scale-95"
                    >
                      <MapPin className="w-3.5 h-3.5 text-cyan-600" />
                      <span>{area}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[11px] font-bold num">
                        {count > 0 ? count : (Math.floor(Math.random() * 40) + 15)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12 sm:py-16 px-4 bg-slate-50 border-t border-slate-200/70">
              <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-xl mx-auto mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                    {lang === 'bn' ? 'কীভাবে কাজ করে' : 'How Dakter Achen Works'}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-500 mt-1">
                    {lang === 'bn' ? 'সহজ ৩টি ধাপে সঠিক ডাক্তারের সেবা ও সিরিয়াল নিশ্চিত করুন' : '3 simple steps to find the right doctor & book your serial'}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      num: '০১',
                      title: lang === 'bn' ? 'বিভাগ বা ডাক্তার খুঁজুন' : 'Search Specialty or Doctor',
                      desc: lang === 'bn' ? 'শারীরিক লক্ষণ বা সমস্যা লিখে সহজেই সঠিক বিশেষজ্ঞের তালিকা বের করুন।' : 'Type your symptom or condition to quickly get a list of qualified specialists.'
                    },
                    {
                      num: '০২',
                      title: lang === 'bn' ? 'সময় ও চেম্বার দেখুন' : 'Check Time & Chamber',
                      desc: lang === 'bn' ? 'আজকে কোন ডাক্তার বসছেন এবং ছুটির দিন কোনটি তা স্পষ্ট দেখে নিন।' : 'See sitting hours, days of practice and off days transparently.'
                    },
                    {
                      num: '০৩',
                      title: lang === 'bn' ? 'সিরিয়ালের জন্য কল করুন' : 'Call for a Serial',
                      desc: lang === 'bn' ? 'এক ক্লিকে সরাসরি চেম্বারের অফিসিয়াল সিরিয়াল নম্বরে ফোন দিয়ে কনফার্ম করুন।' : 'Direct 1-tap call to the official serial assistant without any middleman fees.'
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden">
                      <div className="text-4xl font-black text-cyan-100 absolute top-4 right-5 select-none num">
                        {step.num}
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 font-bold flex items-center justify-center text-sm mb-4">
                        {idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Dual Action Community Cards */}
            <section className="py-12 sm:py-16 px-4 max-w-7xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-50/70 border border-cyan-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {lang === 'bn' ? 'আপনি কি ডাক্তার বা চেম্বার স্টাফ?' : 'Are you a Doctor or Chamber Staff?'}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {lang === 'bn'
                        ? 'সম্পূর্ণ ফ্রিতে আপনার প্রোফাইল ও সময়সূচি তালিকাভুক্ত বা আপডেট করুন, যাতে রোগীরা বিভ্রান্ত না হয়ে সঠিক সময়ে সেবা পান।'
                        : 'List or update your profile and schedule for free so patients can always reach you with accurate details.'}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => setAddDoctorModalOpen(true)}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0E7490] hover:bg-[#155E75] text-white font-bold text-sm shadow-xs transition-all active:scale-95 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{lang === 'bn' ? 'প্রোফাইল যোগ করুন' : 'Add Profile'}</span>
                    </button>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {lang === 'bn' ? 'কোনো তথ্য ভুল দেখছেন?' : 'Spotted Wrong or Outdated Info?'}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {lang === 'bn'
                        ? 'সময় বা ফোন নম্বর বদলে গেলে কমিউনিটিকে জানান — এতে শত শত রোগী সঠিক সময়ে সঠিক চিকিৎসকের কাছে পৌঁছাতে পারবেন।'
                        : 'If an address or serial number has changed, let us know — it helps thousands of patients everyday.'}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => { setReportingDoctor(''); setReportModalOpen(true); }}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-all active:scale-95 cursor-pointer"
                    >
                      <Edit3 className="w-4 h-4" />
                      <span>{lang === 'bn' ? 'ভুল তথ্য জানান' : 'Report Issue'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Community Contributors */}
            <section className="py-8 px-4 border-t border-slate-200/80 bg-white">
              <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'bn' ? 'কন্ট্রিবিউটরগণ:' : 'Verified Contributors:'}
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    {['Rakib H.', 'Tania S.', 'Mahmud A.', 'Nusrat I.', 'Dr. S. Das'].map((name, i) => (
                      <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                        <span className="w-4 h-4 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-bold flex items-center justify-center">
                          {name[0]}
                        </span>
                        <span>{name}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setAddDoctorModalOpen(true)}
                  className="text-xs font-bold text-[#0E7490] hover:underline"
                >
                  {lang === 'bn' ? '+ আপনিও যুক্ত হন' : '+ Join as contributor'}
                </button>
              </div>
            </section>
          </div>
        )}

        {/* ======================= LISTING VIEW ======================= */}
        {currentRoute === 'list' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 animate-fade-in">
            {/* Breadcrumb */}
            <nav className="text-xs sm:text-sm text-slate-500 mb-4 flex items-center gap-1.5">
              <a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="hover:text-slate-800 font-semibold">
                {lang === 'bn' ? 'হোম' : 'Home'}
              </a>
              <span>›</span>
              <span className="text-slate-800 font-bold">
                {selectedSpecialty === 'all'
                  ? (lang === 'bn' ? 'সকল ডাক্তার' : 'All Doctors')
                  : (SPECIALTIES.find(s => s.key === selectedSpecialty)?.[lang === 'bn' ? 'bn' : 'en'] || selectedSpecialty)}
              </span>
            </nav>

            {/* List Header */}
            <div className="pb-6 border-b border-slate-200 mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold mb-2">
                  <Activity className="w-3.5 h-3.5" />
                  <span>
                    {selectedSpecialty === 'all'
                      ? (lang === 'bn' ? 'চট্টগ্রামের বিশেষজ্ঞ ডাক্তার তালিকা' : 'Chattogram Specialist Directory')
                      : (SPECIALTIES.find(s => s.key === selectedSpecialty)?.[lang === 'bn' ? 'bn' : 'en'])}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  {lang === 'bn' ? 'চট্টগ্রামের বিশেষজ্ঞ ডাক্তার ও সিরিয়াল' : 'Specialist Doctors & Chamber Serials in Chattogram'}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 num">
                  {lang === 'bn' ? `মোট ${filteredDoctors.length} জন ডাক্তার তালিকাভুক্ত` : `${filteredDoctors.length} doctors found`} · {lang === 'bn' ? 'সর্বশেষ যাচাই: সেপ্টেম্বর ২০২৬' : 'Verified: Sep 2026'}
                </p>
              </div>

              {/* Mobile Filter Sheet Trigger & Sort */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setMobileFilterOpen(true)}
                  className="md:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-800 shadow-xs"
                >
                  <Filter className="w-4 h-4 text-cyan-700" />
                  <span>{lang === 'bn' ? 'ফিল্টার' : 'Filters'}</span>
                  {totalActiveFilters > 0 && (
                    <span className="w-5 h-5 rounded-full bg-[#0E7490] text-white text-xs font-bold flex items-center justify-center num">
                      {totalActiveFilters}
                    </span>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500">{lang === 'bn' ? 'সাজান:' : 'Sort:'}</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none cursor-pointer"
                  >
                    <option value="today">{lang === 'bn' ? 'আজ বসছেন আগে' : 'Sitting today first'}</option>
                    <option value="rating">{lang === 'bn' ? 'সর্বোচ্চ রেটিং আগে' : 'Highest Rated'}</option>
                    <option value="senior">{lang === 'bn' ? 'অভিজ্ঞতা অনুযায়ী' : 'Seniority'}</option>
                    <option value="az">{lang === 'bn' ? 'নাম A–Z' : 'Name A–Z'}</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Layout Grid: Sidebar Filters + Main Cards */}
            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
              {/* Desktop Filters Sidebar */}
              <aside className="hidden md:block bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs sticky top-24 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                    <Filter className="w-4 h-4 text-cyan-700" />
                    <span>{lang === 'bn' ? 'ফিল্টারসমূহ' : 'Filters'}</span>
                  </h3>
                  {totalActiveFilters > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-xs font-bold text-cyan-700 hover:underline"
                    >
                      {lang === 'bn' ? 'মুছুন' : 'Clear'}
                    </button>
                  )}
                </div>

                {/* Day Filter */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {lang === 'bn' ? 'দিন' : 'Day'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    <button
                      type="button"
                      onClick={() => {
                        const next = new Set(filterDay);
                        next.has('today') ? next.delete('today') : next.add('today');
                        setFilterDay(next);
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${filterDay.has('today') ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                    >
                      {lang === 'bn' ? 'আজ' : 'Today'}
                    </button>
                    {WEEK_DAYS.map(dayKey => (
                      <button
                        key={dayKey}
                        type="button"
                        onClick={() => {
                          const next = new Set(filterDay);
                          next.has(dayKey) ? next.delete(dayKey) : next.add(dayKey);
                          setFilterDay(next);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${filterDay.has(dayKey) ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                      >
                        {lang === 'bn' ? BN_DAYS[dayKey] : dayKey}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Slot Filter */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {lang === 'bn' ? 'সময়' : 'Time'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { key: 'morn', label: lang === 'bn' ? 'সকাল' : 'Morning' },
                      { key: 'aft', label: lang === 'bn' ? 'দুপুর' : 'Afternoon' },
                      { key: 'eve', label: lang === 'bn' ? 'সন্ধ্যা' : 'Evening' },
                      { key: 'night', label: lang === 'bn' ? 'রাত' : 'Night' }
                    ].map(slot => (
                      <button
                        key={slot.key}
                        type="button"
                        onClick={() => {
                          const next = new Set(filterTime);
                          next.has(slot.key) ? next.delete(slot.key) : next.add(slot.key);
                          setFilterTime(next);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${filterTime.has(slot.key) ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Area Filter */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {lang === 'bn' ? 'এলাকা' : 'Area'}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {allAreas.slice(0, 8).map(area => (
                      <button
                        key={area}
                        type="button"
                        onClick={() => {
                          const next = new Set(filterArea);
                          next.has(area) ? next.delete(area) : next.add(area);
                          setFilterArea(next);
                        }}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all ${filterArea.has(area) ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Gender Filter */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {lang === 'bn' ? 'লিঙ্গ' : 'Gender'}
                  </h4>
                  <div className="flex gap-2">
                    {[
                      { key: 'M', label: lang === 'bn' ? 'পুরুষ' : 'Male' },
                      { key: 'F', label: lang === 'bn' ? 'মহিলা' : 'Female' }
                    ].map(g => (
                      <button
                        key={g.key}
                        type="button"
                        onClick={() => {
                          const next = new Set(filterGender);
                          next.has(g.key) ? next.delete(g.key) : next.add(g.key);
                          setFilterGender(next);
                        }}
                        className={`flex-1 py-1.5 rounded-full text-xs font-semibold border text-center transition-all ${filterGender.has(g.key) ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold' : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'}`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Mobile Filter Drawer / Bottom Sheet */}
              {mobileFilterOpen && (
                <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-end">
                  <div
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
                    onClick={() => setMobileFilterOpen(false)}
                  />
                  <div className="relative bg-white rounded-t-3xl max-h-[85vh] overflow-y-auto p-6 z-10 shadow-2xl space-y-5 animate-slide-up">
                    <div className="w-12 h-1.5 rounded-full bg-slate-300 mx-auto -mt-2 mb-4" />
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold text-slate-900">{lang === 'bn' ? 'ফিল্টার নির্বাচন' : 'Filters'}</h3>
                      <button
                        onClick={() => setMobileFilterOpen(false)}
                        className="p-1.5 rounded-full text-slate-500 hover:bg-slate-100"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Day */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{lang === 'bn' ? 'দিন' : 'Day'}</h4>
                      <div className="flex flex-wrap gap-2">
                        {['today', ...WEEK_DAYS].map(dayKey => (
                          <button
                            key={dayKey}
                            type="button"
                            onClick={() => {
                              const next = new Set(filterDay);
                              next.has(dayKey) ? next.delete(dayKey) : next.add(dayKey);
                              setFilterDay(next);
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${filterDay.has(dayKey) ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold' : 'border-slate-200 text-slate-700'}`}
                          >
                            {dayKey === 'today' ? (lang === 'bn' ? 'আজ' : 'Today') : (lang === 'bn' ? BN_DAYS[dayKey] : dayKey)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Area */}
                    <div>
                      <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{lang === 'bn' ? 'এলাকা' : 'Area'}</h4>
                      <div className="flex flex-wrap gap-2">
                        {allAreas.map(area => (
                          <button
                            key={area}
                            type="button"
                            onClick={() => {
                              const next = new Set(filterArea);
                              next.has(area) ? next.delete(area) : next.add(area);
                              setFilterArea(next);
                            }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${filterArea.has(area) ? 'bg-cyan-50 border-cyan-500 text-cyan-800 font-bold' : 'border-slate-200 text-slate-700'}`}
                          >
                            {area}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex gap-3">
                      <button
                        type="button"
                        onClick={clearFilters}
                        className="flex-1 py-3 text-sm font-bold text-slate-600 bg-slate-100 rounded-xl"
                      >
                        {lang === 'bn' ? 'রিসেট' : 'Reset'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setMobileFilterOpen(false)}
                        className="flex-2 py-3 text-sm font-bold text-white bg-[#047857] rounded-xl shadow-xs"
                      >
                        {lang === 'bn' ? 'ফলাফল দেখুন' : 'Apply Filters'}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Main Cards List */}
              <div className="space-y-4">
                {/* Active Filter Chips */}
                {totalActiveFilters > 0 && (
                  <div className="flex flex-wrap items-center gap-2 mb-2 p-3 bg-slate-100/80 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500">{lang === 'bn' ? 'সক্রিয় ফিল্টার:' : 'Active:'}</span>
                    {Array.from(filterDay).map(day => (
                      <span key={day} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-semibold">
                        <span>{day === 'today' ? (lang === 'bn' ? 'আজ' : 'Today') : (lang === 'bn' ? BN_DAYS[day] : day)}</span>
                        <X
                          className="w-3 h-3 cursor-pointer hover:text-cyan-950"
                          onClick={() => {
                            const next = new Set(filterDay);
                            next.delete(day);
                            setFilterDay(next);
                          }}
                        />
                      </span>
                    ))}
                    {Array.from(filterArea).map(area => (
                      <span key={area} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-semibold">
                        <span>{area}</span>
                        <X
                          className="w-3 h-3 cursor-pointer hover:text-cyan-950"
                          onClick={() => {
                            const next = new Set(filterArea);
                            next.delete(area);
                            setFilterArea(next);
                          }}
                        />
                      </span>
                    ))}
                    <button
                      onClick={clearFilters}
                      className="text-xs font-bold text-red-600 hover:underline ml-auto"
                    >
                      {lang === 'bn' ? 'সব মুছুন' : 'Clear all'}
                    </button>
                  </div>
                )}

                {/* Doctor Cards */}
                {filteredDoctors.length > 0 ? (
                  filteredDoctors.map(doc => {
                    const primaryChamber = doc.ch[0];
                    const status = getDoctorStatus(primaryChamber, lang);

                    return (
                      <article
                        key={doc.slug}
                        className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div className="flex flex-col sm:flex-row items-start gap-4">
                          <DoctorAvatar img={doc.img} name={doc.name} ini={doc.ini} className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl text-base" />

                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-3 flex-wrap">
                              <div>
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="font-bold text-lg sm:text-xl text-slate-900 leading-snug">
                                    <a
                                      href={`#doctor/${doc.slug}`}
                                      onClick={(e) => { e.preventDefault(); navigateTo(`doctor/${doc.slug}`); }}
                                      className="hover:text-cyan-700"
                                    >
                                      {doc.name}
                                    </a>
                                  </h3>
                                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold num">
                                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                                    <span>{getDoctorRating(ratingsStore, doc.slug, doc.rank).avg.toFixed(1)}</span>
                                    <span className="text-amber-800/70 font-normal">({getDoctorRating(ratingsStore, doc.slug, doc.rank).count})</span>
                                  </span>
                                </div>
                                <p className="text-sm font-semibold text-cyan-700 mt-0.5">{doc.specialtyBn}</p>
                              </div>

                              {/* Status Badge */}
                              <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                                status.type === 'now'
                                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                  : status.type === 'today'
                                  ? 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                                  : 'bg-amber-50 text-amber-800 border border-amber-200'
                              }`}>
                                <span className={`w-2 h-2 rounded-full ${status.type === 'now' ? 'bg-emerald-600 pulse-dot' : status.type === 'today' ? 'bg-cyan-600' : 'bg-amber-600'}`} />
                                <span>{status.label}</span>
                              </span>
                            </div>

                            <p className="text-xs sm:text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                              {doc.degrees}
                            </p>
                            <p className="text-xs text-slate-500 font-medium mt-0.5">
                              {doc.designation} · {doc.institution}
                            </p>

                            {/* Chamber Information */}
                            <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
                              <div className="space-y-1">
                                <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                                  <Building2 className="w-4 h-4 text-slate-400" />
                                  <span>{primaryChamber.name}</span>
                                </p>
                                <p className="text-slate-500 flex items-start gap-1.5">
                                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                                  <span>{primaryChamber.address}</span>
                                </p>
                              </div>

                              <div className="space-y-1 num">
                                <p className="flex items-center gap-1.5 text-slate-700 font-medium">
                                  <Clock className="w-4 h-4 text-slate-400" />
                                  <span>{formatTime(primaryChamber.start, lang)} – {formatTime(primaryChamber.end, lang)}</span>
                                </p>
                                <p className="text-slate-500 text-xs">
                                  {lang === 'bn' ? 'বন্ধ:' : 'Off:'} {WEEK_DAYS.filter(w => !primaryChamber.days.includes(w)).map(w => BN_DAYS[w]).join(', ') || (lang === 'bn' ? 'কোনো ছুটি নেই' : 'No off days')}
                                  {primaryChamber.fee && ` · ফি: ${primaryChamber.fee}`}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Card CTA Bar */}
                        <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-2">
                          <a
                            href={`tel:${primaryChamber.serial[0]?.replace(/\D/g, '')}`}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 min-h-[44px] px-5 bg-[#047857] hover:bg-[#065F46] text-white rounded-xl text-sm font-bold shadow-xs active:scale-95 num"
                          >
                            <Phone className="w-4 h-4" />
                            <span>{lang === 'bn' ? 'সিরিয়ালের জন্য কল' : 'Call for Serial'} · {primaryChamber.serial[0]}</span>
                          </a>

                          <button
                            type="button"
                            onClick={() => copyToClipboard(primaryChamber.serial[0], lang === 'bn' ? 'সিরিয়াল নম্বর' : 'Number')}
                            className="min-h-[44px] px-3.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5 transition-colors"
                          >
                            <Copy className="w-4 h-4 text-slate-500" />
                            <span>{lang === 'bn' ? 'কপি' : 'Copy'}</span>
                          </button>

                          <a
                            href={`#doctor/${doc.slug}`}
                            onClick={(e) => { e.preventDefault(); navigateTo(`doctor/${doc.slug}`); }}
                            className="min-h-[44px] px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm inline-flex items-center gap-1 transition-colors ml-auto"
                          >
                            <span>{lang === 'bn' ? 'বিস্তারিত প্রোফাইল' : 'View Profile'}</span>
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          </a>
                        </div>
                      </article>
                    );
                  })
                ) : (
                  <div className="bg-white border border-dashed border-slate-300 rounded-2xl p-12 text-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                      <Search className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">
                        {lang === 'bn' ? 'এই ফিল্টারে কোনো ডাক্তার পাওয়া যায়নি' : 'No doctors match these filters'}
                      </h3>
                      <p className="text-sm text-slate-500 max-w-md mx-auto mt-1">
                        {lang === 'bn' ? 'দিন বা এলাকার ফিল্টার একটু শিথিল করে আবার দেখুন, অথবা সবগুলো ফিল্টার মুছে দিন।' : 'Try removing a day or area filter to broaden your search.'}
                      </p>
                    </div>
                    <button
                      onClick={clearFilters}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E7490] text-white font-bold text-sm shadow-xs hover:bg-[#155E75]"
                    >
                      {lang === 'bn' ? 'ফিল্টার মুছুন' : 'Clear Filters'}
                    </button>
                  </div>
                )}

                {/* Inline Add Doctor Card */}
                <div className="bg-cyan-50/80 border border-cyan-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      {lang === 'bn' ? 'তালিকায় নেই এমন কোনো ডাক্তার চেনেন?' : 'Know a doctor who isn’t listed here?'}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      {lang === 'bn' ? 'ফ্রিতে তথ্য যোগ করুন — ২৪ ঘণ্টার মধ্যে রিভিউ ও যাচাই করা হয়।' : 'Add them for free — reviewed and verified within 24–48 hours.'}
                    </p>
                  </div>
                  <button
                    onClick={() => setAddDoctorModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0E7490] hover:bg-[#155E75] text-white font-bold text-xs sm:text-sm shadow-xs shrink-0 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'প্রোফাইল যোগ করুন' : 'Add Profile'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ======================= DOCTOR PROFILE VIEW ======================= */}
        {currentRoute === 'doctor' && activeDoctor && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-in pb-28 md:pb-16">
            {/* Breadcrumb */}
            <nav className="text-xs sm:text-sm text-slate-500 mb-6 flex items-center gap-1.5">
              <a href="#home" onClick={(e) => { e.preventDefault(); navigateTo('home'); }} className="hover:text-slate-800 font-semibold">
                {lang === 'bn' ? 'হোম' : 'Home'}
              </a>
              <span>›</span>
              <a href="#list" onClick={(e) => { e.preventDefault(); navigateTo('list'); }} className="hover:text-slate-800 font-semibold">
                {activeDoctor.specialtyBn}
              </a>
              <span>›</span>
              <span className="text-slate-800 font-bold">{activeDoctor.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
              {/* Doctor Main Details & Chambers */}
              <div className="space-y-6">
                {/* Doctor Bio Card */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-xs">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <DoctorAvatar img={activeDoctor.img} name={activeDoctor.name} ini={activeDoctor.ini} className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl text-2xl shadow-xs" />

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 text-xs font-bold">
                          <Activity className="w-3.5 h-3.5" />
                          <span>{activeDoctor.specialtyBn}</span>
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold">
                          <Check className="w-3.5 h-3.5" />
                          <span>{lang === 'bn' ? 'যাচাইকৃত তথ্য' : 'Verified Profile'}</span>
                        </span>
                      </div>

                      <div className="flex items-center gap-3 flex-wrap">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
                          {activeDoctor.name}
                        </h1>
                        <a
                          href="#ratings-section"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('ratings-section')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 shadow-2xs transition-all cursor-pointer"
                          title={lang === 'bn' ? 'রোগীদের রেটিং ও মতামত দেখুন' : 'View Ratings & Reviews'}
                        >
                          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                          <span className="font-extrabold text-sm sm:text-base num">{activeDoctorRating.avg.toFixed(1)}</span>
                          <span className="text-xs text-amber-800 font-semibold num">({activeDoctorRating.count} {lang === 'bn' ? 'রিভিউ' : 'reviews'})</span>
                        </a>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-slate-700 mt-1.5 leading-relaxed">
                        {activeDoctor.degrees}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                        {activeDoctor.designation} · {activeDoctor.institution}
                      </p>

                      {/* Desktop Direct Call & Share Bar */}
                      <div className="hidden sm:flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                        <a
                          href={`tel:${activeDoctor.ch[0]?.serial[0]?.replace(/\D/g, '')}`}
                          className="inline-flex items-center gap-2 min-h-[46px] px-6 bg-[#047857] hover:bg-[#065F46] text-white rounded-xl text-sm font-bold shadow-xs active:scale-95 num"
                        >
                          <Phone className="w-4 h-4" />
                          <span>{lang === 'bn' ? 'সিরিয়ালের জন্য কল' : 'Call for Serial'} · {activeDoctor.ch[0]?.serial[0]}</span>
                        </a>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(activeDoctor.ch[0]?.serial[0], lang === 'bn' ? 'সিরিয়াল নম্বর' : 'Phone')}
                          className="min-h-[46px] px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center gap-1.5"
                        >
                          <Copy className="w-4 h-4 text-slate-500" />
                          <span>{lang === 'bn' ? 'নম্বর কপি' : 'Copy'}</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (navigator.share) {
                              navigator.share({ title: activeDoctor.name, url: window.location.href }).catch(() => {});
                            } else {
                              copyToClipboard(window.location.href, lang === 'bn' ? 'প্রোফাইল লিংক' : 'Link');
                            }
                          }}
                          className="min-h-[46px] px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm flex items-center gap-1.5"
                        >
                          <Share2 className="w-4 h-4 text-slate-500" />
                          <span>{lang === 'bn' ? 'শেয়ার' : 'Share'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chambers Breakdown Section */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4">
                    {lang === 'bn' ? 'চেম্বার ও সময়সূচি' : 'Chambers & Weekly Schedule'}
                  </h2>

                  <div className="space-y-5">
                    {activeDoctor.ch.map((chamber, cIdx) => {
                      const status = getDoctorStatus(chamber, lang);

                      return (
                        <div
                          key={cIdx}
                          className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs space-y-5"
                        >
                          <div className="flex items-start justify-between gap-3 flex-wrap">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-lg bg-cyan-100 text-cyan-800 font-bold text-xs flex items-center justify-center">
                                  {cIdx + 1}
                                </span>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                                  {chamber.name}
                                </h3>
                              </div>
                              <p className="text-xs sm:text-sm text-slate-500 flex items-center gap-1.5 mt-1">
                                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                                <span>{chamber.address} · <span className="font-semibold text-slate-700">{chamber.area}</span></span>
                              </p>
                              <a
                                href={`https://maps.google.com/?q=${encodeURIComponent(chamber.name + ' ' + chamber.address)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-bold text-cyan-700 hover:underline mt-1.5"
                              >
                                <span>{lang === 'bn' ? 'Google Maps-এ দেখুন' : 'View on Google Maps'}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            </div>

                            <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full ${
                              status.type === 'now'
                                ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                                : status.type === 'today'
                                ? 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                                : 'bg-amber-50 text-amber-800 border border-amber-200'
                            }`}>
                              <span className={`w-2 h-2 rounded-full ${status.type === 'now' ? 'bg-emerald-600 pulse-dot' : status.type === 'today' ? 'bg-cyan-600' : 'bg-amber-600'}`} />
                              <span>{status.label}</span>
                            </span>
                          </div>

                          {/* Weekly Schedule Visual Table */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                              {lang === 'bn' ? 'সাপ্তাহিক সময়সূচি' : 'Weekly Schedule'}
                            </h4>
                            <div className="grid grid-cols-7 gap-1 sm:gap-2 num text-center">
                              {WEEK_DAYS.map(dayKey => {
                                const isOpen = chamber.days.includes(dayKey);
                                const isToday = dayKey === dhakaNow.day;
                                return (
                                  <div
                                    key={dayKey}
                                    className={`p-2 sm:p-2.5 rounded-xl border text-xs flex flex-col justify-between ${
                                      isToday
                                        ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-bold ring-2 ring-emerald-400/20'
                                        : isOpen
                                        ? 'border-slate-200 bg-white text-slate-800'
                                        : 'border-slate-100 bg-slate-50 text-slate-400'
                                    }`}
                                  >
                                    <span className="font-bold text-[11px] sm:text-xs">
                                      {lang === 'bn' ? BN_DAYS[dayKey] : dayKey}
                                    </span>
                                    <span className="text-[10px] sm:text-[11px] mt-1 leading-tight font-medium">
                                      {isOpen ? (
                                        <span>
                                          {formatTime(chamber.start, lang).split(' ')[0]}
                                          <br className="hidden sm:inline" />–{formatTime(chamber.end, lang).split(' ')[0]}
                                        </span>
                                      ) : (
                                        <span>{lang === 'bn' ? 'বন্ধ' : 'Off'}</span>
                                      )}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Serial Numbers and Direct Dial */}
                          <div className="pt-4 border-t border-slate-100">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                              {lang === 'bn' ? 'সিরিয়ালের ফোন নম্বর' : 'Serial Phone Numbers'}
                            </h4>
                            <div className="flex flex-wrap gap-2.5">
                              {chamber.serial.map((ser, sIdx) => (
                                <div key={sIdx} className="flex items-center gap-1.5">
                                  <a
                                    href={`tel:${ser.replace(/\D/g, '')}`}
                                    className="inline-flex items-center gap-2 min-h-[42px] px-4 bg-[#047857] hover:bg-[#065F46] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs num"
                                  >
                                    <Phone className="w-3.5 h-3.5" />
                                    <span>{ser}</span>
                                  </a>
                                  <button
                                    type="button"
                                    onClick={() => copyToClipboard(ser, lang === 'bn' ? 'সিরিয়াল নম্বর' : 'Phone')}
                                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600"
                                    title={lang === 'bn' ? 'কপি করুন' : 'Copy'}
                                  >
                                    <Copy className="w-4 h-4" />
                                  </button>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Chamber disclaimer note */}
                  <div className="mt-4 p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                    <Shield className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                    <div>
                      <span>
                        {lang === 'bn'
                          ? 'ডাক্তারদের সময়সূচি ও চেম্বারের দিন পরিবর্তনশীল। চেম্বারে যাওয়ার আগে অবশ্যই ফোন নম্বরে যোগাযোগ করে নিশ্চিত হয়ে নিন।'
                          : 'Doctor sitting hours and days are subject to change. Always call the serial phone number to confirm before visiting.'}
                      </span>
                      <button
                        onClick={() => { setReportingDoctor(activeDoctor.name); setReportModalOpen(true); }}
                        className="text-[#0E7490] font-bold hover:underline ml-2"
                      >
                        {lang === 'bn' ? 'তথ্য ভুল থাকলে জানান →' : 'Report wrong info →'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Patient Ratings and Reviews Section */}
                <div id="ratings-section">
                  <DoctorRatingSection
                    doctorSlug={activeDoctor.slug}
                    doctorName={activeDoctor.name}
                    doctorRank={activeDoctor.rank}
                    stats={activeDoctorRating}
                    lang={lang}
                    onRate={(rating, comment, tags) => handleDoctorRate(activeDoctor.slug, rating, activeDoctor.rank, comment, tags)}
                  />
                </div>
              </div>

              {/* Sidebar: Similar Doctors & Emergency */}
              <div className="space-y-6">
                {/* Similar Doctors Panel */}
                <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs">
                  <h3 className="font-bold text-slate-900 text-base mb-3 pb-2 border-b border-slate-100">
                    {lang === 'bn' ? 'একই বিভাগের অন্যান্য ডাক্তার' : 'Other Doctors in This Specialty'}
                  </h3>

                  <div className="divide-y divide-slate-100">
                    {doctorsList
                      .filter(d => d.slug !== activeDoctor.slug)
                      .slice(0, 4)
                      .map(sDoc => {
                        const sRating = getDoctorRating(ratingsStore, sDoc.slug, sDoc.rank);
                        return (
                          <a
                            key={sDoc.slug}
                            href={`#doctor/${sDoc.slug}`}
                            onClick={(e) => { e.preventDefault(); navigateTo(`doctor/${sDoc.slug}`); }}
                            className="py-3 flex items-center gap-3 group text-left"
                          >
                            <DoctorAvatar img={sDoc.img} name={sDoc.name} ini={sDoc.ini} className="w-9 h-9 rounded-xl text-xs" />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1">
                                <p className="text-sm font-bold text-slate-900 group-hover:text-cyan-700 truncate">
                                  {sDoc.name}
                                </p>
                                <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-amber-900 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 num shrink-0">
                                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-500" />
                                  <span>{sRating.avg.toFixed(1)}</span>
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 truncate">
                                {sDoc.ch[0]?.name} · {sDoc.ch[0]?.area}
                              </p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-700" />
                          </a>
                        );
                      })}
                  </div>
                </div>

                {/* Emergency Card */}
                <div className="bg-red-50/80 border border-red-200 rounded-2xl p-5 text-red-950">
                  <h3 className="font-extrabold text-base mb-1 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-600" />
                    <span>{lang === 'bn' ? 'জরুরি চিকিৎসা প্রয়োজন?' : 'Emergency Medical Need?'}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-red-800 leading-relaxed mb-4">
                    {lang === 'bn'
                      ? 'অপেক্ষা করবেন না — সরাসরি সরকারি জরুরি হটলাইন অথবা নিকটস্থ হাসপাতালে যান।'
                      : 'Do not wait for chamber hours — call the national emergency line right away.'}
                  </p>
                  <a
                    href="tel:999"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-bold shadow-xs active:scale-95 num"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{lang === 'bn' ? 'জরুরি কল: ৯৯৯' : 'Emergency Call: 999'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Fixed Bottom Action Bar */}
            <div className="fixed inset-x-0 bottom-0 bg-white border-t border-slate-200 p-3 flex items-center gap-2 z-30 sm:hidden shadow-lg">
              <a
                href={`tel:${activeDoctor.ch[0]?.serial[0]?.replace(/\D/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 bg-[#047857] text-white rounded-xl text-sm font-bold shadow-xs active:scale-95 num"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'bn' ? 'সিরিয়ালে কল' : 'Call'} · {activeDoctor.ch[0]?.serial[0]}</span>
              </a>
              <button
                type="button"
                onClick={() => copyToClipboard(activeDoctor.ch[0]?.serial[0], lang === 'bn' ? 'নম্বর' : 'Phone')}
                className="p-3 rounded-xl border border-slate-200 text-slate-700"
                title="Copy"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ======================= BLOG VIEW ======================= */}
        {currentRoute === 'blog' && (
          <BlogView
            lang={lang}
            onSelectArticle={(slug) => {
              setSelectedArticleSlug(slug);
              navigateTo(`blog/${slug}`);
            }}
            onNavigateToSpecialty={(specKey) => {
              setSelectedSpecialty(specKey);
              navigateTo('list');
            }}
            onToast={showToast}
          />
        )}

        {/* ======================= ARTICLE DETAIL VIEW ======================= */}
        {currentRoute === 'article' && activeArticle && (
          <ArticleDetailView
            article={activeArticle}
            lang={lang}
            onBack={() => navigateTo('blog')}
            onNavigateToSpecialty={(specKey) => {
              setSelectedSpecialty(specKey);
              navigateTo('list');
            }}
            onSelectArticle={(slug) => {
              setSelectedArticleSlug(slug);
              navigateTo(`blog/${slug}`);
            }}
            onToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#0B1220] text-slate-300 py-12 sm:py-16 px-4 sm:px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="space-y-3 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0E7490] text-white flex items-center justify-center">
                <Stethoscope className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-lg text-white">Dakter Achen</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {lang === 'bn'
                ? 'চট্টগ্রামের বিশেষজ্ঞ ডাক্তারদের চেম্বার, সময়সূচি ও অফিসিয়াল সিরিয়াল নম্বরের ফ্রি ডিরেক্টরি প্ল্যাটফর্ম।'
                : 'Free open directory of specialist doctors, sitting hours and serial contact numbers in Chattogram.'}
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">
              {lang === 'bn' ? 'স্বাস্থ্য ব্লগ ও টিপস' : 'Health Blog & Tips'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button onClick={() => navigateTo('blog')} className="hover:text-cyan-400 transition-colors font-semibold text-cyan-300 text-left">
                  {lang === 'bn' ? 'সকল স্বাস্থ্য নিবন্ধ →' : 'All Health Guides →'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog/dengue-fever-warning-signs-chattogram')} className="hover:text-white transition-colors text-left line-clamp-1">
                  {lang === 'bn' ? 'ডেঙ্গু জ্বর ও বিপদচিহ্ন' : 'Dengue Warning Signs'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog/diabetes-diet-and-exercise-bangladesh')} className="hover:text-white transition-colors text-left line-clamp-1">
                  {lang === 'bn' ? 'ডায়াবেটিস নিয়ন্ত্রণ ও খাদ্য' : 'Diabetes Diet Guide'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog/heart-attack-emergency-first-aid-response')} className="hover:text-white transition-colors text-left line-clamp-1">
                  {lang === 'bn' ? 'হার্ট অ্যাটাক ফার্স্ট এইড' : 'Heart Attack First Aid'}
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('blog/pregnancy-first-trimester-care-nutrition-bangladesh')} className="hover:text-white transition-colors text-left line-clamp-1">
                  {lang === 'bn' ? 'গর্ভাবস্থায় প্রথম ৩ মাসের যত্ন' : 'Pregnancy 1st Trimester'}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">
              {lang === 'bn' ? 'জনপ্রিয় বিভাগ' : 'Popular Specialties'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button onClick={() => { setSelectedSpecialty('medicine'); navigateTo('list'); }} className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'মেডিসিন ও ডায়াবেটিস' : 'Medicine & Diabetes'}
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedSpecialty('gynae'); navigateTo('list'); }} className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'গাইনি ও প্রসূতি' : 'Gynae & Obstetrics'}
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedSpecialty('heart'); navigateTo('list'); }} className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'হৃদরোগ বিশেষজ্ঞ' : 'Cardiologist'}
                </button>
              </li>
              <li>
                <button onClick={() => { setSelectedSpecialty('child'); navigateTo('list'); }} className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'শিশু বিশেষজ্ঞ' : 'Child Specialist'}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">
              {lang === 'bn' ? 'প্রধান এলাকা' : 'Top Locations'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {['Panchlaish', 'O.R. Nizam Road', 'Chawkbazar', 'Agrabad'].map(a => (
                <li key={a}>
                  <button onClick={() => { setSelectedArea(a); navigateTo('list'); }} className="hover:text-white transition-colors">
                    {a}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">
              {lang === 'bn' ? 'সহযোগিতা ও তথ্য' : 'Community & Legal'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <button onClick={() => setAddDoctorModalOpen(true)} className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'ডাক্তার যোগ করুন' : 'Add a Doctor'}
                </button>
              </li>
              <li>
                <button onClick={() => { setReportingDoctor(''); setReportModalOpen(true); }} className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'তথ্য ভুল হলে জানান' : 'Report Outdated Info'}
                </button>
              </li>
              <li>
                <button onClick={() => openChat()} className="hover:text-white transition-colors text-cyan-400 font-semibold">
                  {lang === 'bn' ? 'AI স্বাস্থ্য পরামর্শক' : 'Ask AI Health Assistant'}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            {lang === 'bn'
              ? 'এই তথ্য শুধু সহায়তার উদ্দেশ্যে। কোনো জরুরি অবস্থায় ৯৯৯ এ কল করুন। © since 2017-2026 present Dakter Achen.'
              : 'Directory for informational purposes. In emergency call 999. © since 2017-2026 present Dakter Achen.'}
          </p>
          <p className="num text-slate-400 font-medium">
            dakterachen.com · Chittagong, Bangladesh
          </p>
        </div>
      </footer>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs sm:text-sm font-semibold z-50 flex items-center gap-2 animate-fade-in border border-slate-700">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modal: Add Doctor */}
      {addDoctorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setAddDoctorModalOpen(false)} />
          <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-7 shadow-2xl z-10 space-y-5 animate-scale-up">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  {lang === 'bn' ? 'নতুন ডাক্তার যোগ করুন' : 'Add a Doctor Profile'}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {lang === 'bn' ? 'সঠিক তথ্য দিন যাতে রোগীরা সহজে সিরিয়াল পেতে পারেন' : 'Enter accurate details to help community members'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setAddDoctorModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddDoctorSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'ডাক্তারের নাম *' : "Doctor's Name *"}
                </label>
                <input
                  type="text"
                  required
                  value={newDoctor.name}
                  onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                  placeholder={lang === 'bn' ? 'যেমন: ডাঃ মোঃ কামরুল ইসলাম' : 'e.g. Dr. Md. Kamrul Islam'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'বিভাগ *' : 'Specialty *'}
                  </label>
                  <select
                    value={newDoctor.specialtyBn}
                    onChange={(e) => setNewDoctor({ ...newDoctor, specialtyBn: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-cyan-600 font-medium"
                  >
                    {SPECIALTIES.map(s => (
                      <option key={s.key} value={s.bn}>{s.bn}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'এলাকা *' : 'Area *'}
                  </label>
                  <select
                    value={newDoctor.area}
                    onChange={(e) => setNewDoctor({ ...newDoctor, area: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-cyan-600 font-medium"
                  >
                    {allAreas.map(a => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'ডিগ্রি ও পদবী' : 'Degrees & Qualification'}
                </label>
                <input
                  type="text"
                  value={newDoctor.degrees}
                  onChange={(e) => setNewDoctor({ ...newDoctor, degrees: e.target.value })}
                  placeholder={lang === 'bn' ? 'যেমন: MBBS, FCPS (Medicine)' : 'e.g. MBBS, FCPS'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'চেম্বারের নাম *' : 'Chamber / Hospital Name *'}
                </label>
                <input
                  type="text"
                  required
                  value={newDoctor.chamberName}
                  onChange={(e) => setNewDoctor({ ...newDoctor, chamberName: e.target.value })}
                  placeholder={lang === 'bn' ? 'যেমন: পার্কভিউ হাসপাতাল / মেসার্স চৌধুরী ফার্মসী' : 'e.g. Parkview Hospital'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'চেম্বারের বিস্তারিত ঠিকানা' : 'Chamber Address'}
                </label>
                <input
                  type="text"
                  value={newDoctor.address}
                  onChange={(e) => setNewDoctor({ ...newDoctor, address: e.target.value })}
                  placeholder={lang === 'bn' ? 'যেমন: ও.আর. নিজাম রোড, পাঁচলাইশ, চট্টগ্রাম' : 'e.g. O.R. Nizam Road, Panchlaish'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-600"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'শুরুর সময়' : 'Start Time'}
                  </label>
                  <input
                    type="time"
                    value={newDoctor.start}
                    onChange={(e) => setNewDoctor({ ...newDoctor, start: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {lang === 'bn' ? 'শেষের সময়' : 'End Time'}
                  </label>
                  <input
                    type="time"
                    value={newDoctor.end}
                    onChange={(e) => setNewDoctor({ ...newDoctor, end: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'সিরিয়ালের ফোন নম্বর *' : 'Serial Phone Number *'}
                </label>
                <input
                  type="tel"
                  required
                  value={newDoctor.serial}
                  onChange={(e) => setNewDoctor({ ...newDoctor, serial: e.target.value })}
                  placeholder={lang === 'bn' ? 'যেমন: 01846-469331' : 'e.g. 01846-469331'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-600 num font-bold text-[#047857]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setAddDoctorModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-sm"
                >
                  {lang === 'bn' ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#047857] hover:bg-[#065F46] text-white font-bold text-sm shadow-xs"
                >
                  {lang === 'bn' ? 'যোগ করুন' : 'Submit Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal: Report Wrong Info */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setReportModalOpen(false)} />
          <div className="relative bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl z-10 space-y-4 animate-scale-up">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-bold text-slate-900">
                {lang === 'bn' ? 'ভুল তথ্য সংশোধন জানান' : 'Report Outdated Info'}
              </h3>
              <button
                type="button"
                onClick={() => setReportModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setReportModalOpen(false);
                showToast(lang === 'bn' ? 'ধন্যবাদ! আপনার রিপোর্টটি গ্রহণ করা হয়েছে।' : 'Thank you! Your feedback has been recorded.');
              }}
              className="space-y-3.5 text-sm"
            >
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'ডাক্তারের নাম' : "Doctor's Name"}
                </label>
                <input
                  type="text"
                  defaultValue={reportingDoctor}
                  placeholder={lang === 'bn' ? 'ডাক্তারের নাম' : 'Doctor name'}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'সমস্যার ধরন' : 'Issue Type'}
                </label>
                <select className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none font-medium">
                  <option>{lang === 'bn' ? 'বসার সময় বা দিন বদলেছে' : 'Sitting time / days changed'}</option>
                  <option>{lang === 'bn' ? 'সিরিয়াল ফোন নম্বর কাজ করছে না' : 'Serial phone number not working'}</option>
                  <option>{lang === 'bn' ? 'চেম্বারের স্থান বা ঠিকানা বদলেছে' : 'Chamber address changed'}</option>
                  <option>{lang === 'bn' ? 'ডাক্তার এখন আর এখানে বসেন না' : 'Doctor no longer sits here'}</option>
                  <option>{lang === 'bn' ? 'অন্যান্য' : 'Other'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {lang === 'bn' ? 'সঠিক তথ্য বিস্তারিত লিখুন' : 'Correct Information'}
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder={lang === 'bn' ? 'সঠিক সময় বা নতুন নম্বরটি লিখুন...' : 'Provide the updated hours or phone number...'}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setReportModalOpen(false)}
                  className="px-4 py-2 text-slate-600 font-bold text-xs"
                >
                  {lang === 'bn' ? 'বাতিল' : 'Cancel'}
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#0E7490] text-white rounded-xl font-bold text-xs shadow-xs"
                >
                  {lang === 'bn' ? 'পাঠান' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating AI Health Assistant Chatbot */}
      <Chatbot />
    </div>
  );
}
