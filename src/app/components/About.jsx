"use client"
import React,{useEffect} from "react";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="bg-gray-900 md:pt-10"  id="about" >      
      <div className="flex flex-wrap items-center justify-center px-2 lg:gap-40 gap-6 sm:my-8 p-2  max-w-[1300px] xl:mx-auto mx-4 " data-aos="fade-right" data-aos-anchor-placement="top-center">
        <section >
          <img
            src="./avatar.png"
            alt="avatar"
            className="h-[26rem] rounded-full xl:block hidden p-2 bg-red-200  "
          />
        </section>

        <section>
          <h2 className="sm:text-3xl text-2xl font-semibold text-center  ">About <span className="text-purple-500">me</span> </h2>
          <p className="max-w-[40rem] text-gray-500 lg:pt-6 py-4 md:text-l text-m ">
            Hello there! I'm Jeet Deula,a passionate frontend developer from
            kathmandu,Nepal. With a keen eye for creating visually stunning and
            user-friendly websites. My journey in the world of web development
            began since 2022, and since then, I've been on a mission to bring
            ideas to life through clean and efficient code.As a dedicated
            frontend enthusiast, I specialize in turning design concepts into
            seamless and responsive web experiences. I thrive on the challenges
            of translating creative visions into reality, ensuring that every
            pixel aligns with both aesthetic and functional perfection.
          </p>
        </section>
      </div><hr className="border-gray-500"/>
      <Skills/>
    </main>
  );
};

export default About;
