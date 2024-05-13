"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";




const navdata = [
  {
    name:"Home",
    path:"#",
    icon:<FaHome />,

  },
  {
    name:"About",
    path:"#about",
    icon:<IoPersonSharp />,
  },
  {
    name:"Projects",
    path:"#projects",
    icon:<VscProject />,

  },
  {
    name:"Contact",
    path:"#contact",
    icon:<IoCall />,

  },
]

const Navbar = () => {

  const[isOpen,setIsOpen] = useState(false);
  return (
    <main>
      <div className="border-b-2 flex justify-between items-center px-10 py-4 fixed bg-black w-full z-10 ">
        <h2 className="text-2xl sm:text-3xl font-bold">Portfolio</h2>
        
        <nav className="list-none font-semibold text-gray-200">
          <ul className="sm:flex hidden items-center gap-10 ">
         {navdata.map((navdata,index) => (
            <Link key={index} href={navdata.path} className="hover:text-red-500 duration-300">{navdata.name}</Link>
          ))}
          </ul>
          <GiHamburgerMenu className="sm:hidden block"  onClick={() => setIsOpen(!isOpen)} />
        </nav>
      </div>
       

       {/* mobile view */}
       <div>
       <ul className={`fixed top-14 grid gap-8 justify-center text-center py-4 font-semibold bg-black w-full z-10 sm:hidden ${isOpen ? "block" : "hidden"}`} >
         {navdata.map((navdata,index) => (
            <Link key={index} href={navdata.path} className="hover:text-red-500">
              <div className="flex items-center gap-4 ">
              {navdata.icon}
              {navdata.name}
              </div>
              </Link>
          ))}
          </ul>
       </div>
    </main>
  );
};

export default Navbar;
