import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiCanva,
  SiRazorpay,
  SiBootstrap,
} from "react-icons/si";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
      { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
      { name: "Context API", icon: <FaReact className="text-teal-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-indigo-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "RESTful APIs", icon: <FaNodeJs className="text-green-300" /> },
      { name: "JWT Auth", icon: <FaReact className="text-yellow-300" /> },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "GitHub", icon: <FaGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
      { name: "Razorpay", icon: <SiRazorpay className="text-indigo-400" /> },
      { name: "WordPress", icon: <FaWordpress className="text-blue-500" /> },
      { name: "Canva", icon: <SiCanva className="text-pink-400" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">Skills</h2>
        <p className="text-lg text-gray-300">Technical skills and tools I use in my development workflow.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {skillsData.map((section, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-yellow-500/20 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-300 mb-4 border-b border-yellow-300 pb-2">
              {section.category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {section.skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full border border-gray-600 hover:bg-yellow-500/10 transition-all"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span className="text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
