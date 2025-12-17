import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

export default function CustomerExperience() {
  useEffect(() => {
    document.title = 'Customer Experience Transformation | POC International';
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Transform client interactions into exceptional journeys. POC International helps you deliver meaningful experiences at every touchpoint, building trust and driving durable business outcomes.';
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Customer Experience Hero">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=1920&q=80')`,
            }}
            role="img"
            aria-label="Positive customer service interaction and client satisfaction"
          />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-light mb-8 italic"
          >
            Customer Experience
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
              In today's market, transactional interactions are no longer enough to satisfy clients, differentiate your brand, or secure long-term loyalty. What sets leading organizations apart is the ability to deliver meaningful experiences at every touchpoint. POC International partners with your business to transform routine exchanges into exceptional client journeys, anchored in efficiency, accuracy, and a deep understanding of client needs.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              By fostering a culture that prioritizes the client first, organizations strengthen retention and unlock new avenues for growth. POC International helps you cultivate a positive work environment and a sustainable enterprise culture where employees thrive. In turn, your teams are empowered to deliver excellence consistently, creating client experiences that build trust and drive durable business outcomes.
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