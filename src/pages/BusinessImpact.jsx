import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function BusinessImpactContent() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('pages.businessImpact.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.businessImpact.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const impactMetrics = [
    { icon: TrendingUp, value: t('pages.businessImpact.metric1.value'), label: t('pages.businessImpact.metric1.label') },
    { icon: Users, value: t('pages.businessImpact.metric2.value'), label: t('pages.businessImpact.metric2.label') },
    { icon: Award, value: t('pages.businessImpact.metric3.value'), label: t('pages.businessImpact.metric3.label') },
    { icon: Target, value: t('pages.businessImpact.metric4.value'), label: t('pages.businessImpact.metric4.label') },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Business Impact Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Business impact and results"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.businessImpact.heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t('pages.businessImpact.heroSubtitle')}
        </motion.p>
      </div>
    </section>

    <section className="bg-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Impact Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <metric.icon className="w-8 h-8 text-[#0066ff] mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.businessImpact.overviewTitle')}</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              {t('pages.businessImpact.overviewContent1')}
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {t('pages.businessImpact.overviewContent2')}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.businessImpact.resultsTitle')}</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.businessImpact.result1.title')}</h3>
                <p className="text-gray-700">{t('pages.businessImpact.result1.content')}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.businessImpact.result2.title')}</h3>
                <p className="text-gray-700">{t('pages.businessImpact.result2.content')}</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.businessImpact.result3.title')}</h3>
                <p className="text-gray-700">{t('pages.businessImpact.result3.content')}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.businessImpact.commitmentTitle')}</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {t('pages.businessImpact.commitmentContent')}
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

export default function BusinessImpact() {
  return (
    <LanguageProvider>
      <BusinessImpactContent />
    </LanguageProvider>
  );
}

