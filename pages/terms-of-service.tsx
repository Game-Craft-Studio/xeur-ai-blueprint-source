import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - XEUR.AI</title>
        <meta name="description" content="XEUR.AI terms of service for alpha platform users and website visitors. Usage terms and conditions." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Terms of Service
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 text-center mb-12">
                  Last updated: January 2025
                </p>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 border border-bright_magenta/30 rounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold text-tech_green mb-4">Alpha Platform Terms</h2>
                    <p className="text-light_gray_text/80">
                      XEUR.AI is currently in alpha development. These terms apply to our website and alpha platform access. 
                      Terms may be updated as we develop our full platform capabilities.
                    </p>
                  </div>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">1. Acceptance of Terms</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>
                        By accessing or using XEUR.AI's website and platform, you agree to be bound by these Terms of Service. 
                        If you do not agree to these terms, please do not use our services.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">2. Service Description</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>XEUR.AI provides:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>AI-powered game development platform (alpha version)</li>
                        <li>Integration with Unreal Engine and OpenAI technologies</li>
                        <li>Web-based development environment</li>
                        <li>Direct founder support during alpha phase</li>
                      </ul>
                      <p className="font-semibold text-yellow-400">
                        Note: Our platform is in alpha development. Features may change, and service availability is not guaranteed.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">3. Alpha Access Terms</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <h3 className="text-xl font-semibold text-purple-400">Access Requirements</h3>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Alpha access is invite-only and at our discretion</li>
                        <li>Users must provide accurate contact information</li>
                        <li>Commercial use requires explicit permission</li>
                        <li>Access may be terminated at any time during alpha phase</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-purple-400 mt-6">Alpha User Responsibilities</h3>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Provide constructive feedback</li>
                        <li>Report bugs and technical issues</li>
                        <li>Do not redistribute platform access</li>
                        <li>Respect intellectual property rights</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">4. Intellectual Property</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <h3 className="text-xl font-semibold text-purple-400">Your Content</h3>
                      <p>
                        You retain ownership of games and content you create using our platform. 
                        You grant us a limited license to process and store your content for platform operation.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-purple-400 mt-6">Our Platform</h3>
                      <p>
                        XEUR.AI platform, technology, and related intellectual property remain our exclusive property. 
                        Users receive a limited, non-transferable license to use the platform.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-purple-400 mt-6">Third-Party Technology</h3>
                      <p>
                        Our platform integrates Unreal Engine and OpenAI technologies, which are subject to their respective licenses and terms.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">5. Acceptable Use</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>You agree not to:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Use the platform for illegal activities</li>
                        <li>Create content that violates intellectual property rights</li>
                        <li>Attempt to reverse engineer or hack the platform</li>
                        <li>Share platform access with unauthorized users</li>
                        <li>Use the platform to create harmful or offensive content</li>
                        <li>Overload or abuse platform resources</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">6. Disclaimers and Limitations</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <h3 className="text-xl font-semibold text-purple-400">Alpha Platform Disclaimer</h3>
                      <p className="font-semibold text-yellow-400">
                        THE PLATFORM IS PROVIDED "AS IS" DURING ALPHA PHASE. WE MAKE NO WARRANTIES ABOUT AVAILABILITY, 
                        FUNCTIONALITY, OR FITNESS FOR ANY PARTICULAR PURPOSE.
                      </p>
                      
                      <h3 className="text-xl font-semibold text-purple-400 mt-6">Limitation of Liability</h3>
                      <p>
                        To the maximum extent permitted by law, XEUR.AI shall not be liable for any indirect, 
                        incidental, special, or consequential damages arising from platform use.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">7. Data and Privacy</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>
                        Data collection and usage are governed by our Privacy Policy. 
                        By using our services, you consent to data processing as described in our Privacy Policy.
                      </p>
                      <p>
                        <a href="/privacy-policy" className="text-tech_green hover:text-cyan-400 transition-colors">
                          View our Privacy Policy →
                        </a>
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">8. Termination</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>We may terminate your access to the platform:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>For violation of these terms</li>
                        <li>At our discretion during alpha phase</li>
                        <li>If the platform is discontinued</li>
                        <li>For extended periods of inactivity</li>
                      </ul>
                      <p>You may terminate your use of the platform at any time by contacting us.</p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">9. Contact and Disputes</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>For questions about these terms or to report violations:</p>
                      <div className="bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/30 rounded-lg p-4">
                        <p><strong>XEUR.AI by CPG Play</strong></p>
                        <p>Email: <a href="mailto:harshit@cpgplay.com" className="text-tech_green hover:text-cyan-400 transition-colors">harshit@cpgplay.com</a></p>
                        <p>Address: NETCO Office Space, PK 28, Block L-4, Neechi Mangali, Ludhiana, Punjab - 141123, India</p>
                      </div>
                      <p>
                        Disputes will be resolved through good-faith negotiation. 
                        If resolution is not possible, disputes are subject to the jurisdiction of Indian courts.
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">10. Changes to Terms</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>
                        We may update these terms as our platform develops. 
                        Significant changes will be communicated via email or platform notification. 
                        Continued use after changes constitutes acceptance of updated terms.
                      </p>
                      <p className="font-semibold">
                        Current version: January 2025
                      </p>
                    </div>
                  </section>
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

export default TermsOfService;