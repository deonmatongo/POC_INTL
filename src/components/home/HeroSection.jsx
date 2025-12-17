import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const pillars = [
    'OPTIMIZE PERFORMANCE.',
    'MAXIMIZE POTENTIAL.',
    'DELIVER RESULTS.'
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" aria-label="Hero section">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6942d82489e40d47754bcee1/05c2749be_home.jpg')`,
        }}
        role="img"
        aria-label="Modern office environment with collaborative workspace"
      />
      
      {/* Blue overlay with geometric pattern effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/60 via-[#0d2444]/55 to-[#1a3a5c]/50" />
      
      {/* Geometric shapes overlay */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066ff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00b4d8" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <polygon points="0,0 800,0 400,600 0,400" fill="url(#grad1)" />
          <polygon points="600,200 1200,0 1400,500 800,600" fill="url(#grad1)" />
          <polygon points="1000,300 1920,100 1920,800 1200,600" fill="url(#grad1)" />
          <polygon points="300,500 900,700 700,1080 0,1080 0,600" fill="url(#grad1)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-light italic leading-tight mb-4">
            From where you stand to where you strive
          </h1>
          <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-light italic">
            We make the journey possible.
          </h2>
        </motion.div>

        {/* Three Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-0"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
              className="relative group"
            >
              <div className="bg-[#1a5fb4]/60 backdrop-blur-sm py-8 px-6 hover:bg-[#2070c8]/70 transition-all duration-500 cursor-pointer md:border-r md:border-white/10 md:last:border-r-0 flex items-center justify-center h-[120px]">
                <span className="text-white text-sm md:text-base font-semibold tracking-[0.2em] text-center leading-tight">
                  {pillar}
                </span>
              </div>
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#00b4d8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white/60 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}