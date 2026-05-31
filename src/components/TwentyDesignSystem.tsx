import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Plus, Minus } from 'lucide-react';

// Custom inline SVG icons for visual design system (eliminates strict TS/lucide errors)
const GithubIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

/**
 * TwentyDesignSystem Component Suite
 * Built to mirror the premium, pixel-perfect visual styling of twenty.com
 */

// Scope styled block for google fonts
const DesignSystemStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600&display=swap');
    
    .twenty-root {
      font-family: 'DM Sans', sans-serif;
      background-color: #F5F4F0;
      color: #1A1A1A;
    }
    
    .twenty-serif {
      font-family: 'DM Serif Display', serif;
    }
    
    /* Custom scrollbar hiding */
    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-none {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    /* 2x2 dotted dither overlay pattern */
    .dither-pattern {
      background-image: radial-gradient(#1a1a1a 20%, transparent 20%),
                        radial-gradient(#1a1a1a 20%, transparent 20%);
      background-size: 4px 4px;
      background-position: 0 0, 2px 2px;
      mix-blend-mode: multiply;
      opacity: 0.15;
    }

    .dither-pattern-dark {
      background-image: radial-gradient(#ffffff 15%, transparent 15%),
                        radial-gradient(#ffffff 15%, transparent 15%);
      background-size: 3px 3px;
      background-position: 0 0, 1.5px 1.5px;
      mix-blend-mode: overlay;
      opacity: 0.25;
    }

    /* Elegant CSS Dither Overlay for Images */
    .dither-image {
      filter: grayscale(1) contrast(1.5) brightness(0.9);
      mix-blend-mode: multiply;
    }
  `}</style>
);

// 1. NavBar Component
export interface NavBarProps {
  links?: string[];
  onLinkClick?: (link: string) => void;
  onLoginClick?: () => void;
  onGetStartedClick?: () => void;
}

export const NavBar = ({
  links = ['WHY', 'RESOURCES', 'CUSTOMERS', 'PRICING'],
  onLinkClick,
  onLoginClick,
  onGetStartedClick
}: NavBarProps) => {
  return (
    <>
      <DesignSystemStyles />
      <header className="sticky top-0 z-50 w-full h-[52px] bg-[#F5F4F0] border-b border-[#D8D8D4] px-6 flex items-center justify-between font-sans">
        {/* Left: Logo and Nav links */}
        <div className="flex items-center gap-6">
          {/* Logo square */}
          <div className="w-[32px] h-[32px] border border-[#1A1A1A] rounded-[4px] flex items-center justify-center bg-white shadow-[1px_1px_0px_rgba(26,26,26,0.15)] select-none">
            <span className="font-mono text-sm font-bold tracking-tighter text-[#1A1A1A]">20</span>
          </div>

          {/* Navigation links (Desktop) */}
          <nav className="hidden md:flex items-center">
            {links.map((link, idx) => (
              <React.Fragment key={link}>
                <button
                  onClick={() => onLinkClick?.(link)}
                  className="text-[13px] font-medium tracking-[0.08em] text-[#1A1A1A] hover:underline transition-all cursor-pointer py-1"
                >
                  {link}
                </button>
                {idx < links.length - 1 && (
                  <span className="text-[#D8D8D4] text-xs px-3 select-none">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>

        {/* Right: Social icons and Buttons */}
        <div className="flex items-center gap-4">
          {/* Subtle Github Icon and Star counter mockup */}
          <div className="hidden sm:flex items-center gap-2 text-[#1A1A1A] hover:text-[#0055FF] transition-colors cursor-pointer mr-2">
            <GithubIcon className="w-4 h-4" />
            <span className="text-[12px] font-mono tracking-tight bg-[#EBEBEB] border border-[#D8D8D4] px-1.5 py-0.5 rounded-[3px] font-semibold">6.5K ↗</span>
          </div>

          <button
            onClick={onLoginClick}
            className="text-[12px] font-semibold tracking-[0.06em] text-[#1A1A1A] bg-transparent border border-[#1A1A1A] h-[32px] px-3.5 rounded-[4px] hover:bg-[#1A1A1A]/5 active:scale-95 transition-all cursor-pointer uppercase"
          >
            LOG IN
          </button>
          
          <button
            onClick={onGetStartedClick}
            className="text-[12px] font-semibold tracking-[0.06em] text-white bg-[#1A1A1A] h-[32px] px-3.5 rounded-[4px] hover:bg-[#1A1A1A]/90 active:scale-95 transition-all cursor-pointer uppercase shadow-[2px_2px_0px_rgba(26,26,26,0.15)]"
          >
            GET STARTED
          </button>
        </div>
      </header>
    </>
  );
};

// 2. SectionPill Component
export const SectionPill = ({ label }: { label: string }) => {
  return (
    <div className="inline-flex items-center gap-2 select-none">
      {/* 14x6px Blue sharp rectangle */}
      <div className="w-[14px] h-[6px] bg-[#0055FF] rounded-[1px]" />
      <span className="font-sans text-[13px] font-semibold text-[#1A1A1A] tracking-tight">
        {label}
      </span>
    </div>
  );
};

// 2b. SectionPillBlue Component (Alternate Variant)
export const SectionPillBlue = ({ label }: { label: string }) => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0055FF]/10 border border-[#0055FF]/25 rounded-full select-none">
      <span className="w-1.5 h-1.5 bg-[#0055FF] rounded-full animate-pulse" />
      <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[#0055FF]">
        {label}
      </span>
    </div>
  );
};

// 3. HeroHeading Component
export const HeroHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1 className="twenty-serif text-[42px] sm:text-[60px] md:text-[76px] lg:text-[84px] leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] font-normal select-text">
      {children}
    </h1>
  );
};

// 4. CTAButtons Component
export interface CTAButtonsProps {
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const CTAButtons = ({
  primaryLabel = 'GET STARTED',
  secondaryLabel = 'TALK TO US',
  onPrimaryClick,
  onSecondaryClick
}: CTAButtonsProps) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <button
        onClick={onPrimaryClick}
        className="h-[40px] px-5 bg-[#1A1A1A] text-white text-[11px] font-bold tracking-[0.12em] rounded-[3px] hover:bg-[#2e2e2e] active:scale-[0.98] transition-all cursor-pointer uppercase shadow-[3px_3px_0px_rgba(26,26,26,0.15)]"
      >
        {primaryLabel}
      </button>
      <button
        onClick={onSecondaryClick}
        className="h-[40px] px-5 bg-transparent text-[#1A1A1A] border border-[#1A1A1A] text-[11px] font-bold tracking-[0.12em] rounded-[3px] hover:bg-[#1A1A1A]/5 active:scale-[0.98] transition-all cursor-pointer uppercase"
      >
        {secondaryLabel}
      </button>
    </div>
  );
};

// 5. FeatureCard Component
export interface FeatureCardProps {
  title: string;
  body: string;
  attribution?: string;
  company?: string;
  isActive?: boolean;
}

export const FeatureCard = ({
  title,
  body,
  attribution,
  company,
  isActive = true
}: FeatureCardProps) => {
  return (
    <div 
      className={`bg-white border border-[#D8D8D4] rounded-[8px] p-6 sm:p-7 flex flex-col justify-between w-full h-[280px] shadow-[4px_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 relative ${
        isActive ? 'hover:-translate-y-1 hover:shadow-[6px_6px_20px_rgba(0,0,0,0.04)]' : ''
      }`}
    >
      <div>
        {/* Tab notch corner decoration on top right */}
        <div className="absolute top-0 right-8 w-16 h-3 bg-[#F5F4F0] border-b border-l border-r border-[#D8D8D4] rounded-b-[4px] flex items-center justify-center">
          <div className="w-8 h-[1px] bg-[#D8D8D4]" />
        </div>

        <h3 className="font-sans text-[14px] font-semibold text-[#1A1A1A] tracking-tight">
          {title}
        </h3>
        <p className="font-sans text-[13.5px] leading-[1.65] text-[#6B6B6B] mt-3">
          {body}
        </p>
      </div>

      {attribution && (
        <div className="border-t border-[#D8D8D4] pt-4 flex items-center justify-between mt-auto">
          <div className="font-sans text-[12px] tracking-tight text-[#1A1A1A]">
            <span className="font-bold">{attribution}</span>
            {company && (
              <>
                <span className="text-[#D8D8D4] mx-2">|</span>
                <span className="text-[#6B6B6B] font-medium">{company}</span>
              </>
            )}
          </div>
          <span className="text-[16px] text-[#1A1A1A] font-light">→</span>
        </div>
      )}
    </div>
  );
};

// 5b. FeatureCardStack Component for Overlapping Effect
export const FeatureCardStack = () => {
  const cards = [
    {
      title: "Production grade quality",
      body: "W3villa used Twenty as a production-grade framework for the data model, permissions, authentication, and workflow engine they would otherwise have rebuilt themselves.",
      attribution: "VP of Engineering",
      company: "W3villa Technologies"
    },
    {
      title: "AI for rapid iterations",
      body: "Alternative Partners used agentic AI to compress what would typically be weeks of Salesforce migration work into something a single person could oversee dynamically.",
      attribution: "Principal and Founder",
      company: "Alternative Partners"
    },
    {
      title: "Control without drag",
      body: "Reduce vendor risk with no forced migration, and achieve full compliance. Dramatically lower your CRM enterprise software licensing costs by more than 90%.",
      attribution: "CRM Engineer",
      company: "AC&T Education Migration"
    }
  ];

  return (
    <div className="relative w-full max-w-[420px] h-[340px] mt-10 lg:mt-0 select-none">
      {/* Background Card 3 */}
      <div 
        className="absolute top-0 left-0 w-full transition-all duration-500 origin-center hover:scale-[1.02]"
        style={{
          zIndex: 10,
          transform: 'translate(32px, -24px)'
        }}
      >
        <FeatureCard 
          title={cards[2].title} 
          body={cards[2].body} 
          attribution={cards[2].attribution} 
          company={cards[2].company}
          isActive={false}
        />
      </div>

      {/* Middle Card 2 */}
      <div 
        className="absolute top-0 left-0 w-full transition-all duration-500 origin-center hover:scale-[1.02]"
        style={{
          zIndex: 20,
          transform: 'translate(16px, -12px)'
        }}
      >
        <FeatureCard 
          title={cards[1].title} 
          body={cards[1].body} 
          attribution={cards[1].attribution} 
          company={cards[1].company}
          isActive={false}
        />
      </div>

      {/* Front Card 1 */}
      <div 
        className="absolute top-0 left-0 w-full transition-all duration-500 origin-center hover:scale-[1.02]"
        style={{
          zIndex: 30,
          transform: 'none'
        }}
      >
        <FeatureCard 
          title={cards[0].title} 
          body={cards[0].body} 
          attribution={cards[0].attribution} 
          company={cards[0].company}
          isActive={false}
        />
      </div>
    </div>
  );
};

// 6. SectionLabel Component
export const SectionLabel = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="twenty-serif text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] leading-[1.1] text-[#1A1A1A] max-w-[700px] font-normal tracking-[-0.02em] select-text">
      {children}
    </h2>
  );
};

// 7. StepIndicator Component
export interface StepIndicatorProps {
  number: string;
  active: boolean;
}

export const StepIndicator = ({ number, active }: StepIndicatorProps) => {
  return (
    <div className="flex flex-col items-start min-h-[80px]">
      <div className="flex items-center gap-0">
        {/* Step Marker and vertical track wrapper */}
        <div className="flex flex-col items-center">
          {active ? (
            <div className="font-sans text-[11px] text-[#0055FF] font-bold border-l-2 border-[#0055FF] pl-3 py-1.5 transition-all">
              {number}
            </div>
          ) : (
            <div className="flex items-center h-[28px]">
              <div className="w-[4px] h-[4px] bg-[#C0C0C0] rounded-full ml-3.5 transition-all" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 8. DarkUIPanel Component
export interface DarkUIPanelProps {
  title: string;
  items: Array<{ label: string; active?: boolean }>;
}

export const DarkUIPanel = ({
  title = 'DATA MODEL',
  items = [
    { label: 'VIEWS', active: true },
    { label: 'WIDGETS' },
    { label: 'LAYOUT PAGES' },
    { label: 'COMMANDS' }
  ]
}: DarkUIPanelProps) => {
  return (
    <div className="bg-[#1C1C1C] border border-[#333333] rounded-[10px] p-4 w-full max-w-[260px] shadow-[0px_10px_30px_rgba(0,0,0,0.5)] select-none">
      {/* Title */}
      <div className="font-sans text-[10px] tracking-[0.15em] text-[#888] uppercase font-bold mb-3 px-2">
        {title}
      </div>

      {/* Items list */}
      <div className="flex flex-col gap-1.5">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-[6px] transition-all cursor-pointer ${
              item.active 
                ? 'bg-[#2A2A2A] text-white border border-[#0055FF]/30' 
                : 'bg-transparent text-[#E0E0E0] hover:bg-[#2A2A2A]/50 border border-transparent'
            }`}
          >
            {/* Square placeholder for icon */}
            <div className={`w-[16px] h-[16px] rounded-[3px] shrink-0 flex items-center justify-center text-[9px] font-bold ${
              item.active ? 'bg-[#0055FF] text-white' : 'bg-[#333]'
            }`}>
              {idx + 1}
            </div>
            
            {/* Label */}
            <span className="font-sans text-[13px] font-semibold tracking-wide">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// 9. TestimonialBlock Component
export interface TestimonialBlockProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
  counter?: string;
  onNext?: () => void;
  onPrev?: () => void;
}

export const TestimonialBlock = ({
  quote = "The flexibility is really what made the difference. Our needs evolve very fast. I discover a new need and in two clicks I can address it. That is a real advantage when you are moving quickly.",
  name = "Olivier Reinaud",
  role = "Co-founder",
  company = "NetZero",
  counter = "1/3",
  onNext,
  onPrev
}: TestimonialBlockProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row md:items-start justify-between py-12 px-2 relative">
      {/* Left Column: Huge indicator and controls */}
      <div className="flex flex-row md:flex-col justify-between items-center md:items-start gap-6 md:w-[150px] shrink-0 mb-6 md:mb-0">
        <span className="twenty-serif text-[42px] sm:text-[56px] text-[#1A1A1A]/20 font-bold select-none leading-none">
          {counter}
        </span>
        
        {/* Navigation arrow buttons */}
        <div className="flex gap-2">
          <button 
            onClick={onPrev}
            className="w-[32px] h-[32px] border border-[#D8D8D4] bg-white rounded-[4px] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A]/5 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={onNext}
            className="w-[32px] h-[32px] border border-[#D8D8D4] bg-white rounded-[4px] flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A]/5 active:scale-95 transition-all cursor-pointer"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Right Column: Quote and attribution */}
      <div className="flex-grow max-w-[700px] flex flex-col items-end">
        <blockquote className="twenty-serif text-[24px] sm:text-[32px] md:text-[36px] text-left leading-[1.3] text-[#1A1A1A] font-normal select-text">
          {quote}
        </blockquote>

        <div className="font-sans text-[13px] text-right mt-10">
          <span className="font-bold text-[#1A1A1A]">{name}</span>
          <span className="text-[#6B6B6B] block mt-1">
            {role} {company && `at ${company}`}
          </span>
        </div>
      </div>
    </div>
  );
};

// 10. FAQItem Component
export interface FAQItemProps {
  question: string;
  answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full border-t border-[#333333] transition-colors py-5 flex flex-col font-sans select-none">
      {/* Row toggle */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center cursor-pointer justify-between py-1 hover:text-white transition-colors"
      >
        {/* Left icon wrapper */}
        <div className="flex items-center">
          <div className="w-[20px] h-[20px] border border-[#555] rounded-[3px] flex items-center justify-center mr-4 text-[#AAA] shrink-0 bg-[#252525]">
            {isOpen ? <Minus className="w-3 h-3 text-white" /> : <Plus className="w-3 h-3 text-[#AAA]" />}
          </div>
          <h4 className="text-[16px] sm:text-[18px] text-[#CCCCCC] font-semibold text-left">
            {question}
          </h4>
        </div>

        {/* Right decoration square */}
        <div className="w-[24px] h-[24px] border border-[#555] rounded-[3px] flex items-center justify-center text-[#AAA] shrink-0 bg-[#1e1e1e]">
          <span className="text-[12px] font-mono">+</span>
        </div>
      </div>

      {/* Expanding Answer panel */}
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[200px] mt-4 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pl-9 pr-6 text-[14px] leading-[1.65] text-[#999999] text-left">
          {answer}
        </p>
      </div>
    </div>
  );
};

// 11. FooterCard Component
export const FooterCard = () => {
  const columns = [
    {
      title: 'Sitemap',
      links: ['Home', 'Pricing', 'Partners', 'Why Twenty']
    },
    {
      title: 'Help',
      links: ['Developers', 'User Guide', 'Release Notes', 'Halftone generator']
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms and Conditions']
    },
    {
      title: 'Connect',
      links: ['LinkedIn', 'GitHub', 'Discord', 'X / Twitter']
    }
  ];

  return (
    <div className="bg-white border border-[#D8D8D4] rounded-[12px] p-8 sm:p-10 w-full max-w-[900px] shadow-[4px_10px_40px_rgba(0,0,0,0.03)] relative overflow-hidden font-sans">
      {/* Decorative dots in the background */}
      <div className="absolute top-0 right-0 w-32 h-32 dither-pattern pointer-events-none" />

      {/* Top logo block */}
      <div className="mb-10 text-left">
        <div className="w-[32px] h-[32px] border border-[#1A1A1A] rounded-[4px] flex items-center justify-center bg-white shadow-[1px_1px_0px_rgba(26,26,26,0.15)] select-none mb-3">
          <span className="font-mono text-sm font-bold tracking-tighter text-[#1A1A1A]">20</span>
        </div>
      </div>

      {/* Grid columns */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative border-t border-[#D8D8D4]/60 pt-8">
        {columns.map((col, idx) => (
          <div key={idx} className="text-left relative pr-2">
            {/* Column corner markers layout */}
            <span className="absolute top-0 -left-1 text-[#AAAAAA] font-mono text-[10px]" style={{ transform: 'translateY(-50%)' }}>+</span>
            <h5 className="text-[12px] font-bold text-[#1A1A1A] uppercase tracking-[0.1em] mb-4">
              {col.title}
            </h5>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-[13px] text-[#6B6B6B] hover:text-[#1A1A1A] hover:underline transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom section with copyright and social links */}
      <div className="border-t border-[#D8D8D4] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-[11px] font-bold font-mono tracking-widest text-[#1A1A1A] uppercase">
          © 2026 — TWENTY
        </div>

        <div className="flex gap-4 text-[#6B6B6B]">
          <a href="#" className="hover:text-[#1A1A1A] transition-colors"><GithubIcon className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors"><TwitterIcon className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#1A1A1A] transition-colors"><LinkedinIcon className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  );
};

// 12. CornerMarkers Component
export const CornerMarkers = () => {
  return (
    <>
      <span className="absolute top-2 left-2 text-[#AAAAAA] font-mono select-none" style={{ fontSize: 16, lineHeight: 1 }}>+</span>
      <span className="absolute top-2 right-2 text-[#AAAAAA] font-mono select-none" style={{ fontSize: 16, lineHeight: 1 }}>+</span>
      <span className="absolute bottom-2 left-2 text-[#AAAAAA] font-mono select-none" style={{ fontSize: 16, lineHeight: 1 }}>+</span>
      <span className="absolute bottom-2 right-2 text-[#AAAAAA] font-mono select-none" style={{ fontSize: 16, lineHeight: 1 }}>+</span>
    </>
  );
};

// 13. HeroDecorationBars Component
export const HeroDecorationBars = ({ side }: { side: 'left' | 'right' | 'both' }) => {
  // Generate 75 lines to cover the entire height from top to bottom
  const totalLines = 75;
  const bars = Array.from({ length: totalLines }, (_, i) => {
    const base = 60;
    // Layered sine waves for highly sophisticated, premium organic flow
    const wave1 = Math.sin(i * 0.18) * 45;
    const wave2 = Math.cos(i * 0.35) * 20;
    const wave3 = Math.sin(i * 0.08) * 15;
    return Math.max(15, Math.round(base + wave1 + wave2 + wave3));
  });
  
  const renderBars = (align: 'left' | 'right') => (
    <div className={`absolute inset-y-0 ${align === 'left' ? 'left-0' : 'right-0'} hidden lg:flex flex-col justify-between py-6 z-0 select-none pointer-events-none`}>
      {bars.map((width, i) => (
        <div 
          key={i} 
          className="h-[2px] bg-[#0055FF]" 
          style={{ 
            width: `${width}px`, 
            opacity: 0.12 + (i % 6) * 0.06, // subtle and elegant side background feel
            marginLeft: align === 'right' ? 'auto' : undefined 
          }}
        />
      ))}
    </div>
  );

  return (
    <>
      {(side === 'left' || side === 'both') && renderBars('left')}
      {(side === 'right' || side === 'both') && renderBars('right')}
    </>
  );
};

// Elegant Dithered Skyscraper/Architectural Graphics placeholder using pure SVG inline
export const ElegantDitherVisual = () => (
  <div className="relative w-full max-w-[400px] h-[360px] border border-[#D8D8D4] rounded-[8px] bg-white overflow-hidden flex items-center justify-center p-6 shadow-sm">
    <div className="absolute inset-0 dither-pattern" />
    
    {/* SVG Halftone Skyscraper Visual representation */}
    <svg viewBox="0 0 100 100" className="w-full h-full text-[#1A1A1A] opacity-80" fill="currentColor">
      <defs>
        <pattern id="dot-grid" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="0.9" fill="#1A1A1A" />
        </pattern>
        <pattern id="line-grid" x="0" y="0" width="2" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="2" y2="0" stroke="#1A1A1A" strokeWidth="1.5" />
        </pattern>
      </defs>
      
      {/* Background silhouettes */}
      <rect x="15" y="30" width="18" height="70" fill="url(#line-grid)" />
      <rect x="38" y="10" width="24" height="90" fill="url(#dot-grid)" />
      <rect x="68" y="45" width="20" height="55" fill="url(#line-grid)" />
      <line x1="50" y1="0" x2="50" y2="10" stroke="#1A1A1A" strokeWidth="0.8" />
    </svg>

    <div className="absolute bottom-4 left-4 bg-white border border-[#D8D8D4] px-3 py-1.5 rounded-[4px] shadow-sm select-none">
      <span className="text-[10px] font-bold font-mono text-[#1a1a1a] tracking-widest uppercase">
        ARCH.01 // GRID DITHER
      </span>
    </div>
  </div>
);

// Gorgeous interactive preview page component assembling the complete design system
export default function TwentyShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  
  return (
    <div className="twenty-root min-h-screen text-[#1A1A1A] pb-24 text-left relative overflow-x-hidden">
      <NavBar />
      
      {/* Hero Section Container */}
      <section className="relative w-full border-b border-[#D8D8D4] overflow-hidden">
        <HeroDecorationBars side="both" />
        
        <div className="relative max-w-[1000px] mx-auto px-6 py-20 lg:py-28 text-center">
          <CornerMarkers />
          
          <div className="max-w-[760px] mx-auto flex flex-col items-center gap-6 mt-6">
            <SectionPill label="The Open Source CRM." />
            
            <HeroHeading>
              Build your Enterprise CRM <em className="italic font-normal">at AI Speed</em>
            </HeroHeading>
            
            <p className="font-sans text-[15px] sm:text-[18px] leading-[1.65] text-[#6B6B6B] max-w-[580px] mt-2">
              Twenty gives technical teams the building blocks for a custom CRM that meets complex business needs and quickly adapts as the business evolves.
            </p>

            <div className="mt-4">
              <CTAButtons />
            </div>
          </div>

          {/* Browser Interface Mockup */}
          <div className="mt-14 w-full max-w-[860px] mx-auto bg-white border border-[#D8D8D4] rounded-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden text-left relative">
            <div className="absolute top-0 right-0 w-36 h-36 dither-pattern pointer-events-none" />
            
            {/* Apple header style */}
            <div className="bg-[#EBEBEB] border-b border-[#D8D8D4] px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-[12px] font-mono tracking-wide text-[#6B6B6B]">
                Twenty Browser App
              </div>
              <div className="w-10" />
            </div>

            {/* Simple CRM table mock inside browser mockup */}
            <div className="p-6 overflow-x-auto scrollbar-none font-sans text-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D8D4] mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[14px]">All Companies</span>
                  <span className="bg-[#EBEBEB] text-[#6B6B6B] px-1.5 py-0.5 rounded text-[10px] font-mono">12 companies</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-2.5 py-1 bg-[#EBEBEB] rounded border border-[#D8D8D4] hover:bg-[#1A1A1A]/5 cursor-pointer">Filter</button>
                  <button className="px-2.5 py-1 bg-[#1A1A1A] text-white rounded cursor-pointer">New Company</button>
                </div>
              </div>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#D8D8D4]/60 text-[#6B6B6B]">
                    <th className="py-2.5 text-left font-semibold">COMPANY</th>
                    <th className="py-2.5 text-left font-semibold">URL</th>
                    <th className="py-2.5 text-left font-semibold">CREATED BY</th>
                    <th className="py-2.5 text-left font-semibold">STAGE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Anthropic', url: 'anthropic.com', user: 'Dario Amodei', stage: 'Prospect' },
                    { name: 'Slack', url: 'slack.com', user: 'Stewart Butterfield', stage: 'Active' },
                    { name: 'Notion', url: 'notion.so', user: 'Ivan Zhao', stage: 'Contract' },
                    { name: 'Figma', url: 'figma.com', user: 'Dylan Field', stage: 'Lead' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#D8D8D4]/40 hover:bg-[#F5F4F0]/50">
                      <td className="py-3 font-semibold text-[#1A1A1A] flex items-center gap-2">
                        <div className="w-4 h-4 bg-[#0055FF] rounded-sm" />
                        {row.name}
                      </td>
                      <td className="py-3 font-mono text-[#6B6B6B]">{row.url}</td>
                      <td className="py-3 font-semibold">{row.user}</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 bg-[#0055FF]/10 text-[#0055FF] border border-[#0055FF]/20 rounded-full font-bold text-[10px]">
                          {row.stage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Grid bar */}
      <section className="bg-[#EBEBEB]/50 py-10 px-6 border-b border-[#D8D8D4] text-center relative select-none">
        <div className="max-w-[900px] mx-auto flex flex-wrap items-center justify-between gap-6">
          <span className="font-sans text-[11px] font-bold text-[#6B6B6B] tracking-[0.15em] uppercase">
            TRUSTED BY
          </span>
          <div className="flex flex-wrap items-center gap-8 text-[14px] font-bold font-mono tracking-widest text-[#1A1A1A]/50">
            <span>BAYER</span>
            <span>PWC</span>
            <span>FORA</span>
            <span>TIIMA</span>
            <span>NIC INDUSTRIES</span>
            <span>+10K OTHERS</span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-24 max-w-[900px] mx-auto border-b border-[#D8D8D4]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 items-start">
            <SectionPill label="The Problem." />
            
            <SectionLabel>
              A custom CRM gives your org an edge, but building <strong className="font-serif italic font-normal text-[#0055FF]">one comes with tradeoffs</strong>
            </SectionLabel>

            <div className="flex flex-col gap-4 mt-2">
              <div className="text-left">
                <h4 className="font-sans text-[14px] font-bold text-[#1A1A1A]">The Giant Monolith</h4>
                <p className="text-[13px] text-[#6B6B6B] mt-1 leading-[1.6]">Proprietary languages, slow deployment cycles, and "black box" architecture limit flexibility.</p>
              </div>
              <div className="text-left border-t border-[#D8D8D4] pt-4">
                <h4 className="font-sans text-[14px] font-bold text-[#1A1A1A]">The In-house Burden</h4>
                <p className="text-[13px] text-[#6B6B6B] mt-1 leading-[1.6]">V1 ships quickly, but maintaining updates, API connectors, and scaling infrastructure consumes engineering capacity.</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ElegantDitherVisual />
          </div>
        </div>
      </section>

      {/* Solutions / Stacked Cards Section */}
      <section className="px-6 py-24 bg-[#EBEBEB]/30 border-b border-[#D8D8D4] relative">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 items-start">
            <SectionPillBlue label="Stop settling for trade-offs." />
            
            <SectionLabel>
              Assemble, iterate and adapt a robust CRM, <em className="italic font-normal">that's quick to flex</em>
            </SectionLabel>

            <p className="font-sans text-[14px] leading-[1.65] text-[#6B6B6B]">
              Compose your CRM schema, workflows and internal modules with a single extensible workspace designed for engineering velocity.
            </p>
          </div>

          <div className="flex justify-center">
            <FeatureCardStack />
          </div>
        </div>
      </section>

      {/* Stepper + Dark UI Panels Section */}
      <section className="bg-[#1C1C1C] px-6 py-24 text-white relative border-b border-[#111]">
        <div className="absolute inset-0 dither-pattern-dark pointer-events-none" />
        
        <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Stepper & Heading left column */}
          <div className="flex flex-col items-start gap-8 z-10">
            <div className="flex gap-4">
              <div className="flex flex-col">
                <StepIndicator number="01" active={activeStep === 0} />
                <StepIndicator number="02" active={activeStep === 1} />
                <StepIndicator number="03" active={activeStep === 2} />
              </div>
              
              <div className="flex flex-col gap-4 text-left">
                <SectionPillBlue label="In production." />
                
                <h3 className="twenty-serif text-[32px] sm:text-[44px] leading-[1.1] text-white">
                  Begin with production-grade building blocks
                </h3>
                
                <p className="font-sans text-[14px] text-[#888] leading-[1.6] max-w-[360px]">
                  Compose your CRM system and micro-apps using standard entities: schema models, layouts, custom commands and actions.
                </p>
              </div>
            </div>

            <div className="flex gap-2 ml-14 mt-4">
              <button 
                onClick={() => setActiveStep(prev => (prev > 0 ? prev - 1 : 2))}
                className="px-3 py-1.5 bg-[#2A2A2A] border border-[#333] rounded-[3px] text-xs font-mono tracking-wider hover:bg-[#333] transition-colors cursor-pointer"
              >
                PREV STEP
              </button>
              <button 
                onClick={() => setActiveStep(prev => (prev < 2 ? prev + 1 : 0))}
                className="px-3 py-1.5 bg-white text-black rounded-[3px] text-xs font-mono tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer font-bold"
              >
                NEXT STEP
              </button>
            </div>
          </div>

          {/* Interactive Floating Dark Panels right column */}
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center z-10 relative">
            <DarkUIPanel 
              title="SCHEMA ENTITIES" 
              items={[
                { label: 'DATA MODEL', active: activeStep === 0 },
                { label: 'RELATIONSHIPS', active: activeStep === 1 },
                { label: 'VALIDATIONS' },
                { label: 'FIELDS', active: activeStep === 2 }
              ]} 
            />
            <div className="flex flex-col gap-4 shrink-0">
              <div className="bg-[#2A2A2A] border border-[#444] rounded-[8px] p-4 text-xs font-mono text-[#AAA] max-w-[200px] text-left">
                <span className="text-white font-bold block mb-1">Active Object:</span>
                {"{ type: 'CRM_OBJECT', name: 'Company', active: true }"}
              </div>
              <DarkUIPanel 
                title="LAYOUT" 
                items={[
                  { label: 'VIEWS', active: activeStep === 1 },
                  { label: 'WIDGETS' },
                  { label: 'COMMANDS', active: activeStep === 0 }
                ]} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials block */}
      <section className="px-6 py-24 max-w-[900px] mx-auto border-b border-[#D8D8D4]">
        <SectionPill label="They are the real sales." />
        <TestimonialBlock 
          quote="The flexibility is really what made the difference. Our needs evolve very fast. I discover a new need and in two clicks I can address it. That is a real advantage when you are moving quickly."
          name="Olivier Reinaud"
          role="Co-founder"
          company="NetZero"
          counter="1/3"
        />
      </section>

      {/* FAQ Accordions Section */}
      <section className="bg-[#1C1C1C] px-6 py-24 text-white border-b border-[#111]">
        <div className="max-w-[700px] mx-auto flex flex-col items-center">
          <SectionPillBlue label="Any Questions?" />
          
          <h3 className="twenty-serif text-[32px] sm:text-[44px] text-white mt-4 mb-12 text-center">
            Stop fighting custom. <br />
            Start building, with Twenty
          </h3>

          <div className="w-full flex flex-col mt-4">
            <FAQItem 
              question="Is Twenty really open-source?" 
              answer="Yes, Twenty is fully open-source under AGPLv3. All component layers, API frameworks, database integrations, and layouts are completely open for self-hosting and extension." 
            />
            <FAQItem 
              question="How long does it take to get started?" 
              answer="You can spin up a fully functioning dev container or deploy to cloud instances in under 5 minutes. Initial database schema setup takes just 2 clicks." 
            />
            <FAQItem 
              question="Can I migrate from Salesforce or HubSpot?" 
              answer="Absolutely. We provide direct API integration pipelines and flat data file parsers to import complete entities, relationships, activity notes, and histories instantly." 
            />
            <FAQItem 
              question="Do I need a developer to customize Twenty?" 
              answer="No, simple drag-and-drop table layouts and custom visual dashboards can be built directly in the admin UI without code, though technical teams can fully modify the code." 
            />
          </div>
        </div>
      </section>

      {/* Footer block container */}
      <section className="px-6 py-20 bg-[#1C1C1C] flex items-center justify-center">
        <FooterCard />
      </section>
    </div>
  );
}
