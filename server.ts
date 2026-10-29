import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { generateWordPressWxrXml } from './src/lib/wordpressExportGenerator';
import { sitemapMiddleware } from './src/middleware/sitemapMiddleware';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production';
const PORT = Number(process.env.PORT) || 3000;

const SYSTEM_INSTRUCTION = `আপনি "ডাক্তার আছেন" (Dakter Achen) প্ল্যাটফর্মের অফিশিয়াল এআই স্বাস্থ্য সহকারী ও চেম্বার নির্দেশক (AI Health & Clinic Advisor)। আপনার প্রধান কাজ হলো চট্টগ্রামের পাশাপাশি সমগ্র বাংলাদেশের রোগীদের স্বাস্থ্য সমস্যা, সঠিক বিশেষজ্ঞ ডাক্তার নির্বাচন, চেম্বার/হাসপাতাল লোকেশন এবং প্রাথমিক স্বাস্থ্য সচেতনতায় সাহায্য করা।

গুরুত্বপূর্ণ নীতিমালা:
১. আপনি কোনো বিকল্প চিকিৎসক নন। জরুরি অবস্থা বা যেকোনো গুরুতর উপসর্গে রোগীকে অতিসত্বর নিবন্ধিত চিকিৎসকের কাছে যাওয়ার পরামর্শ দিন।
২. ভাষা: সাবলীল, আন্তরিক ও স্পষ্ট বাংলা (প্রয়োজনে ইংরেজি টার্ম ব্র্যাকেটে রাখুন)। গ্রামীণ ও সাধারণ মানুষ যেন সহজে বোঝে তেমন সহজ ভাষা ব্যবহার করুন।

মূল দায়িত্ব ও ক্ষমতা:
### ১. লক্ষণ অনুযায়ী বিশেষজ্ঞ ডাক্তার ও চেম্বার নির্বাচন:
- সম্ভাব্য সমস্যার সাধারণ ধারণা দিন (১-২ বাক্যে)।
- কোন বিষয়ের বিশেষজ্ঞ চিকিৎসক দেখাতে হবে তা স্পষ্টভাবে উল্লেখ করুন (যেমন: মেডিসিন বিশেষজ্ঞ, হৃদরোগ বিশেষজ্ঞ, শিশু বিশেষজ্ঞ, চর্মরোগ বিশেষজ্ঞ, নাক-কান-গলা বিশেষজ্ঞ ইত্যাদি)।
- জরুরি মাত্রা নির্দেশ করুন: 🔴 এখনই জরুরি বিভাগে যান / 🟡 ২৪ ঘণ্টার মধ্যে ডাক্তার দেখান / 🟢 ৩-৭ দিনের মধ্যে নিয়মিত ওপিডি দেখান।

### ২. গুগল ম্যাপস (Google Maps) ও চেম্বার অনুসন্ধান:
- যখন ব্যবহারকারী হাসপাতাল, ডায়াগনস্টিক সেন্টার, ক্লিনিক, ল্যাব বা ডাক্তারের চেম্বারের অবস্থান জানতে চাইবে (যেমন: পাঁচলাইশ, প্রবর্তক মোড়, চকবাজার, দামপাড়া, মেহেদীবাগ, জিইসি, চট্টেশ্বরী মোড়, আগ্রাবাদ বা চট্টগ্রামের যেকোনো স্থান), তখন গুগল ম্যাপস গ্রাউন্ডিং তথ্যের আলোকে সঠিক ঠিকানা, পরিচিত ল্যান্ডমার্ক এবং যাতায়াতের সুবিধা তুলে ধরুন।
- নিকটস্থ স্বাস্থ্যকেন্দ্র ও জরুরি অ্যাম্বুলেন্স সেবার জন্য সঠিক দিকনির্দেশনা দিন।

### ৩. প্রেসক্রিপশন ও ওষুধের প্রাথমিক তথ্য:
- ব্যবহারকারী যদি প্রেসক্রিপশনের ছবি দেয় বা ওষুধের নাম লেখে, ওষুধের ব্যবহারবিধি (কখন, কীসের জন্য), খাবারের আগে না পরে, সম্ভাব্য পার্শ্বপ্রতিক্রিয়া এবং সতর্কতা সহজ বাংলায় বুঝিয়ে দিন।
- কখনোই নিজে থেকে কোনো ওষুধের ডোজ পরিবর্তন বা নতুন প্রেসক্রাইব করবেন না।

### ৪. চিকিৎসা খরচ স্বচ্ছতা (Cost Intelligence):
- সরকারি হাসপাতাল (যেমন চট্টগ্রাম মেডিকেল কলেজ হাসপাতাল), বেসরকারি ক্লিনিক এবং কর্পোরেট হাসপাতালের সম্ভাব্য কনসালটেশন ফি ও সাধারণ টেস্টের খরচের ধারণা দিন।

### ৫. জরুরি রেড-ফ্ল্যাগ (Emergency Red Flags):
- বুকে তীব্র চাপ/ব্যথা, অজ্ঞান হয়ে যাওয়া, শরীরের একপাশ অবশ বা কথা জড়িয়ে যাওয়া (স্ট্রোক), তীব্র শ্বাসকষ্ট, অনবরত রক্তক্ষরণ থাকলে কোনো বিলম্ব ছাড়াই জাতীয় জরুরি সেবা ৯৯৯ এবং নিকস্থ হাসপাতালের জরুরি বিভাগে যাওয়ার নির্দেশনা দিন।

সবসময় উত্তরে প্রাসঙ্গিক ক্ষেত্রে একটি মৃদু সতর্কতা যোগ করুন: "এটি এআই তথ্য নির্দেশিকা। চূড়ান্ত সিদ্ধান্তের জন্য সবসময় রেজিস্টার্ড ডাক্তারের পরামর্শ নিন।"`;

