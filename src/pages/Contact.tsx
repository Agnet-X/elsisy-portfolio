import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      {/* Cinematic background elements */}
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 tracking-tighter">
            Let's <span className="italic text-primary">Create</span>
          </h1>
          <p className="text-white/60 text-lg font-light max-w-xl">
            Available for freelance projects, live broadcasts, and cinematic productions across the UAE and beyond.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <motion.div 
            className="lg:col-span-5 space-y-12"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary font-semibold mb-8">Contact Details</h3>
              <div className="space-y-8">
                <a href={`mailto:${CONTENT.identity.email}`} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-white/50">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-serif text-xl group-hover:text-primary transition-colors">{CONTENT.identity.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${CONTENT.identity.phone.replace(/[^0-9+]/g, '')}`} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-white/50">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-white font-serif text-xl group-hover:text-primary transition-colors">{CONTENT.identity.phone}</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary border-primary/30">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-white font-serif text-xl">{CONTENT.identity.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-6">Social</h3>
              <div className="flex gap-4">
                <a 
                  href={CONTENT.identity.social.instagram} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3 border border-white/10 rounded-full text-white hover:border-primary hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  Instagram
                </a>
                <a 
                  href={CONTENT.identity.social.tiktok} 
                  target="_blank" 
                  rel="noreferrer"
                  className="px-6 py-3 border border-white/10 rounded-full text-white hover:border-primary hover:text-primary transition-colors text-sm uppercase tracking-wider"
                >
                  TikTok
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass p-8 md:p-12 rounded-2xl border border-white/5">
              <h3 className="text-2xl font-serif text-white mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 pl-4">Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 pl-4">Email</label>
                    <input 
                      type="email" 
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 pl-4">Service Required</label>
                  <select defaultValue="" className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option value="" disabled>Select a service...</option>
                    {CONTENT.services.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 pl-4">Message</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState !== 'idle'}
                  className="w-full bg-white text-black font-semibold uppercase tracking-widest py-4 rounded-xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === 'idle' && (
                    <>Send Request <Send size={16} /></>
                  )}
                  {formState === 'submitting' && 'Sending...'}
                  {formState === 'success' && 'Message Sent!'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
