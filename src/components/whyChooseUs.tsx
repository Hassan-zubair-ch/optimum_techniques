import React from "react";

const faqs = [
  {
    question: "What level of technology do you use?",
    answer: "We use the latest geomembrane installation and QA/QC testing tools.",
  },
  {
    question: "Are your workers certified/trained?",
    answer: "All staff are properly trained in QA/HSE standards.",
  },
  {
    question: "Do you handle projects both small and large budget?",
    answer: "Yes, we handle projects of all sizes and budgets.",
  },
  {
    question: "How transparent is your project reporting and compliance?",
    answer: "We provide clear reports and compliance documentation for clients.",
  },
  {
    question: "What types of projects do you typically handle?",
    answer: "Environmental, industrial, mining, and infrastructure projects.",
  },
  {
    question: "How do you ensure quality throughout a project?",
    answer: "Strict QA/QC standards and third-party verification when needed.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-[48px] leading-[100%] tracking-[-0.8px] font-bold mb-8 text-center">
        Why choose us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {faqs.map((item, idx) => (
          <div key={idx}>
            <h3 className="text-[16px] leading-[27.5px] font-bold mb-1">
              {item.question}
            </h3>
            <p className="text-[16px] leading-[21px] tracking-[-0.02em] font-normal text-gray-600">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
