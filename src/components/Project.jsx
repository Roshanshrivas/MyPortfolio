import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSpinner, FaTools } from 'react-icons/fa';
import {
  SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiExpress,
  SiFirebase, SiRazorpay, SiRedux, SiMui, SiChartdotjs
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import cybermass from '../assets/cybermass.png';
import coursehub from '../assets/coursehub.png';
import photohub from '../assets/photohub.png';
import stylewave from '../assets/stylewave.png';
import movix from '../assets/movix.png';

const Projects = () => {
  // Memoize projects data (never changes)
  const projects = useMemo(() => [
    {
      id: 1,
      title: "CyberMass.AI",
      description: "SaaS platform with 9+ AI tools (content generator, chatbot, summarizer, etc.) using MERN + LLM APIs.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
        { name: "Razorpay", icon: <SiRazorpay className="text-blue-400" /> },
        { name: "OpenAI API", icon: <TbApi className="text-emerald-400" /> }
      ],
      github: "#",
      live: "https://cybermass-ai.vercel.app/",
      image: cybermass,
      status: "live"
    },
    {
      id: 2,
      title: "CourseHub",
      description: "Complete LMS platform with instructor/student roles, course creation, enrollment, and progress tracking.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
      ],
      github: "#",
      live: "#",
      image: coursehub,
      status: "live"
    },
    {
      id: 3,
      title: "PhotoHub",
      description: "Photo marketplace with buyer/seller roles. Sellers upload/manage photos, buyers browse and purchase.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Razorpay", icon: <SiRazorpay className="text-blue-400" /> }
      ],
      github: "#",
      live: "https://photohub-beta.vercel.app/",
      image: photohub,
      status: "live"
    },
    {
      id: 4,
      title: "Stylewave",
      description: "Unisex salon/parlor booking system with slots, services, and appointment management.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
      ],
      github: "#",
      live: "#",
      image: stylewave,
      status: "live"
    },
    {
      id: 5,
      title: "Movix OTT",
      description: "OTT streaming platform for web series & TV shows using TMDB API + Firebase auth.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "TMDB API", icon: <TbApi className="text-pink-400" /> }
      ],
      github: "#",
      live: "https://moviex-ott.vercel.app/",
      image: movix,
      status: "live"
    },
    {
      id: 6,
      title: "Dynamics-Automation",
      description: "CRM dashboard frontend (fully responsive, charts, reports, lead management).",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Chart.js", icon: <SiChartdotjs className="text-green-400" /> },
        { name: "Material UI", icon: <SiMui className="text-blue-300" /> }
      ],
      github: "#",
      live: "#",
      image: "https://via.placeholder.com/400x200?text=Dynamics+Automation",
      status: "frontend"
    },
    {
      id: 7,
      title: "Ticketing System",
      description: "Support ticket dashboard – users raise tickets, admins resolve with status tracking.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> }
      ],
      github: "#",
      live: "#",
      image: "https://via.placeholder.com/400x200?text=Ticketing+System",
      status: "live"
    },
    {
      id: 8,
      title: "Broken Neck Productions",
      description: "Cinematic visuals, brand films, music videos – portfolio site for production house.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> }
      ],
      github: "#",
      live: "#",
      image: "https://via.placeholder.com/400x200?text=Broken+Neck",
      status: "live"
    },
    {
      id: 9,
      title: "JewelryHub",
      description: "E-commerce website for artificial & Tanishq‑style jewelry (under construction).",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Razorpay", icon: <SiRazorpay className="text-blue-400" /> }
      ],
      github: "#",
      live: "#",
      image: "https://via.placeholder.com/400x200?text=JewelryHub",
      status: "progress"
    },
    {
      id: 10,
      title: "Thumblify",
      description: "AI thumbnail generator (LLM + image generation) – work in progress.",
      tech: [
        { name: "React", icon: <SiReact className="text-blue-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "OpenAI API", icon: <TbApi className="text-emerald-400" /> }
      ],
      github: "#",
      live: "#",
      image: "https://via.placeholder.com/400x200?text=Thumblify",
      status: "progress"
    }
  ], []);

  // Static particles – generated once, not on re-render
  const particles = useMemo(() => {
    return Array.from({ length: 4 }, () => ({
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      yOffset: (Math.random() * 60 - 30),
      xOffset: (Math.random() * 60 - 30),
    }));
  }, []);

  const getStatusBadge = useCallback((status) => {
    switch(status) {
      case 'live':
        return <span className="px-2 py-0.5 text-xs font-semibold bg-green-500/20 text-green-400 rounded-full border border-green-500/30">Live</span>;
      case 'frontend':
        return <span className="px-2 py-0.5 text-xs font-semibold bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30">Frontend</span>;
      case 'progress':
        return <span className="px-2 py-0.5 text-xs font-semibold bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30 flex items-center gap-1"><FaSpinner className="animate-spin" size={10} /> In Progress</span>;
      default:
        return null;
    }
  }, []);

  const handleImageError = useCallback((e) => {
    if (e.target.src !== 'https://via.placeholder.com/400x200?text=Project+Image') {
      e.target.src = 'https://via.placeholder.com/400x200?text=Project+Image';
    }
  }, []);

  return (
    <section id="projects" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6 md:px-20 py-20 overflow-hidden">
      {/* Background particles – low count, static */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((part, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/5"
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            From AI-powered SaaS to full‑stack marketplaces – here's what I've built.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={handleImageError}
                />
                <div className="absolute top-3 right-3 z-20">
                  {getStatusBadge(project.status)}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>

                {/* Tech stack (max 5 icons) */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tech, i) => (
                      <span key={i} className="flex items-center gap-1 px-2 py-1 bg-black/30 rounded-full text-xs" title={tech.name}>
                        {tech.icon}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="text-xs text-gray-400 self-center">+{project.tech.length - 5}</span>
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                  >
                    <FaGithub /> Code
                  </a>
                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <FaTools /> Demo Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Explore All Projects <FaExternalLinkAlt />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Projects);