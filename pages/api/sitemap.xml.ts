import { NextApiRequest, NextApiResponse } from 'next';

interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Dynamic Sitemap Generator
 * GET /api/sitemap.xml - Generates XML sitemap for search engines
 */
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://xeur.ai';
  const currentDate = new Date().toISOString().split('T')[0];

  // Define all pages with their SEO properties
  const urls: SitemapUrl[] = [
    // Core pages - highest priority
    {
      loc: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: `${baseUrl}/demo`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/solutions`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.9,
    },
    {
      loc: `${baseUrl}/platform`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.8,
    },

    // Product pages
    {
      loc: `${baseUrl}/xeur-api`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/xeur-xport`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/xeur-connect`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },
    {
      loc: `${baseUrl}/enterprise`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.7,
    },

    // Company pages
    {
      loc: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/company-overview`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/nvidia-partnership`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/vision`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.5,
    },

    // Use case pages
    {
      loc: `${baseUrl}/use-cases/aspiring-creators`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/use-cases/indie-developers`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/use-cases/content-influencers`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5,
    },

    // Resources and content
    {
      loc: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 0.6,
    },
    {
      loc: `${baseUrl}/tutorials`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.5,
    },
    {
      loc: `${baseUrl}/business-model`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.4,
    },

    // Contact and legal
    {
      loc: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.4,
    },
    {
      loc: `${baseUrl}/careers`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.4,
    },
    {
      loc: `${baseUrl}/privacy-policy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/terms-of-service`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.3,
    },
    {
      loc: `${baseUrl}/cookie-policy`,
      lastmod: currentDate,
      changefreq: 'yearly',
      priority: 0.2,
    },
  ];

  // Generate XML sitemap
  const sitemap = generateSitemapXml(urls);

  // Set appropriate headers
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
  
  return res.status(200).send(sitemap);
}

/**
 * Generate XML sitemap from URLs array
 */
function generateSitemapXml(urls: SitemapUrl[]): string {
  const urlElements = urls
    .map((url) => {
      let urlElement = `    <url>\n      <loc>${escapeXml(url.loc)}</loc>\n`;
      
      if (url.lastmod) {
        urlElement += `      <lastmod>${url.lastmod}</lastmod>\n`;
      }
      
      if (url.changefreq) {
        urlElement += `      <changefreq>${url.changefreq}</changefreq>\n`;
      }
      
      if (url.priority !== undefined) {
        urlElement += `      <priority>${url.priority.toFixed(1)}</priority>\n`;
      }
      
      urlElement += `    </url>`;
      return urlElement;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlElements}
</urlset>`;
}

/**
 * Escape XML special characters
 */
function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case "'": return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}