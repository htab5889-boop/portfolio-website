'use client';

import React from 'react';

export default function ClientReviewsSection() {
  const reviews = [
    {
      id: 1,
      quote:
        '“The experience of working with you was awesome. You shot, edited, and managed the whole project nicely. We got around 80k views on that video and thousands of profit on our tickets due to the marketing.”',
      client: 'Dubai Resort',
      location: 'Dubai Resort, Jhansi',
      badge: 'Repeat Client',
    },
    {
      id: 2,
      quote:
        '“Your editing was awesome and you completed the project on time. Had a great experience with you. I will surely contact you for future projects.”',
      client: 'AR Construction',
      location: 'AR Construction, Jhansi',
      badge: 'Repeat Client',
    },
    {
      id: 3,
      quote:
        '“You managed the project very efficiently and also helped us by taking revisions and making the type we wanted. You created a decent hook and our video got 30k+ views with more customers coming.”',
      client: 'Hotel Ramvan',
      location: 'Hotel Ramvan, Jhansi',
      badge: 'Repeat Client',
    },
  ];

  return (
    <section className="py-24 max-w-container-max mx-auto px-6 md:px-12 lg:px-16 border-t border-white/10" id="reviews">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase mb-2">
          <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#2997ff]"></span>
          CLIENT REVIEWS &amp; RETENTION
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-on-surface font-semibold mb-4">
          Top-Notch Reviews. 100% Returning Clients.
        </h2>
        <p className="text-base sm:text-lg text-on-surface-variant">
          I prioritize quality over client volume. Every client I work with receives dedicated 1-on-1 cooperation and cinematic excellence.
        </p>
      </div>

      {/* Reviews Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="p-8 rounded-3xl titanium-glass flex flex-col justify-between hover:border-primary/50 hover:shadow-[0_20px_45px_-10px_rgba(41,151,255,0.15)] transition-all"
          >
            <div>
              <div className="flex items-center gap-1 text-[#ffbd2e] mb-6">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-base text-on-surface italic leading-relaxed mb-8">
                {rev.quote}
              </p>
            </div>
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <h4 className="text-lg text-on-surface font-semibold">{rev.client}</h4>
                <p className="font-mono text-xs text-on-surface-variant">{rev.location}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-mono text-xs text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                {rev.badge}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
