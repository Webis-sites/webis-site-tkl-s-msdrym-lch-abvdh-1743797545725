'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

interface NavLink {
  title: string;
  target: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero-section');
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const links: NavLink[] = [
    { title: 'דף הבית', target: 'hero-section' },
    { title: 'אודות', target: 'about-section' },
    { title: 'שירותים', target: 'services-section' },
    { title: 'איך זה עובד', target: 'process-section' },
    { title: 'מעסיקים/מועמדים', target: 'services-toggle-section' },
    { title: 'עדויות', target: 'testimonials-section' },
    { title: 'שאלות נפוצות', target: 'faq-section' },
    { title: 'צור קשר', target: 'contact-section' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // סגירת התפריט הנייד בעת גלילה
      if (isOpen) {
        setIsOpen(false);
      }

      // עדכון מצב הסקרול
      setIsScrolled(window.scrollY > 50);

      // בדיקה איזה סקשן נמצא בתצוגה כרגע
      const scrollPosition = window.scrollY + 200; // מוסיף מרווח כדי שהסקשן יזוהה קצת לפני שמגיעים אליו

      // בודק את כל הסקשנים מהסוף להתחלה (כדי לתת עדיפות לסקשנים שיותר למעלה כשיש חפיפה)
      let currentSection = 'hero-section'; // ברירת מחדל לדף הבית
      
      // יוצר מערך של כל הסקשנים הקיימים בדף
      const sectionElements = links
        .map(link => ({ id: link.target, element: document.getElementById(link.target) }))
        .filter(item => item.element !== null);
      
      // מיון לפי המיקום בדף (מלמטה למעלה)
      sectionElements.sort((a, b) => {
        const aTop = a.element!.offsetTop;
        const bTop = b.element!.offsetTop;
        return bTop - aTop;
      });
      
      // בדיקה איזה סקשן בתצוגה
      for (const section of sectionElements) {
        const { id, element } = section;
        if (!element) continue;
        
        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;
        
        // אם החלק העליון של הסקשן כבר נראה או שאנחנו בתוך הסקשן
        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          currentSection = id;
          break;
        }
      }
      
      setActiveSection(currentSection);
    };

    // סגירת התפריט בעת לחיצה מחוץ לתפריט
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    // הפעלה ראשונית כדי לוודא שהמצב הנכון נקבע
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, links]);

  const scrollToSection = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 70; // גובה משוער של התפריט
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;
      
      // סגירת התפריט לפני הגלילה
      setIsOpen(false);
      
      // מעט השהיה לפני הגלילה כדי לאפשר לאנימציית הסגירה של התפריט להסתיים
      setTimeout(() => {
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        setActiveSection(targetId);
      }, 300);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 py-3 transition-all duration-300 rtl ${
        isScrolled ? 'bg-white shadow-md' : isOpen ? 'bg-white shadow-md' : 'bg-transparent'
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
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.target 
                    ? 'bg-primary text-white font-bold' 
                    : `${isScrolled ? 'text-gray-800' : 'text-gray-800'} hover:bg-primary hover:text-white`
                }`}
                aria-current={activeSection === link.target ? 'page' : undefined}
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
                isScrolled || isOpen ? 'text-gray-800' : 'text-gray-800'
              }`}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        ref={mobileMenuRef}
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
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
                className={`py-2 px-3 text-right rounded-lg transition-all duration-300 ${
                  activeSection === link.target 
                    ? 'bg-primary text-white font-bold' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                aria-current={activeSection === link.target ? 'page' : undefined}
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