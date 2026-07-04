import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { CONTENT } from '@/data/content';
import { ArrowRight, Play, Camera, Film } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/data/translations';

export default function Home() {
  const { lang } = useLang();
  const t = T[lang].home;

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="w-full bg-background" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="w-full h-full bg-cover bg-right bg-no-repeat"
            style={{ backgroundImage: "url('/images/portrait-hero.jpeg')" }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-20 pointer-events-none" />
        </motion.div>

        <div className="container relative z-30 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <p className="text-primary tracking-[0.3em] uppercase text-xs font-semibold mb-6">
              {t.subtitle}
            </p>
          </motion.div>

          <motion.h1
            className="fluid-hero font-serif text-white mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: [0.77, 0, 0.175, 1] }}
          >
            {t.heroTitle1} <br />
            <span className="text-outline-gold italic pr-4">{t.heroTitle2}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="max-w-xl mx-auto"
          >
            <p className="text-white/70 text-lg font-light leading-relaxed mb-10">
              {t.heroDesc}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                href="/portfolio"
                className="group relative px-8 py-4 bg-primary text-primary-foreground overflow-hidden rounded-sm w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-in-out" />
                <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide uppercase text-sm">
                  {t.viewWork} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="group relative px-8 py-4 text-white w-full sm:w-auto border border-white/20 hover:border-primary/50 transition-colors rounded-sm"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide uppercase text-sm group-hover:text-primary transition-colors">
                  {t.contactMe}
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-32 bg-background relative z-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1 }}
            >
              <h2 className="fluid-title font-serif text-white mb-6">
                {t.precisionTitle} <br />
                <span className="text-primary italic">{t.precisionItalic}</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8 font-light text-lg">
                {t.precisionDesc}
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-xs font-semibold group"
              >
                <span className="border-b border-primary/30 group-hover:border-primary transition-colors pb-1">
                  {t.discoverJourney}
                </span>
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Camera size={24} />, title: t.cin, desc: t.cinDesc },
                { icon: <Film size={24} />, title: t.post, desc: t.postDesc },
                { icon: <Play size={24} />, title: t.live, desc: t.liveDesc },
              ].map((service, i) => (
                <motion.div
                  key={i}
                  className={`glass p-8 rounded-xl border border-white/5 hover:border-primary/30 transition-colors ${i === 2 ? 'sm:col-span-2' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-white font-serif text-xl mb-2">{service.title}</h3>
                  <p className="text-white/50 text-sm font-light">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Teaser */}
      <section className="py-32 bg-[#050505] relative z-40 border-t border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <p className="text-primary tracking-widest uppercase text-xs font-semibold mb-4">
                {t.sectionLabel}
              </p>
              <h2 className="fluid-title font-serif text-white">
                {t.featuredFrames} <span className="italic text-white/50">{t.featuredItalic}</span>
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary uppercase tracking-widest text-xs font-semibold transition-colors"
            >
              {t.viewAll} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CONTENT.portfolio.slice(0, 4).map((item, i) => (
              <motion.a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-black block"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-primary text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.category}
                  </p>
                  <h3 className="text-2xl text-white font-serif transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
