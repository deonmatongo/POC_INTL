import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function CookieSettingsContent() {
  const { t } = useLanguage();
  const [essentialCookies, setEssentialCookies] = useState(true);
  const [analyticsCookies, setAnalyticsCookies] = useState(false);
  const [functionalCookies, setFunctionalCookies] = useState(false);
  const [marketingCookies, setMarketingCookies] = useState(false);

  useEffect(() => {
    document.title = t('pages.cookieSettings.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.cookieSettings.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);

    // Load saved preferences
    const savedPrefs = localStorage.getItem('cookiePreferences');
    if (savedPrefs) {
      const prefs = JSON.parse(savedPrefs);
      setAnalyticsCookies(prefs.analytics || false);
      setFunctionalCookies(prefs.functional || false);
      setMarketingCookies(prefs.marketing || false);
    }
  }, [t]);

  const handleSave = () => {
    const preferences = {
      analytics: analyticsCookies,
      functional: functionalCookies,
      marketing: marketingCookies,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    localStorage.setItem('cookieConsent', 'custom');
    alert(t('pages.cookieSettings.savedMessage'));
  };

  const CookieToggle = ({ enabled, setEnabled, label, description }) => (
    <div className="flex items-start justify-between p-4 border border-gray-200 rounded-lg">
      <div className="flex-1 mr-4">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="font-semibold text-gray-900">{label}</h3>
          <span className={`px-2 py-1 text-xs rounded-full ${enabled ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
            {enabled ? t('pages.cookieSettings.enabled') : t('pages.cookieSettings.disabled')}
          </span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`flex-shrink-0 w-12 h-6 rounded-full transition-colors ${
          enabled ? 'bg-[#0066ff]' : 'bg-gray-300'
        }`}
      >
        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
          enabled ? 'translate-x-6' : 'translate-x-0.5'
        }`} />
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Cookie Settings Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Cookie settings"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.cookieSettings.heroTitle')}
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
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t('pages.cookieSettings.intro')}
            </p>
          </div>

          <div className="space-y-4">
            <CookieToggle
              enabled={essentialCookies}
              setEnabled={() => {}}
              label={t('pages.cookieSettings.essentialLabel')}
              description={t('pages.cookieSettings.essentialDesc')}
            />
            <CookieToggle
              enabled={analyticsCookies}
              setEnabled={setAnalyticsCookies}
              label={t('pages.cookieSettings.analyticsLabel')}
              description={t('pages.cookieSettings.analyticsDesc')}
            />
            <CookieToggle
              enabled={functionalCookies}
              setEnabled={setFunctionalCookies}
              label={t('pages.cookieSettings.functionalLabel')}
              description={t('pages.cookieSettings.functionalDesc')}
            />
            <CookieToggle
              enabled={marketingCookies}
              setEnabled={setMarketingCookies}
              label={t('pages.cookieSettings.marketingLabel')}
              description={t('pages.cookieSettings.marketingDesc')}
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-[#0066ff] text-white font-medium rounded-lg hover:bg-[#0055dd] transition-colors"
            >
              {t('pages.cookieSettings.saveButton')}
            </button>
            <button
              onClick={() => {
                setAnalyticsCookies(true);
                setFunctionalCookies(true);
                setMarketingCookies(true);
              }}
              className="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
            >
              {t('pages.cookieSettings.acceptAllButton')}
            </button>
          </div>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function CookieSettings() {
  return (
    <LanguageProvider>
      <CookieSettingsContent />
    </LanguageProvider>
  );
}

