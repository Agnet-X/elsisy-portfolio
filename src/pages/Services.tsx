import React from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { PlayCircle, Film, Crosshair, Radio, MonitorPlay, Camera } from 'lucide-react';

const icons = [PlayCircle, Film, Crosshair, Radio, MonitorPlay, Camera];

export default function Services() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <p className="text-primary tracking-widest uppercase text-xs font-semibold mb-4">Offerings</p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Professional <span className="italic text-white/50">Services</span></h1>
          <p className="text-white/60 font-light text-lg">
            From aerial drone cinematography to live broadcast engineering, I provide end-to-end 
            visual production services tailored for high-end media requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONTENT.services.map((service, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
                <div className="glass relative h-full p-10 rounded-2xl border border-white/5 hover:border-primary/40 transition-all duration-500 flex flex-col items-start overflow-hidden">
                  
                  {/* Decorative corner accent */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors"></div>
                  
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/50 mb-8 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-500">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-2xl text-white font-serif mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/50 font-light leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <span className="text-xs uppercase tracking-widest text-primary font-semibold">Inquire</span>
                    <span className="text-primary">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 p-1 relative overflow-hidden rounded-2xl bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        >
          <div className="bg-[#0a0a0a] rounded-xl p-12 md:p-20 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Have a specific project in mind?</h2>
            <p className="text-white/60 mb-10 max-w-2xl mx-auto font-light">
              Whether it's a documentary, a live sports event, or corporate cinematography, 
              let's discuss how we can bring your vision to reality.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-10 py-4 bg-white text-black font-semibold text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm"
            >
              Start the Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
