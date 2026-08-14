'use client';

import React, { useState, useEffect } from 'react';
import { Video, Film, Sparkles, Send, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#capabilities' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-[#07070c]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-cyan via-accent-violet to-accent-pink p-[1.5px] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#07070c] rounded-[10px] flex items-center justify-center">
              <Film className="w-5 h-5 text-accent-cyan group-hover:text-white transition-colors" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-wider text-white group-hover:text-accent-cyan transition-colors">
              PRINCE<span className="text-accent-cyan">.</span>
            </span>
            <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
              DaVinci Resolve Editor
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Availability Badge & CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-pill text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Freelance Ready</span>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-semibold text-sm hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] hover:scale-105 transition-all duration-300"
          >
            <Send className="w-4 h-4" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-surface border border-white/10 text-gray-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-[#0a0a14]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-200 hover:text-accent-cyan transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Available for Freelance Projects</span>
                </div>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-violet text-white font-bold"
                >
                  <Send className="w-4 h-4" />
                  <span>Hire Prince</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
