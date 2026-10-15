import React, { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenContact: (service?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleDarkMode,
  onOpenContact,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About Me', href: '#about', id: 'about' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
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
    <>
      <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4" data-purpose="main-navigation">
        <nav className="w-full max-w-5xl bg-[#171717]/95 backdrop-blur-md text-white px-5 py-3 rounded-full flex items-center justify-between shadow-2xl border border-white/10 transition-all duration-300">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 pl-2 group"
            data-purpose="site-logo"
            aria-label="Alex Rivera Portfolio Home"
          >
            <div className="w-7 h-7 rounded-full bg-[#FF9E1B] flex items-center justify-center text-slate-950 font-black text-xs group-hover:rotate-12 transition-transform shadow-md">
              <i className="fa-solid fa-shapes text-[11px]" aria-hidden="true"></i>
            </div>
            <span className="font-heading font-extrabold tracking-tight text-lg text-white">
              Alex<span className="text-[#FF9E1B]">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-neutral-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`transition-colors py-1 ${
                      isActive ? 'text-[#FF9E1B] font-bold' : 'hover:text-[#FF9E1B] text-neutral-300'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* CTA Buttons & Theme Trigger */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              className="w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDarkMode ? (
                <i className="fa-regular fa-sun text-xs text-[#FF9E1B]" aria-hidden="true"></i>
              ) : (
                <i className="fa-regular fa-moon text-xs" aria-hidden="true"></i>
              )}
            </button>

            {/* Let's Talk CTA */}
            <button
              type="button"
              onClick={() => onOpenContact()}
              className="px-5 py-2 rounded-full bg-white text-neutral-900 font-semibold text-xs tracking-wide hover:bg-[#FF9E1B] hover:text-neutral-950 transition-all duration-200 shadow-sm flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <i className="fa-solid fa-arrow-right -rotate-45 text-[10px]" aria-hidden="true"></i>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300 hover:text-white transition-colors ml-1"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xs`} aria-hidden="true"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden flex flex-col justify-start pt-24 px-6 animate-fadeIn">
          <div className="bg-[#181818] rounded-3xl border border-white/10 p-6 shadow-2xl text-center space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-neutral-800">
              <span className="text-sm font-bold text-white uppercase tracking-wider">Navigation</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-400 hover:text-white text-sm"
              >
                Close
              </button>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block py-2.5 text-sm font-semibold uppercase tracking-wider rounded-xl transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#FF9E1B]/20 text-[#FF9E1B]'
                    : 'text-neutral-300 hover:bg-neutral-800/80'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 rounded-full bg-[#FF9E1B] text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
              >
                <span>Let's Talk</span>
                <i className="fa-solid fa-arrow-right text-[11px]" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
