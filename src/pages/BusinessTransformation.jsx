import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function BusinessTransformationContent() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('pages.businessTransformation.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.businessTransformation.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Business Transformation Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Business transformation and growth"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.businessTransformation.heroTitle')}
        </motion.h1>
      </div>
    </section>

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
            {t('pages.businessTransformation.content1')}
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {t('pages.businessTransformation.content2')}
          </p>

          <div className="bg-gray-50 rounded-lg p-8 my-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.businessTransformation.servicesTitle')}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('pages.businessTransformation.service1')}</li>
              <li>{t('pages.businessTransformation.service2')}</li>
              <li>{t('pages.businessTransformation.service3')}</li>
              <li>{t('pages.businessTransformation.service4')}</li>
              <li>{t('pages.businessTransformation.service5')}</li>
            </ul>
          </div>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {t('pages.businessTransformation.content3')}
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {t('pages.businessTransformation.content4')}
          </p>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function BusinessTransformation() {
  return (
    <LanguageProvider>
      <BusinessTransformationContent />
    </LanguageProvider>
  );
}

