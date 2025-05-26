import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, Coins, Shield, Zap, Users, Gamepad2, Star, Trophy, Gem } from "lucide-react";

const XeurConnect = () => {
  const blockchains = [
    { name: "Ethereum", icon: "⟠", desc: "Layer 1 & L2 scaling solutions" },
    { name: "Polygon", icon: "⬣", desc: "Low-cost, fast transactions" },
    { name: "Solana", icon: "◈", desc: "High-throughput gaming" },
    { name: "BSC", icon: "◉", desc: "Binance Smart Chain integration" },
    { name: "Avalanche", icon: "⟡", desc: "Subnet deployment ready" },
    { name: "Arbitrum", icon: "◊", desc: "Optimized Layer 2 scaling" }
  ];

  const web3Features = [
    {
      icon: <Gamepad2 className="w-10 h-10 text-purple-400" />,
      title: "NFT Game Generation",
      description: "Create complete blockchain games with integrated NFT mechanics from simple text prompts.",
      features: [
        "Automated smart contract generation",
        "In-game asset tokenization", 
        "Play-to-earn mechanics",
        "Cross-chain NFT compatibility"
      ]
    },
    {
      icon: <Star className="w-10 h-10 text-yellow-400" />,
      title: "Integrated Marketplace",
      description: "Built-in NFT marketplace with automated trading, royalties, and cross-game asset utility.",
      features: [
        "Automated royalty distribution",
        "Cross-game asset interoperability",
        "Decentralized trading protocols",
        "Creator revenue sharing"
      ]
    },
    {
      icon: <Zap className="w-10 h-10 text-cyan-400" />,
      title: "Multi-Chain Deployment",
      description: "Deploy your games simultaneously across multiple blockchains with optimized performance.",
      features: [
        "One-click multi-chain deployment",
        "Gas optimization algorithms",
        "Cross-chain bridge integration", 
        "Network-specific optimizations"
      ]
    },
    {
      icon: <Shield className="w-10 h-10 text-tech_green" />,
      title: "Wallet Integration",
      description: "Seamless wallet connectivity with support for all major Web3 wallets and authentication.",
      features: [
        "MetaMask & WalletConnect support",
        "Social login integration",
        "Gasless transaction options",
        "Mobile wallet optimization"
      ]
    },
    {
      icon: <Gem className="w-10 h-10 text-pink-400" />,
      title: "Advanced Tokenomics",
      description: "Sophisticated token economics with staking, governance, and utility mechanisms.",
      features: [
        "Custom token creation",
        "Staking and yield farming",
        "DAO governance integration",
        "Dynamic pricing algorithms"
      ]
    },
    {
      icon: <Users className="w-10 h-10 text-bright_magenta" />,
      title: "Analytics & Insights",
      description: "Comprehensive blockchain analytics with player behavior and economic performance tracking.",
      features: [
        "On-chain analytics dashboard",
        "Player engagement metrics",
        "Economic performance tracking",
        "Predictive modeling"
      ]
    }
  ];

  const nftFeatures = [
    {
      icon: "🖼️",
      title: "Asset Tokenization",
      description: "Automatically convert game assets (characters, items, skins) into unique NFTs with metadata and provenance."
    },
    {
      icon: "🔄", 
      title: "Cross-Game Utility",
      description: "Enable NFTs to work across multiple games in your ecosystem, increasing value and player engagement."
    },
    {
      icon: "💰",
      title: "Dynamic Pricing",
      description: "AI-powered pricing algorithms that adjust NFT values based on rarity, demand, and in-game utility."
    },
    {
      icon: "🏆",
      title: "Achievement NFTs", 
      description: "Automatically mint achievement and milestone NFTs as players progress, creating lasting value."
    }
  ];

  const tokenomicsModels = [
    {
      icon: "🎯",
      title: "Play-to-Earn",
      description: "Players earn tokens through gameplay, creating sustainable gaming economies with real-world value."
    },
    {
      icon: "🏦",
      title: "Stake-to-Play",
      description: "Players stake tokens to access premium content, creating token utility and reducing sell pressure."
    },
    {
      icon: "🗳️",
      title: "Governance Gaming",
      description: "Token holders vote on game development decisions, creating community-driven gaming experiences."
    },
    {
      icon: "🔄",
      title: "Hybrid Models",
      description: "Combine multiple tokenomics approaches for sophisticated gaming economies tailored to your audience."
    }
  ];

  const pricingPlans = [
    {
      name: "Blockchain Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for first Web3 game projects",
      features: [
        "Single blockchain deployment",
        "Basic NFT integration",
        "Up to 1,000 NFTs",
        "Standard smart contracts",
        "Basic wallet integration",
        "Community support"
      ],
      ctaText: "Start Web3 Journey",
      ctaLink: "/signup?plan=web3-starter",
      highlighted: false
    },
    {
      name: "Multi-Chain Pro",
      price: "$799",
      period: "/month", 
      description: "Most popular for serious Web3 developers",
      features: [
        "Multi-blockchain deployment",
        "Advanced NFT marketplace",
        "Unlimited NFT creation",
        "Custom tokenomics",
        "Cross-chain bridges",
        "Priority support",
        "Analytics dashboard",
        "White-label options"
      ],
      ctaText: "Go Multi-Chain",
      ctaLink: "/signup?plan=web3-pro",
      highlighted: true
    },
    {
      name: "Enterprise Web3", 
      price: "Custom",
      period: " pricing",
      description: "Tailored blockchain solutions for enterprises",
      features: [
        "Custom blockchain solutions",
        "Dedicated infrastructure",
        "Custom smart contracts",
        "Advanced security audits",
        "Regulatory compliance",
        "24/7 premium support",
        "Custom integrations",
        "Revenue sharing models"
      ],
      ctaText: "Contact Web3 Team",
      ctaLink: "/contact?service=web3-enterprise",
      highlighted: false
    }
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
                <span className="text-purple-400">XEUR.AI</span>
                <span className="text-light_gray_text mx-4">×</span>
                <span className="text-yellow-400">CONNECT</span>
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Web3 Gaming Revolution
              </span>
            </h2>
            <p className="text-xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Bridge traditional gaming with blockchain technology. Create, deploy, and monetize NFT-enabled games 
              across multiple blockchains with seamless integration and powerful tokenomics.
            </p>
          </div>
        </div>
      </div>

      {/* Blockchain Showcase */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Multi-Chain <span className="text-bright_magenta">Deployment</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {blockchains.map((blockchain, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-6 border border-light_purple/30 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {blockchain.icon}
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {blockchain.name}
                </h3>
                <p className="text-sm text-light_gray_text/70">{blockchain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Web3 Features */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Complete <span className="text-bright_magenta">Web3 Gaming Suite</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {web3Features.map((feature, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-medium_purple/50 rounded-lg p-3 mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-purple-400">{feature.title}</h3>
                </div>
                <p className="text-light_gray_text/80 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <Coins size={16} className="text-yellow-400 mr-2 shrink-0 mt-1" />
                      <span className="text-light_gray_text/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NFT Marketplace */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Integrated NFT Ecosystem
            </span>
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Transform every game asset into tradeable NFTs with our comprehensive marketplace infrastructure
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nftFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-pink-400/10 rounded-xl p-6 border border-pink-400/20 hover:border-pink-400/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-pink-400">{feature.title}</h3>
                <p className="text-sm text-light_gray_text/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tokenomics Models */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <Trophy className="inline-block w-10 h-10 text-tech_green mr-2" />
            Flexible Tokenomics Models
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tokenomicsModels.map((model, index) => (
              <div 
                key={index}
                className="bg-tech_green/10 rounded-xl p-6 border border-tech_green/20 hover:border-tech_green/50 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{model.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-tech_green">{model.title}</h3>
                <p className="text-sm text-light_gray_text/70">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Gem className="inline-block w-10 h-10 text-purple-400 mr-2" />
            Web3 Pricing Models
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Transparent pricing for blockchain gaming with no hidden fees
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.highlighted 
                    ? 'bg-purple-gradient border-purple-400 shadow-lg shadow-purple-400/20' 
                    : 'bg-medium_purple/20 border-light_purple/30'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-tech_green text-near_black font-bold py-1 px-4 rounded-full text-sm">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-purple-400 mb-1">
                    {plan.price}<span className="text-lg text-light_gray_text/70">{plan.period}</span>
                  </div>
                  <p className="text-light_gray_text/70">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check size={18} className="text-tech_green mr-3 shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={plan.ctaLink}
                  className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-purple-400 text-light_gray_text hover:bg-purple-400/90' 
                      : 'bg-medium_purple text-light_gray_text hover:bg-medium_purple/80'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon - XEUR Token */}
      <div className="py-16">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl p-8 border border-purple-400/30 text-center">
            <h3 className="text-2xl font-bold mb-4">
              <Coins className="inline-block w-8 h-8 text-purple-400 mr-2" />
              Coming Soon: XEUR Token
            </h3>
            <p className="text-light_gray_text/80 mb-6 max-w-2xl mx-auto">
              Native platform token for governance, staking, and ecosystem rewards. Early adopters get 
              preferential access and bonus allocations.
            </p>
            <Link 
              href="/signup?waitlist=xeur-token" 
              className="bg-purple-400 text-light_gray_text font-semibold py-3 px-8 rounded-lg hover:bg-purple-400/90 transition-colors inline-block"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-purple-400/20 to-yellow-400/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for <span className="text-bright_magenta">Web3 Gaming?</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Join the next evolution of gaming with blockchain integration, NFT economies, and decentralized ownership. 
            Create games that players truly own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?plan=web3" className="btn-primary">
              Launch Web3 Game
            </Link>
            <Link href="/demo?service=web3" className="btn-secondary">
              View Web3 Demo
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default XeurConnect;