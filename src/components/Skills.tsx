import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', level: 'Advanced' },
  { name: 'Node.js', level: 'Advanced' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'SQL', level: 'Advanced' },
  { name: 'C++', level: 'Advanced' },
  { name: 'Java', level: 'Intermediate' },
  { name: 'Python', level: 'Intermediate' },
  { name: 'Arduino', level: 'Advanced' },
  { name: 'AI & ML', level: 'Beginner' },
];

const levelColors: { [key: string]: string } = {
  Beginner: 'bg-red-500',
  Intermediate: 'bg-yellow-500',
  Advanced: 'bg-green-500',
};

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title "
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
            <span
              className={`mt-2 text-sm font-medium text-white px-3 py-1 rounded-full ${levelColors[skill.level]}`}
            >
              {skill.level}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
