import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData.ts';
import { ProjectCaseStudy } from '../types/index.ts';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectCaseStudy) => void;
  onOpenContact: (service?: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenContact
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'dashboard', label: 'SaaS & Dashboard' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web & Brand' },
    { id: 'systems', label: 'Design Systems' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto" id="projects" data-purpose="projects-section">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D97706] dark:text-[#FF9E1B] uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF9E1B]" aria-hidden="true"></span>
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight flex items-center flex-wrap">
            <span>Selected <span className="text-[#FF9E1B]">Case Studies</span></span>
            <svg className="w-7 h-7 sm:w-9 sm:h-9 inline-block ml-2 fill-[#FF9E1B] -translate-y-1" viewBox="0 0 24 24">
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
            </svg>
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-sm mt-2 max-w-xl">
            A curated selection of enterprise SaaS platforms, high-conversion mobile apps, and
            scalable design systems crafted for visionary companies.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 bg-[#EAE6DC] dark:bg-[#1E1E1E] p-1.5 rounded-full border border-stone-300/60 dark:border-neutral-800">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#141414] dark:bg-[#FF9E1B] text-white dark:text-neutral-950 shadow-md'
                    : 'text-stone-700 dark:text-stone-300 hover:text-black dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group rounded-3xl bg-white dark:bg-[#181818] border border-stone-200/90 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Visual Header / Image Container */}
            <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-6">
                <div className="flex justify-between items-start">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-md text-neutral-900 uppercase tracking-wider shadow-sm">
                    {project.categoryLabel}
                  </span>
                  <span className="text-white/80 text-xs font-semibold">{project.year}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-stone-300 font-medium">
                      {project.client}
                    </span>
                    <div className="flex items-baseline gap-2 mt-0.5">
                      <span className="text-2xl font-extrabold text-[#FF9E1B] font-heading">
                        {project.metrics}
                      </span>
                      <span className="text-xs text-stone-200 font-medium">
                        {project.metricLabel}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="w-11 h-11 rounded-full bg-[#FF9E1B] text-neutral-950 flex items-center justify-center font-bold text-sm shadow-md group-hover:rotate-45 transition-transform cursor-pointer"
                    aria-label={`View Case Study: ${project.title}`}
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-xs" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white dark:bg-[#181818]">
              <div>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-neutral-900 dark:text-white group-hover:text-[#FF9E1B] transition-colors">
                  {project.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-sm mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-100 dark:border-neutral-800/80 mt-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-stone-100 dark:bg-neutral-800 text-stone-700 dark:text-stone-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 rounded-md text-[11px] font-medium text-stone-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-[#FF9E1B] hover:underline flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Case</span>
                  <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-14 p-8 rounded-3xl bg-[#141414] text-white border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
            Have a unique product challenge in mind?
          </h4>
          <p className="text-stone-400 text-xs sm:text-sm mt-1">
            I am currently taking on selective Q4 &amp; 2026 design and development engagements.
          </p>
        </div>
        <button
          type="button"
          onClick={() => onOpenContact()}
          className="px-7 py-3 rounded-full bg-[#FF9E1B] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all warm-shadow shrink-0 cursor-pointer"
        >
          Discuss Your Project
        </button>
      </div>
    </section>
  );
};
