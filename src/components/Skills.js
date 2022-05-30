import React from "react";
import Github from "../assets/github.png";
import HTML from "../assets/html.png";
import JavaScript from "../assets/javascript.png";
import ReactIcon from "../assets/react.png";
import TailwindIcon from "../assets/tailwind.png";
import Ruby from "../assets/ruby.png";
import Rails from "../assets/rails.png";
import ReduxIcon from "../assets/redux.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#E9C46A]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center text-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-red-500">
            SKILLS
          </p>
          {/* SKILLS ICONS */}
          <p className="py-4 text-center text-3xl font-semibold">
            I HAVE A WORKING KNOWLEDGE OF:
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 text-center py-8 px-8 bg-[#E9C46A]">
          <div className="rounded-full hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML5 Icon" />
            <p className="text-center text-xl">HTML5</p>
          </div>
          <div className="rounded-full hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={TailwindIcon}
              alt="Tailwind Icon"
            />
            <p className="text-center text-xl">Tailwind CSS</p>
          </div>
          <div className="rounded-full hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactIcon} alt="React Icon" />
            <p className="text-center text-xl">React</p>
          </div>
          <div className="rounded-full hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReduxIcon} alt="Redux Icon" />
            <p className="text-center text-xl">Redux</p>
          </div>
          <div className="rounded-full hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="text-center text-xl">JavaScript</p>
          </div>
          <div className="rounded-full hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Ruby} alt="Ruby Icon" />
            <p className="text-center text-xl">Ruby</p>
          </div>
          <div className="rounded-full hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Rails} alt="Rails Icon" />
            <p className="text-center text-xl">Ruby on Rails</p>
          </div>
          <div className="rounded-full hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github Icon" />
            <p className="text-center text-xl">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
