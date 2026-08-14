'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Award, Star, Sliders, ChevronDown } from 'lucide-react';
import dynamic from 'next/dynamic';

// SSR-safe lazy load for 3D canvas
const Workstation3DCanvas = dynamic(() => import('./3d/Workstation3DCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[480px] flex items-center justify-center glass-panel rounded-2xl">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
        <p className="font-mono text-xs text-accent-cyan">INITIALIZING 3D CANVAS...</p>
      </div>
    </div>
  ),
});

// Word-by-word rising animation variants
const sentenceVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    rotateX: -45,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function HeroSection() {
  const headingText = "Crafting Cinematic Videos & Professional Color Grading.";

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#07070c] via-[#0b0b14] to-[#07070c]">
      {/* Background Neon Ambient Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent-cyan/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-accent-violet/20 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-pink/10 rounded-full blur-[180px] pointer-events-none"></div>

      {/* Grid Pattern Backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18182815_1px,transparent_1px),linear-gradient(to_bottom,#18182815_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-accent-cyan/30 mb-6 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
            >
              <Sliders className="w-4 h-4 text-accent-cyan animate-pulse" />
              <span className="font-mono text-xs text-gray-200 tracking-wider uppercase">
                DaVinci Resolve Specialist
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
            </motion.div>

            {/* Word-by-Word Upward Rising Title */}
            <motion.h1
              variants={sentenceVariants}
              initial="hidden"
              animate="visible"
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.1] mb-6"
            >
              {headingText.split(' ').map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={wordVariants}
                  className={`inline-block mr-3 ${
                    word.includes('Cinematic') || word.includes('Videos')
                      ? 'gradient-text-cyan'
                      : word.includes('Color') || word.includes('Grading')
                      ? 'gradient-text-purple'
                      : 'text-white'
                  }`}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Bio Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-8"
            >
              Hi, I&apos;m <span className="font-bold text-white">Prince</span> — a driven 16-year-old freelance Video Editor & Colorist. I cooperate closely with clients to transform vision into high-converting, polished videos that captivate audiences.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <a
                href="#showcase"
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink text-white font-bold text-base shadow-[0_0_30px_rgba(0,242,254,0.3)] hover:shadow-[0_0_45px_rgba(121,40,202,0.5)] hover:scale-105 transition-all duration-300"
              >
                <Play className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" />
                <span>Explore Work Showcase</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-4 rounded-full glass-card text-gray-200 hover:text-white font-semibold text-base hover:border-accent-cyan/50 hover:bg-white/10 transition-all duration-300"
              >
                <span>Hire as Freelancer</span>
              </a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 w-full max-w-xl"
            >
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-white">100%</p>
                <p className="font-mono text-xs text-gray-400 mt-1">Client Reviews</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-accent-cyan">High</p>
                <p className="font-mono text-xs text-gray-400 mt-1">Client Retention</p>
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-accent-violet">DaVinci</p>
                <p className="font-mono text-xs text-gray-400 mt-1">DaVinci Resolve</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Interactive Canvas */}
          <div className="lg:col-span-5 relative w-full h-[480px] lg:h-[580px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full h-full relative"
            >
              <Workstation3DCanvas />
              {/* Floating Accent Tag */}
              <div className="absolute bottom-4 left-4 glass-panel px-4 py-2 rounded-xl flex items-center gap-2 pointer-events-none">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <span className="font-mono text-xs text-gray-300">Drag/Move Mouse to Rotate 3D Workspace</span>
              </div>
              {/* DaVinci Resolve Logo Badge */}
              <div className="absolute top-4 right-4 glass-panel px-3 py-2 rounded-xl flex items-center gap-2 pointer-events-none border border-white/10">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/90/DaVinci_Resolve_17_logo.svg"
                  alt="DaVinci Resolve Logo"
                  className="w-6 h-6"
                />
                <span className="font-mono text-[10px] text-gray-300 tracking-wider">POWERED BY DAVINCI RESOLVE</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 p-2 rounded-full glass-panel text-gray-400 hover:text-white transition-colors"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.a>
    </section>
  );
}
