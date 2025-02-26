import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title "
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
      >
        <p className="mb-4">
          Hi! I'm <span className="text-purple-600 font-semibold">Nitin</span>, a passionate software developer with experience in backend and frontend technologies.
          I have worked on various projects, including a <strong>URL Shortener</strong>, an <strong>AI-powered trip planner</strong>, and a <strong>Water Health Monitoring system</strong>.
        </p>
        <p className="mb-4">
          My expertise includes MongoDB, React, Node.js, C++, and AI-based solutions. 
          I love solving complex problems and creating efficient software solutions.
        </p>
        <p>
          When I'm not coding, I enjoy participating in hackathons, learning new tech, and improving my problem-solving skills.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
