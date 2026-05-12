import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaTwitter, FaDownload, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import Roshan from "../assets/RoshanMERN.docx.pdf";
import RoshanShrivas from "../assets/RoshanShrivas.png";

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = useMemo(() => [
    "MERN Stack & AI Integration Developer",
    "Full Stack Engineer",
    "UI/UX Enthusiast",
    "Problem Solver"
  ], []);

  // Typewriter effect with cleanup
  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timeout = setTimeout(() => setDisplayText(prev => prev.slice(0, -1)), 50);
      }
    } else {
      if (displayText.length === currentRole.length) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 100);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  const techStack = useMemo(() => [
    { icon: <FaReact className="text-blue-400" />, name: "React", bg: "bg-blue-400/10" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js", bg: "bg-green-500/10" },
    { icon: <SiExpress className="text-gray-100" />, name: "Express", bg: "bg-gray-100/10" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB", bg: "bg-green-400/10" }
  ], []);

  const socialLinks = useMemo(() => [
    { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" }
  ], []);

  // Generate static particles (not re-generated on each render)
  const particles = useMemo(() => {
    return Array.from({ length: 8 }, () => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 15 + 10,
      xOffset: (Math.random() * 100 - 50),
      yOffset: (Math.random() * 100 - 50),
    }));
  }, []);

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16 overflow-hidden">
      {/* Animated particles - reduced count, static positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((part, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
            style={{
              width: part.width + 'px',
              height: part.height + 'px',
              top: part.top + '%',
              left: part.left + '%',
              willChange: 'transform',
            }}
            animate={{
              y: [0, part.yOffset, 0],
              x: [0, part.xOffset, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: part.duration,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="max-w-6xl w-full mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Availability Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-green-400">Available for work</span>
            </motion.div>

            {/* Name */}
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                Roshan Shrivas
              </span>
            </motion.h1>

            {/* Typewriter Role */}
            <div className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 h-12">
              <span className="text-gray-300">{displayText}</span>
              <span className="animate-pulse text-yellow-400">|</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-400 mb-6">
              <HiOutlineLocationMarker className="text-yellow-400" />
              <span>India</span>
            </div>

            {/* Tagline */}
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed">
              I craft <span className="text-yellow-400 font-medium">high-performance</span> web applications 
              with clean code and intuitive user experiences. Specialized in building scalable MERN stack 
              solutions that solve real-world problems.
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-400 mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-yellow-400"></span>
                TECH STACK
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 ${tech.bg} backdrop-blur-sm rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-200 cursor-pointer`}
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {tech.icon}
                    <span className="font-medium text-sm">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={Roshan}
                download
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                <FaDownload className="group-hover:animate-bounce" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-200 font-medium"
              >
                <FaEnvelope />
                Let's Connect
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-gray-700 transition-all duration-200"
              >
                <FaBriefcase />
                View Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Profile Card (Simplified) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              {/* Simplified gradient border - no pulse animation for performance */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl opacity-60" />
              
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-1">
                <div className="bg-gray-900 rounded-3xl p-6 text-center">
                  {/* Avatar - replace with your image */}
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" style={{ willChange: 'transform' }} />
                    <div className="absolute inset-[3px] rounded-full bg-gray-900 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-5xl font-bold text-yellow-400">
                        <img src={RoshanShrivas} alt="Profile" className="w-full h-full object-cover" />
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">1+</div>
                      <div className="text-xs text-gray-400">Years Exp</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">49+</div>
                      <div className="text-xs text-gray-400">Projects</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400 italic">"Code is poetry in motion"</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - simplified animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-400">Scroll</span>
            <div className="w-5 h-8 rounded-full border border-yellow-400 flex justify-center">
              <div className="w-1 h-2 bg-yellow-400 rounded-full mt-2 animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;