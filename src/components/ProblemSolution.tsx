
import React from "react";
import { X, CheckCheck } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    "Requires extensive coding knowledge",
    "Months or years of development time",
    "Expensive design & art assets",
    "Complex tools with steep learning curves",
    "Multi-platform development is challenging",
  ];

  const solutions = [
    "Zero coding required - pure text prompts",
    "Generate complete games in minutes",
    "All assets included in your creation",
    "Intuitive interface accessible to everyone",
    "Export to any platform seamlessly",
  ];

  return (
    <section className="py-20 bg-deep_purple">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Problem Column */}
          <div className="bg-near_black p-8 rounded-lg border border-warning_red/30">
            <h2 className="text-warning_red mb-6">Traditional Game Development is Broken.</h2>
            
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-warning_red/10">
                    <X size={18} className="text-warning_red" />
                  </div>
                  <span>{problem}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Column */}
          <div className="bg-near_black p-8 rounded-lg border border-tech_green/30">
            <h2 className="text-tech_green mb-6">XEUR.AI: The Paradigm Shift.</h2>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-tech_green/10">
                    <CheckCheck size={18} className="text-tech_green" />
                  </div>
                  <span>{solution}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
