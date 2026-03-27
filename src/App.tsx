import { 
  Search, 
  Bell, 
  User, 
  ChevronRight, 
  MapPin, 
  CreditCard, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Languages,
  Activity,
  HeartPulse,
  Microscope,
  Baby,
  Syringe,
  ClipboardCheck,
  Globe,
  Facebook,
  Mail,
  Phone
} from 'lucide-react';
import { motion } from 'motion/react';
import Chatbot from './components/Chatbot';

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm">
    <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-8">
        <span className="text-2xl font-black text-primary italic font-headline tracking-tight">Dakter Achen</span>
        <div className="hidden md:flex items-center gap-6">
          <a className="text-primary border-b-2 border-primary pb-1 font-headline tracking-tight text-sm font-semibold" href="#">Home</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-tight text-sm font-semibold" href="#">Doctors</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-tight text-sm font-semibold" href="#">Tests</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-headline tracking-tight text-sm font-semibold" href="#">Costs</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 hover:bg-surface-container rounded-lg transition-all text-sm font-semibold text-primary flex items-center gap-2">
          <Languages size={18} />
          Language
        </button>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-surface-container rounded-lg transition-all">
            <Bell size={20} className="text-on-surface-variant" />
          </button>
          <button className="p-2 hover:bg-surface-container rounded-lg transition-all">
            <User size={20} className="text-on-surface-variant" />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-20 pb-32 px-6 hero-gradient overflow-hidden">
    <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')" }}></div>
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-headline text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-12"
      >
        ডাক্তার আছেন – আগে জানুন, তারপর সিদ্ধান্ত নিন
      </motion.h1>
      <div className="relative max-w-2xl mx-auto">
        <div className="bg-white rounded-full p-2 flex items-center shadow-2xl">
          <Search className="ml-4 text-outline" size={24} />
          <input 
            className="w-full bg-transparent border-none focus:outline-none px-4 py-4 text-on-surface text-lg" 
            placeholder="ডাক্তার, হাসপাতাল বা টেস্টের নাম লিখুন" 
            type="text"
          />
          <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-full font-bold transition-all ml-2">খুঁজুন</button>
        </div>
      </div>
    </div>
  </section>
);

const GoalCards = () => (
  <section className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "আমি খরচ জানতে চাই", desc: "বিভিন্ন হাসপাতালে টেস্ট এবং ডাক্তারদের ভিজিট সম্পর্কে স্বচ্ছ ধারণা নিন।", icon: CreditCard },
        { title: "আমি ডাক্তার খুঁজতে চাই", desc: "আপনার সমস্যার জন্য সঠিক বিশেষজ্ঞ ডাক্তার খুঁজে বের করুন সহজেই।", icon: Search, active: true },
        { title: "আমি টেস্ট করতে চাই", desc: "কাছের ডায়াগনস্টিক সেন্টারে টেস্টের দাম এবং সুবিধা তুলনা করুন।", icon: Microscope }
      ].map((card, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className={`bg-surface-container-lowest p-8 rounded-xl editorial-shadow group hover:bg-primary transition-all duration-300 cursor-pointer ${card.active ? 'border-t-4 border-primary' : ''}`}
        >
          <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center mb-6 group-hover:bg-white/20">
            <card.icon className="text-primary group-hover:text-white" size={28} />
          </div>
          <h3 className="text-2xl font-bold mb-4 group-hover:text-white">{card.title}</h3>
          <p className="text-on-surface-variant group-hover:text-white/80 mb-6">{card.desc}</p>
          <ArrowRight className="text-primary group-hover:text-white" size={24} />
        </motion.div>
      ))}
    </div>
  </section>
);

