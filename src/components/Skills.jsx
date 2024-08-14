import React from "react";

import html from "/html5.svg"
import css from "/css3.svg"
import javascript from "/javascript.svg"
import mongo from "/mongo.svg"
import react from "/react.svg"
import nodejs from "/nodejs.svg"
import linux from "/linux.svg"
import cpp from "/cpp.svg"
import python from "/python.svg"
import tailwind from "/tailwind.svg"
import bootstrap from "/bootstrap.svg"

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 5,
      logo: react,
      name: "React",
    },
    {
      id: 6,
      logo: nodejs,
      name: "Node.js",
    },
    {
      id: 7,
      logo: tailwind,
      name: "Tailwind CSS",
    },
    {
      id: 8,
      logo: bootstrap,
      name: "Bootstrap",
    },
    {
      id: 9,
      logo: cpp,
      name: "C++",
    },
    {
      id: 10,
      logo: python,
      name: "Python",
    },
    {
      id: 11,
      logo: linux,
      name: "Linux",
    },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">My Skills</h1>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[150px] md:h-[150px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[87px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;