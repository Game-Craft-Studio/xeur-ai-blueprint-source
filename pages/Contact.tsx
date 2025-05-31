import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactFounders from '@/components/ContactFounders';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact XEUR.AI Founders - Direct Access</title>
        <meta name="description" content="Direct contact with XEUR.AI founders Harshit Verma and Rishav Goyal. No gatekeepers, no sales teams. Alpha access and investment inquiries." />
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
                    Direct Founder Access
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  No gatekeepers. No sales teams. Just founders who make decisions.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Founders Component */}
          <ContactFounders />

          {/* Quick Actions */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Quick Actions
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Alpha Access */}
                  <div className="text-center p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-tech_green mb-4">Alpha Access</h3>
                    <p className="text-light_gray_text/80 mb-6">
                      Get hands-on access to our alpha platform for testing and feedback.
                    </p>
                    <a
                      href="mailto:harshit@cpgplay.com?subject=Alpha Access Request - XEUR.AI Platform"
                      className="inline-flex items-center px-6 py-3 bg-tech_green/20 border border-tech_green/40 rounded-lg text-tech_green hover:bg-tech_green/30 transition-colors"
                    >
                      🚀 Request Alpha Access
                    </a>
                  </div>

                  {/* Investment Inquiry */}
                  <div className="text-center p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-bright_magenta mb-4">Investment Inquiry</h3>
                    <p className="text-light_gray_text/80 mb-6">
                      Interested in our Series A round? Get the investment deck and schedule a call.
                    </p>
                    <a
                      href="mailto:harshit@cpgplay.com?cc=rishav@cpgplay.com&subject=Investment Inquiry - XEUR.AI Series A"
                      className="inline-flex items-center px-6 py-3 bg-bright_magenta/20 border border-bright_magenta/40 rounded-lg text-bright_magenta hover:bg-bright_magenta/30 transition-colors"
                    >
                      💼 Investment Inquiry
                    </a>
                  </div>

                  {/* Partnership Discussion */}
                  <div className="text-center p-8 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-2xl">
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Partnership Discussion</h3>
                    <p className="text-light_gray_text/80 mb-6">
                      Explore integration, distribution, or technology collaboration opportunities.
                    </p>
                    <a
                      href="mailto:rishav@cpgplay.com?subject=Partnership Inquiry - XEUR.AI"
                      className="inline-flex items-center px-6 py-3 bg-purple-400/20 border border-purple-400/40 rounded-lg text-purple-400 hover:bg-purple-400/30 transition-colors"
                    >
                      🤝 Partnership Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Response Expectations */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    What to Expect
                  </span>
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-6 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-xl">
                    <h3 className="text-xl font-bold text-bright_magenta mb-4">Response Time</h3>
                    <ul className="space-y-2 text-light_gray_text/80">
                      <li>• <strong>Investment inquiries:</strong> 24-48 hours</li>
                      <li>• <strong>Alpha access requests:</strong> 1-3 business days</li>
                      <li>• <strong>Partnership discussions:</strong> 2-5 business days</li>
                      <li>• <strong>General inquiries:</strong> 1 week</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-xl">
                    <h3 className="text-xl font-bold text-tech_green mb-4">What We'll Provide</h3>
                    <ul className="space-y-2 text-light_gray_text/80">
                      <li>• Direct founder communication</li>
                      <li>• Transparent timeline and next steps</li>
                      <li>• Relevant demos or documentation</li>
                      <li>• Clear follow-up commitments</li>
                    </ul>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-light_gray_text/70 italic">
                    We believe in direct, honest communication. Every email gets a personal response from our founding team.
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

export default Contact;