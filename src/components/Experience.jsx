import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaDatabase, FaUsers } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
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
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and contributions
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-700 transform -translate-x-1/2"></div>
          
          {/* Experience Item */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row items-start relative">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 transform -translate-x-1/2 -translate-y-1 z-10"></div>
              
              {/* Date (mobile) */}
              <div className="md:hidden mb-4 pl-10">
                <div className="text-yellow-400 font-medium">Jun 2023 – Jan 2024</div>
                <div className="text-gray-400 text-sm">India</div>
              </div>
              
              {/* Experience Card */}
              <div className="w-full max-[430px]:w-[300px] max-[321px]:w-[220px] md:w-5/12 md:mr-auto bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg ml-10 md:ml-0">
                <h3 className="max-[321px]:text-xl text-2xl font-bold text-white mb-1">Web Developer</h3>
                <h4 className="text-lg text-yellow-400 mb-3">R&S Technology and Business Consultant</h4>
                
                {/* Date (desktop) */}
                <div className="hidden md:flex items-center text-gray-400 mb-4">
                  <span>Jun 2023 – Jan 2024</span>
                  <span className="mx-2">•</span>
                  <span>India</span>
                </div>
                
                <ul className="space-y-3 max-[321px]:text-sm">
                  <li className="flex items-start">
                    <FaLaptopCode className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Developed a full-stack web application using the MERN stack</span>
                  </li>
                  <li className="flex items-start">
                    <FaServer className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Implemented RESTful APIs for handling data transactions between frontend and backend</span>
                  </li>
                  <li className="flex items-start">
                    <FaDatabase className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Designed and optimized database schemas in MongoDB for efficient data storage and retrieval</span>
                  </li>
                  <li className="flex items-start">
                    <FaUsers className="text-yellow-400 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">Collaborated with the team to troubleshoot and debug issues, ensuring timely project delivery</span>
                  </li>
                </ul>
              </div>
              
              {/* Date (desktop) */}
              <div className="hidden md:flex w-5/12 items-center justify-center pl-12">
                <div className="text-right">
                  <div className="text-yellow-400 font-medium text-lg">Jun 2023 – Jan 2024</div>
                  <div className="text-gray-400">India</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;