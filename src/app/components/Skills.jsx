"use client";
import React, { useState } from 'react'
import SKillCard from "./SkillCard"
import SkillsInfocard from "./SkillsInfocard"
import {SKILLS} from "../../db/Data"
import Education from "./Education"


const Skills = () => {

    const [selectedSkill,setselectedSkill] = useState(SKILLS[0]);
    const handleSelectedSkill = (data) => {
        setselectedSkill(data)
    }

  return (
   <main className=' flex flex-wrap justify-center lg:gap-20 border-2 rounded-lg animate-pulse mt-10 sm:p-5 p-2 sm:mx-20 mx-2 '>
    <section className='w-[40rem]'>
        <h2 className='text-left text-2xl font-bold py-4 text-red-500'>Skills</h2>
        <div className='flex gap-6'>
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