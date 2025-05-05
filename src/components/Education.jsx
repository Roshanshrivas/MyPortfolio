import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool, FaAward } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 h-full w-0.5 bg-gray-700"></div>
          
          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 pl-12 relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center -ml-3">
              <FaGraduationCap className="text-white text-xs" />
            </div>
            
            {/* Education Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:border-yellow-400 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="text-2xl font-bold text-white">B.Tech - Computer Science and Engineering</h3>
                <span className="text-yellow-400 font-medium mt-2 md:mt-0">2019 – 2023</span>
              </div>
              
              <div className="flex items-center text-gray-400 mb-4">
                <FaSchool className="mr-2" />
                <span>Truba College of Science and Technology, Bhopal</span>
              </div>
              
              <div className="flex items-center text-gray-300">
                <FaAward className="mr-2 text-yellow-400" />
                <span>CGPA: <span className="text-yellow-400">7.62</span></span>
              </div>
            </div>
          </motion.div>

          {/* Higher Secondary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-10 pl-12 relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center -ml-3">
              <FaSchool className="text-white text-xs" />
            </div>
            
            {/* Education Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:border-yellow-400 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="text-2xl font-bold text-white">Higher Secondary School - M.P. Board</h3>
                <span className="text-yellow-400 font-medium mt-2 md:mt-0">2019</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <FaSchool className="mr-2" />
                <span>Central Academy H.S. School, Vidisha</span>
              </div>
            </div>
          </motion.div>

          {/* High School */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pl-12 relative"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center -ml-3">
              <FaSchool className="text-white text-xs" />
            </div>
            
            {/* Education Card */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg hover:border-yellow-400 transition-colors">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="text-2xl font-bold text-white">High School - M.P. Board</h3>
                <span className="text-yellow-400 font-medium mt-2 md:mt-0">2017</span>
              </div>
              
              <div className="flex items-center text-gray-400">
                <FaSchool className="mr-2" />
                <span>Central Academy H.S. School, Vidisha-464001</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;