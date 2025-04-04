import React from 'react';
import { FaHandshake, FaSearch, FaBullseye, FaRocket } from 'react-icons/fa';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-primary text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  const features = [
    {
      icon: <FaHandshake />,
      title: "גישה ישירה",
      description: "אנחנו מאמינים בתקשורת ישירה וכנה. ללא סיבובים מיותרים, אנחנו מחברים בין מועמדים למעסיקים באופן יעיל ומדויק."
    },
    {
      icon: <FaSearch />,
      title: "התאמה מדויקת",
      description: "המומחים שלנו מנתחים לעומק את הדרישות והכישורים כדי ליצור התאמות מדויקות שמביאות לתוצאות מצוינות לשני הצדדים."
    },
    {
      icon: <FaBullseye />,
      title: "מקצועיות ללא פשרות",
      description: "צוות המגייסים שלנו מורכב מאנשי מקצוע מנוסים המכירים את שוק העבודה לעומק ומחויבים להצלחת הלקוחות שלנו."
    },
    {
      icon: <FaRocket />,
      title: "תהליך מהיר ויעיל",
      description: "אנחנו מבינים שזמן הוא משאב יקר. התהליכים שלנו מתוכננים להיות יעילים ומהירים, תוך שמירה על איכות גבוהה."
    }
  ];

  return (
    <section className="py-16 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            למה <span className="text-primary">תכל׳ס</span> שונה?
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ב-תכל׳ס אנחנו מאמינים בגישה ישירה ומקצועית לגיוס. אנחנו לא סתם עוד חברת השמה - אנחנו שותפים אמיתיים בהצלחה שלך.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-700 text-lg mb-6 max-w-3xl mx-auto">
            אנחנו בתכל׳ס מבינים שמציאת עבודה או עובד מתאים היא משימה מורכבת. הגישה הישירה והמקצועית שלנו מבטיחה שתקבלו את התוצאות הטובות ביותר, בזמן הקצר ביותר.
          </p>
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-md hover:shadow-lg">
            צרו קשר עכשיו
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;