import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/data/translations';

const FEATURED = [
  {
    num: "01",
    title: "Dubai Sports Council",
    subtitle: "Sports Media — 2022–2023",
    image: "/images/portfolio-awards.jpeg",
    description:
      "Comprehensive visual coverage of Dubai Sports Council activities over two years — spanning the Golden Globe Sports Awards, cycling races, legend matches, and official governmental events. Work broadcast across BeIN Sports, Abu Dhabi TV, and Al Kass Sports.",
    tags: ["Live Events", "Sports Broadcasting", "Awards Ceremonies"],
  },
  {
    num: "02",
    title: "Jetpack World Record — Dubai",
    subtitle: "Action & Aerial — Sports",
    image: "/images/portfolio-jetpack.jpeg",
    description:
      "High-stakes production coverage of a world-record jetpack flight over Dubai's iconic skyline. Required precision aerial drone work, long-lens ground coverage, and live event coordination — all delivered under extreme time pressure.",
    tags: ["Aerial Videography", "Action Sports", "Drone"],
  },
  {
    num: "03",
    title: "UAE Tour — Cycling Championship",
    subtitle: "Sports Broadcasting",
    image: "/images/portfolio-cycling.jpeg",
    description:
      "Official media production for the UAE Tour cycling championship. Covered the opening ceremony, start line, and stage racing across Sharjah — combining fast-paced action shots with ceremonial documentation involving senior officials.",
    tags: ["Sports", "Official Coverage", "Live Broadcast"],
  },
  {
    num: "04",
    title: 'Program "Aghla mn Alzahab"',
    subtitle: "Television Production — LBC, MBC & 5 other channels",
    image: "/images/portfolio-sheikh.jpeg",
    description:
      'Served as lead videographer and editor for the popular television program "Aghla mn Alzahab," broadcast across 7 Arab channels including LBC, MBC, and Rotana. Managed all on-location shoots and full post-production.',
    tags: ["Television", "Editing", "Multi-channel"],
  },
  {
    num: "05",
    title: "Dubai Desert Classic — Golf",
    subtitle: "Sports — DP World Tour / Rolex Series",
    image: "/images/portfolio-golf.jpeg",
    description:
      "Official media photography and videography for the Hero Dubai Desert Classic, a prestigious Rolex Series event on the DP World Tour. Coverage included the trophy presentation ceremony attended by senior UAE government officials.",
    tags: ["Golf", "Official Coverage", "Sports"],
  },
  {
    num: "06",
    title: "Dubai Sports Excellence Model 2023",
    subtitle: "Ceremonies & Awards",
    image: "/images/portfolio-excellence.jpeg",
    description:
      "Complete production coverage of the Dubai Sports Excellence Model 2023 ceremony — a formal awards event recognising outstanding contributions to sport in Dubai, presided over by senior officials from Dubai Sports Council.",
    tags: ["Awards", "Government", "Official"],
  },
];

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
          <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight">
            {t.title} <span className="italic text-white/40">{t.titleItalic}</span>
          </h1>
        </motion.div>

        <div className="space-y-40">
          {FEATURED.map((project, index) => {
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
                  <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">{project.title}</h2>
                  <p className="text-white/55 font-light leading-relaxed mb-8 text-base">{project.description}</p>
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
