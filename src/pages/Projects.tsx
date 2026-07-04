import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/data/translations';

export default function Projects() {
  const { lang } = useLang();
  const t = T[lang].projects;

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
          <h1 className="fluid-hero font-serif text-white leading-tight">
            {t.title} <span className="italic text-white/40">{t.titleItalic}</span>
          </h1>
        </motion.div>

        <div className="space-y-40">
          {t.featured.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.num}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                <div className="w-full lg:w-3/5 group relative overflow-hidden rounded-sm aspect-video">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700 z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute top-5 left-5 w-6 h-6 border-t border-l border-white/20 z-20" />
                  <div className="absolute bottom-5 right-5 w-6 h-6 border-b border-r border-white/20 z-20" />
                </div>

                <div className="w-full lg:w-2/5">
                  <p className="text-primary/60 font-serif text-6xl font-light mb-6 leading-none">{project.num}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-3">{project.subtitle}</p>
                  <h2 className="fluid-heading font-serif text-white mb-6 leading-tight">{project.title}</h2>
                  <p className="fluid-body text-white/55 font-light leading-relaxed mb-8">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-primary/80 border border-primary/20 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-3 text-white/70 uppercase tracking-widest text-xs font-semibold group hover:text-primary transition-colors"
                  >
                    <span className="border-b border-white/20 group-hover:border-primary transition-colors pb-1">
                      {t.viewPortfolio}
                    </span>
                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
