import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, TrendingUp, Calendar, Mail } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function InvestorRelationsContent() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('pages.investorRelations.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.investorRelations.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Investor Relations Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Investor relations and financial information"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.investorRelations.heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t('pages.investorRelations.heroSubtitle')}
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
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.investorRelations.overviewTitle')}</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              {t('pages.investorRelations.overviewContent1')}
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              {t('pages.investorRelations.overviewContent2')}
            </p>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.investorRelations.resourcesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <FileText className="w-8 h-8 text-[#0066ff] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.investorRelations.resource1.title')}</h3>
                <p className="text-gray-700 text-sm mb-4">{t('pages.investorRelations.resource1.content')}</p>
                <a href="#" className="text-[#0066ff] hover:underline text-sm">{t('pages.investorRelations.download')}</a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <TrendingUp className="w-8 h-8 text-[#0066ff] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.investorRelations.resource2.title')}</h3>
                <p className="text-gray-700 text-sm mb-4">{t('pages.investorRelations.resource2.content')}</p>
                <a href="#" className="text-[#0066ff] hover:underline text-sm">{t('pages.investorRelations.view')}</a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <Calendar className="w-8 h-8 text-[#0066ff] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.investorRelations.resource3.title')}</h3>
                <p className="text-gray-700 text-sm mb-4">{t('pages.investorRelations.resource3.content')}</p>
                <a href="#" className="text-[#0066ff] hover:underline text-sm">{t('pages.investorRelations.view')}</a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 rounded-lg p-6"
              >
                <Mail className="w-8 h-8 text-[#0066ff] mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('pages.investorRelations.resource4.title')}</h3>
                <p className="text-gray-700 text-sm mb-4">{t('pages.investorRelations.resource4.content')}</p>
                <a href="mailto:investors@pocinternational.com" className="text-[#0066ff] hover:underline text-sm">{t('pages.investorRelations.contact')}</a>
              </motion.div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.investorRelations.contactTitle')}</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              {t('pages.investorRelations.contactContent')}
            </p>
            <p className="text-gray-700">
              <a href="mailto:investors@pocinternational.com" className="text-[#0066ff] hover:underline">
                investors@pocinternational.com
              </a>
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

export default function InvestorRelations() {
  return (
    <LanguageProvider>
      <InvestorRelationsContent />
    </LanguageProvider>
  );
}

