import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/components/LanguageContext';
import NavHeader from '@/components/home/NavHeader';
import Footer from '@/components/home/Footer';

export default function DataDrivenInsights() {
  useEffect(() => {
    document.title = 'Data Management & Insights Solutions | POC International';
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = 'Become a data-driven organization. POC International helps you leverage analytics, identify KPIs, develop dashboards, and establish business reviews to drive informed decision-making and sustainable growth.';
    if (!document.querySelector('meta[name="description"]')) document.head.appendChild(metaDescription);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0d1117]">
        <NavHeader />
      
      <main>
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24" aria-label="Data Driven Insights Hero">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80')`,
            }}
            role="img"
            aria-label="Data analytics and business intelligence visualization"
          />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-4xl md:text-6xl font-light mb-8 italic"
          >
            Data Driven Insights
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
              Leading a data-driven business empowers organizations to make informed, objective decisions that drive consistent and measurable results. By leveraging real-time analytics and comprehensive data sets, leaders can quickly identify emerging trends, optimize processes, and adapt strategies to changing market conditions. This approach not only enhances operational efficiency but also creates a sustainable competitive advantage by enabling proactive, rather than reactive, decision-making. Furthermore, a data-centric culture fosters transparency and accountability, ensuring that teams are aligned with organizational goals and performance metrics are clearly understood.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Making decisions based on data significantly reduces the risk of costly missteps by minimizing reliance on intuition or anecdotal evidence. It enables leaders to allocate resources more efficiently, measure the success of initiatives, and respond swiftly to both challenges and opportunities. Additionally, data-based decision-making deepens your understanding of customer needs, allowing for more personalized experiences and improved satisfaction. Ultimately, a commitment to data-driven practices builds trust among stakeholders and positions the organization for sustained innovation and long-term success and growth.
            </p>
            
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              POC-Intl will help you become a data driven organization. We will help you identify key performance indicators, develop management reporting and dashboards, improve the data literacy of your organization, and establish regular business reviews to manage operational performance.
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