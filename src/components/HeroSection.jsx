import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';
import Roshan from "../assets/RoshanMERN.docx.pdf"

const HeroSection = () => {
  const techStack = [
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-100" />, name: "Express" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" }
  ];

  return (
    <section id='home' className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: Math.random() * 8 + 2 + 'px',
              height: Math.random() * 8 + 2 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() * 100 - 50)],
              x: [0, (Math.random() * 100 - 50)],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Centered Content */}
      <motion.div 
        className="max-w-4xl w-full text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Name with gradient text */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="max-[390px]:text-4xl : text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Roshan Shrivas
          </span>
        </motion.h1>

        {/* Role with emoji */}
        <motion.h2 
          className="max-[390px]:text-xl text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          MERN Stack Developer <span className="text-yellow-400">🚀</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p 
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          I craft <span className="text-yellow-400 font-medium">high-performance</span> web applications with clean code and intuitive user experiences.
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-sm font-medium text-gray-400 mb-4">TECH STACK</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-yellow-400 transition-all duration-300"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                {tech.icon}
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <a
            href={Roshan} // Link to your CV file
            download
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full shadow-lg hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
          >
            📄 Download CV
          </a>
          <a
            href="#contact"
            className="max-[385px]:invisible inline-flex items-center px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:bg-opacity-10 transition-all duration-300"
          >
            Let's Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;