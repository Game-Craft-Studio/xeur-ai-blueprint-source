import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BarChart3, Building, Coins, Crown, Rocket, Shield, Target, TrendingUp, Users, Zap } from "lucide-react";

const BusinessModel = () => {
  const marketStats = [
    { number: "$600B+", label: "Total Addressable Market" },
    { number: "590M", label: "Blocked Creators (Target)" },
    { number: "$142B", label: "Annual Lost Opportunity" },
    { number: "21X", label: "Market Expansion Potential" },
    { number: "99%", label: "Cost Reduction Potential" }
  ];

  const extinctionMetrics = [
    { before: "1+ Years", after: "~1 Hour", label: "Development Time" },
    { before: "$300K+", after: "~$300", label: "Development Cost" },
    { before: "6%", after: "80%+", label: "Completion Rate (Projected)" },
    { before: "28M", after: "590M", label: "Addressable Creators" }
  ];

  const businessModels = [
    {
      name: "Platform SaaS",
      icon: <Zap className="w-8 h-8 text-bright_magenta" />,
      description: "Core subscription-based game creation platform with tiered pricing model (Series A Development)",
      revenue: "$85M",
      period: "Year 3 Projected",
      features: [
        "Creator (Free) - 3 games/month (Roadmap)",
        "Pro ($99/month) - Unlimited games (Roadmap)", 
        "Studio ($299/month) - Web3 + API access (Roadmap)",
        "High-margin recurring revenue (Projected)",
        "Freemium conversion funnel (Planning)"
      ],
      status: "Alpha Platform - Pricing TBD",
      gradient: "from-bright_magenta to-purple-400"
    },
    {
      name: "XEUR Xport (Roadmap)",
      icon: <Target className="w-8 h-8 text-pink-400" />,
      description: "Multi-platform deployment services with per-export and volume pricing (Series A Development)",
      revenue: "$42M",
      period: "Year 3 Projected",
      features: [
        "Per-Export ($29) - Single platform (Planned)",
        "Multi-Platform Bundle ($99) - 5 platforms (Planned)",
        "Enterprise Volume (Custom pricing) (Planned)",
        "Cross-platform optimization (Development)",
        "Automated store submission (Roadmap)"
      ],
      status: "Series A Development Pipeline",
      gradient: "from-pink-400 to-red-400"
    },
    {
      name: "XEUR API (Development)",
      icon: <Building className="w-8 h-8 text-tech_green" />,
      description: "Developer platform and enterprise integration services (Post-Series A)",
      revenue: "$28M", 
      period: "Year 3 Projected",
      features: [
        "Developer ($99/month) - 1K API calls (Planned)",
        "Professional ($499/month) - 10K calls (Planned)",
        "Enterprise (Custom) - Unlimited (Planned)",
        "White-label solutions (Roadmap)",
        "Custom integrations (Development)"
      ],
      status: "Series A Development Pipeline",
      gradient: "from-tech_green to-cyan-400"
    },
    {
      name: "XEUR Connect (Vision)",
      icon: <Coins className="w-8 h-8 text-purple-400" />,
      description: "Web3 gaming platform with blockchain integration and NFT marketplace (Future Vision)",
      revenue: "$35M",
      period: "Year 3 Projected", 
      features: [
        "Blockchain Starter ($199/month) (Vision)",
        "Multi-Chain Pro ($799/month) (Vision)",
        "Enterprise Web3 (Custom) (Vision)",
        "NFT marketplace revenue share (Concept)",
        "Token transaction fees (Future)"
      ],
      status: "Long-term Vision - Post Series A",
      gradient: "from-purple-400 to-yellow-400"
    },
    {
      name: "Enterprise Solutions",
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      description: "B2B services including brand gamification, training, and custom development (Series A Focus)",
      revenue: "$52M",
      period: "Year 3 Projected",
      features: [
        "Business ($2,999/month) - 50 games (Roadmap)",
        "Professional ($9,999/month) - Unlimited (Roadmap)", 
        "Enterprise (Custom) - Full service (Planning)",
        "Brand gamification services (Development)",
        "Corporate training solutions (Planning)"
      ],
      status: "Series A Priority Development",
      gradient: "from-yellow-400 to-orange-400"
    }
  ];

  const revenueProjection = [
    { year: "Year 1 (2025)", revenue: "$2.8M", growth: "Foundation Phase", status: "Projected" },
    { year: "Year 2 (2026)", revenue: "$18.5M", growth: "+560% Growth", status: "Projected" },
    { year: "Year 3 (2027)", revenue: "$78.2M", growth: "+322% Growth", status: "Projected" },
    { year: "Year 4 (2028)", revenue: "$185M", growth: "+137% Growth", status: "Projected" },
    { year: "Year 5 (2029)", revenue: "$420M", growth: "+127% Growth", status: "Projected" }
  ];

  const competitiveAdvantages = [
    {
      icon: <Zap className="w-8 h-8 text-bright_magenta" />,
      title: "Technology Moat",
      description: "NVIDIA-validated architecture + cutting-edge infrastructure access with proprietary XEUR LLM training planned on 78K+ games."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-tech_green" />,
      title: "Data Moat", 
      description: "Network effects creating self-reinforcing data loops. Alpha users generate training data for improved AI quality."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Team Moat",
      description: "Unique blend of AI expertise and gaming industry knowledge. First-mover advantage in AI game creation niche."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Partnership Moat",
      description: "Strategic partnerships with Microsoft, NVIDIA, and Google providing infrastructure and validation advantages."
    },
    {
      icon: <Target className="w-8 h-8 text-pink-400" />,
      title: "Platform Moat",
      description: "Integrated platform creating switching costs. Alpha user community and direct founder support model."
    },
    {
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      title: "Category Definition",
      description: "Creating new market category where XEUR.AI defines the rules rather than competing in existing markets."
    }
  ];

  return (
    <div className="bg-near_black min-h-screen text-gray-100">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-bright_magenta via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Business Model & Vision
              </span>
            </h1>
            <p className="text-xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Multiple revenue streams powering the future of AI-driven game creation. Alpha platform validated by Microsoft, NVIDIA, and Google. 
              Series A development roadmap for comprehensive ecosystem expansion.
            </p>
            
            <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-semibold text-sm">
                ⚠️ ALPHA PLATFORM NOTICE: Revenue projections based on current alpha platform validation and Series A development roadmap. 
                Actual results may vary.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Statistics */}
      <div className="py-16 bg-gradient-to-b from-deep_purple to-near_black">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Market <span className="text-bright_magenta">Opportunity</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {marketStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl p-6 text-center hover:border-bright_magenta/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-bright_magenta mb-2">
                  {stat.number}
                </div>
                <div className="text-light_gray_text/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Extinction Event Metrics */}
      <div className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-red-500/20 to-yellow-400/20 rounded-xl p-8 border border-red-500/30 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                🔥 The Opportunity Metrics
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {extinctionMetrics.map((metric, index) => (
                <div key={index} className="bg-near_black/60 rounded-lg p-6 border border-red-500/30">
                  <div className="text-xl text-light_gray_text/70 mb-2">{metric.before}</div>
                  <div className="text-2xl text-yellow-400 mb-2">→</div>
                  <div className="text-2xl font-bold text-tech_green mb-2">{metric.after}</div>
                  <div className="text-sm text-light_gray_text/70">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Business Models Grid */}
      <div className="py-16 bg-gradient-to-b from-deep_purple to-near_black">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Revenue Stream <span className="text-bright_magenta">Vision</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessModels.map((model, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-bright_magenta/10 to-transparent rounded-xl p-8 border border-bright_magenta/30 hover:border-bright_magenta/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${model.gradient} rounded-lg p-3 mr-4`}>
                    {model.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bright_magenta">
                      {model.name}
                    </h3>
                    <div className="text-sm text-light_gray_text/70">
                      Projected: <span className="text-tech_green font-bold">{model.revenue}</span> ({model.period})
                    </div>
                    <div className="text-xs text-yellow-400 mt-1">
                      Status: {model.status}
                    </div>
                  </div>
                </div>
                
                <p className="text-light_gray_text/80 mb-6">{model.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <div className="w-2 h-2 bg-tech_green rounded-full mr-2 mt-2 shrink-0"></div>
                      <span className="text-light_gray_text/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Projection */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            <TrendingUp className="inline-block w-10 h-10 text-tech_green mr-2" />
            Revenue Projection Model
          </h2>
          
          <div className="text-center mb-8">
            <p className="text-light_gray_text/70 text-sm">
              Based on alpha platform validation and Series A development roadmap. Projections subject to market conditions and execution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {revenueProjection.map((projection, index) => (
              <div 
                key={index}
                className="bg-tech_green/10 rounded-xl p-6 border border-tech_green/20 text-center hover:border-tech_green/50 transition-all duration-300"
              >
                <div className="text-lg font-semibold text-tech_green mb-2">{projection.year}</div>
                <div className="text-2xl font-bold text-white mb-2">{projection.revenue}</div>
                <div className="text-sm text-tech_green mb-1">{projection.growth}</div>
                <div className="text-xs text-yellow-400">{projection.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="py-16 bg-gradient-to-b from-deep_purple to-near_black">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Shield className="inline-block w-10 h-10 text-red-400 mr-2" />
            Competitive Advantages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-red-400/10 to-transparent rounded-xl p-6 border border-red-400/30 hover:border-red-400/50 transition-all duration-300 text-center"
              >
                <div className="flex justify-center mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-red-400">{advantage.title}</h3>
                <p className="text-sm text-light_gray_text/70">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investment Opportunity */}
      <div className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-bright_magenta/20 to-cyan-400/20 rounded-xl p-8 border border-bright_magenta/30 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <Rocket className="inline-block w-8 h-8 text-bright_magenta mr-2" />
              Series A Investment Opportunity
            </h3>
            <p className="text-xl text-light_gray_text/80 mb-8 max-w-4xl mx-auto">
              Currently raising Series A to accelerate development roadmap, enhance AI capabilities, and capture the $142B market opportunity. 
              Join Microsoft, NVIDIA, and Google in backing the democratization of game creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:harshit@cpgplay.com?cc=rishav@cpgplay.com&subject=Investment Deck Request - XEUR.AI Series A"
                className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
              >
                💼 Request Investment Deck
              </a>
              <a 
                href="https://www.youtube.com/watch?v=XtI4AndkV24"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                🎬 Watch Platform Demo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-tech_green/20 to-bright_magenta/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Gaming <span className="text-bright_magenta">Revolution</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Experience the future of game creation today. From alpha platform access to enterprise partnerships, 
            XEUR.AI offers direct founder collaboration for early adopters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:harshit@cpgplay.com?subject=Alpha Access Request - XEUR.AI Platform"
              className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
            >
              🚀 Request Alpha Access
            </a>
            <a 
              href="mailto:rishav@cpgplay.com?subject=Partnership Inquiry - XEUR.AI"
              className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              🤝 Explore Partnership
            </a>
          </div>
          
          <p className="text-sm text-light_gray_text/60 mt-6">
            Direct founder access • No sales process • Alpha platform testing
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessModel;