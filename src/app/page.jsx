import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

const page = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default page