import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skill from '../components/Skill'
import Projects from '../components/Project'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className='bg-gray-800'>
        <Navbar />
        <HeroSection/>
        <About/>
        <Skill/>
        <Experience/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home