import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

import { FaArrowRight } from "react-icons/fa6";

const TestimonialCard = () => {
  return (
    <div className="w-[280px] h-full flex flex-col rounded-3xl border-[2px] border-[#0649E7] overflow-hidden">
      <div className="bg-white p-16 flex-1 flex items-center justify-center rounded-t-3xl">
        <button
          className="w-12 h-12 rounded-full bg-[#0649E7] flex items-center justify-center"
          aria-label="Play video"
        >
          <img src="/Polygon.png" alt="play button" />
        </button>
      </div>

      <div className="bg-[#0649E7] p-3 text-white">
        <p className="text-base lg:text-lg">
          Holly is a <span className="font-bold">senior executive</span> who got
          over <span className="font-bold">10 job interviews</span> and an offer
          she accepted
        </p>

        <div className="flex justify-end mt-2 ">
          <button
            className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-[#0649E7] transition-colors text-[#0649E7] hover:text-white"
            aria-label="Learn more"
          >
            <LuArrowUpRight className="h-[1em] w-[1em]" />
          </button>
        </div>
      </div>
    </div>
  );
};

function Testimonial() {
  const testimonials = [
    {
      id: 1,
      quote:
        "This is a sample testimonial and got me a job in 20 days. The team helped me completely transform my resume.",
      author: "John D.",
      position: "Software Engineer",
    },
    {
      id: 2,
      quote:
        "A sample testimonial got me a job in less than a month. I can't believe how effective the resume makeover was.",
      author: "Sarah M.",
      position: "Marketing Manager",
    },
    {
      id: 3,
      quote:
        "This sample testimonial shows how I landed multiple interviews after using this service. Worth every penny.",
      author: "Michael R.",
      position: "Financial Analyst",
    },
  ];
  return (
    <section className=" bg-gray-50" id="testimonials">
      <div className="container mx-auto px-[2rem] lg:px-[180px] py-[70px]">
        <h2 className="text-[#0649E7] mb-12 text-2xl md:text-3xl lg:text-[2.5rem]">
          What our clients have to say
        </h2>
        <div className="flex flex-wrap gap-7 lg:gap-8 justify-center">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
            />
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-7 md:gap-12 justify-center items-center mt-10  ">
          <button
            variant="outline"
            className="border-[2px] border-[#0649E7] rounded-full px-6 py-4"
          >
            <span className="flex items-center gap-2 text-[#0649E7]">
              View customer testimonials{" "}
              <LuArrowUpRight className="h-[1em] w-[1em]" />
            </span>
          </button>
          <button
            variant="primary"
            className="px-6 py-4 bg-[#0649E7] text-white rounded-full"
          >
            <span className="flex items-center gap-2">
              Get Started <FaArrowRight className="w-[1em] h-[1em]" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
