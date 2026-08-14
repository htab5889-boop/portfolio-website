'use client';

import React from 'react';
import { Film, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050509] border-t border-white/10 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-cyan to-accent-violet p-[1.5px]">
            <div className="w-full h-full bg-[#07070c] rounded-[10px] flex items-center justify-center">
              <Film className="w-4 h-4 text-accent-cyan" />
            </div>
          </div>
          <div>
            <span className="font-display font-bold text-lg text-white">
              PRINCE<span className="text-accent-cyan">.</span>
            </span>
            <p className="font-mono text-[10px] text-gray-400">DaVinci Resolve Video Editor & Colorist</p>
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-mono text-xs text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Copyright & Scroll Top */}
        <div className="flex items-center gap-4">
          <p className="font-mono text-xs text-gray-400">
            © {new Date().getFullYear()} Prince. Built with Next.js & 3D WebGL.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full glass-card text-gray-300 hover:text-white hover:border-accent-cyan/50 transition-colors"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
