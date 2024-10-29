import React from "react";
import programImage from "../assets/ProgramSection.png";

const ProgramSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#d09b6e] text-white">
      {/* Left Side - Text Content */}
      <div className="p-10 md:w-1/2 flex flex-col justify-center space-y-6">
        <div className="relative text-7xl font-bold text-white/30">
          <span className="absolute left-0 top-0 border-l-2 border-white/50 h-full -translate-x-4"></span>
          01
        </div>
        <h3 className="text-3xl md:text-4xl font-semibold">
          Lorem Ipsum is simply dummy text of the printing
        </h3>
        <p className="leading-relaxed text-white/90 text-lg md:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="relative md:w-1/2">
        <div className="absolute top-10 right-10 text-white text-4xl font-semibold">
          Explore the Program
        </div>
        <img
          src={programImage}
          alt="Explore the Program"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProgramSection;
