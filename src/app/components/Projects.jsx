import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <main>
      <div className="text-center mt-5 grid justify-center">
        <h2 className="text-3xl font-semibold text-gray-300">My Projects</h2>
        <p className="text-gray-400 mb-10">List of completed projects</p>
        <div className="flex flex-wrap justify-center gap-20">
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </main>
  );
};

export default Projects;
