"use client"
import React from 'react'
import { motion } from 'framer-motion'

const SkillsInfocard = ({heading,skills}) => {
  const SkillsAnimation = {
    initial:{
      x:-10,
      opacity:0,
    },
    animate:(index)=>({
      x:0,
      opacity:1,
      transition:{
        delay:0.8*index
      }
      })
    }

    const ContainerAnimation = {
      initial:{
        opacity:0,
      },
      animate:{
        opacity:1,
      },
    }
  return (
    <motion.div 
    variants={ContainerAnimation}
    initial="initial"
    whileInView="animate"
    viewport={{once:true,amount:1}}
    className="mt-5 border bg-gradient-to-l  from-purple-900 rounded-xl max-w-[40em]">
        <h2 className='text-2xl font-semibold text-center py-2'>{heading}</h2> <hr />
        <div className='py-6 px-4'>
           {skills.map((item,index) => (
            <motion.div 
            variants={SkillsAnimation}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{once:true,amount:0.2}}
            key={`skill_${index}`}>
                <div className='flex justify-between py-2'>
                    <p className='py-2'>{item.skill}</p>
                    <p>{item.percentage}</p>
                </div>
                <div className='bg-black h-2  rounded-lg'>
                <div
                    className='bg-green-400 h-full ease-in-out duration-500 rounded-lg'
                    style={{ width: `${item.percentage}` }}
                ></div>
            </div>
            </motion.div>
           ))}
        </div>
    </motion.div>
  )
}

export default SkillsInfocard