const CostSnapshot = () => (
  <section className="max-w-7xl mx-auto px-6 mt-24">
    <div className="bg-surface-container-low rounded-xl p-10 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/3">
        <h2 className="text-3xl font-bold mb-4">এক নজরে বর্তমান খরচ</h2>
        <p className="text-on-surface-variant">ঢাকার শীর্ষ হাসপাতাল ও ল্যাবগুলোর গড় খরচের তালিকা। তথ্যগুলো সরাসরি রোগীদের অভিজ্ঞতা থেকে সংগৃহীত।</p>
        <div className="mt-6 flex items-center gap-2 text-primary font-semibold italic">
          <ShieldCheck size={20} />
          <span>রিয়েল-টাইম তথ্য</span>
        </div>
      </div>
      <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
        {[
          { label: "CBC Test", price: "৳৪০০ - ৳৮০০" },
          { label: "Dengue NS1", price: "৳৩০০ - ৳৬০০" },
          { label: "Specialist Visit", price: "৳৮০০ - ৳১৫০০" }
        ].map((item, i) => (
          <div key={i} className="bg-surface-container-lowest p-6 rounded-xl border-l-4 border-primary-container">
            <p className="text-sm font-bold text-outline uppercase tracking-wider mb-2">{item.label}</p>
            <p className="text-2xl font-extrabold text-primary">{item.price}</p>
            <p className="text-xs text-on-surface-variant mt-2">গড় খরচ (ঢাকা)</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Symptoms = () => (
  <section className="max-w-7xl mx-auto px-6 mt-24">
    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
      <Stethoscope className="text-primary" size={24} />
      আপনার কি কোনো উপসর্গ দেখা দিচ্ছে?
    </h2>
    <div className="flex flex-wrap gap-3">
      {["জ্বর (Fever)", "পেটে ব্যথা (Stomach Pain)", "কাশি (Cough)", "মাথা ব্যথা (Headache)", "দুর্বলতা (Weakness)", "শ্বাসকষ্ট (Shortness of Breath)", "বমি ভাব (Nausea)"].map((symptom, i) => (
        <button key={i} className="px-6 py-3 rounded-full bg-surface-container-high hover:bg-primary hover:text-white transition-all font-medium cursor-pointer">
          {symptom}
        </button>
      ))}
      <button className="px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-bold cursor-pointer">
        আরও দেখুন
      </button>
    </div>
  </section>
);

const DoctorGrid = () => {
  const doctors = [
    { name: "ডাঃ আনিসুর রহমান", specialty: "কার্ডিওলজিস্ট (হৃদরোগ বিশেষজ্ঞ)", location: "ধানমণ্ডি, ঢাকা", fee: "৳১০০০", tag: "Popular", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
    { name: "ডাঃ নুসরাত জাহান", specialty: "গাইনী বিশেষজ্ঞ", location: "উত্তরা, ঢাকা", fee: "৳১২০০", tag: "Recommended", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" },
    { name: "ডাঃ হাসান মাহমুদ", specialty: "চর্ম ও যৌন রোগ বিশেষজ্ঞ", location: "মিরপুর, ঢাকা", fee: "৳৮০০", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" },
    { name: "ডাঃ মাকসুদা আক্তার", specialty: "শিশু বিশেষজ্ঞ", location: "বনানী, ঢাকা", fee: "৳১০০০", img: "https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=400" },
    { name: "ডাঃ কামরুল ইসলাম", specialty: "মেডিসিন বিশেষজ্ঞ", location: "যাত্রাবাড়ী, ঢাকা", fee: "৳৭০০", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400" },
    { name: "ডাঃ সাবিনা ইয়াসমিন", specialty: "ডায়াবেটিস বিশেষজ্ঞ", location: "মতিঝিল, ঢাকা", fee: "৳৯০০", img: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?auto=format&fit=crop&q=80&w=400" }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 mt-32">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-headline font-extrabold mb-4">সেরা বিশেষজ্ঞ ডাক্তারগণ</h2>
          <p className="text-on-surface-variant text-lg">আপনার এরিয়ায় সবচেয়ে বেশি পরামর্শকৃত ডাক্তারদের প্রোফাইল দেখুন।</p>
        </div>
        <a className="text-primary font-bold flex items-center gap-2 hover:underline" href="#">
          সব ডাক্তার দেখুন <ChevronRight size={20} />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -4 }}
            className="bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow transition-all duration-300"
          >
            <div className="h-48 overflow-hidden bg-surface-container">
              <img className="w-full h-full object-cover" src={doc.img} alt={doc.name} referrerPolicy="no-referrer" />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold">{doc.name}</h4>
                  <p className="text-primary font-semibold">{doc.specialty}</p>
                </div>
                {doc.tag && (
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${doc.tag === 'Popular' ? 'bg-primary text-white' : 'bg-secondary-container text-primary'}`}>
                    {doc.tag}
                  </span>
                )}
              </div>
              <div className="space-y-2 mb-6 text-on-surface-variant text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{doc.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard size={16} />
                  <span className="font-bold text-on-surface">{doc.fee} (ভিজিট)</span>
                </div>
              </div>
              <button className="w-full py-3 bg-surface-container-high hover:bg-primary hover:text-white rounded-full font-bold transition-all">সিরিয়াল নিন</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TrustSection = () => (
  <section className="bg-surface-container-low py-32 mt-32">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-extrabold mb-8 leading-tight">কেন ডাক্তার আছেন আপনার প্রথম পছন্দ?</h2>
          <p className="text-on-surface-variant text-lg mb-12">আমরা বিশ্বাস করি স্বাস্থ্যসেবা হওয়া উচিত সহজ এবং স্বচ্ছ। আপনার সঠিক সিদ্ধান্তই আপনার সুস্থতার চাবিকাঠি।</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "সঠিক খরচের তথ্য", desc: "রিয়েলিটি-বেসড খরচ যা রোগীদের অভিজ্ঞতা থেকে নেওয়া।", icon: ClipboardCheck },
              { title: "সহজ ভাষা", desc: "কোনো জটিল মেডিকেল টার্ম নয়, আপনার বোঝার ভাষায় সব তথ্য।", icon: Globe },
              { title: "নির্ভরযোগ্য রিভিউ", desc: "সরাসরি রোগীদের দেওয়া রিভিউ দেখে সিদ্ধান্ত নিন।", icon: ShieldCheck },
              { title: "প্রতিদিনের আপডেট", desc: "সব হাসপাতাল ও ল্যাবের লেটেস্ট আপডেট পান এখানে।", icon: Activity }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-primary"><item.icon size={32} /></div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-on-surface-variant">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="bg-primary/5 absolute -inset-4 rounded-3xl -rotate-3"></div>
          <img 
            className="relative z-10 rounded-2xl editorial-shadow w-full object-cover aspect-[4/3]" 
            src="https://images.unsplash.com/photo-1505751172107-573225a91200?auto=format&fit=crop&q=80&w=800" 
            alt="Medical Trust"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  </section>
);

const Packages = () => (
  <section className="max-w-7xl mx-auto px-6 py-32">
    <h2 className="text-3xl font-extrabold mb-12 text-center">জনপ্রিয় হেলথ প্যাকেজ সমূহ</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { title: "এক্সিকিউটিভ হেলথ স্ক্রিনিং", category: "ফুল বডি চেকআপ", price: "৳৩,৯৯৯", features: ["৩০+ ল্যাব টেস্ট", "বিশেষজ্ঞ পরামর্শ", "ECG & X-Ray"], icon: Activity },
        { title: "মাদার কেয়ার প্যাকেজ", category: "নারী স্বাস্থ্য", price: "৳৫,৪৯৯", features: ["প্রেগনেন্সি চেকআপ", "৪টি আল্ট্রাসনোগ্রাম", "ডায়েট প্ল্যানিং"], icon: Baby, featured: true },
        { title: "সুগার কন্ট্রোল প্রো", category: "ডায়াবেটিস", price: "৳১,৯৯৯", features: ["HbA1c টেস্ট", "কিডনি ফাংশন টেস্ট", "৩ মাস ফলো-আপ"], icon: Syringe }
      ].map((pkg, i) => (
        <div key={i} className={`bg-surface-container-lowest p-8 rounded-xl editorial-shadow border relative ${pkg.featured ? 'border-2 border-primary' : 'border-outline-variant/20'}`}>
          {pkg.featured && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold">সেরা অফার</div>}
          <div className="bg-secondary-container text-primary px-4 py-1 rounded-full text-xs font-bold inline-block mb-6">{pkg.category}</div>
          <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
          <ul className="space-y-3 mb-8 text-on-surface-variant">
            {pkg.features.map((f, j) => (
              <li key={j} className="flex items-center gap-2">
                <CheckCircle2 className="text-primary" size={16} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center pt-6 border-t border-outline-variant/10">
            <span className="text-2xl font-extrabold text-primary">{pkg.price}</span>
            <button className={`px-6 py-2 rounded-full font-bold transition-all ${pkg.featured ? 'bg-primary text-white' : 'bg-primary-container text-white'}`}>বিস্তারিত</button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="max-w-7xl mx-auto px-6 mb-32">
    <div className="hero-gradient rounded-3xl p-16 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold mb-6">চিকিৎসার আগে খরচ জানুন</h2>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">অপ্রয়োজনীয় খরচ বাঁচান এবং আপনার সাধ্যের মধ্যে সেরা চিকিৎসা সেবাটি গ্রহণ করুন। আজই শুরু করুন আপনার অনুসন্ধান।</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-10 py-5 rounded-full font-bold text-lg hover:bg-surface-container transition-all">খরচ তুলনা করুন</button>
          <button className="bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all">আমাদের অ্যাপ ডাউনলোড করুন</button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface-container-low w-full pt-16 pb-8 border-t border-outline-variant/10">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-8 max-w-7xl mx-auto">
      <div className="col-span-1 md:col-span-1">
        <span className="font-headline font-bold text-primary text-2xl">Dakter Achen</span>
        <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">ডাক্তার আছেন আপনাকে সঠিক স্বাস্থ্যসেবা খুঁজে পেতে এবং খরচের সঠিক ধারণা দিতে সাহায্য করে। আমরা স্বাস্থ্যসেবাকে করি সহজ ও স্বচ্ছ।</p>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6">সেবা সমূহ</h4>
        <ul className="space-y-3">
          {["ডাক্তার খুঁজুন", "টেস্টের খরচ", "স্বাস্থ্য প্যাকেজ", "হাসপাতাল রিভিউ"].map((link, i) => (
            <li key={i}><a className="text-on-surface-variant hover:text-primary transition-all text-sm" href="#">{link}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6">লিঙ্ক</h4>
        <ul className="space-y-3">
          {["Sitemap", "Contact Us", "Privacy Policy", "Terms of Service"].map((link, i) => (
            <li key={i}><a className="text-on-surface-variant hover:underline text-sm" href="#">{link}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary mb-6">যোগাযোগ</h4>
        <p className="text-on-surface-variant text-sm mb-4">ঢাকা, বাংলাদেশ।</p>
        <div className="flex gap-4">
          <Facebook className="text-outline cursor-pointer hover:text-primary" size={20} />
          <Mail className="text-outline cursor-pointer hover:text-primary" size={20} />
          <Phone className="text-outline cursor-pointer hover:text-primary" size={20} />
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-on-surface-variant text-xs text-center md:text-left">© 2024 Dakter Achen. All rights reserved. Providing restorative healthcare across Bangladesh.</p>
      <p className="text-outline text-[10px] uppercase tracking-widest font-bold">Medical Disclaimer</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <GoalCards />
      <CostSnapshot />
      <Symptoms />
      <DoctorGrid />
      <TrustSection />
      <Packages />
      <FinalCTA />
      <Footer />
      <Chatbot />
    </div>
  );
}
