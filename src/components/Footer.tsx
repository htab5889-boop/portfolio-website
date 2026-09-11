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
            className="text-on-surface-variant text-xs font-mono hover:text-primary transition-colors duration-150"
            href="#contact"
          >
            Terms &amp; Calibrations
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
