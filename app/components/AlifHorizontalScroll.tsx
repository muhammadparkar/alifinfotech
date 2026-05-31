'use client';

import { useEffect, useRef, useState } from 'react';
import { SERVICES } from '../lib/data';
import Link from 'next/link';

export default function AlifHorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const railRef    = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const section = sectionRef.current;
    const rail    = railRef.current;
    if (!section || !rail) return;

    let rafId: number;
    const update = () => {
      const sectionTop    = section.getBoundingClientRect().top + window.scrollY;
      const sectionHeight = section.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, (window.scrollY - sectionTop) / sectionHeight));
      const maxT = -(rail.scrollWidth - window.innerWidth + 80);
      rail.style.transform = `translateX(${progress * maxT}px)`;
      rafId = requestAnimationFrame(update);
    };
    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, [isMobile]);

  return (
    <div ref={sectionRef} id="services" className="h-scroll-section">
      {/* Section header */}
      <div className="site-container" style={{
        padding: 'clamp(60px, 9vh, 110px) clamp(20px, 5vw, 80px) 0',
        position: 'relative', zIndex: 1,
      }}>
        <span className="section-label" style={{ marginBottom: '14px' }}>Our Services</span>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(32px, 5vw, 56px)',
          fontWeight: 300, fontStyle: 'italic', color: 'var(--text)',
          lineHeight: 1.1,
        }}>
          What we excel at
        </h2>
      </div>

      <div className="h-scroll-sticky">
        <div ref={railRef} className="h-scroll-rail">
          {/* Desktop spacer */}
          {!isMobile && <div style={{ width: '6vw', flexShrink: 0 }} />}

          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.num} service={svc} index={i} isMobile={isMobile} />
          ))}

          {!isMobile && <div style={{ width: '6vw', flexShrink: 0 }} />}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({
  service,
  index,
  isMobile,
}: {
  service: typeof SERVICES[number];
  index: number;
  isMobile: boolean;
}) {
  const cardStyle: React.CSSProperties = isMobile
    ? {
        width: '100%',
        height: 'auto',
        minHeight: '260px',
      }
    : {
        flexShrink: 0,
        width: 'clamp(300px, 28vw, 380px)',
        height: 'clamp(400px, 50vh, 500px)',
      };

  return (
    <div
      className="bracket-card"
      style={{
        ...cardStyle,
        background: 'linear-gradient(160deg, rgba(13,27,94,0.055), rgba(0,212,255,0.035))',
        border: '1px solid rgba(13,27,94,0.1)',
        borderRadius: '6px',
        padding: 'clamp(24px, 3vw, 40px)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        transition: 'border-color 0.35s ease, transform 0.35s var(--easing-reveal), box-shadow 0.35s ease',
        cursor: 'default', position: 'relative', overflow: 'hidden',
        boxSizing: 'border-box',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(0,212,255,0.35)';
        el.style.transform = 'translateY(-5px)';
        el.style.boxShadow = '0 20px 60px rgba(13,27,94,0.08)';
        const num = el.querySelector('.svc-num') as HTMLElement | null;
        if (num) num.style.opacity = '0.55';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = 'rgba(13,27,94,0.1)';
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
        const num = el.querySelector('.svc-num') as HTMLElement | null;
        if (num) num.style.opacity = '0.18';
      }}
    >
      {/* Background triangle watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-20px', right: '-20px',
        width: '90px', height: '90px',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: 'var(--accent)', opacity: 0.04,
        transition: 'opacity 0.35s ease',
      }} />

      {/* Number */}
      <span className="svc-num" style={{
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(52px, 6vw, 72px)',
        fontWeight: 300, color: 'var(--accent)', opacity: 0.18,
        lineHeight: 1, display: 'block',
        transition: 'opacity 0.3s ease',
        marginBottom: '8px',
      }}>
        {service.num}
      </span>

      {/* Content */}
      <div>
        <h3 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(22px, 2.4vw, 30px)',
          fontWeight: 300, fontStyle: 'italic',
          color: 'var(--text)', marginBottom: '12px', lineHeight: 1.2,
        }}>
          {service.name}
        </h3>
        <p style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: '13px', fontWeight: 300,
          color: 'var(--text)', opacity: 0.62,
          lineHeight: 1.75, marginBottom: '18px',
          display: '-webkit-box',
          WebkitLineClamp: isMobile ? 2 : 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {service.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {service.tags.map(tag => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
        <Link href="/services" style={{
          fontFamily: 'DM Sans',
          fontSize: '11px', fontWeight: 500,
          color: 'var(--accent)',
          letterSpacing: '0.08em',
          transition: 'opacity 0.2s ease',
          display: 'inline-block',
        }}>
          Learn more →
        </Link>
      </div>
    </div>
  );
}
