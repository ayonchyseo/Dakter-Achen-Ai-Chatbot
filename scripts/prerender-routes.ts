import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { BLOG_POSTS } from '../src/data/blogData';
import { INITIAL_DOCTORS } from '../src/data/doctors';
import { CHATTOGRAM_AREAS, SPECIALTIES } from '../src/lib/sitemapGenerator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const baseIndexPath = path.join(distDir, 'index.html');
const origin = (process.env.SITEMAP_BASE_URL || 'https://dakterachen.com').replace(/\/+$/, '');

if (!fs.existsSync(baseIndexPath)) {
  console.warn('⚠️ dist/index.html not found. Run vite build before prerender-routes.ts');
  process.exit(0);
}

const baseHtml = fs.readFileSync(baseIndexPath, 'utf-8');

const SPECIALTY_META: Record<string, { bn: string; en: string }> = {
  chest: { bn: 'শ্বাসকষ্ট ও বক্ষব্যাধি (পালমোনোলজি)', en: 'Asthma & Chest (Pulmonology)' },
  medicine: { bn: 'মেডিসিন ও ডায়াবেটিস', en: 'Medicine & Diabetes' },
  gastro: { bn: 'গ্যাস্ট্রোএন্টারোলজি ও লিভার', en: 'Gastroenterology & Liver' },
  heart: { bn: 'হৃদরোগ (কার্ডিওলজি)', en: 'Cardiology' },
  gynae: { bn: 'গাইনি ও প্রসূতি', en: 'Gynae & Obstetrics' },
  child: { bn: 'শিশু বিশেষজ্ঞ', en: 'Child Specialist' },
  endocrine: { bn: 'হরমোন ও ডায়াবেটিস (এন্ডোক্রাইনোলজি)', en: 'Hormone & Diabetes' },
  kidney: { bn: 'কিডনি ও ইউরোলজি', en: 'Kidney & Urology' },
  neuro: { bn: 'নিউরো মেডিসিন ও ব্রেন', en: 'Neurology' },
  cancer: { bn: 'ক্যান্সার ও টিউমার (অনকোলজি)', en: 'Cancer & Oncology' },
  physmed: { bn: 'বাতব্যথা ও ফিজিক্যাল মেডিসিন', en: 'Arthritis & Physical Medicine' },
  ortho: { bn: 'হাড় ও জোড়া (অর্থোপেডিক)', en: 'Bone & Joint' },
  skin: { bn: 'চর্ম ও যৌন রোগ', en: 'Skin & Dermatology' },
  eye: { bn: 'চক্ষু রোগ', en: 'Eye Specialist' },
  ent: { bn: 'নাক-কান-গলা', en: 'ENT Specialist' },
  psychiatry: { bn: 'মানসিক রোগ ও মাদকাসক্তি', en: 'Psychiatry & Mental Health' },
  surgery: { bn: 'জেনারেল ও ল্যাপারোস্কোপিক সার্জারি', en: 'General Surgery' },
  dental: { bn: 'দন্ত চিকিৎসা (ডেন্টাল)', en: 'Dental Care' },
};

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function buildRouteHtml({
  title,
  description,
  canonicalUrl,
  ogImage,
  schemaObj,
}: {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage?: string;
  schemaObj?: Record<string, any>;
}): string {
  const safeTitle = escapeHtmlAttr(title);
  const safeDesc = escapeHtmlAttr(description);
  const safeCanonical = escapeHtmlAttr(canonicalUrl);

  let html = baseHtml;

  // Replace <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`);

  // Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${safeDesc}" />`
  );

  // Replace canonical link
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${safeCanonical}" />`
  );

  // Replace OpenGraph & Twitter tags
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${safeDesc}" />`
  );
  html = html.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${safeCanonical}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${safeTitle}" />`
  );
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${safeDesc}" />`
  );

  if (ogImage) {
    const safeOgImage = escapeHtmlAttr(ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`);
    if (html.includes('property="og:image"')) {
      html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:image" content="${safeOgImage}" />`
      );
    } else {
      html = html.replace(
        /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/?>/i,
        `<meta property="og:locale" content="bn_BD" />\n    <meta property="og:image" content="${safeOgImage}" />`
      );
    }
  }

  if (schemaObj) {
    const schemaJson = JSON.stringify(schemaObj);
    html = html.replace(
      /<script\s+id="schema-medical-webpage"\s+type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script id="schema-medical-webpage" type="application/ld+json">${schemaJson}</script>`
    );
  }

  return html;
}

function writeRouteFile(relativeRoute: string, htmlContent: string) {
  const cleanRoute = relativeRoute.replace(/^\/+|\/+$/g, '');
  if (!cleanRoute) return;
  const routeDir = path.join(distDir, cleanRoute);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), htmlContent, 'utf-8');
}

// 1. Write 404.html fallback in dist root (used automatically by Vercel, GitHub Pages, Cloudflare Pages, etc.)
fs.writeFileSync(path.join(distDir, '404.html'), baseHtml, 'utf-8');

// 2. Core static routes (/doctors, /list, /blog, /emergency, /sitemap)
writeRouteFile(
  'doctors',
  buildRouteHtml({
    title: 'চট্টগ্রামের বিশেষজ্ঞ ডাক্তারদের তালিকা — সিরিয়াল নম্বরসহ | ডাক্তার আছেন',
    description:
      'শ্বাসকষ্ট, মেডিসিন, গ্যাস্ট্রো, গাইনি, শিশু, হৃদরোগ, চোখ, নাক-কান-গলা সহ ১৮টি বিভাগের প্রতিটিতে ১০০ জন বিশেষজ্ঞ চিকিৎসকদের তালিকা ও সিরিয়াল নম্বর।',
    canonicalUrl: `${origin}/doctors`,
  })
);

writeRouteFile(
  'list',
  buildRouteHtml({
    title: 'চট্টগ্রামের বিশেষজ্ঞ ডাক্তারদের তালিকা — সিরিয়াল নম্বরসহ | ডাক্তার আছেন',
    description:
      'শ্বাসকষ্ট, মেডিসিন, গ্যাস্ট্রো, গাইনি, শিশু, হৃদরোগ, চোখ, নাক-কান-গলা সহ ১৮টি বিভাগের প্রতিটিতে ১০০ জন বিশেষজ্ঞ চিকিৎসকদের তালিকা ও সিরিয়াল নম্বর।',
    canonicalUrl: `${origin}/doctors`,
  })
);

writeRouteFile(
  'blog',
  buildRouteHtml({
    title: '১০৬+ তথ্যবহুল স্বাস্থ্য ব্লগ ও চিকিৎসা নির্দেশিকা | ডাক্তার আছেন',
    description:
      'প্রতিরোধমূলক স্বাস্থ্য, দীর্ঘস্থায়ী রোগ, মা ও শিশু স্বাস্থ্য এবং জীবনযাত্রার ওপর ১০৬+ বিশেষজ্ঞ চিকিৎসকদের লেখা পরামর্শ।',
    canonicalUrl: `${origin}/blog`,
  })
);

writeRouteFile(
  'emergency',
  buildRouteHtml({
    title: 'চট্টগ্রাম জরুরি স্বাস্থ্য সেবা ও অ্যাম্বুলেন্স ডিরেক্টরি (২৪/৭) | ডাক্তার আছেন',
    description:
      'জাতীয় জরুরি হটলাইন ৯৯৯, চট্টগ্রামের সরকারি ও বেসরকারি হাসপাতালের জরুরি বিভাগ এবং সার্বক্ষণিক অ্যাম্বুলেন্স যোগাযোগ।',
    canonicalUrl: `${origin}/emergency`,
  })
);

writeRouteFile(
  'sitemap',
  buildRouteHtml({
    title: 'সম্পূর্ণ সাইটম্যাপ (১৮০০+ ডাক্তার ও পেজ) | ডাক্তার আছেন',
    description:
      'চট্টগ্রামের ১৮০০+ বিশেষজ্ঞ চিকিৎসক (১৮টি বিভাগে প্রতিটিতে ১০০ জন), ১০৬+ স্বাস্থ্য প্রবন্ধ এবং ১৪টি অঞ্চলের পূর্ণাঙ্গ সূচিপত্র।',
    canonicalUrl: `${origin}/sitemap`,
  })
);

// 3. Pre-render all 106+ Blog Articles (/blog/<slug>/index.html)
let blogCount = 0;
for (const post of BLOG_POSTS) {
  if (!post.slug) continue;
  const canonicalUrl = `${origin}/blog/${post.slug}`;
  const html = buildRouteHtml({
    title: `${post.titleBn} | স্বাস্থ্য ব্লগ — ডাক্তার আছেন`,
    description: post.excerptBn,
    canonicalUrl,
    ogImage: post.coverImage,
    schemaObj: {
      '@context': 'https://schema.org',
      '@type': 'MedicalScholarlyArticle',
      headline: post.titleBn,
      alternativeHeadline: post.titleEn,
      description: post.excerptBn,
      image: post.coverImage,
      datePublished: post.publishedDate,
      url: canonicalUrl,
      inLanguage: ['bn', 'en'],
      author: {
        '@type': 'Person',
        name: post.reviewedBy.nameBn,
        jobTitle: post.reviewedBy.degreesBn,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dakter Achen',
        url: origin,
      },
    },
  });
  writeRouteFile(`blog/${post.slug}`, html);
  blogCount++;
}

// 4. Pre-render all 18 Specialty Department Pages (/specialty/<key>/index.html)
let specCount = 0;
for (const specKey of SPECIALTIES) {
  const info = SPECIALTY_META[specKey] || { bn: specKey, en: specKey };
  const canonicalUrl = `${origin}/specialty/${specKey}`;
  const html = buildRouteHtml({
    title: `${info.bn} বিশেষজ্ঞ ডাক্তার তালিকা, চট্টগ্রাম — সিরিয়াল নম্বরসহ | ডাক্তার আছেন`,
    description: `চট্টগ্রামের সেরা ১০০+ ${info.bn} (${info.en}) বিশেষজ্ঞ ডাক্তারদের চেম্বারের ঠিকানা, বসার সময়সূচি ও সরাসরি সিরিয়াল বুকিং নম্বর।`,
    canonicalUrl,
  });
  writeRouteFile(`specialty/${specKey}`, html);
  specCount++;
}

// 5. Pre-render all Area Pages (/area/<area>/index.html)
const allAreas = Array.from(
  new Set([
    ...CHATTOGRAM_AREAS,
    ...CHATTOGRAM_AREAS.map((a) => a.toLowerCase()),
    'O.R. Nizam Road',
    'GEC Circle',
    'Momin Road',
    'Jamal Khan',
    'Pahartali',
  ])
);
for (const area of allAreas) {
  const canonicalUrl = `${origin}/area/${encodeURIComponent(area)}`;
  const html = buildRouteHtml({
    title: `${area}, চট্টগ্রামের বিশেষজ্ঞ ডাক্তার তালিকা ও সিরিয়াল | ডাক্তার আছেন`,
    description: `চট্টগ্রামের ${area} এলাকার সকল বিশেষজ্ঞ চিকিৎসকদের চেম্বার, বসার সময় ও অফিসিয়াল সিরিয়াল নম্বর।`,
    canonicalUrl,
  });
  writeRouteFile(`area/${area}`, html);
}

// 6. Pre-render Doctor Profile Pages (/doctor/<slug>/index.html)
let docCount = 0;
for (const doc of INITIAL_DOCTORS) {
  if (!doc.slug) continue;
  const canonicalUrl = `${origin}/doctor/${doc.slug}`;
  const html = buildRouteHtml({
    title: `${doc.name} — ${doc.specialtyBn} | ডাক্তার আছেন (Dakter Achen)`,
    description: `${doc.name} (${doc.specialtyBn}) — ${doc.degrees}। চেম্বার: ${doc.ch.map((c) => c.name).join(', ')}। সিরিয়াল নম্বর ও বসার সময়সূচি।`,
    canonicalUrl,
    schemaObj: {
      '@context': 'https://schema.org',
      '@type': 'Physician',
      name: doc.name,
      alternateName: doc.nameEn,
      medicalSpecialty: doc.specialtyEn,
      description: `${doc.name} (${doc.degrees}) - ${doc.designation}, ${doc.institution}`,
      url: canonicalUrl,
      telephone: doc.ch[0]?.serial[0] || '',
      address: {
        '@type': 'PostalAddress',
        streetAddress: doc.ch[0]?.address || 'Chattogram',
        addressLocality: doc.ch[0]?.area || 'Chattogram',
        addressCountry: 'BD',
      },
    },
  });
  writeRouteFile(`doctor/${doc.slug}`, html);
  docCount++;
}

console.log(
  `✅ Pre-rendered static SEO HTML files in /dist: ${blogCount} blog articles, ${specCount} specialties, ${allAreas.length} areas, ${docCount} doctor profiles, plus 404.html`
);
