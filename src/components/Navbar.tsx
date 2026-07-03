import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CONTENT } from '@/data/content';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/projects", label: "Projects" },
  { href: "/credentials", label: "Credentials" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" }
];

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
          scrolled ? 'py-4 glass border-b border-white/5' : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="relative z-[100] group">
            <span className="font-serif text-3xl font-bold tracking-tighter text-white group-hover:text-primary transition-colors duration-300">
              ME<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="relative group"
              >
                <span className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  location === link.href ? 'text-primary' : 'text-white/70 group-hover:text-white'
                }`}>
                  {link.label}
                </span>
                {location === link.href && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-primary"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-[100] text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[80] bg-background flex flex-col items-center justify-center"
          >
            <div className="absolute inset-0 bg-[url('/images/portrait-hero.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <nav className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link 
                    href={link.href}
                    className={`font-serif text-4xl font-light tracking-wide ${
                      location === link.href ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 text-center"
            >
              <p className="text-white/50 text-sm mb-4">Get in touch</p>
              <a href={`mailto:${CONTENT.identity.email}`} className="text-primary font-serif tracking-wider">
                {CONTENT.identity.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
