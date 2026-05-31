'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { COMPANY } from '../lib/data';

export default function AlifCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        section.querySelectorAll('.reveal-inner').forEach((inner, i) => {
          (inner as HTMLElement).style.transitionDelay = `${0.1 * i}s`;
          inner.classList.add('revealed');
        });
        section.querySelectorAll('.fade-up').forEach((el, i) => setTimeout(() => el.classList.add('visible'), i * 120));
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    obs.observe(section);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="contact-cta" style={{ padding: 'clamp(80px, 12vh, 140px) 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      {/* Background triangles */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: 'clamp(180px, 28vw, 340px)', height: 'clamp(180px, 28vw, 340px)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'var(--accent)', opacity: 0.05, animation: 'driftA 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: 'clamp(120px, 18vw, 220px)', height: 'clamp(120px, 18vw, 220px)', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'var(--accent)', opacity: 0.06, animation: 'driftB 18s ease-in-out infinite' }} />
      </div>

      <div className="site-container" style={{ position: 'relative', zIndex: 1, padding: '0 clamp(20px, 5vw, 80px)' }}>
        <p className="fade-up" style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.55, marginBottom: '16px', letterSpacing: '0.04em' }}>
          Ready to Embrace AI & Digital Transformation?
        </p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.0, marginBottom: '24px' }}>
          <span className="reveal-wrapper" style={{ display: 'block' }}>
            <span className="reveal-inner" style={{ display: 'block', fontSize: 'clamp(44px, 8vw, 88px)', color: 'var(--text)' }}>
              Let&apos;s Start the Conversation.
            </span>
          </span>
        </h2>

        <p className="fade-up" style={{ fontFamily: 'DM Sans', fontSize: 'clamp(14px, 1.5vw, 16px)', fontWeight: 300, color: 'var(--text)', opacity: 0.6, maxWidth: '560px', margin: '0 auto 40px', lineHeight: 1.8 }}>
          Whether you&apos;re looking to build a new product, improve an existing system, or explore AI and cloud technologies — our experts are just a message away.
        </p>

        <div className="fade-up" style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" id="cta-get-in-touch"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'var(--cyan, #00D4FF)', color: '#0D1B5E',
              fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              padding: '16px 36px', borderRadius: '2px',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,212,255,0.25)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}>
            Get in Touch →
          </Link>
          <a href={`mailto:${COMPANY.email}`}
            style={{
              display: 'inline-flex', alignItems: 'center',
              background: 'transparent', color: 'var(--text)',
              fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '16px 28px', borderRadius: '2px', border: '1px solid var(--text)',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'var(--text)'; el.style.color = 'var(--bg)'; }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.color = 'var(--text)'; }}>
            {COMPANY.email}
          </a>
        </div>

        <p className="fade-up" style={{ fontFamily: 'DM Sans', fontSize: '12px', fontStyle: 'italic', fontWeight: 300, color: 'var(--text)', opacity: 0.35, marginTop: '20px' }}>
          (We take on select projects each quarter)
        </p>
      </div>
    </section>
  );
}
