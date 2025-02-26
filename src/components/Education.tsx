import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-container bg-gray-50">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title "
      >
        Education
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Vellore Institute Of Technology, Vellore</h3>
              <p className="text-purple-600">B.Tech IT</p>
              <div className="flex items-center gap-2 mt-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-600">GPA: 8.98/10.0</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Manisha International School, Durgapur</h3>
              <p className="text-purple-600">Higher Secondary</p>
              <div className="flex items-center gap-2 mt-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-600">Percentage: 90/100</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-xl p-6"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Manisha International School, Durgapur</h3>
              <p className="text-purple-600">Secondary School</p>
              <div className="flex items-center gap-2 mt-2">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-600">Percentage: 95/100</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;