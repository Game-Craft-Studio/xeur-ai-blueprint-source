import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta Tags for PWA */}
        <meta name="application-name" content="XEUR.AI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="XEUR.AI" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#ff6b9d" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#ff6b9d" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff6b9d" />
        
        {/* Preconnect to External Resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />
        
        {/* SEO and Open Graph */}
        <meta name="description" content="XEUR.AI - Revolutionary AI-powered game development platform. Create complete, multi-platform games in ~1 hour using just natural language prompts. Currently raising $2.5M seed round." />
        <meta name="keywords" content="AI game development, game creation, XEUR.AI, artificial intelligence, no-code games, game maker, NVIDIA Inception, alpha beta" />
        <meta name="author" content="XEUR.AI (Craft Production Group)" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="XEUR.AI" />
        <meta property="og:title" content="XEUR.AI - Revolutionary AI Game Development Platform" />
        <meta property="og:description" content="Create complete, multi-platform games in ~1 hour using just natural language prompts. Revolutionary AI technology democratizing game development." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://xeur.ai" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@XeurAI" />
        <meta name="twitter:creator" content="@XeurAI" />
        <meta name="twitter:title" content="XEUR.AI - Revolutionary AI Game Development Platform" />
        <meta name="twitter:description" content="Create complete, multi-platform games in ~1 hour using just natural language prompts. Revolutionary AI technology democratizing game development." />
        <meta name="twitter:image" content="/twitter-image.png" />
        
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no" />
        
        {/* Security Headers */}
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://www.youtube.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; media-src 'self' https:; connect-src 'self' https:; frame-src 'self' https://www.youtube.com;" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Microsoft Clarity Analytics */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "roodud6o94");
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "XEUR.AI",
              "description": "Revolutionary AI-powered game development platform that creates complete, multi-platform games in approximately 1 hour using natural language prompts.",
              "url": "https://xeur.ai",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web, Windows, macOS, Linux",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Beta access available"
              },
              "author": {
                "@type": "Organization",
                "name": "XEUR.AI (Craft Production Group)",
                "url": "https://xeur.ai",
                "sameAs": [
                  "https://linkedin.com/company/xeur-ai"
                ]
              },
              "publisher": {
                "@type": "Organization",
                "name": "XEUR.AI",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://xeur.ai/logo.png"
                }
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
