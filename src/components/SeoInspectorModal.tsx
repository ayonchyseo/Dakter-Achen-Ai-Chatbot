import React, { useState, useEffect } from 'react';
import { X, Check, Copy, ExternalLink, Code2, Globe, Search, Sparkles, FileText } from 'lucide-react';
import { getActiveOrigin } from '../lib/seoManager';

interface SeoInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'bn' | 'en';
}

export default function SeoInspectorModal({ isOpen, onClose, lang }: SeoInspectorModalProps) {
  const [copied, setCopied] = useState(false);
  const [currentTitle, setCurrentTitle] = useState('');
  const [currentDescription, setCurrentDescription] = useState('');
  const [currentCanonical, setCurrentCanonical] = useState('');
  const [currentOgTitle, setCurrentOgTitle] = useState('');
  const [currentOgDesc, setCurrentOgDesc] = useState('');
  const [schemaText, setSchemaText] = useState('');
  const [parsedSchema, setParsedSchema] = useState<any>(null);

  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return;

    // Read live metadata from document
    setCurrentTitle(document.title || '');

    const descEl = document.querySelector('meta[name="description"]');
    setCurrentDescription(descEl?.getAttribute('content') || '');

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    setCurrentCanonical(canonicalEl?.getAttribute('href') || window.location.href);

    const ogTitleEl = document.querySelector('meta[property="og:title"]');
    setCurrentOgTitle(ogTitleEl?.getAttribute('content') || document.title);

    const ogDescEl = document.querySelector('meta[property="og:description"]');
    setCurrentOgDesc(ogDescEl?.getAttribute('content') || '');

    const schemaEl = document.getElementById('schema-medical-webpage');
    if (schemaEl && schemaEl.textContent) {
      try {
        const parsed = JSON.parse(schemaEl.textContent);
        setParsedSchema(parsed);
        setSchemaText(JSON.stringify(parsed, null, 2));
      } catch {
        setSchemaText(schemaEl.textContent.trim());
      }
    } else {
      setSchemaText('');
      setParsedSchema(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    if (!schemaText) return;
    navigator.clipboard.writeText(schemaText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const richResultsTestUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(currentCanonical || 'https://dakterachen.com/')}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 to-[#0B1220] text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Code2 size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">
                  {lang === 'bn' ? 'লাইভ এসইও ও স্কিমা ইন্সপেক্টর (SEO & Schema)' : 'Live SEO & Schema.org Inspector'}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {parsedSchema?.['@type'] || 'Active'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {lang === 'bn' ? 'বর্তমান পেজের সক্রিয় মেটা টাইটেল, ডেসক্রিপশন এবং Schema.org JSON-LD' : 'Live metadata and Schema.org structured data currently active in <head>'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 text-sm">
          {/* Google Search Snippet Simulation */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Search size={13} className="text-blue-500" />
                {lang === 'bn' ? 'গুগল সার্চ স্নsnippet প্রিভিউ (Google SERP Preview)' : 'Google Search Snippet Preview'}
              </span>
              <span className="text-[11px] text-slate-400">
                {currentTitle.length} {lang === 'bn' ? 'অক্ষর' : 'chars'}
              </span>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-4 h-4 rounded-full bg-teal-600 text-white flex items-center justify-center text-[10px] font-bold">✚</span>
                <span className="truncate max-w-[240px] sm:max-w-md font-medium text-slate-600">{currentCanonical}</span>
              </div>
              <h4 className="text-blue-700 hover:underline font-medium text-base sm:text-lg leading-snug cursor-pointer">
                {currentTitle || 'Dakter Achen — চট্টগ্রামের বিশেষজ্ঞ ডাক্তার ও স্বাস্থ্য প্ল্যাটফর্ম'}
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {currentDescription || 'কোনো মেটা ডেসক্রিপশন পাওয়া যায়নি।'}
              </p>
            </div>
          </div>

          {/* Quick Details Table */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="text-slate-500 font-semibold">{lang === 'bn' ? 'পেজ টাইটেল (<title>):' : 'Page Title (<title>):'}</div>
              <div className="font-mono text-slate-800 break-words font-medium">{currentTitle}</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <div className="text-slate-500 font-semibold">{lang === 'bn' ? 'ক্যানোনিকাল URL:' : 'Canonical URL:'}</div>
              <div className="font-mono text-emerald-700 break-all font-medium">{currentCanonical}</div>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 sm:col-span-2">
              <div className="text-slate-500 font-semibold">{lang === 'bn' ? 'মেটা ডেসক্রিপশন (<meta name="description">):' : 'Meta Description:'}</div>
              <div className="font-mono text-slate-800 break-words leading-relaxed">{currentDescription}</div>
            </div>
          </div>

          {/* Schema.org JSON-LD Structured Data */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 size={13} className="text-emerald-600" />
                  {lang === 'bn' ? 'Schema.org JSON-LD কোড:' : 'Schema.org JSON-LD Structured Data:'}
                </span>
                {parsedSchema?.['@type'] && (
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-cyan-100 text-cyan-800">
                    @{parsedSchema['@type']}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-bold transition-all"
                >
                  {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  <span>{copied ? (lang === 'bn' ? 'কপি হয়েছে!' : 'Copied!') : (lang === 'bn' ? 'স্কিমা কপি করুন' : 'Copy Schema')}</span>
                </button>

                <a
                  href={richResultsTestUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-xs"
                >
                  <span>{lang === 'bn' ? 'গুগলে টেস্ট করুন' : 'Test in Google'}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="relative">
              <pre className="bg-slate-950 text-emerald-400 p-4 rounded-2xl font-mono text-[11px] leading-relaxed overflow-x-auto max-h-72 border border-slate-800">
                {schemaText || '// No schema found in current document head'}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-100 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>{lang === 'bn' ? 'ডকুমেন্ট হেডে স্বয়ংক্রিয়ভাবে সিঙ্ক হচ্ছে' : 'Automatically synced with DOM <head>'}</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all"
          >
            {lang === 'bn' ? 'বন্ধ করুন' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
}
