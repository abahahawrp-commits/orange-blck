import React, { useState } from 'react';
import { SERVICES } from '../data/portfolioData.ts';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  // Item 02 (Website & Product Design) active by default as shown in the screenshot
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto" data-purpose="services-section" id="services">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D97706] dark:text-[#FF9E1B] uppercase tracking-widest mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9E1B] animate-ping" aria-hidden="true"></span>
            <span>My Services</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight flex items-center flex-wrap">
            <span>How I Bring <span className="text-[#FF9E1B]">Ideas to Life</span></span>
            <svg className="w-7 h-7 sm:w-9 sm:h-9 inline-block ml-2 fill-[#FF9E1B] -translate-y-1" viewBox="0 0 24 24">
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
          </h2>
        </div>
        <button
          type="button"
          onClick={() => onSelectService('General Service Inquiry')}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#FF9E1B] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all warm-shadow w-fit"
        >
          <span>View All Services</span>
          <span className="w-6 h-6 rounded-full bg-neutral-950 text-white flex items-center justify-center text-[10px]">
            <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </span>
        </button>
      </div>

      {/* Interactive Expandable Accordion System */}
      <div className="space-y-4" id="services-accordion">
        {SERVICES.map((service, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={service.id}
              className={`accordion-item transition-all duration-300 rounded-3xl border overflow-hidden ${
                isActive
                  ? 'bg-[#141414] text-white border-neutral-800 shadow-2xl'
                  : 'bg-white dark:bg-[#1A1A1A] text-neutral-900 dark:text-neutral-100 border-stone-200/90 dark:border-neutral-800 shadow-sm hover:border-stone-300 dark:hover:border-neutral-700'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isActive}
                aria-controls={`service-content-${service.id}`}
                className="accordion-trigger w-full p-6 md:px-8 md:py-6 flex items-center justify-between text-left focus:outline-none transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-5 sm:gap-6">
                  <span
                    className={`accordion-num font-heading font-bold text-sm tracking-wider transition-colors ${
                      isActive ? 'text-[#FF9E1B]' : 'text-stone-400 dark:text-neutral-500'
                    }`}
                  >
                    {service.num}
                  </span>
                  <h3
                    className={`accordion-title font-heading transition-colors ${
                      isActive
                        ? 'font-extrabold text-2xl md:text-3xl tracking-tight text-white'
                        : 'font-bold text-xl md:text-2xl text-neutral-900 dark:text-white'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>

                <div
                  className={`accordion-icon rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isActive
                      ? 'w-11 h-11 bg-[#FF9E1B] text-neutral-950 rotate-45 font-bold shadow-md'
                      : 'w-10 h-10 bg-stone-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200'
                  }`}
                >
                  <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
                </div>
              </button>

              {/* Accordion Expandable Content */}
              <div
                id={`service-content-${service.id}`}
                className={`accordion-transition overflow-hidden px-6 md:px-8 ${
                  isActive ? 'max-h-[500px] opacity-100 pb-7' : 'max-h-0 opacity-0 pb-0'
                }`}
              >
                <div className="pt-2 border-t border-neutral-800/60 dark:border-neutral-800">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-2 mt-4 mb-4">
                    {service.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-3.5 py-1 rounded-full text-xs font-medium bg-neutral-800/90 text-stone-300 border border-neutral-700/80 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-stone-400 text-sm max-w-2xl leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Action CTA */}
                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      onClick={() => onSelectService(service.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF9E1B] text-neutral-950 font-bold text-sm hover:bg-amber-400 transition-all warm-shadow shadow-md cursor-pointer"
                    >
                      <span>{service.ctaText}</span>
                      <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
