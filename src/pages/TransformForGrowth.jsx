import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Building2, Network, TrendingUp, Rocket } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function TransformForGrowthContent() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('pages.transformForGrowth.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.transformForGrowth.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const services = [
    { icon: Building2, title: t('pages.transformForGrowth.service1') },
    { icon: Network, title: t('pages.transformForGrowth.service2') },
    { icon: TrendingUp, title: t('pages.transformForGrowth.service3') },
    { icon: Rocket, title: t('pages.transformForGrowth.service4') },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Transform for Growth Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')`,
          }}
          role="img"
          aria-label="Transform for growth"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/70 via-[#0d2444]/65 to-[#1a3a5c]/60" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.2) 49%, rgba(255,255,255,0.2) 51%, transparent 52%)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-light mb-6 italic leading-tight">
            {t('pages.transformForGrowth.heroTitle')}
          </h1>
          <div className="w-24 h-1 bg-[#00b4d8] mx-auto mt-6"></div>
        </motion.div>
      </div>
    </section>

    <section className="bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Introduction */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-[#0066ff]/10 text-[#0066ff] rounded-full text-sm font-medium mb-4"
            >
              Organizational Excellence
            </motion.div>
            <p className="text-gray-700 text-xl md:text-2xl leading-relaxed font-light">
              {t('pages.transformForGrowth.content1')}
            </p>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {t('pages.transformForGrowth.content2')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
              {t('pages.transformForGrowth.servicesTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#0066ff]/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0066ff] to-[#0088ff] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#0066ff] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-[#0066ff] to-[#0088ff] rounded-2xl p-10 md:p-12 text-white"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-center font-light">
              {t('pages.transformForGrowth.content3')}
            </p>
          </motion.div>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function TransformForGrowth() {
  return (
    <LanguageProvider>
      <TransformForGrowthContent />
    </LanguageProvider>
  );
}
