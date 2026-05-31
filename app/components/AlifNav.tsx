'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '../lib/data';

export default function AlifNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > lastScrollY.current && y > 100);
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/');

  return (
    <>
      <nav
        className={`nav-container ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          height: '56px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 clamp(16px, 4vw, 40px)',
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <div style={{ position: 'relative', width: '30px', height: '30px' }}>
            <div style={{
              position: 'absolute', inset: 0,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background: 'var(--text)',
              transition: 'background 0.25s ease',
            }} />
            <div style={{
              position: 'absolute', bottom: '2px', left: '50%', transform: 'translateX(-50%)',
              width: '13px', height: '9px',
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              background: 'var(--accent)',
              transition: 'background 0.25s ease',
            }} />
          </div>
          <span className="nav-logo-text">
            Alif Info Tech
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {NAV_LINKS.map(link => (
            <div
              key={link.label}
              style={{ position: 'relative' }}
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`nav-desktop-link ${isActive(link.href) ? 'active' : ''}`}
              >
                {link.label}
                {link.children && <span style={{ fontSize: '9px', opacity: 0.6 }}>▾</span>}
              </Link>

              {/* Dropdown */}
              {link.children && openDropdown === link.label && (
                <div 
                  className="nav-dropdown-menu"
                  style={{
                    position: 'absolute', top: '100%', left: '0',
                    borderRadius: '4px',
                    padding: '16px',
                    minWidth: '240px',
                    zIndex: 200,
                    display: 'flex', flexDirection: 'column', gap: '16px',
                  }}
                >
                  {link.children.map(group => (
                    <div key={group.group}>
                      {group.group && (
                        <p style={{
                          fontFamily: 'DM Sans, system-ui, sans-serif',
                          fontSize: '10px', fontWeight: 500,
                          letterSpacing: '0.15em', textTransform: 'uppercase',
                          color: 'var(--accent)', marginBottom: '8px',
                        }}>
                          {group.group}
                        </p>
                      )}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        {group.items.map(item => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="nav-dropdown-item"
                            style={{
                              fontFamily: 'DM Sans, system-ui, sans-serif',
                              fontSize: '13px', fontWeight: 300,
                              padding: '6px 8px', borderRadius: '2px',
                              display: 'flex', flexDirection: 'column', gap: '1px',
                            }}
                          >
                            {item.label}
                            {'desc' in item && item.desc && (
                              <span style={{ fontSize: '11px', opacity: 0.5, fontWeight: 300 }}>
                                {item.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="nav-hamburger"
          style={{ display: 'none', flexDirection: 'column', gap: '5px', padding: '4px', cursor: 'none' }}
        >
          {[0, 1, 2].map(i => (
            <span 
              key={i} 
              className="nav-hamburger-bar"
              style={{ display: 'block', width: '22px', height: '1.5px', borderRadius: '1px' }} 
            />
          ))}
        </button>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: '#0D1B5E',
        clipPath: menuOpen ? 'circle(170% at top right)' : 'circle(0% at top right)',
        transition: 'clip-path 0.7s cubic-bezier(0.76,0,0.24,1)',
        pointerEvents: menuOpen ? 'all' : 'none',
        overflowY: 'auto',
        display: 'flex', flexDirection: 'column',
        padding: '80px clamp(24px, 8vw, 60px) 40px',
      }}>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute', top: '20px', right: '24px',
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '12px', color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em', textTransform: 'uppercase',
            cursor: 'none', background: 'none', border: 'none',
          }}
        >
          Close ✕
        </button>

        <nav style={{ flex: 1 }}>
          {NAV_LINKS.map((link, i) => (
            <div key={link.label}>
              <Link
                href={link.href}
                style={{
                  display: 'block',
                  fontFamily: 'Cormorant Garamond, Georgia, serif',
                  fontSize: 'clamp(28px, 6vw, 52px)',
                  fontWeight: 300, fontStyle: 'italic',
                  color: '#FFFFFF',
                  padding: '12px 0',
                  transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: menuOpen ? 1 : 0,
                  transition: `transform 0.6s cubic-bezier(0.22,1,0.36,1) ${0.07 * i + 0.1}s, opacity 0.5s ease ${0.07 * i + 0.08}s`,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00D4FF'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
              >
                {link.label}
              </Link>
              <div style={{ height: '1px', background: 'rgba(0,212,255,0.15)' }} />
            </div>
          ))}
        </nav>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          paddingTop: '32px', flexWrap: 'wrap', gap: '16px',
        }}>
          <div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Innovation Experts</p>
            <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.35)', marginTop: '4px' }}>info@alifinfotech.net</p>
          </div>
          <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>© 2024 Alif Info Tech</p>
        </div>
      </div>
    </>
  );
}
