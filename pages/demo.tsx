import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Demo = () => {
  return (
    <>
      <Head>
        <title>XEUR.AI Platform Demo - Live Alpha Demonstration</title>
        <meta name="description" content="Watch XEUR.AI alpha platform in action. Live demonstration of AI-powered game development with Unreal Engine integration." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">Demonstration</span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  See our alpha platform in action. Real technology, real results.
                </p>
              </div>
            </div>
          </section>

          {/* Main Demo Video */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-bright_magenta/20 mb-12">
                  <div className="absolute inset-0 bg-gradient-to-r from-bright_magenta/20 to-tech_green/20"></div>
                  <div className="relative bg-near_black/95 p-4">
                    <iframe 
                      width="100%" 
                      height="600" 
                      src="https://www.youtube.com/embed/XtI4AndkV24" 
                      title="XEUR.AI Alpha Platform Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className='rounded-xl'
                    ></iframe>
                  </div>
                </div>
                
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                      What You're Seeing
                    </span>
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                      <h3 className="text-xl font-bold text-tech_green mb-4">Live Alpha Platform</h3>
                      <p className="text-light_gray_text/80">
                        Working web-based platform with real AI integration. 
                        This isn't a prototype - it's functional technology.
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                      <h3 className="text-xl font-bold text-bright_magenta mb-4">Unreal Engine Output</h3>
                      <p className="text-light_gray_text/80">
                        Games generated directly in professional-grade Unreal Engine. 
                        Production-ready output, not toy demonstrations.
                      </p>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl">
                      <h3 className="text-xl font-bold text-purple-400 mb-4">AI-Powered Creation</h3>
                      <p className="text-light_gray_text/80">
                        OpenAI integration generating game assets, logic, and structure 
                        from natural language descriptions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Details */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Technical Foundation
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Current Stack */}
                  <div className="p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-tech_green mb-6">Current Technology Stack</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-tech_green rounded-full mr-4"></div>
                        <div>
                          <div className="font-semibold">Unreal Engine 5</div>
                          <div className="text-sm text-light_gray_text/70">Industry-standard game engine</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-tech_green rounded-full mr-4"></div>
                        <div>
                          <div className="font-semibold">OpenAI API Integration</div>
                          <div className="text-sm text-light_gray_text/70">Advanced AI content generation</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-tech_green rounded-full mr-4"></div>
                        <div>
                          <div className="font-semibold">Web-Based Platform</div>
                          <div className="text-sm text-light_gray_text/70">Cloud-native development environment</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-tech_green rounded-full mr-4"></div>
                        <div>
                          <div className="font-semibold">Real-Time Processing</div>
                          <div className="text-sm text-light_gray_text/70">Immediate game generation and testing</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Roadmap */}
                  <div className="p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-bright_magenta mb-6">Development Roadmap</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-bright_magenta rounded-full mr-4"></div>
                        <div>
                          <div className="font-semibold">Proprietary XEUR LLM</div>
                          <div className="text-sm text-light_gray_text/70">78K+ game dataset training</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-bright_magenta rounded-full mr-4"></div>
                        <div>
                          <div className="font-semibold">Specialized AI Models</div>
                          <div className="text-sm text-light_gray_text/70">Domain-specific optimization</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-bright_magenta rounded-full mr-4"></div>
                        <div>
                          <div className="font-semibold">Multi-Platform Export</div>
                          <div className="text-sm text-light_gray_text/70">Mobile, console, VR deployment</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-bright_magenta rounded-full mr-4"></div>
                        <div>
                          <div className="font-semibold">Enterprise API</div>
                          <div className="text-sm text-light_gray_text/70">B2B integration capabilities</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Access CTA */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Experience the <span className="text-tech_green">Platform</span>
                </h2>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Ready to see what AI-powered game development can do? 
                  Connect directly with our founders for alpha access.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:harshit@cpgplay.com?subject=Alpha Access Request - Platform Demo"
                    className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 Request Alpha Access
                  </a>
                  
                  <a
                    href="https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    💻 View Source Code
                  </a>
                </div>
                
                <p className="text-sm text-light_gray_text/60 mt-6">
                  Direct founder contact • No sales process • Real technology demonstration
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

export default Demo;