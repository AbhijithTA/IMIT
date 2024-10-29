import React from "react";
import galleryImage1 from "../assets/Gallery1.png";
import galleryImage2 from "../assets/Gallery2.png";
import galleryImage3 from "../assets/Gallery3.png";
import galleryImage4 from "../assets/Gallery4.png";
import galleryImage5 from "../assets/Gallery5.png";

const AboutAndGallerySection = () => {
  return (
    <div className="bg-gray-50 px-8 py-16 lg:px-24">
      {/* About and Quote Section */}
      <div className="flex flex-col lg:flex-row gap-10 mb-16">
        {/* Lorem Ipsum Section */}
        <div className="lg:w-1/3 flex flex-col justify-center space-y-4">
          <h2 className="text-4xl font-bold text-[#d09b6e] leading-tight">
            Lorem Ipsum is simply dummy text of the printing
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Quote Section */}
        <div className="lg:w-2/3 flex flex-col items-center text-center space-y-4">
          <div className="text-6xl text-gray-300 leading-none">“</div>
          <p className="text-gray-600 text-base leading-relaxed max-w-xl">
            Hey there! I’m Megha Mohan, a 16-year-old UAE-based enthusiast with
            a passion for Photography and Astrophysics. Whether I’m diving into
            the world of photography or exploring the latest news on Dark
            Matter, you can bet I’m always up for an adventure.
            <br />
            On this webpage, I’m laying down my thoughts, experiences, and maybe
            a sprinkle of my experience in photography.
            <br />
            When I’m not lost in the virtual world or buried in my favorite
            books, you can catch me hanging out with my camera and telescope,
            tackling the latest challenges, and trying my hands at
            Astrophotography.
            <br />
            So, buckle up, join me on this digital escapade, and let’s navigate
            the world of photography.
          </p>
          <div className="text-[#d09b6e] font-bold text-lg tracking-wider">
            MEGHA MOHAN
          </div>
          <div className="text-6xl text-gray-300 leading-none">”</div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col lg:w-full mt-10 flex-wrap">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Gallery</h3>
        <p className="text-sm text-gray-500 mb-4">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <div>
            <img src={galleryImage1} />
            <img src={galleryImage2} />
          </div>
          <div>
            <img src={galleryImage3} />
          </div>
          <div>
            <img src={galleryImage4} />
            <img src={galleryImage5} />
          </div>
        </div>

        <button className="text-sm text-[#d09b6e] font-semibold flex items-center mt-4">
          More <span className="ml-1 text-lg">&rarr;</span>
        </button>
      </div>
    </div>
  );
};

export default AboutAndGallerySection;
