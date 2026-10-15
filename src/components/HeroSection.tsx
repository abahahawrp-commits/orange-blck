import React from 'react';
import { Crown, ArrowRight, Star, Smartphone } from 'lucide-react';
import { HERO_ASSETS, MARQUEE_ITEMS } from '../data/portfolioData.ts';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreProjects: () => void;
  isDarkMode?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onExploreProjects,
  isDarkMode = false
}) => {
  return (
    <main
      className="relative pt-32 sm:pt-36 pb-16 overflow-hidden bg-grain min-h-[92vh] flex flex-col justify-between"
      data-purpose="hero-section"
      id="home"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Top Pill Award Tag */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#EFECE3] dark:bg-[#202020] border border-stone-300/60 dark:border-neutral-700 rounded-full shadow-sm text-neutral-800 dark:text-neutral-200 text-xs font-medium">
            <span className="w-5 h-5 rounded-full bg-[#FF9E1B]/20 text-[#D97706] dark:text-[#FF9E1B] flex items-center justify-center text-[11px]">
              <Crown className="w-3 h-3 text-[#D97706] dark:text-[#FF9E1B]" />
            </span>
            <span>Award-Winning Product Designer &amp; Developer</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center relative">
          <h1 className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] ${
            isDarkMode ? 'text-white' : 'text-neutral-900'
          }`}>
            I'm{' '}
            <span className="text-[#FF9E1B] underline decoration-[#F59E0B]/30 underline-offset-8">
              Alex Rivera
            </span>
            <span className="inline-block translate-y-[-4px] ml-2 text-[#FF9E1B]">
              <svg className="w-7 h-7 sm:w-9 sm:h-9 inline-block fill-[#FF9E1B]" viewBox="0 0 24 24">
                <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
              </svg>
            </span>
          </h1>
          <p className={`mt-3 font-medium text-sm sm:text-base tracking-wide max-w-xl mx-auto ${
            isDarkMode ? 'text-stone-300' : 'text-neutral-600'
          }`}>
            Senior UI/UX Designer &amp; Full-stack Engineer based in San Francisco
          </p>

          {/* Floating Hire Me Rotating Seal (Top Right on Large Screens) */}
          <div className="hidden lg:block absolute right-4 -top-2 pointer-events-auto">
            <button
              type="button"
              onClick={onOpenContact}
              className="relative w-28 h-28 flex items-center justify-center animate-float group cursor-pointer focus:outline-none"
              aria-label="Hire Alex Rivera - Available Now"
            >
              {/* Circular animated text SVG */}
              <svg className="w-full h-full animate-spin-slow select-none" viewBox="0 0 100 100">
                <defs>
                  <path
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    id="circlePathHero"
                  ></path>
                </defs>
                <text
                  fill={isDarkMode ? '#E5E5E5' : '#171717'}
                  fontSize="9.2"
                  fontWeight="700"
                  letterSpacing="2.2"
                >
                  <textPath xlinkHref="#circlePathHero">
                    HIRE ME • AVAILABLE NOW • DESIGNER •
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-10 h-10 rounded-full bg-[#FF9E1B] text-slate-900 flex items-center justify-center font-bold text-xs shadow-md group-hover:scale-110 transition-transform">
                <ArrowRight className="w-4 h-4 -rotate-45 text-neutral-950 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

        {/* Center Hero Visual Composition */}
        <div className="relative mt-7 sm:mt-9 max-w-4xl mx-auto flex items-center justify-center">
          {/* Floating Left Info: Social Links & Review Badge */}
          <div className="hidden md:flex flex-col gap-5 absolute left-0 lg:-left-6 top-12 z-20 w-52">
            {/* Socials Card */}
            <div className="bg-white/85 dark:bg-[#1C1C1C]/90 backdrop-blur-md p-3.5 rounded-2xl border border-stone-200/80 dark:border-neutral-800 shadow-md animate-float">
              <span className="text-[10px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-widest block mb-2.5">
                Connect With Me
              </span>
              <div className="flex items-center gap-2">
                {/* Dribbble */}
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Dribbble Profile"
                  className="w-8 h-8 rounded-full bg-stone-100 dark:bg-neutral-800 hover:bg-neutral-900 hover:text-white dark:hover:bg-[#FF9E1B] dark:hover:text-neutral-950 flex items-center justify-center text-xs text-neutral-800 dark:text-neutral-300 transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.849 10.74c-.588-.046-2.909-.208-5.617.708-.035-.078-.071-.157-.107-.235-.558-1.226-1.189-2.42-1.89-3.57 2.923 1.009 5.86 2.457 7.614 3.097zm-9.362-7.854c.712 1.157 1.345 2.348 1.892 3.568-3.08.974-6.386 1.054-7.29 1.066.98-2.67 3.076-4.444 5.398-4.634zm-8.814 6.78c.84-.012 4.417-.11 7.724-1.134.428.878.825 1.777 1.188 2.69-3.692 1.144-7.24 3.447-8.318 4.22-.444-1.745-.662-3.784-.594-5.776zm2.464 9.07c.884-.664 4.092-2.736 7.632-3.818 1.152 3.12 1.637 6.13 1.745 6.87-4.14 1.31-7.893-.84-9.377-3.052zm11.168 2.766c-.104-.68-.567-3.51-1.66-6.49 2.502-.87 4.743-.728 5.286-.684-.33 3.19-2.008 5.92-4.626 7.174zm-2.18-8.22c-2.435.83-5.26 2.62-6.19 3.25-.09-.2-.18-.41-.26-.62-.4-1.02-.76-2.07-1.06-3.14 2.4-.78 4.75-.7 5.14-.68.79.43 1.59.83 2.37 1.19z"/>
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter X Profile"
                  className="w-8 h-8 rounded-full bg-stone-100 dark:bg-neutral-800 hover:bg-neutral-900 hover:text-white dark:hover:bg-[#FF9E1B] dark:hover:text-neutral-950 flex items-center justify-center text-xs text-neutral-800 dark:text-neutral-300 transition-all shadow-sm"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-8 h-8 rounded-full bg-stone-100 dark:bg-neutral-800 hover:bg-neutral-900 hover:text-white dark:hover:bg-[#FF9E1B] dark:hover:text-neutral-950 flex items-center justify-center text-xs text-neutral-800 dark:text-neutral-300 transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-8 h-8 rounded-full bg-stone-100 dark:bg-neutral-800 hover:bg-neutral-900 hover:text-white dark:hover:bg-[#FF9E1B] dark:hover:text-neutral-950 flex items-center justify-center text-xs text-neutral-800 dark:text-neutral-300 transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Social Proof Avatar Box */}
            <div className="bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-md p-4 rounded-2xl border border-stone-200/80 dark:border-neutral-800 shadow-lg card-shadow animate-float-delayed">
              <div className="flex -space-x-2 overflow-hidden mb-2">
                <img
                  src={HERO_ASSETS.avatars[0]}
                  alt="Client Elena"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-800 object-cover"
                />
                <img
                  src={HERO_ASSETS.avatars[1]}
                  alt="Client Marcus"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-800 object-cover"
                />
                <img
                  src={HERO_ASSETS.avatars[2]}
                  alt="Client Chloe"
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-neutral-800 object-cover"
                />
                <div className="w-8 h-8 rounded-full bg-[#FF9E1B] text-slate-900 font-bold text-[11px] flex items-center justify-center ring-2 ring-white dark:ring-neutral-800">
                  +85
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 dark:text-white">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.9 of 5</span>
                </div>
                <span className="text-neutral-500 dark:text-neutral-400 font-normal">
                  (350+ Reviews)
                </span>
              </div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-0.5">
                Top-rated design partner for startups
              </p>
            </div>
          </div>

          {/* Central User Portrait Arched Frame */}
          <div className="relative w-64 sm:w-72 md:w-[360px] aspect-[4/5] flex items-end justify-center group">
            <div className="relative z-10 w-full h-[96%] overflow-hidden rounded-t-[5.5rem] md:rounded-t-[7rem] rounded-b-2xl flex items-end justify-center shadow-xl border border-stone-300/40 dark:border-neutral-800 bg-[#E8E3D7] dark:bg-[#202020]">
              <img
                src={HERO_ASSETS.portrait}
                alt="Alex Rivera Portrait"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95"
              />
            </div>
          </div>

          {/* Floating Right Badges & Skills */}
          <div className="hidden md:flex flex-col gap-4 absolute right-0 lg:-right-4 top-10 z-20 w-64 items-end">
            {/* Testimonial Quote Pill */}
            <div className="bg-white/90 dark:bg-[#1C1C1C]/90 backdrop-blur-md p-4 rounded-2xl border border-stone-200/80 dark:border-neutral-800 shadow-lg text-right max-w-xs animate-float">
              <div className="text-[#FF9E1B] text-2xl font-serif leading-none mb-1">“</div>
              <p className="text-xs font-medium text-stone-800 dark:text-stone-200 leading-relaxed italic">
                Highly professional product designer with rare blend of design &amp; tech mastery!
              </p>
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-2 block">
                — VP of Design @ Lumina
              </span>
            </div>

            {/* Skill Badges Cloud */}
            <div className="flex flex-wrap gap-2 justify-end max-w-xs pt-2 animate-float-delayed">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 text-white shadow-sm flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Prototype
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF9E1B] text-neutral-950 warm-shadow">
                Dashboard
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-900 text-white shadow-sm flex items-center gap-1.5">
                <Smartphone className="w-3 h-3 text-amber-400" />
                Mobile App Design
              </span>
              <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-stone-300 dark:border-neutral-700">
                Web Architecture
              </span>
              <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF9E1B] text-neutral-950">
                Design Systems
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons (Centered Pill Overlap) */}
        <div className="flex items-center justify-center gap-3.5 mt-8 z-30 relative">
          <button
            type="button"
            onClick={onExploreProjects}
            className="px-7 py-3.5 rounded-full bg-[#FF9E1B] text-neutral-950 font-bold text-sm tracking-wide hover:bg-amber-400 transition-all warm-shadow flex items-center gap-2 group cursor-pointer"
          >
            <span>Explore Portfolio</span>
            <span className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="px-7 py-3.5 rounded-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-bold text-sm tracking-wide border border-stone-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white transition-all shadow-sm cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile quick badges */}
        <div className="flex md:hidden flex-wrap gap-2 justify-center mt-6">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-neutral-900 text-white flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9 (350+ Reviews)
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FF9E1B] text-neutral-950">
            Available Now
          </span>
          <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-white dark:bg-neutral-800 border border-stone-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200">
            San Francisco
          </span>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div
        className="mt-14 w-full bg-[#141414] text-white py-4 overflow-hidden border-y border-neutral-800"
        data-purpose="service-ticker"
      >
        <div className="flex items-center whitespace-nowrap animate-marquee font-heading text-sm uppercase tracking-wider font-semibold">
          {/* Item Group 1 */}
          <div className="flex items-center space-x-8 px-4">
            {MARQUEE_ITEMS.map((item, idx) => (
              <span key={`group1-${idx}`} className="flex items-center gap-3">
                {item}
                <svg className="w-3 h-3 fill-[#FF9E1B]" viewBox="0 0 24 24">
                  <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
              </span>
            ))}
          </div>
          {/* Duplicated for Seamless Infinite Loop */}
          <div aria-hidden="true" className="flex items-center space-x-8 px-4">
            {MARQUEE_ITEMS.map((item, idx) => (
              <span key={`group2-${idx}`} className="flex items-center gap-3">
                {item}
                <svg className="w-3 h-3 fill-[#FF9E1B]" viewBox="0 0 24 24">
                  <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
                </svg>
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
