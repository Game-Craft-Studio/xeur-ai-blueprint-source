import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const XeurConnect = () => {
  return (
    <>
      <Head>
        <title>XEUR Connect - Web3 Gaming Vision | Future Development Roadmap</title>
        <meta name="description" content="XEUR Connect Web3 gaming platform vision. Long-term roadmap for blockchain integration and NFT marketplace development." />
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
                    XEUR Connect
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Web3 Gaming Platform Vision • Long-term Development Roadmap
                </p>
                
                <div className="bg-gradient-to-r from-purple-400/20 to-yellow-400/20 border border-purple-400/30 rounded-xl p-4 mb-8 max-w-2xl mx-auto">
                  <p className="text-purple-400 font-semibold text-sm">
                    🔮 FUTURE VISION: Web3 integration planned for post-Series A development. Alpha platform foundation proven.
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
                  Foundation & <span className="text-purple-400">Vision</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Current Foundation */}
                  <div className="p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-tech_green mb-6">✅ Current Alpha Platform</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Game Creation Foundation</h4>
                        <p className="text-sm text-light_gray_text/70">Working AI-powered game development platform</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Unreal Engine Integration</h4>
                        <p className="text-sm text-light_gray_text/70">Production-ready game engine foundation</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">User-Generated Content</h4>
                        <p className="text-sm text-light_gray_text/70">Creator-owned game assets and properties</p>
                      </div>
                      
                      <div className="border-l-4 border-tech_green pl-4">
                        <h4 className="font-semibold">Platform Ecosystem</h4>
                        <p className="text-sm text-light_gray_text/70">Foundation for marketplace development</p>
                      </div>
                    </div>
                  </div>

                  {/* Web3 Vision */}
                  <div className="p-8 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-purple-400 mb-6">🔮 Web3 Gaming Vision</h3>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-semibold">Blockchain Integration (Vision)</h4>
                        <p className="text-sm text-light_gray_text/70">Multi-chain game asset tokenization</p>
                      </div>
                      
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-semibold">NFT Marketplace (Future)</h4>
                        <p className="text-sm text-light_gray_text/70">Creator-owned game asset trading</p>
                      </div>
                      
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-semibold">Play-to-Earn Mechanics (Concept)</h4>
                        <p className="text-sm text-light_gray_text/70">Token-based creator economy</p>
                      </div>
                      
                      <div className="border-l-4 border-purple-400 pl-4">
                        <h4 className="font-semibold">Cross-Game Assets (Long-term)</h4>
                        <p className="text-sm text-light_gray_text/70">Interoperable game asset ecosystem</p>
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
                    Partnership Foundation for Web3
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Microsoft */}
                  <div className="text-center p-8 bg-gradient-to-b from-blue-500/20 to-transparent border border-blue-500/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">M</div>
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">Microsoft Azure</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Cloud infrastructure foundation for scalable Web3 gaming platform development.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Enterprise blockchain services + global scaling capabilities
                    </p>
                  </div>

                  {/* NVIDIA */}
                  <div className="text-center p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">N</div>
                    <h3 className="text-2xl font-bold text-tech_green mb-4">NVIDIA Omniverse</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Advanced AI and metaverse technology stack for next-generation gaming experiences.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Metaverse development tools + AI-powered asset generation
                    </p>
                  </div>

                  {/* Google */}
                  <div className="text-center p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-yellow-500 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">G</div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-4">Google Cloud</h3>
                    <p className="text-light_gray_text/80 mb-4">
                      Blockchain node infrastructure and global content delivery for Web3 gaming.
                    </p>
                    <p className="text-light_gray_text/70 text-sm">
                      Web3 development tools + global scaling infrastructure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Development Timeline */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Web3 Development Timeline
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                    <h3 className="text-lg font-bold text-tech_green mb-4">2025 (Current)</h3>
                    <p className="text-light_gray_text/80 mb-4"><strong>Alpha Platform</strong></p>
                    <ul className="text-sm text-light_gray_text/70 space-y-2">
                      <li>• Working game creation</li>
                      <li>• User-owned assets</li>
                      <li>• Platform foundation</li>
                      <li>• Creator economy basics</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                    <h3 className="text-lg font-bold text-bright_magenta mb-4">2026 (Roadmap)</h3>
                    <p className="text-light_gray_text/80 mb-4"><strong>Web3 Foundation</strong></p>
                    <ul className="text-sm text-light_gray_text/70 space-y-2">
                      <li>• Blockchain integration</li>
                      <li>• Basic NFT support</li>
                      <li>• Wallet connectivity</li>
                      <li>• Token experiments</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl">
                    <h3 className="text-lg font-bold text-purple-400 mb-4">2027 (Vision)</h3>
                    <p className="text-light_gray_text/80 mb-4"><strong>NFT Marketplace</strong></p>
                    <ul className="text-sm text-light_gray_text/70 space-y-2">
                      <li>• Asset marketplace</li>
                      <li>• Creator royalties</li>
                      <li>• Cross-game assets</li>
                      <li>• Play-to-earn pilots</li>
                    </ul>
                  </div>
                  
                  <div className="text-center p-6 bg-gradient-to-b from-yellow-400/20 to-transparent border border-yellow-400/30 rounded-xl">
                    <h3 className="text-lg font-bold text-yellow-400 mb-4">2028+ (Future)</h3>
                    <p className="text-light_gray_text/80 mb-4"><strong>Web3 Ecosystem</strong></p>
                    <ul className="text-sm text-light_gray_text/70 space-y-2">
                      <li>• Full metaverse integration</li>
                      <li>• DAO governance</li>
                      <li>• Global asset economy</li>
                      <li>• Platform tokenomics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Focus */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Current Focus: Platform Foundation
                  </span>
                </h2>
                
                <div className="bg-gradient-to-r from-tech_green/20 to-purple-400/20 border border-tech_green/30 rounded-2xl p-8 mb-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Series A Priority: Core Platform Excellence</h3>
                    <p className="text-xl text-light_gray_text/80 mb-6">
                      Before Web3 integration, we're perfecting the foundation: AI-powered game creation that works. 
                      Web3 features will build on proven platform technology.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div>
                        <h4 className="text-xl font-bold text-tech_green mb-2">Alpha Platform</h4>
                        <p className="text-light_gray_text/80">Working Technology</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-bright_magenta mb-2">Series A Focus</h4>
                        <p className="text-light_gray_text/80">Platform Excellence</p>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-purple-400 mb-2">Future Vision</h4>
                        <p className="text-light_gray_text/80">Web3 Integration</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">Experience the Foundation</h3>
                  <p className="text-light_gray_text/80 mb-8">
                    See our current alpha platform in action. Web3 features will build on this proven foundation.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.youtube.com/watch?v=XtI4AndkV24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                    >
                      🎬 Watch Alpha Platform Demo
                    </a>
                    
                    <a
                      href="mailto:rishav@cpgplay.com?subject=Web3 Gaming Vision Discussion"
                      className="px-8 py-4 border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      🔮 Discuss Web3 Vision
                    </a>
                  </div>
                  
                  <p className="text-sm text-light_gray_text/60 mt-6">
                    Current platform proven • Web3 roadmap planned • Future-ready foundation
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

export default XeurConnect;