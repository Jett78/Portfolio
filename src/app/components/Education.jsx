"use client";
import React from "react";
import EducationCard from "./EducationCard";
import { motion } from "framer-motion";


const info = [
    {
        date:"2019-2024",
        name:"Bachelor in Information Management",
        college:"Tribhuwan University",
    },
    {
        date:"2017-2019",
        name:"Computer-Science",
        college:"DAV College,Lalitpur",
    },
]
const Education = () => {

  const EducationAnimation={
    initial:{opacity:0,x:40},
    animate:{opacity:1,x:0}
  }
  return (
    <main>
      <div>
        <motion.h2
         initial={{opacity:0}}
         whileInView={{opacity:1}}
        className="text-left sm:text-2xl text-xl font-bold py-4">Education</motion.h2>
        <motion.div 
         variants={EducationAnimation}
         initial="initial"
         whileInView="animate"
         viewport={{once:true,amount:0.5}}
         transition={{ease:"easeInOut",duration:1}}
        className=" border-2 border-blue-400 py-2 sm:px-10 px-4 max-w-[40rem] max-h-[26rem] rounded-xl ">
          {info.map((info,index) => (
          
              <EducationCard key={index} info={info}/>
            
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Education;
