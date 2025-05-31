import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Docs = () => {
  return (
    <>
      <Head>
        <title>XEUR.AI Documentation - Alpha Platform</title>
        <meta name="description" content="XEUR.AI platform documentation in development. Contact founders for alpha access and platform guidance." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Platform Documentation
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Alpha platform documentation in development. Current access through direct founder contact.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div className="p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                    <h3 className="text-xl font-bold text-tech_green mb-4">Current Resources</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-center">
                        <span className="text-tech_green mr-3">🎬</span>
                        <a href="https://www.youtube.com/watch?v=XtI4AndkV24" target="_blank" rel="noopener noreferrer" className="text-light_gray_text/80 hover:text-tech_green transition-colors">
                          Platform Demo Video
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="text-tech_green mr-3">💻</span>
                        <a href="https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source" target="_blank" rel="noopener noreferrer" className="text-light_gray_text/80 hover:text-tech_green transition-colors">
                          Open Source Repository
                        </a>
                      </li>
                      <li className="flex items-center">
                        <span className="text-tech_green mr-3">📋</span>
                        <span className="text-light_gray_text/80">Alpha Access Documentation (Email-based)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                    <h3 className="text-xl font-bold text-bright_magenta mb-4">Coming Soon</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-center">
                        <span className="text-bright_magenta mr-3">📖</span>
                        <span className="text-light_gray_text/80">Complete Platform Guide</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-bright_magenta mr-3">🔧</span>
                        <span className="text-light_gray_text/80">API Documentation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-bright_magenta mr-3">🎯</span>
                        <span className="text-light_gray_text/80">Integration Examples</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-bright_magenta mr-3">🏫</span>
                        <span className="text-light_gray_text/80">Tutorial Library</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 border border-bright_magenta/30 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-4">Need Help Now?</h2>
                  <p className="text-light_gray_text/80 mb-6">
                    Our alpha platform comes with direct founder support. 
                    No documentation gaps, no waiting for updates.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:harshit@cpgplay.com?subject=Platform Documentation & Support"
                      className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                    >
                      🚀 Get Direct Support
                    </a>
                    
                    <a
                      href="https://www.youtube.com/watch?v=XtI4AndkV24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      🎬 Start with Demo
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

export default Docs;