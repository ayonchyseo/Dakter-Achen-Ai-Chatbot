import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, User, AlertTriangle, Image as ImageIcon, Mic, MicOff, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { withRotation, SYSTEM_INSTRUCTION } from "../lib/gemini";
import Markdown from 'react-markdown';

interface Message {
  role: 'user' | 'bot';
  text: string;
  image?: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'আদাব! আমি ডাক্তার আছেন-এর এআই অ্যাসিস্ট্যান্ট। আমি আপনাকে কীভাবে সাহায্য করতে পারি?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Listen for external open-chat events
  useEffect(() => {
    const handleOpenChat = (e: any) => {
      setIsOpen(true);
      if (e.detail?.message) {
        // We need to wait a tiny bit for the component to be fully ready if it was just opened
        setTimeout(() => {
          autoSendMessage(e.detail.message);
        }, 300);
      }
    };
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  const autoSendMessage = async (text: string) => {
    if (isLoading) return;
    
    setMessages(prev => [...prev, { role: 'user', text }]);
    setIsLoading(true);

    try {
      const response = await withRotation(async (ai) => {
        const chat = ai.chats.create({
          model: "gemini-3-flash-preview",
          config: { systemInstruction: SYSTEM_INSTRUCTION },
        });
        return await chat.sendMessage({ message: text });
      });
      
      const botText = response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "দুঃখিত, একটি সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।" }]);
    } finally {
      setIsLoading(false);
    }
  };

  // We'll manage history manually to support key rotation
  const getChatHistory = (msgs: Message[]) => {
    return msgs.slice(1).map(m => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
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

  const toggleRecording = async () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }
    
    // @ts-ignore
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("আপনার ব্রাউজার ভয়েস টাইপিং সাপোর্ট করে না। দয়া করে গুগল ক্রোম ব্যবহার করুন।");
      return;
    }

    // Check permission status if possible
    if (navigator.permissions && navigator.permissions.query) {
      try {
        const result = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        if (result.state === 'denied') {
          setMessages(prev => [...prev, { 
            role: 'bot', 
            text: "মাইক্রোফোন পারমিশন ব্লক করা আছে। দয়া করে ব্রাউজার এড্রেস বারের বাম পাশে 'Lock' আইকনে ক্লিক করে মাইক্রোফোন পারমিশন 'Allow' করুন।" 
          }]);
          return;
        }
      } catch (e) {
        console.warn("Permissions API not supported for microphone query");
      }
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'bn-BD';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsRecording(true);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(prev => prev + (prev ? ' ' : '') + transcript);
      setIsRecording(false);
    };
    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      let errorMsg = "দুঃখিত, একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।";
      
      if (event.error === 'not-allowed') {
        errorMsg = "মাইক্রোফোন ব্যবহারের অনুমতি পাওয়া যায়নি। দয়া করে ব্রাউজার সেটিংসে গিয়ে মাইক্রোফোন পারমিশন 'Allow' করুন।";
      } else if (event.error === 'network') {
        errorMsg = "ইন্টারনেট সংযোগে সমস্যা হচ্ছে। দয়া করে আপনার কানেকশন চেক করুন।";
      } else if (event.error === 'no-speech') {
        errorMsg = "কোনো শব্দ শোনা যায়নি। দয়া করে আবার বলুন।";
      } else if (event.error === 'service-not-allowed') {
        errorMsg = "ভয়েস সার্ভিস এই মুহূর্তে কাজ করছে না।";
      }
      
      setMessages(prev => [...prev, { role: 'bot', text: errorMsg }]);
      setIsRecording(false);
    };
    recognition.onend = () => setIsRecording(false);

    try {
      recognition.start();
    } catch (err) {
      console.error("Failed to start speech recognition:", err);
      setIsRecording(false);
    }
  };

  const handleSend = async () => {
    if ((!input.trim() && !selectedImage) || isLoading) return;

    const userMessage = input.trim();
    const imageToSend = selectedImage;
    
    setInput('');
    setSelectedImage(null);
    setMessages(prev => [...prev, { role: 'user', text: userMessage, image: imageToSend }]);
    setIsLoading(true);

    try {
      let messagePayload: any = userMessage;
      
      if (imageToSend) {
        const base64Data = imageToSend.split(',')[1];
        const mimeType = imageToSend.split(';')[0].split(':')[1];
        
        messagePayload = [
          { text: userMessage || "এই ছবিটি সম্পর্কে বলুন" },
          { inlineData: { data: base64Data, mimeType } }
        ];
      }

      const response = await withRotation(async (ai) => {
        const chat = ai.chats.create({
          model: "gemini-3-flash-preview",
          config: { systemInstruction: SYSTEM_INSTRUCTION },
          history: getChatHistory(messages)
        });
        return await chat.sendMessage({ message: messagePayload });
      });
      
      const botText = response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।";
      
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "দুঃখিত, একটি সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderBotMessage = (text: string) => {
    try {
      // Try to find JSON in the text (sometimes it's wrapped in markdown code blocks)
      const jsonMatch = text.match(/```json\n([\s\S]*?)\n```/) || text.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const jsonStr = jsonMatch[1] || jsonMatch[0];
        const data = JSON.parse(jsonStr);
        if (data.facilities && Array.isArray(data.facilities)) {
          return (
            <div className="space-y-4 my-2">
              <div className="prose prose-sm max-w-none text-on-surface-variant mb-4">
                <Markdown>{text.replace(jsonMatch[0], '')}</Markdown>
              </div>
              <div className="grid gap-3">
                {data.facilities.map((f: any, i: number) => (
                  <div key={i} className="bg-white p-4 rounded-2xl border border-primary/10 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-primary text-lg">{f.name}</h4>
                      <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wider">
                        {f.type}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-on-surface-variant">
                      <div className="flex items-start gap-2">
                        <MapPin size={16} className="mt-0.5 shrink-0 text-primary/60" />
                        <p>{f.address}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {f.specialties?.map((s: string, j: number) => (
                          <span key={j} className="bg-slate-100 px-2 py-1 rounded-lg text-[11px] font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="pt-3 mt-3 border-t border-slate-100 flex justify-between items-center">
                        <span className="font-bold text-primary">ফি: {f.approx_fee || f.estimated_fee}</span>
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(`${f.name}, ${f.address}`);
                          }}
                          className="text-xs font-bold text-primary/60 hover:text-primary transition-colors flex items-center gap-1"
                        >
                          ঠিকানা কপি করুন
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      }
    } catch (e) {
      // Not JSON or invalid, fall back to markdown
    }
    return <Markdown>{text}</Markdown>;
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white md:rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] w-full h-full md:w-[450px] md:h-[650px] fixed inset-0 md:relative md:inset-auto flex flex-col overflow-hidden border border-gray-200 md:mb-4 ring-1 ring-black/5 z-[70] md:z-auto"
          >
            {/* Header */}
            <div className="hero-gradient p-5 flex justify-between items-center text-white shrink-0">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-2.5 rounded-2xl backdrop-blur-md">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg">Dakter Achen AI</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-xs opacity-80">Online | Always here to help</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-2 rounded-full transition-all"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {/* Disclaimer Banner */}
              <div className="bg-amber-50 border border-amber-200 text-amber-800 p-3 rounded-xl text-xs flex gap-2 items-start shadow-sm mb-6">
                <AlertTriangle size={16} className="text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>সতর্কতা:</strong> এটি একটি এআই অ্যাসিস্ট্যান্ট, কোনো ডাক্তার নয়। গুরুতর স্বাস্থ্য সমস্যার জন্য অবশ্যই একজন বিশেষজ্ঞ চিকিৎসকের পরামর্শ নিন।
                </p>
              </div>

              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-secondary-container text-primary'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm md:text-base ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none shadow-md' : 'bg-white text-on-surface shadow-md border border-gray-100 rounded-tl-none'}`}>
                      {msg.image && (
                        <img 
                          src={msg.image} 
                          alt="Uploaded" 
                          className="max-w-full h-auto rounded-lg mb-2 max-h-48 object-cover"
                        />
                      )}
                      {msg.role === 'user' ? (
                        msg.text
                      ) : (
                        <div className="markdown-body">
                          {renderBotMessage(msg.text)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2 max-w-[80%]">
                    <div className="w-8 h-8 rounded-full bg-secondary-container text-primary flex items-center justify-center">
                      <Bot size={16} />
                    </div>
                    <div className="bg-white p-3 rounded-2xl shadow-md border border-gray-100 rounded-tl-none">
                      <Loader2 size={16} className="animate-spin text-primary" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-outline-variant/10 flex flex-col gap-3 shrink-0 pb-10 md:pb-4">
              {/* Image Preview */}
              {selectedImage && (
                <div className="relative self-start mb-1">
                  <img src={selectedImage} alt="Preview" className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-xl border-2 border-primary/10 shadow-sm" />
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-md transition-colors"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
              
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2 md:gap-3 items-center"
              >
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef} 
                  onChange={handleImageSelect} 
                />
                
                <div className="flex gap-0.5 md:gap-1">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-gray-500 hover:text-primary hover:bg-surface-container rounded-xl transition-all"
                    title="ছবি আপলোড করুন"
                  >
                    <ImageIcon size={20} className="md:w-5.5 md:h-5.5" />
                  </button>
  
                  <button
                    type="button"
                    onClick={toggleRecording}
                    className={`p-2 rounded-xl transition-all ${isRecording ? 'text-red-500 bg-red-50 animate-pulse' : 'text-gray-500 hover:text-primary hover:bg-surface-container'}`}
                    title="ভয়েস টাইপিং"
                  >
                    {isRecording ? <MicOff size={20} className="md:w-5.5 md:h-5.5" /> : <Mic size={20} className="md:w-5.5 md:h-5.5" />}
                  </button>
                </div>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isRecording ? "শুনছি..." : "প্রশ্ন লিখুন..."}
                  className="flex-1 bg-surface-container-low border-none rounded-2xl px-4 md:px-5 py-2.5 md:py-3 text-sm md:text-base focus:ring-2 focus:ring-primary outline-none transition-all"
                />
                
                <button 
                  type="submit"
                  disabled={isLoading || (!input.trim() && !selectedImage)}
                  className="bg-primary text-white p-2.5 md:p-3 rounded-2xl hover:bg-primary-container transition-all disabled:opacity-50 shadow-lg shadow-primary/20 active:scale-95"
                >
                  <Send size={18} className="md:w-5 md:h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-4 rounded-full shadow-[0_8px_30px_rgba(0,103,103,0.4)] hover:bg-primary-container transition-all flex items-center justify-center border-2 border-white"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
