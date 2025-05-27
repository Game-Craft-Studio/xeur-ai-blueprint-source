import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Zap, Globe, Building, Coins, Rocket, Shield, Users, ChevronRight } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      name: "Platform SaaS",
      icon: <Zap className="w-12 h-12 text-bright_magenta" />,
      description: "Core subscription-based game creation platform with tiered access levels",
      features: [
        "Complete game creation in ~1 hour vs traditional 1+ years",
        "Natural language input - no coding required",
        "AI-powered asset generation at scale",
        "Multi-platform export capabilities",
        "Built-in monetization tools and analytics",
        "Cloud-based with instant access"
      ],
      link: "/contact?solution=platform",
      gradient: "from-bright_magenta to-purple-600",
      benefits: [
        "Revolutionary speed and efficiency",
        "No technical barriers or learning curve",
        "Professional-quality game output",
        "Comprehensive development ecosystem"
      ]
    },
    {
      name: "XEUR Xport",
      icon: <Globe className="w-12 h-12 text-tech_green" />,
      description: "Multi-platform deployment services with automated optimization",
      features: [
        "Single-click deployment to any platform",
        "Automated platform-specific optimization",
        "App store submission automation",
        "Cross-platform compatibility testing",
        "Performance optimization for each platform",
        "Real-time deployment monitoring"
      ],
      link: "/xeur-xport",
      gradient: "from-tech_green to-cyan-400",
      benefits: [
        "Deploy to PC, Mobile, Web, and Web3",
        "Automatic asset optimization",
        "Platform-specific feature adaptation",
        "Streamlined publishing workflow"
      ]
    },
    {
      name: "XEUR API",
      icon: <Building className="w-12 h-12 text-blue-400" />,
      description: "Developer platform and enterprise integration services",
      features: [
        "RESTful API for programmatic game creation",
        "White-label solutions for businesses",
        "Custom integration support",
        "Scalable cloud infrastructure",
        "Comprehensive documentation and SDKs",
        "24/7 enterprise support"
      ],
      link: "/xeur-api",
      gradient: "from-blue-400 to-indigo-600",
      benefits: [
        "Integrate AI game creation into your platform",
        "Custom branding and white-label options",
        "Enterprise-grade security and compliance",
        "Dedicated technical support"
      ]
    },
    {
      name: "XEUR Connect",
      icon: <Coins className="w-12 h-12 text-purple-400" />,
      description: "Web3 gaming platform with blockchain integration and NFT marketplace",
      features: [
        "Blockchain game deployment capabilities",
        "NFT minting and marketplace integration",
        "Multi-chain support (Ethereum, Polygon, etc.)",
        "Smart contract automation",
        "Decentralized game hosting",
        "Play-to-earn mechanics integration"
      ],
      link: "/xeur-connect",
      gradient: "from-purple-400 to-pink-600",
      benefits: [
        "Deploy games on blockchain networks",
        "Built-in NFT and crypto functionality",
        "Access to Web3 gaming economy",
        "Future-ready decentralized features"
      ]
    },
    {
      name: "Enterprise Solutions",
      icon: <Rocket className="w-12 h-12 text-orange-400" />,
      description: "Custom B2B solutions for brands, educators, and large organizations",
      features: [
        "Brand gamification and marketing games",
        "Corporate training and simulation solutions",
        "Educational game creation tools",
        "Custom development and consultation",
        "Dedicated account management",
        "On-premise deployment options"
      ],
      link: "/enterprise",
      gradient: "from-orange-400 to-red-600",
      benefits: [
        "Tailored solutions for specific needs",
        "Full-service development support",
        "Training and onboarding programs",
        "Priority support and SLA guarantees"
      ]
    }
  ];

  const capabilities = [
    {
      title: "Revolutionary Speed",
      description: "Create complete games in ~1 hour instead of 1+ years",
      icon: "⚡"
    },
    {
      title: "No Technical Barriers",
      description: "Natural language input - no coding skills required",
      icon: "🎯"
    },
    {
      title: "Multi-Platform Ready",
      description: "Deploy to PC, Mobile, Web, and Web3 platforms",
      icon: "🌐"
    },
    {
      title: "AI-Powered Creation",
      description: "8 specialized AI models handle every aspect",
      icon: "🤖"
    },
    {
      title: "Complete Assets",
      description: "3D models, textures, audio, and game logic included",
      icon: "🎨"
    },
    {
      title: "Instant Monetization",
      description: "Built-in tools for ads, IAP, and Web3 economies",
      icon: "💰"
    }
  ];

  const caseStudies = [
    {
      title: "Creator Success Story",
      description: "Individual creator launches viral mobile game",
      metric: "1M+ downloads in first month",
      icon: "🎮"
    },
    {
      title: "Educational Impact",
      description: "University creates interactive learning games",
      metric: "300% increase in student engagement",
      icon: "🎓"
    },
    {
      title: "Enterprise Transformation",
      description: "Fortune 500 company gamifies training",
      metric: "85% completion rate improvement",
      icon: "🏢"
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep_purple/20 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta via-purple-400 to-tech_green animate-gradient">
                Complete Solutions Ecosystem
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-light_gray_text/80 max-w-4xl mx-auto">
              From individual creators to enterprise deployments - XEUR.AI offers comprehensive solutions 
              for every game creation need, powered by our revolutionary AI technology.
            </p>
            <div className="mt-8 inline-flex items-center px-4 py-2 bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/30 rounded-full text-tech_green text-sm font-medium">
              <div className="w-2 h-2 bg-tech_green rounded-full mr-2"></div>
              Currently in Alpha/Beta • Join Early Access
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities Grid */}
      <div className="py-16 bg-deep_purple/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Platform <span className="text-bright_magenta">Capabilities</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                className="bg-medium_purple/20 rounded-xl p-6 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-4">{capability.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-bright_magenta">{capability.title}</h3>
                <p className="text-light_gray_text/70">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-bright_magenta">Solution Portfolio</span>
            </h2>
            <p className="text-lg text-light_gray_text/70 max-w-3xl mx-auto">
              Choose the solution that fits your needs - from individual creativity to enterprise transformation
            </p>
          </div>
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-medium_purple/20 to-deep_purple/20 rounded-2xl p-8 md:p-12 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${solution.gradient} mb-6`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      {solution.name}
                    </h3>
                    <p className="text-lg text-light_gray_text/80 mb-6">
                      {solution.description}
                    </p>
                    <Link 
                      href={solution.link}
                      className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${solution.gradient} rounded-xl hover:scale-105 shadow-lg hover:shadow-xl group`}
                    >
                      Explore {solution.name}
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                      <h4 className="text-xl font-semibold mb-4 text-bright_magenta">Key Features</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-tech_green rounded-full mr-3 mt-2 shrink-0"></div>
                            <span className="text-light_gray_text/70">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-near_black/50 rounded-xl p-6 border border-light_purple/20">
                      <h4 className="text-xl font-semibold mb-4 text-tech_green">Benefits</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <Shield className="w-4 h-4 text-tech_green mr-3 mt-1 shrink-0" />
                            <span className="text-light_gray_text/70">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-to-r from-tech_green/10 to-bright_magenta/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success <span className="text-bright_magenta">Stories</span>
            </h2>
            <p className="text-lg text-light_gray_text/70">
              See how XEUR.AI is transforming game creation across industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-near_black/60 rounded-xl p-6 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300">
                <div className="text-4xl mb-4">{study.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-bright_magenta">{study.title}</h3>
                <p className="text-light_gray_text/70 mb-4">{study.description}</p>
                <div className="text-2xl font-bold text-tech_green">{study.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Market Opportunity */}
      <div className="py-16 bg-gradient-to-r from-tech_green/20 to-bright_magenta/20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Addressing a <span className="text-bright_magenta">$142B Market Opportunity</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-near_black/60 rounded-xl p-6 border border-tech_green/30">
                <div className="text-4xl font-bold text-tech_green mb-2">590M+</div>
                <div className="text-light_gray_text/70">Blocked Creators</div>
              </div>
              <div className="bg-near_black/60 rounded-xl p-6 border border-bright_magenta/30">
                <div className="text-4xl font-bold text-bright_magenta mb-2">>99%</div>
                <div className="text-light_gray_text/70">Cost Reduction</div>
              </div>
              <div className="bg-near_black/60 rounded-xl p-6 border border-purple-400/30">
                <div className="text-4xl font-bold text-purple-400 mb-2">21X</div>
                <div className="text-light_gray_text/70">Market Expansion</div>
              </div>
              <div className="bg-near_black/60 rounded-xl p-6 border border-cyan-400/30">
                <div className="text-4xl font-bold text-cyan-400 mb-2">~300X</div>
                <div className="text-light_gray_text/70">Capacity Multiplier</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join the <span className="text-bright_magenta">Game Creation Revolution?</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Whether you're an individual creator, a developer team, or an enterprise - 
            we have the perfect solution for your game creation needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/Contact?service=demo" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-bright_magenta to-purple-600 rounded-xl hover:from-purple-600 hover:to-bright_magenta transform hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-bright_magenta/50"
            >
              <span className="relative z-10">Request a Demo</span>
            </Link>
            <Link 
              href="/Contact?service=solutions" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-tech_green/70 rounded-xl hover:border-tech_green hover:bg-tech_green/10 transform hover:scale-105"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Solutions;