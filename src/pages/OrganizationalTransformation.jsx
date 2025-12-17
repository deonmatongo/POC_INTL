import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function OrganizationalTransformationContent() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('pages.organizationalTransformation.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.organizationalTransformation.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
    
    {/* Hero Section */}
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Organizational Transformation Hero">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942d82489e40d47754bcee1/bd69f3c67_organizationaltransformation.png')`,
        }}
        role="img"
        aria-label="Team collaboration and organizational success"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.organizationalTransformation.heroTitle')}
        </motion.h1>
      </div>
    </section>

    {/* Content Section */}
    <main>
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {t('pages.organizationalTransformation.content1')}
          </p>
          
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {t('pages.organizationalTransformation.content2')}
          </p>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function OrganizationalTransformation() {
  return (
    <LanguageProvider>
      <OrganizationalTransformationContent />
    </LanguageProvider>
  );
}