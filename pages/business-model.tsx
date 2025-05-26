import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Target, Zap, Users, Building, Coins, BarChart3, Shield, Rocket, Crown } from "lucide-react";

const BusinessModel = () => {
  const marketStats = [
    { number: "$600B+", label: "Total Addressable Market" },
    { number: "590M", label: "Blocked Creators (Target)" },
    { number: "$142B", label: "Annual Lost Opportunity" },
    { number: "21X", label: "Market Expansion Potential" },
    { number: "99%", label: "Cost Reduction Achieved" }
  ];

  const extinctionMetrics = [
    { before: "1+ Years", after: "~1 Hour", label: "Development Time" },
    { before: "$300K+", after: "~$300", label: "Development Cost" },
    { before: "6%", after: "80%+", label: "Completion Rate" },
    { before: "28M", after: "590M", label: "Addressable Creators" }
  ];

  const businessModels = [
    {
      name: "Platform SaaS",
      icon: <Zap className="w-8 h-8 text-bright_magenta" />,
      description: "Core subscription-based game creation platform with tiered pricing model",
      revenue: "$85M",
      period: "Year 3",
      features: [
        "Creator (Free) - 3 games/month",
        "Pro ($99/month) - Unlimited games", 
        "Studio ($299/month) - Web3 + API access",
        "High-margin recurring revenue",
        "Freemium conversion funnel"
      ],
      link: "/pricing",
      gradient: "from-bright_magenta to-purple-400"
    },
    {
      name: "XEUR Xport",
      icon: <Target className="w-8 h-8 text-pink-400" />,
      description: "Multi-platform deployment services with per-export and volume pricing",
      revenue: "$42M",
      period: "Year 3",
      features: [
        "Per-Export ($29) - Single platform",
        "Multi-Platform Bundle ($99) - 5 platforms",
        "Enterprise Volume (Custom pricing)",
        "Cross-platform optimization",
        "Automated store submission"
      ],
      link: "/xeur-xport",
      gradient: "from-pink-400 to-red-400"
    },
    {
      name: "XEUR API",
      icon: <Building className="w-8 h-8 text-tech_green" />,
      description: "Developer platform and enterprise integration services",
      revenue: "$28M", 
      period: "Year 3",
      features: [
        "Developer ($99/month) - 1K API calls",
        "Professional ($499/month) - 10K calls",
        "Enterprise (Custom) - Unlimited",
        "White-label solutions",
        "Custom integrations"
      ],
      link: "/xeur-api",
      gradient: "from-tech_green to-cyan-400"
    },
    {
      name: "XEUR Connect",
      icon: <Coins className="w-8 h-8 text-purple-400" />,
      description: "Web3 gaming platform with blockchain integration and NFT marketplace",
      revenue: "$35M",
      period: "Year 3", 
      features: [
        "Blockchain Starter ($199/month)",
        "Multi-Chain Pro ($799/month)",
        "Enterprise Web3 (Custom)",
        "NFT marketplace revenue share",
        "Token transaction fees"
      ],
      link: "/xeur-connect",
      gradient: "from-purple-400 to-yellow-400"
    },
    {
      name: "Enterprise Solutions",
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      description: "B2B services including brand gamification, training, and custom development",
      revenue: "$52M",
      period: "Year 3",
      features: [
        "Business ($2,999/month) - 50 games",
        "Professional ($9,999/month) - Unlimited", 
        "Enterprise (Custom) - Full service",
        "Brand gamification services",
        "Corporate training solutions"
      ],
      link: "/enterprise",
      gradient: "from-yellow-400 to-orange-400"
    }
  ];

  const revenueProjection = [
    { year: "Year 1 (2025)", revenue: "$2.8M", growth: "Foundation Phase" },
    { year: "Year 2 (2026)", revenue: "$18.5M", growth: "+560% Growth" },
    { year: "Year 3 (2027)", revenue: "$78.2M", growth: "+322% Growth" },
    { year: "Year 4 (2028)", revenue: "$185M", growth: "+137% Growth" },
    { year: "Year 5 (2029)", revenue: "$420M", growth: "+127% Growth" }
  ];

  const competitiveAdvantages = [
    {
      icon: <Zap className="w-8 h-8 text-bright_magenta" />,
      title: "Technology Moat",
      description: "NVIDIA-validated architecture + cutting-edge infrastructure access with proprietary XEUR LLM trained on 78,000 games."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-tech_green" />,
      title: "Data Moat", 
      description: "Network effects creating self-reinforcing data loops. More users generate better training data, improving AI quality."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Team Moat",
      description: "Unique blend of AI expertise and gaming industry knowledge. First-mover advantage in AI game creation niche."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "IP Moat",
      description: "Strategic patent portfolio, trade secrets, and proprietary algorithms. Speed of innovation outpacing replication."
    },
    {
      icon: <Target className="w-8 h-8 text-pink-400" />,
      title: "Ecosystem Moat",
      description: "Integrated platform creating switching costs. API adoption, marketplace effects, and community lock-in."
    },
    {
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      title: "Category Definition",
      description: "Creating new market category where XEUR.AI defines the rules rather than competing in existing markets."
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-bright_magenta via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Revolutionary Business Model
              </span>
            </h1>
            <p className="text-xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Multiple revenue streams powering the future of AI-driven game creation. From SaaS subscriptions to Web3 tokenomics - 
              a comprehensive ecosystem designed for exponential growth and market domination.
            </p>
          </div>
        </div>
      </div>

      {/* Market Statistics */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Market <span className="text-bright_magenta">Opportunity</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {marketStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-6 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 text-center"
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
                🔥 The Extinction Event Metrics
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
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Complete Revenue <span className="text-bright_magenta">Ecosystem</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businessModels.map((model, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-6">
                  <div className={`bg-gradient-to-r ${model.gradient} rounded-lg p-3 mr-4`}>
                    {model.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-bright_magenta group-hover:text-white transition-colors">
                      {model.name}
                    </h3>
                    <div className="text-sm text-light_gray_text/70">
                      Projected: <span className="text-tech_green font-bold">{model.revenue}</span> ({model.period})
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
                
                <Link 
                  href={model.link}
                  className={`inline-block bg-gradient-to-r ${model.gradient} text-near_black font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300`}
                >
                  Explore {model.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Revenue Projection */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <TrendingUp className="inline-block w-10 h-10 text-tech_green mr-2" />
            Revenue Projection Model
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {revenueProjection.map((projection, index) => (
              <div 
                key={index}
                className="bg-tech_green/10 rounded-xl p-6 border border-tech_green/20 text-center hover:border-tech_green/50 transition-all duration-300"
              >
                <div className="text-lg font-semibold text-tech_green mb-2">{projection.year}</div>
                <div className="text-2xl font-bold text-white mb-2">{projection.revenue}</div>
                <div className="text-sm text-tech_green">{projection.growth}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Shield className="inline-block w-10 h-10 text-red-400 mr-2" />
            Defensive Moats & Advantages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitiveAdvantages.map((advantage, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-6 border border-light_purple/30 hover:border-red-400/50 transition-all duration-300 text-center"
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
              Investment Opportunity
            </h3>
            <p className="text-xl text-light_gray_text/80 mb-8 max-w-4xl mx-auto">
              Currently raising Series A to accelerate global expansion, enhance AI capabilities, and capture the $142B market opportunity. 
              Join leading VCs backing the democratization of game creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?service=investment" className="btn-primary">
                View Investment Deck
              </Link>
              <Link href="/contact?service=investor-relations" className="btn-secondary">
                Contact Investors
              </Link>
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
            Experience the future of game creation today. From individual creators to enterprise solutions, 
            XEUR.AI offers the complete ecosystem for AI-powered interactive content creation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup" className="btn-primary">
              Start Creating Now
            </Link>
            <Link href="/demo?service=enterprise" className="btn-secondary">
              Schedule Enterprise Demo
            </Link>
            <Link href="/contact?service=api" className="btn-secondary">
              Explore API Access
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BusinessModel;