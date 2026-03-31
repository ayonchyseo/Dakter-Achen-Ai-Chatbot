import React, { useState } from 'react';
import { 
  Search, 
  MessageSquare, 
  MapPin, 
  CreditCard, 
  Stethoscope, 
  ArrowRight,
  ShieldCheck,
  Globe,
  Map,
  Eye,
  Package,
  ArrowRightLeft,
  Activity,
  Info,
  Lightbulb,
  Bug,
  User,
  Droplet,
  Languages,
  AlertTriangle
} from 'lucide-react';
import Chatbot from './components/Chatbot';

// Helper to open the chatbot from anywhere
const openChat = (message?: string) => {
  window.dispatchEvent(new CustomEvent('open-chat', { detail: { message } }));
};

// --- Components ---

const Navbar = () => (
  <header className="bg-primary sticky top-0 z-50 w-full shadow-lg">
    <div className="flex justify-between items-center px-4 md:px-6 py-3 md:py-4 w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="bg-white p-2 rounded-xl shadow-md flex items-center justify-center">
          <Stethoscope className="text-primary" size={24} />
        </div>
        <h1 className="text-xl md:text-2xl font-black text-white tracking-tight">Dakter Achen</h1>
      </div>
      <div className="hidden md:flex items-center gap-4">
        <button onClick={() => openChat()} className="text-white/80 hover:text-white text-sm font-bold transition-colors">সহায়তা</button>
        <div className="w-px h-4 bg-white/20" />
        <span className="text-white/60 text-xs font-medium">বাংলাদেশের প্রথম হেলথ গাইড</span>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="py-12 md:py-32 flex flex-col items-center text-center gap-8 md:gap-12 px-4">
    <div className="space-y-6 md:space-y-8 max-w-5xl mx-auto">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-xs md:text-sm font-bold animate-fade-in">
        <ShieldCheck size={18} />
        <span>বাংলাদেশের প্রথম হেলথ ডিসিশন প্ল্যাটফর্ম</span>
      </div>
      <h2 className="text-4xl md:text-7xl font-bold text-on-surface leading-[1.1] tracking-tight px-2">
        আপনার সমস্যার <br className="hidden md:block" />
        <span className="text-primary">পুরো চিত্র</span> জানুন
      </h2>
      <p className="text-sm md:text-xl text-on-surface-variant font-medium max-w-2xl mx-auto leading-relaxed px-4">
        কী হতে পারে, কত খরচ হতে পারে, কী করবেন — সব এক জায়গায় সহজে জানুন।
      </p>
    </div>
    
    <div className="w-full max-w-3xl bg-white p-1.5 md:p-3 rounded-[2rem] md:rounded-full shadow-[0_20px_60px_-15px_rgba(0,103,103,0.15)] border border-primary/10 flex flex-col md:flex-row gap-1.5 md:gap-3">
      <div className="flex-1 flex items-center px-4 md:px-6 gap-3 md:gap-4">
        <Search className="text-primary/40 shrink-0" size={20} />
        <input 
          type="text" 
          placeholder="আপনার সমস্যা লিখুন (যেমন: জ্বর)" 
          className="w-full py-3 md:py-4 bg-transparent outline-none text-on-surface text-base md:text-xl placeholder:text-outline/40 font-medium"
        />
      </div>
      <button 
        onClick={() => openChat()}
        className="bg-primary text-white px-6 md:px-10 py-4 rounded-2xl md:rounded-full font-bold text-lg md:text-xl active:scale-95 transition-all flex items-center justify-center gap-2 md:gap-3 shadow-lg shadow-primary/20 hover:bg-primary-container"
      >
        <MessageSquare size={20} className="md:w-6 md:h-6" />
        চ্যাট করে জানুন
      </button>
    </div>

    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[10px] md:text-sm font-bold text-outline/60 uppercase tracking-widest">
      <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-primary/40" /> ১০০% সঠিক তথ্য</span>
      <span className="flex items-center gap-2"><Globe size={16} className="text-primary/40" /> বাংলাদেশের জন্য তৈরি</span>
      <span className="flex items-center gap-2"><Languages size={16} className="text-primary/40" /> সহজ বাংলা ভাষা</span>
    </div>
  </section>
);

