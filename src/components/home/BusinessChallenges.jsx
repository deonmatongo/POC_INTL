import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Square } from 'lucide-react';

export default function BusinessChallenges() {
  const [searchValue, setSearchValue] = useState('I need to identify future leaders...');

  const challenges = [
    'Driving organizational change',
    'Managing talent costs',
    'Improving sales results',
    'Scaling recruitment',
    'Identifying and developing leaders',
    'Leveraging talent data',
    'My next career move',
  ];

  return (
    <section className="bg-[#1a1f2e] py-20 md:py-28" aria-label="Business challenges">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#0088ff] text-2xl md:text-4xl font-semibold italic mb-12">
            What business challenge are you
            <br />
            looking to solve?
          </h2>
        </motion.div>

        {/* Challenge Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {challenges.map((challenge, index) => (
            <button
              key={challenge}
              className="group flex items-center gap-2 px-5 py-2.5 border border-white/30 rounded-full text-white/80 text-sm hover:border-[#0088ff] hover:text-[#0088ff] transition-all duration-300"
            >
              <span>{challenge}</span>
              <Square className="w-3 h-3 opacity-50 group-hover:opacity-100" />
            </button>
          ))}
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full bg-[#0d1117] border border-white/20 rounded-lg py-4 px-5 pr-14 text-white/70 text-sm focus:outline-none focus:border-[#0088ff] transition-colors"
              aria-label="Search for business challenges and solutions"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#0066ff] hover:bg-[#0077ff] rounded-lg flex items-center justify-center transition-colors" aria-label="Search">
              <Search className="w-5 h-5 text-white" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}