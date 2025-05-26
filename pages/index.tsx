import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import TargetAudience from "@/components/TargetAudience";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    // Main page container
    // - bg-near_black: Sets a dark background color.
    // - min-h-screen: Ensures the page takes at least the full viewport height.
    // - text-gray-100: Sets a default light text color, suitable for dark backgrounds.
    //   Adjust if specific components override this or if a different shade (e.g., text-white) is preferred.
    // - overflow-x-hidden: Prevents horizontal scrolling on the page. This can improve
    //   mobile experience if any child component inadvertently creates horizontal overflow.
    <div className="bg-near_black min-h-screen text-gray-100 overflow-x-hidden">
      <Header />

      {/* Main content area */}
      {/* The <main> tag is used for semantic HTML, indicating the primary content of the page. */}
      {/* The responsiveness of individual sections (Hero, ProblemSolution, etc.) must be
          handled within their respective components. This typically involves using
          responsive design techniques such as media queries or utility classes
          (e.g., Tailwind CSS responsive prefixes like sm:, md:, lg: for different screen sizes)
          to adjust layout, font sizes, padding, margins, etc.
          The sequential rendering of components here naturally supports a single-column layout
          on smaller screens, which is a common pattern for mobile responsiveness. */}
      <main>
        <Hero />
        <ProblemSolution />
        <HowItWorks />
        <Benefits />
        <TargetAudience />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;