import { INITIAL_DOCTORS } from '../data/doctors';
import { BLOG_POSTS } from '../data/blogData';

export const CHATTOGRAM_AREAS = [
  'Panchlaish',
  'Prabartak',
  'Chawkbazar',
  'Mehedibag',
  'Dampara',
  'Agrabad',
  'Nasirabad',
  'GEC',
  'Halishahar',
  'Chatteshwari',
  'Kotwali',
  'Anderkilla',
  'Muradpur',
  'Khulshi',
];

export const SPECIALTIES = [
  'medicine',
  'gynae',
  'child',
  'eye',
  'ent',
  'heart',
  'ortho',
  'skin',
  'dental',
  'neuro',
  'kidney',
  'surgery',
];

export interface SitemapUrlEntry {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: string;
}

export function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * 1. WordPress style Sitemap Index (/wp-sitemap.xml and /sitemap_index.xml)
 */
export function generateSitemapIndexXml(baseUrl: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];

  const sitemaps = [
    { loc: `${cleanBase}/wp-sitemap-posts-page-1.xml`, lastmod: today, title: 'প্রধান পেজ ও ডাক্তার প্রোফাইল (Pages & Doctors)' },
    { loc: `${cleanBase}/wp-sitemap-posts-post-1.xml`, lastmod: today, title: 'স্বাস্থ্য ব্লগ ও টিপস (106+ Health Posts)' },
    { loc: `${cleanBase}/wp-sitemap-taxonomies-category-1.xml`, lastmod: today, title: '১২টি বিশেষজ্ঞ বিভাগ (Specialties)' },
    { loc: `${cleanBase}/wp-sitemap-users-1.xml`, lastmod: today, title: 'চট্টগ্রামের স্বাস্থ্যসেবা এলাকা (Areas)' },
    { loc: `${cleanBase}/sitemap.xml`, lastmod: today, title: 'সম্পূর্ণ কম্বাইন্ড সাইটম্যাপ (All 400+ URLs Combined)' },
  ];

  const xmlEntries = sitemaps
    .map(
      (s) => `  <sitemap>
    <loc>${escapeXml(s.loc)}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!-- Dakter Achen XML Sitemap Index -->
<!-- Number of sitemaps: ${sitemaps.length} -->
${xmlEntries}
</sitemapindex>`;
}

/**
 * 2. Pages & Doctors Sub-Sitemap (/wp-sitemap-posts-page-1.xml)
 */
export function generatePagesSitemapXml(baseUrl: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapUrlEntry[] = [
    { loc: `${cleanBase}/`, lastmod: today, changefreq: 'daily', priority: '1.0' },
    { loc: `${cleanBase}/#list`, lastmod: today, changefreq: 'daily', priority: '0.9' },
    { loc: `${cleanBase}/#blog`, lastmod: today, changefreq: 'daily', priority: '0.9' },
    { loc: `${cleanBase}/#sitemap`, lastmod: today, changefreq: 'weekly', priority: '0.7' },
  ];

  for (const doc of INITIAL_DOCTORS) {
    if (doc.slug) {
      entries.push({
        loc: `${cleanBase}/#doctor/${doc.slug}`,
        lastmod: today,
        changefreq: 'weekly',
        priority: '0.85',
      });
    }
  }

  return formatUrlset(entries);
}

/**
 * 3. Blog Posts Sub-Sitemap (/wp-sitemap-posts-post-1.xml)
 */
export function generatePostsSitemapXml(baseUrl: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapUrlEntry[] = [];
  for (const blog of BLOG_POSTS) {
    if (blog.slug) {
      const blogDate = blog.publishedDate && blog.publishedDate.includes('-') ? blog.publishedDate : today;
      entries.push({
        loc: `${cleanBase}/#blog/${blog.slug}`,
        lastmod: blogDate,
        changefreq: 'monthly',
        priority: '0.8',
      });
    }
  }

  return formatUrlset(entries);
}

/**
 * 4. Specialties Sub-Sitemap (/wp-sitemap-taxonomies-category-1.xml)
 */
