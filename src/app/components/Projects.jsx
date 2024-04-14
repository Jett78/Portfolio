import React from "react";
import Card from "./Card";

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
  return (
    <main>
      <div className="text-center mt-8 grid justify-center" id="projects">
        <h2 className="text-3xl font-semibold text-gray-300 ">My Projects</h2>
        <p className="text-gray-400 mb-10">List of completed projects</p>
        <div className="flex flex-wrap justify-center gap-20 animate-slidein">
          {projectdata.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
