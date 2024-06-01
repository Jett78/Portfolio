"use client"
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  
  const FormAnimation = {
    initial:{
      x:20,
      opacity:0,
    },
    animate:{
      x:0,
      opacity:1,
    }
  }


  return (
    <main className="bg-gray-900" id="contact">
      <div className="flex flex-wrap justify-center md:gap-10 p-4 ">
        <motion.section 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{ease:"easeInOut",duration:2}}
        className="max-w-[32rem]">
          <h2 className="font-bold sm:text-3xl text-2xl mb-5">Let's Connect</h2>
          <p className=" text-gray-400 sm:text-m text-sm">
            I'm currently looking for new opportunities,my inbox is always
            open.Whether you have any queries or just want to connect just leave
            a message I'll try my best to get back to you
          </p>
          <div className='flex gap-3 text-3xl md:my-6 my-4 '>
          <Link href ={"https://www.facebook.com/profile.php?id=100005027238835"} ><FaFacebook className=' text-blue-500 hover:text-4xl ease-in duration-300'/></Link>
            <Link href={"https://www.instagram.com/_jettt__/"}><FaInstagram className='text-red-400 hover:text-4xl ease-in duration-300'/></Link>
            <Link href={"https://github.com/Jett78"}><FaGithub className='hover:text-4xl ease-in duration-300'/></Link>
            <Link href={"https://www.linkedin.com/in/jeet-deula-32642624a/"}> <FaLinkedin className='text-blue-500 bg-white rounded-full p-0.5 hover:text-4xl ease-in-out duration-300'/></Link>
          </div>
        </motion.section>

        <motion.section 
        variants={FormAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{once:true,amount:0.2}}
        transition={{ease:"easeInOut",duration:0.5}}
        className="grid w-[40rem] p-2">
            <form action="https://formspree.io/f/xyyrbvyv" method="post">
                <label htmlFor="email">Your Email</label><br />
                <input type="email" name="email" placeholder="@gmail.com" className="bg-black border border-gray-500 p-3 mb-5 w-full rounded-xl" required/><br />
                <label htmlFor="message">Message</label><br />
                <textarea name="message" id="" cols="20" rows="8" placeholder="Let's talk about" className="bg-black border border-gray-500 p-4 mb-5 w-full rounded-xl" required></textarea><br />
                <button type="submit" className="bg-purple-600 w-full py-2 rounded-lg font-semibold">Send Message</button>
            </form>
        </motion.section>
      </div>
    </main>
  );
};

export default Contact;
