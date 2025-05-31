import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const CompanyOverview = () => {
  return (
    <>
      <Head>
        <title>XEUR.AI Investment Opportunity - Series A | Company Overview</title>
        <meta name="description" content="Series A investment opportunity. Alpha platform validated by Microsoft, NVIDIA, Google. $184B gaming market, first-mover advantage." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Investment Opportunity
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8 max-w-3xl mx-auto">
                  Series A funding to accelerate AI-powered game development platform. 
                  Triple giant validation with working technology and first-mover advantage.
                </p>
              </div>
            </div>
          </section>

          {/* Investment Thesis */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Investment <span className="text-tech_green">Thesis</span>
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                  <div className="text-center p-6 bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-xl">
                    <div className="text-4xl font-bold text-blue-400 mb-2">$184B</div>
                    <div className="text-light_gray_text/70 text-sm">Gaming Industry<br/>(We're capturing creation layer)</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                    <div className="text-4xl font-bold text-tech_green mb-2">590M+</div>
                    <div className="text-light_gray_text/70 text-sm">Content Creators<br/>(Addressable market)</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                    <div className="text-4xl font-bold text-bright_magenta mb-2">18+</div>
                    <div className="text-light_gray_text/70 text-sm">Month Lead Time<br/>(First-mover advantage)</div>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl">
                    <div className="text-4xl font-bold text-purple-400 mb-2">$850K+</div>
                    <div className="text-light_gray_text/70 text-sm">Partnership Value<br/>(Giants betting on us)</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl text-light_gray_text/80 italic">
                    AI + Creator Economy convergence happens once. Platform plays are winner-take-all.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Validation */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Technology Validation
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Current Platform */}
                  <div className="p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-tech_green rounded-full mr-3 animate-pulse"></div>
                      <h3 className="text-2xl font-bold text-tech_green">Live Alpha Platform</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-light_gray_text/90">
                        <span className="text-tech_green mr-3">✅</span>
                        <span>Unreal Engine Integration (Proven)</span>
                      </li>
                      <li className="flex items-center text-light_gray_text/90">
                        <span className="text-tech_green mr-3">✅</span>
                        <span>OpenAI API Integration (Functional)</span>
                      </li>
                      <li className="flex items-center text-light_gray_text/90">
                        <span className="text-tech_green mr-3">✅</span>
                        <span>Web-Based Platform (Active)</span>
                      </li>
                    </ul>
                    
                    <a 
                      href="https://www.youtube.com/watch?v=XtI4AndkV24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-tech_green hover:text-cyan-400 transition-colors"
                    >
                      🎬 View Live Demo →
                    </a>
                  </div>

                  {/* Series A Pipeline */}
                  <div className="p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <div className="flex items-center mb-6">
                      <div className="w-4 h-4 bg-bright_magenta rounded-full mr-3"></div>
                      <h3 className="text-2xl font-bold text-bright_magenta">Series A Development Pipeline</h3>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center text-light_gray_text/90">
                        <span className="text-bright_magenta mr-3">🚀</span>
                        <span>Proprietary XEUR LLM (78K dataset)</span>
                      </li>
                      <li className="flex items-center text-light_gray_text/90">
                        <span className="text-bright_magenta mr-3">🚀</span>
                        <span>Specialized AI Models (8 domains)</span>
                      </li>
                      <li className="flex items-center text-light_gray_text/90">
                        <span className="text-bright_magenta mr-3">🚀</span>
                        <span>Multi-Platform Export</span>
                      </li>
                    </ul>
                    
                    <span className="text-bright_magenta/80">Post-funding development roadmap</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Validation */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Institutional Validation
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Microsoft */}
                  <div className="text-center p-8 bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">M</div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Microsoft for Startups</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      <strong>Signal:</strong> Microsoft bet on our infrastructure before we had customers.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Azure infrastructure, enterprise channels, go-to-market acceleration.
                    </p>
                  </div>

                  {/* NVIDIA */}
                  <div className="text-center p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">N</div>
                    <h3 className="text-2xl font-bold text-tech_green mb-4">NVIDIA Inception</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      <strong>Signal:</strong> NVIDIA sees us as the future of AI creation.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      DGX computing access, AI development acceleration, Capital Connect.
                    </p>
                  </div>

                  {/* Google */}
                  <div className="text-center p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">G</div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-4">Google for Startups</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      <strong>Signal:</strong> Google's algorithm selected us from thousands.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Accelerator graduate, cloud credits, scaling expertise.
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <p className="text-xl text-light_gray_text/80 italic">
                    When three tech giants independently validate your startup, that's inevitability.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Investment Details */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Investment Opportunity
                  </span>
                </h2>
                
                <div className="bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 border border-bright_magenta/30 rounded-2xl p-8 mb-8">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <h3 className="text-xl font-bold text-bright_magenta mb-2">Series A Round</h3>
                      <p className="text-light_gray_text/80">Target: $2-5M</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-tech_green mb-2">Use of Funds</h3>
                      <p className="text-light_gray_text/80">Proprietary AI + Team</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 mb-2">Timeline</h3>
                      <p className="text-light_gray_text/80">Active discussions</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">Direct Founder Access</h3>
                  <p className="text-light_gray_text/80 mb-8">
                    No gatekeepers, no sales process. Direct access to decision-makers.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:harshit@cpgplay.com?cc=rishav@cpgplay.com&subject=Investment Inquiry - XEUR.AI Series A"
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
                      🎬 View Platform Demo
                    </a>
                  </div>
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

export default CompanyOverview;