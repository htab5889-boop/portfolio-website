'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Film, X, Sliders } from 'lucide-react';
import { sampleVideos, VideoProject } from '@/data/videos';

export default function VideoShowcaseSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'motion-graphics' | 'promotional-editing' | 'travel-education'>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'motion-graphics', label: 'Motion Graphics' },
    { id: 'promotional-editing', label: 'Promotional Editing' },
    { id: 'travel-education', label: 'Travel & Education' },
  ];

  const filteredVideos = activeTab === 'all' 
    ? sampleVideos 
    : sampleVideos.filter(v => v.category === activeTab);

  /** Get YouTube thumbnail URL */
  const getYoutubeThumbnail = (youtubeId: string) =>
    `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  return (
    <section id="showcase" className="py-28 relative bg-[#07070c] overflow-hidden">
      {/* Background Neon Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-violet/15 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border border-accent-pink/30 mb-4"
          >
            <Film className="w-4 h-4 text-accent-pink" />
            <span className="font-mono text-xs text-gray-200 uppercase tracking-widest">
              PORTFOLIO SHOWCASE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-tight mb-4"
          >
            Crafted for <span className="gradient-text-purple">Visual Impact.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 font-light text-base sm:text-lg"
          >
            Categorized video projects across Motion Graphics, Promotional Editing, and Travel/Education.
          </motion.p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`px-6 py-3 rounded-full font-mono text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-accent-cyan to-accent-violet text-white shadow-[0_0_20px_rgba(0,242,254,0.4)] scale-105'
                  : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedVideo(video)}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-accent-cyan/40 transition-all duration-400"
              >
                {/* Video Preview */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-surface-light">
                  {video.youtubeId ? (
                    /* YouTube Thumbnail Preview */
                    <img
                      src={getYoutubeThumbnail(video.youtubeId)}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                  ) : (
                    /* Local Video Preview (hover to play) */
                    <video
                      src={video.videoUrl}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                      onMouseLeave={(e) => { const v = e.currentTarget as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                    />
                  )}
                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-black/30 to-transparent group-hover:via-transparent transition-all pointer-events-none"></div>

                  {/* Play Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-accent-cyan/90 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-accent-violet transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.6)]">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Color Graded Badge */}
                  {video.colorGraded && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full glass-panel text-[10px] font-mono text-accent-cyan flex items-center gap-1.5 border border-accent-cyan/40 pointer-events-none">
                      <Sliders className="w-3 h-3" />
                      <span>Color Graded</span>
                    </div>
                  )}

                  {/* Category Pill */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full glass-panel text-[10px] font-mono text-gray-200 pointer-events-none">
                    {video.categoryLabel}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent-cyan transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-light line-clamp-2 leading-relaxed mb-4">
                    {video.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {video.softwareUsed.map((sw) => (
                      <span
                        key={sw}
                        className="px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] font-mono text-gray-300"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Video Player Modal Overlay */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass-card w-full max-w-4xl rounded-3xl overflow-hidden border border-white/20 relative flex flex-col"
              >
                {/* Modal Header */}
                <div className="p-5 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-lg text-white">
                      {selectedVideo.title}
                    </h4>
                    <p className="font-mono text-xs text-accent-cyan">
                      {selectedVideo.categoryLabel} • {selectedVideo.clientType}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="p-2 rounded-full glass-pill hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Video Player */}
                <div className="relative aspect-[9/16] w-full bg-black mx-auto max-h-[70vh] flex justify-center">
                  {selectedVideo.youtubeId ? (
                    /* YouTube Embed */
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                      title={selectedVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                      style={{ border: 'none' }}
                    />
                  ) : (
                    /* Local Video Player */
                    <video
                      src={selectedVideo.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full"
                    />
                  )}
                </div>

                {/* Modal Footer Description */}
                <div className="p-6 bg-surface/90">
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                    {selectedVideo.description}
                  </p>
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-gray-400">Software:</span>
                      {selectedVideo.softwareUsed.map((sw) => (
                        <span
                          key={sw}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs font-mono text-accent-cyan border border-white/10"
                        >
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

