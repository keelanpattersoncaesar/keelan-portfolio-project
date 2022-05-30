import React, { useState } from "react";
import NaleekIcon from "../assets/naleekicon.png";
import { HiViewList, HiOutlineX } from "react-icons/hi";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-scroll";
import resume from "../assets/keelanresume.pdf";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  // HANDLECLICK THAT TOGGLES NAVBAR FROM FALSE TO TRUE
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[5rem] flex justify-between items-center px-3 bg-[#264653] text-white z-30">
      <div>
        <img src={NaleekIcon} alt="Logo" style={{ width: "80px" }} />
      </div>
      {/* MAIN NAVBAR MENU */}
      <ul className="hidden md:flex">
        <li className="cursor-pointer px-2">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="cursor-pointer px-2">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="cursor-pointer px-2">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer px-2">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="cursor-pointer px-2">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        
        {/* RESUME DOWNLOAD LINK */}
        <li className="cursor-pointer px-2">
          <a className="cursor-pointer" href={resume} download>
            Download Resume
          </a>
        </li>
      </ul>

      {/* DROPDOWN MENU */}
      <div onClick={handleClick} className="md:hidden z-50">
        {/* CONDITIONAL THAT CHANGES ICON ON DROPDOWN MENU */}
        {!nav ? (
          <HiViewList className="cursor-pointer text-2xl" />
        ) : (
          <HiOutlineX className="cursor-pointer text-2xl" />
        )}
      </div>

      {/* MOBILE MENU */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen z-40 flex flex-col bg-[#264653] text-white justify-center items-center"
        }
      >
        <li className="py-3 text-4xl">
          <Link
            className="cursor-pointer"
            onClick={handleClick}
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="py-3 text-4xl">
          <Link
            className="cursor-pointer"
            onClick={handleClick}
            to="about"
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="py-3 text-4xl">
          <Link
            className="cursor-pointer"
            onClick={handleClick}
            to="skills"
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="py-3 text-4xl">
          <Link
            className="cursor-pointer"
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-3 text-4xl">
          <Link
            className="cursor-pointer"
            onClick={handleClick}
            to="contact"
            smooth={true}
            duration={500}
          >
            Contact
          </Link>

          {/* RESUME DOWNLOAD LINK */}
        </li>
        <li className="py-2 text-4xl">
          <a className="cursor-pointer" href={resume} download>
            Resume
          </a>
        </li>
      </ul>

      {/* SOCIAL ICONS WITH ANIMATION */}
      <div className="hidden md:flex fixed flex-col top-[40%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center cursor-pointer px-2 pl-4 ml-[-110px] hover:ml-[-10px] duration-500 bg-[#2A9D8F] ">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://www.linkedin.com/in/keelanpc/"
            >
              LinkedIn <BsLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center cursor-pointer px-2 pl-4 ml-[-110px] hover:ml-[-10px] duration-500 bg-[#F4A261]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="https://github.com/keelanpattersoncaesar"
            >
              Github <BsGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center cursor-pointer px-2 pl-4 ml-[-110px] hover:ml-[-10px] duration-500 bg-[#E76F51]">
            <a
              className="flex justify-between items-center w-full text-black"
              href="mailto: keelanpattersoncaesar@gmail.com"
            >
              Email <MdOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
