'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  avatarUrl: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "תכל'ס שינתה את חיי המקצועיים. תוך שבועיים מצאתי עבודה בחברת הייטק מובילה עם תנאים מעולים.",
    name: "יעל כהן",
    position: "מפתחת Full Stack",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    quote: "כמעסיק, תכל'ס חסכה לי זמן יקר בתהליך הגיוס. המועמדים שקיבלתי היו מדויקים לצרכים שלנו והשתלבו מצוין בצוות.",
    name: "אלון לוי",
    position: "מנכ\"ל, חברת סייבר",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    quote: "השירות המקצועי והאישי שקיבלתי מתכל'ס היה יוצא מן הכלל. הם באמת מבינים את שוק העבודה ויודעים לחבר בין אנשים לבין ההזדמנות המושלמת.",
    name: "מיכל אברהם",
    position: "מנהלת משאבי אנוש",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    quote: "אחרי חודשים של חיפוש עבודה ללא הצלחה, תכל'ס עזרו לי למצוא תפקיד שמתאים בדיוק לכישורים ולשאיפות שלי. הליווי האישי היה מעל ומעבר.",
    name: "דוד ישראלי",
    position: "מהנדס תוכנה",
    avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
  };

  useEffect(() => {
    resetAutoplay();
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isAutoplay, currentIndex]);

  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 rtl w-full" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">הסיפורים האמיתיים מאחורי ההצלחות שלנו</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אלפי מועמדים ומעסיקים כבר מצאו את ההתאמה המושלמת דרכנו. הנה מה שיש להם לומר על תכל'ס.
          </p>
        </div>

        <div 
          className="relative bg-white rounded-xl shadow-lg overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 z-0 opacity-10">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
              alt="רקע עדויות"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
              className="opacity-25"
            />
          </div>
          
          <div className="relative z-10 min-h-[450px] sm:min-h-[400px] md:min-h-[350px] overflow-hidden px-4 sm:px-6">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute w-full h-full flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 md:p-10"
              >
                <div className="mb-6 md:mb-0 md:ml-8 flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary relative mx-auto md:mx-0">
                      <Image 
                        src={testimonials[currentIndex].avatarUrl}
                        alt={testimonials[currentIndex].name}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 128px"
                      />
                    </div>
                    <div className="absolute -bottom-2 -left-2 bg-primary text-white p-2 rounded-full">
                      <FaQuoteRight className="text-sm sm:text-xl" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-right">
                  <p className="text-md sm:text-lg md:text-xl font-medium mb-4 md:mb-6 text-gray-700 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                    <p className="text-primary font-medium">{testimonials[currentIndex].position}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 rtl:space-x-reverse">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white text-primary hover:bg-primary hover:text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none z-20"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-sm sm:text-lg md:text-xl" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white text-primary hover:bg-primary hover:text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none z-20"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-sm sm:text-lg md:text-xl" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">גם אתם רוצים להצליח?</h3>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-primary hover:bg-primary-dark text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none"
          >
            דברו איתנו עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;