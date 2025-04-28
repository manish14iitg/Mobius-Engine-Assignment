import React from "react";

const ChooseUsCard = ({ title, description, image }) => {
  return (
    <div className="border border-[#022183] rounded-3xl p-8 bg-white">
      <div className="mb-8">
        <img src={image} alt="title" />
      </div>
      <h3 className="text-[#022183] font-semibold text-xl mb-4">{title}</h3>
      <p className="text-[#022183] text-base lg:text-lg">{description}</p>
    </div>
  );
};

function ChooseUs() {
  const ChooseUsData = [
    {
      title: "Tried, Tested, Trusted",
      description:
        "Built by folks with 40+ years in tech and hiring we know the game, and we've got your back.",
      image: "/Love.png",
    },
    {
      title: "Real People, Real Help",
      description:
        "A hands-on team that actually cares guiding you through every twist in your career path.",
      image: "/Profile.png",
    },
    {
      title: "Beat the Line",
      description:
        "We search, shortlist, and apply for you, so your name shows up first every single day.",
      image: "/Star.png",
    },
  ];
  return (
    <div className="bg-[#F8FAFF]   mx-[1rem] lg:mx-[90px] px-[1em] lg:px-[90px] py-[70px] rounded-4xl  ">
      <div className="  ">
        <h2 className="text-[#022183] mb-12 text-2xl md:text-3xl lg:text-[2.5rem]">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ChooseUsData.map((feature, index) => (
            <ChooseUsCard
              key={index}
              title={feature.title}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
