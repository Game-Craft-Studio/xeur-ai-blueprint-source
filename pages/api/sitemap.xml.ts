import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://xeur.ai</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Main Platform Pages -->
  <url>
    <loc>https://xeur.ai/platform</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/solutions</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/demo</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- Product Pages -->
  <url>
    <loc>https://xeur.ai/xeur-xport</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/xeur-api</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/xeur-connect</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/enterprise</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Company Pages -->
  <url>
    <loc>https://xeur.ai/about</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/company-overview</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/vision</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/nvidia-partnership</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/careers</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <!-- Use Cases -->
  <url>
    <loc>https://xeur.ai/use-cases/aspiring-creators</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/use-cases/indie-developers</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/use-cases/content-influencers</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Resources -->
  <url>
    <loc>https://xeur.ai/blog</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/docs</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/tutorials</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <!-- Legal Pages -->
  <url>
    <loc>https://xeur.ai/privacy-policy</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/terms-of-service</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/cookie-policy</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  
  <!-- Contact & Auth -->
  <url>
    <loc>https://xeur.ai/contact</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/login</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.4</priority>
  </url>
  
  <url>
    <loc>https://xeur.ai/signup</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Business Model -->
  <url>
    <loc>https://xeur.ai/business-model</loc>
    <lastmod>2025-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
  
  res.status(200).send(sitemap);
}
