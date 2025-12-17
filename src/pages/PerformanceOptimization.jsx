import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

export default function PerformanceOptimization() {
  useEffect(() => {
    document.title = 'Performance Optimization Consulting | POC International';
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Optimize performance, maximize potential, deliver results. POC International helps you define goals, align resources, and create capacity to reach ambitious objectives through process optimization and talent development.';
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Performance Optimization Hero">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80')`,
            }}
            role="img"
            aria-label="Business analytics and performance metrics dashboard"
          />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-5xl md:text-7xl font-light leading-tight mb-8 italic"
          >
            Optimize performance. Maximize potential. Deliver Results
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
              At its core, performance optimization is about clarity: defining what we're trying to achieve and aligning the right resources to make it possible. Success isn't just about setting ambitious goals — it's about creating the capacity to reach them. That means sharpening focus, streamlining processes, and ensuring every effort moves the organization closer to its objectives.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              The path forward requires a deliberate mix of tools, efficiency, and talent. By leveraging smart technologies and systems such as AI, organizations can eliminate friction and free up time for higher-value work. Upskilling ensures teams have the capabilities to meet evolving demands, while prioritization keeps energy directed toward what matters most. And ultimately, it's about people — placing the right individuals in the right roles, where their strengths can drive impact.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Performance optimization isn't a one-time initiative; it's a mindset. When organizations embrace it, they unlock agility, resilience, and the ability to thrive in a world of constant change.
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