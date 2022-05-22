import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="relative">
      <div className="bg-[#E9C46A] flex justify-center content-center items-center text-xl space-x-3">
        <BsLinkedin size={30} className="cursor-pointer"/> 
        <BsGithub size={30} className="cursor-pointer"/>
        <GrDocumentPdf size={30} className="cursor-pointer"/>
      </div>
    </div>
  );
}

export default Footer;
