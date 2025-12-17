import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const CircularProgress = ({ percentage, delay }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setCurrentPercentage((prev) => {
            if (prev >= percentage) {
              clearInterval(interval);
              return percentage;
            }
            return prev + 1;
          });
        }, 20);
        return () => clearInterval(interval);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);

  const circumference = 2 * Math.PI * 70;
  const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

  return (
    <div ref={ref} className="relative w-40 h-40 md:w-48 md:h-48">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
        {/* Background circle */}
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-100 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00b4d8" />
            <stop offset="100%" stopColor="#0066ff" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white text-4xl md:text-5xl font-light">{currentPercentage}%</span>
      </div>
    </div>
  );
};

export default function StatsSection() {
  const stats = [
    {
      percentage: 96,
      description: "We work with 96% of Fortune's top 50 world's most admired companies",
    },
    {
      percentage: 75,
      description: "3 in every 4 of Fortune's best companies to work for are POC clients",
    },
    {
      percentage: 80,
      description: "We work with 80% of the Drucker Institute's top performing companies",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden" aria-label="Company statistics and achievements">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d1a2d] to-[#0f2035]" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b4d8] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0066ff] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-3xl md:text-5xl font-light italic mb-4">
            We help businesses and the
            <br />
            people in them <span className="underline decoration-[#00b4d8] underline-offset-4">thrive</span>.
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light mt-6 max-w-2xl mx-auto">
            Across the globe, the companies we partner with are driving
            <br className="hidden md:block" />
            business transformation through people.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <CircularProgress percentage={stat.percentage} delay={index * 0.3} />
              <p className="text-white/70 text-sm md:text-base font-light mt-6 max-w-xs leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <button className="px-8 py-3 border border-[#00b4d8] text-[#00b4d8] text-sm font-medium rounded-full hover:bg-[#00b4d8] hover:text-white transition-all duration-300">
            Explore our business impact
          </button>
        </motion.div>
      </div>
    </section>
  );
}