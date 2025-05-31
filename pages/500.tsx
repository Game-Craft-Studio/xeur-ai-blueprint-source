import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>Server Error - XEUR.AI</title>
        <meta name="description" content="Server error. Please try again or contact XEUR.AI founders directly." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          <section className="py-20 min-h-[60vh] flex items-center">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-8xl font-bold text-tech_green/20 mb-8">500</div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Server Error
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Something went wrong on our end. 
                  Please try again or contact us directly.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                  >
                    🔄 Try Again
                  </button>
                  
                  <a
                    href="/"
                    className="px-8 py-4 border-2 border-tech_green text-tech_green hover:bg-tech_green/10 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    🏠 Back to Homepage
                  </a>
                </div>
                
                <div className="mt-12 pt-8 border-t border-bright_magenta/20">
                  <p className="text-light_gray_text/70 mb-4">If the problem persists, contact our founders:</p>
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

export default Custom500;