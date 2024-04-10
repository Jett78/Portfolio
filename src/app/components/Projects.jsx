import React from "react";
import Card from "./Card";

const projectdata = [
    {
        name:"Library Management System",  
    },
    {
        name:"Ecommerce-App",  
    },
    {
        name:"Recipe Search Hub",  
    },
]
const Projects = () => {
  return (
    <main>
      <div className="text-center mt-5 grid justify-center">
        <h2 className="text-3xl font-semibold text-gray-300">My Projects</h2>
        <p className="text-gray-400 mb-10">List of completed projects</p>
        <div className="flex flex-wrap justify-center gap-20">
               {projectdata.map((project,index) => (
                <Card key={index} project={project}/>
               ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
