import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress, SiFirebase, SiRazorpay, SiRedux } from 'react-icons/si';
import ott from "../assets/ott.png"
import Navbar from './Navbar';


const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Cybermass.ai",
      description: "CyberMass.AI (MERN SaaS-Based AI Tools Website)",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
        { name: "Razorpay", icon: <SiRazorpay className="text-blue-500 dark:text-gray-200" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-blue-500 dark:text-gray-200" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> }
      ],
      github: "#",
      live: "https://cybermass-ai.vercel.app/",
      image: "https://github.com/Roshanshrivas/cybermass.ai/blob/main/client/src/assets/logo.jpg?raw=true"
    },
    {
      id: 2,
      title: "Photohub",
      description: "Built a photo marketplace using MERN Stack with Buyer and Seller roles Sellers can upload and manage photos, Buyers can browse and purchase high-quality images",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
        { name: "Razorpay", icon: <SiRazorpay className="text-blue-500 dark:text-gray-200" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-blue-500 dark:text-gray-200" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> }
      ],
      github: "#",
      live: "https://photohub-beta.vercel.app/",
      image: "https://github.com/Roshanshrivas/photohub/blob/dev/client/public/photohubLog.jpg?raw=true"
    },
    {
      id: 3,
      title: "Movix OTT",
      description: "Created an OTT platform using React.js for streaming web series and TV shows. Integrated TMDB API for movie data and Firebase for authentication and storage.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-blue-500 dark:text-gray-200" /> },
      ],
      github: "#",
      live: "https://moviex-ott.vercel.app/",
      image:"https://raw.githubusercontent.com/Roshanshrivas/Moviex-OTT/a682a95ea6e2e9bc360447338149644182e32dbe/src/assets/movix-logo.svg"
    }
  ];

  return (
    <>
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Some of my recent work and contributions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:shadow-xl transition-all duration-300 group hover:border-yellow-400"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">TECH STACK</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span 
                        key={i}
                        className="flex items-center gap-1 px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-200"
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex justify-between border-t border-gray-700 pt-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={"/project"}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-medium rounded-full hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
          >
            View All Projects
            <FaExternalLinkAlt className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
    </>
  );
};

export default Projects;