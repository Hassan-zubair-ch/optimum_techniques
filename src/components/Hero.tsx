import heroBg from "../assets/images/HeroImage.png";

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <p className="text-accent text-lg mb-4 font-medium">
            Experts in HDPE Installation
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A Specialized Saudi arabian engineering contracting firm
          </h1>
          {/* <Button
            size="large"
            variant="contained"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg"
          >
            CONTACT US
          </Button> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
