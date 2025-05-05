import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <motion.nav 
      className="bg-gray-900/80 backdrop-blur-md text-white border-b border-gray-800 sticky top-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo / Name with animation */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition duration-300 flex items-center"
          >
            <span className="text-yellow-400">&lt;</span>
            <span className="text-white mx-1">Roshan</span>
            <span className="text-yellow-400">/&gt;</span>
          </Link>
        </motion.div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 font-medium items-center">
          {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group text-gray-300 hover:text-yellow-400 transition duration-200 py-2 px-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>

        {/* Social Icons with animation */}
        <div className="hidden md:flex gap-5 text-xl">
          <motion.a
            href="https://github.com/roshanshrivas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition duration-200"
            whileHover={{ y: -3 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/roshanshrivas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-400 transition duration-200"
            whileHover={{ y: -3 }}
          >
            <FaLinkedin />
          </motion.a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300 hover:text-yellow-400 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-gray-900/95 backdrop-blur-lg px-4 pt-2 pb-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col gap-4 font-medium">
            {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-yellow-400 py-2 px-3 border-l-2 border-yellow-400/0 hover:border-yellow-400 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-5 text-xl mt-2 px-3">
              <a
                href="https://github.com/roshanshrivas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-200"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/roshanshrivas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-yellow-400 transition duration-200"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;