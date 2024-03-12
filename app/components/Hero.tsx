'use client'
import React, { useRef, useEffect } from 'react';
import styles from './ProductCard.module.css';
import hero from '../../public/Rectangle 28.png';
import hero1 from '../../public/Rectangle.png';
import carousel from '../../public/Frame 29.png';
import Image from 'next/image';
import { GiPistolGun } from 'react-icons/gi';
import { IoGameController } from 'react-icons/io5';

const Hero = () => {
  const carouselRef = useRef(null);





  const date = new Date();
  const year = date.getFullYear();
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <div className="">
      <div className="flex justify-center items-center mt-20 my-20">
        <div className="relative flex items-center justify-center">
          <Image src={hero1} alt="hero1" className="w-1/2" />
          <Image src={hero} alt="hero1" className="w-[44%] absolute -z-10" />
          <h1 className="absolute uppercase text-xl text-white md:text-5xl font-bold blend-multiply z-40">
            Your Boardman is Here
          </h1>
        </div>
      </div>

      <div className="flex items-center ">
        <div className="w-1/2 flex justify-center mt-8 mx-auto items-center ">
          <label className=" flex items-center gap-2 w-full relative overflow-hidden ">
            <button className="bg-[#D25010] rounded-full text-white  px-3 h-8 absolute right-3 hover:bg-[#f0824b] text-xs md:text-lg transition-all ease-in-out duration-400">
              Join Waitlist
            </button>
            <input
              type="email"
              className="grow bg-white h-12 rounded-full p-3  focus:rounded-none transition-all placeholder:text-xs md:placeholder: ease-in-out duration-400 delay-300 text-blue-900  placeholder-gray-400 placeholder-opacity-75"
              placeholder="Enter Your Email Address"
            />
          </label>
        </div>
        <h1 className="text-center text-xl text-white rounded-md bg-[#bd3c00] px-4 mr-4 mt-8"> {day}. {month} <br/> {year} </h1>
      </div>
      <div className="flex md:flex-row flex-col items-center justify-center text-white text-[10rem] my-10">
        <div className="h-64 w-full flex items-center justify-center bg-[#94431B]">
          <GiPistolGun />
        </div>
        <div className="h-64 w-full flex items-center justify-center bg-[#620128]">
          <IoGameController />
        </div>
      </div>
      <div className="carousel rounded-box flex gap-6 my-10" ref={carouselRef}>
        <div className="carousel-item">
          <Image src={carousel} alt="Burger" />
        </div>
        <div className="carousel-item">
          <Image src={carousel} alt="Burger" />
        </div>
        <div className="carousel-item">
          <Image src={carousel} alt="Burger" />
        </div>
        <div className="carousel-item">
          <Image src={carousel} alt="Burger" />
        </div>
        <div className="carousel-item">
          <Image src={carousel} alt="Burger" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
