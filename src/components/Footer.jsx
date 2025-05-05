import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub className="text-xl" />, url: "https://github.com/roshanshrivas", name: "GitHub" },
    { icon: <FaLinkedin className="text-xl" />, url: "https://linkedin.com/in/roshanshrivas", name: "LinkedIn" },
    { icon: <FaTwitter className="text-xl" />, url: "#", name: "Twitter" },
    { icon: <FaInstagram className="text-xl" />, url: "#", name: "Instagram" },
    { icon: <SiLeetcode className="text-xl" />, url: "#", name: "LeetCode" },
    { icon: <SiGeeksforgeeks className="text-xl" />, url: "#", name: "GFG" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white pt-16 pb-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Roshan Shrivas
            </h3>
            <p className="text-gray-400 mb-4">
              A passionate Full Stack Developer specializing in MERN stack applications with a focus on creating efficient, scalable, and user-friendly solutions.
            </p>
            <div className="flex items-center gap-2 text-gray-300 mb-2">
              <FaEnvelope className="text-yellow-400" />
              <span>roshanshrivas11@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <FaPhone className="text-yellow-400" />
              <span>+91 6261018366</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
              Connect With Me
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors group"
                >
                  <div className="text-yellow-400 group-hover:text-white transition-colors">
                    {link.icon}
                  </div>
                  <span className="text-xs text-gray-400 mt-1 group-hover:text-yellow-400 transition-colors">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Roshan Shrivas. All rights reserved.</p>
          <p className="mt-1">Designed & Built with ❤️ using React and Tailwind CSS</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;