import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { Award, Camera, Video, Plane } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/data/translations';

export default function About() {
  const { lang } = useLang();
  const t = T[lang].about;

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-primary tracking-widest uppercase text-xs font-semibold mb-6">{t.label}</p>
            <h1 className="fluid-hero font-serif text-white mb-8 leading-tight">
              {t.title} <span className="text-primary italic">{t.titleItalic}</span>
            </h1>
            <div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
              {t.biography.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <p className="text-white font-serif italic text-2xl pt-4 border-t border-white/10">
                {t.quote}
              </p>
            </div>

            <div className="flex items-center gap-8 mt-12 pt-12 border-t border-white/5">
              <div>
                <p className="text-3xl font-serif text-white mb-1">8+</p>
                <p className="text-xs text-white/50 uppercase tracking-widest">{t.yearsExp}</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white mb-1">12</p>
                <p className="text-xs text-white/50 uppercase tracking-widest">{t.networks}</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-white mb-1">∞</p>
                <p className="text-xs text-white/50 uppercase tracking-widest">{t.frames}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-sm overflow-hidden relative z-10">
              <div className="absolute inset-0 bg-black/40 z-10" />
              <img
                src="/images/portrait-hero.jpeg"
                alt="Mohammed Fareed Elsisy"
                className="w-full h-full object-cover object-right"
              />
            </div>
            <div className="absolute -inset-4 border border-primary/20 rounded-sm z-0 translate-x-8 translate-y-8" />
            <div className="absolute -left-12 top-1/4 w-24 h-24 bg-primary/20 blur-[50px] z-20" />
          </motion.div>
        </div>

        {/* Skills & Equipment */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="fluid-heading font-serif text-white mb-4">
              {t.arsenalTitle} <span className="italic text-primary">{t.arsenalItalic}</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">{t.arsenalDesc}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard icon={<Camera />} title={t.equipment} items={CONTENT.skills.equipment} delay={0} />
            <SkillCard icon={<Video />} title={t.software} items={CONTENT.skills.software} delay={0.1} />
            <SkillCard icon={<Plane />} title={t.expertise} items={CONTENT.skills.expertise} delay={0.2} />
            <SkillCard icon={<Award />} title={t.languages} items={CONTENT.skills.languages} delay={0.3} />
          </div>
        </div>

        {/* Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass border border-white/10 rounded-2xl p-8 md:p-16 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px]" />

          <h2 className="fluid-heading font-serif text-white mb-12 flex items-center gap-4">
            <Award className="text-primary" /> {t.recognitions}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTENT.awards.map((award, i) => (
              <div key={i} className="border-l border-primary/30 pl-6 relative">
                <div className="absolute w-2 h-2 rounded-full bg-primary -left-[4.5px] top-1" />
                <span className="text-primary text-sm font-bold tracking-wider">{award.year}</span>
                <h3 className="text-xl text-white font-serif mt-2 mb-2">{award.title}</h3>
                <p className="text-white/60 font-light text-sm">{award.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, items, delay }: { icon: React.ReactNode; title: string; items: string[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="bg-[#0a0a0a] border border-white/5 rounded-xl p-8 hover:border-primary/30 transition-colors group"
    >
      <div className="text-primary mb-6 transform group-hover:scale-110 transition-transform origin-left [&>svg]:w-8 [&>svg]:h-8">
        {icon}
      </div>
      <h3 className="text-xl text-white font-serif mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="text-white/60 text-sm font-light flex items-start gap-2">
            <span className="text-primary mt-1 text-[10px]">■</span> {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
