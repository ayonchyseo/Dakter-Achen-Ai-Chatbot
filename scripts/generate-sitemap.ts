import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  generateSitemapIndexXml,
  generatePagesSitemapXml,
  generatePostsSitemapXml,
  generateTaxonomiesSitemapXml,
  generateUsersSitemapXml,
  generateSitemapXml,
} from '../src/lib/sitemapGenerator';
import { generateWordPressWxrXml } from '../src/lib/wordpressExportGenerator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = process.env.APP_URL || 'https://ais-pre-c6xmglhpygp4mtnwxyh2al-315185213524.asia-southeast1.run.app';
const publicDir = path.resolve(__dirname, '../public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// 1. wp-sitemap.xml & sitemap_index.xml
const indexXml = generateSitemapIndexXml(baseUrl);
fs.writeFileSync(path.join(publicDir, 'wp-sitemap.xml'), indexXml, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'sitemap_index.xml'), indexXml, 'utf-8');

// 2. wp-sitemap-posts-page-1.xml (Pages & Doctors)
const pagesXml = generatePagesSitemapXml(baseUrl);
fs.writeFileSync(path.join(publicDir, 'wp-sitemap-posts-page-1.xml'), pagesXml, 'utf-8');

// 3. wp-sitemap-posts-post-1.xml (Blog Posts)
const postsXml = generatePostsSitemapXml(baseUrl);
fs.writeFileSync(path.join(publicDir, 'wp-sitemap-posts-post-1.xml'), postsXml, 'utf-8');

// 4. wp-sitemap-taxonomies-category-1.xml (Specialties)
const taxonomiesXml = generateTaxonomiesSitemapXml(baseUrl);
fs.writeFileSync(path.join(publicDir, 'wp-sitemap-taxonomies-category-1.xml'), taxonomiesXml, 'utf-8');

// 5. wp-sitemap-users-1.xml (Areas)
const usersXml = generateUsersSitemapXml(baseUrl);
fs.writeFileSync(path.join(publicDir, 'wp-sitemap-users-1.xml'), usersXml, 'utf-8');

// 6. Full combined sitemap.xml
const fullXml = generateSitemapXml(baseUrl);
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), fullXml, 'utf-8');

// 7. WordPress WXR Import File for dakterachen.com
const wpExportXml = generateWordPressWxrXml('https://dakterachen.com');
fs.writeFileSync(path.join(publicDir, 'dakterachen-wordpress-import.xml'), wpExportXml, 'utf-8');

// 8. robots.txt
const cleanBase = baseUrl.replace(/\/+$/, '');
const robotsTxt = `User-agent: *
Allow: /

# Primary Sitemaps
Sitemap: ${cleanBase}/sitemap.xml
Sitemap: ${cleanBase}/wp-sitemap.xml
`;
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt, 'utf-8');

console.log('✅ Generated all XML sitemaps, robots.txt, and WordPress import XML in /public');
