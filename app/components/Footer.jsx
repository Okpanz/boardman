"use client";
import React from "react";
import { FaSquareXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import Logo1 from "../../public/logo.png";
import Image from "next/image";

const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div className="text-white  ">
      <div className="flex justify-between md:flex-row flex-col">
        <ul className="flex md:gap-4 flex-col md:flex-row mx-auto text-center md:text-end  md:mx-4">
          <li>About</li>
          <li>Testimonial</li>
          <li>Gallery</li>
          <li>Our Communities</li>
          <li>Partner With Us</li>
        </ul>
        <div className="justify-end mx-6">
          <p className="flex justify-center">Join the Conversation</p>
          <div className="flex justify-evenly">
            <FaSquareXTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaTwitch />
          </div>
        </div>
      </div>
      <div className="bg-[#0A1437] flex flex-col md:flex-row gap-3 px-3 items-center justify-between ">
        <Image src={Logo1} className="p-8 md:w-auto w-36 " />
        <div className="flex md:gap-4 ">
          <ul className="flex gap-4">
            <li>Game</li>
            <li>Library</li>
            <li>Join Waitlist</li>
            <li> Boardman games</li>
            <li> Accessibility</li>
            <li> Help</li>
          </ul>
         
        </div>
        <div className="mx-5 ">
            <select className="select select-primary md:w-full w-screen max-w-xs ml-auto mx-4">
              <option disabled selected>
                Language
              </option>
              <option>English (USA)</option>
              <option>Afrikans</option>
              <option>English (UK)</option>
              <option>Spanish</option>
              <option>French</option>
              {/* <option>French</option> */}
            </select>
          </div>
      </div>
      <div className=" mx-auto font-extralight text-sm px-2  md:w-[50%] my-20">
        <ul className="flex justify-left gap-6 my-2 mx-auto ">
          <li>Legal & Privacy</li>
          <li>User Agreement</li>
          <li>Policy & Cookie Policy (Your privacy rights)</li> 
        </ul>
        <ul className="flex justify-left gap-6 my-2 mx-auto ">
          <li>Online Service Updates</li>
          <li>Security</li>
          <li>Cookie Preferences</li>
        </ul>
        <div className="w-[45.3%] m flex justify-start">
          <h1>&copy; {year} Boardman</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
