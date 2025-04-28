import React from "react";

function NavBar() {
  return (
    <div className="w-full text-white bg-transparent backdrop-blur-sm fixed py-4">
      <div className="flex justify-between items-center px-[2rem] min-w-full container lg:px-[5rem]">
        {/* 3 elements -> logo, main navbar, get started */}
        <a href="/" className="flex items-center">
          <img src="/Logo.png" alt="logo" className="h-8" />
        </a>

        <div className="hidden lg:flex space-x-6">
          <a href="/" className="hover:text-blue-300 hover:cursor-pointer">
            Home
          </a>
          <a href="#about" className="hover:text-blue-300 hover:cursor-pointer">
            About Us
          </a>
          <a href="#plans" className="hover:text-blue-300 hover:cursor-pointer">
            Plans
          </a>
          <a
            href="#testimonials"
            className="hover:text-blue-300 hover:cursor-pointer"
          >
            Testimonials
          </a>
          <a
            href="#privacy"
            className="hover:text-blue-300 hover:cursor-pointer"
          >
            Privacy Policy
          </a>
          <a
            href="#privacy"
            className="hover:text-blue-300 hover:cursor-pointer"
          >
            More
          </a>
        </div>

        <a
          href="#sign-up"
          className="hidden lg:block bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-[#022183] hover:text-white transition-colors"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default NavBar;
