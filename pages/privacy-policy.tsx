import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - XEUR.AI</title>
        <meta name="description" content="XEUR.AI privacy policy for alpha platform users and website visitors. Data protection and user privacy commitments." />
      </Head>
      
      <div className="bg-near_black min-h-screen text-gray-100">
        <Header />
        
        <main className="pt-24">
          <section className="py-20">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright_magenta to-tech_green">
                    Privacy Policy
                  </span>
                </h1>
                <p className="text-xl text-light_gray_text/80 text-center mb-12">
                  Last updated: January 2025
                </p>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <div className="bg-gradient-to-r from-bright_magenta/10 to-tech_green/10 border border-bright_magenta/30 rounded-xl p-6 mb-8">
                    <h2 className="text-2xl font-bold text-tech_green mb-4">Alpha Platform Notice</h2>
                    <p className="text-light_gray_text/80">
                      XEUR.AI is currently in alpha development. This privacy policy applies to our website 
                      and alpha platform access. As we develop our full platform, this policy will be updated 
                      to reflect new features and data handling practices.
                    </p>
                  </div>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">Information We Collect</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <h3 className="text-xl font-semibold text-purple-400">Website Information</h3>
                      <p>When you visit our website, we may collect:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>IP address (anonymized)</li>
                        <li>Pages visited and time spent</li>
                        <li>Referring website</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-purple-400 mt-6">Contact Information</h3>
                      <p>When you contact us directly, we collect:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Email address</li>
                        <li>Name</li>
                        <li>Message content</li>
                        <li>Company information (if provided)</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-purple-400 mt-6">Alpha Platform Data</h3>
                      <p>For alpha users, we may collect:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Platform usage patterns</li>
                        <li>Created content (games, assets)</li>
                        <li>Performance metrics</li>
                        <li>Feedback and bug reports</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">How We Use Information</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>We use collected information to:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Improve our platform and services</li>
                        <li>Respond to inquiries and provide support</li>
                        <li>Analyze usage patterns for development</li>
                        <li>Communicate about platform updates</li>
                        <li>Ensure platform security and prevent abuse</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">Data Sharing</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p><strong>We do not sell or rent your personal information.</strong></p>
                      <p>We may share information only in these circumstances:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>With your explicit consent</li>
                        <li>To comply with legal obligations</li>
                        <li>To protect our rights and prevent fraud</li>
                        <li>With service providers who assist our operations (under strict confidentiality)</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">Data Security</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>We implement appropriate security measures to protect your information:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Encrypted data transmission</li>
                        <li>Secure server infrastructure</li>
                        <li>Limited access to personal information</li>
                        <li>Regular security audits and updates</li>
                      </ul>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">Your Rights</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>You have the right to:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Opt out of communications</li>
                        <li>Data portability (where applicable)</li>
                      </ul>
                      <p className="mt-4">
                        To exercise these rights, contact us at: 
                        <a href="mailto:harshit@cpgplay.com" className="text-tech_green hover:text-cyan-400 transition-colors"> harshit@cpgplay.com</a>
                      </p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">Cookies and Tracking</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>We use minimal cookies for:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li>Essential website functionality</li>
                        <li>Anonymous analytics to improve our site</li>
                        <li>Remembering your preferences</li>
                      </ul>
                      <p>You can control cookies through your browser settings.</p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">Third-Party Services</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>Our platform integrates with:</p>
                      <ul className="list-disc list-inside ml-4 space-y-2">
                        <li><strong>OpenAI:</strong> For AI-powered content generation</li>
                        <li><strong>Unreal Engine:</strong> For game development capabilities</li>
                        <li><strong>Cloud Infrastructure:</strong> For platform hosting and security</li>
                      </ul>
                      <p>These services have their own privacy policies governing data handling.</p>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">Contact Information</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>For privacy-related questions or requests:</p>
                      <div className="bg-gradient-to-r from-tech_green/20 to-cyan-400/20 border border-tech_green/30 rounded-lg p-4">
                        <p><strong>XEUR.AI by CPG Play</strong></p>
                        <p>Email: <a href="mailto:harshit@cpgplay.com" className="text-tech_green hover:text-cyan-400 transition-colors">harshit@cpgplay.com</a></p>
                        <p>Address: NETCO Office Space, PK 28, Block L-4, Neechi Mangali, Ludhiana, Punjab - 141123, India</p>
                      </div>
                    </div>
                  </section>

                  <section className="mb-8">
                    <h2 className="text-2xl font-bold text-bright_magenta mb-4">Policy Updates</h2>
                    <div className="text-light_gray_text/80 space-y-4">
                      <p>
                        We may update this privacy policy as our platform evolves. 
                        Significant changes will be communicated via email or website notice. 
                        Continued use of our services after updates constitutes acceptance of the revised policy.
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

export default PrivacyPolicy;