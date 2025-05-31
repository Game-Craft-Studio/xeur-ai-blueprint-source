import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const XeurAPI = () => {
  return (
    <>
      <Head>
        <title>XEUR API - Development Roadmap | AI Game Development Platform</title>
        <meta name="description" content="XEUR API development roadmap for enterprise integration and developer platform. Series A acceleration target with Microsoft, NVIDIA, Google validation." />
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
                    XEUR API
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Enterprise API Development Roadmap • Series A Acceleration Priority
                </p>
                
                <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border border-yellow-400/30 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
                  <p className="text-yellow-400 font-semibold text-sm">
                    🚀 DEVELOPMENT ROADMAP: API platform in Series A development pipeline. Alpha platform foundation proven.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Foundation */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Technology <span className="text-tech_green">Foundation</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Current Capabilities */}
                  <div className="p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-tech_green mb-6">✅ Current Capabilities (Alpha Platform)</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Unreal Engine 5 Integration</h4>
                        <p className="text-sm text-light_gray_text/70">Production-ready game engine foundation</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">OpenAI API Integration</h4>
                        <p className="text-sm text-light_gray_text/70">Advanced AI-powered content generation</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Web-Based Platform</h4>
                        <p className="text-sm text-light_gray_text/70">Cloud-native development environment</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Real-Time Game Generation</h4>
                        <p className="text-sm text-light_gray_text/70">Working alpha demonstration available</p>
                      </div>
                    </div>
                  </div>

                  {/* Development Roadmap */}
                  <div className="p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-bright_magenta mb-6">🚀 Development Roadmap (Series A Acceleration)</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-bright_magenta pl-4">
                        <h4 className="font-semibold">XEUR API Platform</h4>
                        <p className="text-sm text-light_gray_text/70">Enterprise integration and developer platform</p>
                      </div>
                      
                      <div className="border-l-4 border-bright_magenta pl-4">
                        <h4 className="font-semibold">Proprietary XEUR LLM</h4>
                        <p className="text-sm text-light_gray_text/70">Custom training on 78K+ game dataset</p>
                      </div>
                      
                      <div className="border-l-4 border-bright_magenta pl-4">
                        <h4 className="font-semibold">White-Label Solutions</h4>
                        <p className="text-sm text-light_gray_text/70">Enterprise customization and branding</p>
                      </div>
                      
                      <div className="border-l-4 border-bright_magenta pl-4">
                        <h4 className="font-semibold">Multi-Platform Export</h4>
                        <p className="text-sm text-light_gray_text/70">Mobile, console, and VR deployment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partnership Validation */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Triple Tech Giant Validation
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Microsoft */}
                  <div className="text-center p-8 bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">M</div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Microsoft for Startups</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      <strong>The Signal:</strong> Microsoft bet on our infrastructure before we had customers.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      <strong>The Leverage:</strong> Azure cloud access + enterprise sales channels
                    </p>
                  </div>

                  {/* NVIDIA */}
                  <div className="text-center p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">N</div>
                    <h3 className="text-2xl font-bold text-tech_green mb-4">NVIDIA Inception</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      <strong>The Signal:</strong> NVIDIA sees us as future of AI-powered creation.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      <strong>The Leverage:</strong> DGX computing access + AI development acceleration
                    </p>
                  </div>

                  {/* Google */}
                  <div className="text-center p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">G</div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-4">Google for Startups</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      <strong>The Signal:</strong> Graduated from Google's exclusive accelerator program.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      <strong>The Leverage:</strong> Cloud infrastructure + proven go-to-market playbook
                    </p>
                  </div>
                </div>
                
                <div className="text-center mt-12">
                  <p className="text-xl text-light_gray_text/80 italic">
                    When three tech giants independently validate your startup, that's not partnership - that's prophecy.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* API Development Timeline */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    API Development Timeline
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                    <h3 className="text-xl font-bold text-tech_green mb-4">Q2-Q3 2025</h3>
                    <p className="text-light_gray_text/80 mb-4"><strong>Alpha API</strong></p>
                    <ul className="text-sm text-light_gray_text/70 space-y-2">
                      <li>• Basic game generation endpoints</li>
                      <li>• Developer documentation</li>
                      <li>• Authentication system</li>
                      <li>• Rate limiting infrastructure</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                    <h3 className="text-xl font-bold text-bright_magenta mb-4">Q4 2025 - Q1 2026</h3>
                    <p className="text-light_gray_text/80 mb-4"><strong>Production API</strong></p>
                    <ul className="text-sm text-light_gray_text/70 space-y-2">
                      <li>• Full feature parity</li>
                      <li>• Enterprise SLA guarantees</li>
                      <li>• White-label customization</li>
                      <li>• Advanced analytics dashboard</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl">
                    <h3 className="text-xl font-bold text-purple-400 mb-4">2026+</h3>
                    <p className="text-light_gray_text/80 mb-4"><strong>Ecosystem Platform</strong></p>
                    <ul className="text-sm text-light_gray_text/70 space-y-2">
                      <li>• Marketplace integration</li>
                      <li>• Third-party plugins</li>
                      <li>• Advanced AI models</li>
                      <li>• Global scaling infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Investment Opportunity */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Series A Development Priority
                  </span>
                </h2>
                
                <div className="bg-gradient-to-r from-bright_magenta/20 to-tech_green/20 border border-bright_magenta/30 rounded-2xl p-8 mb-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Enterprise API: The Platform Play</h3>
                    <p className="text-xl text-light_gray_text/80 mb-6">
                      Alpha platform validation + Series A acceleration = Enterprise API domination. 
                      First-mover advantage with proven technology foundation.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <h4 className="text-xl font-bold text-bright_magenta mb-2">$28M+</h4>
                        <p className="text-light_gray_text/80">Year 3 API Revenue Target</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-tech_green mb-2">18+ Months</h4>
                        <p className="text-light_gray_text/80">First-Mover Advantage</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-purple-400 mb-2">Platform</h4>
                        <p className="text-light_gray_text/80">Winner-Take-All Market</p>
                      </div>
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
                      href="https://www.youtube.com/watch?v=XtI4AndkV24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                    >
                      🎬 Watch Platform Demo
                    </a>
                    
                    <a
                      href="mailto:harshit@cpgplay.com?cc=rishav@cpgplay.com&subject=Enterprise API Development Discussion"
                      className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      💼 Discuss Enterprise API
                    </a>
                  </div>
                  
                  <p className="text-sm text-light_gray_text/60 mt-6">
                    Alpha platform proven • Series A acceleration ready • First-mover advantage
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

export default XeurAPI;