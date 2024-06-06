"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { VscProject } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { motion } from "framer-motion";



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

  const NavAnimate = {
    initial:{y:-60,
      opacity:0,
    },
    animate:(index)=>({
      y:0,
      opacity:1,
      transition:{
        delay:0.3 * index,
      }
    })
  }

  const[isOpen,setIsOpen] = useState(false);
  return (
    <main>
      <div className="border-b-2 flex justify-between items-center px-10 py-4 fixed bg-black w-full z-10 ">
        <motion.h2 
        initial={{y:-20,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:1}}
        className="text-2xl sm:text-3xl font-bold">Portfolio</motion.h2>
        <nav className="list-none font-semibold text-gray-200">
          <ul className="sm:flex hidden items-center gap-10 ">
         {navdata.map((navdata,index) => (
            <motion.div
            key={index}
            initial={{y:-20,opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:1,delay:0.3*index}}
           
            >
              <Link  href={navdata.path} className="hover:text-red-500 duration-300">{navdata.name}</Link>
            </motion.div>
          ))}
          </ul>
          <GiHamburgerMenu className="sm:hidden block"  onClick={() => setIsOpen(!isOpen)} />
        </nav>
      </div>
       

       {/* mobile view */}
       <div>
       <ul className={`fixed top-16 grid gap-8 justify-center text-center py-4 font-semibold bg-black w-full z-10 sm:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-[150%]'
        }`} >
         {navdata.map((navdata,index) => (
           <motion.div
           key={index}
           variants={NavAnimate}
           custom={index}
          initial="initial"
          whileInView="animate" 
          viewport={{once:true,amount:1}}
          transition={{ease:"easeInOut",duration:1}}
          >
             <Link  href={navdata.path} className="hover:text-red-500">
              <div className="flex items-center gap-4 ">
              {navdata.icon}
              {navdata.name}
              </div>
              </Link>
           </motion.div>
          ))}
          </ul>
       </div>
    </main>
  );
};

export default Navbar;
