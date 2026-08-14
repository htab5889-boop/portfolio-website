'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Repeat, Sparkles, Building2 } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  comment: string;
  rating: number;
  returnedForRepeatWork: boolean;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Dubai Resort',
    role: 'Resort & Hospitality',
    company: 'Dubai Resort, Jhansi',
    comment:
      'The experience of working with you was awesome. You shot, edited, and managed the whole project nicely. We got around 80k views on that video and thousands of profit on our tickets due to the marketing.',
    rating: 5,
    returnedForRepeatWork: true,
  },
  {
    id: '2',
    name: 'AR Construction',
    role: 'Construction & Real Estate',
    company: 'AR Construction, Jhansi',
    comment:
      'Your editing was awesome and you completed the project on time. Had a great experience with you. I will surely contact you for future projects.',
    rating: 5,
    returnedForRepeatWork: true,
  },
  {
    id: '3',
    name: 'Hotel Ramvan',
    role: 'Hospitality & Tourism',
    company: 'Hotel Ramvan, Jhansi',
    comment:
      'You managed the project very efficiently and also helped us by taking revisions and making the type we wanted. You created a decent hook and our video got 30k+ views with more customers coming.',
    rating: 5,
    returnedForRepeatWork: true,
  },
];

export default function ClientReviewsSection() {
  return (
    <section id="reviews" className="py-24 relative bg-[#090912] overflow-hidden">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-accent-violet/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-emerald-400/30 mb-4"
          >
            <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span className="font-mono text-xs text-gray-200 uppercase tracking-widest">
              CLIENT REVIEWS & RETENTION
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Top-Notch Reviews. <span className="gradient-text-cyan">100% Returning Clients.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 font-light text-base sm:text-lg max-w-2xl mx-auto"
          >
            I prioritize quality over client volume. Every client I work with receives dedicated 1-on-1 cooperation and cinematic excellence.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 rounded-3xl relative flex flex-col justify-between border border-white/10 group hover:border-accent-cyan/40"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-1 text-amber-400">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/10 group-hover:text-accent-cyan/30 transition-colors" />
              </div>

              {/* Comment */}
              <p className="text-gray-300 text-sm leading-relaxed font-light mb-8 italic">
                &ldquo;{rev.comment}&rdquo;
              </p>

              {/* Author & Repeat Client Tag */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-base text-white">{rev.name}</h4>
                    <p className="font-mono text-xs text-accent-cyan flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{rev.company}</span>
                    </p>
                  </div>

                  {rev.returnedForRepeatWork && (
                    <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <Repeat className="w-3 h-3" />
                      <span>Repeat Client</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
