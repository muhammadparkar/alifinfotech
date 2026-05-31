'use client';

import { useEffect, useRef } from 'react';

const SERVICES = [
  {
    num: '01',
    name: 'Brand Identity',
    desc: 'Logos, visual systems, and brand voices that make you impossible to ignore in any market.',
  },
  {
    num: '02',
    name: 'Product Design',
    desc: 'UX research, wireframes, and pixel-perfect interfaces that convert visitors into loyal users.',
  },
  {
    num: '03',
    name: 'Web Engineering',
    desc: 'Fast, scalable, and maintainable web applications built with modern frameworks and clean code.',
  },
  {
    num: '04',
    name: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences that feel at home on every device.',
  },
  {
    num: '05',
    name: 'Design Systems',
    desc: 'Shared component libraries and design tokens that keep every team aligned and moving fast.',
  },
];

interface ServiceCard {
  num: string;
  name: string;
  desc: string;
}

interface AlifHorizontalScrollProps {
  cards?: ServiceCard[];
}

export default function AlifHorizontalScroll({ cards = SERVICES }: AlifHorizontalScrollProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef    = useRef<HTMLDivElement>(null);
  const stickyRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const rail    = railRef.current;
    const sticky  = stickyRef.current;
    if (!section || !rail || !sticky) return;

    let rafId: number;

    const update = () => {
      const sectionRect = section.getBoundingClientRect();
      const sectionTop  = sectionRect.top + window.scrollY;
      const scrollY     = window.scrollY;

      // Progress through this section: 0 → 1
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, (scrollY - sectionTop) / sectionHeight));

      // Total rail width beyond viewport
      const railWidth   = rail.scrollWidth;
      const viewWidth   = window.innerWidth;
      const maxTranslate = -(railWidth - viewWidth + 80); // 80 = right padding

      const translateX = progress * maxTranslate;
      rail.style.transform = `translateX(${translateX}px)`;

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={sectionRef}
      id="services"
      className="h-scroll-section"
      style={{ background: 'transparent' }}
    >
      {/* Section label — above sticky */}
      <div
        style={{
          padding: '80px 8vw 0',
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '16px',
          }}
        >
          Capabilities
        </p>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--text)',
          }}
        >
          What we excel at
        </h2>
      </div>

      <div ref={stickyRef} className="h-scroll-sticky">
        <div ref={railRef} className="h-scroll-rail">
          {/* Leading spacer */}
          <div style={{ width: '8vw', flexShrink: 0 }} />

          {cards.map((card, i) => (
            <ServiceCard key={card.num} card={card} index={i} />
          ))}

          {/* Trailing spacer */}
          <div style={{ width: '8vw', flexShrink: 0 }} />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ card, index }: { card: ServiceCard; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      style={{
        flexShrink: 0,
        width: '360px',
        height: '480px',
        background: 'linear-gradient(160deg, rgba(13,27,94,0.06), rgba(0,212,255,0.04))',
        border: '1px solid rgba(13,27,94,0.1)',
        borderRadius: '6px',
        padding: '36px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'border-color 0.4s ease, transform 0.4s ease',
        cursor: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(0,212,255,0.4)';
        el.style.transform = 'translateY(-4px)';
        const num = el.querySelector('.service-num') as HTMLElement;
        if (num) num.style.opacity = '0.8';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(13,27,94,0.1)';
        el.style.transform = 'translateY(0)';
        const num = el.querySelector('.service-num') as HTMLElement;
        if (num) num.style.opacity = '0.25';
      }}
    >
      {/* Background triangle decoration */}
      <div
        style={{
          position: 'absolute',
          bottom: '-20px',
          right: '-20px',
          width: '120px',
          height: '120px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'var(--accent)',
          opacity: 0.04,
        }}
      />

      {/* Top: number */}
      <div>
        <span
          className="service-num"
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '80px',
            fontWeight: 300,
            color: 'var(--accent)',
            opacity: 0.25,
            lineHeight: 1,
            transition: 'opacity 0.3s ease',
            display: 'block',
          }}
        >
          {card.num}
        </span>
      </div>

      {/* Middle + bottom */}
      <div>
        <h3
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: '32px',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--text)',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}
        >
          {card.name}
        </h3>
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '14px',
            fontWeight: 300,
            color: 'var(--text-muted, #5A6A9A)',
            lineHeight: 1.75,
            marginBottom: '32px',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {card.desc}
        </p>
        <span
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 400,
            color: 'var(--accent)',
            letterSpacing: '0.05em',
          }}
        >
          Explore →
        </span>
      </div>
    </div>
  );
}
