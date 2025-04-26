
const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent z-10" />
      <img
        src="/lovable-uploads/e0b2bbf9-2e12-458b-88f0-b78653bd0c59.png"
        alt="Will Smith"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-start z-20">
        <div className="container mx-auto px-4">
          <h1 className="text-6xl font-bold text-white mb-4">Will Smith</h1>
          <p className="text-2xl text-gray-200 max-w-2xl">
            Actor, Rapper, Producer, and Academy Award Winner
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
