import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

interface SocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const FooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    { icon: <FaFacebook size={20} />, href: 'https://facebook.com', label: 'פייסבוק' },
    { icon: <FaTwitter size={20} />, href: 'https://twitter.com', label: 'טוויטר' },
    { icon: <FaLinkedin size={20} />, href: 'https://linkedin.com', label: 'לינקדאין' },
    { icon: <FaInstagram size={20} />, href: 'https://instagram.com', label: 'אינסטגרם' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-10 dir-rtl" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="תכל׳ס מסדרים לך עבודה" 
                width={150} 
                height={50}
                className="h-auto"
              />
            </div>
            <p className="text-gray-300 mt-2 text-sm">
              תכל׳ס מסדרים לך עבודה - בלי סיבובים, בלי הבטחות. פשוט עבודה.
            </p>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">צור קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary" />
                <a href="tel:+972123456789" className="hover:text-primary transition-colors">
                  072-123-4567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-primary" />
                <a href="mailto:info@tachles-jobs.co.il" className="hover:text-primary transition-colors">
                  info@tachles-jobs.co.il
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <span>רחוב הרצל 123, תל אביב</span>
              </li>
            </ul>
          </div>

          {/* Links and Social */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-4">עקבו אחרינו</h3>
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-primary hover:text-gray-900 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <h3 className="text-primary font-bold text-lg mb-4 mt-6">מידע נוסף</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} תכל׳ס מסדרים לך עבודה. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;