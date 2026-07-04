import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CONTENT } from '@/data/content';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLang } from '@/context/LanguageContext';
import { T } from '@/data/translations';

export default function Contact() {
  const { lang } = useLang();
  const t = T[lang].contact;
  const ts = T[lang].services;

  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phone = CONTENT.identity.phone.replace(/[^0-9]/g, ''); // 971525858702
    const text = lang === 'ar'
      ? `السلام عليكم،\nاسمي: ${name}\nالخدمة المطلوبة: ${service}\n\n${message}`
      : `Hello,\nMy name: ${name}\nService needed: ${service}\n\n${message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none translate-x-1/2" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h1 className="fluid-hero font-serif text-white mb-6 tracking-tighter">
            {t.title} <span className="italic text-primary">{t.titleItalic}</span>
          </h1>
          <p className="fluid-body text-white/60 font-light max-w-xl">{t.desc}</p>
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
              <h3 className="text-xs uppercase tracking-widest text-primary font-semibold mb-8">{t.detailsLabel}</h3>
              <div className="space-y-8">
                <a href={`mailto:${CONTENT.identity.email}`} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-white/50">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest mb-1">{t.emailLabel}</p>
                    <p className="text-white font-serif text-xl group-hover:text-primary transition-colors">{CONTENT.identity.email}</p>
                  </div>
                </a>

                <a href={`tel:${CONTENT.identity.phone.replace(/[^0-9+]/g, '')}`} className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:text-primary transition-colors text-white/50">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest mb-1">{t.phoneLabel}</p>
                    <p className="text-white font-serif text-xl group-hover:text-primary transition-colors">{CONTENT.identity.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-primary border-primary/30">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest mb-1">{t.locationLabel}</p>
                    <p className="text-white font-serif text-xl">{CONTENT.identity.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10">
              <h3 className="text-xs uppercase tracking-widest text-white/40 font-semibold mb-6">{t.socialLabel}</h3>
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
              <h3 className="text-2xl font-serif text-white mb-8">{t.formTitle}</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 pl-4">{t.nameLabel}</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder={t.namePlaceholder}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 pl-4">{t.emailFieldLabel}</label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder={t.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 pl-4">{t.serviceLabel}</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">{t.serviceDefault}</option>
                    {ts.items.map((s, i) => (
                      <option key={i} value={s.title}>{s.title}</option>
                    ))}
                    <option value={t.serviceOther}>{t.serviceOther}</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 pl-4">{t.messageLabel}</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder={t.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25D366] text-white font-semibold uppercase tracking-widest py-4 rounded-xl hover:bg-[#1ebe5d] transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle size={20} />
                  {t.sendBtn}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
