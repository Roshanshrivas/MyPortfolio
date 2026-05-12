import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaRocket, FaAward, FaBrain, FaRobot } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlineCalendar } from 'react-icons/hi';
import { TbApi } from 'react-icons/tb';

const About = () => {
  // Simple, balanced stats
  const stats = [
    { label: "Projects Delivered", value: "49+", icon: <FaRocket className="text-yellow-400" /> },
    { label: "Years Experience", value: "1+", icon: <FaAward className="text-yellow-400" /> },
    { label: "LLM Integrations", value: "4+", icon: <TbApi className="text-purple-400" /> },
    { label: "AI Tools Built", value: "9+", icon: <FaRobot className="text-purple-400" /> },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-20 flex items-center justify-center overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/5"
            style={{
              width: Math.random() * 300 + 100 + 'px',
              height: Math.random() * 300 + 100 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, (Math.random() * 60 - 30)],
              x: [0, (Math.random() * 60 - 30)],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          />
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            MERN Stack Developer with expertise in LLM integration — turning ideas into intelligent web applications.
          </motion.p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column: Bio & Personal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Main Bio Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-400/30 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <span className="text-yellow-400">👨‍💻</span> Who I Am
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm <span className="text-yellow-400 font-semibold">Roshan Shrivas</span>, a 
                  <span className="text-green-400 font-semibold"> MERN Stack Developer + AI Integrator</span> from India 
                  who loves building full‑stack web applications and enhancing them with AI capabilities.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I believe the best software combines robust engineering with smart automation. 
                  That's why I integrate LLM APIs (OpenAI, Hugging Face, etc.) into modern MERN 
                  architectures — creating tools that are not only functional but also intelligent.
                </p>
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 bg-gray-800/30 rounded-xl p-3 border border-gray-700">
                  <HiOutlineLocationMarker className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/30 rounded-xl p-3 border border-gray-700">
                  <HiOutlineMail className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="font-medium text-sm">roshanshrivas11@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/30 rounded-xl p-3 border border-gray-700">
                  <HiOutlineCalendar className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Experience</p>
                    <p className="font-medium">1+ Years MERN‑Stack</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-gray-800/30 rounded-xl p-3 border border-gray-700">
                  <FaCode className="text-yellow-400 text-xl" />
                  <div>
                    <p className="text-xs text-gray-400">Availability</p>
                    <p className="font-medium text-green-400">Open for work</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats + Approach */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-700 hover:border-yellow-400/40 transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-3xl mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Philosophy / Approach Card */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <FaBrain className="text-purple-400 text-2xl" />
                  <h3 className="text-xl font-semibold">My Approach</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex gap-2">
                    <span className="text-yellow-400">▹</span> 
                    Build clean, scalable MERN applications first
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400">▹</span> 
                    Identify where LLM APIs add real user value
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400">▹</span> 
                    Integrate AI features with token-efficient prompts
                  </li>
                  <li className="flex gap-2">
                    <span className="text-yellow-400">▹</span> 
                    Iterate based on real-world feedback
                  </li>
                </ul>
              </div>

              {/* Tech ethos badge */}
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs border border-gray-600">
                  #MERN
                </span>
                <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs border border-gray-600">
                  #LLM Integration
                </span>
                <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs border border-gray-600">
                  #SaaS
                </span>
                <span className="px-3 py-1 bg-gray-800/50 rounded-full text-xs border border-gray-600">
                  #CleanCode
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Let's Build Something Great
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              See My Work
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;