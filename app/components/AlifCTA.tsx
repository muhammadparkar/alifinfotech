'use client';

import { useEffect, useRef } from 'react';

export default function AlifCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            section.querySelectorAll('.reveal-inner').forEach((inner, i) => {
              (inner as HTMLElement).style.transitionDelay = `${0.1 * i}s`;
              inner.classList.add('revealed');
            });
            section.querySelectorAll('.fade-up').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 120);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      style={{
        padding: '140px 8vw',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated background triangles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '360px',
            height: '360px',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: 'var(--accent)',
            opacity: 0.05,
            animation: 'driftA 14s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-40px',
            left: '-40px',
            width: '220px',
            height: '220px',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: 'var(--accent)',
            opacity: 0.06,
            animation: 'driftB 18s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '-30px',
            width: '140px',
            height: '140px',
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            background: 'var(--cyan, #00D4FF)',
            opacity: 0.05,
            animation: 'driftA 22s ease-in-out infinite 4s',
          }}
        />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <p
          className="fade-up"
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 300,
            color: 'var(--text)',
            opacity: 0.6,
            marginBottom: '20px',
            letterSpacing: '0.04em',
          }}
        >
          Ready to build something remarkable?
        </p>

        {/* Large heading */}
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.0,
            marginBottom: '32px',
          }}
        >
          <span className="reveal-wrapper" style={{ display: 'block' }}>
            <span
              className="reveal-inner"
              style={{
                display: 'block',
                fontSize: 'clamp(56px, 10vw, 96px)',
                color: 'var(--text)',
              }}
            >
              Let&apos;s talk.
            </span>
          </span>
        </h2>

        {/* Subtext */}
        <p
          className="fade-up"
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--text)',
            opacity: 0.7,
            maxWidth: '440px',
            margin: '0 auto 48px',
            lineHeight: 1.7,
          }}
        >
          We&apos;d love to hear about your project. Tell us what you&apos;re building and let&apos;s figure out how to make it exceptional.
        </p>

        {/* CTA Button */}
        <div className="fade-up">
          <a
            href="mailto:hello@alifinfotech.com"
            id="cta-email-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'var(--cyan, #00D4FF)',
              color: '#0D1B5E',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              padding: '18px 44px',
              borderRadius: '2px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-3px)';
              el.style.boxShadow = '0 16px 48px rgba(0,212,255,0.25)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            Start a conversation
            <span style={{ fontSize: '16px' }}>→</span>
          </a>
        </div>

        {/* Fine print */}
        <p
          className="fade-up"
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '13px',
            fontStyle: 'italic',
            fontWeight: 300,
            color: 'var(--text)',
            opacity: 0.4,
            marginTop: '20px',
          }}
        >
          (We take on select projects each quarter)
        </p>
      </div>
    </section>
  );
}
