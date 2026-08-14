'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Sparkles, Mail, MessageSquare, Clock, ShieldAlert, Instagram, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    projectType: 'promotional-editing',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/de2f12a0e7a40bc4818ec01c992ebe6d', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          projectType: formState.projectType,
          message: formState.message,
          _subject: `New Portfolio Inquiry from ${formState.name}`,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Trigger Confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f2fe', '#7928ca', '#ff0080', '#10b981'],
        });
      } else {
        alert('There was an issue sending your message. Please try emailing directly.');
      }
    } catch (error) {
      alert('Network error. Please try emailing directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative bg-[#07070c] overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent-cyan/15 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-pink/15 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Callout Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-accent-cyan/30 mb-4">
              <Sparkles className="w-4 h-4 text-accent-cyan" />
              <span className="font-mono text-xs text-gray-200 uppercase tracking-widest">
                START A FREELANCE PROJECT
              </span>
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-6">
              Let&apos;s Build Your Next <span className="gradient-text-cyan">Viral Video.</span>
            </h2>

            <p className="text-gray-300 font-light text-base sm:text-lg leading-relaxed mb-8">
              Have a promotional edit, motion graphics package, or travel video project in mind? Fill out the form or reach out directly to discuss your project requirements.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-4 w-full">
              <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-accent-cyan" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-400">Direct Email Inquiry</p>
                  <a href="mailto:princeahirwar.8127@gmail.com" className="font-display font-bold text-sm sm:text-base text-white hover:text-accent-cyan transition-colors">
                    princeahirwar.8127@gmail.com
                  </a>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-pink/20 flex items-center justify-center shrink-0">
                  <Instagram className="w-6 h-6 text-accent-pink" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-400">Instagram</p>
                  <a href="https://www.instagram.com/prince_editz_308/" target="_blank" rel="noopener noreferrer" className="font-display font-bold text-sm sm:text-base text-white hover:text-accent-pink transition-colors">
                    @prince_editz_308
                  </a>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-violet/20 flex items-center justify-center shrink-0">
                  <ExternalLink className="w-6 h-6 text-accent-violet" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-400">See My Works</p>
                  <a href="https://www.instagram.com/mahak_unfiltered122/" target="_blank" rel="noopener noreferrer" className="font-display font-bold text-sm sm:text-base text-white hover:text-accent-violet transition-colors">
                    @mahak_unfiltered122
                  </a>
                </div>
              </div>

              <div className="glass-card p-4 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <p className="font-mono text-xs text-gray-400">Freelance Availability</p>
                  <p className="font-display font-bold text-base text-white">
                    Project-Based & Contract Freelancing
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl relative border border-white/10"
          >
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-2">Message Sent!</h3>
                <p className="text-gray-300 font-light max-w-md mb-6">
                  Thank you for reaching out, <strong className="text-white">{formState.name}</strong>! Prince will review your video project details and respond within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', projectType: 'promotional-editing', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-full glass-pill text-xs font-mono text-accent-cyan hover:text-white transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono text-xs text-gray-300 mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Johnson"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-xs text-gray-300 mb-2">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors font-sans text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-300 mb-2">Project Category</label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 text-white focus:outline-none focus:border-accent-cyan transition-colors font-sans text-sm"
                  >
                    <option value="promotional-editing" className="bg-[#0f0f18] text-white">Promotional Video / Business Commercial</option>
                    <option value="motion-graphics" className="bg-[#0f0f18] text-white">Motion Graphics & Kinetic Text</option>
                    <option value="travel-education" className="bg-[#0f0f18] text-white">Travel Vlog or Educational Content</option>
                    <option value="color-grading" className="bg-[#0f0f18] text-white">Dedicated Color Grading (Rec.709)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-300 mb-2">Project Requirements & Details</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your video vision, length, deadlines, and target audience..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-surface/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-accent-cyan transition-colors font-sans text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-pink text-white font-bold text-base shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:shadow-[0_0_40px_rgba(121,40,202,0.5)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Freelance Project Request</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
