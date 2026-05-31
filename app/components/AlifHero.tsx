'use client';

import { useEffect, useRef } from 'react';
import AlifTextReveal from './AlifTextReveal';

export default function AlifHero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll indicator pulse
  useEffect(() => {
    // Nothing extra needed — CSS handles scroll indicator animation
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '120px 24px 80px',
      }}
    >
      {/* Background decorative triangles */}
      <BackgroundTriangles />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          className="fade-in-eyebrow"
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '11px',
            fontWeight: 400,
            letterSpacing: '0.3em',
            color: 'var(--accent)',
            textTransform: 'uppercase',
            marginBottom: '28px',
            animation: 'fadeInUp 0.6s ease 0.2s both',
          }}
        >
          Innovation Experts
        </p>

        {/* Main heading */}
        <h1
          style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontWeight: 300,
            lineHeight: 1.0,
            marginBottom: '28px',
          }}
        >
          <span
            className="reveal-wrapper"
            style={{ display: 'block' }}
          >
            <span
              className="reveal-inner"
              style={{
                display: 'block',
                fontSize: 'clamp(60px, 10vw, 96px)',
                color: 'var(--text)',
                fontStyle: 'italic',
                transitionDelay: '0.3s',
              }}
            >
              We build
            </span>
          </span>
          <span
            className="reveal-wrapper"
            style={{ display: 'block' }}
          >
            <span
              className="reveal-inner"
              style={{
                display: 'block',
                fontSize: 'clamp(60px, 10vw, 96px)',
                fontStyle: 'italic',
                transitionDelay: '0.42s',
              }}
            >
              <span style={{ color: 'var(--text)' }}>digital </span>
              <span style={{ color: 'var(--accent)' }}>futures.</span>
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '16px',
            fontWeight: 300,
            color: 'var(--text-muted, #5A6A9A)',
            maxWidth: '480px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            animation: 'fadeInUp 0.8s ease 0.7s both',
          }}
        >
          Brand. Product. Engineering.
          <br />
          For founders who refuse to settle.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeInUp 0.8s ease 0.9s both',
          }}
        >
          <a
            href="#services"
            id="hero-cta-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--accent)',
              color: '#0D1B5E',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '14px 28px',
              borderRadius: '2px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 8px 32px rgba(0,212,255,0.3)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            View our work
            <span style={{ fontSize: '14px' }}>→</span>
          </a>
          <a
            href="#contact"
            id="hero-cta-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              background: 'transparent',
              color: 'var(--text)',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '14px 28px',
              borderRadius: '2px',
              border: '1px solid var(--text)',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--text)';
              el.style.color = 'var(--bg)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.color = 'var(--text)';
            }}
          >
            Start a project
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          animation: 'fadeInUp 1s ease 1.4s both',
        }}
      >
        <span
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'var(--text)',
            opacity: 0.5,
            textTransform: 'uppercase',
            writingMode: 'vertical-lr',
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'var(--text)',
            opacity: 0.3,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'var(--accent)',
              animation: 'scrollLine 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Auto-trigger reveal for hero headings */
        .reveal-inner {
          transition-delay: 0.3s;
        }

        /* Trigger hero headings immediately on load */
        @keyframes triggerReveal {
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      <HeroRevealTrigger />
    </section>
  );
}

// Triggers hero heading reveal on mount (not scroll-triggered)
function HeroRevealTrigger() {
  const triggered = useRef(false);
  useEffect(() => {
    if (triggered.current) return;
    triggered.current = true;
    const timer = setTimeout(() => {
      document.querySelectorAll('#hero .reveal-inner').forEach(el => {
        el.classList.add('revealed');
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return null;
}

function BackgroundTriangles() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Large navy triangle — top left */}
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '-150px',
          width: '600px',
          height: '600px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: '#0D1B5E',
          opacity: 0.05,
          filter: 'blur(1px)',
          animation: 'rotateSlow 40s linear infinite',
          transformOrigin: 'center',
        }}
      />
      {/* Medium cyan triangle — right center */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '-80px',
          width: '300px',
          height: '300px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: '#00D4FF',
          opacity: 0.06,
          filter: 'blur(1px)',
          animation: 'rotateReverse 28s linear infinite',
          transformOrigin: 'center',
        }}
      />
      {/* Small navy triangle — bottom left */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '150px',
          height: '150px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: '#0D1B5E',
          opacity: 0.07,
          filter: 'blur(0.5px)',
          animation: 'rotateSlow 55s linear infinite',
          transformOrigin: 'center',
        }}
      />
      {/* Extra tiny cyan — top right */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '20%',
          width: '80px',
          height: '80px',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          background: '#00D4FF',
          opacity: 0.08,
          animation: 'rotateReverse 20s linear infinite',
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}
