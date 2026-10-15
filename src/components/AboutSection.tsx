import React from 'react';
import { HERO_ASSETS } from '../data/portfolioData.ts';

interface AboutSectionProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume, onOpenContact }) => {
  return (
    <section
      className="bg-[#121212] text-white py-24 border-t border-neutral-800 relative overflow-hidden"
      data-purpose="about-section"
      id="about"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF9E1B]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Arched Photo Showcase with Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-t-[4rem] rounded-b-3xl transition-transform duration-500 hover:scale-[1.02] flex flex-col justify-end overflow-hidden border border-neutral-800 shadow-2xl bg-[#1A1A1A]">
              <div className="w-full h-full rounded-t-[3.8rem] rounded-b-2xl overflow-hidden relative flex items-end justify-center">
                <img
                  src={HERO_ASSETS.portrait}
                  alt="Alex Rivera Portrait Angle"
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                />

                {/* Overlaid Badges at bottom of photo matching reference */}
                <div className="absolute bottom-3 left-2 right-2 flex flex-wrap gap-1.5 justify-center z-10">
                  <span className="bg-black/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow border border-white/10">
                    Mobile App Design
                  </span>
                  <span className="bg-neutral-900 text-[#FF9E1B] text-[10px] font-semibold px-2.5 py-1 rounded-full shadow border border-[#FF9E1B]/30">
                    UX/UI Design
                  </span>
                  <span className="bg-[#FF9E1B] text-neutral-950 text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    Design System
                  </span>
                  <span className="bg-black/90 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow border border-white/10">
                    Website Architecture
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content & Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#FF9E1B] uppercase tracking-widest mb-3">
              <i className="fa-solid fa-fingerprint text-sm" aria-hidden="true"></i>
              <span>About Me</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 flex items-center flex-wrap">
              <span>Who is <span className="text-[#FF9E1B]">Alex Rivera</span>?</span>
              <svg className="w-7 h-7 sm:w-9 sm:h-9 inline-block ml-2 fill-[#FF9E1B] -translate-y-1" viewBox="0 0 24 24">
                <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
              </svg>
            </h2>

            <p className="text-stone-300 leading-relaxed text-sm md:text-base font-normal mb-8">
              Hey there! I'm Alex — an award-winning senior product designer and frontend creative
              passionate about designing intuitive, functional, and visually striking digital
              experiences. With over 8 years in the field, I bridge the gap between creative
              aesthetic vision and engineering execution.
            </p>

            {/* Key Metrics */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-neutral-800 mb-8">
              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FF9E1B]">
                  8+
                </span>
                <p className="text-xs text-stone-400 mt-1 uppercase font-medium tracking-wider">
                  Years Exp.
                </p>
              </div>

              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                  120+
                </span>
                <p className="text-xs text-stone-400 mt-1 uppercase font-medium tracking-wider">
                  Projects Done
                </p>
              </div>

              <div>
                <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FF9E1B]">
                  99%
                </span>
                <p className="text-xs text-stone-400 mt-1 uppercase font-medium tracking-wider">
                  Happy Clients
                </p>
              </div>
            </div>

            {/* Download CV and Signature */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-neutral-900 border border-neutral-700 text-white font-bold text-xs uppercase tracking-wider hover:border-[#FF9E1B] hover:text-[#FF9E1B] transition-all group cursor-pointer"
              >
                <span>Download CV</span>
                <span className="w-6 h-6 rounded-full bg-[#FF9E1B] text-neutral-950 flex items-center justify-center text-[10px] group-hover:translate-y-0.5 transition-transform">
                  <i className="fa-solid fa-arrow-down" aria-hidden="true"></i>
                </span>
              </button>

              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-transparent text-stone-400 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Get in touch</span>
                <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </button>

              {/* Signature Font Representation */}
              <div className="font-signature italic text-2xl sm:text-3xl text-stone-200 tracking-wide select-none ml-auto">
                Alex Rivera
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
