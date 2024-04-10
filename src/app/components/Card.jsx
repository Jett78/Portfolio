import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Card = ({ project }) => {
  return (
    <main>
      <section className="grid justify-center items-center border rounded-xl w-fit p-3">
        <div className="relative">
          <img src="./avatar.png" alt="card" className="max-h-80 " />
          <div className=" flex  gap-5 absolute top-[8rem] left-[5rem] text-6xl opacity-0 hover:opacity-100 ease-in-out duration-300">
            <FaCode className="cursor-pointer border-2 rounded-full p-1" />
            <FaEye className="cursor-pointer border-2 rounded-full p-1" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold my-2">{project.name}</h2>
          <p className="w-80 text-gray-400 text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            incidunt delectus optio quod, aperiam voluptatem blanditiis,
            asperiores accusantium amet ratione sed quo itaque tenetur corrupti
            facere. Iusto esse doloribus nam?
          </p>
        </div>
      </section>
    </main>
  );
};

export default Card;
