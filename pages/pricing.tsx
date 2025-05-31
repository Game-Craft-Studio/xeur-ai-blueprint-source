import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const Pricing = () => {
  return (
    <>
      <Head>
        <title>XEUR.AI Pricing - Alpha Access & Future Plans</title>
        <meta name="description" content="XEUR.AI pricing model in development. Alpha access available through direct founder contact. Series A roadmap for enterprise solutions." />
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
                    Alpha Access
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Platform pricing in development based on alpha user feedback. 
                  Current access available through direct founder contact.
                </p>
              </div>
            </div>
          </section>

          {/* Current Status */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  Current <span className="text-tech_green">Access Model</span>
                </h2>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Alpha Access */}
                  <div className="text-center p-8 bg-gradient-to-b from-tech_green/20 to-transparent border border-tech_green/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-tech_green flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">α</div>
                    <h3 className="text-2xl font-bold text-tech_green mb-4">Alpha Access</h3>
                    <p className="text-light_gray_text/80 mb-6">
                      Invite-only platform access for early adopters and strategic partners.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center">
                        <span className="text-tech_green mr-2">✓</span>
                        <span className="text-sm">Direct founder access</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-tech_green mr-2">✓</span>
                        <span className="text-sm">Platform testing & feedback</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-tech_green mr-2">✓</span>
                        <span className="text-sm">Early adopter benefits</span>
                      </div>
                    </div>
                    
                    <a
                      href="mailto:harshit@cpgplay.com?subject=Alpha Access Request"
                      className="block w-full py-3 bg-tech_green/20 border border-tech_green/40 rounded-lg text-tech_green hover:bg-tech_green/30 transition-colors"
                    >
                      Request Access
                    </a>
                  </div>

                  {/* Investment Access */}
                  <div className="text-center p-8 bg-gradient-to-b from-bright_magenta/20 to-transparent border border-bright_magenta/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-bright_magenta flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">💼</div>
                    <h3 className="text-2xl font-bold text-bright_magenta mb-4">Investor Access</h3>
                    <p className="text-light_gray_text/80 mb-6">
                      Strategic investors get exclusive platform preview and business model discussion.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center">
                        <span className="text-bright_magenta mr-2">✓</span>
                        <span className="text-sm">Investment deck & demo</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-bright_magenta mr-2">✓</span>
                        <span className="text-sm">Business model preview</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-bright_magenta mr-2">✓</span>
                        <span className="text-sm">Founding team access</span>
                      </div>
                    </div>
                    
                    <a
                      href="mailto:harshit@cpgplay.com?cc=rishav@cpgplay.com&subject=Investment Inquiry - XEUR.AI"
                      className="block w-full py-3 bg-bright_magenta/20 border border-bright_magenta/40 rounded-lg text-bright_magenta hover:bg-bright_magenta/30 transition-colors"
                    >
                      Investor Inquiry
                    </a>
                  </div>

                  {/* Partnership Access */}
                  <div className="text-center p-8 bg-gradient-to-b from-purple-400/20 to-transparent border border-purple-400/30 rounded-2xl">
                    <div className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">🤝</div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-4">Partnership Access</h3>
                    <p className="text-light_gray_text/80 mb-6">
                      Strategic partnerships for integration, distribution, and technology collaboration.
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        <span className="text-sm">Integration opportunities</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        <span className="text-sm">Distribution partnerships</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-purple-400 mr-2">✓</span>
                        <span className="text-sm">Technology collaboration</span>
                      </div>
                    </div>
                    
                    <a
                      href="mailto:rishav@cpgplay.com?subject=Partnership Inquiry - XEUR.AI"
                      className="block w-full py-3 bg-purple-400/20 border border-purple-400/40 rounded-lg text-purple-400 hover:bg-purple-400/30 transition-colors"
                    >
                      Partnership Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Future Pricing Model */}
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Future Pricing Strategy
                  </span>
                </h2>
                
                <div className="bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 border border-bright_magenta/30 rounded-2xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-center mb-6">Revenue Model Development</h3>
                  
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-bright_magenta mb-2">Platform SaaS</h4>
                      <p className="text-sm text-light_gray_text/80">Subscription-based platform access with usage tiers</p>
                      <p className="text-xs text-light_gray_text/60 mt-2">Target: 60% of revenue</p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-tech_green mb-2">Marketplace Fees</h4>
                      <p className="text-sm text-light_gray_text/80">Commission on game sales and asset transactions</p>
                      <p className="text-xs text-light_gray_text/60 mt-2">Target: 10-30% commission</p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-purple-400 mb-2">Export Services</h4>
                      <p className="text-sm text-light_gray_text/80">Premium deployment and publishing assistance</p>
                      <p className="text-xs text-light_gray_text/60 mt-2">Target: 15% of revenue</p>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="text-lg font-bold text-cyan-400 mb-2">Enterprise API</h4>
                      <p className="text-sm text-light_gray_text/80">B2B licensing and white-label solutions</p>
                      <p className="text-xs text-light_gray_text/60 mt-2">Target: 20% of revenue</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-light_gray_text/80 italic">
                    Pricing models currently in development based on alpha user feedback and market validation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="py-20 bg-gradient-to-b from-deep_purple to-near_black">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to <span className="text-tech_green">Get Started</span>?
                </h2>
                <p className="text-xl text-light_gray_text/80 mb-8">
                  Contact our founders directly to discuss access, pricing, or partnership opportunities.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:harshit@cpgplay.com?subject=Platform Access Inquiry"
                    className="px-8 py-4 bg-gradient-to-r from-bright_magenta to-purple-600 text-white font-bold rounded-lg hover:from-purple-600 hover:to-bright_magenta transition-all duration-300 transform hover:scale-105"
                  >
                    ✉️ Contact Founders
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
                
                <p className="text-sm text-light_gray_text/60 mt-6">
                  No gatekeepers • Direct decision-makers • Transparent discussions
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

export default Pricing;