const SymptomEntry = () => {
  const [symptom, setSymptom] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (symptom.trim()) {
      openChat(symptom);
      setSymptom('');
    }
  };

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="bg-primary/5 rounded-[3rem] p-8 md:p-16 border border-primary/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-on-surface tracking-tight leading-tight">আপনার কী সমস্যা হচ্ছে?</h2>
            <p className="text-base md:text-lg text-on-surface-variant font-medium">নিচের বক্সে আপনার সমস্যাটি লিখুন। আমাদের এআই আপনাকে বুঝতে সাহায্য করবে কী হতে পারে এবং সম্ভাব্য খরচ কত।</p>
            <div className="flex flex-wrap gap-3">
              {['জ্বর', 'মাথা ব্যথা', 'পেট খারাপ', 'কাশি', 'দুর্বলতা'].map(s => (
                <button 
                  key={s} 
                  onClick={() => openChat(`আমার ${s} হয়েছে, আমি কি করব?`)} 
                  className="bg-white px-4 py-2 rounded-xl text-sm font-bold border border-primary/10 hover:border-primary transition-all active:scale-95"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 space-y-4">
            <div className="flex items-center gap-3 text-primary font-bold mb-2">
              <Lightbulb size={24} />
              <span>সহজ সমাধান পান</span>
            </div>
            <textarea 
              value={symptom}
              onChange={(e) => setSymptom(e.target.value)}
              placeholder="আপনার সমস্যা বিস্তারিত লিখুন..."
              className="w-full h-32 p-4 bg-slate-50 rounded-2xl border-none outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-lg"
            />
            <button 
              type="submit"
              className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg hover:bg-primary-container transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageSquare size={20} />
              সমাধান দেখুন
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const QuickActionGrid = () => (
  <section className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 mb-16 px-4">
    <div 
      onClick={() => openChat("ল্যাব টেস্টের খরচ কত হতে পারে?")}
      className="bg-white p-5 md:p-6 rounded-3xl hover:shadow-xl transition-all group cursor-pointer border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
        <CreditCard className="text-blue-600" size={20} />
      </div>
      <h3 className="font-bold text-base md:text-lg mb-1">টেস্টের খরচ</h3>
      <p className="text-[10px] md:text-xs text-on-surface-variant leading-relaxed">বিভিন্ন ল্যাবের টেস্টের দামের তুলনা করুন</p>
    </div>
    <div 
      onClick={() => openChat("আমার কিছু শারীরিক সমস্যা হচ্ছে, আমি কোন ডাক্তার দেখাব?")}
      className="bg-white p-5 md:p-6 rounded-3xl hover:shadow-xl transition-all group cursor-pointer border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
        <Stethoscope className="text-emerald-600" size={20} />
      </div>
      <h3 className="font-bold text-base md:text-lg mb-1">ডাক্তার গাইড</h3>
      <p className="text-[10px] md:text-xs text-on-surface-variant leading-relaxed">লক্ষণ অনুযায়ী সঠিক বিশেষজ্ঞ খুঁজে নিন</p>
    </div>
    <div 
      onClick={() => openChat("আমার একটি প্রেসক্রিপশন আছে, এটি আমাকে বুঝিয়ে বলুন।")}
      className="bg-white p-5 md:p-6 rounded-3xl hover:shadow-xl transition-all group cursor-pointer border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-amber-50 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
        <Package className="text-amber-600" size={20} />
      </div>
      <h3 className="font-bold text-base md:text-lg mb-1">প্রেসক্রিপশন</h3>
      <p className="text-[10px] md:text-xs text-on-surface-variant leading-relaxed">ওষুধের কাজ ও খাওয়ার নিয়ম বুঝে নিন</p>
    </div>
    <div 
      onClick={() => openChat("আপনাদের হেলথ প্যাকেজগুলো সম্পর্কে জানতে চাই।")}
      className="bg-white p-5 md:p-6 rounded-3xl hover:shadow-xl transition-all group cursor-pointer border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
        <ShieldCheck className="text-purple-600" size={20} />
      </div>
      <h3 className="font-bold text-base md:text-lg mb-1">হেলথ প্যাকেজ</h3>
      <p className="text-[10px] md:text-xs text-on-surface-variant leading-relaxed">সাশ্রয়ী চেকআপ প্যাকেজগুলো দেখুন</p>
    </div>
    <div 
      onClick={() => openChat("আমার এলাকায় ভালো ল্যাব বা হাসপাতাল কোথায় আছে?")}
      className="bg-white p-5 md:p-6 rounded-3xl hover:shadow-xl transition-all group cursor-pointer border border-slate-100 flex flex-col items-center text-center md:items-start md:text-left col-span-2 md:col-span-1"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-rose-50 flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
        <MapPin className="text-rose-600" size={20} />
      </div>
      <h3 className="font-bold text-base md:text-lg mb-1">হাসপাতাল ম্যাপ</h3>
      <p className="text-[10px] md:text-xs text-on-surface-variant leading-relaxed">নিকটস্থ স্বাস্থ্যসেবা কেন্দ্র খুঁজে নিন</p>
    </div>
  </section>
);

const HowItWorks = () => (
  <section className="py-20 px-4">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">কিভাবে কাজ করে?</h2>
      <p className="text-on-surface-variant max-w-xl mx-auto">সহজ ৪টি ধাপে আপনার স্বাস্থ্য সমস্যার সমাধান ও খরচের ধারণা পান</p>
    </div>
    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {[
        { step: "০১", title: "সমস্যা বলুন", desc: "চ্যাটবটে আপনার লক্ষণ বা সমস্যার কথা লিখুন।", icon: <MessageSquare size={24} /> },
        { step: "০২", title: "বিশ্লেষণ", desc: "আমাদের এআই আপনার লক্ষণ বিশ্লেষণ করে সম্ভাব্য রোগ জানাবে।", icon: <Activity size={24} /> },
        { step: "০৩", title: "খরচের ধারণা", desc: "ডাক্তার, টেস্ট ও ওষুধের সম্ভাব্য খরচের তালিকা দেখুন।", icon: <CreditCard size={24} /> },
        { step: "০৪", title: "সঠিক সিদ্ধান্ত", desc: "সঠিক ডাক্তার বা ল্যাব নির্বাচন করে চিকিৎসা শুরু করুন।", icon: <ShieldCheck size={24} /> }
      ].map((item, i) => (
        <div key={i} className="relative group">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 hover:border-primary/20 transition-all hover:shadow-xl h-full">
            <span className="text-5xl font-black text-slate-100 absolute top-6 right-8 group-hover:text-primary/5 transition-colors">{item.step}</span>
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 relative z-10">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed relative z-10">{item.desc}</p>
          </div>
          {i < 3 && (
            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
              <ArrowRight className="text-slate-200" size={24} />
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

const DoctorShowcase = () => {
  const doctors = [
    { 
      name: "ডাঃ সৌমিত্র দাশ", 
      specialty: "মেডিসিন ও ডায়াবেটিস বিশেষজ্ঞ", 
      degrees: "MBBS, BCS (Health), PGT (Medicine), CCD (BIRDEM)",
      experience: "বিশেষজ্ঞ চিকিৎসক",
      location: "চট্টগ্রাম মেডিকেল কলেজ ও কসমোপলিটন হাসপাতাল", 
      fee: "৫০০ – ৮০০", 
      tag: "New", 
      tagColor: "bg-blue-100 text-blue-700", 
      img: "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/86661808_138812060936433_3993841302016884736_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFkrKh2hLDuK0EPAGKTm2meWQ900zCyeCJZD3TTMLJ4Ihbab6eNV46zOyzYz1OJGeLz8L4L4RmuPjO7zVMryof2&_nc_ohc=uzwhq0fYg7oQ7kNvwEMedEy&_nc_oc=AdodPrENHsFCljQtIgnrooFdS1EsA5XDLQVuy2wLfmDgyKBg5cc1_7yMn2yixpYvzOc&_nc_zt=23&_nc_ht=scontent.fcgp3-1.fna&_nc_gid=G-SZa2UiJZFbwfk2k7BZGA&_nc_ss=7a3a8&oh=00_AfwcW3GVlVVm76DqGerES_HpjWcezF3-GAZ0F5HImiZpUA&oe=69F35B60",
      details: "চেম্বার ১: মেসার্স গৌরি ফার্মেসী (সন্ধ্যা ৭-১০টা), সিরিয়াল: ০১৮৬৪-০৭০৮৯১ | চেম্বার ২: কসমোপলিটন হাসপাতাল, চট্টগ্রাম"
    },
    { 
      name: "ডাঃ আবু সায়েম মোহাম্মদ ওমর ফারুক", 
      specialty: "হৃদরোগ বিশেষজ্ঞ", 
      degrees: "MBBS, BCS (Health), MD (Cardiology)",
      experience: "১৬ বছরের অভিজ্ঞতা",
      location: "অ্যাপোলো ইমপেরিয়াল ও শেভরন, চট্টগ্রাম", 
      fee: "৫০০ – ১০০০", 
      tag: "Popular", 
      tagColor: "bg-primary/10 text-primary", 
      img: "https://cdn.sasthyaseba.com/doctors/6096/ueXXfe2uKQ2ayVhnFzjbcSNa9suLiQpX7fGmnLvg/dr-abu-sayem-mohammed-omar-faroque.jpg",
      details: "চেম্বার ১: অ্যাপোলো ইমপেরিয়াল (সকাল), সিরিয়াল: ০৯৬১০৮৪৭৮৪৭ | চেম্বার ২: শেভরন ল্যাব (সন্ধ্যা ৬-৯টা), সিরিয়াল: ০১৮৪৬৪৬৯৩৩১"
    },
    { 
      name: "ডাঃ আহমেদ হাসান", 
      specialty: "মেডিসিন বিশেষজ্ঞ", 
      degrees: "MBBS, FCPS (Medicine)",
      experience: "১২ বছরের অভিজ্ঞতা",
      location: "চট্টগ্রাম মেডিকেল কলেজ", 
      fee: "৫০০ – ১২০০", 
      tag: "Popular", 
      tagColor: "bg-primary/10 text-primary", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClUI5scIudpJ7-OW1zcze5fu9NfYGJduuh5T6TtLYV2SbwDyYq_DSCcCR0UYiau7fvx0JI3mUf3DbXkzgadZ3LAROYfCr_4lYRK_UHAXUPOW2Fi3v3adxFzMVoAmdpbzAUQMvgZ47yrqtLPGrynkoL7htAxPd3t7mXmfiyQ4nmgqvr0YzOxYkQORAlL8Cp_erU4wiTajwDOfPJa-UpYHmYd1W5xqtDUNJfTv0WmR1qCvVphYSlgXYWNgyukpPByAARyRbm0XqjukI" 
    },
    { 
      name: "ডাঃ ফাতেমা জোহরা", 
      specialty: "স্ত্রীরোগ বিশেষজ্ঞ", 
      degrees: "MBBS, MS (Gynae)",
      experience: "১০ বছরের অভিজ্ঞতা",
      location: "ঢাকা মেডিকেল কলেজ", 
      fee: "৮০০ – ১৫০০", 
      tag: "Recommended", 
      tagColor: "bg-secondary-container text-on-secondary-container", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9OwDMQjiYRrep4gsqGCmM0eJxbVfe2kjishGsSv2H7UIz-aCToqhe31ePqKshKt1qNqpgpk2f_NH-ZHMxVIkhmdYuQFDH6UWNTynKEjdglwpio9RvqrnbYihnd7OHIHQWs-VgxGbK2kEG7Ib77bUOEAtCYhkYOI4hB_7BMwb_Y-1dP-jEi4x8HnHuPU8haiEjzLDoDLBjQA5FkXHoUdS754sKLSUR-78q_YbtrqLq48uBQbvGepDMdA2ySBtUPN_Mn9jqv3H4wyE" 
    },
    { 
      name: "ডাঃ কবির উদ্দীন", 
      specialty: "হৃদরোগ বিশেষজ্ঞ", 
      degrees: "MBBS, MD (Cardiology)",
      experience: "১৫ বছরের অভিজ্ঞতা",
      location: "সিলেট এম এ জি ওসমানী মেডিকেল", 
      fee: "১০০০ – ২০০০", 
      tag: "Popular", 
      tagColor: "bg-primary/10 text-primary", 
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBalLCjw8iWaTJAQAjKcL-5HHA7iB1-_SnH88PnIPGPgdw_Pqp8GE-nzrYo10EQlI092LfOPCB4g9HoyO9sI8VWgRWs7370Ao8P5zbhMDUzNolgZ99J6qSpKOLADUKK2-XRz20Vxjwd2pi65OjUtYBfs-cm9qcqU2i7zRAESQloSwu5_yCEz2NYl0-w0QNOW8pvT0UG7f_yrvLO7E6vjN_QqeEdP4oAtiOboTQEJ7BybBH6wUWnMfA0uyCBm8d4RWnEkPZb5UoMQ3I" 
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex justify-between items-end mb-8">
        <h2 className="text-3xl font-bold">আজকের জনপ্রিয় ডাক্তার</h2>
        <button className="text-primary font-bold flex items-center gap-1 hover:underline underline-offset-4">
          সব ডাক্তার দেখুন <ArrowRight size={16} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {doctors.map((doc, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-[2rem] shadow-sm hover:shadow-xl transition-all border border-transparent hover:border-primary/10 flex flex-col">
            <div className="flex gap-4 mb-4">
              <img className="w-16 h-16 rounded-2xl object-cover" src={doc.img} alt={doc.name} referrerPolicy="no-referrer" loading="lazy" />
              <div>
                <div className="flex gap-2 mb-1">
                  <span className={`${doc.tagColor} text-[9px] font-bold px-2 py-0.5 rounded-full uppercase`}>{doc.tag}</span>
                </div>
                <h3 className="font-bold text-lg leading-tight">{doc.name}</h3>
                <p className="text-primary font-bold text-xs mt-1">{doc.specialty}</p>
              </div>
            </div>
            
            <div className="flex-1 space-y-3 mb-6">
              <p className="text-xs text-on-surface-variant font-medium leading-relaxed">{doc.degrees}</p>
              <div className="space-y-1.5 text-[13px] text-on-surface-variant">
                <p className="flex items-center gap-2 font-medium"><Activity size={14} className="text-primary/60" /> {doc.experience}</p>
                <p className="flex items-center gap-2"><MapPin size={14} className="text-primary/60" /> {doc.location}</p>
                <p className="flex items-center gap-2 font-bold text-on-surface"><CreditCard size={14} className="text-primary/60" /> ফি: {doc.fee} টাকা</p>
                {doc.details && (
                  <p className="text-[11px] text-primary font-medium mt-2 leading-relaxed bg-primary/5 p-2 rounded-lg border border-primary/10">
                    <Activity size={12} className="inline mr-1" /> {doc.details}
                  </p>
                )}
              </div>
            </div>

            <button 
              onClick={() => openChat(`আমি ${doc.name} কে দেখাতে চাই। ${doc.details ? `উনার চেম্বার ও সিরিয়াল সম্পর্কে জানুন: ${doc.details}` : 'উনার সিরিয়াল বা খরচ সম্পর্কে বিস্তারিত বলুন।'}`)} 
              className="w-full py-3 rounded-xl bg-primary/5 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2"
            >
              খরচ ও সিরিয়াল জানুন <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const CostIntelligenceDashboard = () => (
  <section id="costs" className="py-16 md:py-24 space-y-12">
    <div className="text-center space-y-4">
      <h2 className="text-2xl md:text-4xl font-bold text-on-surface tracking-tight">খরচের সঠিক ধারণা (Cost Intelligence)</h2>
      <p className="text-on-surface-variant max-w-2xl mx-auto text-base md:text-lg">বাংলাদেশে চিকিৎসা সেবার সাধারণ খরচের একটি ধারণা নিন</p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
      {[
        { 
          title: "ডাক্তারের ফি", 
          range: "৳ ৫০০ – ১৫০০", 
          icon: <User size={32} />, 
          details: "এমবিবিএস থেকে বিশেষজ্ঞ ডাক্তার। এলাকা এবং অভিজ্ঞতা ভেদে ফি ভিন্ন হয়।",
          color: "bg-blue-50 text-blue-700"
        },
        { 
          title: "ল্যাব টেস্ট", 
          range: "৳ ৫০০ – ৫০০০", 
          icon: <Activity size={32} />, 
          details: "রক্ত পরীক্ষা থেকে এমআরআই। ল্যাবের মান অনুযায়ী দামের পার্থক্য হতে পারে।",
          color: "bg-purple-50 text-purple-700"
        },
        { 
          title: "ওষুধের খরচ", 
          range: "৳ ২০০ – ২০০০", 
          icon: <Stethoscope size={32} />, 
          details: "সাধারণ থেকে দীর্ঘমেয়াদী রোগ। একই ওষুধের দাম বিভিন্ন কোম্পানির ভিন্ন হতে পারে।",
          color: "bg-orange-50 text-orange-700"
        }
      ].map((item, i) => (
        <div key={i} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-outline-variant/20 editorial-shadow space-y-8 hover:border-primary/30 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 transition-all group-hover:scale-150" />
          <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform relative z-10`}>
            {item.icon}
          </div>
          <div className="space-y-3 relative z-10">
            <h3 className="text-lg md:text-xl font-bold">{item.title}</h3>
            <p className="text-2xl md:text-4xl font-bold text-primary tracking-tight">{item.range}</p>
            <p className="text-sm md:text-base text-outline font-medium leading-relaxed">{item.details}</p>
          </div>
          <button 
            onClick={() => openChat()}
            className="w-full py-4 rounded-2xl border-2 border-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all relative z-10"
          >
            বিস্তারিত জানুন
          </button>
        </div>
      ))}
    </div>
    
    <div className="bg-secondary-container/30 p-8 rounded-3xl border border-secondary/10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
      <div className="bg-white p-4 rounded-full text-secondary shadow-sm shrink-0">
        <AlertTriangle size={32} />
      </div>
      <div className="space-y-1">
        <p className="text-secondary font-bold text-lg">সতর্কতা ও তথ্য</p>
        <p className="text-secondary/80 font-medium text-sm md:text-base leading-relaxed">
          হাসপাতালের ধরন, অবস্থান এবং ডাক্তারের অভিজ্ঞতার ওপর ভিত্তি করে এই খরচ কম-বেশি হতে পারে। সঠিক খরচের জন্য আমাদের <button onClick={() => openChat()} className="underline font-bold text-secondary">এআই চ্যাটবট</button> ব্যবহার করুন।
        </p>
      </div>
    </div>
  </section>
);

const CostExamples = () => (
  <section className="mb-16 bg-surface-container-low rounded-[3rem] p-8 md:p-12">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-bold mb-4">বাংলাদেশে সাধারণ খরচ</h2>
        <p className="text-on-surface-variant mb-8">একই জিনিসের দাম জায়গা ভেদে আলাদা হয়। আমরা আপনাকে সঠিক ধারণা দেই।</p>
        <div className="space-y-4">
          <div className="bg-surface-container-lowest p-4 rounded-2xl flex justify-between items-center">
            <span className="font-bold">CBC Test</span>
            <span className="text-primary font-black">৪০০ – ১০০০ টাকা</span>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-2xl flex justify-between items-center">
            <span className="font-bold">Dengue NS1</span>
            <span className="text-primary font-black">৫০ – ৩০০ টাকা</span>
          </div>
          <div className="bg-surface-container-lowest p-4 rounded-2xl flex justify-between items-center">
            <span className="font-bold">Doctor Consultation</span>
            <span className="text-primary font-black">৫০০ – ১৫০০ টাকা</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <img className="rounded-[2.5rem] shadow-2xl w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnkbictFQeIgX2W8qW1HA-WBwwdn2YafD-U1Szkc515kE2iMcI-N9SCfGxjpnFxJzWBxKF4e8sCkCzyEoUub5bDVcS_4E0OGpSkHS_WPwUJ5JxumY5yl1jc5cowMnDH7XsGx_-tGEi982_RAX-GMweKjAGbgW-XJalZZdBzivdRyymAWR8O2S-4qaT6tGsAW4ZMoAu292r3YnhEA4n3dpwPeM3NWmDHNVNInGBnVSCT176q0Fbecw5XEkb0CIFpUp9H8fvIuyH1X4" alt="Lab" referrerPolicy="no-referrer" loading="lazy" />
        <div className="absolute -bottom-6 -right-6 bg-tertiary-container text-on-tertiary-container p-6 rounded-3xl max-w-xs shadow-xl hidden md:block">
          <Lightbulb className="mb-2" size={24} />
          <p className="font-bold">টিপস: সরকারি হাসপাতালে এই টেস্টগুলো অনেক কম খরচে করা যায়।</p>
        </div>
      </div>
    </div>
  </section>
);

const HealthPackages = () => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold mb-8 text-center">স্বাস্থ্য প্যাকেজসমূহ</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white rounded-3xl p-8 border border-outline-variant/30 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-error-container text-on-error-container rounded-full flex items-center justify-center mb-6">
          <Bug size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">ডেঙ্গু প্যাকেজ</h3>
        <p className="text-primary text-3xl font-black mb-4">৳ ৬৯৯</p>
        <ul className="text-on-surface-variant mb-8 space-y-2">
          <li>CBC Test</li>
          <li>NS1 Antigen</li>
          <li>IgG/IgM Antibody</li>
        </ul>
        <button className="w-full py-4 bg-surface-container-highest rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">প্যাকেজ দেখুন</button>
      </div>
      <div className="bg-primary text-white rounded-[3rem] p-8 flex flex-col items-center text-center shadow-2xl scale-105 z-10">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
          <User size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">ফুল বডি চেকআপ</h3>
        <p className="text-primary-fixed text-3xl md:text-4xl font-bold mb-4 text-on-primary-fixed">৳ ২৯৯৯</p>
        <ul className="opacity-90 mb-8 space-y-2">
          <li>১৮+ প্রয়োজনীয় টেস্ট</li>
          <li>ডাক্তার পরামর্শ ফ্রী</li>
          <li>রিপোর্ট হোম ডেলিভারি</li>
        </ul>
        <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold hover:bg-primary-fixed transition-all">প্যাকেজ দেখুন</button>
      </div>
      <div className="bg-white rounded-3xl p-8 border border-outline-variant/30 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-tertiary-fixed text-on-tertiary-fixed rounded-full flex items-center justify-center mb-6">
          <Droplet size={32} />
        </div>
        <h3 className="text-2xl font-bold mb-2">ডায়াবেটিস গাইড</h3>
        <p className="text-primary text-3xl font-black mb-4">৳ ৪৯৯</p>
        <ul className="text-on-surface-variant mb-8 space-y-2">
          <li>Fasting Sugar</li>
          <li>HbA1c</li>
          <li>খাবার চার্ট</li>
        </ul>
        <button className="w-full py-4 bg-surface-container-highest rounded-2xl font-bold hover:bg-primary hover:text-white transition-all">প্যাকেজ দেখুন</button>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="mb-16">
    <h2 className="text-3xl font-bold mb-10">কেন Dakter Achen?</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-secondary-container rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-lg rounded-bl-lg p-6">
        <ShieldCheck className="text-primary mb-4" size={24} />
        <h4 className="font-bold text-lg mb-2">বাস্তব খরচ তথ্য</h4>
        <p className="text-sm opacity-80">বাজারের আসল মূল্য আমরা জানি।</p>
      </div>
      <div className="bg-secondary-container rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-lg rounded-bl-lg p-6">
        <Languages className="text-primary mb-4" size={24} />
        <h4 className="font-bold text-lg mb-2">সহজ ভাষায় গাইড</h4>
        <p className="text-sm opacity-80">জটিল মেডিকেল শব্দ বাদ দিয়ে সহজ বাংলা।</p>
      </div>
      <div className="bg-secondary-container rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-lg rounded-bl-lg p-6">
        <Map className="text-primary mb-4" size={24} />
        <h4 className="font-bold text-lg mb-2">বাংলাদেশ ভিত্তিক ডাটা</h4>
        <p className="text-sm opacity-80">আমাদের সব তথ্য আমাদের দেশের জন্য।</p>
      </div>
      <div className="bg-secondary-container rounded-tl-[1.5rem] rounded-br-[1.5rem] rounded-tr-lg rounded-bl-lg p-6">
        <Eye className="text-primary mb-4" size={24} />
        <h4 className="font-bold text-lg mb-2">কোনো লুকানো তথ্য না</h4>
        <p className="text-sm opacity-80">স্বচ্ছতা আমাদের প্রথম লক্ষ্য।</p>
      </div>
    </div>
  </section>
);

const Blogs = () => (
  <section className="mb-16">
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold">স্বাস্থ্য কথা</h2>
      <button className="bg-surface-container-high px-5 py-2 rounded-full font-bold text-sm">সব পড়ুন</button>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      <article className="group cursor-pointer">
        <div className="rounded-3xl overflow-hidden mb-4 aspect-video bg-surface-container">
          <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7KWqzgNi7WFttWSmmNI9bZc8vph0_VWcu0vkD7ngAGZfYBm_755V7sfs9l2sja3dqs8xT0CfmojkN5o3T2fDHc7hG7eSWeLyFEReFFla8peH8tUni0X8JGYFQiGsqKaJtFehKQbyYMb31CGJjzECui1pJHUpIZy-tKLeQ2wfNPJPVdYtFrSK7HzWw2y92Qhlm4jelBYWDlqNrcJxjTq6ScRbyVm64UIQ7mEKB7RJkdTzsz9uBkT0tr4QRdfR4WxWRco4ibKQYSCc" alt="Blog 1" referrerPolicy="no-referrer" loading="lazy" />
        </div>
        <h3 className="font-bold text-lg leading-snug group-hover:text-primary">ডেঙ্গু টেস্টের খরচ ও প্রয়োজনীয়তা</h3>
        <p className="text-sm text-on-surface-variant mt-2">৫ মিনিট আগে আপডেট হয়েছে</p>
      </article>
      <article className="group cursor-pointer">
        <div className="rounded-3xl overflow-hidden mb-4 aspect-video bg-surface-container">
          <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMsgPZweblkAm6xg1VDHQke8epd9OP97oZzZ0lHlbHNKYP8Elgof8DqPjcv-1NaYFYDA_Oc3WLdcVNipeuKtcqi_KKbLXqkb4M9qOKeByxGNy2g4j0DD79MIRX05oCQCS2m-MBb0j1FLPeQpWhN5fjm7Xz7bueD3V6uzlXD02qfquDve2Z49KvqNA2quOGqpWkc39cSlAWtgY3mLNJNFMBqYIXOddOUo9KldGseJvdPyxFxSk1E5RrVEBYKZGaS7mUVde15SB558k" alt="Blog 2" referrerPolicy="no-referrer" loading="lazy" />
        </div>
        <h3 className="font-bold text-lg leading-snug group-hover:text-primary">ঘরে বসে জ্বরের যত্ন নেওয়ার সঠিক নিয়ম</h3>
        <p className="text-sm text-on-surface-variant mt-2">২ ঘণ্টা আগে</p>
      </article>
      <article className="group cursor-pointer">
        <div className="rounded-3xl overflow-hidden mb-4 aspect-video bg-surface-container">
          <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHZbELPk_yEw1DI-GX91wXRa0aZnUWJOQ71PTxqSnbNoko3X9eb7VcA6vbIaJFVlqi99GlJVT2RPWUvaPigAd5VuMjNjcrhLPXeKXe24fJpkDAb8-NTDdauaeF3HpIATQQqd2lWsQDCYoc-1kvhfC48YpHPuOPOvJ07nqXni28SrNwvryfqArDwdWJ2sj910Uf0cFWp2ynjmw2ZjIaFWjC98pFiZqm7v8y6oIfTshzSXEY-kvQUFUZ2TwgoYmwiOLx1K6gPanPprM" alt="Blog 3" referrerPolicy="no-referrer" loading="lazy" />
        </div>
        <h3 className="font-bold text-lg leading-snug group-hover:text-primary">পেট ব্যথার ৫টি সাধারণ কারণ ও প্রতিকার</h3>
        <p className="text-sm text-on-surface-variant mt-2">১ দিন আগে</p>
      </article>
    </div>
  </section>
);

const LabOwnerCTA = () => (
  <section className="mb-16 bg-gradient-to-br from-secondary to-on-secondary-fixed-variant p-10 rounded-[3rem] text-white flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="max-w-md">
      <h2 className="text-3xl font-bold mb-4">আপনি কি ডাক্তার বা ল্যাব মালিক?</h2>
      <p className="opacity-80">আপনার সেবাগুলোকে হাজারো মানুষের কাছে পৌঁছে দিন এবং আপনার প্রতিষ্ঠানের তথ্য আপডেট করুন।</p>
    </div>
    <button className="bg-primary-fixed text-on-primary-fixed px-10 py-4 rounded-2xl font-black text-lg active:scale-95 transition-all shadow-xl shadow-black/20">
      যোগ দিন
    </button>
  </section>
);

const FinalCTA = () => (
  <section className="text-center py-20 bg-surface-container-lowest rounded-[4rem] border border-outline-variant/10 mb-16 px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">চিকিৎসার আগে খরচ জানুন</h2>
    <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">সঠিক সময়ে সঠিক তথ্য আপনার অনেক টাকা ও দুশ্চিন্তা বাঁচিয়ে দিতে পারে।</p>
    <button onClick={() => openChat()} className="editorial-gradient text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
      এখনই শুরু করুন
    </button>
  </section>
);

const Testimonials = () => (
  <section className="py-20 px-4 bg-primary/5 rounded-[3rem] mb-16 border border-primary/10">
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-3xl md:text-4xl font-bold">ব্যবহারকারীদের অভিজ্ঞতা</h2>
      <p className="text-on-surface-variant max-w-xl mx-auto">হাজারো মানুষ প্রতিদিন "ডাক্তার আছেন" ব্যবহার করে সঠিক সিদ্ধান্ত নিচ্ছেন</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {[
        { name: "আব্দুর রহমান", role: "চাকরিজীবী", text: "হঠাৎ রাতে বাচ্চার জ্বর আসায় খুব চিন্তায় ছিলাম। চ্যাটবট ব্যবহার করে জানলাম কী হতে পারে এবং কোন ডাক্তার দেখানো উচিত। অনেক উপকার হয়েছে।" },
        { name: "সাদিয়া ইসলাম", role: "গৃহিণী", text: "প্রেসক্রিপশনের ওষুধগুলো নিয়ে সবসময় কনফিউশনে থাকতাম। এখন ছবি তুলেই সব বুঝে নিতে পারি। খুব সহজ এবং কাজের।" },
        { name: "কামরুল হাসান", role: "ব্যবসায়ী", text: "ল্যাব টেস্টের খরচ নিয়ে আগে কোনো ধারণা ছিল না। এখন এলাকা অনুযায়ী খরচ তুলনা করে অনেক টাকা বাঁচাতে পারছি।" }
      ].map((t, i) => (
        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex gap-1 text-amber-400 mb-4">
            {[...Array(5)].map((_, i) => <Activity key={i} size={16} fill="currentColor" />)}
          </div>
          <p className="text-on-surface-variant italic mb-6 leading-relaxed">"{t.text}"</p>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
              {t.name[0]}
            </div>
            <div>
              <h4 className="font-bold text-sm">{t.name}</h4>
              <p className="text-xs text-outline">{t.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-on-primary-fixed text-on-primary-fixed-variant py-12 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1.5 rounded-lg flex items-center justify-center">
            <Stethoscope className="text-primary" size={20} />
          </div>
          <h1 className="text-xl font-black text-white tracking-tight">Dakter Achen</h1>
        </div>
        <p className="text-sm opacity-70 leading-relaxed">বাংলাদেশের প্রথম হেলথ ডিসিশন প্ল্যাটফর্ম। আমরা আপনাকে সঠিক চিকিৎসা ও খরচের ধারণা দিয়ে সাহায্য করি।</p>
      </div>
      <div className="space-y-4">
        <h4 className="text-white font-bold">সেবাসমূহ</h4>
        <ul className="space-y-2 text-sm opacity-70">
          <li><button onClick={() => openChat()} className="hover:text-white transition-colors">ডাক্তার গাইড</button></li>
          <li><button onClick={() => openChat()} className="hover:text-white transition-colors">টেস্টের খরচ</button></li>
          <li><button onClick={() => openChat()} className="hover:text-white transition-colors">প্রেসক্রিপশন রিডার</button></li>
          <li><button onClick={() => openChat()} className="hover:text-white transition-colors">হেলথ প্যাকেজ</button></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-white font-bold">কোম্পানি</h4>
        <ul className="space-y-2 text-sm opacity-70">
          <li><button className="hover:text-white transition-colors">আমাদের সম্পর্কে</button></li>
          <li><button className="hover:text-white transition-colors">ব্লগ</button></li>
          <li><button className="hover:text-white transition-colors">যোগাযোগ</button></li>
          <li><button className="hover:text-white transition-colors">প্রাইভেসি পলিসি</button></li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="text-white font-bold">যোগাযোগ</h4>
        <p className="text-sm opacity-70">যেকোনো প্রয়োজনে আমাদের ইমেইল করুন:</p>
        <p className="text-white font-bold text-sm">support@dakterachen.com</p>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 text-center text-xs opacity-50">
      <p>© since 2017-2026 present Dakter Achen. সকল স্বত্ব সংরক্ষিত।</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col">
      <Navbar />
      <main className="flex-grow pt-8 pb-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <Hero />
        <QuickActionGrid />
        <HowItWorks />
        <SymptomEntry />
        <DoctorShowcase />
        <CostIntelligenceDashboard />
        <Testimonials />
        <CostExamples />
        <HealthPackages />
        <TrustSection />
        <Blogs />
        <LabOwnerCTA />
        <FinalCTA />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

