import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function TermsOfServiceContent() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/Home#contact-form');
  };
  
  useEffect(() => {
    document.title = t('pages.termsOfService.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.termsOfService.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Terms of Service Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Legal terms and conditions"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.termsOfService.heroTitle')}
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.lastUpdated')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {t('pages.termsOfService.lastUpdatedDate')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.acceptance')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.termsOfService.acceptanceContent')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.useOfServices')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.termsOfService.useContent1')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('pages.termsOfService.useItem1')}</li>
              <li>{t('pages.termsOfService.useItem2')}</li>
              <li>{t('pages.termsOfService.useItem3')}</li>
              <li>{t('pages.termsOfService.useItem4')}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.intellectualProperty')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.termsOfService.intellectualPropertyContent')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.userContent')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.termsOfService.userContentText')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.disclaimers')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.termsOfService.disclaimersContent1')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.termsOfService.disclaimersContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.limitationOfLiability')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.termsOfService.limitationContent')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.indemnification')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.termsOfService.indemnificationContent')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.changes')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.termsOfService.changesContent')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.termsOfService.contactUs')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.termsOfService.contactContent')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              <button onClick={handleContactClick} className="text-[#0066ff] hover:underline text-left">
                {t('pages.termsOfService.contactLink')}
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

export default function TermsOfService() {
  return (
    <LanguageProvider>
      <TermsOfServiceContent />
    </LanguageProvider>
  );
}

