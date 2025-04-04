'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  position: string;
  avatarUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "תכל'ס שינתה את חיי המקצועיים. תוך שבועיים מצאתי עבודה בחברת הייטק מובילה עם תנאים מעולים.",
    name: "יעל כהן",
    position: "מפתחת Full Stack",
    avatarUrl: "/avatars/avatar-1.jpg"
  },
  {
    id: 2,
    quote: "כמעסיק, תכל'ס חסכה לי זמן יקר בתהליך הגיוס. המועמדים שקיבלתי היו מדויקים לצרכים שלנו והשתלבו מצוין בצוות.",
    name: "אלון לוי",
    position: "מנכ\"ל, חברת סייבר",
    avatarUrl: "/avatars/avatar-2.jpg"
  },
  {
    id: 3,
    quote: "השירות המקצועי והאישי שקיבלתי מתכל'ס היה יוצא מן הכלל. הם באמת מבינים את שוק העבודה ויודעים לחבר בין אנשים לבין ההזדמנות המושלמת.",
    name: "מיכל אברהם",
    position: "מנהלת משאבי אנוש",
    avatarUrl: "/avatars/avatar-3.jpg"
  },
  {
    id: 4,
    quote: "אחרי חודשים של חיפוש עבודה ללא הצלחה, תכל'ס עזרו לי למצוא תפקיד שמתאים בדיוק לכישורים ולשאיפות שלי. הליווי האישי היה מעל ומעבר.",
    name: "דוד ישראלי",
    position: "מהנדס תוכנה",
    avatarUrl: "/avatars/avatar-4.jpg"
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
    <section className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16 rtl" dir="rtl">
      <div className="max-w-6xl mx-auto">
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
          <div className="relative h-[400px] md:h-[350px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
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
                className="absolute w-full h-full flex flex-col md:flex-row items-center justify-center p-6 md:p-10"
              >
                <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                  <div className="relative">
                    {testimonials[currentIndex].avatarUrl ? (
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary">
                        <img 
                          src={testimonials[currentIndex].avatarUrl} 
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center border-4 border-primary">
                        <span className="text-3xl font-bold text-gray-400">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute -bottom-2 -left-2 bg-primary text-white p-2 rounded-full">
                      <FaQuoteRight className="text-xl" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-right">
                  <p className="text-lg md:text-xl font-medium mb-6 text-gray-700 leading-relaxed">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-primary hover:bg-primary hover:text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">גם אתם רוצים להצליח?</h3>
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none">
            דברו איתנו עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;