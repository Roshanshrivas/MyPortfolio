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
  FaBrain,
  FaRobot,
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
  SiOpenai,
  SiHuggingface,
  SiLangchain,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdElectricBolt } from "react-icons/md";
import { RiGeminiFill } from "react-icons/ri";

const skillsData = [
  {
    category: "Frontend",
    icon: <FaReact className="text-blue-400" />,
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
    icon: <FaNodeJs className="text-green-500" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "RESTful APIs", icon: <TbApi className="text-blue-300" /> },
      { name: "JWT Auth", icon: <FaReact className="text-yellow-300" /> },
    ],
  },
  {
    category: "Database",
    icon: <SiMongodb className="text-green-600" />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    ],
  },
  {
    category: "AI & LLM Integration",
    icon: <FaBrain className="text-purple-400" />,
    skills: [
      { name: "Groq", icon: <MdElectricBolt className="text-emerald-400" /> },
      { name: "OpenAI GPT-4", icon: <SiOpenai className="text-emerald-400" /> },
      { name: "Gemini", icon: <RiGeminiFill className="text-white" /> },
      { name: "Hugging Face", icon: <SiHuggingface className="text-yellow-400" /> },
      { name: "Prompt Engineering", icon: <FaRobot className="text-pink-400" /> },
      // { name: "Token Optimization", icon: <TbApi className="text-blue-300" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <FaGithub className="text-white" />,
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
  // Variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-20 overflow-hidden"
    >
      {/* Subtle animated background particles (same as hero/about) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/5"
            style={{
              width: Math.random() * 300 + 100 + "px",
              height: Math.random() * 300 + 100 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, (Math.random() * 60 - 30)],
              x: [0, (Math.random() * 60 - 30)],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            My Skills
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
            Technologies, frameworks, and tools I work with — from full‑stack MERN to LLM integration.
          </motion.p>
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((section, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-gray-800/30 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-yellow-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10"
            >
              {/* Category header with icon */}
              <div className="flex items-center gap-3 mb-5 pb-2 border-b border-gray-700">
                <div className="text-3xl">{section.icon}</div>
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {section.category}
                </h3>
              </div>

              {/* Skill items */}
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {section.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    variants={skillVariants}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-black/30 rounded-full border border-gray-600 hover:border-yellow-400 transition-all duration-200 cursor-default"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span className="text-sm md:text-base font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Extra note about continuous learning */}
        <motion.div
          className="text-center mt-12 text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          ⚡ Always learning — currently exploring advanced LangChain patterns and fine‑tuning.
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;