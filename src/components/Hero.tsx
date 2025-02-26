import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const skills = ['C++ Programmer', 'Data Analyst', 'JavaScript Enthusiast', 'MongoDB Specialist', 'React Frontend Developer', 'Node.js Backend Developer'];

const Hero = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </motion.div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 bg-purple-500/10 rounded-lg"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile image with enhanced 3D effect */}
          <motion.div 
            whileHover={{ scale: 1.05, rotateY: 180 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden ring-4 ring-purple-500/20 transform perspective-1000"
          >
            <img
              src="/image/portfolio_image.jpg"
              alt="Nitin Jain"
              className="w-full h-full object-cover transform transition-transform duration-500"
            />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-4"
            whileHover={{ scale: 1.05 }}
          >
          Nitin Jain
          </motion.h1>

          <div className="h-8 mb-8">
            <motion.p
              key={currentSkill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl text-purple-600"
            >
              {skills[currentSkill]}
            </motion.p>
          </div>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-purple-600 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-purple-600 opacity-50" />
      </motion.div>
    </div>
  );
};

export default Hero;