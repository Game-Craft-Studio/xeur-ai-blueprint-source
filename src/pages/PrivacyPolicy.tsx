
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-light_gray_text/70 mb-8">Last Updated: October 15, 2023</p>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              XEUR.AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our platform, or interact with our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
            
            <h2>Information We Collect</h2>
            <p>We may collect information about you in various ways, including:</p>
            
            <h3>Personal Data</h3>
            <p>When you sign up for an account, we collect:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Profile information</li>
              <li>Payment information (processed securely through our payment processors)</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>We automatically collect certain information when you visit, use, or navigate our platform:</p>
            <ul>
              <li>IP address</li>
              <li>Browser and device information</li>
              <li>Operating system</li>
              <li>Pages visited and features used</li>
              <li>Time and date of your visit</li>
            </ul>
            
            <h3>User Content</h3>
            <p>When you use our services, we collect:</p>
            <ul>
              <li>Game prompts and descriptions</li>
              <li>Generated games and associated assets</li>
              <li>Feedback and preferences</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, operate, and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you about our services, updates, and promotions</li>
              <li>Process your transactions and manage your account</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect our services and users</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>How We Share Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li>Service providers and business partners who help us deliver our services</li>
              <li>Legal and regulatory authorities, as required by applicable laws</li>
              <li>Potential buyers in the event of a business transaction (e.g., merger or acquisition)</li>
            </ul>
            <p>We will not sell your personal information to third parties for marketing purposes.</p>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2>Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
            <ul>
              <li>Right to access and obtain a copy of your personal data</li>
              <li>Right to rectify or update inaccurate personal data</li>
              <li>Right to request deletion of your personal data</li>
              <li>Right to restrict or object to our processing of your personal data</li>
              <li>Right to data portability</li>
            </ul>
            
            <h2>Children's Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 13. We do not knowingly collect or solicit personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@xeur.ai
              <br />
              Address: XEUR Technologies, Cyber Hub, DLF Cyber City, Gurugram, Haryana 122002, India
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
