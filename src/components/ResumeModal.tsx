import React, { useState } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate simulated PDF text file download
    const cvText = `ALEX RIVERA
Senior Product Designer & Full-Stack Engineer
San Francisco, CA • alex.rivera.design@example.com

SUMMARY
Award-winning Senior Product Designer and Frontend Engineer with 8+ years experience bridging high-end visual design with production TypeScript/React systems. Designed & engineered platforms for over 120+ clients worldwide with a 99% satisfaction rate.

CORE EXPERTISE
- Product Design: UI/UX Architecture, Design Systems (Figma Tokens, Storybook), High-Fidelity Prototyping, Usability Testing
- Frontend Engineering: React 19, TypeScript, Next.js, Tailwind CSS, Vite, D3.js, React Native, State Machines
- Leadership: Design Ops, Cross-functional Mentorship, Sprint Planning, Token Synchronization

WORK EXPERIENCE
• Lead Product Designer & Frontend Architect — Lumina Analytics (2022 - Present)
  - Architected modular telemetry dashboard handling 50M+ daily events.
  - Accelerated user workflow task completion by 185%.
• Senior UX/UI Engineer — Solstice Finance (2020 - 2022)
  - Designed flagship mobile fintech wallet with biometric auth and real-time FX previews.
  - Processed $42M+ in monthly transaction volume with 4.9 App Store rating.
• Product Design Specialist — Freelance Consultant (2017 - 2020)
  - Delivered 40+ end-to-end design and frontend solutions for Series A-C startups.

EDUCATION & HONORS
• B.S. in Human-Computer Interaction & Computer Science — UC Berkeley
• 14x Awwwards & FWA Honors for Interactive Web Architecture
`;

    const blob = new Blob([cvText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Alex_Rivera_Product_Designer_CV.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div className="bg-[#141414] text-white w-full max-w-2xl rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-[#171717] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9E1B]" aria-hidden="true"></span>
            <h2 id="resume-modal-title" className="font-heading font-extrabold text-xl text-white">
              Alex Rivera — Curriculum Vitae
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close CV dialog"
          >
            <i className="fa-solid fa-xmark text-sm" aria-hidden="true"></i>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm text-stone-300">
          {downloadSuccess && (
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
              <i className="fa-solid fa-circle-check text-emerald-400" aria-hidden="true"></i>
              <span>Curriculum Vitae downloaded successfully!</span>
            </div>
          )}

          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-heading font-extrabold text-2xl text-white">Alex Rivera</h3>
              <p className="text-[#FF9E1B] text-xs font-semibold uppercase tracking-wider mt-0.5">
                Senior Product Designer &amp; Full-Stack Engineer
              </p>
              <p className="text-xs text-stone-400 mt-1">San Francisco, CA · Available for Select Engagements</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-stone-400 font-mono">8+ Years Experience</span>
              <p className="text-xs text-emerald-400 font-bold mt-1">● Actively Booking Q4</p>
            </div>
          </div>

          {/* Timeline Experience */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 border-b border-neutral-800 pb-2">
              Career Trajectory
            </h4>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-neutral-800/80">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-white text-sm">Lead Product Designer &amp; Frontend Architect</span>
                  <span className="text-xs text-[#FF9E1B] font-mono">2022 — Present</span>
                </div>
                <p className="text-xs text-stone-400 font-medium">Lumina Analytics · Enterprise SaaS</p>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Led design tokens system and high-throughput dashboard interfaces serving 50M+ daily events.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-neutral-800/80">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-white text-sm">Senior UI/UX Engineer</span>
                  <span className="text-xs text-[#FF9E1B] font-mono">2020 — 2022</span>
                </div>
                <p className="text-xs text-stone-400 font-medium">Solstice Finance · Mobile Fintech</p>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Architected multi-currency mobile wallet for iOS &amp; Android. $42M monthly volume.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-neutral-800/80">
                <div className="flex justify-between items-start">
                  <span className="font-bold text-white text-sm">Design Consultant &amp; Creative Technologist</span>
                  <span className="text-xs text-[#FF9E1B] font-mono">2017 — 2020</span>
                </div>
                <p className="text-xs text-stone-400 font-medium">Independent Practice</p>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Delivered 40+ bespoke brand architectures, design systems, and responsive frontends.
                </p>
              </div>
            </div>
          </div>

          {/* Competencies */}
          <div className="pt-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 border-b border-neutral-800 pb-2 mb-3">
              Core Competencies
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <span className="text-stone-400 font-bold block">Product Design</span>
                <p className="text-stone-300">Design Systems, User Workflows, Mobile HIG &amp; Material, Figma Tokens, Rapid Prototyping</p>
              </div>
              <div className="space-y-1">
                <span className="text-stone-400 font-bold block">Engineering</span>
                <p className="text-stone-300">React 19, TypeScript, Next.js, Tailwind CSS, React Native, REST &amp; GraphQL, Node.js</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-neutral-800 bg-[#171717] flex items-center justify-between gap-4 shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border border-neutral-700 text-stone-300 hover:text-white text-xs font-semibold uppercase tracking-wider"
          >
            Close
          </button>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Hire Alex
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="px-6 py-2.5 rounded-full bg-[#FF9E1B] text-neutral-950 text-xs font-bold uppercase tracking-wider hover:bg-amber-400 transition-all warm-shadow flex items-center gap-2 cursor-pointer"
            >
              <i className="fa-solid fa-arrow-down text-[11px]" aria-hidden="true"></i>
              <span>Download CV File</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
