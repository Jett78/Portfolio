"use client";
import React, { useState } from 'react'
import SKillCard from "./SkillCard"
import SkillsInfocard from "./SkillsInfocard"
import {SKILLS} from "../../db/Data"


const Skills = () => {

    const [selectedSkill,setselectedSkill] = useState(SKILLS[0]);
    const handleSelectedSkill = (data) => {
        setselectedSkill(data)
    }
  return (
   <main>
    <div className='sm:max-w-[40rem] w-[25rem] mt-10'>
        <h2 className='text-left text-2xl font-bold py-4'>Skills</h2>
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
    </div>
   </main>
  )
}

export default Skills