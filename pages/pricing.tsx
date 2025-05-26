import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, Zap, Users, Globe, Rocket } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const pricingPlans = [
    {
      name: "Creator",
      icon: <Zap className="w-8 h-8 text-tech_green" />,
      price: {
        monthly: "$0",
        annually: "$0"
      },
      description: "Perfect for aspiring creators and hobbyists ready to bring their first game ideas to life",
      features: [
        { name: "3 game generations per month", included: true },
        { name: "Basic AI models (Eureka & Galileo)", included: true },
        { name: "Web deployment only", included: true },
        { name: "Standard asset library", included: true },
        { name: "Community support", included: true },
        { name: "XEUR.AI watermark", included: true },
        { name: "Basic analytics dashboard", included: true },
        { name: "Multi-platform export", included: false },
        { name: "Advanced AI models", included: false }
      ],
      ctaText: "Start Creating Free",
      ctaLink: "/signup?plan=creator",
      isHighlighted: false,
      popular: false
    },
    {
      name: "Pro",
      icon: <Rocket className="w-8 h-8 text-bright_magenta" />,
      price: {
        monthly: "$99",
        annually: "$79"
      },
      description: "Unleash full creative potential with all AI models and multi-platform deployment",
      features: [
        { name: "Unlimited game generations", included: true },
        { name: "All 8 specialized AI models", included: true },
        { name: "Multi-platform export (PC, iOS, Android, Web)", included: true },
        { name: "Premium asset library access", included: true },
        { name: "No watermarks", included: true },
        { name: "Advanced customization tools", included: true },
        { name: "Priority support", included: true },
        { name: "Revenue sharing: Keep 85%", included: true },
        { name: "Integrated monetization tools", included: true }
      ],
      ctaText: "Upgrade to Pro",
      ctaLink: "/signup?plan=pro",
      isHighlighted: true,
      popular: true
    },
    {
      name: "Studio",
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      price: {
        monthly: "$299",
        annually: "$249"
      },
      description: "Professional game development with Web3 capabilities and advanced features",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "XEUR Connect (Web3/NFT deployment)", included: true },
        { name: "White-label solutions", included: true },
        { name: "Advanced physics simulation", included: true },
        { name: "Custom asset integration", included: true },
        { name: "Team collaboration tools", included: true },
        { name: "API access (1,000 calls/month)", included: true },
        { name: "Revenue sharing: Keep 90%", included: true },
        { name: "Dedicated account manager", included: true }
      ],
      ctaText: "Go Studio",
      ctaLink: "/signup?plan=studio",
      isHighlighted: false,
      popular: false
    }
  ];

  const businessModels = [
    {
      name: "XEUR Xport",
      icon: <Globe className="w-6 h-6" />,
      description: "Multi-platform deployment services",
      link: "/xeur-xport",
      features: ["Cross-platform compilation", "Automated store submission", "Performance optimization"]
    },
    {
      name: "XEUR API",
      icon: <Zap className="w-6 h-6" />,
      description: "Developer platform & integrations",
      link: "/xeur-api", 
      features: ["RESTful API access", "Custom integrations", "White-label solutions"]
    },
    {
      name: "XEUR Connect",
      icon: <Users className="w-6 h-6" />,
      description: "Web3 gaming & NFT platform",
      link: "/xeur-connect",
      features: ["Blockchain deployment", "NFT marketplace", "Multi-chain support"]
    },
    {
      name: "Enterprise",
      icon: <Rocket className="w-6 h-6" />,
      description: "Custom B2B solutions",
      link: "/enterprise",
      features: ["Brand gamification", "Corporate training", "Custom development"]
    }
  ];
  
  const faqs = [
    {
      question: "How does the 1-hour game creation work?",
      answer: "Our proprietary XEUR LLM, trained on 78,000 games, powers 8 specialized AI models that handle everything from ideation to asset generation. Simply describe your game in natural language, and our AI creates complete games with 3D assets, logic, and multi-platform deployment code."
    },
    {
      question: "What platforms can I deploy to?",
      answer: "XEUR Xport supports PC, iOS, Android, Web, and Web3 blockchain platforms. Pro and Studio plans include multi-platform export, while Creator plan is limited to web deployment."
    },
    {
      question: "Can I monetize my games?",
      answer: "Absolutely! Pro and Studio plans include integrated monetization tools, ad network integration, and IAP capabilities. You keep 85-90% of revenue depending on your plan."
    },
    {
      question: "What's included in XEUR Connect?",
      answer: "XEUR Connect (Studio+ plans) enables Web3 game deployment with NFT minting, blockchain integration, and decentralized gaming features. Perfect for play-to-earn and NFT-based games."
    },
    {
      question: "How does the AI ensure game quality?",
      answer: "Our specialized models (Newton & Faraday for physics, Curie & Albert for narrative, Hawking for world generation, etc.) work together with continuous validation and our training on 78,000 successful games ensures high-quality outputs."
    }
  ];

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
            Revolutionary <span className="text-bright_magenta">Pricing</span>
          </h1>
          <p className="text-xl text-center text-light_gray_text/80 mb-8 max-w-4xl mx-auto">
            From idea to complete game in ~1 hour. Choose the plan that accelerates your creative journey 
            from concept to multi-platform reality.
          </p>
          
          {/* Extinction Event Promise */}
          <div className="bg-gradient-to-r from-tech_green/20 to-bright_magenta/20 rounded-xl p-6 mb-12 border border-tech_green/30">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-tech_green mb-4">🚀 The Extinction Event Promise</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-bright_magenta font-bold">99% time reduction</span>
                  <p className="text-light_gray_text/70">(1 year → 1 hour)</p>
                </div>
                <div>
                  <span className="text-bright_magenta font-bold">99% cost reduction</span>
                  <p className="text-light_gray_text/70">($300K → $300)</p>
                </div>
                <div>
                  <span className="text-bright_magenta font-bold">80%+ completion rate</span>
                  <p className="text-light_gray_text/70">vs industry's 6%</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center mb-12 space-x-4">
            <span className={`text-lg ${!isAnnual ? 'text-bright_magenta font-semibold' : 'text-light_gray_text/70'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-tech_green"
            />
            <span className={`text-lg ${isAnnual ? 'text-bright_magenta font-semibold' : 'text-light_gray_text/70'}`}>
              Annual <span className="text-tech_green">(Save up to 20%)</span>
            </span>
          </div>
          
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-xl border p-8 relative transition-all duration-300 hover:scale-105 ${
                  plan.isHighlighted 
                    ? 'bg-purple-gradient border-bright_magenta shadow-lg shadow-bright_magenta/20 scale-105' 
                    : 'bg-medium_purple/20 border-light_purple/30 hover:border-light_purple/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-tech_green text-near_black font-bold py-2 px-6 rounded-full text-sm">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">{plan.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-bright_magenta mb-2">
                    {isAnnual ? plan.price.annually : plan.price.monthly}
                    {plan.name !== "Creator" && (
                      <span className="text-lg text-light_gray_text/70 font-normal">
                        {isAnnual ? "/mo (billed annually)" : "/month"}
                      </span>
                    )}
                  </div>
                  <p className="text-light_gray_text/70 text-sm leading-relaxed">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check size={18} className="text-tech_green mr-3 shrink-0 mt-1" />
                      ) : (
                        <div className="w-[18px] h-[18px] bg-light_purple/30 rounded-full mr-3 shrink-0 mt-1" />
                      )}
                      <span className={`text-sm ${feature.included ? "" : "text-light_gray_text/50"}`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <Link 
                    href={plan.ctaLink} 
                    className={`inline-block w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.isHighlighted 
                        ? 'bg-bright_magenta text-light_gray_text hover:bg-bright_magenta/90 shadow-md' 
                        : 'bg-medium_purple text-light_gray_text hover:bg-medium_purple/80'
                    }`}
                  >
                    {plan.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Business Models Section */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Complete <span className="text-bright_magenta">Business Ecosystem</span>
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Beyond subscriptions - discover our full suite of business models designed for every use case
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessModels.map((model, index) => (
              <Link 
                key={index}
                href={model.link}
                className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-bright_magenta/20 rounded-lg p-2 mr-3">
                    {model.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-bright_magenta transition-colors">
                    {model.name}
                  </h3>
                </div>
                <p className="text-light_gray_text/70 mb-4">{model.description}</p>
                <ul className="space-y-1">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-light_gray_text/60 flex items-center">
                      <div className="w-1 h-1 bg-tech_green rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enterprise Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-medium_purple/30 to-deep_purple/30 rounded-xl p-8 border border-light_purple/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              <span className="text-bright_magenta">Enterprise Solutions</span>
            </h2>
            <p className="text-center text-xl mb-8 text-light_gray_text/80">
              Custom AI game creation solutions for brands, educators, and large organizations
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="bg-bright_magenta/20 rounded-lg p-4 mb-3 inline-block">
                  <Zap className="w-8 h-8 text-bright_magenta" />
                </div>
                <h4 className="font-semibold mb-2">Brand Gamification</h4>
                <p className="text-sm text-light_gray_text/70">Transform marketing campaigns with branded games</p>
              </div>
              <div className="text-center">
                <div className="bg-tech_green/20 rounded-lg p-4 mb-3 inline-block">
                  <Users className="w-8 h-8 text-tech_green" />
                </div>
                <h4 className="font-semibold mb-2">Educational Licensing</h4>
                <p className="text-sm text-light_gray_text/70">Institutional licenses for schools and universities</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-400/20 rounded-lg p-4 mb-3 inline-block">
                  <Globe className="w-8 h-8 text-cyan-400" />
                </div>
                <h4 className="font-semibold mb-2">White-label Platform</h4>
                <p className="text-sm text-light_gray_text/70">Launch your own AI game creation platform</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-400/20 rounded-lg p-4 mb-3 inline-block">
                  <Rocket className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="font-semibold mb-2">Custom Development</h4>
                <p className="text-sm text-light_gray_text/70">Bespoke AI solutions for unique requirements</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link href="/enterprise" className="btn-primary inline-block">
                Explore Enterprise Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-medium_purple/20 rounded-lg p-6 border border-light_purple/30">
                <h3 className="text-xl font-semibold mb-3 text-bright_magenta">{faq.question}</h3>
                <p className="text-light_gray_text/80 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl mb-6">Ready to revolutionize game creation?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup" className="btn-primary">
                Start Your Free Journey
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Pricing;