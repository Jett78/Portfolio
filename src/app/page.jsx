import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Contact from './components/Contact'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Contact/>
    </div>
  )
}

export default page