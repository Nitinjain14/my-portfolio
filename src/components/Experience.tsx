import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-gray-50">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title "
      >
        Experience
      </motion.h2>

      <div className="max-w-3xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Briefcase className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Head of Marketing</h3>
              <p className="text-purple-600 font-medium">Web Wizard – Ahmedabad, India</p>
              <div className="flex items-center gap-2 text-gray-500 mt-1">
                <Calendar className="w-4 h-4" />
                <span>June 2005 – Aug 2007</span>
              </div>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li>• Spearheaded lead generation and customer acquisition initiatives, significantly expanding our client base.</li>
                <li>• Drove brand growth through strategic social media marketing, increasing online engagement and visibility</li>
                <li>• Built and managed a high-performing marketing team, strengthening our capacity to deliver comprehensive IT solutions.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;