async function startServer() {
  const app = express();

  // Middleware
  app.use(express.json({ limit: '20mb' }));
  app.use(express.urlencoded({ extended: true, limit: '20mb' }));

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'dakter-achen-backend',
      timestamp: new Date().toISOString(),
      hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    });
  });

  // Sitemap Middleware: Ensures /sitemap.xml and all sitemaps serve valid XML without redirects or 404s
  app.use(sitemapMiddleware);

  const getBaseUrl = (req: express.Request) => {
    const protocol = req.headers['x-forwarded-proto'] || req.protocol || 'https';
    const host = req.get('host') || 'ais-pre-c6xmglhpygp4mtnwxyh2al-315185213524.asia-southeast1.run.app';
    return process.env.APP_URL || `${protocol}://${host}`;
  };

  // 7. Dynamic robots.txt
  app.get('/robots.txt', (req, res) => {
    const baseUrl = getBaseUrl(req);
    const cleanBase = baseUrl.replace(/\/+$/, '');
    res.header('Content-Type', 'text/plain; charset=utf-8');
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${cleanBase}/sitemap.xml\nSitemap: ${cleanBase}/wp-sitemap.xml\n`);
  });

  // 8. WordPress Import XML export endpoint (WXR 1.2 format for dakterachen.com)
  app.get(['/api/export/wordpress-xml', '/dakterachen-wordpress-import.xml'], (req, res) => {
    try {
      const xml = generateWordPressWxrXml('https://dakterachen.com');
      res.header('Content-Type', 'application/xml; charset=utf-8');
      res.header('Content-Disposition', 'attachment; filename="dakterachen-wordpress-import.xml"');
      res.send(xml);
    } catch (err: any) {
      console.error('Error generating WordPress export XML:', err);
      res.status(500).send('Error generating export');
    }
  });

  // Server-side Gemini Chat API with Maps Grounding
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          error: 'GEMINI_API_KEY is not configured on the server. Please check the Secrets panel.',
        });
      }

      const { messages = [], newMessage = '', image = null, location = null } = req.body;

      if (!newMessage && !image) {
        return res.status(400).json({ error: 'Message or image is required.' });
      }

      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });

      // Prepare conversation history
      const contents: any[] = [];

      // Add previous chat history (keep last 10 messages for performance and context)
      const recentMessages = messages.slice(-10);
      for (const msg of recentMessages) {
        const role = msg.role === 'user' ? 'user' : 'model';
        const parts: any[] = [];

        if (msg.image && typeof msg.image === 'string') {
          const match = msg.image.match(/^data:([^;]+);base64,(.+)$/);
          if (match) {
            parts.push({
              inlineData: {
                mimeType: match[1],
                data: match[2],
              },
            });
          }
        }

        if (msg.text) {
          parts.push({ text: msg.text });
        }

        if (parts.length > 0) {
          contents.push({ role, parts });
        }
      }

      // Add the current user query turn
      const currentParts: any[] = [];
      if (image && typeof image === 'string') {
        const match = image.match(/^data:([^;]+);base64,(.+)$/);
        if (match) {
          currentParts.push({
            inlineData: {
              mimeType: match[1],
              data: match[2],
            },
          });
        }
      }

      currentParts.push({
        text: newMessage || 'এই প্রেসক্রিপশন বা রিপোর্ট সম্পর্কে বিস্তারিত তথ্য দিন।',
      });

      contents.push({ role: 'user', parts: currentParts });

      // Coordinates: user provided or Chittagong center (22.3569° N, 91.7832° E)
      const lat = typeof location?.latitude === 'number' ? location.latitude : 22.356851;
      const lng = typeof location?.longitude === 'number' ? location.longitude : 91.783182;

      let response: any;
      let usedMaps = false;

      // Try with Google Maps Grounding first
      try {
        response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            tools: [{ googleMaps: {} }],
            toolConfig: {
              retrievalConfig: {
                latLng: {
                  latitude: lat,
                  longitude: lng,
                },
              },
            },
          },
        });
        usedMaps = true;
      } catch (mapsErr: any) {
        console.warn('Google Maps Grounding request failed, falling back to standard generation:', mapsErr?.message);
        // Fallback without googleMaps tool
        response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
          },
        });
      }

      const botText = response.text || 'দুঃখিত, কোনো উত্তর পাওয়া যায়নি। দয়া করে আবার চেষ্টা করুন।';

      // Extract Maps & Web grounding metadata
      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const places: Array<{ title: string; uri: string; reviewSnippets?: string[] }> = [];

      for (const chunk of groundingChunks) {
        if (chunk.maps) {
          places.push({
            title: chunk.maps.title || 'মানচিত্র অবস্থান (Google Maps)',
            uri: chunk.maps.uri || '',
            reviewSnippets:
              chunk.maps.placeAnswerSources?.reviewSnippets?.map((r: any) => r.text).filter(Boolean) || [],
          });
        } else if (chunk.web) {
          places.push({
            title: chunk.web.title || chunk.web.uri,
            uri: chunk.web.uri || '',
            reviewSnippets: [],
          });
        }
      }

      return res.json({
        text: botText,
        places,
        usedMaps,
      });
    } catch (error: any) {
      console.error('Server Gemini API Error:', error);
      const isQuota =
        error?.message?.includes('429') ||
        error?.status === 429 ||
        error?.message?.toLowerCase().includes('quota');
      return res.status(error?.status || 500).json({
        error: isQuota
          ? 'API কোটা সীমিত হয়ে পড়েছে। কিছুক্ষণ পর আবার চেষ্টা করুন।'
          : error?.message || 'সার্ভারে সমস্যা হয়েছে।',
      });
    }
  });

  // Setup Vite dev server or static file serving
  if (!isProduction) {
    const vite = await createViteServer({
      server: {
        middlewareMode: true,
        hmr: process.env.DISABLE_HMR !== 'true',
      },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Dakter Achen server running on port ${PORT} (dev: ${!isProduction})`);
  });
}

startServer().catch((err) => {
  console.error('Fatal error starting server:', err);
  process.exit(1);
});
