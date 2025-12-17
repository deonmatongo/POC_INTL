import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function FeaturedInsights() {
  const { t } = useLanguage();
  
  const insights = [
    {
      type: 'highlight',
      label: t('featuredInsights.highlight'),
      title: t('featuredInsights.theMindMeld'),
      image: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&q=80',
    },
    {
      type: 'medium',
      title: t('featuredInsights.howEmployeesReact'),
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&q=80',
    },
    {
      type: 'medium',
      title: t('featuredInsights.globalRewardsSurvey'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      bgColor: 'bg-[#0066ff]',
    },
    {
      type: 'small',
      title: t('featuredInsights.reasonsCompaniesHesitate'),
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
    },
  ];

  return (
    <section className="bg-[#1a1f2e] py-16 md:py-24" aria-label="Featured insights and articles">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-10"
        >
          <h2 className="text-white/60 text-sm tracking-[0.2em] font-medium">{t('featuredInsights.title')}</h2>
          <div className="flex-1 h-px bg-white/20" aria-hidden="true" />
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Main Highlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 md:row-span-2"
          >
            <article className="relative h-full min-h-[400px] md:h-[496px] bg-[#0066ff] rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={insights[0].image}
                alt="The Mind Meld - Featured insight on organizational collaboration and team synchronization"
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0044aa] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-white/70 text-xs tracking-[0.15em] font-medium">{insights[0].label}</span>
                <h3 className="text-white text-2xl font-semibold mt-2">{insights[0].title}</h3>
                <div className="mt-4 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </div>
              </div>
            </article>
          </motion.div>

          {/* Medium Cards - Middle Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-4"
          >
            <article className="relative h-48 md:h-[240px] rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={insights[1].image}
                alt="Employee reactions to compensation and pay transparency strategies"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066ff] via-[#0066ff]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-lg font-semibold">{insights[1].title}</h3>
              </div>
            </article>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <article className="relative h-48 md:h-[240px] rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={insights[2].image}
                alt="POC's Global Total Rewards Pulse Survey - compensation and benefits research"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066ff] via-[#0066ff]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-lg font-semibold">{insights[2].title}</h3>
              </div>
            </article>
          </motion.div>

          {/* Small Cards - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-3"
          >
            <article className="relative h-48 md:h-[240px] rounded-lg overflow-hidden group cursor-pointer">
              <img
                src={insights[3].image}
                alt="Reasons companies hesitate on pay transparency and compensation strategy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0066ff] via-[#0066ff]/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-base font-semibold leading-snug">{insights[3].title}</h3>
              </div>
            </article>
          </motion.div>
        </div>
      </div>
    </section>
  );
}