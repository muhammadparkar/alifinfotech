'use client';

import { useEffect, useRef } from 'react';
import { PILLARS } from '../lib/data';

export default function AlifWhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        el.querySelectorAll('.reveal-inner').forEach((inner, i) => {
          (inner as HTMLElement).style.transitionDelay = `${i * 0.1}s`;
          inner.classList.add('revealed');
        });
        el.querySelectorAll('.fade-up').forEach((f, i) => setTimeout(() => f.classList.add('visible'), i * 100));
        obs.unobserve(el);
      }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={{ padding: 'clamp(60px, 10vh, 120px) 0' }}>
      <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>

        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px, 5vw, 80px)', marginBottom: 'clamp(48px, 6vh, 80px)', alignItems: 'end' }}>
          <div>
            <span className="section-label fade-up" style={{ marginBottom: '16px' }}>Why Alif Info Tech</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.15 }}>
              <span className="reveal-wrapper" style={{ display: 'block' }}>
                <span className="reveal-inner" style={{ display: 'block' }}>Turning ideas into</span>
              </span>
              <span className="reveal-wrapper" style={{ display: 'block' }}>
                <span className="reveal-inner" style={{ display: 'block' }}>industry leaders.</span>
              </span>
            </h2>
          </div>
          <div className="fade-up" style={{ transitionDelay: '0.2s' }}>
            <p style={{ fontFamily: 'DM Sans, system-ui, sans-serif', fontSize: 'clamp(14px, 1.5vw, 16px)', fontWeight: 300, color: 'var(--text)', opacity: 0.65, lineHeight: 1.8 }}>
              From our head office in Doha to our technical centre in Hyderabad, we partner with businesses across the GCC and beyond — delivering AI, ERP, cloud, and digital product solutions that scale.
            </p>
          </div>
        </div>

        {/* 6 pillars grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {PILLARS.map((pillar, i) => (
            <div
              key={pillar.title}
              className="bracket-card fade-up"
              style={{
                background: 'linear-gradient(135deg, rgba(13,27,94,0.05), rgba(0,212,255,0.03))',
                border: '1px solid rgba(13,27,94,0.08)',
                borderRadius: '6px', padding: '28px',
                transitionDelay: `${i * 0.08}s`,
                transition: 'transform 0.3s ease, border-color 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,255,0.3)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(13,27,94,0.08)'; }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '28px', height: '20px', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'var(--accent)', opacity: 0.7, flexShrink: 0 }} />
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '22px', fontWeight: 400, fontStyle: 'italic', color: 'var(--text)' }}>
                  {pillar.title}
                </h3>
              </div>
              <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.75 }}>
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .header-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
