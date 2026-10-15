import React, { useState, useEffect } from 'react';
import {
  calculateProjectEstimate,
  validateContactForm,
  type ContactFormData
} from '../utils/portfolioLogic.ts';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Website & Product Design'
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    service: initialService,
    budget: '$10k - $25k',
    message: ''
  });

  const [tier, setTier] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const [featuresCount, setFeaturesCount] = useState<number>(3);
  const [isRush, setIsRush] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const estimate = calculateProjectEstimate(tier, featuresCount, isRush);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn overflow-y-auto"
    >
      <div className="bg-[#141414] text-white w-full max-w-2xl rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:px-8 border-b border-neutral-800 bg-[#171717]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9E1B]" aria-hidden="true"></span>
            <h2 id="contact-modal-title" className="font-heading font-extrabold text-xl text-white">
              Start a Project with Alex
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <i className="fa-solid fa-xmark text-sm" aria-hidden="true"></i>
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 sm:p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#FF9E1B]/20 text-[#FF9E1B] mx-auto flex items-center justify-center text-2xl font-bold">
              <i className="fa-solid fa-check" aria-hidden="true"></i>
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-white">
              Inquiry Received!
            </h3>
            <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Alex reviews all
              inquiries personally and will respond within <span className="text-[#FF9E1B]">24 business hours</span> with project availability and scope notes.
            </p>
            <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-neutral-800 max-w-md mx-auto text-left text-xs text-stone-400 space-y-1">
              <div><strong>Target Service:</strong> {formData.service}</div>
              <div><strong>Estimated Timeline:</strong> ~{estimate.estimatedWeeks} weeks</div>
              <div><strong>Estimated Range:</strong> ${estimate.estimatedMinUsd.toLocaleString()} – ${estimate.estimatedMaxUsd.toLocaleString()} USD</div>
            </div>
            <div className="pt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#FF9E1B] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Quick Estimator Widget */}
            <div className="p-4 rounded-2xl bg-[#1A1A1A] border border-neutral-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-[#FF9E1B]">
                  Interactive Scope &amp; Budget Estimator
                </span>
                <span className="text-stone-400">
                  Est. ~{estimate.estimatedWeeks} wks
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {(['starter', 'growth', 'enterprise'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTier(t)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold capitalize transition-all border ${
                      tier === t
                        ? 'bg-[#FF9E1B] text-neutral-950 border-[#FF9E1B]'
                        : 'bg-neutral-900 text-stone-300 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    {t === 'starter' ? 'MVP / Audit' : t === 'growth' ? 'Full Product' : 'Enterprise'}
                  </button>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-stone-400">
                <div className="flex items-center gap-2">
                  <span>Scope Complexity:</span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 5].map((cnt) => (
                      <button
                        key={cnt}
                        type="button"
                        onClick={() => setFeaturesCount(cnt)}
                        className={`w-6 h-6 rounded-md text-[11px] font-bold ${
                          featuresCount === cnt
                            ? 'bg-neutral-200 text-neutral-950'
                            : 'bg-neutral-800 text-stone-400'
                        }`}
                      >
                        {cnt}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRush}
                    onChange={(e) => setIsRush(e.target.checked)}
                    className="rounded border-neutral-700 text-[#FF9E1B] focus:ring-0"
                  />
                  <span>Expedited Delivery</span>
                </label>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-neutral-800/80 text-xs">
                <span className="text-stone-400">Estimated Project Range:</span>
                <span className="text-sm font-bold text-[#FF9E1B] font-mono">
                  ${estimate.estimatedMinUsd.toLocaleString()} – ${estimate.estimatedMaxUsd.toLocaleString()} USD
                </span>
              </div>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#FF9E1B]"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  Work Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#FF9E1B]"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  Primary Service Interest *
                </label>
                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#FF9E1B]"
                >
                  <option value="UI/UX Experience Design">UI/UX Experience Design</option>
                  <option value="Website & Product Design">Website &amp; Product Design</option>
                  <option value="Mobile & Web Application Design">Mobile &amp; Web App Design</option>
                  <option value="Dashboard & SaaS Interface Engineering">Dashboard &amp; SaaS Interface</option>
                  <option value="Wireframing, Systems & Interactive Prototyping">Design Systems &amp; Prototyping</option>
                  <option value="Full-stack Design & Code">Full-stack Design &amp; Code</option>
                </select>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-budget" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                  Anticipated Budget Range
                </label>
                <select
                  id="contact-budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#FF9E1B]"
                >
                  <option value="$5k - $10k">$5,000 – $10,000</option>
                  <option value="$10k - $25k">$10,000 – $25,000</option>
                  <option value="$25k - $50k">$25,000 – $50,000</option>
                  <option value="$50k+">$50,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-stone-400 mb-1.5">
                Project Overview &amp; Goals *
              </label>
              <textarea
                id="contact-message"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your product, target timeline, or what problem we need to solve together..."
                className="w-full px-4 py-2.5 rounded-xl bg-[#1C1C1C] border border-neutral-700 text-white text-sm focus:outline-none focus:border-[#FF9E1B]"
              ></textarea>
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] text-stone-500">
                🔒 Direct NDA protected communication
              </span>
              <button
                type="submit"
                className="px-7 py-3 rounded-full bg-[#FF9E1B] text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all warm-shadow cursor-pointer flex items-center gap-2"
              >
                <span>Send Proposal Request</span>
                <i className="fa-solid fa-arrow-right text-[10px]" aria-hidden="true"></i>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
