import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Section - Name & Copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Nitin's Portfolio</h2>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/Nitinjain14" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/nitin-jain-595635250/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:anchalia.nitin@gmail.com?subject=Let's%20Connect&body=Hi%20Nitin,%0D%0A%0D%0AI'm%20interested%20in%20your%20work!"
            className="hover:text-red-500 transition"
        >
  <Mail className="w-6 h-6" />
</a>

          <a href="tel:+918918930767" className="hover:text-green-500 transition">
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
