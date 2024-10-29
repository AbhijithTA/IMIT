import React from 'react';
import hero from '../assets/HeroSection.png';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white">
      {/* Hero Image and Text Overlay */}
      <div className="relative flex items-center justify-center overflow-hidden h-[60vh] sm:h-[80vh]">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-3xl md:text-5xl font-bold text-center">
            Capture Your Imagination with{' '}
            <span className="text-red-500">Captcharts</span>
          </h1>
          <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200">
            Explore
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
