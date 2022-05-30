import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import Keelan from "../assets/KeelanProfile.jpg";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#E9C46A]">
      {/* revisit padding on this div ALSO maybe add an image here*/}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex flex-col h-5 w-full mb-[150px] ml-[600px]">
          <img className="rounded-full" src={Keelan} alt="Keelan" />
        </div>
        <p className="text-black">Hello, my name is...</p>
        <h1 className="text-5xl sm:text-7xl font-bold text-[#264653] max-w-[700px]">
          Keelan Patterson Caesar Sr.
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-gray-500 text-xl pt-4 max-w-[700px]">
          I have a passion for learning and creating.
        </p>
        <p className="text-gray-500 text-xl max-w-[700px]">
          I'm currently looking for a full time position.
        </p>
        <p className="text-gray-500 text-xl max-w-[700px]">
          Veteran. Musician. Student.
        </p>

        {/* BUTTON THAT LEADS TO PROJECTS */}
        <div className="pt-4">
          <Link to="projects" smooth={true} duration={500}>
            <button className="group text-white border-2 px-3 py-2 flex items-center bg-[#E76F51] hover:bg-[#EE9882] hover:text-black hover:border-[#E76F51]">
              See My Work
              <span className="group-hover:rotate-90 duration-200">
                <RiArrowRightSLine className="ml-1 text-2xl" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
