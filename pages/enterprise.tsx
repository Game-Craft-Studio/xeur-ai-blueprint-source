import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Enterprise = () => {
  const enterpriseVision = [
    {
      title: "Brand Gamification (Roadmap)",
      description: "Transform marketing campaigns with AI-generated branded games for customer engagement.",
      features: [
        "Custom branded game environments",
        "Product showcase integrations",
        "Multi-platform deployment",
        "Analytics and engagement tracking"
      ],
      status: "Series A Development Priority"
    },
    {
      title: "Corporate Training (Vision)",
      description: "Revolutionize employee training with immersive, AI-generated educational experiences.",
      features: [
        "Immersive training simulations",
        "Skills assessment integration",
        "Compliance training modules",
        "Progress tracking dashboards"
      ],
      status: "Post-Series A Development"
    },
    {
      title: "White-Label Platform (Future)",
      description: "License XEUR.AI technology for agencies and consultants to offer game creation services.",
      features: [
        "Complete platform customization",
        "Client management systems",
        "Revenue sharing models",
        "Technical support packages"
      ],
      status: "Long-term Vision"
    }
  ];

  const industryOpportunities = [
    {
      icon: "🏦",
      title: "Financial Services",
      description: "Gamify financial literacy and customer education with interactive experiences.",
      potential: "Investment simulation games, financial planning tools"
    },
    {
      icon: "🎓",
      title: "Education",
      description: "Transform learning with AI-generated educational games and simulations.",
      potential: "Subject-specific learning tools, virtual experiences"
    },
    {
      icon: "🏪",
      title: "Retail & E-commerce",
      description: "Create interactive product experiences and gamified shopping journeys.",
      potential: "Virtual product showcases, loyalty program games"
    },
    {
      icon: "🚀",
      title: "Technology",
      description: "Gamify software training and developer education for better adoption.",
      potential: "API documentation games, feature tutorials"
    }
  ];

  return (
    <>
      <Head>
        <title>Enterprise Solutions - XEUR.AI Business Vision</title>
        <meta name="description" content="XEUR.AI enterprise solutions roadmap. Brand gamification, corporate training, and white-label platform development vision." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Enterprise Solutions
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Business Applications Roadmap • Series A Development Vision
                </p>
                
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
                  <p className="text-yellow-400 font-semibold text-sm">
                    🏢 ENTERPRISE ROADMAP: Business applications in Series A development pipeline. Alpha platform foundation proven.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Current Foundation */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Enterprise <span className="text-tech_green">Foundation</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Current Platform */}
                  <div className="p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-tech_green mb-6">✅ Current Alpha Platform</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">AI Game Creation</h4>
                        <p className="text-sm text-light_gray_text/70">Working platform for interactive content generation</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Unreal Engine Output</h4>
                        <p className="text-sm text-light_gray_text/70">Professional-grade game development foundation</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Partnership Infrastructure</h4>
                        <p className="text-sm text-light_gray_text/70">Microsoft, NVIDIA, Google enterprise validation</p>
                      </div>
                    </div>
                  </div>

                  {/* Enterprise Vision */}
                  <div className="p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-bright_magenta mb-6">🚀 Enterprise Development Roadmap</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-bright_magenta pl-4">
                        <h4 className="font-semibold">Business Applications</h4>
                        <p className="text-sm text-light_gray_text/70">Brand gamification and corporate training solutions</p>
                      </div>
                      
                      <div className="border-l-4 border-bright_magenta pl-4">
                        <h4 className="font-semibold">White-Label Platform</h4>
                        <p className="text-sm text-light_gray_text/70">Agency and consultant licensing opportunities</p>
                      </div>
                      
                      <div className="border-l-4 border-bright_magenta pl-4">
                        <h4 className="font-semibold">Enterprise Integration</h4>
                        <p className="text-sm text-light_gray_text/70">Custom deployment and API development</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Foundation */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Enterprise Partnership Foundation
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Microsoft */}
                  <div className="text-center p-8 bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">M</div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Microsoft for Startups</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Enterprise infrastructure and sales channel access for business application development.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Azure enterprise services + Microsoft 365 integration potential
                    </p>
                  </div>

                  {/* NVIDIA */}
                  <div className="text-center p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">N</div>
                    <h3 className="text-2xl font-bold text-tech_green mb-4">NVIDIA Inception</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Advanced AI capabilities for sophisticated enterprise training and simulation applications.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Enterprise AI solutions + high-performance computing access
                    </p>
                  </div>

                  {/* Google */}
                  <div className="text-center p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">G</div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-4">Google for Startups</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Global scaling expertise and enterprise cloud infrastructure for business applications.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Google Workspace integration + enterprise scaling capabilities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Enterprise Solutions Roadmap */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Enterprise Solutions Roadmap
                  </span>
                </h2>
                
                <div className="space-y-8">
                  {enterpriseVision.map((solution, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-b from-bright_magenta/10 to-transparent rounded-xl p-8 border border-bright_magenta/30"
                    >
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-bright_magenta">{solution.title}</h3>
                        <span className="text-sm bg-bright_magenta/20 px-3 py-1 rounded-full text-bright_magenta">
                          {solution.status}
                        </span>
                      </div>
                      
                      <p className="text-light_gray_text/80 mb-6">{solution.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {solution.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-tech_green rounded-full mr-2 shrink-0"></div>
                            <span className="text-light_gray_text/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Industry Opportunities */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Industry <span className="text-purple-400">Opportunities</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {industryOpportunities.map((industry, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-b from-purple-400/10 to-transparent rounded-xl p-6 border border-purple-400/30"
                    >
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{industry.icon}</div>
                        <h3 className="text-xl font-bold text-purple-400">{industry.title}</h3>
                      </div>
                      
                      <p className="text-light_gray_text/80 mb-4">{industry.description}</p>
                      <p className="text-sm text-light_gray_text/60 italic">
                        <strong>Potential Applications:</strong> {industry.potential}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Current Focus */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Series A Development Focus
                  </span>
                </h2>
                
                <div className="bg-gradient-to-r from-bright_magenta/20 to-tech_green/20 border border-bright_magenta/30 rounded-2xl p-8 mb-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Enterprise Platform: The Business Opportunity</h3>
                    <p className="text-xl text-light_gray_text/80 mb-6">
                      Alpha platform provides proven foundation for game creation. Series A development 
                      focuses on business application adaptations and enterprise features.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <h4 className="text-xl font-bold text-tech_green mb-2">Foundation</h4>
                        <p className="text-light_gray_text/80">Alpha Platform Proven</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-bright_magenta mb-2">Development</h4>
                        <p className="text-light_gray_text/80">Enterprise Applications</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-purple-400 mb-2">Market</h4>
                        <p className="text-light_gray_text/80">Business Transformation</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">Explore Enterprise Opportunities</h3>
                  <p className="text-light_gray_text/80 mb-8">
                    Interested in enterprise applications? Connect with our founders to discuss 
                    business use cases and development roadmap.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.youtube.com/watch?v=XtI4AndkV24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                    >
                      🎬 Watch Platform Foundation
                    </a>
                    
                    <a
                      href="mailto:rishav@cpgplay.com?subject=Enterprise Solutions Discussion"
                      className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      🏢 Discuss Enterprise Vision
                    </a>
                  </div>
                  
                  <p className="text-sm text-light_gray_text/60 mt-6">
                    Platform foundation proven • Enterprise roadmap planned • Partnership infrastructure ready
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Enterprise;