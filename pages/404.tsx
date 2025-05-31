import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Page Not Found - XEUR.AI</title>
        <meta name="description" content="Page not found. Return to XEUR.AI homepage or contact our founders directly." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          <section className="py-20 min-h-[60vh] flex items-center">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-8xl font-bold text-bright_magenta/20 mb-8">404</div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Page Not Found
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  The page you're looking for doesn't exist. 
                  Let's get you back to something useful.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/"
                    className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                  >
                    🏠 Back to Homepage
                  </a>
                  
                  <a
                    href="https://www.youtube.com/watch?v=XtI4AndkV24"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    🎬 Watch Demo
                  </a>
                </div>
                
                <div className="mt-12 pt-8 border-t border-bright_magenta/20">
                  <p className="text-light_gray_text/70 mb-4">Need help? Contact our founders directly:</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:harshit@cpgplay.com" className="text-bright_magenta hover:text-purple-400 transition-colors">
                      harshit@cpgplay.com
                    </a>
                    <a href="mailto:rishav@cpgplay.com" className="text-tech_green hover:text-cyan-400 transition-colors">
                      rishav@cpgplay.com
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

export default Custom404;