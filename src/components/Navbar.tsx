'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  title: string;
  target: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links: NavLink[] = [
    { title: 'דף הבית', target: 'hero-section' },
    { title: 'שירותים', target: 'services-section' },
    { title: 'איך זה עובד', target: 'process-section' },
    { title: 'עדויות', target: 'testimonials-section' },
    { title: 'אודות', target: 'about-section' },
    { title: 'שאלות נפוצות', target: 'faq-section' },
    { title: 'צור קשר', target: 'contact-section' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 rtl ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="text-2xl font-bold cursor-pointer" 
            onClick={() => scrollToSection('hero-section')}
          >
            תכל'ס
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 space-x-reverse">
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 hover:bg-primary hover:text-white ${
                  isScrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
              >
                {link.title}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 focus:outline-none ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
        className={`md:hidden bg-white shadow-lg overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-2">
            {links.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollToSection(link.target)}
                className="py-2 px-3 text-right hover:bg-gray-100 rounded-lg text-gray-800 transition-all duration-300"
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 