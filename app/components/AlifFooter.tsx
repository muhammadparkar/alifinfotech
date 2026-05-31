'use client';

export default function AlifFooter() {
  const navLinks = ['About', 'Services', 'Work', 'Journal', 'Contact'];
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: '#0D1B5E',
        borderTop: '1px solid rgba(0,212,255,0.15)',
        position: 'relative',
        overflow: 'hidden',
        padding: '60px 8vw 32px',
      }}
    >
      {/* Watermark text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(60px, 12vw, 120px)',
          fontWeight: 300,
          fontStyle: 'italic',
          color: '#FFFFFF',
          opacity: 0.04,
          whiteSpace: 'nowrap',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '0.04em',
        }}
      >
        ALIF INFO TECH
      </div>

      {/* Top row: logo + nav */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '60px',
          gap: '32px',
          flexWrap: 'wrap',
        }}
      >
        {/* Logo + tagline */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
            <div style={{ position: 'relative', width: '32px', height: '32px', flexShrink: 0 }}>
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  background: '#FFFFFF',
                }}
              />
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
                color: '#FFFFFF',
                textTransform: 'uppercase',
              }}
            >
              Alif Info Tech
            </span>
          </div>
          <p
            style={{
              fontFamily: 'DM Sans, system-ui, sans-serif',
              fontSize: '13px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.45)',
              letterSpacing: '0.04em',
            }}
          >
            Innovation Experts
          </p>
        </div>

        {/* Nav links */}
        <nav
          style={{
            display: 'flex',
            gap: '32px',
            flexWrap: 'wrap',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '13px',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.04em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#00D4FF';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)';
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      {/* Divider */}
      <div
        style={{
          height: '1px',
          background: 'rgba(255,255,255,0.08)',
          marginBottom: '24px',
        }}
      />

      {/* Bottom bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontFamily: 'DM Sans, system-ui, sans-serif',
            fontSize: '12px',
            fontWeight: 300,
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          © {year} Alif Info Tech. All rights reserved.
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {[
            { label: 'LinkedIn', icon: 'in', href: '#' },
            { label: 'Twitter', icon: 'X', href: '#' },
            { label: 'Dribbble', icon: '◉', href: '#' },
          ].map(social => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              style={{
                fontFamily: 'DM Sans, system-ui, sans-serif',
                fontSize: '12px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                width: '32px',
                height: '32px',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = '#00D4FF';
                el.style.borderColor = 'rgba(0,212,255,0.4)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = 'rgba(255,255,255,0.35)';
                el.style.borderColor = 'rgba(255,255,255,0.12)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
