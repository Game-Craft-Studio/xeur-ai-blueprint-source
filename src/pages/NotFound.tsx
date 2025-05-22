import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(
      "Coming Soon page accessed:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      <div className="pt-24 pb-20 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-bright_magenta mb-6">🚀</div>
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-lg mx-auto">
            We're working hard to bring you something amazing. This feature will be available soon. Stay tuned!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/" 
              className="btn-primary inline-block"
            >
              Return to Homepage
            </Link>
            <button 
              className="btn-secondary inline-block"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ComingSoon;