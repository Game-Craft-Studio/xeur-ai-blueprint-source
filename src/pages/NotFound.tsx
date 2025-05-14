
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="bg-near_black min-h-screen">
      <Header />
      <div className="pt-24 pb-20 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="text-8xl font-bold text-bright_magenta mb-6">404</div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl text-light_gray_text/80 mb-8 max-w-lg mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-block"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
