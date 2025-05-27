# XEUR.AI - Revolutionary AI-Powered Game Development Platform

<div align="center">

![XEUR.AI Logo](https://img.shields.io/badge/XEUR.AI-Democratizing%20Game%20Creation-FF6B9D?style=for-the-badge&logo=gamepad&logoColor=white)

[![Current Status](https://img.shields.io/badge/Status-Alpha%2FBeta-yellow?style=flat-square)](https://xeur.ai)
[![Funding](https://img.shields.io/badge/Funding-Raising%20$2.5M%20Seed-green?style=flat-square)](https://xeur.ai/investors)
[![NVIDIA](https://img.shields.io/badge/NVIDIA-Inception%20Member-76B900?style=flat-square&logo=nvidia)](https://developer.nvidia.com/startups)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-100%25-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)

</div>

## 🚀 The Game Creation Revolution

**XEUR.AI** is transforming how games are created by eliminating technical barriers entirely. Our proprietary AI system, trained on 78,000 games, enables anyone to create complete, multi-platform games in approximately **1 hour** using just natural language prompts.

### 🎯 Key Metrics
- **>99%** Development Time Reduction (1+ years → ~1 hour)
- **>99%** Cost Reduction ($300K+ → ~$300)
- **21X** Market Expansion (28M developers → 590M+ creators)
- **80%+** Projected Completion Rate vs 6% industry average

## 🌟 Current Status

- **Stage**: Alpha/Beta Development
- **Funding**: Currently raising $2.5M seed round at $25M pre-money valuation
- **Partnerships**: NVIDIA Inception Member with Capital Connect access
- **Team**: Based in India, building for global market

## 🛠️ Technology Stack

### Core Platform
- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: React Query, React Hook Form
- **Animation**: Framer Motion
- **Icons**: Lucide React

### AI Infrastructure
- **XEUR LLM**: Proprietary model trained on 78,000 games
- **8 Specialized Models**: Eureka, Galileo, Newton, Faraday, Curie, Albert, Hawking, Ramanujan & Ratan
- **Cloud Infrastructure**: Google Cloud Platform, NVIDIA DGX integration

### Development & Deployment
- **Build System**: Next.js with SWC
- **Package Manager**: npm
- **Code Quality**: ESLint, Prettier, Husky
- **Performance**: Lighthouse CI, Bundle Analyzer
- **Hosting**: Google Cloud VM (production)

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17.0 or higher
- npm 9.0.0 or higher
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source.git
cd xeur-ai-blueprint-source
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# Or build and start
npm run preview
```

## 📁 Project Structure

```
xeur-ai-blueprint-source/
├── pages/                    # Next.js pages (routing)
│   ├── index.tsx            # Homepage
│   ├── solutions.tsx        # Solutions overview
│   ├── company-overview.tsx # Company information
│   ├── platform.tsx         # Platform details
│   └── ...
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Hero.tsx         # Hero section with demo
│   │   ├── Header.tsx       # Navigation header
│   │   ├── BetaSignupModal.tsx # Beta signup form
│   │   └── ui/              # shadcn/ui components
│   ├── lib/                 # Utility functions
│   ├── hooks/               # Custom React hooks
│   └── styles/              # Global styles
├── public/                  # Static assets
├── docs/                    # Documentation
└── .github/                 # GitHub workflows
```

## 🎨 Key Features

### For Creators
- **Natural Language Input**: Describe your game in plain English
- **Complete Game Generation**: 3D models, textures, audio, mechanics
- **Multi-Platform Export**: PC, Mobile, Web, Web3
- **No Coding Required**: Zero technical skills needed

### For Developers
- **XEUR API**: Programmatic access to AI game creation
- **300X Faster Prototyping**: Rapid iteration and testing
- **White-label Solutions**: Custom branding options
- **Enterprise Integration**: Scalable B2B solutions

### For Enterprises
- **Brand Gamification**: Marketing and engagement games
- **Training Solutions**: Interactive corporate learning
- **Custom Development**: Tailored game experiences
- **Instant Deployment**: From concept to production in hours

## 🧠 AI Model Architecture

### XEUR LLM Core
Our proprietary Large Language Model trained specifically on game development data:
- **78,000 games** in training dataset
- **Multi-modal understanding** (text → game mechanics)
- **Continuous learning** from user interactions

### Specialized Models
1. **Eureka & Galileo**: Game ideation and concept expansion
2. **Newton & Faraday**: Physics simulation and game mechanics
3. **Curie & Albert**: Narrative design and quest generation
4. **Hawking**: Procedural world and level generation
5. **Ramanujan & Ratan**: 3D asset and audio generation

## 🚀 Deployment

### Development
```bash
npm run dev
```

### Production (Google Cloud VM)
```bash
# Build the application
npm run build

# Start with PM2 for production
pm2 start npm --name "xeur-ai" -- start

# Or use nohup for background process
nohup npm start > app.log 2>&1 &
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.xeur.ai
NEXT_PUBLIC_APP_URL=https://xeur.ai
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-ga-id
NEXT_PUBLIC_ENVIRONMENT=production
```

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build           # Build for production
npm start              # Start production server

# Code Quality
npm run lint           # Run ESLint with auto-fix
npm run lint:check     # Check linting without fixing
npm run format         # Format code with Prettier
npm run type-check     # TypeScript type checking

# Analysis & Testing
npm run analyze        # Bundle analysis
npm run lighthouse     # Performance testing
npm test              # Run tests (coming soon)

# Maintenance
npm run clean          # Clean build cache
npm run deps:check     # Check for outdated dependencies
npm run deps:update    # Update dependencies
```

## 🌐 Live Demo

Experience XEUR.AI in action:
- **Website**: [https://xeur.ai](https://xeur.ai)
- **Demo Video**: [Watch how we create games in ~1 hour](https://xeur.ai/#demo)
- **Beta Signup**: [Join the revolution](https://xeur.ai/#beta)

## 📊 Business Model

### Revenue Streams
1. **Platform SaaS**: Subscription-based access ($Creator/$Pro/$Studio tiers)
2. **XEUR Xport**: Multi-platform deployment services
3. **XEUR API**: Enterprise B2B integration
4. **XEUR Connect**: Web3 gaming and NFT marketplace
5. **Enterprise Solutions**: Custom development and consulting

### Market Opportunity
- **TAM**: $600B+ (Gaming + Creator Economy)
- **SAM**: $42B (AI-powered game creation tools)
- **SOM**: $142M (Target by Year 3)
- **Lost Opportunity**: $142B annually from unfinished games

## 🤝 Strategic Partnerships

### NVIDIA Inception
- **Status**: Active member with Capital Connect access
- **Benefits**: $100K+ DGX Cloud credits, VC introductions, co-branding
- **Value**: $500K+ in partnership benefits

### Google for Startups
- **Status**: Accelerator member
- **Benefits**: Cloud credits, TPU access, Gemini API integration
- **Focus**: Infrastructure scaling and AI optimization

## 👥 Team

**Harshit Verma** - CEO & Co-Founder
- Visionary leader driving AI-powered game creation revolution
- Strategic focus on global market expansion

**Rishav Goyal** - COO & Co-Founder  
- Operational excellence and partnership development
- Execution discipline for scalable growth

## 💰 Funding Status

**Current Round**: Seed ($2.5M at $25M pre-money)
- **Use of Funds**: 60% Engineering, 25% Go-to-Market, 15% Operations
- **Investor Access**: NVIDIA Capital Connect program
- **Target Close**: Q3 2025

## 🛣️ Roadmap

### Q3 2025
- Public beta launch (5,000 users)
- Web3 integration (XEUR Connect)
- Complete seed funding

### Q4 2025
- Mobile platform support
- Series A funding ($15-20M)
- 10,000+ active users

### Q1 2026
- Full production launch
- 50,000+ users
- International expansion

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is proprietary software. All rights reserved by XEUR.AI (Craft Production Group).

## 📞 Contact & Support

### General Inquiries
- **Website**: [xeur.ai](https://xeur.ai)
- **Email**: hello@xeur.ai
- **Support**: support@xeur.ai

### Business Development
- **Partnerships**: partnerships@xeur.ai
- **Enterprise**: enterprise@xeur.ai
- **Investors**: investors@xeur.ai

### Technical Support
- **Developer API**: developers@xeur.ai
- **Documentation**: [docs.xeur.ai](https://docs.xeur.ai)
- **GitHub Issues**: [Report bugs](https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source/issues)

## 🌍 Made in India, for the World

XEUR.AI is proudly built in India, contributing to the nation's emergence as a global technology powerhouse while democratizing game creation worldwide.

---

<div align="center">

**"We're not just creating another tool – we're triggering an extinction event for traditional game development barriers."**

*— Harshit Verma, CEO & Co-Founder*

[![Join Beta](https://img.shields.io/badge/Join%20Beta-Early%20Access-FF6B9D?style=for-the-badge)](https://xeur.ai/#beta)
[![Watch Demo](https://img.shields.io/badge/Watch%20Demo-Live%20Action-00D9FF?style=for-the-badge)](https://xeur.ai/#demo)

</div>