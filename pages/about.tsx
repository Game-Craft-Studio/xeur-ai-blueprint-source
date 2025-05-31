import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About XEUR.AI - Turn Words Into Worlds | Alpha Platform</title>
        <meta name="description" content="XEUR.AI founding story, vision, and team. Alpha platform validated by Microsoft, NVIDIA, and Google partnerships." />
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
                    Turn Words Into Worlds
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  XEUR.AI is transforming game development through AI-powered automation. 
                  From concept to playable game, our alpha platform reduces traditional development barriers.
                </p>
              </div>
            </div>
          </section>

          {/* Company Story */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Our <span className="text-tech_green">Story</span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-6">The Problem We Saw</h3>
                    <p className="text-light_gray_text/80 mb-6">
                      Game development has remained fundamentally unchanged for decades. 
                      Talented creators with amazing ideas face 18+ month development cycles, 
                      $300K+ budgets, and technical barriers that kill innovation before it starts.
                    </p>
                    <p className="text-light_gray_text/80">
                      We realized that AI could eliminate these barriers entirely, 
                      democratizing game creation for millions of creators worldwide.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-tech_green mb-6">Our Solution</h3>
                    <p className="text-light_gray_text/80 mb-6">
                      XEUR.AI combines proven game engine technology (Unreal Engine) with 
                      advanced AI integration (OpenAI) to create the first platform that 
                      transforms text descriptions into complete, playable games.
                    </p>
                    <p className="text-light_gray_text/80">
                      Our alpha platform is already demonstrating this vision, 
                      validated by partnerships with Microsoft, NVIDIA, and Google.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Founding Team */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Founding Team
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Harshit */}
                  <div className="text-center p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-bright_magenta to-purple-600 flex items-center justify-center text-white font-bold text-4xl mx-auto mb-6">H</div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-2">Harshit Verma</h3>
                    <p className="text-light_gray_text/80 mb-4">Co-Founder & Technical Lead</p>
                    <p className="text-light_gray_text/70 mb-6">
                      Technical architect behind the XEUR.AI platform. Expert in AI integration, 
                      game engine development, and scalable platform architecture.
                    </p>
                    <div className="flex justify-center gap-4">
                      <a 
                        href="mailto:harshit@cpgplay.com"
                        className="px-4 py-2 bg-bright_magenta/20 border border-bright_magenta/40 rounded-lg text-bright_magenta hover:bg-bright_magenta/30 transition-colors"
                      >
                        Email
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/indiahv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>

                  {/* Rishav */}
                  <div className="text-center p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-r from-tech_green to-cyan-400 flex items-center justify-center text-white font-bold text-4xl mx-auto mb-6">R</div>
                    <h3 className="text-2xl font-bold text-tech_green mb-2">Rishav Goyal</h3>
                    <p className="text-light_gray_text/80 mb-4">Co-Founder & Business Development</p>
                    <p className="text-light_gray_text/70 mb-6">
                      Strategic partnerships and business development lead. Architect of our 
                      validation strategy with Microsoft, NVIDIA, and Google partnerships.
                    </p>
                    <div className="flex justify-center gap-4">
                      <a 
                        href="mailto:rishav@cpgplay.com"
                        className="px-4 py-2 bg-tech_green/20 border border-tech_green/40 rounded-lg text-tech_green hover:bg-tech_green/30 transition-colors"
                      >
                        Email
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/bunnygoyal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-500/20 border border-blue-500/40 rounded-lg text-blue-400 hover:bg-blue-500/30 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Info */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Company Information
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                    <h3 className="text-xl font-bold text-bright_magenta mb-4">Legal Entity</h3>
                    <p className="text-light_gray_text/80">XEUR.AI by CPG Play</p>
                    <p className="text-light_gray_text/70 text-sm mt-2">
                      NETCO Office Space, PK 28, Block L-4<br/>
                      Neechi Mangali, Ludhiana, Punjab - 141123, India
                    </p>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                    <h3 className="text-xl font-bold text-tech_green mb-4">Stage & Status</h3>
                    <p className="text-light_gray_text/80">Alpha Platform Development</p>
                    <p className="text-light_gray_text/70 text-sm mt-2">
                      Series A fundraising with institutional validation<br/>
                      from Microsoft, NVIDIA, and Google partnerships
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to <span className="text-tech_green">Connect</span>?
                </h2>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Direct founder access. No gatekeepers, no sales process.
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
                    href="mailto:harshit@cpgplay.com"
                    className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    ✉️ Contact Founders
                  </a>
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

export default About;