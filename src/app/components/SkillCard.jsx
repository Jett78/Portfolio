"use client";
import React from 'react'

const SkillCard = ({title,isActive,onClick}) => {
  return (
    <div onClick={() => onClick()} className={`skills-card ${isActive? "active":" "}`}>
        <div>
            <h2 className='sm:text-l font-semibold  rounded-lg p-2 bg-gray-800 cursor-pointer hover:bg-purple-600 ease-in-out duration-300'>{title}</h2>
        </div>
    </div>
  )
}

export default SkillCard