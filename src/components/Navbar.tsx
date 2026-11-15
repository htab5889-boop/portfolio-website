'use client';

import React, { useState, useEffect } from 'react';

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

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full w-[94%] max-w-container-max border border-white/10 bg-white/[0.04] backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out ${
        scrolled ? 'bg-[#050507]/80 shadow-[0_20px_40px_rgba(0,0,0,0.8)]' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-6 py-3 max-w-container-max mx-auto">
        {/* Brand Logo */}
        <a className="flex items-center gap-3 group" href="#">
          <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-pulse shadow-[0_0_12px_#2997ff]"></span>
          <span className="text-[11px] font-mono font-semibold tracking-widest text-[#e5e1e5] uppercase group-hover:text-primary transition-colors duration-200">
            Prince // Colorist
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            className="text-on-surface-variant font-medium text-[11px] font-mono tracking-wider uppercase hover:text-primary transition-colors duration-200"
            href="#about"
          >
            About
          </a>
          <a
            className="text-on-surface-variant font-medium text-[11px] font-mono tracking-wider uppercase hover:text-primary transition-colors duration-200"
            href="#capabilities"
          >
            Capabilities
          </a>
          <a
            className="text-primary font-medium text-[11px] font-mono tracking-wider uppercase hover:text-primary transition-colors duration-200"
            href="#showcase"
          >
            Showcase
          </a>
          <a
            className="text-on-surface-variant font-medium text-[11px] font-mono tracking-wider uppercase hover:text-primary transition-colors duration-200"
            href="#reviews"
          >
            Reviews
          </a>
          <a
            className="text-on-surface-variant font-medium text-[11px] font-mono tracking-wider uppercase hover:text-primary transition-colors duration-200"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Trailing Action Badges */}
        <div className="flex items-center gap-3">
          <a
            href="https://youtube.com/@mahak_unfiltered?si=H8-Fq-gpJKTbM4nr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-red-500/50 text-on-surface-variant hover:text-red-500 transition-all font-mono text-[11px]"
            title="YouTube Channel (@mahak_unfiltered)"
            aria-label="YouTube Channel"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="hidden sm:inline">YouTube</span>
          </a>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-on-surface-variant shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34c759] shadow-[0_0_8px_#34c759]"></span>
            <span>Freelance Ready</span>
          </div>
          <a
            className="px-5 py-2 rounded-full bg-primary-container text-[#050507] font-mono text-[11px] font-semibold hover:shadow-[0_0_24px_rgba(41,151,255,0.55)] hover:scale-105 active:scale-95 transition-all duration-200"
            href="#contact"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pt-2 pb-6 border-t border-white/10 flex flex-col gap-3">
          <a
            className="text-sm font-mono text-on-surface-variant hover:text-primary py-2"
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            className="text-sm font-mono text-on-surface-variant hover:text-primary py-2"
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
          >
            Capabilities
          </a>
          <a
            className="text-sm font-mono text-primary py-2"
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Showcase
          </a>
          <a
            className="text-sm font-mono text-on-surface-variant hover:text-primary py-2"
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
          >
            Reviews
          </a>
          <a
            className="text-sm font-mono text-on-surface-variant hover:text-primary py-2"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </a>
          <a
            className="text-sm font-mono text-on-surface-variant hover:text-red-500 py-2 flex items-center gap-2"
            href="https://youtube.com/@mahak_unfiltered?si=H8-Fq-gpJKTbM4nr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg className="w-4 h-4 fill-current text-red-500" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube (@mahak_unfiltered)
          </a>
        </div>
      )}
    </header>
  );
}
