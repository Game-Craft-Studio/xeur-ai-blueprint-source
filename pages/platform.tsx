import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PlatformStatus from '@/components/PlatformStatus';
import Head from 'next/head';

const Platform = () => {
  return (
    <>
      <Head>
        <title>XEUR.AI Platform - Alpha Development & Roadmap</title>
        <meta name="description" content="XEUR.AI platform capabilities: Live alpha with Unreal Engine + OpenAI integration. Series A roadmap for proprietary AI development." />
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
                    Platform Overview
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  AI-powered game development with proven technology foundation 
                  and clear roadmap for Series A acceleration.
                </p>
              </div>
            </div>
          </section>

          {/* Platform Status Component */}
          <PlatformStatus />

          {/* How It Works */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  How <span className="text-tech_green">It Works</span>
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-bright_magenta to-purple-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">1</div>
                    <h3 className="text-xl font-bold text-bright_magenta mb-3">Describe Your Game</h3>
                    <p className="text-light_gray_text/80">Natural language description of your game concept, mechanics, and vision.</p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">2</div>
                    <h3 className="text-xl font-bold text-purple-400 mb-3">AI Processing</h3>
                    <p className="text-light_gray_text/80">Advanced AI analyzes your description and generates game architecture, assets, and logic.</p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-tech_green flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">3</div>
                    <h3 className="text-xl font-bold text-blue-400 mb-3">Unreal Engine Build</h3>
                    <p className="text-light_gray_text/80">Professional game engine creates playable, production-ready game output.</p>
                  </div>
                  
                  <div className="text-center p-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-tech_green to-cyan-400 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">4</div>
                    <h3 className="text-xl font-bold text-tech_green mb-3">Play & Deploy</h3>
                    <p className="text-light_gray_text/80">Instant playtesting with iterative refinement and multi-platform deployment options.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Architecture */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Technical Architecture
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* AI Layer */}
                  <div className="p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-bright_magenta mb-6">AI Processing Layer</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-bright_magenta pl-4">
                        <h4 className="font-semibold">Current: OpenAI Integration</h4>
                        <p className="text-sm text-light_gray_text/70">Advanced language models for content generation</p>
                      </div>
                      
                      <div className="border-l-4 border-bright_magenta/50 pl-4">
                        <h4 className="font-semibold">Roadmap: Proprietary XEUR LLM</h4>
                        <p className="text-sm text-light_gray_text/70">Custom training on 78K+ game dataset</p>
                      </div>
                      
                      <div className="border-l-4 border-bright_magenta/50 pl-4">
                        <h4 className="font-semibold">Roadmap: Specialized Models</h4>
                        <p className="text-sm text-light_gray_text/70">Domain-specific AI for different game genres</p>
                      </div>
                    </div>
                  </div>

                  {/* Engine Layer */}
                  <div className="p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-tech_green mb-6">Game Engine Layer</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Unreal Engine 5</h4>
                        <p className="text-sm text-light_gray_text/70">Industry-standard professional game engine</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Real-Time Compilation</h4>
                        <p className="text-sm text-light_gray_text/70">Instant game building and testing</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Asset Pipeline</h4>
                        <p className="text-sm text-light_gray_text/70">Automated asset generation and integration</p>
                      </div>
                    </div>
                  </div>

                  {/* Platform Layer */}
                  <div className="p-8 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-purple-400 mb-6">Platform Layer</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-semibold">Web-Based Interface</h4>
                        <p className="text-sm text-light_gray_text/70">Cloud-native development environment</p>
                      </div>
                      
                      <div className="border-l-4 border-purple-400/50 pl-4">
                        <h4 className="font-semibold">Roadmap: Mobile Platform</h4>
                        <p className="text-sm text-light_gray_text/70">iOS and Android application support</p>
                      </div>
                      
                      <div className="border-l-4 border-purple-400/50 pl-4">
                        <h4 className="font-semibold">Roadmap: Enterprise API</h4>
                        <p className="text-sm text-light_gray_text/70">B2B integration and white-label solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Demo CTA */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Experience the <span className="text-tech_green">Platform</span>?
                </h2>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  See our alpha platform in action or request direct access for hands-on testing.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=XtI4AndkV24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                  >
                    🎬 Watch Live Demo
                  </a>
                  
                  <a
                    href="mailto:harshit@cpgplay.com?subject=Alpha Platform Access Request"
                    className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 Request Alpha Access
                  </a>
                </div>
                
                <p className="text-sm text-light_gray_text/60 mt-6">
                  Direct founder access • No sales process • Real platform testing
                </p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Platform;