import React from "react";
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Card = ({ project }) => {
  const { name, img, gitUrl, preview } = project;
  return (
    <main>
      <section className=" bg-neutral-900 rounded-lg grid justify-center text-left max-w-[60rem] p-2   ">
        <div>
          <Link href={preview}>
            <img src={img} alt="card" className="w-80 h-[15rem] rounded-lg hover:brightness-50  ease-in-out duration-300 cursor-pointer " /></Link>
        </div>

        <div className="py-1 px-4">
          <h2 className="sm:text-l font-semibold my-2">{name}</h2>
          <div className=" flex justify-center gap-5 text-4xl">
            <Link href={gitUrl}>
              <div className=" flex items-center gap-2 px-3 rounded-lg bg-zinc-600 hover:bg-zinc-500 duration-300 text-md">
              <FaGithub className="text-[20px]" />
              <p className="text-[14px]">Github</p>
              </div>
            </Link>
            <Link href={preview}>
              <div className=" flex items-center gap-2 px-3 rounded-lg bg-green-700 hover:bg-green-600 text-md">
              <FaEye className="text-[20px]" />
              <p className="text-[14px]">Demo</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Card;
