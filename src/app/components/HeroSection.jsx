"use client";
import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';



const HeroSection = () => {
  return (
    <main>
      <div className='flex xl:flex-wrap flex-wrap-reverse justify-center  items-center xl:gap-60 sm:gap-8 gap-2 p-4 min-h-screen bg-gray-900'>
        <section>
          <h2 className='xl:text-5xl md:text-4xl text-xl font-semibold text-purple-600'>Hello, It's Me</h2>
          <h2 className='xl:text-7xl md:text-5xl text-3xl font-semibold'>Jeet Deula</h2>
          <h2 className='xl:text-5xl md:text-4xl text-2xl font-semibold'>And I'm <span className='text-red-500 xl:text-6xl md:text-4xl text-2xl font-bold animate-pulse '>Web Developer</span></h2>
          <p className='max-w-[35rem] my-3 text-gray-300'>I'm a frontend developer eager to make a mark in the industry with years of experience throughout my journey</p>
          
          <div className='flex gap-3 text-3xl md:my-2 my-4 cursor-pointer '>
            <FaFacebook className=' text-blue-500 hover:text-4xl ease-in duration-300'/>
            <FaInstagram className='text-red-400 hover:text-4xl ease-in duration-300'/>
            <FaGithub className='hover:text-4xl ease-in duration-300'/>
            <FaLinkedin className='text-blue-500 bg-white rounded-full p-0.5 hover:text-4xl ease-in-out duration-300'/>
          </div>
          
          <div className='flex gap-4 justify-center'>
            <button className='border-2 border-lime-500 h-10 w-40 rounded-2xl'>Download CV</button>
            <button className='bg-red-600 h-10 w-20 rounded-2xl '>Hire Me</button>
          </div>
        
        </section>
        <section className=' shadow-2xl shadow-purple-500  bg-purple-500 p-3 rounded-full '>
          <img src="./profile.jpg" alt="avatar" className='sm:max-w-[22rem] max-w-[15rem] rounded-[500px]  ' />
        </section>
     
     </div>
    </main>
  )
}

export default HeroSection