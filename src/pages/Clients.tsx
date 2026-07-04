import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/data/translations';

export default function Clients() {
  const { lang } = useLang();
  const t = T[lang].clients;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-primary tracking-widest uppercase text-xs font-semibold mb-4">{t.label}</p>
          <h1 className="fluid-hero font-serif text-white mb-8">
            {t.title} <span className="italic text-white/50">{t.titleItalic}</span>
          </h1>
          <p className="fluid-body text-white/60 font-light max-w-2xl mx-auto">{t.desc}</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {CONTENT.channels.map((channel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="glass aspect-[3/2] rounded-xl border border-white/5 group-hover:border-primary/30 flex items-center justify-center p-6 transition-all duration-500 relative z-10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <h3 className="text-center font-serif text-xl text-white/80 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  {channel}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-primary/20 to-white/5"
        >
          <div className="bg-[#0a0a0a] rounded-xl p-12 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="fluid-heading font-serif text-white mb-6">{t.qualityTitle}</h2>
              <p className="fluid-body text-white/60 font-light leading-relaxed">{t.qualityDesc}</p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
              <div className="glass p-6 rounded-lg border border-white/10 text-center">
                <p className="text-4xl font-serif text-white mb-2">4K+</p>
                <p className="text-primary text-xs uppercase tracking-widest">{t.resolution}</p>
              </div>
              <div className="glass p-6 rounded-lg border border-white/10 text-center">
                <p className="text-4xl font-serif text-white mb-2">100%</p>
                <p className="text-primary text-xs uppercase tracking-widest">{t.reliability}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
