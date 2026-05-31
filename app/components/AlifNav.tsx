'use client';

import { useEffect, useRef, useState } from 'react';

export default function AlifNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      if (y > lastScrollY.current && y > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = ['About', 'Services', 'Work', 'Journal'];

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          transition: 'transform 0.35s ease, background 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(244,247,255,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(13,27,94,0.08)' : 'none',
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}
          aria-label="Alif Info Tech — Home"
        >
          {/* CSS-drawn logo mark */}
          <div
            style={{
              position: 'relative',
              width: '32px',
              height: '32px',
              flexShrink: 0,
            }}
          >
            {/* Large triangle */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background: 'var(--navy, #0D1B5E)',
              }}
            />
            {/* Small triangle — cyan accent */}
            <div
              style={{
                position: 'absolute',
                bottom: '2px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '14px',
                height: '10px',
                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                background: '#00D4FF',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: 'var(--text-dark, #0A1240)',
              textTransform: 'uppercase',
            }}
          >
            Alif Info Tech
          </span>
        </a>

        {/* Desktop Nav */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="nav-desktop"
        >
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 400,
                color: 'var(--text-dark, #0A1240)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#00D4FF';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'var(--text-dark, #0A1240)';
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-dark, #0A1240)',
              border: '1px solid var(--accent, #00D4FF)',
              padding: '7px 18px',
              borderRadius: '2px',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'var(--accent, #00D4FF)';
              el.style.color = '#0D1B5E';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = 'transparent';
              el.style.color = 'var(--text-dark, #0A1240)';
            }}
          >
            Contact
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '5px',
            padding: '4px',
            background: 'none',
            border: 'none',
          }}
          className="nav-hamburger"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: 'var(--text-dark, #0A1240)',
                borderRadius: '1px',
              }}
            />
          ))}
        </button>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: '#0D1B5E',
          clipPath: menuOpen
            ? 'circle(170% at top right)'
            : 'circle(0% at top right)',
          transition: 'clip-path 0.7s cubic-bezier(0.76,0,0.24,1)',
          pointerEvents: menuOpen ? 'all' : 'none',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 10vw',
        }}
      >
        {/* Close */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '20px',
            right: '32px',
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '13px',
            color: 'rgba(255,255,255,0.6)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            background: 'none',
            border: 'none',
            cursor: 'none',
          }}
        >
          Close ✕
        </button>

        <nav>
          {[...navLinks, 'Contact'].map((link, i) => (
            <div key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(40px, 8vw, 64px)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  padding: '14px 0',
                  transform: menuOpen
                    ? 'translateY(0)'
                    : 'translateY(20px)',
                  opacity: menuOpen ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.08 * i + 0.15}s,
                               opacity 0.5s ease ${0.08 * i + 0.1}s`,
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#00D4FF';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = '#FFFFFF';
                }}
              >
                {link}
              </a>
              {i < navLinks.length && (
                <div
                  style={{
                    height: '1px',
                    background: 'rgba(0,212,255,0.25)',
                  }}
                />
              )}
            </div>
          ))}
        </nav>

        {/* Footer info */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '10vw',
            right: '10vw',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Innovation Experts
          </p>
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            © 2024 Alif Info Tech
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