export function generateTaxonomiesSitemapXml(baseUrl: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapUrlEntry[] = SPECIALTIES.map((spec) => ({
    loc: `${cleanBase}/#list?specialty=${spec}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  return formatUrlset(entries);
}

/**
 * 5. Areas Sub-Sitemap (/wp-sitemap-users-1.xml)
 */
export function generateUsersSitemapXml(baseUrl: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapUrlEntry[] = CHATTOGRAM_AREAS.map((area) => ({
    loc: `${cleanBase}/#list?area=${encodeURIComponent(area)}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8',
  }));

  return formatUrlset(entries);
}

/**
 * 6. Full Combined Sitemap (/sitemap.xml)
 */
export function generateSitemapXml(baseUrl: string): string {
  const cleanBase = baseUrl.replace(/\/+$/, '');
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapUrlEntry[] = [
    { loc: `${cleanBase}/`, lastmod: today, changefreq: 'daily', priority: '1.0' },
    { loc: `${cleanBase}/#list`, lastmod: today, changefreq: 'daily', priority: '0.9' },
    { loc: `${cleanBase}/#blog`, lastmod: today, changefreq: 'daily', priority: '0.9' },
    { loc: `${cleanBase}/#sitemap`, lastmod: today, changefreq: 'weekly', priority: '0.7' },
  ];

  for (const spec of SPECIALTIES) {
    entries.push({ loc: `${cleanBase}/#list?specialty=${spec}`, lastmod: today, changefreq: 'weekly', priority: '0.8' });
  }

  for (const area of CHATTOGRAM_AREAS) {
    entries.push({ loc: `${cleanBase}/#list?area=${encodeURIComponent(area)}`, lastmod: today, changefreq: 'weekly', priority: '0.8' });
  }

  for (const doc of INITIAL_DOCTORS) {
    if (doc.slug) {
      entries.push({ loc: `${cleanBase}/#doctor/${doc.slug}`, lastmod: today, changefreq: 'weekly', priority: '0.85' });
    }
  }

  for (const blog of BLOG_POSTS) {
    if (blog.slug) {
      const blogDate = blog.publishedDate && blog.publishedDate.includes('-') ? blog.publishedDate : today;
      entries.push({ loc: `${cleanBase}/#blog/${blog.slug}`, lastmod: blogDate, changefreq: 'monthly', priority: '0.8' });
    }
  }

  return formatUrlset(entries);
}

