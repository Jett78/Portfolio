import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const HeroSection = () => {
  return (
    <main>
      <div className='flex flex-wrap justify-center items-center lg:gap-40 gap-8 lg:p-20 p-10'>

        <section>
          <h2 className='lg:text-3xl md:text-3xl text-xl font-semibold text-gray-200'>Hello It's Me</h2>
          <h2 className='lg:text-5xl md:text-4xl text-3xl font-semibold'>Jeet Deula</h2>
          <h2 className='lg:text-3xl md:text-3xl text-2xl font-semibold'>And I'm a <span className='text-red-500 lg:text-4xl md:text-4xl text-3xl font-bold'>Web Developer</span></h2>
          <p className='max-w-[35rem] my-3 text-gray-300'>I'm a frontend developer eager to make a mark in the industry with years of experience throughout my journey</p>
          <div className='flex gap-3 text-3xl md:my-2 my-4 '>
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