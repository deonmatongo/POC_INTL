import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function AccessibilityContent() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/Home#contact-form');
  };
  
  useEffect(() => {
    document.title = t('pages.accessibility.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.accessibility.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Accessibility Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Accessibility and inclusion"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.accessibility.heroTitle')}
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
          className="space-y-8 prose prose-lg max-w-none"
        >
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.accessibility.commitmentTitle')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.accessibility.commitmentContent')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.accessibility.standardsTitle')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.accessibility.standardsContent1')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('pages.accessibility.standard1')}</li>
              <li>{t('pages.accessibility.standard2')}</li>
              <li>{t('pages.accessibility.standard3')}</li>
              <li>{t('pages.accessibility.standard4')}</li>
            </ul>
            <p className="text-gray-700 text-base leading-relaxed mt-4">
              {t('pages.accessibility.standardsContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.accessibility.featuresTitle')}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('pages.accessibility.feature1')}</li>
              <li>{t('pages.accessibility.feature2')}</li>
              <li>{t('pages.accessibility.feature3')}</li>
              <li>{t('pages.accessibility.feature4')}</li>
              <li>{t('pages.accessibility.feature5')}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.accessibility.feedbackTitle')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.accessibility.feedbackContent')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              <button onClick={handleContactClick} className="text-[#0066ff] hover:underline text-left">
                {t('pages.accessibility.contactLink')}
              </button>
            </p>
          </div>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function Accessibility() {
  return (
    <LanguageProvider>
      <AccessibilityContent />
    </LanguageProvider>
  );
}

