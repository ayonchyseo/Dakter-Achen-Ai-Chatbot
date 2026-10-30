import React, { useState } from 'react';
import { DIAGNOSTIC_TESTS, DiagnosticTestItem } from '../data/diagnosticCosts';
import { Search, X, AlertCircle, Clock, ShieldCheck, DollarSign, Building2, Hospital } from 'lucide-react';

interface DiagnosticCostModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: 'bn' | 'en';
}

export const DiagnosticCostModal: React.FC<DiagnosticCostModalProps> = ({
  isOpen,
  onClose,
  lang = 'bn',
}) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', labelBn: 'সকল টেস্ট', labelEn: 'All Tests' },
    { id: 'hematology', labelBn: 'রক্ত পরীক্ষা', labelEn: 'Blood Tests' },
    { id: 'diabetes', labelBn: 'ডায়াবেটিস', labelEn: 'Diabetes' },
    { id: 'cardiac', labelBn: 'হার্ট ও কার্ডিয়াক', labelEn: 'Cardiac' },
    { id: 'kidney', labelBn: 'কিডনি ও লিভার', labelEn: 'Kidney & Liver' },
    { id: 'radiology', labelBn: 'রেডিওলজি (USG/MRI/CT)', labelEn: 'Radiology / Imaging' },
  ];

  const filteredTests = DIAGNOSTIC_TESTS.filter((test) => {
    const matchesSearch =
      search.trim() === '' ||
      test.nameBn.toLowerCase().includes(search.toLowerCase()) ||
      test.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      test.categoryBn.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;

    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'hematology') return test.categoryBn.includes('রক্ত') || test.categoryEn.includes('Hematology');
    if (selectedCategory === 'diabetes') return test.categoryBn.includes('ডায়াবেটিস') || test.categoryEn.includes('Diabetes');
    if (selectedCategory === 'cardiac') return test.categoryBn.includes('কার্ডিয়াক') || test.categoryEn.includes('Cardiac') || test.nameEn.includes('ECG') || test.nameEn.includes('Echo');
    if (selectedCategory === 'kidney') return test.categoryBn.includes('কিডনি') || test.categoryBn.includes('লিভার') || test.nameEn.includes('Creatinine');
    if (selectedCategory === 'radiology') return test.categoryBn.includes('রেডিওলজি') || test.categoryEn.includes('Radiology') || test.nameEn.includes('USG') || test.nameEn.includes('MRI') || test.nameEn.includes('CT');

    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-emerald-100">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-100 text-xs font-medium mb-1">
              <DollarSign className="w-3.5 h-3.5" />
              {lang === 'bn' ? 'চট্টগ্রামের ল্যাব খরচ এস্টিমেটর' : 'Chattogram Diagnostic Cost Estimator'}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">
              {lang === 'bn' ? 'ডায়াগনস্টিক টেস্টের আনুমানিক খরচ' : 'Diagnostic Lab Test Costs'}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-0.5">
              {lang === 'bn'
                ? 'চমেক হাসপাতাল, স্ট্যান্ডার্ড প্রাইভেট ও কর্পোরেট ডায়াগনস্টিক সেন্টারের তুলনামূলক তালিকা'
                : 'Compare approximate costs between CMCH, Standard Private, and Corporate Diagnostic Centers'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={lang === 'bn' ? 'টেস্টের নাম দিয়ে খুঁজুন (যেমন: CBC, FBS, USG, MRI, ইসিজি)...' : 'Search test name (e.g., CBC, FBS, USG, MRI, ECG)...'}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
                }`}
              >
                {lang === 'bn' ? cat.labelBn : cat.labelEn}
              </button>
            ))}
          </div>
        </div>

        {/* Tests List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {filteredTests.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <AlertCircle className="w-10 h-10 mx-auto text-gray-300 mb-2" />
              <p className="font-medium">
                {lang === 'bn' ? 'কোনো টেস্টের ফলাফল পাওয়া যায়নি' : 'No tests found'}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {lang === 'bn' ? 'বানান সঠিক আছে কিনা যাচাই করুন অথবা অন্য ক্যাটাগরি বেছে নিন।' : 'Check your spelling or select another category.'}
              </p>
            </div>
          ) : (
            filteredTests.map((test) => (
              <div
                key={test.id}
                className="border border-gray-200 rounded-xl p-4 sm:p-5 hover:border-emerald-300 hover:shadow-sm transition-all bg-white"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-3">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wide text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded uppercase">
                      {lang === 'bn' ? test.categoryBn : test.categoryEn}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-1">
                      {lang === 'bn' ? test.nameBn : test.nameEn}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5">
                      {lang === 'bn' ? test.shortDescBn : test.shortDescEn}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 shrink-0 self-start sm:self-auto bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{lang === 'bn' ? `রিপোর্ট: ${test.deliveryTimeBn}` : `Report: ${test.deliveryTimeEn}`}</span>
                  </div>
                </div>

                {/* 3 Price comparison blocks */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-3">
                  {/* CMCH */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                        <Hospital className="w-3.5 h-3.5 text-slate-500" />
                        {lang === 'bn' ? 'চমেক হাসপাতাল (সরকারি)' : 'CMCH (Public)'}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {lang === 'bn' ? 'চট্টগ্রাম মেডিকেল কলেজ' : 'Govt subsidized rate'}
                      </p>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-800 mt-2">
                      {test.prices.publicCmch}
                    </div>
                  </div>

                  {/* Standard Private */}
                  <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                        <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                        {lang === 'bn' ? 'স্ট্যান্ডার্ড প্রাইভেট ল্যাব' : 'Standard Private'}
                      </div>
                      <p className="text-[11px] text-emerald-700/80 mt-0.5">
                        CSCR, Chevron, Sheba, Popular, Epic
                      </p>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-emerald-900 mt-2">
                      {test.prices.standardPrivate}
                    </div>
                  </div>

                  {/* Corporate Private */}
                  <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-800">
                        <Building2 className="w-3.5 h-3.5 text-blue-600" />
                        {lang === 'bn' ? 'কর্পোরেট প্রাইভেট' : 'Corporate Private'}
                      </div>
                      <p className="text-[11px] text-blue-700/80 mt-0.5">
                        Evercare, Imperial, Parkview
                      </p>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-blue-900 mt-2">
                      {test.prices.corporatePrivate}
                    </div>
                  </div>
                </div>

                {/* Preparation Tip if available */}
                {test.preparationBn && (
                  <div className="flex items-start gap-2 text-xs bg-amber-50 text-amber-800 border border-amber-200/70 p-2.5 rounded-lg mt-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-semibold">{lang === 'bn' ? 'প্রস্তুতি: ' : 'Preparation: '}</strong>
                      {lang === 'bn' ? test.preparationBn : test.preparationEn}
                    </span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer info note */}
        <div className="p-3 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500">
          {lang === 'bn'
            ? '💡 দ্রষ্টব্য: উল্লেখিত খরচগুলো চট্টগ্রামের স্থানীয় ডায়াগনস্টিক সেন্টারের সাধারণ তালিকা। রোগীর অবস্থা ও ল্যাবের আধুনিক যন্ত্রভেদে কিছুটা কম-বেশি হতে পারে।'
            : '💡 Note: Stated costs are typical market benchmarks in Chattogram. Rates may vary slightly based on specialized reagents, equipment, and discount cards.'}
        </div>
      </div>
    </div>
  );
};
