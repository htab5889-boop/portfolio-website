'use client';

import React, { useState } from 'react';
import { sampleVideos, VideoProject } from '@/data/videos';

export default function VideoShowcaseSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'motion-graphics' | 'promotional-editing' | 'travel-education'>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoProject | null>(null);

  const filteredVideos = activeTab === 'all'
    ? sampleVideos
    : sampleVideos.filter(v => v.category === activeTab);

  const projectImages: Record<string, string> = {
    'mg-1': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrr2AzoLniMODj3cJO5MYcEUTHLCNX1R_mXzj4arIomEhfL-pkJGSL9oj7i5QxiNktGx3ErY1sy5AqxyWh5DybUJBmFqLeKCkT-dTQeQgb7Ovh9L4flhq1SAXr1RT-1K4LHbCoBlvYDfywZf_3M0uYO7rGoqZ3CEDa9wfcYeB3qFHesxJ7fdKbiO_RQeSeL6wByc8wfQr4kYwkXHiF5m_tipgSg404JWkGMlgNPpvt_b5VRdyWlJ2gwQ',
    'pe-1': 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz5khYgOTljcOXwaJknn9CqUM3ZaP7vtbvN5gDfhPDSGiSOyC2UkKvHuZD1TeJQZJkadwsN2fit9k4qb5Drnc6OygopXd_pWgTuJR--5hnTczRHIRsSCICTDCGWsd2Kfw_t-bWa1Al-XXui1-kjvrKE52IK0AGbL8xA05AbZtWPTRNLHhMieDViBXobtKcKbrgGF3uE6MIVk-Jy4Cv-BEMd3X6Ewgm7gsTlmWLY7lydmq7XFU8H1Y-ZQ',
    'pe-2': 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9JPrlgqe44POr6NjqdDqC-wGbIDFuNVDiz-lgLFEqV0DF2MDS-VTEsrz53ZCtmSiyde3qJFPJ4tazZcVjM97EGeoylt4WFvUlTdAnqHqoZPDmB1-n6GTWmVAJ6kPFEaw45vol8ixLgacl0Ex0MW6T9ahBbMdvQn_3z58l8ifbFiZnoKOs41935vaTE4sCyM4tz7Qi4Hj-RymTQs-qUpO7w-L4uPp5XQQDpvX4OxzcCeSMujUYzeJzeg',
    'pe-3': 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXVRBZgMK4V_gRTfj8A_jI2irL1lZYIZgG-LjNJxX-wwtsU0XQKOnpTxDBnKKcaU3Ut2r3DYyKsI81xxNe1luz3zfkMGM14sDn5BPtGzzTcGHtIxqfKMHvP9YvBoVBSDBKvPhiBK9lIZyDGmvOsVBPUCB5E90pUqrZI0tsT-zDBUeObEaImbtBtkd3lAL5NwC1YuRxTqVno1jYbjTSCRCMI9eYAEcHX4yyEnJPzgaMGQWXxQL0-uhpUw',
    'te-1': 'https://lh3.googleusercontent.com/aida-public/AB6AXuA2swgn83I1DKMCjPzm8zXUEgHq2ePAG91wXAwFP0hAW7xt5XtUIxn798sWXDu6Tn_cxxkakf1OY57BoiXUWjbFPwOz8O3x-JSALmveM1t5gZ8VZuVI1HYewR4XiFwgFsCiD8J6g9sfMefTU7agt5LVh0agb38j6NuqzICFhepmQuDcsDjAKtbeKh2ZDPXdc9OQLvA0mjCSPF4-vjMubMhZ37Ry3WieHrRaV4y0Tf4bfDA9E_-ckQTTaQ',
  };

  const getThumbnail = (video: VideoProject) => {
    if (video.thumbnailOverride) return video.thumbnailOverride;
    if (projectImages[video.id]) return projectImages[video.id];
    if (video.youtubeId) return `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
    return '/images/placeholder.jpg';
  };

  return (
    <section className="py-24 max-w-container-max mx-auto px-6 md:px-12 lg:px-16 border-t border-white/10" id="showcase">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase mb-2">
            <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#2997ff]"></span>
            PORTFOLIO SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-on-surface font-semibold">Crafted for Visual Impact.</h2>
          <p className="text-base sm:text-lg text-on-surface-variant mt-2">
            Categorized video projects across Motion Graphics, Promotional Editing, and Travel/Education.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
              activeTab === 'all'
                ? 'bg-primary-container text-[#050507] shadow-sm scale-105'
                : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-on-surface-variant shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab('motion-graphics')}
            className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
              activeTab === 'motion-graphics'
                ? 'bg-primary-container text-[#050507] shadow-sm scale-105'
                : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-on-surface-variant shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
            }`}
          >
            Motion Graphics
          </button>
          <button
            onClick={() => setActiveTab('promotional-editing')}
            className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
              activeTab === 'promotional-editing'
                ? 'bg-primary-container text-[#050507] shadow-sm scale-105'
                : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-on-surface-variant shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
            }`}
          >
            Promotional Editing
          </button>
          <button
            onClick={() => setActiveTab('travel-education')}
            className={`px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all ${
              activeTab === 'travel-education'
                ? 'bg-primary-container text-[#050507] shadow-sm scale-105'
                : 'bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-on-surface-variant shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
            }`}
          >
            Travel &amp; Education
          </button>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => {
          const isWide = video.id === 'te-1';
          return (
            <article
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className={`group rounded-2xl titanium-glass overflow-hidden hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                isWide ? 'lg:col-span-2' : ''
              }`}
            >
              <div>
                <div className={`relative aspect-video ${isWide ? 'lg:aspect-[21/9]' : ''} bg-[#0c0d11] overflow-hidden`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={video.title}
                    src={getThumbnail(video)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10] via-transparent to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {video.colorGraded && (
                      <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md font-mono text-xs text-primary border border-white/15">
                        Color Graded
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md font-mono text-xs text-on-surface-variant border border-white/15">
                      {video.categoryLabel}
                    </span>
                  </div>

                  {/* Views Pill */}
                  {video.id === 'pe-3' && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-primary text-[#050507] font-mono text-xs font-bold shadow-lg">
                      80k Peak Views
                    </div>
                  )}
                  {video.id === 'pe-2' && (
                    <div className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded-full bg-primary-container text-[#050507] font-mono text-xs font-bold shadow-lg">
                      30k+ Views
                    </div>
                  )}

                  {/* Play Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30 backdrop-blur-[2px]">
                    <div className="w-14 h-14 rounded-full bg-primary-container text-[#050507] flex items-center justify-center shadow-[0_0_24px_rgba(41,151,255,0.7)] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-2xl">play_arrow</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg text-on-surface font-semibold group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-2 mb-4 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-white/10 font-mono text-xs text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-xs text-primary">circle</span>
                {video.softwareUsed.map((sw, idx) => (
                  <React.Fragment key={sw}>
                    <span>{sw}</span>
                    {idx < video.softwareUsed.length - 1 && <span className="text-outline-variant">•</span>}
                  </React.Fragment>
                ))}
              </div>
            </article>
          );
        })}
      </div>

      {/* Video Modal Player */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl titanium-glass overflow-hidden border border-white/20 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h3 className="text-lg font-semibold text-white">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1 rounded-lg text-on-surface-variant hover:text-white hover:bg-white/10 transition-colors"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>
            <div className="relative aspect-video w-full bg-black rounded-xl overflow-hidden">
              {selectedVideo.youtubeId ? (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : selectedVideo.videoUrl ? (
                <video className="w-full h-full object-contain" controls autoPlay src={selectedVideo.videoUrl} />
              ) : (
                <div className="flex items-center justify-center h-full text-on-surface-variant font-mono">
                  Video preview unavailable
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