function formatUrlset(entries: SitemapUrlEntry[]): string {
  const xmlEntries = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!-- Dakter Achen XML Sitemap - Total URLs: ${entries.length} -->
${xmlEntries}
</urlset>`;
}

/**
 * 7. Modern, Human-Friendly HTML renderer without deprecated XSLT
 * This completely avoids the browser's red "This site uses XSLT..." warning banner
 * while giving human visitors a clean, fast, interactive view.
 */
export function renderHumanFriendlySitemapHtml({
  title,
  description,
  items,
  isIndex = false,
  rawXmlUrl,
}: {
  title: string;
  description: string;
  items: Array<{ loc: string; lastmod?: string; changefreq?: string; priority?: string; title?: string }>;
  isIndex?: boolean;
  rawXmlUrl: string;
}): string {
  return `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeXml(title)} — Dakter Achen</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans Bengali", sans-serif;
      background-color: #f8fafc;
      color: #1e293b;
      padding: 24px 16px;
      line-height: 1.5;
    }
    .container {
      max-width: 1050px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 16px;
      box-shadow: 0 4px 20px -2px rgba(0,0,0,0.06);
      border: 1px solid #e2e8f0;
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #0E7490, #0284C7);
      color: #ffffff;
      padding: 32px 28px;
    }
    .header h1 {
      font-size: 24px;
      font-weight: 800;
      margin-bottom: 8px;
    }
    .header p {
      font-size: 14px;
      opacity: 0.92;
      max-width: 700px;
    }
    .actions-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
      padding: 16px 28px;
      background: #f1f5f9;
      border-bottom: 1px solid #e2e8f0;
      font-size: 13px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #e0f2fe;
      color: #0369a1;
      padding: 4px 12px;
      border-radius: 999px;
      font-weight: 600;
    }
    .btn-xml {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #0E7490;
      color: #ffffff;
      padding: 6px 14px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 12px;
      transition: background 0.15s;
    }
    .btn-xml:hover {
      background: #0891b2;
    }
    .search-box {
      padding: 14px 28px;
      border-bottom: 1px solid #e2e8f0;
    }
    .search-input {
      width: 100%;
      max-width: 400px;
      padding: 9px 14px;
      border-radius: 8px;
      border: 1px solid #cbd5e1;
      font-size: 13px;
      outline: none;
    }
    .search-input:focus {
      border-color: #0E7490;
      box-shadow: 0 0 0 2px rgba(14,116,144,0.15);
    }
    .table-wrap {
      overflow-x: auto;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      text-align: left;
    }
    th {
      background: #f8fafc;
      color: #475569;
      font-weight: 700;
      padding: 12px 28px;
      border-bottom: 2px solid #e2e8f0;
      white-space: nowrap;
    }
    td {
      padding: 12px 28px;
      border-bottom: 1px solid #f1f5f9;
      word-break: break-all;
    }
    tr:hover td {
      background: #f8fafc;
    }
    a.link {
      color: #0284c7;
      text-decoration: none;
      font-weight: 500;
    }
    a.link:hover {
      text-decoration: underline;
      color: #0369a1;
    }
    .footer {
      padding: 16px 28px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      font-size: 12px;
      color: #64748b;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 10px;
    }
    .nav-links a {
      color: #0E7490;
      text-decoration: none;
      font-weight: 600;
      margin-right: 14px;
    }
    .nav-links a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${escapeXml(title)}</h1>
      <p>${escapeXml(description)}</p>
    </div>

    <div class="actions-bar">
      <div class="badge">
        <span>Number of ${isIndex ? 'Sitemaps' : 'URLs'} in this XML Sitemap:</span>
        <strong>${items.length}</strong>
      </div>
      <div style="display:flex; gap:8px; align-items:center;">
        <a href="${rawXmlUrl}" class="btn-xml" target="_blank" rel="noopener noreferrer">
          📄 Raw XML ফাইল দেখুন (?format=xml)
        </a>
        <a href="/" class="btn-xml" style="background:#475569;">
          🏠 মূল ওয়েবসাইটে যান
        </a>
      </div>
    </div>

    <div class="search-box">
      <input type="text" id="filterInput" class="search-input" placeholder="তালিকায় ফিল্টার করুন..." onkeyup="filterTable()">
    </div>

    <div class="table-wrap">
      <table id="sitemapTable">
        <thead>
          <tr>
            <th style="width: 40px;">#</th>
            <th>${isIndex ? 'Sitemap URL' : 'Page URL'}</th>
            ${!isIndex ? '<th style="width:120px;">Changefreq</th><th style="width:90px;">Priority</th>' : ''}
            <th style="width: 140px;">Last Modified</th>
          </tr>
        </thead>
        <tbody>
          ${items
            .map(
              (item, idx) => `<tr>
            <td style="color:#94a3b8; font-size:12px;">${idx + 1}</td>
            <td>
              <a href="${escapeXml(item.loc)}" class="link">${escapeXml(item.loc)}</a>
              ${item.title ? `<div style="font-size:11px; color:#64748b; margin-top:2px;">${escapeXml(item.title)}</div>` : ''}
            </td>
            ${!isIndex ? `<td style="color:#64748b; font-size:12px;">${item.changefreq || 'weekly'}</td><td style="color:#64748b; font-size:12px;">${item.priority || '0.8'}</td>` : ''}
            <td style="color:#64748b; font-size:12px;">${item.lastmod || '2026-10-29'}</td>
          </tr>`
            )
            .join('\n')}
        </tbody>
      </table>
    </div>

    <div class="footer">
      <div class="nav-links">
        <a href="/wp-sitemap.xml">wp-sitemap.xml</a>
        <a href="/wp-sitemap-posts-page-1.xml">pages.xml</a>
        <a href="/wp-sitemap-posts-post-1.xml">posts.xml</a>
        <a href="/wp-sitemap-taxonomies-category-1.xml">categories.xml</a>
        <a href="/wp-sitemap-users-1.xml">users.xml</a>
        <a href="/sitemap.xml">sitemap.xml</a>
      </div>
      <div>
        Dakter Achen · Google Chrome XSLT Warning Free Architecture
      </div>
    </div>
  </div>

  <script>
    function filterTable() {
      const input = document.getElementById('filterInput');
      const filter = input.value.toLowerCase();
      const rows = document.querySelectorAll('#sitemapTable tbody tr');
      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
      });
    }
  </script>
</body>
</html>`;
}
