import React from "react";

function WorkCards({ number, title }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="rounded-full p-3 border-[2px] border-[#022183]  w-20 h-20 flex items-center justify-center ">
        <span className="text-3xl lg:text-5xl font-normal">{number}</span>
      </div>
      <hr className="bg-[#0649E7] h-[2px] w-full my-4" />
      <h4 className="text-lg lg:text-xl font-medium text-[#0649E7] mb-2">
        {title}
      </h4>
    </div>
  );
}

function Work() {
  const stepsArr = [
    {
      number: "1",
      title: "Submit Intake Form",
    },
    {
      number: "2",
      title: "Get the most out of your consultation call",
    },
    {
      number: "3",
      title: "We optimize your job application materials",
    },
    {
      number: "4",
      title: "You get the interviews",
    },
  ];
  return (
    <div className="px-[2rem] lg:px-[180px] py-[70px]">
      <div className="container mx-auto">
        <h2 className="text-[#0649E7]  mb-12 text-2xl md:text-3xl lg:text-[2.5rem]">
          How we work?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stepsArr.map((step) => (
            <WorkCards
              key={step.number}
              number={step.number}
              title={step.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
