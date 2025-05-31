import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Blog = () => {
  return (
    <>
      <Head>
        <title>XEUR.AI Insights - Coming Soon</title>
        <meta name="description" content="XEUR.AI blog and insights coming soon. Follow our development journey and AI-powered game creation insights." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Insights & Updates
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Development insights, platform updates, and AI game creation thoughts. Coming soon.
                </p>
                
                <div className="bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 border border-bright_magenta/30 rounded-2xl p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                  <p className="text-light_gray_text/80 mb-6">
                    Our blog is in development. For the latest updates, follow our platform development 
                    or contact our founders directly.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://www.youtube.com/watch?v=XtI4AndkV24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-bright_magenta/20 border border-bright_magenta/40 rounded-lg text-bright_magenta hover:bg-bright_magenta/30 transition-colors"
                    >
                      🎬 Watch Platform Updates
                    </a>
                    
                    <a
                      href="https://github.com/cpg-xeur-ai/xeur-ai-blueprint-source"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-tech_green/20 border border-tech_green/40 rounded-lg text-tech_green hover:bg-tech_green/30 transition-colors"
                    >
                      💻 Follow Development
                    </a>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-4">Direct Founder Access</h3>
                  <p className="text-light_gray_text/80 mb-6">
                    Want to discuss AI game development, our platform, or investment opportunities? 
                    Contact our founders directly.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:harshit@cpgplay.com"
                      className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                    >
                      ✉️ Contact Harshit
                    </a>
                    
                    <a
                      href="mailto:rishav@cpgplay.com"
                      className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      ✉️ Contact Rishav
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

export default Blog;