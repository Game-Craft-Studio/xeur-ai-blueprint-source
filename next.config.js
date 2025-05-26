/** @type {import('next').NextConfig} */
const nextConfig = {
  // ===== PERFORMANCE OPTIMIZATIONS =====
  experimental: {
    // Enable modern bundling optimizations
    optimizePackageImports: ['lucide-react', '@radix-ui/react-*'],
    // Enable compile-time optimizations
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
    // Optimize server components
    serverComponentsExternalPackages: ['sharp'],
  },

  // ===== BUILD OPTIMIZATIONS =====
  swcMinify: true,
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ===== BUNDLE ANALYSIS =====
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('@next/bundle-analyzer')();
        config.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: 'bundle-analyzer-report.html',
          })
        );
      }
      return config;
    },
  }),

  // ===== SECURITY HEADERS =====
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // HSTS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // XSS Protection
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.xeur.ai https://www.google-analytics.com https://vitals.vercel-insights.com",
              "media-src 'self' https:",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy
          {
            key: 'Permissions-Policy',
            value: [
              'camera=self',
              'microphone=self',
              'geolocation=self',
              'interest-cohort=()',
            ].join(', '),
          },
        ],
      },
    ];
  },

  // ===== IMAGE OPTIMIZATION =====
  images: {
    domains: [
      'via.placeholder.com',
      'cdn.xeur.ai',
      'assets.xeur.ai', 
      'user-content.xeur.ai',
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    // For static export compatibility
    unoptimized: process.env.NODE_ENV === 'production',
  },

  // ===== INTERNATIONALIZATION =====
  i18n: {
    locales: ['en', 'es', 'fr', 'de', 'hi', 'zh'],
    defaultLocale: 'en',
    domains: [
      {
        domain: 'xeur.ai',
        defaultLocale: 'en',
      },
      {
        domain: 'es.xeur.ai',
        defaultLocale: 'es',
      },
    ],
  },

  // ===== REDIRECTS & REWRITES =====
  async redirects() {
    return [
      // Redirect old paths to new structure
      {
        source: '/demo',
        destination: '/platform',
        permanent: true,
      },
      {
        source: '/docs',
        destination: 'https://docs.xeur.ai',
        permanent: true,
      },
      // SEO redirects
      {
        source: '/game-creation',
        destination: '/',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      // API proxy for development
      {
        source: '/api/xeur/:path*',
        destination: 'https://api.xeur.ai/:path*',
      },
      // Health check endpoint
      {
        source: '/health',
        destination: '/api/health',
      },
      // Partnership route rewrites
      {
        source: '/partnerships/nvidia',
        destination: '/nvidia-partnership',
      },
      {
        source: '/partnerships/:path*',
        destination: '/nvidia-partnership',
      },
    ];
  },

  // ===== OUTPUT CONFIGURATION =====
  // Use 'export' for static site generation (GitHub Pages)
  // Use 'standalone' for server deployment (Vercel, etc.)
  output: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true' 
    ? 'export' 
    : 'standalone',
  
  // For static export compatibility
  trailingSlash: true,
  
  // ===== GITHUB PAGES SPECIFIC CONFIGURATION =====
  ...(process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS === 'true' && {
    // Configure asset prefix for GitHub Pages
    assetPrefix: process.env.GITHUB_PAGES ? '/xeur-ai-blueprint-source' : '',
    basePath: process.env.GITHUB_PAGES ? '/xeur-ai-blueprint-source' : '',
  }),
  
  // ===== ENVIRONMENT VARIABLES =====
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version,
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
    NEXT_PUBLIC_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || 'dev',
  },

  // ===== WEBPACK CUSTOMIZATION =====
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Ignore certain packages during build
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').join(__dirname, 'src'),
    };

    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            enforce: true,
          },
        },
      };
    }

    // Add support for importing .svg files as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },

  // ===== DEVELOPMENT CONFIGURATION =====
  ...(process.env.NODE_ENV === 'development' && {
    // Enable React strict mode in development
    reactStrictMode: true,
    // Show eslint errors during development
    eslint: {
      dirs: ['pages', 'src'],
    },
    // TypeScript configuration
    typescript: {
      // Ignore TypeScript errors during build (handle via CI)
      ignoreBuildErrors: false,
    },
  }),

  // ===== PRODUCTION CONFIGURATION =====
  ...(process.env.NODE_ENV === 'production' && {
    // Enable React strict mode in production
    reactStrictMode: true,
    // Disable source maps in production for security
    productionBrowserSourceMaps: false,
    // Enable compression
    compress: true,
    // Optimize CSS
    optimizeFonts: true,
    // Generate static pages where possible
    trailingSlash: true,
  }),

  // ===== CUSTOM PAGE EXTENSIONS =====
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],

  // ===== STATIC OPTIMIZATION =====
  generateBuildId: async () => {
    // Use commit SHA for build ID in production
    return process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || 'development';
  },
};

module.exports = nextConfig;