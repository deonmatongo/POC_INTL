import React, { useEffect } from 'react';
import { LanguageProvider } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import HeroSection from '@/components/home/HeroSection';
import UnleashSection from '@/components/home/UnleashSection';
import FeaturedInsights from '@/components/home/FeaturedInsights';
import BusinessChallenges from '@/components/home/BusinessChallenges';
import StatsSection from '@/components/home/StatsSection';
import ContactForm from '@/components/home/ContactForm';
import Footer from '@/components/home/Footer';
import BackToTop from '@/components/home/BackToTop';

export default function Home() {
  useEffect(() => {
    document.title = 'POC International - Global Consulting Firm | Performance & Transformation';
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'POC International is a global consulting firm that powers performance. We unlock potential in your people and unleash transformation across your business—synchronizing strategy, operations, and talent to accelerate performance and fuel growth.';
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = 'consulting, business transformation, organizational development, talent management, leadership development, performance optimization, employee engagement';
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
        <main>
          <HeroSection />
          <UnleashSection />
          <FeaturedInsights />
          <BusinessChallenges />
          <StatsSection />
          <ContactForm />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}