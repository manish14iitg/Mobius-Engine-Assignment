import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const PricingCard = ({
  title,
  subHeading = "",
  price,
  period = "month",
  features,
  popular = false,
  buttonText = "Get Started",
}) => {
  return (
    <>
      {title !== "Advance" ? (
        <div className="border-[2px] mx-auto md:mx-0 col-span-3 md:col-span-1 border-[#0649E7] rounded-3xl p-6 bg-white sm:max-w-[400px] min-h-[682px] flex flex-col">
          <div className="text-[#0649E7] flex-1 flex flex-col bg-white">
            <div className="flex justify-between">
              <div className="flex flex-col gap-3 mb-8">
                <h3 className="text-3xl font-bold ">{title}</h3>
                {subHeading !== "" && (
                  <h4 className="text-base lg:text-lg font-medium tracking-tight ">
                    {subHeading}
                  </h4>
                )}
              </div>
              {popular && (
                <div className="bg-[#EBF1FF] text-[#0649E7] border-[1px] border-[#0649E7] h-fit text-center py-1 px-2 text-sm font-medium rounded-full">
                  Popular
                </div>
              )}
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold">${price}</span>
              <span className="text-[#0649E7] text-2xl">{period}</span>
            </div>
            <hr className="w-full border-t border-gray-300 mb-6" />

            <ul className="space-y-4 mb-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <img
                    src="/Check.png"
                    alt="check"
                    className="h-[1em] w-[1em] aspect-auto  mt-[2px] mr-1.5"
                  />
                  <span className="text-[#0649E7] font-dm-sans text-base lg:text-lg font-medium tracking-tight leading-[1.08] ">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4">
              <button className="w-fit bg-[#0649E7] text-white hover:bg-blue-700 focus:ring-blue-500 rounded-full px-6 py-4">
                <span className="flex items-center gap-2">
                  {buttonText}
                  <FaArrowRight className="w-[1em] h-[1em]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="border-[2px] border-[#0649E7] col-span-3 h-fit bg-[#0649E7] rounded-3xl p-6  flex flex-col">
          <div className="text-white  ">
            <div className="flex flex-row justify-between">
              {/*title*/}
              <div className="flex flex-col gap-3 mb-8">
                <h3 className="text-3xl font-bold">{title}</h3>
                <h4 className="font-semibold text-lg">
                  Top-tier support for serious job hunters:
                </h4>
              </div>
              {/*price & duration */}
              <div className="mb-8">
                <span className="text-5xl font-bold">${price}</span>
                <span className="text-white text-2xl">/{period}</span>
              </div>
            </div>
            <hr className="w-full border-t border-gray-300 mb-6" />
            <div className="flex justify-between items-end">
              <ul className="space-y-3 ">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <img
                      src="Check.png"
                      alt="check"
                      className="h-[1em] w-[1em] aspect-auto mt-[2px] mr-1.5"
                    />
                    <span className="text-white font-medium text-base lg:text-lg  font-dm-sans  tracking-tight leading-[1.08]">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className="w-fit h-fit bg-white text-[#022183]  focus:ring-blue-500 rounded-full px-6 py-4">
                <span className="flex items-center gap-2">
                  {buttonText}
                  <FaArrowRight className="w-[1em] h-[1em]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PricingCard;
