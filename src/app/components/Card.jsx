import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

const Card = ({ project }) => {
  const { name, img, gitUrl, preview } = project;
  return (
    <main>
      <section className=" bg-neutral-900 rounded-lg grid justify-center text-left max-w-[60rem] mx-2  ">
        <div>
          <Link href={preview}><img src={img} alt="card" className="w-80 h-[15rem] rounded-lg hover:brightness-50  ease-in-out duration-300 cursor-pointer " /></Link>
        </div>

        <div className="py-2 px-4">
          <h2 className="text-xl font-semibold my-2">{name}</h2>
          <div className=" flex justify-end gap-5 text-4xl">
            <Link href={gitUrl}>
              <FaCode className="cursor-pointer border-2 rounded-full p-1 opacity-40 hover:opacity-100 ease-in-out duration-300" />
            </Link>
            <Link href={preview}>
              <FaEye className="cursor-pointer border-2 rounded-full p-1 opacity-40 hover:opacity-100 ease-in-out duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Card;
