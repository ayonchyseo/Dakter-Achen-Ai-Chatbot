import React, { useState } from 'react';
import {
  Phone,
  Droplet,
  Truck,
  Building2,
  MapPin,
  ExternalLink,
  Clock,
  ShieldAlert,
  Search,
  Check,
  Copy,
  ChevronRight
} from 'lucide-react';
import {
  CHATTAGRAM_BLOOD_BANKS,
  CHATTAGRAM_AMBULANCES,
  CHATTAGRAM_EMERGENCY_HOSPITALS,
  BloodBank,
  AmbulanceService,
  EmergencyHospital
} from '../data/emergencyData';

interface EmergencyViewProps {
  lang: 'bn' | 'en';
  onToast: (msg: string) => void;
  onNavigateHome: () => void;
}

export default function EmergencyView({ lang, onToast, onNavigateHome }: EmergencyViewProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'blood' | 'ambulance' | 'hospitals'>('all');
  const [bloodSearchQuery, setBloodSearchQuery] = useState('');

  const copyNumber = (num: string, label: string) => {
    try {
      navigator.clipboard.writeText(num);
      onToast(lang === 'bn' ? `${label} কপি হয়েছে: ${num}` : `${label} copied: ${num}`);
    } catch {
      onToast(num);
    }
  };

  const filteredBlood = CHATTAGRAM_BLOOD_BANKS.filter(b => {
    if (!bloodSearchQuery.trim()) return true;
    const q = bloodSearchQuery.toLowerCase();
    return (
      b.nameBn.toLowerCase().includes(q) ||
      b.nameEn.toLowerCase().includes(q) ||
      b.areaBn.toLowerCase().includes(q) ||
      b.areaEn.toLowerCase().includes(q)
    );
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 animate-fade-in space-y-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-red-600 via-rose-700 to-red-800 text-white rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs sm:text-sm font-bold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>{lang === 'bn' ? 'চট্টগ্রাম ২৪/৭ জরুরি স্বাস্থ্য ও রক্তের ডিরেক্টরি' : 'Chattogram 24/7 Emergency & Blood Directory'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
            {lang === 'bn' ? 'জরুরি রক্তের ব্যাংক, আইসিইউ অ্যাম্বুলেন্স ও ট্রমা সেন্টার' : 'Emergency Blood Banks, ICU Ambulances & Trauma Care'}
          </h1>

          <p className="text-sm sm:text-base text-red-100 font-medium leading-relaxed">
            {lang === 'bn'
              ? 'জরুরি সংকটে কোনো কালক্ষেপণ ছাড়াই সরাসরি সরকারি ৯৯৯, সন্ধানীর ব্লাড ব্যাংক এবং চট্টগ্রামের সার্বক্ষণিক আইসিইউ সেবা নিন।'
              : 'Direct 1-tap call to Sandhani, Red Crescent blood services, verified ICU ambulances and CMCH emergency hotline.'}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="tel:999"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-red-700 font-black text-sm sm:text-base shadow-lg hover:bg-red-50 transition-all active:scale-95"
            >
              <Phone className="w-5 h-5 text-red-600 animate-bounce" />
              <span>{lang === 'bn' ? 'জাতীয় জরুরি হটলাইন: ৯৯৯' : 'National Emergency: 999'}</span>
            </a>

            <a
              href="tel:01713998399"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-red-900/60 hover:bg-red-900/80 border border-white/20 text-white font-bold text-sm transition-all active:scale-95"
            >
              <Building2 className="w-4 h-4 text-rose-300" />
              <span>{lang === 'bn' ? 'চমেক জরুরি: 01713-998399' : 'CMCH Emergency: 01713-998399'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-3">
        {[
          { key: 'all', labelBn: 'সকল জরুরি সেবা', labelEn: 'All Services', icon: ShieldAlert },
          { key: 'blood', labelBn: 'রক্তের ব্যাংক ও সন্ধানকারী', labelEn: 'Blood Banks', icon: Droplet },
          { key: 'ambulance', labelBn: 'আইসিইউ অ্যাম্বুলেন্স', labelEn: 'Ambulances', icon: Truck },
          { key: 'hospitals', labelBn: 'হাসপাতাল জরুরি বিভাগ', labelEn: 'Trauma Centers', icon: Building2 },
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{lang === 'bn' ? tab.labelBn : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* 1. Blood Banks Section */}
      {(activeTab === 'all' || activeTab === 'blood') && (
        <section className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Droplet className="w-6 h-6 text-red-600 fill-red-100" />
                <span>{lang === 'bn' ? 'রক্তের ব্যাংক ও স্বেচ্ছাসেবী সংগঠন (চট্টগ্রাম)' : 'Chattogram Blood Banks & Volunteers'}</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {lang === 'bn' ? 'জরুরি রক্তের প্রয়োজনে সরাসরি যোগাযোগ করুন' : 'Direct emergency contacts for verified blood donors'}
              </p>
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={bloodSearchQuery}
                onChange={e => setBloodSearchQuery(e.target.value)}
                placeholder={lang === 'bn' ? 'এলাকা বা নাম খুঁজুন...' : 'Search area or bank...'}
                className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-red-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredBlood.map(bank => (
              <div
                key={bank.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-red-700 border border-red-200">
                      {bank.is24x7 ? (lang === 'bn' ? '২৪/৭ খোলা' : '24/7 Open') : bank.availableHoursBn}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{bank.areaBn}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {lang === 'bn' ? bank.nameBn : bank.nameEn}
                  </h3>

                  <p className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{lang === 'bn' ? bank.addressBn : bank.addressEn}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`tel:${bank.phone.replace(/\D/g, '')}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{bank.phone}</span>
                  </a>
                  <button
                    onClick={() => copyNumber(bank.phone, bank.nameBn)}
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600"
                    title="Copy"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 2. Ambulance Services */}
      {(activeTab === 'all' || activeTab === 'ambulance') && (
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Truck className="w-6 h-6 text-cyan-700" />
              <span>{lang === 'bn' ? 'আইসিইউ ও জরুরি ভেন্টিলেটর অ্যাম্বুলেন্স' : 'ICU & Emergency Ventilator Ambulance'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {lang === 'bn' ? 'অক্সিজেন, ভেন্টিলেটর ও ক্রিটিক্যাল কেয়ার সাপোর্ট সংবলিত সার্বক্ষণিক সেবা' : '24/7 Life support ambulances with trained medical assistants'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {CHATTAGRAM_AMBULANCES.map(amb => (
              <div
                key={amb.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200">
                      {lang === 'bn' ? amb.typeBn : amb.typeEn}
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      24/7
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-900 leading-snug">
                    {lang === 'bn' ? amb.nameBn : amb.nameEn}
                  </h3>

                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{lang === 'bn' ? `স্ট্যান্ড: ${amb.locationBn}` : `Stand: ${amb.locationEn}`}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`tel:${amb.phone.replace(/\D/g, '')}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-[#0E7490] hover:bg-[#155E75] text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{amb.phone}</span>
                  </a>
                  <button
                    onClick={() => copyNumber(amb.phone, amb.nameBn)}
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600"
                    title="Copy"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Trauma & Emergency Hospitals */}
      {(activeTab === 'all' || activeTab === 'hospitals') && (
        <section className="space-y-4 pt-4 border-t border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Building2 className="w-6 h-6 text-slate-800" />
              <span>{lang === 'bn' ? 'চট্টগ্রামের প্রধান জরুরি ও ট্রমা সেন্টারসমূহ' : 'Key Emergency Trauma Hospitals'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              {lang === 'bn' ? '২৪/৭ ক্যাজুয়াল্টি, ক্যাথল্যাব ও জরুরি অপারেশন থিয়েটার সুবিধা' : '24/7 Emergency casualty, Cathlab, and ICU trauma departments'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CHATTAGRAM_EMERGENCY_HOSPITALS.map((hosp, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200 inline-block">
                    {lang === 'bn' ? hosp.typeBn : hosp.typeEn}
                  </span>

                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                    {lang === 'bn' ? hosp.nameBn : hosp.nameEn}
                  </h3>

                  <p className="text-xs text-slate-600 flex items-start gap-1.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>{lang === 'bn' ? hosp.locationBn : hosp.locationEn}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`tel:${hosp.emergencyPhone.replace(/\D/g, '')}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{lang === 'bn' ? 'জরুরি কল' : 'Call'} · {hosp.emergencyPhone}</span>
                  </a>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${hosp.googleMapsQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center justify-center"
                    title={lang === 'bn' ? 'গুগল ম্যাপে লোকেশন দেখুন' : 'View on Google Maps'}
                  >
                    <ExternalLink className="w-4 h-4 text-cyan-700" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
