import React, { useEffect } from 'react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import HeroSection from '@/components/home/HeroSection';
import UnleashSection from '@/components/home/UnleashSection';
import FeaturedInsights from '@/components/home/FeaturedInsights';
import BusinessChallenges from '@/components/home/BusinessChallenges';
import StatsSection from '@/components/home/StatsSection';
import ContactForm from '@/components/home/ContactForm';
import Footer from '@/components/home/Footer';
import BackToTop from '@/components/home/BackToTop';

function HomeContent() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('meta.title');
    
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('meta.description');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.name = 'keywords';
    metaKeywords.content = t('meta.keywords');
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }
  }, [t]);

  return (
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
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <HomeContent />
    </LanguageProvider>
  );
}