const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="px-4 sm:px-8">
        <div className="w-full bg-about rounded-[12px] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
          
          {/* Left side: About us heading */}
          <div className="md:w-1/3 flex justify-center">
            <h2 className="text-[48px] leading-[41.25px] tracking-[-0.8px] font-bold text-black text-center">
              About us
            </h2>
          </div>

          {/* Right side: Description */}
          <div className="md:w-2/3 space-y-4 text-[20px] leading-[130%] font-normal text-gray-700 text-center md:text-left">
            <p>
              Optimum Techniques is a specialized engineering contracting firm delivering high-quality HDPE
              geomembrane lining solutions for environmental and industrial applications across Saudi Arabia.
            </p>
            <p>
              We combine engineering precision, safety compliance, and sustainable practices to meet
              international standards with local expertise.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
