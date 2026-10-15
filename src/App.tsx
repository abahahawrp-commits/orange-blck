import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ContactModal } from './components/ContactModal.tsx';
import { CaseStudyModal } from './components/CaseStudyModal.tsx';
import { ResumeModal } from './components/ResumeModal.tsx';
import { ProjectCaseStudy } from './types/index.ts';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>('Website & Product Design');
  const [selectedProject, setSelectedProject] = useState<ProjectCaseStudy | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState<boolean>(false);

  // Sync dark mode class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f0f0f';
      document.body.style.color = '#F3F4F6';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#F8F5EE';
      document.body.style.color = '#1A1A1A';
    }
  }, [isDarkMode]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'services', 'projects', 'about', 'testimonials'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContact = (service?: string) => {
    if (service) {
      setSelectedService(service);
    }
    setContactModalOpen(true);
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const headerOffset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300">
      {/* Top Floating Capsule Navigation */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        onOpenContact={handleOpenContact}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <HeroSection
        onOpenContact={() => handleOpenContact('Custom Product Design')}
        onExploreProjects={handleExploreProjects}
        isDarkMode={isDarkMode}
      />

      <ServicesSection onSelectService={handleOpenContact} />

      <ProjectsSection
        onSelectProject={(project) => setSelectedProject(project)}
        onOpenContact={handleOpenContact}
      />

      <AboutSection
        onOpenResume={() => setResumeModalOpen(true)}
        onOpenContact={() => handleOpenContact('Full-stack Consultation')}
      />

      <TestimonialsSection />

      <Footer onOpenContact={() => handleOpenContact('General Project Collaboration')} />

      {/* Interactive Modals */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={selectedService}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={handleOpenContact}
      />

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onOpenContact={() => handleOpenContact('Career / Advisory')}
      />
    </div>
  );
}
