'use client';

import { useEffect, useRef, ReactNode } from 'react';
import TechGrid from './TechGrid';

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}: PageHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      el.querySelectorAll('.reveal-inner').forEach((inner, i) => {
        (inner as HTMLElement).style.transitionDelay = `${0.1 + i * 0.12}s`;
        inner.classList.add('revealed');
      });
      el.querySelectorAll('.fade-up').forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), i * 120 + 200);
      });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={heroRef}
      className="page-hero"
      style={{ textAlign: align === 'center' ? 'center' : 'left' }}
    >
      <TechGrid opacity={0.35} />

      {/* Decorative triangle */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '5vw',
          top: '50%',
          transform: 'translateY(-50%)',
          width: 'clamp(120px, 20vw, 280px)',
          height: 'clamp(120px, 20vw, 280px)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: 'var(--navy, #0D1B5E)',
          opacity: 0.05,
          animation: 'rotateSlow 50s linear infinite',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        className="site-container"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {eyebrow && (
          <span
            className="section-label fade-up"
            style={{ marginBottom: '16px', display: 'block' }}
          >
            {eyebrow}
          </span>
        )}

        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(36px, 6vw, 76px)',
            color: 'var(--text)',
            lineHeight: 1.1,
            maxWidth: align === 'center' ? '100%' : '800px',
            marginBottom: subtitle ? '20px' : 0,
          }}
        >
          {typeof title === 'string'
            ? title.split('\n').map((line, i) => (
                <span key={i} className="reveal-wrapper" style={{ display: 'block' }}>
                  <span className="reveal-inner" style={{ display: 'block' }}>{line}</span>
                </span>
              ))
            : (
              <span className="reveal-wrapper" style={{ display: 'block' }}>
                <span className="reveal-inner" style={{ display: 'block' }}>{title}</span>
              </span>
            )}
        </h1>

        {subtitle && (
          <p
            className="fade-up"
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: 'clamp(14px, 2vw, 17px)',
              fontWeight: 300,
              color: 'var(--text)',
              opacity: 0.65,
              maxWidth: align === 'center' ? '600px' : '560px',
              margin: align === 'center' ? '0 auto' : undefined,
              lineHeight: 1.75,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Bottom border line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
          opacity: 0.3,
        }}
      />
    </div>
  );
}
