import React from "react";
import Computer from "../assets/computer.png";
import { HiViewList, HiOutlineX } from "react-icons/hi";

function NavBar() {
  return (
    <div className="fixed w-full h-[5rem] flex justify-between items-center px-3 bg-[#264653] text-white">
      <div>
        <img src={Computer} alt="Logo" style={{ width: "50px" }} />
      </div>
        {/* MAIN NAVBAR MENU */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

        {/* DROPDOWN MENU */}
      <div className="md:hidden z-10">
        <HiViewList />
      </div>

        {/* MOBILE MENU */}
      <ul className="hidden absolute top-0 left-0 w-full h-screen flex flex-col-reverse bg-[#264653] text-white justify-center items-center">
        <li className="py-3 text-4xl">Home</li>
        <li className="py-3 text-4xl">About</li>
        <li className="py-3 text-4xl">Skills</li>
        <li className="py-3 text-4xl">Projects</li>
        <li className="py-3 text-4xl">Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
