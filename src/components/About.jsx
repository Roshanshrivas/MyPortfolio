import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-20 flex items-center justify-center"
    >
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Line Separator */}
        <motion.div
          className="w-24 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ transformOrigin: 'left' }}
        />

        {/* Text */}
        <motion.p
          className="text-lg md:text-xl mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Hi, I'm <span className="text-yellow-300 font-semibold">Roshan Shrivas</span>, a
          <span className=""> MERN Stack Developer</span> from India. I craft full-stack web apps using
          <span className="text-green-400 font-semibold"> MongoDB, Express, React,</span> and
          <span className=""> Node.js</span>.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          I build fast, responsive, scalable applications with clean code and seamless UX. I follow best practices and focus on real-world usability.
        </motion.p>

        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Always curious and always learning — I enjoy taking on new challenges and exploring modern web technologies to stay ahead in the industry.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-block px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            Let’s Connect
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
