import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';

export default function Clients() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <p className="text-primary tracking-widest uppercase text-xs font-semibold mb-4">Partners</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Trusted <span className="italic text-white/50">Networks</span></h1>
          <p className="text-white/60 text-lg font-light max-w-2xl mx-auto">
            I've had the privilege of providing videography and production services to some of the most 
            prestigious broadcast networks and sports channels in the Middle East.
          </p>
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
                {/* Reveal line effect */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                
                <h3 className="text-center font-serif text-xl text-white/80 group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  {channel}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-1 relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 via-primary/20 to-white/5"
        >
          <div className="bg-[#0a0a0a] rounded-xl p-12 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Uncompromising Quality</h2>
              <p className="text-white/60 font-light leading-relaxed">
                Working with major networks means there is zero room for error. From live sports coverage 
                to carefully crafted documentary segments, I deliver footage that meets the highest 
                international broadcast standards.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 w-full">
              <div className="glass p-6 rounded-lg border border-white/10 text-center">
                <p className="text-4xl font-serif text-white mb-2">4K+</p>
                <p className="text-primary text-xs uppercase tracking-widest">Resolution</p>
              </div>
              <div className="glass p-6 rounded-lg border border-white/10 text-center">
                <p className="text-4xl font-serif text-white mb-2">100%</p>
                <p className="text-primary text-xs uppercase tracking-widest">Reliability</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
