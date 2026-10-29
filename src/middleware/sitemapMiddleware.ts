import type { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  generateSitemapXml,
  generateSitemapIndexXml,
  generatePagesSitemapXml,
  generatePostsSitemapXml,
  generateTaxonomiesSitemapXml,
  generateUsersSitemapXml,
} from '../lib/sitemapGenerator';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Server-side middleware that ensures requests to '/sitemap.xml' (and related sitemap endpoints)
 * directly serve static/dynamic valid sitemap XML data instead of triggering a redirect
 * to WordPress or returning a 404.
 *
 * This provides search engines (Googlebot, Bingbot, etc.) with valid, pristine XML.
 */
export function sitemapMiddleware(req: Request, res: Response, next: NextFunction): void {
  const urlPath = req.path.toLowerCase();

  // Check if this request is for a sitemap or robots file
  const isSitemap =
    urlPath === '/sitemap.xml' ||
    urlPath === '/wp-sitemap.xml' ||
    urlPath === '/sitemap_index.xml' ||
    urlPath === '/wp-sitemap-posts-page-1.xml' ||
    urlPath === '/wp-sitemap-posts-post-1.xml' ||
    urlPath === '/wp-sitemap-taxonomies-category-1.xml' ||
    urlPath === '/wp-sitemap-users-1.xml';

  if (!isSitemap) {
    return next();
  }

  try {
    // Resolve client base URL dynamically to match the current domain/host
    const protocol = (req.headers['x-forwarded-proto'] as string) || req.protocol || 'https';
    const host = req.get('host') || 'ais-pre-c6xmglhpygp4mtnwxyh2al-315185213524.asia-southeast1.run.app';
    const baseUrl = process.env.APP_URL || `${protocol}://${host}`;
    const cleanBase = baseUrl.replace(/\/+$/, '');

    // Set standard sitemap XML headers for search engine crawlers
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400');
    res.setHeader('X-Robots-Tag', 'noindex, follow');
    res.setHeader('X-Content-Type-Options', 'nosniff');

    // 1. Primary Full Combined XML Sitemap: /sitemap.xml
    if (urlPath === '/sitemap.xml') {
      const publicPath = path.resolve(__dirname, '../../public/sitemap.xml');
      const distPath = path.resolve(__dirname, '../../dist/sitemap.xml');

      // Check if static pre-generated file exists and matches current host
      if (fs.existsSync(publicPath)) {
        let content = fs.readFileSync(publicPath, 'utf-8');
        // If the static file had a placeholder or different host, replace with current baseUrl
        if (content.includes('http') && !content.includes(host)) {
          content = generateSitemapXml(baseUrl);
          try {
            fs.writeFileSync(publicPath, content, 'utf-8');
          } catch {}
        }
        res.status(200).send(content);
        return;
      } else if (fs.existsSync(distPath)) {
        const content = fs.readFileSync(distPath, 'utf-8');
        res.status(200).send(content);
        return;
      }

      // Generate on-the-fly if static file not present
      const xml = generateSitemapXml(baseUrl);
      res.status(200).send(xml);
      return;
    }

    // 2. WordPress style sitemap index: /wp-sitemap.xml & /sitemap_index.xml
    if (urlPath === '/wp-sitemap.xml' || urlPath === '/sitemap_index.xml') {
      const publicPath = path.resolve(__dirname, '../../public/wp-sitemap.xml');
      if (fs.existsSync(publicPath)) {
        let content = fs.readFileSync(publicPath, 'utf-8');
        if (content.includes('http') && !content.includes(host)) {
          content = generateSitemapIndexXml(baseUrl);
          try {
            fs.writeFileSync(publicPath, content, 'utf-8');
          } catch {}
        }
        res.status(200).send(content);
        return;
      }
      const xml = generateSitemapIndexXml(baseUrl);
      res.status(200).send(xml);
      return;
    }

    // 3. Pages & Doctors Sub-Sitemap: /wp-sitemap-posts-page-1.xml
    if (urlPath === '/wp-sitemap-posts-page-1.xml') {
      const xml = generatePagesSitemapXml(baseUrl);
      res.status(200).send(xml);
      return;
    }

    // 4. Health Blog Posts Sub-Sitemap: /wp-sitemap-posts-post-1.xml
    if (urlPath === '/wp-sitemap-posts-post-1.xml') {
      const xml = generatePostsSitemapXml(baseUrl);
      res.status(200).send(xml);
      return;
    }

    // 5. Specialty Categories Sub-Sitemap: /wp-sitemap-taxonomies-category-1.xml
    if (urlPath === '/wp-sitemap-taxonomies-category-1.xml') {
      const xml = generateTaxonomiesSitemapXml(baseUrl);
      res.status(200).send(xml);
      return;
    }

    // 6. Area Hubs Sub-Sitemap: /wp-sitemap-users-1.xml
    if (urlPath === '/wp-sitemap-users-1.xml') {
      const xml = generateUsersSitemapXml(baseUrl);
      res.status(200).send(xml);
      return;
    }
  } catch (error) {
    console.error('Error in sitemapMiddleware:', error);
    // Even in error case, never redirect or 404, send fallback XML urlset
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    const fallbackXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://${req.get('host') || 'dakterachen.com'}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;
    res.status(200).send(fallbackXml);
  }
}
