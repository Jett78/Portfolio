import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
    </div>
  )
}

export default page