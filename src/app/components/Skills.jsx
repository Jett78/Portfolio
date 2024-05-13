"use client";
import React, { useState,useEffect } from 'react'
import SKillCard from "./SkillCard"
import SkillsInfocard from "./SkillsInfocard"
import {SKILLS} from "../../db/Data"
import Education from "./Education"
import AOS from "aos";
import "aos/dist/aos.css";


const Skills = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    const [selectedSkill,setselectedSkill] = useState(SKILLS[0]);
    const handleSelectedSkill = (data) => {
        setselectedSkill(data)
    }

  return (
   <main className=' grid lg:grid-cols-2  grid-cols-1 justify-center lg:gap-20 py-8 max-w-[1300px] xl:mx-auto mx-4 ' data-aos="fade-right" data-aos-anchor-placement="top-center">
    <section className=' lg:border-r md:pr-10'>
        <h2 className='text-left sm:text-2xl text-xl font-bold py-4 '>Skills</h2>
        <div className='flex flex-wrap gap-6'>
            {SKILLS.map((item) => (
                <SKillCard key={item} 
                title={item.title} isactive = {selectedSkill.title === item.title}
                onClick={() => {handleSelectedSkill(item)}}/>
            ))}
        </div>
        <div>
            <SkillsInfocard skills={selectedSkill.skills} heading={selectedSkill.title} />
        </div>
    </section>
    
    <section>
        <Education/>
    </section>
   </main>
  )
}

export default Skills