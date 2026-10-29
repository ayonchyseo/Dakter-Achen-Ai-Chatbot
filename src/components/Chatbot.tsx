import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Bot,
  User,
  AlertTriangle,
  Image as ImageIcon,
  Mic,
  MicOff,
  MapPin,
  ExternalLink,
  Navigation,
  RefreshCw,
  Copy,
  Check,
  Compass,
  Sparkles,
  Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { sendChatMessage, ChatMessage, GroundedPlace } from '../lib/gemini';

const QUICK_PROMPTS = [
  { label: '📍 পাঁচলাইশ ও প্রবর্তকে ডায়াগনস্টিক সেন্টার', query: 'পাঁচলাইশ ও প্রবর্তক মোড়ে ভালো ডায়াগনস্টিক সেন্টার ও হাসপাতালের তালিকা ম্যাপসহ দিন।' },
  { label: '🩺 বুকে চিনচিন ব্যথা ও শ্বাসকষ্ট', query: 'বুকে চিনচিন ব্যথা ও হঠাৎ শ্বাসকষ্ট হচ্ছে। এটি কি হার্টের সমস্যা? আমার কোন বিশেষজ্ঞ দেখানো উচিত?' },
  { label: '👶 শিশু বিশেষজ্ঞ চেম্বার ও সময়সূচি', query: 'চট্টগ্রামে অভিজ্ঞ শিশু বিশেষজ্ঞ ডাক্তারের চেম্বার ও দেখানোর সময়সূচি কোথায় পাবো?' },
  { label: '💊 প্রেসক্রিপশনের নিয়ম বুঝতে চাই', query: 'প্রেসক্রিপশনে অ্যান্টিবায়োটিক ও গ্যাসের ওষুধ কীভাবে খাওয়া উচিত?' },
  { label: '🏥 চমেক (CMCH) জরুরি সেবা', query: 'চট্টগ্রাম মেডিকেল কলেজ হাসপাতালের জরুরি ও ওপিডি সেবার সময় ও ফি কত?' },
];

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    role: 'bot',
    text: 'নমস্কার / আদাব! আমি **ডাক্তার আছেন AI সহকারী (Health & Clinic Advisor)**। \n\nআমি আপনাকে যেভাবে সাহায্য করতে পারি:\n- 🩺 আপনার লক্ষণ অনুযায়ী সঠিক বিশেষজ্ঞ ডাক্তার নির্বাচন\n- 📍 চট্টগ্রামের যেকোনো এলাকায় চেম্বার, হাসপাতাল ও ল্যাব খুঁজে বের করা (গুগল ম্যাপস লোকেশনসহ)\n- 💊 প্রেসক্রিপশনের ওষুধ ও খাওয়ার নিয়ম বোঝা\n- 🏥 আনুমানিক চিকিৎসা খরচের স্বচ্ছ ধারণা\n\nআজ আপনাকে কীভাবে সাহায্য করতে পারি?',
    timestamp: 'এখন'
  }
];

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const saved = sessionStorage.getItem('dakterachen_chat_history');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return INITIAL_MESSAGES;
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationName, setLocationName] = useState<string>('চট্টগ্রাম (Chittagong)');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Sync to session storage
  useEffect(() => {
    try {
      sessionStorage.setItem('dakterachen_chat_history', JSON.stringify(messages));
    } catch {}
  }, [messages]);

  // Request user location on mount if permitted
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation({
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude,
          });
          setLocationName('আমার বর্তমান লোকেশন');
        },
        () => {
          // Default fallback to Chittagong Center
          setUserLocation({ latitude: 22.356851, longitude: 91.783182 });
        },
        { timeout: 8000 }
      );
    }
  }, []);

  // External event listener (e.g. from doctor cards or blog articles)
  useEffect(() => {
    const handleOpenChat = (e: any) => {
      setIsOpen(true);
      if (e.detail?.message) {
        setTimeout(() => {
          handleDirectSend(e.detail.message);
        }, 350);
      }
    };
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, [messages, isLoading, userLocation]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 8 * 1024 * 1024) {
        alert('ছবির আকার সর্বোচ্চ ৮ মেগাবাইট হতে হবে।');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }

    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('আপনার ব্রাউজার ভয়েস টাইপিং সাপোর্ট করে না। দয়া করে গুগল ক্রোম বা এজ ব্যবহার করুন।');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'bn-BD';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput((prev) => (prev ? `${prev} ${transcript}` : transcript));
      setIsRecording(false);
    };
    recognition.onerror = (event: any) => {
      console.warn('Speech recognition error:', event.error);
      setIsRecording(false);
    };
    recognition.onend = () => setIsRecording(false);

    try {
      recognition.start();
    } catch {
      setIsRecording(false);
    }
  };

  const handleDirectSend = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const timeStr = new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      role: 'user',
      text: userText.trim(),
      timestamp: timeStr,
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const res = await sendChatMessage({
        messages: nextMessages,
        newMessage: userText.trim(),
        location: userLocation,
      });

      const botMsg: ChatMessage = {
        role: 'bot',
        text: res.text || 'দুঃখিত, কোনো উত্তর পাওয়া যায়নি।',
        places: res.places,
        usedMaps: res.usedMaps,
        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: `⚠️ একটি ত্রুটি হয়েছে: ${err?.message || 'পুনরায় চেষ্টা করুন।'}`,
          timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userText = input.trim();
    const imageToSend = selectedImage;

    setInput('');
    setSelectedImage(null);

    const timeStr = new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      role: 'user',
      text: userText,
      image: imageToSend || undefined,
      timestamp: timeStr,
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      const res = await sendChatMessage({
        messages: nextMessages,
        newMessage: userText,
        image: imageToSend,
        location: userLocation,
      });

      const botMsg: ChatMessage = {
        role: 'bot',
        text: res.text || 'দুঃখিত, কোনো উত্তর পাওয়া যায়নি।',
        places: res.places,
        usedMaps: res.usedMaps,
        timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: `⚠️ ত্রুটি হয়েছে: ${err?.message || 'পুনরায় চেষ্টা করুন।'}`,
          timestamp: new Date().toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    if (confirm('আপনি কি পূর্বের কথোপকথন মুছে নতুন চ্যাট শুরু করতে চান?')) {
      setMessages(INITIAL_MESSAGES);
      sessionStorage.removeItem('dakterachen_chat_history');
    }
  };

  const copyText = (text: string, idx: number) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {}
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white md:rounded-3xl shadow-[0_12px_50px_-10px_rgba(14,116,144,0.35)] w-full h-full md:w-[480px] md:h-[680px] fixed inset-0 md:relative md:inset-auto flex flex-col overflow-hidden border border-slate-200/90 ring-1 ring-black/5 z-[70] md:z-auto"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0E7490] via-[#0891B2] to-[#0284C7] p-4 text-white shrink-0 shadow-md">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
                    <Bot size={22} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-base tracking-tight">ডাক্তার আছেন এআই</h3>
                      <span className="bg-emerald-400/20 text-emerald-200 border border-emerald-400/30 text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                        অনলাইন
                      </span>
                    </div>
                    <p className="text-xs text-white/80 font-medium">
                      Gemini 3.8 Flash • গুগল ম্যাপস কানেক্টেড
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={clearChat}
                    title="নতুন চ্যাট শুরু করুন"
                    className="p-2 hover:bg-white/20 text-white/80 hover:text-white rounded-xl transition-colors"
                  >
                    <RefreshCw size={17} />
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/20 text-white/90 hover:text-white rounded-xl transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Location Strip */}
              <div className="mt-3 pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-white/90">
                <div className="flex items-center gap-1.5 truncate">
                  <Compass size={13} className="text-cyan-200 shrink-0" />
                  <span className="truncate">সার্চ জোন: <strong className="text-white">{locationName}</strong></span>
                </div>
                <span className="bg-black/20 px-2 py-0.5 rounded text-[10px] shrink-0 font-medium text-cyan-100">
                  Maps Grounding Active
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70">
              {/* Medical Disclaimer Callout */}
              <div className="bg-amber-50 border border-amber-200/80 text-amber-900 p-3 rounded-2xl text-xs flex gap-2.5 items-start shadow-xs">
                <AlertTriangle size={17} className="text-amber-600 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>জরুরি সতর্কতা:</strong> এটি একটি এআই স্বাস্থ্য নির্দেশিকা, সরাসরি চিকিৎসক নয়। গুরুতর সমস্যা বা বুকে ব্যথায় অবিলম্বে ৯৯৯ নম্বরে বা নিকটস্থ জরুরি বিভাগে যোগাযোগ করুন।
                </div>
              </div>

              {/* Messages List */}
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2.5 max-w-[88%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div
                      className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 shadow-xs text-xs font-bold ${
                        msg.role === 'user'
                          ? 'bg-[#0E7490] text-white'
                          : 'bg-white text-[#0E7490] border border-slate-200'
                      }`}
                    >
                      {msg.role === 'user' ? <User size={15} /> : <Bot size={15} />}
                    </div>

                    <div className="space-y-2">
                      <div
                        className={`p-3.5 rounded-2xl text-sm leading-relaxed ${
                          msg.role === 'user'
                            ? 'bg-[#0E7490] text-white rounded-tr-none shadow-sm'
                            : 'bg-white text-slate-800 shadow-sm border border-slate-200/80 rounded-tl-none'
                        }`}
                      >
                        {msg.image && (
                          <div className="mb-2.5 overflow-hidden rounded-xl border border-white/20">
                            <img
                              src={msg.image}
                              alt="প্রেসক্রিপশন/রিপোর্ট"
                              className="max-w-full h-auto max-h-52 object-cover rounded-xl"
                            />
                          </div>
                        )}

                        <div className="prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-inherit prose-a:text-cyan-600 prose-strong:font-bold">
                          <Markdown>{msg.text}</Markdown>
                        </div>
                      </div>

                      {/* Google Maps Grounded Places Cards */}
                      {msg.places && msg.places.length > 0 && (
                        <div className="bg-white rounded-2xl p-3 border border-cyan-200/70 shadow-xs space-y-2.5">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E7490]">
                            <MapPin size={14} className="text-cyan-600" />
                            <span>গুগল ম্যাপস যাচাইকৃত চেম্বার ও ক্লিনিক ({msg.places.length}):</span>
                          </div>

                          <div className="grid gap-2">
                            {msg.places.map((place, pIdx) => (
                              <div
                                key={pIdx}
                                className="bg-slate-50 hover:bg-cyan-50/50 p-2.5 rounded-xl border border-slate-200 transition-colors flex items-start justify-between gap-2"
                              >
                                <div className="space-y-1">
                                  <div className="font-semibold text-xs text-slate-900 flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                                    {place.title}
                                  </div>
                                  {place.reviewSnippets && place.reviewSnippets.length > 0 && (
                                    <p className="text-[11px] text-slate-600 italic line-clamp-2">
                                      &quot;{place.reviewSnippets[0]}&quot;
                                    </p>
                                  )}
                                </div>

                                {place.uri && (
                                  <a
                                    href={place.uri}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="shrink-0 inline-flex items-center gap-1 bg-[#0E7490] text-white hover:bg-[#0891B2] px-2.5 py-1.5 rounded-lg text-[11px] font-bold shadow-2xs transition-all active:scale-95"
                                  >
                                    <Navigation size={11} />
                                    <span>ম্যাপে দেখুন</span>
                                    <ExternalLink size={10} />
                                  </a>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Message Footer */}
                      <div className={`flex items-center gap-2 text-[10px] text-slate-400 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        {msg.timestamp && <span>{msg.timestamp}</span>}
                        {msg.role === 'bot' && (
                          <button
                            onClick={() => copyText(msg.text, i)}
                            className="text-slate-400 hover:text-slate-700 flex items-center gap-1 transition-colors"
                            title="উত্তর কপি করুন"
                          >
                            {copiedIndex === i ? (
                              <>
                                <Check size={11} className="text-emerald-600" />
                                <span className="text-emerald-600">কপি হয়েছে</span>
                              </>
                            ) : (
                              <>
                                <Copy size={11} />
                                <span>কপি</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2.5 max-w-[80%] items-center">
                    <div className="w-7 h-7 rounded-xl bg-cyan-100 text-[#0E7490] flex items-center justify-center shrink-0">
                      <Bot size={15} />
                    </div>
                    <div className="bg-white px-4 py-3 rounded-2xl shadow-sm border border-slate-200 rounded-tl-none flex items-center gap-2 text-xs text-slate-600">
                      <Loader2 size={16} className="animate-spin text-[#0E7490]" />
                      <span>তথ্য যাচাই ও ম্যাপস বিশ্লেষণ করা হচ্ছে...</span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompts Bar */}
            <div className="bg-white border-t border-slate-100 px-3 py-2 shrink-0 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-bold text-slate-500 shrink-0 flex items-center gap-1">
                  <Sparkles size={12} className="text-cyan-600" /> দ্রুত প্রশ্ন:
                </span>
                {QUICK_PROMPTS.map((qp, qIdx) => (
                  <button
                    key={qIdx}
                    onClick={() => handleDirectSend(qp.query)}
                    disabled={isLoading}
                    className="shrink-0 bg-slate-100 hover:bg-cyan-50 hover:text-[#0E7490] text-slate-700 border border-slate-200 hover:border-cyan-200 text-xs px-2.5 py-1 rounded-full font-medium transition-all"
                  >
                    {qp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <div className="p-3.5 bg-white border-t border-slate-200 flex flex-col gap-2 shrink-0">
              {/* Selected Image Thumbnail */}
              {selectedImage && (
                <div className="relative self-start">
                  <img
                    src={selectedImage}
                    alt="প্রিভিউ"
                    className="h-16 w-16 object-cover rounded-xl border border-slate-200 shadow-xs"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white rounded-full p-0.5 hover:bg-rose-600 shadow transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  ref={fileInputRef}
                  onChange={handleImageSelect}
                />

                <div className="flex items-center gap-0.5 text-slate-500">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    title="প্রেসক্রিপশন বা রিপোর্ট ছবি আপলোড করুন"
                    className="p-2 hover:text-[#0E7490] hover:bg-cyan-50 rounded-xl transition-colors"
                  >
                    <ImageIcon size={19} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleRecording}
                    title="বাংলা ভয়েস টাইপিং"
                    className={`p-2 rounded-xl transition-colors ${
                      isRecording ? 'text-rose-600 bg-rose-50 animate-pulse' : 'hover:text-[#0E7490] hover:bg-cyan-50'
                    }`}
                  >
                    {isRecording ? <MicOff size={19} /> : <Mic size={19} />}
                  </button>
                </div>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isRecording ? 'ভয়েস শুনছি... বলুন...' : 'স্বাস্থ্য সমস্যা বা চেম্বারের নাম লিখুন...'}
                  className="flex-1 bg-slate-100 focus:bg-white border border-slate-200 focus:border-[#0E7490] rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all"
                />

                <button
                  type="submit"
                  disabled={isLoading || (!input.trim() && !selectedImage)}
                  className="bg-[#0E7490] hover:bg-[#0891B2] disabled:opacity-40 text-white p-2.5 rounded-xl shadow-xs transition-all active:scale-95 shrink-0"
                >
                  <Send size={18} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#0E7490] to-[#0284C7] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(14,116,144,0.4)] hover:shadow-cyan-600/50 transition-all flex items-center justify-center border-2 border-white relative group"
        aria-label="ওপেন ডাক্তার আছেন এআই"
      >
        {isOpen ? (
          <X size={26} />
        ) : (
          <>
            <MessageSquare size={26} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
            <span className="sr-only">ডাক্তার আছেন এআই সহকারী</span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
