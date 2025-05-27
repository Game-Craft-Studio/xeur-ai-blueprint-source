/** @type {import('next').NextConfig} */
const nextConfig = {
  // ===== PERFORMANCE OPTIMIZATIONS =====
  experimental: {
    // Enable modern bundling optimizations
    optimizePackageImports: ['lucide-react', '@radix-ui/react-*'],
    // Optimize server components
    serverComponentsExternalPackages: ['sharp'],
    // Enable PPR for better performance
    ppr: false, // Enable when stable
  },

  // ===== BUILD OPTIMIZATIONS =====
  swcMinify: true,
  compiler: {
    // Remove console.logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error']
    } : false,
  },

  // ===== BUNDLE ANALYSIS =====
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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
            value: 'SAMEORIGIN', // Allow YouTube embeds
          },
          // Content Security Policy
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.youtube.com https://s.ytimg.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.xeur.ai https://www.google-analytics.com https://vitals.vercel-insights.com",
              "media-src 'self' https: data:",
              "frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
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
      // Cache static assets
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images
      {
        source: '/:path*.(ico|png|jpg|jpeg|gif|webp|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
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
      'img.youtube.com',
      'i.ytimg.com'
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // ===== REDIRECTS & REWRITES =====
  async redirects() {
    return [
      // Redirect /pricing to /solutions
      {
        source: '/pricing',
        destination: '/solutions',
        permanent: true,
      },
      // Redirect old paths to new structure
      {
        source: '/docs',
        destination: '/tutorials',
        permanent: false,
      },
      // SEO redirects
      {
        source: '/game-creation',
        destination: '/',
        permanent: true,
      },
      {
        source: '/ai-game-development',
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
        destination: process.env.NODE_ENV === 'development' 
          ? 'http://localhost:3001/api/:path*'
          : 'https://api.xeur.ai/:path*',
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
    ];
  },

  // ===== OUTPUT CONFIGURATION =====
  output: 'standalone',
  
  // ===== ENVIRONMENT VARIABLES =====
  env: {
    NEXT_PUBLIC_APP_VERSION: process.env.npm_package_version || '1.3.0',
    NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
    NEXT_PUBLIC_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA || process.env.GITHUB_SHA || 'dev',
  },

  // ===== WEBPACK CUSTOMIZATION =====
  webpack: (config, { dev, isServer, webpack }) => {
    // Resolve aliases
    const path = require('path');
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
    };

    // Optimize bundle size for production
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        minRemainingSize: 0,
        minChunks: 1,
        maxAsyncRequests: 30,
        maxInitialRequests: 30,
        enforceSizeThreshold: 50000,
        cacheGroups: {
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: -10,
            chunks: 'all',
          },
          react: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'react',
            chunks: 'all',
            priority: 20,
          },
          radix: {
            test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
            name: 'radix',
            chunks: 'all',
            priority: 15,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: 'lucide',
            chunks: 'all',
            priority: 10,
          }
        },
      };
    }

    // Add support for importing .svg files as React components
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Ignore certain files during build
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      })
    );

    return config;
  },

  // ===== DEVELOPMENT CONFIGURATION =====
  ...(process.env.NODE_ENV === 'development' && {
    reactStrictMode: true,
    eslint: {
      dirs: ['pages', 'src'],
    },
    typescript: {
      ignoreBuildErrors: false,
    },
  }),

  // ===== PRODUCTION CONFIGURATION =====
  ...(process.env.NODE_ENV === 'production' && {
    reactStrictMode: true,
    productionBrowserSourceMaps: false,
    compress: true,
    optimizeFonts: true,
    poweredByHeader: false,
  }),

  // ===== CUSTOM PAGE EXTENSIONS =====
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // ===== BUILD ID GENERATION =====
  generateBuildId: async () => {
    return process.env.VERCEL_GIT_COMMIT_SHA || 
           process.env.GITHUB_SHA || 
           require('crypto').randomBytes(16).toString('hex');
  },

  // ===== RUNTIME CONFIGURATION =====
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: process.env.MY_SECRET,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
};

module.exports = nextConfig;