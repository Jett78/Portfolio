"use client"
import React,{useEffect} from "react";
import Card from "./Card";
import AOS from "aos";
import "aos/dist/aos.css";

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
];
const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <main id="projects" data-aos="fade-right" >
      <div className=" max-w-[1300px] xl:mx-auto mx-4 text-center  grid justify-center md:py-10 pt-8" >
        <h2 className="sm:text-3xl text-2xl font-semibold text-gray-300" data-aos="fade-right" data-aos-anchor-placement="top-center">My Projects</h2>
        <p className="text-gray-400 mb-10 pb-4 border-b" data-aos="fade-right" data-aos-anchor-placement="top-center">List of completed projects</p>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-left gap-10 animate-slidein" data-aos="fade-right" data-aos-anchor-placement="top-center">
          {projectdata.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
