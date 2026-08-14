'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Scissors, Sparkles, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface Capability {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  skills: string[];
}

const capabilities: Capability[] = [
  {
    id: 'color-grading',
    title: 'Professional Color Grading',
    subtitle: 'DaVinci Resolve Scopes & Primary/Secondary Nodes',
    description: 'Transform flat camera footage into rich, vibrant cinematic aesthetics. Precision color correction, skin tone alignment, LUT mapping, and mood creation.',
    icon: Palette,
    gradient: 'from-accent-cyan via-blue-500 to-accent-violet',
    glowColor: 'rgba(0, 242, 254, 0.25)',
    skills: ['Color Correction', 'Cinematic Look', 'Shot Matching', 'HDR & Rec.709', 'Skin Tone Tuning'],
  },
  {
    id: 'video-editing',
    title: 'Precision Cutting & Sound Design',
    subtitle: 'High-Impact Pacing & Audio Engineering',
    description: 'Smooth timeline editing with immaculate audio synchronization, sound design, voice enhancement, and seamless L/J cut transitions.',
    icon: Scissors,
    gradient: 'from-accent-violet via-purple-500 to-accent-pink',
    glowColor: 'rgba(121, 40, 202, 0.25)',
    skills: ['Multi-Cam Cut', 'Pacing & Rhythm', 'Audio Mastering', 'Beat Sync', 'Sound FX Design'],
  },
  {
    id: 'motion-graphics',
    title: 'Motion Graphics & Text FX',
    subtitle: 'Rise & Upward Word-by-Word Text Animations',
    description: 'Custom animated title cards, kinetic typography, rise and slide word reveals, lower thirds, callout badges, and logo stings.',
    icon: Sparkles,
    gradient: 'from-accent-pink via-rose-500 to-accent-amber',
    glowColor: 'rgba(255, 0, 128, 0.25)',
    skills: ['Kinetic Typography', 'Title Animations', 'Word-by-Word Rise', 'Lower Thirds', 'Logo Stings'],
  },
  {
    id: 'client-cooperation',
    title: 'Client Cooperation & Adaptability',
    subtitle: 'Custom Tailored to Business Needs',
    description: 'Direct 1-on-1 collaboration. I listen to your target audience, adjust video style accordingly, and ensure prompt revisions until 100% satisfied.',
    icon: MessageSquare,
    gradient: 'from-emerald-400 via-teal-500 to-accent-cyan',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    skills: ['Requirement Analysis', 'Local Business Videos', 'Fast Turnaround', '100% Satisfaction', '1-on-1 Support'],
  },
];

// Upward rise word-by-word animation variants
const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    rotateX: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-28 relative bg-[#090912] overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent-cyan/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-pink/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Rise Text Animation */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-accent-cyan/30 mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-accent-cyan" />
            <span className="font-mono text-xs text-gray-200 uppercase tracking-widest">
              CAPABILITIES & EXPERTISE
            </span>
          </motion.div>

          <motion.h2
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            {'Premium Video Editing & Color Services'.split(' ').map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className={`inline-block mr-2.5 ${
                  word.includes('Editing') || word.includes('Premium')
                    ? 'gradient-text-cyan'
                    : word.includes('Color') || word.includes('Services')
                    ? 'gradient-text-purple'
                    : 'text-white'
                }`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 font-light text-base sm:text-lg"
          >
            Every cut, transition, and color grade is crafted with precision in DaVinci Resolve.
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((cap, index) => {
            const IconComp = cap.icon;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group border border-white/10"
                style={{
                  boxShadow: `0 10px 30px -10px ${cap.glowColor}`,
                }}
              >
                {/* Gradient Accent Bar Top */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${cap.gradient} absolute top-0 left-0`}></div>

                {/* Icon & Subtitle Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${cap.gradient} p-[2px]`}>
                    <div className="w-full h-full bg-[#0b0b16] rounded-[14px] flex items-center justify-center">
                      <IconComp className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <span className="font-mono text-xs text-gray-400 glass-pill px-3 py-1 rounded-full">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Description with Word Rise Reveal on Hover */}
                <h3 className="font-display font-bold text-2xl text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {cap.title}
                </h3>
                <p className="font-mono text-xs text-accent-cyan mb-4">{cap.subtitle}</p>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 font-light">
                  {cap.description}
                </p>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {cap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:border-accent-cyan/40 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
