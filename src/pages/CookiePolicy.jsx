import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function CookiePolicyContent() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/Home#contact-form');
  };
  
  useEffect(() => {
    document.title = t('pages.cookiePolicy.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.cookiePolicy.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Cookie Policy Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Cookie policy and data privacy"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.cookiePolicy.heroTitle')}
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.cookiePolicy.lastUpdated')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {t('pages.cookiePolicy.lastUpdatedDate')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.cookiePolicy.whatAreCookies')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.cookiePolicy.cookiesContent1')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.cookiePolicy.cookiesContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.cookiePolicy.howWeUse')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.cookiePolicy.useContent1')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>{t('pages.cookiePolicy.useItem1')}</li>
              <li>{t('pages.cookiePolicy.useItem2')}</li>
              <li>{t('pages.cookiePolicy.useItem3')}</li>
              <li>{t('pages.cookiePolicy.useItem4')}</li>
            </ul>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.cookiePolicy.useContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.cookiePolicy.typesOfCookies')}</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.cookiePolicy.essentialTitle')}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t('pages.cookiePolicy.essentialContent')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.cookiePolicy.analyticsTitle')}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t('pages.cookiePolicy.analyticsContent')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.cookiePolicy.functionalTitle')}</h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t('pages.cookiePolicy.functionalContent')}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.cookiePolicy.thirdParty')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.cookiePolicy.thirdPartyContent1')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.cookiePolicy.thirdPartyContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.cookiePolicy.manageCookies')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.cookiePolicy.manageContent1')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.cookiePolicy.manageContent2')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('pages.cookiePolicy.manageItem1')}</li>
              <li>{t('pages.cookiePolicy.manageItem2')}</li>
              <li>{t('pages.cookiePolicy.manageItem3')}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.cookiePolicy.contactUs')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.cookiePolicy.contactContent')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              <button onClick={handleContactClick} className="text-[#0066ff] hover:underline text-left">
                {t('pages.cookiePolicy.contactLink')}
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

export default function CookiePolicy() {
  return (
    <LanguageProvider>
      <CookiePolicyContent />
    </LanguageProvider>
  );
}

