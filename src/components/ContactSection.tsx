'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'Promotional Video / Business Commercial',
    details: '',
    _hp: '', // Honeypot anti-bot trap
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', category: 'Promotional Video / Business Commercial', details: '', _hp: '' });
      } else {
        setErrorMessage(data?.error || 'Failed to send inquiry. Please try again.');
      }
    } catch (error) {
      console.error('Error sending inquiry:', error);
      setErrorMessage('Network error occurred. Please try reaching out directly via email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 max-w-container-max mx-auto px-6 md:px-12 lg:px-16 border-t border-white/10" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Details & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase">
            <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_#2997ff]"></span>
            START A FREELANCE PROJECT
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-on-surface font-semibold leading-tight">
            Let&apos;s Build Your Next Viral Video.
          </h2>

          <p className="text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Have a promotional edit, motion graphics package, or travel video project in mind? Fill out the form or reach out directly to discuss your project requirements.
          </p>

          <div className="space-y-4 pt-4">
            {/* Email */}
            <a
              className="p-4 rounded-2xl titanium-glass flex items-center gap-4 hover:border-primary/50 transition-all block group"
              href="mailto:princeahirwar.dev@gmail.com"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">Direct Email Inquiry</div>
                <div className="text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  princeahirwar.dev@gmail.com
                </div>
              </div>
            </a>

            {/* YouTube Channel */}
            <a
              className="p-4 rounded-2xl titanium-glass flex items-center gap-4 hover:border-red-500/50 transition-all block group"
              href="https://youtube.com/@mahak_unfiltered?si=H8-Fq-gpJKTbM4nr"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">YouTube Channel</div>
                <div className="text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  @mahak_unfiltered
                </div>
              </div>
            </a>

            {/* Instagram 1 */}
            <a
              className="p-4 rounded-2xl titanium-glass flex items-center gap-4 hover:border-primary/50 transition-all block group"
              href="https://www.instagram.com/prince_editz_308/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <span className="material-symbols-outlined">photo_camera</span>
              </div>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">Instagram</div>
                <div className="text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  @prince_editz_308
                </div>
              </div>
            </a>

            {/* Instagram 2 */}
            <a
              className="p-4 rounded-2xl titanium-glass flex items-center gap-4 hover:border-primary/50 transition-all block group"
              href="https://www.instagram.com/mahak_unfiltered122/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <span className="material-symbols-outlined">visibility</span>
              </div>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">See My Works</div>
                <div className="text-base text-on-surface font-medium group-hover:text-primary transition-colors">
                  @mahak_unfiltered122
                </div>
              </div>
            </a>

            {/* Freelance Availability */}
            <div className="p-4 rounded-2xl titanium-glass flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#34c759] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <div>
                <div className="font-mono text-xs text-on-surface-variant uppercase">Freelance Availability</div>
                <div className="text-base text-on-surface font-medium">Project-Based &amp; Contract Freelancing</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Inquiry Terminal Form */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="p-8 md:p-10 rounded-3xl titanium-glass space-y-6">
            {/* Hidden Honeypot Field for Spam Bot Protection */}
            <div className="sr-only opacity-0 absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="_hp">Leave this field blank</label>
              <input
                id="_hp"
                name="_hp"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={formData._hp}
                onChange={(e) => setFormData({ ...formData, _hp: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-xs text-on-surface-variant uppercase mb-2">Your Name</label>
                <input
                  required
                  maxLength={100}
                  minLength={2}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#09090d]/80 border border-white/10 text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner"
                  placeholder="e.g. John Doe"
                  type="text"
                />
              </div>
              <div>
                <label className="block font-mono text-xs text-on-surface-variant uppercase mb-2">Your Email</label>
                <input
                  required
                  maxLength={254}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#09090d]/80 border border-white/10 text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-xs text-on-surface-variant uppercase mb-2">Project Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#09090d]/80 border border-white/10 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner"
              >
                <option value="Promotional Video / Business Commercial">Promotional Video / Business Commercial</option>
                <option value="Motion Graphics & Kinetic Text">Motion Graphics &amp; Kinetic Text</option>
                <option value="Travel Vlog or Educational Content">Travel Vlog or Educational Content</option>
                <option value="Dedicated Color Grading (Rec.709)">Dedicated Color Grading (Rec.709)</option>
              </select>
            </div>

            <div>
              <label className="block font-mono text-xs text-on-surface-variant uppercase mb-2">
                Project Requirements &amp; Details
              </label>
              <textarea
                required
                maxLength={3000}
                minLength={5}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#09090d]/80 border border-white/10 text-on-surface placeholder:text-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all shadow-inner"
                placeholder="Tell me about your video footage, target platform, desired turnaround, and reference links..."
                rows={4}
              />
            </div>

            {errorMessage && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {errorMessage}
              </div>
            )}

            <button
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-primary-container text-[#050507] font-semibold text-base sm:text-lg hover:shadow-[0_0_28px_rgba(41,151,255,0.55)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              type="submit"
            >
              <span>{isSubmitting ? 'Sending...' : submitted ? 'Inquiry Form Sent!' : 'Send Freelance Project Request'}</span>
              <span className="material-symbols-outlined text-lg">send</span>
            </button>

            <div className="text-center font-mono text-xs text-on-surface-variant">
              Guaranteed response within 24 hours. Confidentiality respected.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
