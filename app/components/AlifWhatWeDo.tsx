'use client';

import { useEffect, useRef } from 'react';
import AlifImageCluster from './AlifImageCluster';

export default function AlifWhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.querySelectorAll('.reveal-inner').forEach((inner, i) => {
              (inner as HTMLElement).style.transitionDelay = `${0.1 * i}s`;
              inner.classList.add('revealed');
            });
            el.querySelectorAll('.fade-up').forEach((fade, i) => {
              setTimeout(() => fade.classList.add('visible'), i * 120);
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        padding: '120px 8vw',
        display: 'grid',
        gridTemplateColumns: '2fr 3fr',
        gap: '80px',
        alignItems: 'center',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Left column */}
      <div>
        <p
          className="fade-up"
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '20px',
          }}
        >
          What we do
        </p>

        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(36px, 5vw, 56px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--text)',
            lineHeight: 1.15,
            marginBottom: '24px',
          }}
        >
          <span className="reveal-wrapper" style={{ display: 'block' }}>
            <span className="reveal-inner" style={{ display: 'block', transitionDelay: '0.1s' }}>
              Turning ideas into
            </span>
          </span>
          <span className="reveal-wrapper" style={{ display: 'block' }}>
            <span className="reveal-inner" style={{ display: 'block', transitionDelay: '0.22s' }}>
              industry leaders.
            </span>
          </span>
        </h2>

        <p
          className="fade-up"
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '15px',
            fontWeight: 300,
            color: 'var(--text-muted, #5A6A9A)',
            lineHeight: 1.8,
            maxWidth: '400px',
            transitionDelay: '0.2s',
          }}
        >
          We partner with ambitious founders to craft brands people remember,
          products people love, and engineering that scales without compromise.
        </p>

        <div
          className="fade-up"
          style={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            transitionDelay: '0.3s',
          }}
        >
          {['Strategic Brand Design', 'Product & UX Engineering', 'Scalable Architecture'].map(item => (
            <div
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div
                style={{
                  width: '20px',
                  height: '14px',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  background: 'var(--accent)',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontFamily: 'DM Sans, system-ui, sans-serif',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'var(--text)',
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right column — image cluster */}
      <div className="fade-up" style={{ transitionDelay: '0.15s' }}>
        <AlifImageCluster />
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about {
            grid-template-columns: 1fr !important;
            padding: 80px 6vw !important;
          }
        }
      `}</style>
    </section>
  );
}
