import React from 'react'
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <main>
        <div className='text-gray-400 flex justify-center gap-1 items-center h-[6rem] border-t-2 border-gray-600'>
        <FaCopyright />
        <p> 2024 JeetDeula | All Rights Reserved</p>
        </div>
    </main>
  )
}

export default Footer