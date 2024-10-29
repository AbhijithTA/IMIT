import React from 'react';
import AboutUsImage from "../assets/AboutUs.png";

const AboutSection = () => {
  return (
    <section className="p-10 md:px-20 lg:px-32 bg-gray-100 text-gray-800">
      {/* Title Section */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-semibold">
          About{' '}
          <span className="text-red-500 bg-red-100 px-2 py-1 rounded">
            Captcharts
          </span>
        </h2>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto text-lg leading-relaxed space-y-6">
        <p>
          Welcome to the world of limitless creativity and boundless possibilities! Imagine a photography camp
          where the shutter captures not just moments, but the spirit of determination and resilience. We are
          thrilled to present a unique experience tailored for students with determination, where the focus is
          not just on framing a shot, but on framing a brighter future.
        </p>
        <p>
          In the heart of this camp, we celebrate the power of visual storytelling as a means of empowerment.
          Our goal is to provide a supportive and inclusive environment for young photographers who navigate
          the world with determination. Through the lens of a camera, we embark on a journey that transcends
          barriers and amplifies the voices that often go unheard.
        </p>

        {/* Image */}
        <div className="mt-8 flex justify-center">
          <img
            src={AboutUsImage}
            alt="About Us"
            className="w-full max-w-lg border-4 border-blue-400 rounded-lg shadow-lg"
          />
        </div>

        <p>
          This camp isn't just about technical skills. It's about unlocking individual potential, fostering
          self-expression, and building a community where everyone’s unique perspective is not only welcomed
          but celebrated. This isn't just a photography camp; it's a kaleidoscope of inspiration, where each
          participant adds their own vibrant hue to the canvas of creativity. So, whether you’re a novice or a
          seasoned photographer, come join us in capturing the extraordinary essence of determination through
          the lens of your camera. Let's embark on a journey where every snapshot is a testament to the wilful
          spirit within us all.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
