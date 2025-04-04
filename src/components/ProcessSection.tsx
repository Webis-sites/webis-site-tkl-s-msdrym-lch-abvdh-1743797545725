'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaSearch, FaFileAlt, FaUserTie, FaCheckCircle } from 'react-icons/fa';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  forEmployer?: string;
  forJobSeeker?: string;
}

const ProcessSection: React.FC = () => {
  const [animateSteps, setAnimateSteps] = useState(false);

  useEffect(() => {
    setAnimateSteps(true);
  }, []);

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "פגישה ראשונית",
      description: "שיחת היכרות ראשונית להבנת הצרכים והציפיות שלך",
      icon: <FaHandshake size={32} />,
      forEmployer: "הבנת דרישות התפקיד והחברה",
      forJobSeeker: "הבנת הניסיון והשאיפות שלך"
    },
    {
      id: 2,
      title: "איתור מועמדים/משרות",
      description: "תהליך מקיף של חיפוש וסינון להתאמה מדויקת",
      icon: <FaSearch size={32} />,
      forEmployer: "סינון מועמדים מתאימים לתפקיד",
      forJobSeeker: "איתור משרות המתאימות לכישוריך"
    },
    {
      id: 3,
      title: "הכנה לראיונות",
      description: "ליווי אישי והכנה מקצועית לקראת תהליך המיון",
      icon: <FaFileAlt size={32} />,
      forEmployer: "הכנה לראיונות עם המועמדים",
      forJobSeeker: "הכנה מקיפה לראיונות עבודה"
    },
    {
      id: 4,
      title: "תיאום וליווי",
      description: "תיאום פגישות וליווי לאורך כל התהליך",
      icon: <FaUserTie size={32} />,
      forEmployer: "תיאום ראיונות עם המועמדים המובילים",
      forJobSeeker: "ליווי בתהליכי הראיונות והמשא ומתן"
    },
    {
      id: 5,
      title: "השמה מוצלחת",
      description: "סגירת התהליך בהצלחה והמשך ליווי לאחר ההשמה",
      icon: <FaCheckCircle size={32} />,
      forEmployer: "קליטת עובד מתאים והמשך תמיכה",
      forJobSeeker: "התחלת עבודה חדשה וליווי בקליטה"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 text-right w-full" dir="rtl">
      <div className="w-full px-4">
        <div className="text-center mb-12 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">איך תכל׳ס עובדת?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            אנחנו מלווים אותך בכל שלבי תהליך הגיוס וההשמה, מהפגישה הראשונית ועד להשמה מוצלחת
          </p>
        </div>

        <motion.div
          className="relative max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={animateSteps ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 right-[28px] w-1 bg-gradient-to-b from-primary-light to-primary h-full rounded-full hidden md:block" />

          {steps.map((step) => (
            <motion.div 
              key={step.id} 
              className="flex flex-col md:flex-row items-start mb-12 relative"
              variants={itemVariants}
            >
              {/* Icon container */}
              <div className="flex-shrink-0 z-10 mb-4 md:mb-0">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md border-2 border-primary text-primary">
                  {step.icon}
                </div>
              </div>

              {/* Content container */}
              <div className="md:mr-8 w-full">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-r-4 border-primary">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-700 mb-4">{step.description}</p>
                  
                  {/* Dual tracks for employers and job seekers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-bold text-blue-800 mb-1">למעסיקים:</h4>
                      <p className="text-sm text-gray-700">{step.forEmployer}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-bold text-green-800 mb-1">למחפשי עבודה:</h4>
                      <p className="text-sm text-gray-700">{step.forJobSeeker}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          <button 
            onClick={() => window.location.href = '/start-process'}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            בואו נתחיל את התהליך
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;