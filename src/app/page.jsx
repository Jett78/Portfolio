"use client";
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';
import LocomotiveScroll from "locomotive-scroll";

const Page = () => {
  useEffect(() => {
    // Initialize LocomotiveScroll only in the client side
    const locomotiveScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true
    });

    return () => {
      // Destroy LocomotiveScroll instance on cleanup
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
