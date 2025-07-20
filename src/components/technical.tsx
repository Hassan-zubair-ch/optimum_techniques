import React from "react";
import checkIcon from "../assets/images/Check icon.png";
import equipmentImg from "../assets/images/equipmentTools.png";
import qualityImg from "../assets/images/qualityAssurance.png";
import hseImg from "../assets/images/HSE.png";
import trainingImg from "../assets/images/trainning.png";

const TechnicalCapabilities: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto space-y-16">
      
      {/* Main Section Heading */}
      <h2 className="text-[36px] leading-[41.25px] tracking-[-0.8px] font-bold text-center">
        Technical Capabilities
      </h2>

      {/* Equipment & Tools */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={equipmentImg} alt="Equipment & Tools" className="rounded-lg w-full h-auto object-cover" />
        </div>
        <div style={{marginLeft:"40px"}}>
          <h4 className="text-[48px] leading-[41.25px] tracking-[-0.8px] font-bold mb-4">Equipment & Tools</h4>
          <ul className="space-y-2" >
            {[
              "Automatic Welding Machines",
              "Hand Extrusion Welding Tools",
              "Geo-Membrane Testing Equipment",
              "Electric Generators",
              "Compressors, Shovels & Carts"
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-2">
                <img src={checkIcon} alt="Check" className="w-4 h-4" />
                <span className="text-[16px] leading-[130%] font-normal text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quality Assurance & Testing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
        <div>
          <h4 className="text-[48px] leading-[41.25px] tracking-[-0.8px] font-bold mb-4">Quality Assurance & Testing</h4>
          <ul className="space-y-2">
            {[
              "Vacuum Testing Equipment",
              "Destructive Testing Tools",
              "Non-Destructive Testing Equipment",
              "Compliant with ISO and GAI-LAP"
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-2">
                <img src={checkIcon} alt="Check" className="w-4 h-4" />
                <span className="text-[16px] leading-[130%] font-normal text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={qualityImg} alt="Quality Assurance & Testing" className="rounded-lg w-full h-auto object-cover" />
        </div>
      </div>

      {/* Safety & Compliance heading */}
      <h3 className="text-[36px] leading-[41.25px] tracking-[-0.8px] font-bold text-center">
        Safety & Compliance
      </h3>

      {/* HSE Commitment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={hseImg} alt="HSE Commitment" className="rounded-lg w-full h-auto object-cover" />
        </div>
        <div style={{marginLeft:"40px"}}>
          <h4 className="text-[48px] leading-[41.25px] tracking-[-0.8px] font-bold mb-4">HSE Commitment</h4>
          <ul className="space-y-2">
            {[
              "PPE compliance for all workers",
              "HSE trained and qualified staff",
              "Safety-focused project management",
              "Proactive risk assessments"
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-2">
                <img src={checkIcon} alt="Check" className="w-4 h-4" />
                <span className="text-[16px] leading-[130%] font-normal text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Training & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
        <div>
          <h4 className="text-[48px] leading-[41.25px] tracking-[-0.8px] font-bold mb-4">Training & Certifications</h4>
          <ul className="space-y-2">
            {[
              "HSE & QA training programs",
              "International certifications",
              "Employee development initiatives"
            ].map((point, i) => (
              <li key={i} className="flex items-center gap-2">
                <img src={checkIcon} alt="Check" className="w-4 h-4" />
                <span className="text-[16px] leading-[130%] font-normal text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={trainingImg} alt="Training & Certifications" className="rounded-lg w-full h-auto object-cover" />
        </div>
      </div>

    </section>
  );
};

export default TechnicalCapabilities;
