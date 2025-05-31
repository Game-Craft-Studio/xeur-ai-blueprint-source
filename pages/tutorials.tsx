import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Tutorials = () => {
  return (
    <>
      <Head>
        <title>XEUR.AI Tutorials - Alpha Platform Guide</title>
        <meta name="description" content="XEUR.AI platform tutorials coming soon. Current guidance available through direct founder support and platform demo." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Platform Tutorials
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Learn AI-powered game development with XEUR.AI. 
                  Comprehensive tutorials coming with our beta release.
                </p>
                
                <div className="bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 border border-bright_magenta/30 rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">Current Learning Resources</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                      <h3 className="text-xl font-bold text-tech_green mb-4">🎬 Platform Demo</h3>
                      <p className="text-light_gray_text/80 mb-4">
                        Watch our founders demonstrate the alpha platform in action.
                      </p>
                      <a
                        href="https://www.youtube.com/watch?v=XtI4AndkV24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-tech_green/20 border border-tech_green/40 rounded-lg text-tech_green hover:bg-tech_green/30 transition-colors"
                      >
                        Watch Demo
                      </a>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                      <h3 className="text-xl font-bold text-bright_magenta mb-4">💬 Direct Guidance</h3>
                      <p className="text-light_gray_text/80 mb-4">
                        Get personalized guidance from our founders during alpha access.
                      </p>
                      <a
                        href="mailto:harshit@cpgplay.com?subject=Platform Guidance Request"
                        className="inline-block px-6 py-3 bg-bright_magenta/20 border border-bright_magenta/40 rounded-lg text-bright_magenta hover:bg-bright_magenta/30 transition-colors"
                      >
                        Get Guidance
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-8">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                      Coming Soon: Complete Tutorial Library
                    </span>
                  </h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-xl">
                      <h3 className="text-lg font-bold text-purple-400 mb-3">Getting Started</h3>
                      <ul className="text-sm text-light_gray_text/80 space-y-2">
                        <li>• Platform Introduction</li>
                        <li>• First Game Creation</li>
                        <li>• Interface Overview</li>
                        <li>• Basic Game Types</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                      <h3 className="text-lg font-bold text-tech_green mb-3">Advanced Features</h3>
                      <ul className="text-sm text-light_gray_text/80 space-y-2">
                        <li>• AI Prompt Optimization</li>
                        <li>• Custom Asset Integration</li>
                        <li>• Multi-Platform Export</li>
                        <li>• Performance Tuning</li>
                      </ul>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                      <h3 className="text-lg font-bold text-bright_magenta mb-3">Publishing & Deployment</h3>
                      <ul className="text-sm text-light_gray_text/80 space-y-2">
                        <li>• Game Optimization</li>
                        <li>• Platform Publishing</li>
                        <li>• Distribution Strategies</li>
                        <li>• Monetization Options</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">Ready to Start Learning?</h3>
                  <p className="text-light_gray_text/80 mb-8">
                    Join our alpha program for hands-on learning with direct founder support.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:harshit@cpgplay.com?subject=Alpha Access - Tutorial Program"
                      className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                    >
                      🚀 Join Alpha Program
                    </a>
                    
                    <a
                      href="https://www.youtube.com/watch?v=XtI4AndkV24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      🎬 Watch Demo First
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

export default Tutorials;