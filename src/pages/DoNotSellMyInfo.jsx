import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Check } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function DoNotSellMyInfoContent() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.title = t('pages.doNotSellMyInfo.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.doNotSellMyInfo.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save preference
    localStorage.setItem('doNotSellInfo', 'true');
    localStorage.setItem('doNotSellInfoEmail', email);
    localStorage.setItem('doNotSellInfoDate', new Date().toISOString());
    setSubmitted(true);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    navigate('/Home#contact-form');
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
        <main>
          <section className="bg-white py-20 md:py-32">
            <div className="max-w-2xl mx-auto px-6 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 rounded-lg p-12"
              >
                <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t('pages.doNotSellMyInfo.successTitle')}</h2>
                <p className="text-gray-700 text-lg">{t('pages.doNotSellMyInfo.successMessage')}</p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Do Not Sell My Info Hero">
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
          {t('pages.doNotSellMyInfo.heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t('pages.doNotSellMyInfo.heroSubtitle')}
        </motion.p>
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
          <div className="bg-[#0066ff]/10 rounded-lg p-8 mb-8">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-[#0066ff] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.doNotSellMyInfo.overviewTitle')}</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('pages.doNotSellMyInfo.overviewContent1')}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {t('pages.doNotSellMyInfo.overviewContent2')}
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('pages.doNotSellMyInfo.emailLabel')}
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                placeholder={t('pages.doNotSellMyInfo.emailPlaceholder')}
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#0066ff] text-white font-medium rounded-lg hover:bg-[#0055dd] transition-colors"
            >
              {t('pages.doNotSellMyInfo.submitButton')}
            </button>
          </form>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.doNotSellMyInfo.rightsTitle')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('pages.doNotSellMyInfo.rightsContent')}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.doNotSellMyInfo.contactTitle')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('pages.doNotSellMyInfo.contactContent')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              <button onClick={handleContactClick} className="text-[#0066ff] hover:underline text-left">
                {t('pages.doNotSellMyInfo.contactLink')}
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

export default function DoNotSellMyInfo() {
  return (
    <LanguageProvider>
      <DoNotSellMyInfoContent />
    </LanguageProvider>
  );
}

