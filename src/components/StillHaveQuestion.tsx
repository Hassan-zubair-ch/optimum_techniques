import React from "react";

const StillHaveQuestions: React.FC = () => {
  return (
    <div className="bg-questions py-4 px-6 shadow rounded-lg max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center">
      <div className="text-sm text-gray-700 text-center md:text-left mb-3 md:mb-0">
        <span className="font-bold">Still have questions?</span><br />
        Can't find the answer you're looking for? Please contact us any time.
      </div>
      <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-2 px-4 rounded">
        CONTACT US
      </button>
    </div>
  );
};

export default StillHaveQuestions;
