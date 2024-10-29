import React from "react";
import logo from "../assets/footerLogo.png";
import logo2 from "../assets/footerBottomLogo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#d09b6e] py-16 text-white">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 space-y-8 lg:space-y-0">
          {/* Logo Section */}
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Logo" className="w-28 h-28" />
          </div>

          {/* Connect Section */}
          <div className="text-center lg:text-left space-y-4">
            <h2 className="text-2xl font-semibold">Let's Connect!</h2>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className="flex justify-center lg:justify-start">
              <input
                type="text"
                placeholder="Type your Email..."
                className="px-4 py-2 rounded-l-full text-gray-800 w-64 focus:outline-none"
              />
              <button className="bg-[#333] px-6 py-2 text-white rounded-r-full hover:bg-gray-800">
                Send
              </button>
            </div>
          </div>

          {/* Scroll Up Icon */}
          <div className="flex justify-center lg:justify-end">
            <button className="bg-white text-[#d09b6e] p-2 rounded-full shadow-lg focus:outline-none hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Footer Bottom Links */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 mt-8 mb-3">
        <p className="text-sm text-center lg:text-left text-black flex">
          Captcharts © 2023 Powered by{" "}
          <img src={logo2} alt="logo" className="ml-2 mb-2" />
        </p>
        <div className="flex space-x-6 mt-4 lg:mt-0 justify-center">
          <a href="#terms" className="text-sm text-black hover:underline">
            Terms
          </a>
          <a href="#privacy" className="text-sm text-black hover:underline">
            Privacy
          </a>
          <a href="#support" className="text-sm text-black hover:underline">
            Support
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
