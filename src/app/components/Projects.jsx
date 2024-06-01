"use client"
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const projectdata = [
  {
    name: "Library Management System",
    img: "./library.png",
    gitUrl: "https://github.com/Jett78/Library-Management-System/tree/main/LMS",
    preview: "#",
  },
  {
    name: "Music School Webpage",
    img: "./music.png",
    gitUrl: "https://github.com/Jett78/musicnextjs",
    preview: "https://musicnextjs-eight.vercel.app/",
  },

  {
    name: "Ecommerce",
    img: "./ecom.png",
    gitUrl: "https://github.com/Jett78/Ecommerce",
    preview: "https://ecommerce-liard-nu-20.vercel.app/",
  },
  {
    name: "Recipe Search Hub",
    img: "./recipe.png",
    gitUrl: "https://github.com/Jett78/Recipe_App",
    preview: "https://recipehubs.netlify.app/",
  },
  {
    name: "Portfolio",
    img: "./portfolio.png",
    gitUrl: "https://github.com/Jett78/Portfolio",
    preview: "https://portfolio-sable-pi-66.vercel.app/",
  },
];
const Projects = () => {

  const ProjectAnimation = {
    initial:{
      y:10,
      opacity:0,
    },
    animate:(index)=>({
      y:0,
      opacity:1,
      transition:{
        delay:0.5*index
      }
    })
  }
  
  return (
    <main id="projects" >
      <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#aaaaaa33_1px,#00091d47_1px)] bg-[size:20px_20px]"></div>
      <div className=" max-w-[1300px] xl:mx-auto mx-4 text-center  grid justify-center md:py-10 py-8" >
        <h2 className="sm:text-3xl text-2xl font-semibold text-gray-300">My Projects</h2>
        <p className="text-gray-400 mb-10 pb-4 border-b">List of completed projects</p>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-left gap-10 animate-slidein">
          {projectdata.map((project, index) => (
            <motion.div 
            key={index}
            variants={ProjectAnimation}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{once:true,amount:0.2}}
            >
               <Card  project={project} />
            </motion.div>
           
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
