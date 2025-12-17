import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

export default function OrganizationalTransformation() {
  useEffect(() => {
    document.title = 'Organizational Transformation Services | POC International';
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Transform your organization for lasting success. POC International helps you pair bold vision with smart execution, building structures that unite leadership, culture, and people.';
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Organizational Transformation Hero">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942d82489e40d47754bcee1/bd69f3c67_organizationaltransformation.png')`,
          }}
          role="img"
          aria-label="Team collaboration and organizational success"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-light mb-8 italic"
          >
            Transforming Organizations for Lasting Success
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <main>
        <section className="bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              In today's competitive marketplace, the companies that rise above the rest are those that pair bold vision with smart execution. Success comes not only from crafting a forward-looking strategy, but from building an organizational structure that unites leadership, culture, and people behind it.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              When every individual is connected to a clear sense of purpose, the result is a motivated, empowered workforce—driving productivity and accelerating your business toward its goals.
            </p>
          </motion.div>
          </div>
        </section>
      </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}