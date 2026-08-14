'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sliders, Award, Zap, HeartHandshake, CheckCircle2, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Sliders,
      title: 'DaVinci Resolve Mastery',
      description: 'Expertise in industry-grade node-based color grading, LUT creation, and precision multi-track editing.',
      color: 'text-accent-cyan',
    },
    {
      icon: HeartHandshake,
      title: 'Client Cooperation',
      description: 'I listen carefully to your vision and adapt the editing style, music, and pacing to match your exact goals.',
      color: 'text-accent-violet',
    },
    {
      icon: TrendingUp,
      title: 'Relentless Growth',
      description: 'As an ambitious 16-year-old editor, I push my technical boundaries daily to deliver fresh, modern visual content.',
      color: 'text-accent-pink',
    },
    {
      icon: CheckCircle2,
      title: 'Proven Client Retention',
      description: 'Worked with local businesses and creators who gave 100% top-notch reviews and returned for repeat projects.',
      color: 'text-emerald-400',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#07070c] overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-violet/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-white/10 mb-4"
          >
            <Zap className="w-4 h-4 text-accent-cyan" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">ABOUT THE EDITOR</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Driven by Passion. <span className="gradient-text-purple">Focused on Quality.</span>
          </motion.h2>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden group"
          >
            {/* Ambient Border Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-cyan/10 rounded-full blur-2xl group-hover:bg-accent-cyan/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-cyan to-accent-violet p-[2px]">
                  <div className="w-full h-full bg-[#0b0b14] rounded-[14px] flex items-center justify-center font-display font-extrabold text-2xl text-white">
                    P
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl text-white">Prince</h3>
                  <p className="font-mono text-xs text-accent-cyan">16-Year-Old Freelance Video Editor</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                <p>
                  I am a passionate video editor and colorist specializing in <strong className="text-white">DaVinci Resolve</strong> — the gold standard software for professional video editing and cinematic color grading.
                </p>
                <p>
                  Although I am young and starting fresh in the professional market, my dedication is unmatched. I strive to get better every single day, refining my cuts, color scopes, sound design, and visual pacing.
                </p>
                <p>
                  I work exclusively as a <strong className="text-accent-cyan">freelancer</strong>, giving me the flexibility to collaborate closely with local businesses, creators, and brands to deliver custom videos that suit their exact requirements.
                </p>
              </div>

              {/* Quote box */}
              <div className="mt-8 p-5 rounded-2xl bg-surface/80 border border-white/10 font-mono text-sm text-gray-300 italic">
                &ldquo;Less client volume, 100% satisfaction. Every single client I&apos;ve worked with returned for repeat projects.&rdquo;
              </div>
            </div>
          </motion.div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${item.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white mb-2">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-light">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
