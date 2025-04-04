'use client';

import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface FormData {
  name: string;
  phone: string;
  email: string;
  jobRequirements: string;
}

const HeroSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    jobRequirements: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      jobRequirements: '',
    });
  };

  return (
    <section className="relative bg-white text-right overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/30 to-transparent" />
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div 
              key={i} 
              className="border-[0.5px] border-primary/20"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              השמה חכמה שמבינה את <span className="text-primary">ת'כלס</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              אנחנו מתמחים בחיבור בין מועמדים מוכשרים לבין משרות מובילות בשוק. 
              עם הניסיון והמומחיות שלנו, אנחנו מבינים בדיוק מה נדרש כדי להתאים את האדם הנכון למשרה הנכונה.
              תכל'ס - אנחנו פה כדי לסדר לך עבודה.
            </motion.p>

            {/* Visual Element */}
            <motion.div 
              className="hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative h-24 w-full">
                <div className="absolute top-0 right-0 h-4 w-4 bg-primary rounded-full" />
                <div className="absolute top-8 right-12 h-6 w-6 bg-primary rounded-full" />
                <div className="absolute top-16 right-24 h-8 w-8 bg-primary rounded-full" />
                <div className="absolute top-4 right-40 h-5 w-5 bg-primary rounded-full" />
                <div className="absolute top-12 right-56 h-7 w-7 bg-primary rounded-full" />
                <div className="absolute top-2 right-72 h-4 w-4 bg-primary rounded-full" />
                <div className="h-1 bg-primary/50 absolute top-12 right-0 w-3/4 rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Form Side */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">מעוניינים במשרה חדשה?</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="שם מלא"
                    required
                    className="w-full px-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <FaPhone />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="טלפון"
                    required
                    className="w-full px-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="אימייל"
                    required
                    className="w-full px-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div className="relative">
                  <div className="absolute top-3 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                    <FaBriefcase />
                  </div>
                  <textarea
                    name="jobRequirements"
                    value={formData.jobRequirements}
                    onChange={handleChange}
                    placeholder="סוג משרה / דרישות תפקיד"
                    rows={3}
                    className="w-full px-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-primary text-white font-bold rounded-lg transition-all hover:bg-primary-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  השאירו פרטים ונתחיל לזוז – תכלס
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;