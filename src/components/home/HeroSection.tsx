"use client";

import { motion  } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContainerBox from "../layout/ContainerBox";
import { fadeIn, staggerChildren } from "@/utils/motion";
import './bg.css'; 
import { hero } from "@/assets";
import Image from "next/image";
import ScheduleButton from "../common/ScheduleButton";
import Link from "next/link";

export const HeroSection = () => {
  
  return (
    <div className=" pt-16 parent">
      <div className="magicpattern"/>
      <ContainerBox className="h-[65vh]">
      <div className="flex flex-col lg:flex-row items-start justify-between ">
        <div
          className="lg:w-1/2 mb-12 lg:mb-0"
        >
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
            variants={fadeIn}
          >
            Building stellar websites for early startups
          </motion.h1>
          <motion.p className="text-lg mb-8 text-gray-300" variants={fadeIn}>
            FlowenTech is a leading software agency specializing in creating high-performance, user-friendly websites for early-stage startups. 
          </motion.p>
          <motion.div className="flex space-x-4" variants={fadeIn}>
            <Link href="/contact-us" className="bg-gradient-to-r from-[#5454D4] to-tintblue border hover:bg-blue-300 cursor-pointer  text-white px-6 py-2 rounded-full  transition-colors">
              Contact Us
            </Link>
            <button className="flex items-center space-x-2 text-white hover:text-blue-300 transition-colors ">
              <ScheduleButton />
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
       
        <div
          className="lg:w-1/2 w-96"
        >
          <div className="relative h-96">
           <Image src={hero} alt="hero" width={500} height={500} className="absolute z-10 top-0"/>
           </div>
          <div className="relative ">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3"></div>
            <div className="relative bg-gray-800 p-6 rounded-lg shadow-xl ">
              <div className="flex space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContainerBox>
    </div>
  );
};
