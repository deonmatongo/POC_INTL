import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function PrivacyPolicyContent() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/Home#contact-form');
  };
  
  useEffect(() => {
    document.title = t('pages.privacyPolicy.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.privacyPolicy.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Privacy Policy Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Privacy and data protection"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.privacyPolicy.heroTitle')}
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
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.lastUpdated')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {t('pages.privacyPolicy.lastUpdatedDate')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.introduction')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.privacyPolicy.introContent1')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.privacyPolicy.introContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.informationWeCollect')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.privacyPolicy.collectContent1')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>{t('pages.privacyPolicy.collectItem1')}</li>
              <li>{t('pages.privacyPolicy.collectItem2')}</li>
              <li>{t('pages.privacyPolicy.collectItem3')}</li>
              <li>{t('pages.privacyPolicy.collectItem4')}</li>
              <li>{t('pages.privacyPolicy.collectItem5')}</li>
            </ul>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.privacyPolicy.collectContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.howWeUse')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.privacyPolicy.useContent1')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('pages.privacyPolicy.useItem1')}</li>
              <li>{t('pages.privacyPolicy.useItem2')}</li>
              <li>{t('pages.privacyPolicy.useItem3')}</li>
              <li>{t('pages.privacyPolicy.useItem4')}</li>
              <li>{t('pages.privacyPolicy.useItem5')}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.dataSharing')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.privacyPolicy.sharingContent1')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.privacyPolicy.sharingContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.dataSecurity')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.privacyPolicy.securityContent')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.yourRights')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.privacyPolicy.rightsContent1')}
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>{t('pages.privacyPolicy.rightsItem1')}</li>
              <li>{t('pages.privacyPolicy.rightsItem2')}</li>
              <li>{t('pages.privacyPolicy.rightsItem3')}</li>
              <li>{t('pages.privacyPolicy.rightsItem4')}</li>
              <li>{t('pages.privacyPolicy.rightsItem5')}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.cookies')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.privacyPolicy.cookiesContent')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              <button onClick={() => navigate('/CookiePolicy')} className="text-[#0066ff] hover:underline text-left">
                {t('pages.privacyPolicy.cookiePolicyLink')}
              </button>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.contactUs')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              {t('pages.privacyPolicy.contactContent')}
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              <button onClick={handleContactClick} className="text-[#0066ff] hover:underline text-left">
                {t('pages.privacyPolicy.contactLink')}
              </button>
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.privacyPolicy.changes')}</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              {t('pages.privacyPolicy.changesContent')}
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

export default function PrivacyPolicy() {
  return (
    <LanguageProvider>
      <PrivacyPolicyContent />
    </LanguageProvider>
  );
}

