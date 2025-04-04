'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaBuilding, FaHandshake, FaChartLine } from 'react-icons/fa';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center h-full"
      whileHover={{ 
        y: -10,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaUserTie />,
      title: "גיוס מועמדים",
      description: "איתור וגיוס מועמדים מקצועיים המתאימים בדיוק לדרישות התפקיד שלך. אנחנו מבצעים סינון קפדני ומציעים לך רק את המועמדים הטובים ביותר."
    },
    {
      icon: <FaBuilding />,
      title: "פתרונות כוח אדם למעסיקים",
      description: "מגוון פתרונות גיוס וכוח אדם המותאמים לצרכי העסק שלך, מגיוס זמני ועד העסקה קבועה. אנחנו דואגים לכל הפרטים כדי שתוכל להתמקד בניהול העסק."
    },
    {
      icon: <FaHandshake />,
      title: "התאמת משרות",
      description: "התאמה מדויקת בין מועמדים למשרות פנויות, בהתבסס על כישורים, ניסיון והתאמה תרבותית. אנחנו יוצרים חיבורים מוצלחים שמחזיקים לאורך זמן."
    },
    {
      icon: <FaChartLine />,
      title: "ייעוץ קריירה",
      description: "ליווי אישי למועמדים בתהליך חיפוש העבודה, כולל הכנה לראיונות, שיפור קורות חיים וייעוץ מקצועי לפיתוח קריירה מוצלחת."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            השירותים שלנו
          </motion.h2>
          <motion.div 
            className="w-16 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            ב-תכל׳ס אנחנו מסדרים לך עבודה באמת. אנחנו מציעים מגוון שירותים מקצועיים שיעזרו לך למצוא את העבודה המושלמת או את העובד המושלם.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
            צור קשר עכשיו
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;