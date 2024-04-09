import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const HeroSection = () => {
  return (
    <main>
      <div className='flex flex-wrap justify-center items-center lg:gap-40 gap-8 lg:p-20 p-10 min-h-screen'>
        <section>
          <h2 className='lg:text-7xl md:text-5xl text-2xl font-semibold'>Hello I'm</h2>
          <h2 className='lg:text-7xl md:text-6xl text-3xl font-bold text-red-500'>Frontend Developer</h2>
          <div className='flex gap-3 text-3xl md:my-6 my-4 '>
            <FaFacebook/>
            <FaInstagram/>
            <FaGithub/>
            <FaLinkedin/>
          </div>
          <div className='flex gap-4'>
            <button className='border-2 h-10 w-40 rounded-2xl'>Download CV</button>
            <button className='bg-red-600 h-10 w-20 rounded-2xl'>Hire Me</button>
          </div>
        </section>
        <section>
          <img src="./avatar.png" alt="avatar" className='max-h-[23rem] rounded-full' />
        </section>
      </div>
    </main>
  )
}

export default HeroSection