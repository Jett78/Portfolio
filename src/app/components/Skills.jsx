"use client";
import React, { useState} from 'react'
import SKillCard from "./SkillCard"
import SkillsInfocard from "./SkillsInfocard"
import {SKILLS} from "../../db/Data"
import Education from "./Education"
import { motion } from 'framer-motion';


const Skills = () => {
    const SkillsTitleAnimation = {
        initial:{
          y:10,
          opacity:0,
        },
        animate:(index)=>({
          y:0,
          opacity:1,
          transition:{
            delay:0.8*index
          }
        })
      }

    const [selectedSkill,setselectedSkill] = useState(SKILLS[0]);
    const handleSelectedSkill = (data) => {
        setselectedSkill(data)
    }

  return (
   <main className=' grid lg:grid-cols-2  grid-cols-1 justify-center lg:gap-20 py-8 max-w-[1300px] xl:mx-auto mx-4 ' >
    <section className=' lg:border-r md:pr-10'>
        <motion.h2 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        className='text-left sm:text-2xl text-xl font-bold py-4 '>Skills</motion.h2>
        <div className='flex flex-wrap gap-6'>
            {SKILLS.map((item,index) => (
                <motion.div
                key={item} 
                variants={SkillsTitleAnimation}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{once:true,amount:0.2}}
                >
                    <SKillCard
                title={item.title} isactive = {selectedSkill.title === item.title}
                onClick={() => {handleSelectedSkill(item)}}/>
                </motion.div>
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