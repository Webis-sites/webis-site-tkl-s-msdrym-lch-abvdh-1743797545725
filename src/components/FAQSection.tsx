'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "איך תהליך הגיוס עובד בתכל'ס?",
      answer: "בתכל'ס, אנחנו מתאימים בין מועמדים איכותיים למעסיקים מובילים בתחום. התהליך כולל ראיון ראשוני עם צוות הגיוס שלנו, בדיקת התאמה למשרות פתוחות, ולאחר מכן הפניה למעסיקים רלוונטיים. אנחנו מלווים אותך לאורך כל התהליך, מהראיון הראשוני ועד לחתימת החוזה."
    },
    {
      question: "האם השירות כרוך בתשלום עבור מחפשי עבודה?",
      answer: "לא, השירות שלנו הוא לחלוטין ללא עלות למחפשי עבודה. אנחנו מאמינים שכל אחד צריך לקבל הזדמנות שווה למצוא את העבודה המתאימה לו, ללא מחסומים כלכליים. המודל העסקי שלנו מבוסס על תשלום מהמעסיקים בלבד."
    },
    {
      question: "כמה זמן לוקח למצוא עבודה דרך תכל'ס?",
      answer: "משך הזמן למציאת עבודה משתנה בהתאם לניסיון, כישורים, ודרישות השוק. בממוצע, מועמדים שלנו מוצאים עבודה תוך 2-4 שבועות. עם זאת, חשוב לציין שהמטרה שלנו היא לא רק למצוא עבודה מהר, אלא למצוא את העבודה הנכונה עבורך, שתתאים לכישורים, לשאיפות ולערכים שלך."
    },
    {
      question: "באילו תחומים תכל'ס מתמחה?",
      answer: "תכל'ס מתמחה במגוון רחב של תחומים, כולל הייטק, פיננסים, שיווק, משאבי אנוש, ותפקידים ניהוליים. אנחנו עובדים עם חברות מובילות בכל גודל, מסטארטאפים ועד תאגידים גדולים, ומציעים משרות בכל רמות הניסיון."
    },
    {
      question: "מה העלות למעסיקים?",
      answer: "המודל העסקי שלנו מבוסס על הצלחה - המעסיקים משלמים רק כאשר הם מגייסים מועמד שהפנינו. העמלה מחושבת כאחוז מהשכר השנתי של העובד, והיא תחרותית ביחס לשוק. אנחנו מציעים גם תקופת אחריות, כך שאם העובד עוזב בתוך פרק זמן מסוים, אנחנו נמצא מחליף ללא עלות נוספת."
    },
    {
      question: "האם תכל'ס עובדת גם עם פרילנסרים?",
      answer: "כן, אנחנו מציעים שירותי גיוס גם לפרילנסרים וגם למעסיקים המחפשים פרילנסרים. אנחנו מבינים את הצרכים הייחודיים של עבודה עצמאית ומתאימים בין פרילנסרים מוכשרים לפרויקטים מתאימים, בין אם מדובר בעבודה קצרת טווח או בהתקשרות ארוכה יותר."
    },
    {
      question: "איך תכל'ס נבדלת מחברות השמה אחרות?",
      answer: "בתכל'ס, אנחנו מאמינים בגישה אישית ומותאמת. אנחנו לא רק מחפשים התאמה של כישורים וניסיון, אלא גם של תרבות ארגונית וערכים. הצוות שלנו מורכב ממגייסים עם ניסיון בתעשייה, שמבינים לעומק את הדרישות של כל תפקיד. בנוסף, אנחנו מספקים ליווי מקיף למועמדים, כולל הכנה לראיונות, משוב, וייעוץ קריירה, מה שמגדיל משמעותית את סיכויי ההצלחה."
    },
    {
      question: "האם אתם מציעים משרות מחוץ לישראל?",
      answer: "כן, יש לנו קשרים עם חברות בינלאומיות ואנחנו מציעים גם משרות מחוץ לישראל, בעיקר בתחום ההייטק. אנחנו יכולים לסייע בתהליך ההעסקה הבינלאומי, כולל התמודדות עם פערי שפה, תרבות, ודרישות ויזה. עם זאת, רוב המשרות שלנו ממוקמות בישראל."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white text-right" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">שאלות נפוצות</h2>
        <p className="text-lg text-gray-600 mb-10">
          בתכל'ס, אנחנו מאמינים בשקיפות מלאה. כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר. 
          אם יש לכם שאלות נוספות, אל תהססו ליצור איתנו קשר.
        </p>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-5 bg-white text-right focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {activeIndex === index ? (
                    <FiMinus className="text-primary text-xl" />
                  ) : (
                    <FiPlus className="text-primary text-xl" />
                  )}
                </motion.div>
                <span className="text-lg font-semibold text-gray-800 flex-grow mr-4">{item.question}</span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;