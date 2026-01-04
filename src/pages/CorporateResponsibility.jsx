import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Globe } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function CorporateResponsibilityContent() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('pages.corporateResponsibility.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.corporateResponsibility.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const pillars = [
    { icon: Users, title: t('pages.corporateResponsibility.pillar1.title'), content: t('pages.corporateResponsibility.pillar1.content') },
    { icon: Leaf, title: t('pages.corporateResponsibility.pillar2.title'), content: t('pages.corporateResponsibility.pillar2.content') },
    { icon: Heart, title: t('pages.corporateResponsibility.pillar3.title'), content: t('pages.corporateResponsibility.pillar3.content') },
    { icon: Globe, title: t('pages.corporateResponsibility.pillar4.title'), content: t('pages.corporateResponsibility.pillar4.content') },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Corporate Responsibility Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Corporate responsibility and sustainability"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.corporateResponsibility.heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t('pages.corporateResponsibility.heroSubtitle')}
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
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.corporateResponsibility.overviewTitle')}</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              {t('pages.corporateResponsibility.overviewContent1')}
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {t('pages.corporateResponsibility.overviewContent2')}
            </p>
          </div>

          {/* Pillars */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">{t('pages.corporateResponsibility.pillarsTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <pillar.icon className="w-10 h-10 text-[#0066ff] mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h3>
                  <p className="text-gray-700">{pillar.content}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.corporateResponsibility.commitmentTitle')}</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {t('pages.corporateResponsibility.commitmentContent')}
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

export default function CorporateResponsibility() {
  return (
    <LanguageProvider>
      <CorporateResponsibilityContent />
    </LanguageProvider>
  );
}

