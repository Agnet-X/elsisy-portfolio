import React from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background static noise effect */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-0 pointer-events-none"></div>
      
      <div className="text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[12rem] leading-none font-serif text-white/5 font-bold tracking-tighter"
        >
          404
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="-mt-16 mb-8"
        >
          <h2 className="text-3xl font-serif text-white mb-4">Lost in the Edit</h2>
          <p className="text-white/50 font-light">The frame you're looking for doesn't exist.</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/" 
            className="inline-flex px-8 py-3 border border-white/20 text-white uppercase tracking-widest text-xs font-semibold hover:border-primary hover:text-primary transition-colors rounded-sm"
          >
            Return to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
