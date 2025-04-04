'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import Image from 'next/image';

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  showContactForm?: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = 'מוכנים להתחיל? בואו נדבר ת׳כלס',
  description = 'אנחנו עובדים בצורה יעילה ומהירה כדי לחבר בינך לבין המשרה המושלמת. בלי סיבובים, בלי בזבוז זמן.',
  buttonText = 'צרו קשר עכשיו',
  showContactForm = true,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('הטופס נשלח בהצלחה!');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="relative overflow-hidden bg-primary text-white py-16 px-4 md:px-8 lg:px-16 rtl w-full">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="רקע CTA"
          fill
          style={{ objectFit: 'cover' }}
          sizes="100vw"
          className="opacity-20"
        />
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <motion.div 
          className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-white opacity-10"
          animate={{ 
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 8,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 -right-20 w-60 h-60 rounded-full bg-white opacity-5"
          animate={{ 
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-white opacity-5"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
          <div className="w-full lg:w-1/2 text-right">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            {!showContactForm && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <button 
                  className="bg-white text-primary hover:bg-opacity-90 text-lg font-bold py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 group"
                >
                  {buttonText}
                  <FaArrowLeft className="inline-block transition-transform group-hover:-translate-x-1" />
                </button>
              </motion.div>
            )}
          </div>

          {showContactForm && (
            <motion.div 
              className="w-full lg:w-1/2 bg-white bg-opacity-10 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-right">השאירו פרטים ונחזור אליכם</h3>
              <form onSubmit={handleSubmit} className="space-y-4 text-right">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">שם מלא</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 placeholder-white placeholder-opacity-60"
                    placeholder="השם המלא שלך"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block mb-1 font-medium">אימייל</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 placeholder-white placeholder-opacity-60"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">טלפון</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 placeholder-white placeholder-opacity-60"
                      placeholder="050-0000000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">הודעה</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 placeholder-white placeholder-opacity-60"
                    placeholder="איך נוכל לעזור לך?"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-opacity-90 font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>שליחה</span>
                  <FaPaperPlane />
                </motion.button>
              </form>
            </motion.div>
          )}
        </div>
      </div>

      {/* Decorative arrow element */}
      <motion.div 
        className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-10"
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 0L200 50L100 100L0 50L100 0Z" fill="white" />
        </svg>
      </motion.div>
    </section>
  );
};

export default CTASection;