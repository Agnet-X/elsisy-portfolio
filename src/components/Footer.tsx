import React from 'react';
import { Link } from 'wouter';
import { CONTENT } from '@/data/content';
import { SiInstagram, SiTiktok } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className="bg-background pt-32 pb-12 relative border-t border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-4xl font-bold tracking-tighter text-white">
                ME<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm mb-8 font-light leading-relaxed">
              Crafting visual narratives and capturing moments that transcend time. Professional videography and editing based in the UAE.
            </p>
            <div className="flex items-center gap-4">
              <a 
                href={CONTENT.identity.social.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <SiInstagram size={18} />
              </a>
              <a 
                href={CONTENT.identity.social.tiktok} 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <SiTiktok size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Link href="/experience" className="text-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    Experience
                  </Link>
                  <span className="text-[10px] font-medium text-primary/90 border border-primary/40 rounded px-1.5 py-0.5 leading-none whitespace-nowrap">
                    12+ Years
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-3">
                  <Link href="/contact" className="text-white/60 hover:text-primary transition-colors text-sm uppercase tracking-wider">
                    Contact
                  </Link>
                  <div className="flex items-center gap-2">
                    <a
                      href={CONTENT.identity.social.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/50 hover:text-primary transition-colors"
                      title="Instagram"
                    >
                      <SiInstagram size={14} />
                    </a>
                    <a
                      href={CONTENT.identity.social.tiktok}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/50 hover:text-primary transition-colors"
                      title="TikTok"
                    >
                      <SiTiktok size={13} />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-serif text-xl mb-6">Contact</h4>
            <ul className="space-y-4 text-white/60 font-light">
              <li>{CONTENT.identity.location}</li>
              <li><a href={`tel:${CONTENT.identity.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">{CONTENT.identity.phone}</a></li>
              <li><a href={`mailto:${CONTENT.identity.email}`} className="hover:text-primary transition-colors">{CONTENT.identity.email}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} {CONTENT.identity.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-sm font-serif italic">
            {CONTENT.identity.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
