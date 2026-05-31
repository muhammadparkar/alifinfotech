'use client';

import { useEffect, useRef } from 'react';
import { DIFFERENTIATORS } from '../lib/data';

export default function AlifPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const rows = section.querySelectorAll<HTMLElement>('.principle-row');
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const row = entry.target as HTMLElement;
          const i = parseInt(row.dataset.index || '0', 10);
          setTimeout(() => {
            row.style.opacity = '1';
            row.style.transform = 'translateY(0)';
            row.querySelectorAll('.reveal-inner').forEach(inner => inner.classList.add('revealed'));
          }, i * 120);
          obs.unobserve(row);
        }
      });
    }, { threshold: 0.15 });
    rows.forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
      <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: 'clamp(40px, 6vh, 60px)' }}>
          <span className="section-label">Why Choose Us</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--text)', opacity: 0.08 }} />
        </div>

        {DIFFERENTIATORS.map((item, i) => (
          <div
            key={item.num}
            className="principle-row"
            data-index={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '56px 1fr 2fr auto',
              alignItems: 'start', gap: 'clamp(16px, 3vw, 40px)',
              padding: 'clamp(20px, 3vh, 32px) 0',
              borderTop: '1px solid rgba(10,18,64,0.07)',
              opacity: 0, transform: 'translateY(30px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease',
            }}
          >
            <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'var(--text)', opacity: 0.4, letterSpacing: '0.06em', paddingTop: '4px' }}>
              {item.num}
            </span>
            <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.2 }}>
              <span className="reveal-wrapper" style={{ display: 'block' }}>
                <span className="reveal-inner" style={{ display: 'block' }}>{item.title}</span>
              </span>
            </h3>
            <p style={{ fontFamily: 'DM Sans', fontSize: 'clamp(13px, 1.2vw, 15px)', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.8 }}>
              {item.body}
            </p>
            <span style={{ fontSize: '16px', color: 'var(--text)', opacity: 0.25, paddingTop: '4px', transition: 'opacity 0.3s, color 0.3s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.color = 'var(--accent)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '0.25'; (e.currentTarget as HTMLElement).style.color = 'var(--text)'; }}>
              →
            </span>
          </div>
        ))}
        {/* Closing border */}
        <div style={{ borderTop: '1px solid rgba(10,18,64,0.07)' }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .principle-row {
            grid-template-columns: 40px 1fr !important;
          }
          .principle-row > p { grid-column: 1 / -1; }
          .principle-row > span:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
