"use client";
import React from "react";
import EducationCard from "./EducationCard";



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
  return (
    <main>
      <div>
        <h2 className="text-left text-2xl font-bold py-4  ">Education</h2>
        <div className=" border-2 border-blue-400 py-2 sm:px-10 px-4 max-w-[40rem] max-h-[26rem] rounded-xl ">
          {info.map((info,index) => (
            <EducationCard key={index} info={info}/>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Education;
