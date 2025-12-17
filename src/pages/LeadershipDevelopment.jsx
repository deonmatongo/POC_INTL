import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

export default function LeadershipDevelopment() {
  useEffect(() => {
    document.title = 'Leadership & Professional Development | POC International';
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Develop authentic leaders who inspire trust and drive transformation. POC International helps you champion inclusive leadership that unlocks collective genius and empowers diverse perspectives.';
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Leadership Development Hero">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&q=80')`,
            }}
            role="img"
            aria-label="Executive leadership team in strategic planning session"
          />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-light mb-8 italic"
          >
            Leadership & Professional Development
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
              Disruption and uncertainty are everywhere — and more change is coming. Thriving in this environment requires leaders who inspire trust, care deeply, and lead with authenticity.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Inclusive leaders unlock collective genius, empower diverse perspectives, and drive transformation. They are the game-changers, supporters, disruptors, and rebuilders who help us work smarter, deliver innovation, and grow stronger together.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Organizations must champion and develop these leaders now to succeed in the future. POC International will assess your leadership and ensure you have the tools for your organization to thrive.
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