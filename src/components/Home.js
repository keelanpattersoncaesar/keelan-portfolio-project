import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#E9C46A]">
      {/* revisit padding on this div */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-black">Hello, my name is...</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#264653] max-w-[700px]">
          Keelan Patterson Caesar Sr.
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-gray-500 text-2xl py-4 max-w-[700px]">
          <p>IT Professional.</p>
          <p>Veteran.</p>
          <p>Student.</p>
        </p>
        <div>
          <button className="group text-white border-2 px-3 py-2 flex items-center bg-[#E76F51] hover:bg-[#EE9882] hover:text-black hover:border-[#E76F51]">
            See My Work
            <span className="group-hover:rotate-90 duration-200">
              <RiArrowRightSLine className="ml-1 text-2xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
