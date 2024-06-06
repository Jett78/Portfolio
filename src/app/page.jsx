"use client"
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Footer from './components/Footer'
import LocomotiveScroll from "locomotive-scroll"

const page = () => {
  const locomotiveScroll = new LocomotiveScroll();   //for smooth scrolling
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page