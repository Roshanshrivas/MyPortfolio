import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase, FaUsers, FaShieldAlt, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';

const experiences = [
  {
    id: 1,
    title: "MERN Stack Developer Intern",
    company: "WebSeeder Technologies Pvt. Ltd",
    location: "India",
    period: "Jan 2026 – Present",
    current: true,
    responsibilities: [
      "Developing full‑stack MERN applications using React, Node.js, Express, and MongoDB",
      "Building responsive and reusable UI components with Tailwind CSS",
      "Integrating RESTful APIs and implementing secure authentication/authorization",
      "Collaborating with cross‑functional teams to deliver client‑facing features"
    ],
    icons: [FaLaptopCode, SiTailwindcss, FaServer, FaShieldAlt]
  },
  {
    id: 2,
    title: "Web Developer",
    company: "R&S Technology and Business Consultant",
    location: "India",
    period: "Jun 2023 – Jan 2024",
    current: false,
    responsibilities: [
      "Developed a full‑stack web application using the MERN stack",
      "Implemented RESTful APIs for data transactions between frontend and backend",
      "Designed and optimized MongoDB schemas for efficient data storage",
      "Collaborated with the team to troubleshoot issues and ensure timely delivery"
    ],
    icons: [FaLaptopCode, FaServer, FaDatabase, FaUsers]
  }
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-20 overflow-hidden"
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
            animate={{ y: [0, (Math.random() * 60 - 30)], x: [0, (Math.random() * 60 - 30)] }}
            transition={{ duration: Math.random() * 20 + 15, repeat: Infinity, repeatType: 'reverse' }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey — from intern to developer, building real‑world solutions.
          </p>
        </motion.div>

        {/* Timeline - Desktop: vertical line centered, cards on sides */}
        <div className="relative">
          {/* Vertical line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-orange-500 to-gray-700 transform -translate-x-1/2" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row md:items-start mb-12 last:mb-0 ${
                idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
              }`}
            >
              {/* Timeline dot - centered on desktop, hide on mobile */}
              <div className="hidden md:block absolute left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transform -translate-x-1/2 z-10 shadow-lg shadow-yellow-500/30" />

              {/* Card container - width on desktop */}
              <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                {/* Current badge for mobile */}
                {exp.current && (
                  <div className="md:hidden mb-2">
                    <span className="px-2 py-0.5 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                      Current
                    </span>
                  </div>
                )}

                {/* Card */}
                <div className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-yellow-400/40 transition-all duration-300 shadow-lg">
                  {/* Header */}
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                    {exp.current && (
                      <span className="hidden md:inline-block px-2 py-0.5 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                        Current
                      </span>
                    )}
                  </div>
                  <h4 className="text-base md:text-lg text-yellow-400 mb-3">{exp.company}</h4>

                  {/* Period & location with icons */}
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-yellow-400 text-xs" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-yellow-400 text-xs" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, i) => {
                      const IconComponent = exp.icons[i % exp.icons.length];
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <IconComponent className="text-yellow-400 text-sm mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;