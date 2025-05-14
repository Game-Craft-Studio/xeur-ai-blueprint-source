
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => {
  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-sm text-light_gray_text/70 mb-8">Last Updated: October 15, 2023</p>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <h2>Introduction</h2>
            <p>
              This Cookie Policy explains how XEUR.AI ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website and use our services. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, work more efficiently, and provide analytical information.
            </p>
            <p>
              Cookies set by the website owner (in this case, XEUR.AI) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
            </p>
            
            <h2>Types of Cookies We Use</h2>
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work.
            </p>
            
            <h3>Performance and Analytics Cookies</h3>
            <p>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous.
            </p>
            
            <h3>Functionality Cookies</h3>
            <p>
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not function properly.
            </p>
            
            <h3>Targeting and Advertising Cookies</h3>
            <p>
              These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites. They do not store directly personal information but are based on uniquely identifying your browser and internet device.
            </p>
            
            <h2>How to Control Cookies</h2>
            <p>
              You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences as follows:
            </p>
            <ul>
              <li>
                <strong>Browser Controls:</strong> You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas may be restricted.
              </li>
              <li>
                <strong>Cookie Preference Tool:</strong> We provide a cookie preference tool that is accessible via our website, which allows you to selectively accept or reject different types of cookies.
              </li>
            </ul>
            <p>
              Most advertising networks offer you a way to opt out of targeted advertising. If you would like to find out more information, please visit <a href="http://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer">http://www.aboutads.info/choices/</a> or <a href="http://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">http://www.youronlinechoices.com</a>.
            </p>
            
            <h2>Cookies We Use</h2>
            <p>
              The specific cookies we use may include:
            </p>
            <table>
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>xeur_session</td>
                  <td>Maintains your session state across pages</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>xeur_auth</td>
                  <td>Authenticates your user account</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td>xeur_preferences</td>
                  <td>Stores your site preferences</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Google Analytics cookie for distinguishing users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Google Analytics cookie for distinguishing users</td>
                  <td>24 hours</td>
                </tr>
              </tbody>
            </table>
            
            <h2>Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Policy indicates when it was last updated.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at privacy@xeur.ai.
            </p>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CookiePolicy;
