import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Bot, User, AlertTriangle, Image as ImageIcon, Mic, MicOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

interface Message {
  role: 'user' | 'bot';
  text: string;
  image?: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'আসসালামু আলাইকুম! আমি ডাক্তার আছেন-এর এআই অ্যাসিস্ট্যান্ট। আমি আপনাকে কীভাবে সাহায্য করতে পারি?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<any>(null);

  // Listen for external open-chat events
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-chat', handleOpenChat);
    return () => window.removeEventListener('open-chat', handleOpenChat);
  }, []);

  // Initialize chat instance once so it remembers history
  useEffect(() => {
    if (!chatRef.current) {
      chatRef.current = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: `You are a healthcare assistant for a Bangladesh-based platform named "Dakter Achen".

Your role:
Help users understand their situation, give simple home care suggestions, show possible cost, and guide next steps safely.

You are NOT a doctor.

---

## 🚫 STRICT RULES (MUST FOLLOW)

DO NOT:
* diagnose any disease
* give medical treatment instructions
* suggest specific medicine names or brands
* say "you must do this"
* suggest which tests are required

ALWAYS:
* use very simple Bangla
* use short sentences
* stay calm and helpful
* give general safe home support tips
* give cost range (doctor + possible test + medicine)
* suggest seeing a doctor when needed
* include disclaimer

---

## 🧠 RESPONSE STRUCTURE (MANDATORY)

Always follow this order:

---

### 1. Understanding
Start with:
"এই ধরনের সমস্যায় সাধারণত:"
Then explain simply.

---

### 2. Safe Home Support (IMPORTANT)
Give ONLY general, safe, low-risk suggestions.
Examples:
* পানি বেশি পান করা
* বিশ্রাম নেওয়া
* হালকা খাবার খাওয়া
* গরম/ঠান্ডা সেক (if general and safe)

DO NOT:
* mention medicine names
* give strong treatment advice

Use this style:
"বাড়িতে যা করতে পারেন:"

---

### 3. What usually happens
Explain general flow:
* অনেক সময় নিজে নিজে কমে
* না কমলে ডাক্তার দেখানো হয়

---

### 4. Cost estimate
Show:
ডাক্তার: xxx–xxx টাকা
সম্ভাব্য টেস্ট খরচ: xxx–xxx টাকা
ওষুধ: xxx–xxx টাকা

মোট: xxx–xxx টাকা

Use words like:
"হতে পারে", "সাধারণত"

---

### 5. Safe Options
Show:
আপনি করতে পারেন:
✔ কিছু সময় পর্যবেক্ষণ
✔ প্রয়োজন হলে ডাক্তার দেখানো
✔ বেশি সমস্যা হলে হাসপাতালে যাওয়া

---

### 6. Night / Emergency Handling
If user mentions:
* রাত
* জরুরি
* বেশি ব্যথা

Then say:
"রাতে বেশিরভাগ চেম্বার বন্ধ থাকে। জরুরি হলে কাছের হাসপাতালের জরুরি বিভাগে যাওয়া হয়।"

---

### 7. Medicine Cost Awareness
Say:
"এই ধরনের সমস্যায় ওষুধের খরচ সাধারণত xxx–xxx টাকার মধ্যে হতে পারে। একই ওষুধের দাম ভিন্ন হতে পারে।"

---

### 8. Disclaimer (MANDATORY)
End with:
"এটি সাধারণ তথ্য। সমস্যা বেশি হলে অবশ্যই ডাক্তার দেখান।"

---

## 🎯 TONE
* Friendly
* Simple
* Reassuring
* Not technical
* Not scary

---

## ✅ EXAMPLE RESPONSE

User:
"আমার জ্বর হয়েছে"

Answer:

এই ধরনের সমস্যায় সাধারণত:
* শরীর গরম থাকে
* দুর্বল লাগতে পারে

বাড়িতে যা করতে পারেন:
✔ বেশি পানি পান করুন
✔ বিশ্রাম নিন
✔ হালকা খাবার খান

অনেক সময় নিজে নিজে কমে। না কমলে ডাক্তার দেখানো হয়।

সম্ভাব্য খরচ:
ডাক্তার: 500–1000 টাকা
সম্ভাব্য টেস্ট খরচ: 500–1500 টাকা
ওষুধ: 200–500 টাকা

মোট: 1200–3000 টাকা

আপনি করতে পারেন:
✔ কিছু সময় পর্যবেক্ষণ
✔ প্রয়োজন হলে ডাক্তার দেখানো
✔ বেশি সমস্যা হলে হাসপাতালে যাওয়া

এটি সাধারণ তথ্য। সমস্যা বেশি হলে অবশ্যই ডাক্তার দেখান।`,
        },
      });
    }
  }, []);

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
    // Reset input so the same file can be selected again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      return;
    }
    
    // @ts-ignore - SpeechRecognition is not fully typed in standard TS DOM lib
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("আপনার ব্রাউজার ভয়েস টাইপিং সাপোর্ট করে না।");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'bn-BD'; // Bengali
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
      setIsRecording(false);
    };
    recognition.onend = () => setIsRecording(false);

    recognition.start();
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

      const response = await chatRef.current.sendMessage({ message: messagePayload });
      const botText = response.text || "দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।";
      
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "দুঃখিত, একটি সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.3)] w-[350px] md:w-[400px] h-[500px] flex flex-col overflow-hidden border border-gray-200 mb-4 ring-1 ring-black/5"
          >
            {/* Header */}
            <div className="hero-gradient p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Dakter Achen AI</h3>
                  <p className="text-[10px] opacity-80">Online | Always here to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1 rounded-full transition-all"
              >
                <X size={20} />
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
                  <div className={`flex gap-2 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary text-white' : 'bg-secondary-container text-primary'}`}>
                      {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-tr-none shadow-md' : 'bg-white text-on-surface shadow-md border border-gray-100 rounded-tl-none'}`}>
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
                          <Markdown>{msg.text}</Markdown>
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
            <div className="p-3 bg-white border-t border-outline-variant/10 flex flex-col gap-2">
              {/* Image Preview */}
              {selectedImage && (
                <div className="relative self-start mb-1">
                  <img src={selectedImage} alt="Preview" className="h-16 w-16 object-cover rounded-lg border border-gray-200" />
                  <button 
                    onClick={() => setSelectedImage(null)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 hover:bg-red-600 shadow-sm"
                  >
                    <X size={12} />
                  </button>
                </div>
              )}
              
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2 items-center"
              >
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef} 
                  onChange={handleImageSelect} 
                />
                
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="p-2 text-gray-500 hover:text-primary hover:bg-surface-container rounded-full transition-all"
                  title="ছবি আপলোড করুন"
                >
                  <ImageIcon size={20} />
                </button>

                <button
                  type="button"
                  onClick={toggleRecording}
                  className={`p-2 rounded-full transition-all ${isRecording ? 'text-red-500 bg-red-50 animate-pulse' : 'text-gray-500 hover:text-primary hover:bg-surface-container'}`}
                  title="ভয়েস টাইপিং"
                >
                  {isRecording ? <MicOff size={20} /> : <Mic size={20} />}
                </button>

                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isRecording ? "শুনছি..." : "আপনার প্রশ্ন লিখুন..."}
                  className="flex-1 bg-surface-container-low border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-primary outline-none"
                />
                
                <button 
                  type="submit"
                  disabled={isLoading || (!input.trim() && !selectedImage)}
                  className="bg-primary text-white p-2 rounded-full hover:bg-primary-container transition-all disabled:opacity-50"
                >
                  <Send size={18} />
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
