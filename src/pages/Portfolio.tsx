import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredPortfolio = activeCategory === 'All' 
    ? CONTENT.portfolio 
    : CONTENT.portfolio.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-widest uppercase text-xs font-semibold mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Selected <span className="italic text-white/50">Works</span></h1>
        </motion.div>
        
        {/* Filters */}
        <motion.div 
          className="flex flex-wrap gap-4 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {CONTENT.portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground font-semibold' 
                  : 'border border-white/10 text-white/60 hover:text-white hover:border-white/30'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 md:px-12">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item, index) => (
              <motion.a
                layout
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer block"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#0a0a0a]">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  {/* External link icon */}
                  <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                      <ExternalLink size={14} />
                    </div>
                  </div>

                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out grayscale-[30%] group-hover:grayscale-0"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent z-20">
                    <p className="text-primary text-[10px] uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">{item.category}</p>
                    <h3 className="text-xl text-white font-serif opacity-90 group-hover:opacity-100 transition-opacity">{item.title}</h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredPortfolio.length === 0 && (
          <div className="text-center py-32 border border-dashed border-white/10 rounded-xl">
            <p className="text-white/50 font-serif text-xl">More projects coming soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
