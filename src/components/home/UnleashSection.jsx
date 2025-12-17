import React from 'react';
import { motion } from 'framer-motion';

export default function UnleashSection() {
  return (
    <section className="bg-[#0d1117] py-24 md:py-32" aria-label="Unleash potential">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/90 text-lg md:text-xl font-light mb-6">
            Your organization is full of potential
          </p>
          <h2 className="text-[#0088ff] text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-10">
            WE'RE HERE TO
            <br />
            UNLEASH IT
          </h2>
          <p className="text-white/70 text-base md:text-lg font-light leading-relaxed max-w-4xl mx-auto">
            POC is a global consulting firm that powers performance. We unlock the potential in your people and 
            unleash transformation across your business—synchronizing strategy, operations, and talent to accelerate 
            performance, fuel growth, and inspire a legacy of change. That's why the world's most forward-thinking 
            companies across every major industry turn to us—for a shared commitment to lasting impact and the bold 
            ambition to Be More Than.
          </p>
        </motion.div>
      </div>
    </section>
  );
}