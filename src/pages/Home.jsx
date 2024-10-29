import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProgramSection from "../components/ProgramSection";
import AboutAndGallerySection from "../components/GallerySection";
import EventsSection from "../components/EventSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="font-sans">
      {/* <Navbar /> */}
      <HeroSection />
      <AboutSection />
      <ProgramSection />
      <AboutAndGallerySection />
      <EventsSection />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
