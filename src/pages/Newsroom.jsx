import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, ExternalLink } from 'lucide-react';
import { LanguageProvider, useLanguage } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

function NewsroomContent() {
  const { t } = useLanguage();
  
  useEffect(() => {
    document.title = t('pages.newsroom.title');
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = t('pages.newsroom.metaDescription');
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, [t]);

  const newsItems = [
    {
      date: t('pages.newsroom.news1.date'),
      title: t('pages.newsroom.news1.title'),
      excerpt: t('pages.newsroom.news1.excerpt'),
      category: t('pages.newsroom.news1.category'),
    },
    {
      date: t('pages.newsroom.news2.date'),
      title: t('pages.newsroom.news2.title'),
      excerpt: t('pages.newsroom.news2.excerpt'),
      category: t('pages.newsroom.news2.category'),
    },
    {
      date: t('pages.newsroom.news3.date'),
      title: t('pages.newsroom.news3.title'),
      excerpt: t('pages.newsroom.news3.excerpt'),
      category: t('pages.newsroom.news3.category'),
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <NavHeader />
      
    <main>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Newsroom Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1920&q=80')`,
          }}
          role="img"
          aria-label="News and press releases"
        />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl md:text-6xl font-light mb-8 italic"
        >
          {t('pages.newsroom.heroTitle')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto"
        >
          {t('pages.newsroom.heroSubtitle')}
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
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">{t('pages.newsroom.latestTitle')}</h2>
            <div className="space-y-6">
              {newsItems.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-gray-400" />
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <span className="px-3 py-1 bg-[#0066ff]/10 text-[#0066ff] text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-[#0066ff] hover:underline text-sm font-medium">
                    {t('pages.newsroom.readMore')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="bg-[#0066ff]/10 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('pages.newsroom.mediaTitle')}</h2>
            <p className="text-gray-700 mb-4">
              {t('pages.newsroom.mediaContent')}
            </p>
            <a href="mailto:media@pocinternational.com" className="text-[#0066ff] hover:underline">
              media@pocinternational.com
            </a>
          </div>
        </motion.div>
        </div>
      </section>
    </main>

      <Footer />
    </div>
  );
}

export default function Newsroom() {
  return (
    <LanguageProvider>
      <NewsroomContent />
    </LanguageProvider>
  );
}

