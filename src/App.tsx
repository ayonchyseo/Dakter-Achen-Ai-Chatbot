import { 
  Search, 
  MessageSquare, 
  ChevronRight, 
  MapPin, 
  CreditCard, 
  Stethoscope, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Activity,
  Globe,
  Facebook,
  Mail,
  Phone,
  Clock,
  AlertCircle,
  HeartPulse,
  Baby,
  Sparkles,
  Droplets
} from 'lucide-react';
import { motion } from 'motion/react';
import Chatbot from './components/Chatbot';

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
    <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <HeartPulse className="text-white" size={20} />
        </div>
        <span className="text-xl font-black text-primary italic tracking-tight">Dakter Achen</span>
      </div>
      <button className="text-sm font-bold text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all">
        Login
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-12 pb-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-6xl font-black text-on-surface leading-tight mb-4"
      >
        আপনার সমস্যার সহজ সমাধান
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-on-surface-variant mb-10"
      >
        কি হতে পারে, কত খরচ হতে পারে — সহজে জানুন
      </motion.p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 text-lg">
          <MessageSquare size={24} />
          চ্যাট করুন
        </button>
      </div>
    </div>
  </section>
);

const ChoosePath = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <h2 className="text-2xl font-black mb-10 text-center">আপনি কী করতে চান?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        { title: "আমার সমস্যা বুঝতে চাই", desc: "উপসর্গ দেখে রোগের ধারণা নিন", icon: Stethoscope, color: "bg-blue-50 text-blue-600" },
        { title: "খরচ জানতে চাই", desc: "ডাক্তার ও টেস্টের খরচ দেখুন", icon: CreditCard, color: "bg-green-50 text-green-600" },
        { title: "ডাক্তার দেখতে চাই", desc: "সেরা বিশেষজ্ঞ ডাক্তার খুঁজুন", icon: Search, color: "bg-amber-50 text-amber-600" }
      ].map((card, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
        >
          <div className={`w-16 h-16 ${card.color} rounded-2xl flex items-center justify-center mb-6`}>
            <card.icon size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">{card.title}</h3>
          <p className="text-on-surface-variant mb-8 text-sm">{card.desc}</p>
          <button className="w-full py-3 bg-surface-container-low hover:bg-primary hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2">
            শুরু করুন <ArrowRight size={18} />
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

const ChatHighlight = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-primary/5 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-black mb-6">চ্যাট করে সহজে জানুন</h2>
        <p className="text-on-surface-variant mb-10 text-lg">আমাদের এআই অ্যাসিস্ট্যান্ট আপনাকে সঠিক তথ্য দিয়ে সাহায্য করবে।</p>
        
        {/* Demo Chat */}
        <div className="space-y-4 mb-10">
          <div className="flex justify-end">
            <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-sm">
              আমার পেট ব্যথা
            </div>
          </div>
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-2xl rounded-tl-none max-w-[80%] text-sm shadow-sm border border-gray-100">
              সাধারণত এমন হলে কিছু সময় দেখা হয়, না কমলে ডাক্তার দেখানো হয়। খরচ ১৫০০–৩০০০ টাকা হতে পারে।
            </div>
          </div>
        </div>

        <button className="bg-primary text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-3">
          <MessageSquare size={24} />
          চ্যাট শুরু করুন
        </button>
      </div>
      <div className="md:w-1/2 relative">
        <div className="w-full aspect-square bg-primary/10 rounded-full flex items-center justify-center">
          <div className="w-3/4 h-3/4 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-6 flex flex-col justify-center items-center text-center">
             <Sparkles className="text-primary mb-4" size={48} />
             <p className="font-bold text-xl">Dakter Achen AI</p>
             <p className="text-on-surface-variant text-sm mt-2">আপনার স্বাস্থ্য বিষয়ক প্রশ্নের উত্তর দিতে প্রস্তুত</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CostSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-2xl font-black">খরচ জানুন</h2>
      <button className="text-primary font-bold flex items-center gap-1 hover:underline">
        সব দেখুন <ChevronRight size={20} />
      </button>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { label: "জ্বর খরচ", price: "৳৫০০ - ৳২০০০", icon: Activity },
        { label: "পেট ব্যথা খরচ", price: "৳১০০০ - ৳৩০০০", icon: AlertCircle },
        { label: "ডেঙ্গু টেস্ট খরচ", price: "৳৩০০ - ৳৬০০", icon: Droplets },
        { label: "CBC টেস্ট খরচ", price: "৳৪০০ - ৳৮০০", icon: CheckCircle2 }
      ].map((item, i) => (
        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center">
          <div className="w-12 h-12 bg-surface-container-low rounded-full flex items-center justify-center mb-4">
            <item.icon className="text-primary" size={24} />
          </div>
          <p className="font-bold text-on-surface mb-1">{item.label}</p>
          <p className="text-primary font-black text-lg">{item.price}</p>
        </div>
      ))}
    </div>
  </section>
);

const DoctorSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="flex justify-between items-center mb-10">
      <h2 className="text-2xl font-black">ডাক্তার দেখুন</h2>
      <button className="text-primary font-bold flex items-center gap-1 hover:underline">
        সব ডাক্তার দেখুন <ChevronRight size={20} />
      </button>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-8">
      {["মেডিসিন", "শিশু", "চর্মরোগ", "গ্যাস্ট্রো"].map((cat, i) => (
        <button key={i} className="px-6 py-2 rounded-full bg-surface-container-low hover:bg-primary hover:text-white transition-all text-sm font-bold">
          {cat}
        </button>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: "ডাঃ আনিসুর রহমান", specialty: "কার্ডিওলজিস্ট", location: "ধানমণ্ডি, ঢাকা", fee: "৳১০০০", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
        { name: "ডাঃ নুসরাত জাহান", specialty: "গাইনী বিশেষজ্ঞ", location: "উত্তরা, ঢাকা", fee: "৳১২০০", img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" },
        { name: "ডাঃ হাসান মাহমুদ", specialty: "চর্মরোগ বিশেষজ্ঞ", location: "মিরপুর, ঢাকা", fee: "৳৮০০", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400" },
        { name: "ডাঃ মাকসুদা আক্তার", specialty: "শিশু বিশেষজ্ঞ", location: "বনানী, ঢাকা", fee: "৳১০০০", img: "https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=400" }
      ].map((doc, i) => (
        <div key={i} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div className="h-40 overflow-hidden bg-gray-100">
            <img className="w-full h-full object-cover" src={doc.img} alt={doc.name} referrerPolicy="no-referrer" />
          </div>
          <div className="p-5">
            <h4 className="font-bold text-lg mb-1">{doc.name}</h4>
            <p className="text-primary text-sm font-bold mb-4">{doc.specialty}</p>
            <div className="space-y-2 text-xs text-on-surface-variant mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} />
                <span>{doc.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard size={14} />
                <span className="font-bold text-on-surface">ফি: {doc.fee}</span>
              </div>
            </div>
            <button className="w-full py-2 bg-surface-container-low hover:bg-primary hover:text-white rounded-xl font-bold transition-all text-sm">
              সিরিয়াল নিন
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const EmergencySection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-red-50 rounded-[40px] p-8 md:p-12 border border-red-100 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shrink-0">
          <Clock size={32} />
        </div>
        <div>
          <h2 className="text-2xl font-black text-red-900 mb-2">রাতে সমস্যা হলে কি করবেন?</h2>
          <p className="text-red-800/80">রাতে বেশিরভাগ চেম্বার বন্ধ থাকে। জরুরি হলে কাছের হাসপাতালে যাওয়া হয়।</p>
        </div>
      </div>
      <button className="bg-red-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
        জানুন
      </button>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-100">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        { title: "সহজ ভাষা", desc: "জটিল মেডিকেল টার্ম নয়, আপনার বোঝার ভাষায় সব তথ্য।", icon: Globe },
        { title: "বাস্তব খরচ", desc: "রোগীদের অভিজ্ঞতা থেকে নেওয়া সঠিক খরচের ধারণা।", icon: ShieldCheck },
        { title: "বাংলাদেশ ভিত্তিক", desc: "আমাদের দেশের প্রেক্ষাপটে তৈরি একমাত্র স্বাস্থ্য প্ল্যাটফর্ম।", icon: MapPin }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <div className="w-12 h-12 text-primary mb-6">
            <item.icon size={48} strokeWidth={1.5} />
          </div>
          <h4 className="font-bold text-xl mb-3">{item.title}</h4>
          <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-primary rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-black mb-6">চিকিৎসার আগে বুঝে নিন</h2>
        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">অপ্রয়োজনীয় খরচ বাঁচান এবং সঠিক চিকিৎসা সেবাটি গ্রহণ করুন।</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-surface-container transition-all flex items-center justify-center gap-2">
            <MessageSquare size={20} /> চ্যাট করুন
          </button>
          <button className="bg-transparent border-2 border-white/50 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
            খরচ দেখুন
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white w-full pt-20 pb-10 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <HeartPulse className="text-white" size={20} />
        </div>
        <span className="text-xl font-black text-primary italic tracking-tight">Dakter Achen</span>
      </div>
      
      <div className="flex gap-8 text-sm font-bold text-on-surface-variant">
        <a href="#" className="hover:text-primary transition-all">Home</a>
        <a href="#" className="hover:text-primary transition-all">Doctors</a>
        <a href="#" className="hover:text-primary transition-all">Costs</a>
        <a href="#" className="hover:text-primary transition-all">Contact</a>
      </div>

      <div className="flex gap-4">
        <Facebook className="text-outline cursor-pointer hover:text-primary" size={20} />
        <Mail className="text-outline cursor-pointer hover:text-primary" size={20} />
        <Phone className="text-outline cursor-pointer hover:text-primary" size={20} />
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">© 2024 Dakter Achen. All rights reserved.</p>
      <p className="text-outline text-[10px] uppercase tracking-widest font-bold">Medical Disclaimer</p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ChoosePath />
      <ChatHighlight />
      <CostSection />
      <DoctorSection />
      <EmergencySection />
      <TrustSection />
      <FinalCTA />
      <Footer />
      <Chatbot />
    </div>
  );
}

