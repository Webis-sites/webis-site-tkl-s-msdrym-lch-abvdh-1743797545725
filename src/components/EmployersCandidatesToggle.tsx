'use client';

import React, { useState, useEffect } from 'react';
import { FaBuilding, FaUserTie, FaCheckCircle, FaSearch, FaHandshake, FaChartLine } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface ContentSection {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const EmployersCandidatesToggle: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employers' | 'jobSeekers'>('employers');

  // Animation variants
  const tabVariants = {
    active: { 
      backgroundColor: '#0fd7ff',
      color: '#ffffff',
      scale: 1.05,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    },
    inactive: { 
      backgroundColor: '#f0f0f0',
      color: '#333333',
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 20 }
    }
  };

  const contentVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Content for employers
  const employersContent: ContentSection[] = [
    {
      title: "איתור מועמדים איכותיים",
      description: "אנו מתמחים באיתור המועמדים המתאימים ביותר לדרישות החברה שלך, תוך התאמה מדויקת לתרבות הארגונית.",
      icon: <FaUserTie className="text-3xl text-primary" />
    },
    {
      title: "תהליך גיוס מהיר ויעיל",
      description: "חסכו זמן יקר עם תהליך הגיוס המתקדם שלנו, המאפשר מציאת עובדים מתאימים במהירות וביעילות.",
      icon: <FaCheckCircle className="text-3xl text-primary" />
    },
    {
      title: "ליווי מקצועי לאורך כל הדרך",
      description: "צוות המומחים שלנו ילווה אתכם מרגע הגדרת הצורך ועד לקליטת העובד החדש בארגון.",
      icon: <FaHandshake className="text-3xl text-primary" />
    }
  ];

  // Content for job seekers
  const jobSeekersContent: ContentSection[] = [
    {
      title: "הזדמנויות תעסוקה מובילות",
      description: "גישה למשרות בלעדיות בחברות מובילות במשק, עם אפשרויות קידום משמעותיות.",
      icon: <FaSearch className="text-3xl text-primary" />
    },
    {
      title: "ליווי אישי בתהליך המיון",
      description: "מלווים אותך בכל שלבי תהליך המיון והקבלה, כולל הכנה לראיונות והכוונה מקצועית.",
      icon: <FaUserTie className="text-3xl text-primary" />
    },
    {
      title: "פיתוח קריירה מקצועי",
      description: "ייעוץ מקצועי לפיתוח הקריירה שלך, זיהוי חוזקות וכיווני התפתחות אופטימליים.",
      icon: <FaChartLine className="text-3xl text-primary" />
    }
  ];

  useEffect(() => {
    // Set direction to RTL for Hebrew
    document.documentElement.dir = 'rtl';
    
    return () => {
      // Cleanup if needed
      document.documentElement.dir = 'ltr';
    };
  }, []);

  return (
    <section id="services-toggle-section" className="w-full py-16 bg-white" dir="rtl">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">תכל׳ס מסדרים לך עבודה</h2>
          
          {/* Toggle Switch */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-1 rounded-full flex items-center w-full max-w-md">
              <motion.button
                variants={tabVariants}
                animate={activeTab === 'employers' ? 'active' : 'inactive'}
                onClick={() => setActiveTab('employers')}
                className="flex-1 py-3 px-6 rounded-full font-bold text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: activeTab === 'employers' ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaBuilding className="inline-block" />
                <span>מעסיקים</span>
              </motion.button>
              
              <motion.button
                variants={tabVariants}
                animate={activeTab === 'jobSeekers' ? 'active' : 'inactive'}
                onClick={() => setActiveTab('jobSeekers')}
                className="flex-1 py-3 px-6 rounded-full font-bold text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: activeTab === 'jobSeekers' ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaUserTie className="inline-block" />
                <span>מחפשי עבודה</span>
              </motion.button>
            </div>
          </div>
          
          {/* Content Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={contentVariants}
              className="min-h-[400px]"
            >
              {activeTab === 'employers' ? (
                <div className="space-y-8">
                  <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-center mb-6"
                  >
                    פתרונות גיוס מתקדמים למעסיקים
                  </motion.h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {employersContent.map((section, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex justify-center mb-4">
                          {section.icon}
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-center">{section.title}</h4>
                        <p className="text-gray-700 text-center">{section.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex justify-center mt-8"
                  >
                    <button 
                      onClick={() => {
                        const contactSection = document.getElementById('contact-section');
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      דברו איתנו על צרכי הגיוס שלכם
                    </button>
                  </motion.div>
                </div>
              ) : (
                <div className="space-y-8">
                  <motion.h3 
                    variants={itemVariants}
                    className="text-2xl font-bold text-center mb-6"
                  >
                    מצאו את העבודה המושלמת עבורכם
                  </motion.h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {jobSeekersContent.map((section, index) => (
                      <motion.div 
                        key={index}
                        variants={itemVariants}
                        className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex justify-center mb-4">
                          {section.icon}
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-center">{section.title}</h4>
                        <p className="text-gray-700 text-center">{section.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    variants={itemVariants}
                    className="flex justify-center mt-8"
                  >
                    <button 
                      disabled
                      className="bg-primary bg-opacity-70 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 cursor-not-allowed"
                    >
                      הגישו קורות חיים עכשיו
                    </button>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default EmployersCandidatesToggle;