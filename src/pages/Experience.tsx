import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/data/translations';

export default function Experience() {
  const { lang } = useLang();
  const t = T[lang].experience;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <p className="text-primary tracking-widest uppercase text-xs font-semibold mb-4">{t.label}</p>
          <h1 className="fluid-hero font-serif text-white mb-8">
            {t.title} <span className="italic text-white/50">{t.titleItalic}</span>
          </h1>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-12">
            {[...CONTENT.timeline].reverse().map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="absolute left-[-5px] md:left-1/2 w-[11px] h-[11px] bg-background border-2 border-primary rounded-full md:-translate-x-1/2 z-10" />

                  <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="glass p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group">
                      <span className="inline-block text-primary text-xs font-bold tracking-widest uppercase mb-3 bg-primary/10 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <h3 className="text-2xl text-white font-serif mb-2 group-hover:text-primary transition-colors">
                        {item.role}
                      </h3>
                      <h4 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
                        {item.company}
                      </h4>
                      <p className="text-white/50 font-light leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Channels */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-40"
        >
          <div className="text-center mb-16">
            <h2 className="fluid-heading font-serif text-white mb-4">{t.networksTitle}</h2>
            <p className="text-white/50 font-light">{t.networksDesc}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
            {CONTENT.channels.map((channel, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="px-6 py-4 bg-[#0a0a0a] border border-white/5 rounded-lg flex items-center justify-center hover:border-primary/40 hover:bg-white/5 transition-all cursor-default"
              >
                <span className="text-white/70 font-serif tracking-wide">{channel}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
