'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07070a] transition-colors duration-200">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 max-w-container-max mx-auto gap-6">
        {/* Brand / Identity */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-medium text-on-surface tracking-tight">
            PRINCE.
          </span>
          <span className="text-sm text-on-surface-variant mt-1">
            DaVinci Resolve Specialist &amp; Master Colorist
          </span>
        </div>

        {/* Footer Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          <a
            className="text-on-surface-variant text-xs font-mono hover:text-primary transition-colors duration-150"
            href="#showcase"
          >
            Showreel Breakdown
          </a>
          <a
            className="text-on-surface-variant text-xs font-mono hover:text-primary transition-colors duration-150"
            href="#capabilities"
          >
            Node Presets
          </a>
          <a
            className="text-on-surface-variant text-xs font-mono hover:text-primary transition-colors duration-150"
            href="#capabilities"
          >
            LUT Catalog
          </a>
          <a
            className="text-on-surface-variant text-xs font-mono hover:text-primary transition-colors duration-150"
            href="#about"
          >
            Workstation Specs
          </a>
          <a
            className="text-on-surface-variant text-xs font-mono hover:text-[#ff0033] transition-colors duration-150 inline-flex items-center gap-1.5"
            href="https://youtube.com/@mahak_unfiltered?si=H8-Fq-gpJKTbM4nr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-sm text-on-surface-variant text-center md:text-right">
          © 2025 Prince. DaVinci Resolve Specialist &amp; Master Colorist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
