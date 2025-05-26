import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, Code, Zap, Settings, Link as LinkIcon, Database, BookOpen, Users, Rocket } from "lucide-react";

const XeurAPI = () => {
  const apiFeatures = [
    {
      icon: <Code className="w-10 h-10 text-tech_green" />,
      title: "Game Generation API",
      description: "Complete game creation from text prompts with programmatic access to all 8 specialized AI models.",
      features: [
        "RESTful endpoints for all game creation functions",
        "Real-time generation status and progress tracking", 
        "Customizable AI model parameters",
        "Batch processing for multiple games"
      ]
    },
    {
      icon: <Settings className="w-10 h-10 text-bright_magenta" />,
      title: "Asset Generation API",
      description: "Standalone access to AI-powered 3D models, textures, audio, and animation generation.",
      features: [
        "High-fidelity 3D asset creation",
        "Style-consistent texture generation",
        "Procedural audio and music creation", 
        "Animation and rigging automation"
      ]
    },
    {
      icon: <Rocket className="w-10 h-10 text-cyan-400" />,
      title: "Deployment API", 
      description: "Programmatic access to XEUR Xport for automated multi-platform game deployment.",
      features: [
        "Multi-platform compilation endpoints",
        "Store metadata generation",
        "Automated optimization profiles",
        "Deployment status monitoring"
      ]
    },
    {
      icon: <LinkIcon className="w-10 h-10 text-purple-400" />,
      title: "Web3 Integration API",
      description: "Blockchain game deployment with NFT integration and smart contract generation.",
      features: [
        "Multi-chain deployment support", 
        "Automated smart contract generation",
        "NFT asset tokenization",
        "Wallet integration helpers"
      ]
    }
  ];

  const codeExample = `// Initialize XEUR API client
const xeur = new XEURClient({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create a game from text prompt
const gameResponse = await xeur.createGame({
  prompt: "Create a 2D platformer with a robot protagonist collecting energy crystals",
  style: "cyberpunk",
  complexity: "intermediate",
  platforms: ["web", "mobile"]
});

// Monitor generation progress
const status = await xeur.getGameStatus(gameResponse.gameId);

// Deploy to multiple platforms
if (status.completed) {
  const deployment = await xeur.deployGame({
    gameId: gameResponse.gameId,
    platforms: ["ios", "android", "web"],
    optimization: "performance"
  });
}`;

  const pricingTiers = [
    {
      name: "Developer",
      price: "$99",
      period: "/month",
      description: "Perfect for individual developers and small projects",
      features: [
        "1,000 API calls per month",
        "Basic game generation endpoints", 
        "Standard rate limits",
        "Community support",
        "Web deployment only",
        "Basic documentation access"
      ],
      ctaText: "Start Developing",
      ctaLink: "/signup?plan=api-developer",
      highlighted: false
    },
    {
      name: "Professional", 
      price: "$499",
      period: "/month",
      description: "Most popular for growing teams and businesses",
      features: [
        "10,000 API calls per month",
        "Full API suite access",
        "Multi-platform deployment",
        "Priority support",
        "Webhook integrations",
        "Advanced documentation",
        "Usage analytics dashboard",
        "SLA guarantees"
      ],
      ctaText: "Go Professional",
      ctaLink: "/signup?plan=api-professional", 
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: " pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Unlimited API calls",
        "Custom model training",
        "White-label solutions",
        "Dedicated infrastructure", 
        "24/7 premium support",
        "Custom integrations",
        "On-premise deployment",
        "Custom SLA agreements"
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact?service=api-enterprise",
      highlighted: false
    }
  ];

  const integrationUseCases = [
    {
      icon: <BookOpen className="w-8 h-8 text-bright_magenta" />,
      title: "Educational Platforms",
      description: "Integrate game creation into learning management systems for interactive educational content."
    },
    {
      icon: <Users className="w-8 h-8 text-tech_green" />,
      title: "Enterprise Training", 
      description: "Create branded training games and simulations for employee development programs."
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "App Development",
      description: "Add game creation capabilities to your existing mobile or web applications."
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: "Creative Tools",
      description: "Enhance design platforms with AI-powered interactive content generation."
    },
    {
      icon: <Database className="w-8 h-8 text-pink-400" />,
      title: "E-commerce",
      description: "Create product showcase games and interactive marketing experiences."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Entertainment",
      description: "Power content creation platforms with instant game generation capabilities."
    }
  ];

  const developerResources = [
    { icon: <BookOpen className="w-8 h-8 text-tech_green" />, title: "API Documentation", desc: "Complete endpoint reference with examples" },
    { icon: <Code className="w-8 h-8 text-bright_magenta" />, title: "SDKs & Libraries", desc: "JavaScript, Python, PHP, and more" },
    { icon: <Zap className="w-8 h-8 text-cyan-400" />, title: "Quick Start Guides", desc: "Get up and running in minutes" },
    { icon: <Settings className="w-8 h-8 text-purple-400" />, title: "Code Examples", desc: "Real-world implementation samples" },
    { icon: <LinkIcon className="w-8 h-8 text-pink-400" />, title: "Integration Guides", desc: "Platform-specific tutorials" },
    { icon: <Database className="w-8 h-8 text-yellow-400" />, title: "API Console", desc: "Interactive testing environment" }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-tech_green">XEUR.AI</span>
                <span className="text-light_gray_text mx-4">×</span>
                <span className="text-cyan-400">API</span>
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Power Your <span className="text-bright_magenta">Platform</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Integrate revolutionary AI game creation into your applications. Enterprise-grade API access to XEUR.AI's 
              complete game generation engine - from simple prototyping to white-label solutions.
            </p>
          </div>
        </div>
      </div>

      {/* API Features */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Complete <span className="text-bright_magenta">API Suite</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apiFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-medium_purple/50 rounded-lg p-3 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bright_magenta">{feature.title}</h3>
                </div>
                <p className="text-light_gray_text/80 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <Zap size={16} className="text-tech_green mr-2 shrink-0 mt-1" />
                      <span className="text-light_gray_text/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Example */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-cyan-400">Quick Start Example</h2>
              <span className="bg-cyan-400/20 px-4 py-2 rounded-full text-cyan-400 text-sm">JavaScript</span>
            </div>
            <div className="bg-near_black/80 border border-light_purple/30 rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-light_gray_text">
                  {codeExample}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Database className="inline-block w-10 h-10 text-purple-400 mr-2" />
            API Pricing Tiers
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Scalable pricing that grows with your application and user base
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  tier.highlighted 
                    ? 'bg-purple-gradient border-bright_magenta shadow-lg shadow-bright_magenta/20' 
                    : 'bg-medium_purple/20 border-light_purple/30'
                }`}
              >
                {tier.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-tech_green text-near_black font-bold py-1 px-4 rounded-full text-sm">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-bright_magenta mb-1">
                    {tier.price}<span className="text-lg text-light_gray_text/70">{tier.period}</span>
                  </div>
                  <p className="text-light_gray_text/70">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check size={18} className="text-tech_green mr-3 shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={tier.ctaLink}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    tier.highlighted 
                      ? 'bg-bright_magenta text-light_gray_text hover:bg-bright_magenta/90' 
                      : 'bg-medium_purple text-light_gray_text hover:bg-medium_purple/80'
                  }`}
                >
                  {tier.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Integration Use Cases */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <LinkIcon className="inline-block w-10 h-10 text-pink-400 mr-2" />
            Integration Use Cases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationUseCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-6 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{useCase.title}</h3>
                <p className="text-sm text-light_gray_text/70">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Developer Resources */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <BookOpen className="inline-block w-10 h-10 text-tech_green mr-2" />
            Developer Resources
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Comprehensive documentation, SDKs, and support to get you building quickly
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {developerResources.map((resource, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30 hover:border-tech_green/50 transition-all duration-300 text-center cursor-pointer hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  {resource.icon}
                </div>
                <h4 className="font-semibold mb-2 text-sm">{resource.title}</h4>
                <p className="text-xs text-light_gray_text/70">{resource.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-tech_green/20 to-cyan-400/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the <span className="text-bright_magenta">Future?</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Join leading companies using XEUR API to power their creative platforms. Start building with AI game generation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?plan=api" className="btn-primary">
              Get API Key
            </Link>
            <Link href="/demo?service=api" className="btn-secondary">
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default XeurAPI;