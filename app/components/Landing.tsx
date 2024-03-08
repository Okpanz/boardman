"use client";
import React from "react";
import Image from "next/image";
import Logo1 from "../../public/logo.png";

import { FaSteam, FaXbox, FaPlaystation } from "react-icons/fa";
import '../globals.css'
const Landing = () => {

  return (
    <div className=" w-screen   text-white">
      <div className="p-4 flex  items-center justify-between">
        <div className="ml-10">
          <Image src={Logo1} className="w-32 " alt="boardman" />
        </div>
        <div className="mx-auto text-center">
          <ul className="flex gap-4">
            <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">Home</li>
            <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">About</li>
            <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">Testimonial</li>
            <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">Gallery</li>
            <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">Contact</li>
          </ul>
        </div>
        <div className="flex text-3xl gap-3 mr-10">
          <FaSteam className="hover:text-[#bd3c00] cursor-pointer duration-300 transition-all ease-in-out delay-300"/>
          <FaXbox className="hover:text-[#bd3c00] cursor-pointer duration-300 transition-all ease-in-out delay-300"/>
          <FaPlaystation className="hover:text-[#bd3c00] cursor-pointer duration-300 transition-all ease-in-out delay-300"/>
        </div>
      </div>
     
</div>
  );
};

export default Landing;
