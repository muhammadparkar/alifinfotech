'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import TechGrid from './TechGrid';
import { COMPANY } from '../lib/data';

export default function AlifHero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      heroRef.current?.querySelectorAll('.reveal-inner').forEach((el, i) => {
        (el as HTMLElement).style.transitionDelay = `${0.18 + i * 0.13}s`;
        el.classList.add('revealed');
      });
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative', minHeight: '100svh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
        padding: 'clamp(80px, 12vh, 140px) clamp(20px, 5vw, 80px) clamp(80px, 10vh, 120px)',
      }}
    >
      <TechGrid opacity={0.35} />
      <BackgroundShapes />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '980px', width: '100%' }}>

        {/* Eyebrow */}
        <p style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: '11px', fontWeight: 500,
          letterSpacing: '0.3em', color: 'var(--accent)',
          textTransform: 'uppercase', marginBottom: 'clamp(24px, 4vh, 36px)',
          animation: 'fadeInUp 0.6s ease 0.2s both',
        }}>
          {COMPANY.subtitle} · Doha, Qatar
        </p>

        {/* Main heading */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontWeight: 300, lineHeight: 1.0,
          marginBottom: 'clamp(20px, 3vh, 28px)',
        }}>
          <span className="reveal-wrapper" style={{ display: 'block' }}>
            <span className="reveal-inner" style={{
              display: 'block',
              fontSize: 'clamp(46px, 8.5vw, 96px)',
              color: 'var(--text)', fontStyle: 'italic',
              letterSpacing: '-0.01em',
            }}>
              We build the systems
            </span>
          </span>
          <span className="reveal-wrapper" style={{ display: 'block' }}>
            <span className="reveal-inner" style={{
              display: 'block',
              fontSize: 'clamp(46px, 8.5vw, 96px)',
              fontStyle: 'italic',
              letterSpacing: '-0.01em',
            }}>
              <span style={{ color: 'var(--text)' }}>serious businesses </span>
              <span style={{ color: 'var(--accent)' }}>run on.</span>
            </span>
          </span>
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: 'DM Sans, system-ui, sans-serif',
          fontSize: 'clamp(14px, 1.8vw, 17px)', fontWeight: 300,
          color: 'var(--text)', opacity: 0.6,
          maxWidth: '520px', margin: '0 auto clamp(20px, 3vh, 28px)',
          lineHeight: 1.8,
          animation: 'fadeInUp 0.8s ease 0.55s both',
        }}>
          {COMPANY.tagline}
        </p>

        {/* Service pills */}
        <div style={{
          display: 'flex', gap: '8px', justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: 'clamp(32px, 5vh, 48px)',
          animation: 'fadeInUp 0.6s ease 0.75s both',
        }}>
          {['AI', 'ERP', 'Cloud', 'Mobile', 'Web'].map(tag => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap',
          animation: 'fadeInUp 0.8s ease 0.95s both',
        }}>
          <Link href="/services" id="hero-cta-primary"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--accent)', color: '#0D1B5E',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '15px 32px', borderRadius: '2px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(-3px)';
              el.style.boxShadow = '0 10px 36px rgba(0,212,255,0.3)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}>
            Know More <span aria-hidden>→</span>
          </Link>
          <Link href="/contact" id="hero-cta-secondary"
            style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: 'var(--text)',
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '11px', fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '15px 28px', borderRadius: '2px',
              border: '1px solid rgba(10,18,64,0.3)',
              transition: 'background 0.22s ease, color 0.22s ease, border-color 0.22s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--text)';
              el.style.color = 'var(--bg)';
              el.style.borderColor = 'transparent';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.color = 'var(--text)';
              el.style.borderColor = 'rgba(10,18,64,0.3)';
            }}>
            Contact Now
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 'clamp(24px, 4vh, 40px)', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        animation: 'fadeInUp 1s ease 1.4s both',
      }}>
        <span style={{
          fontFamily: 'DM Sans', fontSize: '9px', letterSpacing: '0.25em',
          color: 'var(--text)', opacity: 0.35, textTransform: 'uppercase',
          writingMode: 'vertical-lr',
        }}>
          scroll
        </span>
        <div style={{
          width: '1px', height: '44px',
          background: 'linear-gradient(to bottom, transparent, var(--text))',
          opacity: 0.2, position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'var(--accent)',
            animation: 'scrollLine 2.4s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
}

function BackgroundShapes() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0,
      overflow: 'hidden', zIndex: 0, pointerEvents: 'none',
    }}>
      {/* Large triangle top-left */}
      <div style={{
        position: 'absolute', top: '-100px', left: '-150px',
        width: 'clamp(320px, 50vw, 620px)', height: 'clamp(320px, 50vw, 620px)',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: '#0D1B5E', opacity: 0.04,
        animation: 'driftA 44s ease-in-out infinite',
      }} />
      {/* Medium triangle top-right */}
      <div style={{
        position: 'absolute', top: '10%', right: '-70px',
        width: 'clamp(160px, 26vw, 320px)', height: 'clamp(160px, 26vw, 320px)',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: '#00D4FF', opacity: 0.05,
        animation: 'driftB 32s ease-in-out infinite',
      }} />
      {/* Small triangle bottom-left */}
      <div style={{
        position: 'absolute', bottom: '12%', left: '6%',
        width: 'clamp(70px, 10vw, 140px)', height: 'clamp(70px, 10vw, 140px)',
        clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
        background: '#0D1B5E', opacity: 0.06,
        animation: 'rotateSlow 60s linear infinite',
      }} />

      {/* Circuit SVG bottom-right */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: '8%', right: '4%',
          opacity: 0.09, width: 'clamp(100px, 18vw, 220px)',
        }}
        viewBox="0 0 200 200" fill="none"
      >
        <path d="M20 100 H80 V40 H140 V100 H180" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="400" style={{ animation: 'pathDraw 5s ease-in-out infinite' }} />
        <circle cx="80" cy="40" r="4" fill="#00D4FF" />
        <circle cx="140" cy="100" r="4" fill="#00D4FF" />
        <path d="M20 140 H60 V180" stroke="#00D4FF" strokeWidth="1.5" strokeDasharray="200" style={{ animation: 'pathDraw 4s ease-in-out 1.2s infinite' }} />
        <rect x="55" y="175" width="10" height="10" stroke="#00D4FF" strokeWidth="1" fill="none" />
        <circle cx="20" cy="100" r="3" fill="rgba(0,212,255,0.5)" />
        <circle cx="180" cy="100" r="3" fill="rgba(0,212,255,0.5)" />
      </svg>
    </div>
  );
}
