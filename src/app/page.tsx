'use client';

import React from 'react';
import Hero from '@/components/Hero';
import HeroSection from '../components/HeroSection';
import AboutUsSection from '../components/AboutUsSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import EmployersCandidatesToggle from '../components/EmployersCandidatesToggle';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import FooterSection from '../components/FooterSection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col w-full">
      <main className="flex-1 w-full">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <EmployersCandidatesToggle />
        <FAQSection />
        <CTASection />
        <FooterSection />
      </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800 w-full">
        <div className="w-full px-4 text-center text-gray-500 text-sm">
          &copy; 2025 תכל׳ס מסדרים לך עבודה. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}