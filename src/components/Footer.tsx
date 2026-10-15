import React from 'react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer
      className="bg-[#0b0b0b] text-stone-500 py-10 px-4 sm:px-6 border-t border-neutral-900"
      data-purpose="site-footer"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
        {/* Brand */}
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <span className="w-2 h-2 rounded-full bg-[#FF9E1B]" aria-hidden="true"></span>
          <span>Alex Rivera Portfolio</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-stone-400">
          <button
            type="button"
            onClick={() => handleScrollTo('#home')}
            className="hover:text-[#FF9E1B] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('#services')}
            className="hover:text-[#FF9E1B] transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('#projects')}
            className="hover:text-[#FF9E1B] transition-colors cursor-pointer"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('#about')}
            className="hover:text-[#FF9E1B] transition-colors cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={onOpenContact}
            className="hover:text-[#FF9E1B] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Copyright */}
        <p className="text-stone-500">
          © 2025 Alex Rivera. Crafted with precision &amp; craft.
        </p>
      </div>
    </footer>
  );
};
