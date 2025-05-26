import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Check, Building, Users, Briefcase, BookOpen, Target, Shield, Zap, Award, TrendingUp } from "lucide-react";

const Enterprise = () => {
  const trustIndicators = [
    { icon: <Shield className="w-6 h-6" />, text: "SOC 2 Compliant" },
    { icon: <Building className="w-6 h-6" />, text: "Enterprise SLA" },
    { icon: <Award className="w-6 h-6" />, text: "Data Sovereignty" },
    { icon: <Zap className="w-6 h-6" />, text: "99.9% Uptime" }
  ];

  const enterpriseSolutions = [
    {
      icon: <Target className="w-12 h-12 text-bright_magenta" />,
      title: "Brand Gamification",
      description: "Transform marketing campaigns and customer engagement with branded interactive games. Create memorable experiences that drive conversion and build brand loyalty through gamified storytelling.",
      features: [
        "Custom branded game environments",
        "Product showcase integrations",
        "Customer journey gamification",
        "Multi-platform campaign deployment",
        "Advanced analytics and ROI tracking",
        "Social sharing and viral mechanics"
      ],
      ctaText: "Explore Brand Games",
      ctaLink: "/contact?service=brand-gamification"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-tech_green" />,
      title: "Learning & Training",
      description: "Revolutionize corporate training with immersive educational games. Increase engagement, retention, and skill development through interactive learning experiences tailored to your industry.",
      features: [
        "Immersive training simulations",
        "Skills assessment and certification",
        "Compliance training gamification",
        "Multi-language content support",
        "Progress tracking and reporting",
        "VR/AR integration capabilities"
      ],
      ctaText: "Transform Training",
      ctaLink: "/contact?service=corporate-training"
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-400" />,
      title: "White-Label Platform",
      description: "Launch your own AI game creation platform with XEUR.AI's technology. Perfect for agencies, consultants, and technology companies wanting to offer game creation services.",
      features: [
        "Complete platform customization",
        "Your branding and domain",
        "Client management dashboard",
        "Revenue sharing models",
        "API access and integrations",
        "Dedicated technical support"
      ],
      ctaText: "Launch Platform",
      ctaLink: "/contact?service=white-label"
    },
    {
      icon: <Briefcase className="w-12 h-12 text-purple-400" />,
      title: "Custom Development",
      description: "Bespoke AI game solutions built specifically for your unique requirements. Our team of experts will create custom models, integrations, and features tailored to your business needs.",
      features: [
        "Custom AI model training",
        "Specialized industry integrations",
        "On-premise deployment options",
        "Custom workflow development",
        "Legacy system integrations",
        "Dedicated development team"
      ],
      ctaText: "Discuss Custom Solution",
      ctaLink: "/contact?service=custom-development"
    }
  ];

  const industryVerticals = [
    {
      icon: "🏦",
      title: "Financial Services",
      description: "Gamify financial literacy, customer onboarding, and investment education with engaging interactive experiences.",
      examples: ["Investment simulation games", "Financial planning tools", "Risk assessment training"]
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description: "Create therapeutic games, medical training simulations, and patient education tools that improve outcomes.",
      examples: ["Medical procedure training", "Patient rehabilitation games", "Health awareness campaigns"]
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Transform curriculum delivery with interactive educational games that make learning engaging and effective.",
      examples: ["Subject-specific learning games", "Virtual field trips", "Assessment and testing tools"]
    },
    {
      icon: "🏪",
      title: "Retail & E-commerce",
      description: "Drive customer engagement and sales with interactive product experiences and gamified shopping.",
      examples: ["Virtual product showcases", "Loyalty program games", "Interactive catalogs"]
    },
    {
      icon: "🏗️",
      title: "Manufacturing",
      description: "Enhance worker training, safety protocols, and process optimization through immersive simulations.",
      examples: ["Safety training simulations", "Equipment operation training", "Quality control games"]
    },
    {
      icon: "🚀",
      title: "Technology",
      description: "Gamify software training, developer onboarding, and technical concept explanation for better adoption.",
      examples: ["API documentation games", "Developer challenges", "Product feature tutorials"]
    }
  ];

  const caseStudies = [
    {
      company: "Fortune 500 Financial Institution",
      challenge: "Low employee engagement in mandatory compliance training (12% completion rate)",
      solution: "Gamified compliance training with role-playing scenarios and achievement systems",
      results: "94% completion rate, 40% reduction in compliance violations, 78% employee satisfaction improvement"
    },
    {
      company: "Global Healthcare Provider",
      challenge: "Complex medical procedure training taking 6+ months for new staff",
      solution: "VR-integrated surgical simulation games with progressive skill building",
      results: "60% reduction in training time, 35% improvement in procedure accuracy, 50% cost savings"
    },
    {
      company: "Leading E-commerce Platform",
      challenge: "Low customer engagement with new product launches",
      solution: "Interactive product exploration games with social sharing features",
      results: "300% increase in product interaction time, 25% boost in conversion rates, viral social reach"
    }
  ];

  const pricingTiers = [
    {
      name: "Business",
      price: "$2,999",
      period: "/month",
      description: "For growing businesses and departments",
      features: [
        "Up to 50 games per month",
        "Basic white-labeling",
        "Standard support",
        "Multi-platform deployment",
        "Basic analytics",
        "Team collaboration tools",
        "API access"
      ],
      ctaText: "Start Business Plan",
      ctaLink: "/signup?plan=business",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$9,999",
      period: "/month",
      description: "Recommended for established enterprises",
      features: [
        "Unlimited game creation",
        "Full white-labeling",
        "Priority support",
        "Custom integrations",
        "Advanced analytics",
        "Dedicated account manager",
        "SLA guarantees",
        "Training and onboarding"
      ],
      ctaText: "Go Professional",
      ctaLink: "/signup?plan=professional",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: " pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom deployment options",
        "On-premise installation",
        "Custom model training",
        "24/7 premium support",
        "Dedicated infrastructure",
        "Custom security compliance",
        "Professional services",
        "Success management"
      ],
      ctaText: "Contact Sales",
      ctaLink: "/contact?service=enterprise",
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
                <span className="text-bright_magenta">XEUR.AI</span>
                <span className="text-light_gray_text mx-4">×</span>
                <span className="text-yellow-400">ENTERPRISE</span>
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Enterprise Game <span className="text-bright_magenta">Solutions</span>
            </h2>
            <p className="text-xl text-light_gray_text/80 max-w-4xl mx-auto mb-8">
              Transform your business with AI-powered interactive content. From branded marketing games to employee 
              training simulations - enterprise-grade game creation that scales with your organization.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-2 text-tech_green font-semibold">
                  {indicator.icon}
                  <span>{indicator.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Complete <span className="text-bright_magenta">Enterprise Suite</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-8 border border-light_purple/30 hover:border-bright_magenta/50 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-medium_purple/50 rounded-lg p-3 mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-bright_magenta">{solution.title}</h3>
                </div>
                <p className="text-light_gray_text/80 mb-6">{solution.description}</p>
                <ul className="space-y-2 mb-8">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm">
                      <Check size={16} className="text-tech_green mr-2 shrink-0 mt-1" />
                      <span className="text-light_gray_text/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href={solution.ctaLink}
                  className="inline-block bg-bright_magenta text-light_gray_text font-semibold py-3 px-6 rounded-lg hover:bg-bright_magenta/90 transition-colors"
                >
                  {solution.ctaText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Verticals */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            <Building className="inline-block w-10 h-10 text-tech_green mr-2" />
            Industry Solutions
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Tailored game creation solutions for every industry vertical
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryVerticals.map((industry, index) => (
              <div 
                key={index}
                className="bg-tech_green/10 rounded-xl p-6 border border-tech_green/20 hover:border-tech_green/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold mb-3 text-tech_green">{industry.title}</h3>
                <p className="text-sm text-light_gray_text/70 mb-4">{industry.description}</p>
                <ul className="space-y-1">
                  {industry.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-xs text-light_gray_text/60">
                      • {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <TrendingUp className="inline-block w-10 h-10 text-purple-400 mr-2" />
            Success Stories
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="bg-medium_purple/30 rounded-xl p-6 border border-light_purple/30"
              >
                <h3 className="text-lg font-semibold mb-4 text-purple-400">{study.company}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Challenge:</h4>
                    <p className="text-sm text-light_gray_text/70">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-tech_green mb-2">Solution:</h4>
                    <p className="text-sm text-light_gray_text/70">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Results:</h4>
                    <p className="text-sm text-light_gray_text/70">{study.results}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <Briefcase className="inline-block w-10 h-10 text-yellow-400 mr-2" />
            Enterprise Pricing
          </h2>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            Scalable solutions designed for enterprise needs and budgets
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                  tier.highlighted 
                    ? 'bg-purple-gradient border-yellow-400 shadow-lg shadow-yellow-400/20' 
                    : 'bg-medium_purple/20 border-light_purple/30'
                }`}
              >
                {tier.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-tech_green text-near_black font-bold py-1 px-4 rounded-full text-sm">
                      RECOMMENDED
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-yellow-400 mb-1">
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
                      ? 'bg-yellow-400 text-near_black hover:bg-yellow-400/90' 
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

      {/* Partnership Opportunities */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-bright_magenta/20 to-cyan-400/20 rounded-xl p-8 border border-bright_magenta/30 text-center">
            <h3 className="text-2xl font-bold mb-4">
              <Users className="inline-block w-8 h-8 text-bright_magenta mr-2" />
              Partnership Opportunities
            </h3>
            <p className="text-light_gray_text/80 mb-6 max-w-3xl mx-auto">
              Become a XEUR.AI partner and offer AI game creation services to your clients. Revenue sharing, 
              technical support, and co-marketing opportunities available.
            </p>
            <Link 
              href="/contact?service=partnership" 
              className="bg-bright_magenta text-light_gray_text font-semibold py-3 px-8 rounded-lg hover:bg-bright_magenta/90 transition-colors inline-block"
            >
              Join Partner Program
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-bright_magenta/20 to-yellow-400/20">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your <span className="text-bright_magenta">Business?</span>
          </h2>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
            Join leading enterprises using XEUR.AI to create engaging interactive experiences. Schedule a demo to see 
            how AI game creation can revolutionize your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/demo?service=enterprise" className="btn-primary">
              Schedule Demo
            </Link>
            <Link href="/contact?service=enterprise-sales" className="btn-secondary">
              Contact Sales Team
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Enterprise;