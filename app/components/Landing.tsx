"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo1 from "../../public/logo.png";
import { FaSteam, FaXbox, FaPlaystation } from "react-icons/fa";
import "../globals.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLine } from "react-icons/ri";
const Landing = () => {
  const [toggle, setToggle] = useState(false);
  const [hamburger, setHamburger] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
    setHamburger((prevState) => !prevState);
  };
  const handleHamburger = () => {
    setHamburger((prevState) => !prevState);
    if (hamburger === false) {
      console.log("False");
    } else {
      console.log("true");
    }
  };
  return (
    <div className=" w-screen   text-white ">
      <div className="hidden md:block">
        <div className="p-4 flex  items-center  justify-between">
          <div className="ml-10">
            <Image src={Logo1} className="w-32 " alt="boardman" />
          </div>
          <div className="mx-auto text-center">
            <ul className="flex gap-4">
              <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">
                Home
              </li>
              <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">
                About
              </li>
              <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">
                Testimonial
              </li>
              <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">
                Gallery
              </li>
              <li className="hover:text-[#bd3c00] cursor-pointer duration-400 transition-all">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex text-3xl gap-3 mr-10">
            <FaSteam className="hover:text-[#bd3c00] cursor-pointer duration-300 transition-all ease-in-out delay-300" />
            <FaXbox className="hover:text-[#bd3c00] cursor-pointer duration-300 transition-all ease-in-out delay-300" />
            <FaPlaystation className="hover:text-[#bd3c00] cursor-pointer duration-300 transition-all ease-in-out delay-300" />
          </div>
        </div>
        {/* Small Screen */}
      </div>
      <div className={`flex md:hidden justify-between ${toggle&& 'bg-[#bd3c00] transition-all ease-in-out duration-500 delay-200'} `}>
        {!toggle && <Image src={Logo1} className="w-40 " alt="boardman" />}
        {toggle && (
          <div className="flex flex-col ">
            <div className="flex items-center p-2">
              <Image src={Logo1} className="w-32 " alt="boardman" />
              <div className="flex  text-3xl gap-3 mx-3 ">
                <FaSteam className="hover:text-[#101833] cursor-pointer duration-300 transition-all ease-in-out delay-300" />
                <FaXbox className="hover:text-[#101833] cursor-pointer duration-300 transition-all ease-in-out delay-300" />
                <FaPlaystation className="hover:text-[#101833] cursor-pointer duration-300 transition-all ease-in-out delay-300" />
              </div>
            </div>

            <div className="">
              <div className=" mx-2 text-left">
                <ul className="flex gap-4 flex-col p-4">
                  <li className="hover:text-[#101833] cursor-pointer duration-400 transition-all">
                    Home
                  </li>
                  <li className="hover:text-[#101833] cursor-pointer duration-400 transition-all">
                    About
                  </li>
                  <li className="hover:text-[#101833] cursor-pointer duration-400 transition-all">
                    Testimonial
                  </li>
                  <li className="hover:text-[#101833] cursor-pointer duration-400 transition-all">
                    Gallery
                  </li>
                  <li className="hover:text-[#101833] cursor-pointer duration-400 transition-all">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className="  cursor-pointer text-xl">
          <button onClick={handleToggle}>
            {hamburger ? <RiCloseLine className={`${toggle && 'rotate-180'} m-8 transition-all ease-in-out duration-300`}  /> : <RxHamburgerMenu  className="m-8 transition-all text-[#bd3c00] ease-in-out duration-300 delay-300"/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
