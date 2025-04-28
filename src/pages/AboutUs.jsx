import React from "react";

import { LuArrowUpRight } from "react-icons/lu";

const MemberCard = ({ image, name, description, linkedinUrl }) => {
  return (
    <div className="flex flex-col  md:flex-row justify-center items-center gap-10 text-white max-w-[900px] mx-auto">
      <div className="flex-shrink-0  mb-4 md:mb-0">
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <img
            src={image}
            alt={name}
            className="h-[250px] w-auto object-cover bg-white rounded-full border-0"
          />
          <div className="absolute right-1 rounded-full bottom-1 backdrop-blur-md p-4 border-[1px] border-[#FEFEFE] transition-all duration-200 group-hover:scale-[1.05] ">
            <img
              src="/linkedin-icon.png"
              alt="linkedin-icon"
              className="h-[45px] w-auto aspect-auto"
            />
          </div>
        </a>
      </div>
      <div className="md:ml-6 flex-grow">
        <p className="mt-3 text-[#FEFEFE] text-base lg:text-lg">
          <strong>{description.split(" ")[0] + " "}</strong>
          {description
            .split(" ")
            .slice(1)
            .join(" ")
            .split("\n")
            .map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
        </p>
      </div>
    </div>
  );
};

function AboutUs() {
  const Members = [
    {
      id: 1,
      image: "/ashwin.png",
      name: "Ashwin",
      title: "Co-founder of InterviewSight",
      description:
        "Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.\n \n Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.",
      linkedinUrl: "https://www.linkedin.com/in/agrawalashwin",
    },
    {
      id: 2,
      image: "/Nicole.png",
      name: "Nicole",
      title: "Career specialist at InterviewSight",
      description:
        "Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.\n \n With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.",
      linkedinUrl: "https://www.linkedin.com/in/nicole-lau-01414517/",
    },
  ];
  return (
    <div
      className='bg-[url("/AboutUsGradient.png")] bg-cover bg-no-repeat h-max'
      id="about"
    >
      <div className="container mx-auto  px-[2rem] lg:px-[180px]  py-[70px]">
        <h2 className="text-white  mb-12 text-2xl md:text-3xl lg:text-[2.5rem]">
          About Us
        </h2>
        <div className="flex flex-col gap-12">
          {Members.map((member) => (
            <MemberCard
              key={member.id}
              image={member.image}
              name={member.name}
              description={member.description}
              linkedinUrl={member.linkedinUrl}
            />
          ))}
        </div>
        <div className="w-full pt-14 flex flex-col gap-6 md:pl-[50%] lg:pl-[35%]">
          <a href="/" className="flex gap-3 items-center">
            <p className="font-medium text-[#FEFEFE] text-base lg:text-lg">
              Learn more about our Board of Advisors​
            </p>

            <LuArrowUpRight className="text-[#FFFFFF] h-3 w-auto" />
          </a>
          <a href="/" className="flex gap-3 items-center ">
            <p className="text-white text-lg">Follow us on our Linkedin page</p>
            <LuArrowUpRight className="text-[#FFFFFF] h-3 w-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
