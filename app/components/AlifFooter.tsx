'use client';

import Link from 'next/link';
import { COMPANY, NAV_LINKS } from '../lib/data';

export default function AlifFooter() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#0D1B5E', borderTop: '1px solid rgba(0,212,255,0.15)', position: 'relative', overflow: 'hidden' }}>
      {/* Watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'Cormorant Garamond, Georgia, serif',
        fontSize: 'clamp(40px, 10vw, 110px)',
        fontWeight: 300, fontStyle: 'italic',
        color: '#FFFFFF', opacity: 0.03,
        whiteSpace: 'nowrap', userSelect: 'none', pointerEvents: 'none',
        letterSpacing: '0.04em',
      }}>
        ALIF INFO TECH
      </div>

      <div className="site-container" style={{ padding: 'clamp(40px, 6vh, 72px) clamp(20px, 5vw, 80px) 32px', position: 'relative', zIndex: 1 }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'clamp(220px, 28%, 300px) repeat(3, 1fr)',
          gap: 'clamp(28px, 4vw, 56px)',
          marginBottom: '48px',
        }}
          className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{ position: 'relative', width: '30px', height: '30px', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: '#FFFFFF' }} />
                <div style={{ position: 'absolute', bottom: '2px', left: '50%', transform: 'translateX(-50%)', width: '13px', height: '9px', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: '#00D4FF' }} />
              </div>
              <span style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', color: '#FFFFFF', textTransform: 'uppercase' }}>
                Alif Info Tech
              </span>
            </div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '260px' }}>
              {COMPANY.tagline}
            </p>
            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <a href={`mailto:${COMPANY.email}`} style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00D4FF'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}>
                {COMPANY.email}
              </a>
              <a href={COMPANY.tel} style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00D4FF'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}>
                {COMPANY.phone}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00D4FF', marginBottom: '16px' }}>
              Quick Links
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {NAV_LINKS.slice(0, 6).map(link => (
                <Link key={link.label} href={link.href}
                  style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00D4FF'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00D4FF', marginBottom: '16px' }}>
              Services
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['AI Solutions', 'Web Development', 'Mobile Apps', 'ERP / CRM / HIS', 'Cloud Solutions', 'Business Consultation', 'E-Commerce'].map(s => (
                <Link key={s} href="/services"
                  style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'rgba(255,255,255,0.65)', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#00D4FF'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.65)'}>
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#00D4FF', marginBottom: '16px' }}>
              Offices
            </p>
            {Object.values(COMPANY.offices).map(office => (
              <div key={office.city} style={{ marginBottom: '20px' }}>
                <p style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500, color: 'rgba(255,255,255,0.88)', marginBottom: '5px' }}>
                  {office.label} — {office.city}
                </p>
                <p style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '24px' }} />

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <p style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.45)' }}>
            © {year} Alif Info Tech. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.35)', width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, border-color 0.2s' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#00D4FF'; el.style.borderColor = 'rgba(0,212,255,0.4)'; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(255,255,255,0.35)'; el.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              aria-label="LinkedIn">
              in
            </a>
            {['✉', '☎'].map((icon, i) => (
              <a key={i} href={i === 0 ? `mailto:${COMPANY.email}` : COMPANY.tel}
                style={{ fontFamily: 'DM Sans', fontSize: '13px', color: 'rgba(255,255,255,0.35)', width: '32px', height: '32px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.color = '#00D4FF'; el.style.borderColor = 'rgba(0,212,255,0.4)'; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.color = 'rgba(255,255,255,0.35)'; el.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
