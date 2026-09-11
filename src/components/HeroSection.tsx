'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const StudioPCWorkstation = dynamic(() => import('./3d/StudioPCWorkstation'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[520px] rounded-2xl bg-[#07070b]/90 border border-white/[0.07] flex flex-col items-center justify-center gap-3">
      <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      <span className="font-mono text-xs text-primary tracking-widest uppercase">Initializing 3D Workstation...</span>
    </div>
  ),
});

export default function HeroSection() {
  return (
    <section className="relative z-10 pt-36 md:pt-44 max-w-container-max mx-auto px-6 md:px-12 lg:px-16 text-center cinema-radial pb-20 md:pb-28">
      {/* Ambient Cinematic Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#2997ff] opacity-[0.08] blur-[160px] rounded-full"></div>
        <div className="absolute top-[35%] right-[-10%] w-[600px] h-[500px] bg-[#3131c0] opacity-[0.06] blur-[140px] rounded-full"></div>
        <div className="absolute top-[65%] left-[-10%] w-[500px] h-[500px] bg-[#004882] opacity-[0.05] blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] mb-8">
          <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
          <span className="font-mono text-[11px] font-semibold text-on-surface-variant tracking-wider uppercase">
            DaVinci Resolve Specialist • Available for Q1/Q2 Projects
          </span>
        </div>

        {/* Kinetic Animated Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold leading-[1.08] tracking-tight text-on-surface max-w-5xl mx-auto mb-6">
          <span className="animate-kinetic-word delay-1 inline-block mr-3">Crafting</span>
          <span className="animate-kinetic-word delay-2 inline-block mr-3">Cinematic</span>
          <span className="animate-kinetic-word delay-3 inline-block mr-3">Videos</span>
          <span className="animate-kinetic-word delay-4 inline-block mr-3">&amp;</span>
          <br className="hidden sm:inline" />
          <span className="animate-kinetic-word delay-5 inline-block mr-3 bg-gradient-to-r from-on-surface via-primary to-primary-container bg-clip-text text-transparent">
            Professional
          </span>
          <span className="animate-kinetic-word delay-6 inline-block mr-3 bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
            Color
          </span>
          <span className="animate-kinetic-word delay-7 inline-block bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
            Grading.
          </span>
        </h1>

        {/* Kinetic Animated Subheadline */}
        <p className="animate-kinetic-word delay-sub text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Hi, I’m Prince — a driven 16-year-old freelance Video Editor &amp; Colorist. I cooperate closely with clients to transform vision into high-converting, polished videos that captivate audiences.
        </p>

        {/* Kinetic Animated Call to Actions */}
        <div className="animate-kinetic-word delay-cta flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-[#050507] font-semibold text-base sm:text-lg tracking-tight shadow-[0_0_28px_rgba(41,151,255,0.45)] hover:shadow-[0_0_38px_rgba(41,151,255,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            href="#showcase"
          >
            <span>Explore Work Showcase</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
          <a
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-primary/40 backdrop-blur-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] text-on-surface font-semibold text-base sm:text-lg hover:bg-white/[0.08] active:scale-[0.98] transition-all"
            href="#contact"
          >
            <span>Hire as Freelancer</span>
          </a>
        </div>

        {/* HERO 3D PC WORKSTATION SCENE & INTEGRATED DAVINCI PIPELINE */}
        <div className="animate-kinetic-word delay-stage relative max-w-5xl mx-auto rounded-3xl titanium-glass p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden group">
          {/* Glass Specular Reflection Highlight */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top HUD Bar */}
          <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]/80 shadow-[0_0_6px_#ff5f56]"></span>
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]/80 shadow-[0_0_6px_#ffbd2e]"></span>
              <span className="w-3 h-3 rounded-full bg-[#27c93f]/80 shadow-[0_0_6px_#27c93f]"></span>
              <span className="ml-3 font-mono text-xs text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">desktop_windows</span>
                DAVINCI RESOLVE STUDIO SUITE // 3D WORKSTATION
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 font-mono text-xs text-primary">
                Rec.709 Live Calibrated
              </span>
              <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 font-mono text-xs text-on-surface-variant">
                32-Bit Float
              </span>
            </div>
          </div>

          {/* 3D Scene Viewport Container */}
          <div className="relative w-full rounded-2xl overflow-hidden" id="pc-3d-container">
            <StudioPCWorkstation />

            {/* Interactive Hint Overlay Pill */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#050507]/80 backdrop-blur-xl border border-white/15 font-mono text-xs text-primary shadow-lg">
              <span className="material-symbols-outlined text-base animate-pulse">pan_tool</span>
              <span>Drag / move cursor to inspect 3D Workstation</span>
            </div>

            {/* On-screen DaVinci Pipeline Active Monitor Overlay Tag */}
            <div className="absolute top-4 left-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1 rounded-lg bg-[#0e0e11]/80 backdrop-blur-md border border-white/10 font-mono text-xs text-on-surface-variant">
              <span className="w-2 h-2 rounded-full bg-[#34c759] animate-ping"></span>
              <span>GPU COLOR ENGINE ACTIVE</span>
            </div>
          </div>

          {/* DaVinci Node Pipeline Integrated Flanking Cards */}
          <div className="mt-6 pt-6 border-t border-white/10 text-left">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-primary">
                <span className="material-symbols-outlined text-sm">hub</span>
                <span className="uppercase font-semibold">Node Pipeline Scopes</span>
              </div>
              <span className="font-mono text-on-surface-variant text-xs">YRGB COLOR MANAGED</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {/* Node 01 */}
              <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-primary/60 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-primary font-semibold">NODE 01</span>
                  <span className="w-2 h-2 rounded-full bg-[#27c93f] shadow-[0_0_6px_#27c93f]"></span>
                </div>
                <div className="text-[16px] text-on-surface font-semibold mb-1">Exposure &amp; Balance</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Black/white calibration &amp; lift gamma gain leveling.</p>
              </div>

              {/* Node 02 */}
              <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-primary/60 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-primary font-semibold">NODE 02</span>
                  <span className="w-2 h-2 rounded-full bg-[#27c93f] shadow-[0_0_6px_#27c93f]"></span>
                </div>
                <div className="text-[16px] text-on-surface font-semibold mb-1">CST / Camera Log</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Sony S-Log3 / Arri LogC to Davinci Wide Gamut.</p>
              </div>

              {/* Node 03 */}
              <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-primary/60 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-primary font-semibold">NODE 03</span>
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_6px_#2997ff]"></span>
                </div>
                <div className="text-[16px] text-on-surface font-semibold mb-1">Skin Tone Isolate</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Precision 3D Qualifier + vector scope lock.</p>
              </div>

              {/* Node 04 */}
              <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:border-primary/60 transition-all">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs text-primary font-semibold">NODE 04</span>
                  <span className="w-2 h-2 rounded-full bg-[#27c93f] shadow-[0_0_6px_#27c93f]"></span>
                </div>
                <div className="text-[16px] text-on-surface font-semibold mb-1">Filmic Print &amp; Grain</div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Kodak 2383 emulation &amp; 35mm optical grain scatter.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-14 pt-8 border-t border-white/10 text-center">
          <div>
            <div className="text-3xl md:text-4xl text-on-surface font-semibold">100%</div>
            <div className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase mt-1">Client Reviews</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl text-primary font-semibold">80k+</div>
            <div className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase mt-1">Peak Viral Views</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl text-on-surface font-semibold">DaVinci</div>
            <div className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase mt-1">DaVinci Resolve Specialist</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl text-primary font-semibold">100%</div>
            <div className="font-mono text-[11px] text-on-surface-variant tracking-wider uppercase mt-1">Repeat Client Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
