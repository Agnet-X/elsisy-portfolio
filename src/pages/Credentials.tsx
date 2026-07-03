import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const images = Array.from({ length: 28 }, (_, i) => ({
  id: i + 1,
  src: `/images/credentials/cred-${i + 1}.jpg`,
  alt: `Credential ${i + 1}`,
}));

export default function Credentials() {
  const [selected, setSelected] = useState<{ src: string; alt: string } | null>(null);

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary tracking-widest uppercase text-xs font-semibold mb-4">
            Proof of Work
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Credentials &amp; <span className="italic text-white/50">Gallery</span>
          </h1>
          <p className="text-white/50 font-light max-w-xl leading-relaxed">
            Certificates, syndicate cards, and behind-the-lens moments from years of professional work across the UAE and the region.
          </p>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              className="break-inside-avoid mb-4 group cursor-zoom-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              onClick={() => setSelected(img)}
            >
              <div className="relative overflow-hidden rounded-lg bg-white/5">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={() => setSelected(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              src={selected.src}
              alt={selected.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
