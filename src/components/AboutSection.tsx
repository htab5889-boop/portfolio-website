'use client';

import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-24 max-w-container-max mx-auto px-6 md:px-12 lg:px-16 border-t border-white/10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Biography */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase">
            <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#2997ff]"></span>
            ABOUT THE EDITOR
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-on-surface font-semibold leading-tight">
            Driven by Passion.<br />
            <span className="text-primary">Focused on Quality.</span>
          </h2>

          <div className="flex items-center gap-4 pt-2">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-2xl font-bold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              P
            </div>
            <div>
              <h3 className="text-xl text-on-surface font-semibold">Prince</h3>
              <p className="text-sm text-on-surface-variant">16-Year-Old Freelance Video Editor &amp; Master Colorist</p>
            </div>
          </div>

          <p className="text-base text-on-surface-variant leading-relaxed">
            I am a passionate video editor and colorist specializing in{' '}
            <strong className="text-on-surface font-semibold">DaVinci Resolve</strong> — the gold standard software for professional video editing and cinematic color grading.
          </p>

          <p className="text-base text-on-surface-variant leading-relaxed">
            Although I am young and starting fresh in the professional market, my dedication is unmatched. I strive to get better every single day, refining my cuts, color scopes, sound design, and visual pacing.
          </p>

          <p className="text-base text-on-surface-variant leading-relaxed">
            I work exclusively as a{' '}
            <strong className="text-on-surface font-semibold">freelancer</strong>, giving me the flexibility to collaborate closely with local businesses, creators, and brands to deliver custom videos that suit their exact requirements.
          </p>

          {/* Pull Quote Card */}
          <div className="p-6 rounded-2xl titanium-glass border border-white/10 mt-6 relative overflow-hidden">
            <div className="absolute -right-6 -bottom-6 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-9xl">format_quote</span>
            </div>
            <blockquote className="text-lg text-on-surface font-medium italic relative z-10">
              “Less client volume, 100% satisfaction. Every single client I’ve worked with returned for repeat projects.”
            </blockquote>
          </div>
        </div>

        {/* Right Column: 4 Pro Pillars Bento */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl titanium-glass hover:border-primary/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <span className="material-symbols-outlined">palette</span>
            </div>
            <h4 className="text-lg text-on-surface mb-2 font-semibold">DaVinci Resolve Mastery</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Expertise in industry-grade node-based color grading, LUT creation, and precision multi-track editing.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl titanium-glass hover:border-primary/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <span className="material-symbols-outlined">handshake</span>
            </div>
            <h4 className="text-lg text-on-surface mb-2 font-semibold">Client Cooperation</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              I listen carefully to your vision and adapt the editing style, music, and pacing to match your exact goals.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl titanium-glass hover:border-primary/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <span className="material-symbols-outlined">trending_up</span>
            </div>
            <h4 className="text-lg text-on-surface mb-2 font-semibold">Relentless Growth</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              As an ambitious 16-year-old editor, I push my technical boundaries daily to deliver fresh, modern visual content.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl titanium-glass hover:border-primary/50 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
              <span className="material-symbols-outlined">verified</span>
            </div>
            <h4 className="text-lg text-on-surface mb-2 font-semibold">Proven Client Retention</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Worked with local businesses and creators who gave 100% top-notch reviews and returned for repeat projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
