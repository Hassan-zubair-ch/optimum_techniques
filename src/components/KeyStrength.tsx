import keyStrengthImg from "../assets/images/KeyStrength.png";
import checkIcon from "../assets/images/Check icon.png";

const KeyStrength = () => {
  const strengths = [
    "Technically skilled workforce",
    "Advanced equipment & certified methodologies",
    "Commitment to safety & environmental protection",
    "Client-focused project execution",
  ];

  return (
    <section className="pt-16 pb-16 bg-white">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <div>
            <h2 className="text-[48px] leading-[41.25px] tracking-[-0.8px] font-bold text-black mb-8">
              Key Strength
            </h2>
            <div className="space-y-4 mb-8">
              {strengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3">
                  <img src={checkIcon} alt="Check" className="w-5 h-5" />
                  <p className="text-[16px] leading-[130%] font-normal text-gray-800">
                    {strength}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <img
              src={keyStrengthImg}
              alt="Key Strength"
              className="rounded-lg shadow-md w-full h-auto object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyStrength;
