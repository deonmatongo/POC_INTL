import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function FindAnOfficeContent() {
  const { t } = useLanguage();
  const [selectedRegion, setSelectedRegion] = useState('');
  
  useEffect(() => {
    document.title = t('pages.findAnOffice.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.findAnOffice.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const offices = [
    {
      city: t('pages.findAnOffice.office1.city'),
      country: t('pages.findAnOffice.office1.country'),
      address: t('pages.findAnOffice.office1.address'),
      phone: t('pages.findAnOffice.office1.phone'),
      email: t('pages.findAnOffice.office1.email'),
    },
    {
      city: t('pages.findAnOffice.office2.city'),
      country: t('pages.findAnOffice.office2.country'),
      address: t('pages.findAnOffice.office2.address'),
      phone: t('pages.findAnOffice.office2.phone'),
      email: t('pages.findAnOffice.office2.email'),
    },
    {
      city: t('pages.findAnOffice.office3.city'),
      country: t('pages.findAnOffice.office3.country'),
      address: t('pages.findAnOffice.office3.address'),
      phone: t('pages.findAnOffice.office3.phone'),
      email: t('pages.findAnOffice.office3.email'),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Find an Office Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Global office locations"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.findAnOffice.heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t('pages.findAnOffice.heroSubtitle')}
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
          {/* Filter Section */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('pages.findAnOffice.filterTitle')}</h2>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full md:w-1/3 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0066ff] focus:border-transparent"
            >
              <option value="">{t('pages.findAnOffice.allRegions')}</option>
              <option value="americas">{t('pages.findAnOffice.americas')}</option>
              <option value="europe">{t('pages.findAnOffice.europe')}</option>
              <option value="asia">{t('pages.findAnOffice.asia')}</option>
              <option value="africa">{t('pages.findAnOffice.africa')}</option>
            </select>
          </div>

          {/* Offices Grid */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('pages.findAnOffice.officesTitle')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-[#0066ff] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                      <p className="text-gray-600 text-sm">{office.country}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{office.address}</p>
                  <div className="space-y-2">
                    <a
                      href={`tel:${office.phone}`}
                      className="flex items-center gap-2 text-[#0066ff] hover:text-[#0055dd] text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{office.phone}</span>
                    </a>
                    <a
                      href={`mailto:${office.email}`}
                      className="flex items-center gap-2 text-[#0066ff] hover:text-[#0055dd] text-sm transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{office.email}</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Global Presence */}
          <div className="bg-[#0066ff]/10 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <Globe className="w-8 h-8 text-[#0066ff] flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.findAnOffice.globalTitle')}</h2>
                <p className="text-gray-700 text-base leading-relaxed">
                  {t('pages.findAnOffice.globalContent')}
                </p>
              </div>
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

export default function FindAnOffice() {
  return (
    <LanguageProvider>
      <FindAnOfficeContent />
    </LanguageProvider>
  );
}

