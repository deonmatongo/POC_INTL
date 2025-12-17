import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

export default function OurStory() {
  useEffect(() => {
    document.title = 'Our Story - About POC International | Global Consulting Firm';
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Discover POC International\'s 30+ years of leadership experience guiding Fortune 500 companies through transformation. We deliver innovative solutions that drive sustainable outcomes across global enterprises.';
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Our Story Hero">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942d82489e40d47754bcee1/206dc2d01_WhatsAppImage2025-12-13at175843.jpg')`,
            }}
            role="img"
            aria-label="POC International team"
          />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-light mb-8 italic"
          >
            Our Story
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
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Business as usual is no longer a viable strategy in today's rapidly evolving environment. Emerging technologies, shifting customer expectations, and rising operational costs demand that organizations embrace innovation to remain competitive. Success now depends on developing new capabilities and continuously upskilling talent to meet the challenges of a dynamic marketplace.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              This is where POC International adds measurable value. With over 30 years of leadership experience across multiple Fortune 500 companies, we have guided organizations through complex mergers and acquisitions, large-scale change management initiatives, and periods of financial instability. Our global experience uniquely positions us to support international enterprises, helping them navigate the complexities of culturally diverse workforces and align teams across geographies toward shared goals.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              We specialize in equipping workforces with adaptability skills and fostering cultures that thrive on transformation. Leveraging our deep expertise in complex and ever-changing industries such as IT, Finance, and Transportation, we deliver imaginative, innovative, and unconventional solutions that drive sustainable, positive outcomes.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              At POC International we operate with integrity, trust, and confidentiality, ensuring that every partnership is built on a foundation of credibility and shared commitment. Let us help you unlock your next milestone and position your organization for enduring success in a global marketplace.
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