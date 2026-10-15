import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/portfolioData.ts';

export const TestimonialsSection: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto" id="testimonials" data-purpose="testimonials-section">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D97706] dark:text-[#FF9E1B] uppercase tracking-widest mb-3">
          <i className="fa-solid fa-quote-right text-xs" aria-hidden="true"></i>
          <span>Client Testimonials</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight flex items-center justify-center flex-wrap">
          <span>Trusted by <span className="text-[#FF9E1B]">Product Leaders</span></span>
          <svg className="w-7 h-7 sm:w-9 sm:h-9 inline-block ml-2 fill-[#FF9E1B] -translate-y-1" viewBox="0 0 24 24">
            <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
          </svg>
        </h2>
        <p className="text-stone-600 dark:text-stone-400 text-sm mt-2">
          Discover why high-growth startups and visionary tech executives choose to collaborate with
          me time and time again.
        </p>
      </div>

      {/* Featured Testimonial Card */}
      <div className="bg-white dark:bg-[#181818] rounded-3xl border border-stone-200/90 dark:border-neutral-800 p-8 md:p-12 shadow-xl relative overflow-hidden">
        <div className="text-[#FF9E1B] text-6xl font-serif absolute -top-2 left-6 opacity-40 select-none">
          “
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-1 text-amber-500 mb-6 text-sm">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star" aria-hidden="true"></i>
            ))}
            <span className="text-xs font-bold text-stone-500 ml-2">5.0 Star Rating</span>
          </div>

          <p className="font-heading text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white leading-relaxed italic mb-8">
            "{TESTIMONIALS[activeTestimonial].quote}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-stone-100 dark:border-neutral-800">
            <div className="flex items-center gap-4">
              <img
                src={TESTIMONIALS[activeTestimonial].avatarUrl}
                alt={TESTIMONIALS[activeTestimonial].name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-[#FF9E1B]"
              />
              <div>
                <h4 className="font-heading font-bold text-base text-neutral-900 dark:text-white">
                  {TESTIMONIALS[activeTestimonial].name}
                </h4>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  {TESTIMONIALS[activeTestimonial].role} ·{' '}
                  <span className="text-[#D97706] dark:text-[#FF9E1B] font-semibold">
                    {TESTIMONIALS[activeTestimonial].company}
                  </span>
                </p>
                <span className="inline-block mt-1 text-[10px] font-semibold uppercase tracking-wider text-stone-400">
                  {TESTIMONIALS[activeTestimonial].highlightTag}
                </span>
              </div>
            </div>

            {/* Testimonial Selectors */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx
                      ? 'w-8 bg-[#FF9E1B]'
                      : 'bg-stone-300 dark:bg-neutral-700 hover:bg-stone-400'
                  }`}
                  aria-label={`View testimonial from ${t.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="p-4 rounded-2xl bg-[#F0ECE1] dark:bg-[#1E1E1E] text-center border border-stone-200 dark:border-neutral-800">
          <span className="block font-heading font-extrabold text-2xl text-neutral-900 dark:text-white">
            100%
          </span>
          <span className="text-[11px] text-stone-600 dark:text-stone-400 font-medium uppercase tracking-wider">
            On-Time Delivery
          </span>
        </div>
        <div className="p-4 rounded-2xl bg-[#F0ECE1] dark:bg-[#1E1E1E] text-center border border-stone-200 dark:border-neutral-800">
          <span className="block font-heading font-extrabold text-2xl text-[#FF9E1B]">
            4.9 / 5.0
          </span>
          <span className="text-[11px] text-stone-600 dark:text-stone-400 font-medium uppercase tracking-wider">
            Client Rating
          </span>
        </div>
        <div className="p-4 rounded-2xl bg-[#F0ECE1] dark:bg-[#1E1E1E] text-center border border-stone-200 dark:border-neutral-800">
          <span className="block font-heading font-extrabold text-2xl text-neutral-900 dark:text-white">
            8+ Years
          </span>
          <span className="text-[11px] text-stone-600 dark:text-stone-400 font-medium uppercase tracking-wider">
            Industry Practice
          </span>
        </div>
        <div className="p-4 rounded-2xl bg-[#F0ECE1] dark:bg-[#1E1E1E] text-center border border-stone-200 dark:border-neutral-800">
          <span className="block font-heading font-extrabold text-2xl text-[#FF9E1B]">
            14+ Awards
          </span>
          <span className="text-[11px] text-stone-600 dark:text-stone-400 font-medium uppercase tracking-wider">
            Awwwards &amp; FWA
          </span>
        </div>
      </div>
    </section>
  );
};
