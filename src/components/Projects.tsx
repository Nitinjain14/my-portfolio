import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'URL Shortener',
    description: 'Built a secure URL shortener with JWT-based authentication, user authorization, and history tracking using MongoDB.',
    details: 'Designed a scalable backend for efficient data storage and retrieval, with plans for deployment.',
    github: 'github.com/Nitin/Short-URL',
    tech: ['MongoDB', 'JWT', 'Node.js']
  },
  {
    title: 'AI Trip Planner',
    description: 'Developed an AI-powered trip planner using Gemini, providing personalized travel and hotel recommendations based on location and budget.',
    details: 'Automated itinerary planning, reducing trip research time by 60% and minimizing travel planning stress by 70%.',
    github: 'github.com/Nitin/Trip_planner',
    tech: ['Gemini AI', 'React', 'Node.js']
  },
  {
    title: 'Water Health Monitoring',
    description: 'IoT-based system using C and Arduino to monitor turbidity, pH, TDS, and temperature with 95% accuracy in real time.',
    details: 'Programmed serial communication on Windows, ensuring stable data acquisition and logging for over 1,000 data points with minimal errors.',
    tech: ['C', 'Arduino', 'IoT']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title "
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6 hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <Code className="w-8 h-8 text-purple-600" />
              <div className="flex gap-2">
                {project.github && (
                  <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer" 
                     className="p-2 hover:bg-purple-100 rounded-full transition-colors">
                    <Github className="w-5 h-5 text-gray-600 hover:text-purple-600" />
                  </a>
                )}
                <button className="p-2 hover:bg-purple-100 rounded-full transition-colors">
                  <ExternalLink className="w-5 h-5 text-gray-600 hover:text-purple-600" />
                </button>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <p className="text-gray-600 mb-4">{project.details}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map(tech => (
                <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;