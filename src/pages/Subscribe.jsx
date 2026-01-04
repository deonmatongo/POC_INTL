import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function SubscribeContent() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [preferences, setPreferences] = useState({
    newsletter: true,
    insights: false,
    updates: false,
  });

  useEffect(() => {
    document.title = t('pages.subscribe.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.subscribe.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate subscription
    localStorage.setItem('newsletterSubscription', JSON.stringify({
      email,
      preferences,
      date: new Date().toISOString(),
    }));
    setSubscribed(true);
  };

  if (subscribed) {
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
                <h2 className="text-3xl font-semibold text-gray-900 mb-4">{t('pages.subscribe.successTitle')}</h2>
                <p className="text-gray-700 text-lg">{t('pages.subscribe.successMessage')}</p>
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
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Subscribe Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Newsletter subscription"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.subscribe.heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t('pages.subscribe.heroSubtitle')}
        </motion.p>
      </div>
    </section>

    <section className="bg-white py-20 md:py-32">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('pages.subscribe.emailLabel')}
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                  placeholder={t('pages.subscribe.emailPlaceholder')}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                {t('pages.subscribe.preferencesLabel')}
              </label>
              <div className="space-y-3">
                {Object.entries(preferences).map(([key, value]) => (
                  <label key={key} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={(e) => setPreferences({ ...preferences, [key]: e.target.checked })}
                      className="w-5 h-5 text-[#0066ff] border-gray-300 rounded focus:ring-[#0066ff]"
                    />
                    <span className="text-gray-700">{t(`pages.subscribe.preference${key.charAt(0).toUpperCase() + key.slice(1)}`)}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#0066ff] text-white font-medium rounded-lg hover:bg-[#0055dd] transition-colors"
            >
              {t('pages.subscribe.submitButton')}
            </button>
          </form>

          <p className="text-sm text-gray-500 text-center">
            {t('pages.subscribe.privacyNote')}
          </p>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function Subscribe() {
  return (
    <LanguageProvider>
      <SubscribeContent />
    </LanguageProvider>
  );
}

