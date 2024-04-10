import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Card = ({ project }) => {
  return (
    <main>
      <section className=" bg-neutral-900 grid justify-center text-left max-w-[60rem] mx-2 ">
        <div>
          <img src="./avatar.png" alt="card" className="max-h-80 w-[25rem] rounded-lg " />
        </div>

        <div className="py-1 px-4">
          <h2 className="text-xl font-semibold my-2">{project.name}</h2>
          <div className=" flex justify-end gap-5 text-4xl">
            <FaCode className="cursor-pointer border-2 rounded-full p-1 opacity-40 hover:opacity-100 ease-in-out duration-300" />
            <FaEye className="cursor-pointer border-2 rounded-full p-1 opacity-40 hover:opacity-100 ease-in-out duration-300" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Card;
