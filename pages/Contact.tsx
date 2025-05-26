
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Linkedin, Mail, MapPin, Phone, Send, Twitter, Youtube } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    consent: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormState({
      ...formState,
      [name]: checked
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. We'll get back to you shortly.",
      });
      
      setFormState({
        fullName: "",
        email: "",
        subject: "",
        message: "",
        consent: false
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Let's <span className="text-bright_magenta">Connect</span>
          </h1>
          <p className="text-xl text-center text-light_gray_text/80 mb-12 max-w-3xl mx-auto">
            We're here to answer your questions and explore opportunities.
            Get in touch with our team and start a conversation.
          </p>
        </div>
      </div>
      
      {/* Contact Form & Info */}
      <div className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30 h-full">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <Mail className="text-bright_magenta shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <p className="text-light_gray_text/80">support@xeur.ai</p>
                      <p className="text-light_gray_text/80">partnerships@xeur.ai</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="text-bright_magenta shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">Office Location</h3>
                      <p className="text-light_gray_text/80">
                        XEUR Technologies<br />
                        Cyber Hub, DLF Cyber City<br />
                        Gurugram, Haryana 122002<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="text-bright_magenta shrink-0 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold mb-1">Call Us</h3>
                      <p className="text-light_gray_text/80">+91 (124) 123-4567</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">Connect With Us</h3>
                    <div className="flex gap-4">
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-deep_purple flex items-center justify-center hover:bg-bright_magenta transition-colors">
                        <Linkedin size={18} />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-deep_purple flex items-center justify-center hover:bg-bright_magenta transition-colors">
                        <Twitter size={18} />
                      </a>
                      <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-deep_purple flex items-center justify-center hover:bg-bright_magenta transition-colors">
                        <Youtube size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-deep_purple rounded-lg p-6 border border-light_purple/30">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="fullName" className="block mb-2">Full Name*</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formState.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-near_black border border-light_purple/30 focus:border-bright_magenta focus:outline-none"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-near_black border border-light_purple/30 focus:border-bright_magenta focus:outline-none"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2">Subject*</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md bg-near_black border border-light_purple/30 focus:border-bright_magenta focus:outline-none"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-md bg-near_black border border-light_purple/30 focus:border-bright_magenta focus:outline-none resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formState.consent}
                        onChange={handleCheckboxChange}
                        className="mt-1"
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-light_gray_text/80">
                        I agree to XEUR.AI's privacy policy and terms of service. I consent to being contacted about XEUR.AI products and services.
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex items-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-deep_purple">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30">
              <h3 className="text-xl font-semibold mb-3">How quickly can I expect a response?</h3>
              <p className="text-light_gray_text/80">We typically respond to all inquiries within 24-48 business hours. For urgent matters, please indicate so in the subject line.</p>
            </div>
            
            <div className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30">
              <h3 className="text-xl font-semibold mb-3">I'm interested in partnering with XEUR.AI. Who should I contact?</h3>
              <p className="text-light_gray_text/80">Please send your partnership proposals to partnerships@xeur.ai or use the form above and select "Partnership" as the subject. Our business development team will review your proposal and get back to you.</p>
            </div>
            
            <div className="bg-medium_purple/30 rounded-lg p-6 border border-light_purple/30">
              <h3 className="text-xl font-semibold mb-3">Where can I get technical support for my account?</h3>
              <p className="text-light_gray_text/80">If you're already a customer, the fastest way to get support is through the Help Center in your XEUR.AI dashboard. Alternatively, you can email support@xeur.ai with your account details.</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
