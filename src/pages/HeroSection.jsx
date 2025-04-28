import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgArrowBottomLeft } from "react-icons/cg";

function HeroSection() {
  return (
    <div className='bg-[url("/Gradient.png")] bg-cover bg-no-repeat bg-center h-screen text-white'>
      <div className="flex justify-center items-center min-w-full min-h-full px-2.5 lg:px-[170px] py-[70px] ">
        <div className="flex flex-col  lg:flex-row gap-6 lg:gap-3 items-center justify-between w-full">
          <div className="w-full lg:w-[75%]">
            <h1 className="tracking-tight text-4xl md:text-5xl  lg:text-7xl">
              Land job interviews <br />
              <span className="text-[#0649E7]">10x</span> faster
            </h1>
            <p className="text-base lg:text-lg mt-4 mb-8 text-[#FEFEFE]">
              Custom-built resumes that match your goals, keywords, and
              recruiter expectations.
            </p>

            <button>
              <span className="flex items-center justify-center gap-2 bg-white px-6 py-4 rounded-full text-[#022183] hover:bg-[#022183] hover:text-white transition-colors cursor-pointer">
                Get Started <FaArrowRightLong />
              </span>
            </button>
          </div>

          <div className="w-full lg:w-[20%] flex justify-center lg:justify-end ">
            <div className="relative h-full">
              <img
                src="/GuideBook.png"
                alt="hero img"
                className="h-[220px] lg:min-h-[250px] w-auto aspect-auto"
              />

              <a
                href="https://drive.google.com/file/d/1v-LCTCc3yMW3gAGHXbrwNYs4C0C7oblf/view"
                target="_blank"
                className="group"
              >
                <div className="absolute -bottom-[25px] -right-[25px] ">
                  <div className="relative rounded-full backdrop-blur-sm p-4 border-[1px] ">
                    <img
                      src="/SmallBook.png"
                      alt="Book"
                      className="h-[50px] w-auto aspect-auto"
                    />
                    <div className="rounded-full bg-white absolute left-1.5 p-[6px]">
                      <CgArrowBottomLeft className="text-[#0649E7]" />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-[2.5rem] right-[30%] text-xs transition-all duration-100 group-hover:scale-[1.05]">
                  Download Free E-Book
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
