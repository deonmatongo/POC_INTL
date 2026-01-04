import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Briefcase, Mail, Phone } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function FindAConsultantContent() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');
  
  useEffect(() => {
    document.title = t('pages.findAConsultant.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.findAConsultant.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const expertiseAreas = [
    t('pages.findAConsultant.expertise1'),
    t('pages.findAConsultant.expertise2'),
    t('pages.findAConsultant.expertise3'),
    t('pages.findAConsultant.expertise4'),
    t('pages.findAConsultant.expertise5'),
    t('pages.findAConsultant.expertise6'),
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Find a Consultant Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Professional consultants"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.findAConsultant.heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t('pages.findAConsultant.heroSubtitle')}
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
          {/* Search Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('pages.findAConsultant.searchTitle')}</h2>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('pages.findAConsultant.searchPlaceholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('pages.findAConsultant.expertiseLabel')}
                </label>
                <select
                  value={selectedExpertise}
                  onChange={(e) => setSelectedExpertise(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
                >
                  <option value="">{t('pages.findAConsultant.allExpertise')}</option>
                  {expertiseAreas.map((area, index) => (
                    <option key={index} value={area}>{area}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('pages.findAConsultant.expertiseAreas')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <Briefcase className="w-8 h-8 text-[#0066ff] mb-3" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{area}</h3>
                  <p className="text-gray-600 text-sm">{t('pages.findAConsultant.expertiseDescription')}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#0066ff]/10 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.findAConsultant.contactTitle')}</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {t('pages.findAConsultant.contactContent')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:consultants@pocinternational.com"
                className="flex items-center gap-3 text-[#0066ff] hover:text-[#0055dd] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{t('pages.findAConsultant.emailLabel')}</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-[#0066ff] hover:text-[#0055dd] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{t('pages.findAConsultant.phoneLabel')}</span>
              </a>
            </div>
          </div>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function FindAConsultant() {
  return (
    <LanguageProvider>
      <FindAConsultantContent />
    </LanguageProvider>
  );
}

