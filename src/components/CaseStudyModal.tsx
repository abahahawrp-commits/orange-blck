import React from 'react';
import { ProjectCaseStudy } from '../types/index.ts';

interface CaseStudyModalProps {
  project: ProjectCaseStudy | null;
  onClose: () => void;
  onStartProject: (serviceName: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onStartProject
}) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div className="bg-[#141414] text-white w-full max-w-3xl rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-[#171717] shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#FF9E1B] text-neutral-950 uppercase tracking-wider">
              {project.categoryLabel}
            </span>
            <span className="text-stone-400 text-xs font-semibold">{project.client} · {project.year}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <i className="fa-solid fa-xmark text-sm" aria-hidden="true"></i>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Main Visual */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#FF9E1B] font-bold">
                  Key Impact
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-black text-3xl text-white">
                    {project.metrics}
                  </span>
                  <span className="text-stone-300 text-sm">{project.metricLabel}</span>
                </div>
              </div>
            </div>
          </div>

          <h3 id="case-study-title" className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
            {project.title}
          </h3>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            {project.fullStory}
          </p>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-neutral-800">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                <i className="fa-solid fa-triangle-exclamation text-xs" aria-hidden="true"></i>
                <span>The Challenge</span>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#1C1C1C] border border-neutral-800">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                <i className="fa-solid fa-circle-check text-xs" aria-hidden="true"></i>
                <span>The Engineering &amp; Design Solution</span>
              </div>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
              Technologies &amp; Design Deliverables
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-700 text-stone-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-neutral-800 bg-[#171717] flex flex-wrap items-center justify-between gap-4 shrink-0">
          <div className="text-xs text-stone-400">
            Interested in building something similar with Alex?
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-neutral-700 text-stone-300 hover:text-white text-xs font-semibold uppercase tracking-wider"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onStartProject(project.categoryLabel);
              }}
              className="px-6 py-2.5 rounded-full bg-[#FF9E1B] text-neutral-950 text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all warm-shadow flex items-center gap-2 cursor-pointer"
            >
              <span>Build A Similar Solution</span>
              <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
