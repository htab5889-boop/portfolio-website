'use client';

import React from 'react';

export default function CapabilitiesSection() {
  return (
    <section className="py-24 max-w-container-max mx-auto px-6 md:px-12 lg:px-16 border-t border-white/10" id="capabilities">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#2997ff]"></span>
          CAPABILITIES &amp; EXPERTISE
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-on-surface font-semibold mb-4">
          Premium Video Editing &amp; Color Services
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant">
          Every cut, transition, and color grade is crafted with precision in DaVinci Resolve.
        </p>
      </div>

      {/* Bento Grid (4 Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bento Card 1: Color Grading */}
        <div className="rounded-3xl titanium-glass p-8 md:p-10 flex flex-col justify-between hover:border-primary/50 hover:shadow-[0_20px_45px_-10px_rgba(41,151,255,0.15)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-primary font-semibold text-base">01</span>
              <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary font-mono text-xs border border-primary/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                DaVinci Nodes
              </span>
            </div>
            <h3 className="text-2xl text-on-surface font-semibold mb-2">Professional Color Grading</h3>
            <p className="font-mono text-xs text-primary mb-4">DaVinci Resolve Scopes &amp; Primary/Secondary Nodes</p>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Transform flat camera footage into rich, vibrant cinematic aesthetics. Precision color correction, skin tone alignment, LUT mapping, and mood creation.
            </p>
          </div>
          {/* Color Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Color Correction</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Cinematic Look</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Shot Matching</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">HDR &amp; Rec.709</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Skin Tone Tuning</span>
          </div>
        </div>

        {/* Bento Card 2: Precision Cutting & Sound */}
        <div className="rounded-3xl titanium-glass p-8 md:p-10 flex flex-col justify-between hover:border-primary/50 hover:shadow-[0_20px_45px_-10px_rgba(41,151,255,0.15)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-primary font-semibold text-base">02</span>
              <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary font-mono text-xs border border-primary/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                Fairlight Suite
              </span>
            </div>
            <h3 className="text-2xl text-on-surface font-semibold mb-2">Precision Cutting &amp; Sound Design</h3>
            <p className="font-mono text-xs text-primary mb-4">High-Impact Pacing &amp; Audio Engineering</p>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Smooth timeline editing with immaculate audio synchronization, sound design, voice enhancement, and seamless L/J cut transitions.
            </p>
          </div>
          {/* Audio & Editing Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Multi-Cam Cut</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Pacing &amp; Rhythm</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Audio Mastering</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Beat Sync</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Sound FX Design</span>
          </div>
        </div>

        {/* Bento Card 3: Motion Graphics & Text FX */}
        <div className="rounded-3xl titanium-glass p-8 md:p-10 flex flex-col justify-between hover:border-primary/50 hover:shadow-[0_20px_45px_-10px_rgba(41,151,255,0.15)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-primary font-semibold text-base">03</span>
              <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary font-mono text-xs border border-primary/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                Fusion FX
              </span>
            </div>
            <h3 className="text-2xl text-on-surface font-semibold mb-2">Motion Graphics &amp; Text FX</h3>
            <p className="font-mono text-xs text-primary mb-4">Rise &amp; Upward Word-by-Word Text Animations</p>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Custom animated title cards, kinetic typography, rise and slide word reveals, lower thirds, callout badges, and logo stings.
            </p>
          </div>
          {/* Motion Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Kinetic Typography</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Title Animations</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Word-by-Word Rise</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Lower Thirds</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Logo Stings</span>
          </div>
        </div>

        {/* Bento Card 4: Client Cooperation */}
        <div className="rounded-3xl titanium-glass p-8 md:p-10 flex flex-col justify-between hover:border-primary/50 hover:shadow-[0_20px_45px_-10px_rgba(41,151,255,0.15)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="font-mono text-primary font-semibold text-base">04</span>
              <span className="px-3 py-1 rounded-full bg-primary-container/10 text-primary font-mono text-xs border border-primary/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                Dedicated 1-on-1
              </span>
            </div>
            <h3 className="text-2xl text-on-surface font-semibold mb-2">Client Cooperation &amp; Adaptability</h3>
            <p className="font-mono text-xs text-primary mb-4">Custom Tailored to Business Needs</p>
            <p className="text-base text-on-surface-variant mb-8 leading-relaxed">
              Direct 1-on-1 collaboration. I listen to your target audience, adjust video style accordingly, and ensure prompt revisions until 100% satisfied.
            </p>
          </div>
          {/* Cooperation Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Requirement Analysis</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Local Business Videos</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">Fast Turnaround</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">100% Satisfaction</span>
            <span className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 font-mono text-xs text-on-surface-variant">1-on-1 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
