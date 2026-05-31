import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import AlifCTA from '../components/AlifCTA';
import { PRODUCTS } from '../lib/data';

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Alif AMS, Alif WMS, and Alif Mobile — purpose-built software for modern enterprise operations.',
};

export default function ProductsPage() {
  return (
    <main>
      <div data-bg="#F4F7FF" data-text="#0A1240" data-accent="#00D4FF">
        <PageHero
          eyebrow="Our Products"
          title="Purpose-Built Software\nfor Modern Operations"
          subtitle="Three products. One ecosystem. Built to work together and scale with your business."
        />
      </div>

      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          {PRODUCTS.map((product, i) => {
            // Assign a unique theme color to each product section
            const theme = 
              product.id === 'ams' ? { bg: '#F4F7FF', text: '#0A1240' } :
              product.id === 'wms' ? { bg: '#EEF1FC', text: '#0A1240' } :
              { bg: '#0D1B5E', text: '#FFFFFF' }; // Mobile app in gorgeous tech dark mode!
            
            return (
              <div key={product.id} data-bg={theme.bg} data-text={theme.text} data-accent="#00D4FF" style={{ margin: '0 -10vw', padding: '0 10vw' }}>
                <ProductSection product={product} reverse={i % 2 === 1} />
              </div>
            );
          })}
        </div>
      </section>

      <div data-bg="#0D1B5E" data-text="#FFFFFF" data-accent="#00D4FF">
        <AlifCTA />
      </div>
    </main>
  );
}

function ProductSection({ product, reverse }: { product: typeof PRODUCTS[number]; reverse: boolean }) {
  const Illustration = product.id === 'ams' ? AMSDashboard : product.id === 'wms' ? WMSGrid : MobilePhone;

  return (
    <div id={product.id} style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'clamp(40px, 6vw, 80px)',
      alignItems: 'center',
      padding: 'clamp(48px, 7vh, 80px) 0',
      borderBottom: '1px solid rgba(13,27,94,0.06)',
    }}>
      <div style={{ order: reverse ? 1 : 0 }}>
        <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>{product.name}</span>
        <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'var(--text)', opacity: 0.4, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
          {product.badge}
        </span>
        <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.2, marginBottom: '16px' }}>
          {product.fullName}
        </h2>
        <p style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 300, color: 'var(--text)', opacity: 0.65, lineHeight: 1.8, marginBottom: '28px' }}>
          {product.intro}
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '28px' }}>
          <div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>Features</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.features.map(f => (
                <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ width: '12px', height: '8px', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: 'var(--accent)', flexShrink: 0, marginTop: '5px', opacity: 0.7 }} />
                  <span style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.7, lineHeight: 1.5 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '12px' }}>Benefits</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {product.benefits.map(b => (
                <li key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '12px', marginTop: '2px' }}>✓</span>
                  <span style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.7, lineHeight: 1.5 }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <a href={`mailto:info@alifinfotech.net?subject=Demo Request — ${product.name}`} className="demo-btn">
          Request a Demo →
        </a>
      </div>

      <div style={{ order: reverse ? 0 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Illustration />
      </div>
    </div>
  );
}

function AMSDashboard() {
  return (
    <svg viewBox="0 0 380 280" style={{ width: '100%', maxWidth: '380px', opacity: 0.85 }} fill="none">
      {/* Frame */}
      <rect x="8" y="8" width="364" height="264" rx="6" stroke="rgba(0,212,255,0.3)" strokeWidth="1.5" fill="rgba(13,27,94,0.06)" />
      {/* Header bar */}
      <rect x="8" y="8" width="364" height="36" rx="6" fill="rgba(13,27,94,0.15)" />
      <circle cx="28" cy="26" r="6" fill="rgba(0,212,255,0.3)" />
      <rect x="42" y="20" width="80" height="12" rx="2" fill="rgba(255,255,255,0.1)" />
      {/* Stat cards */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={20 + i * 116} y="60" width="100" height="64" rx="4" fill="rgba(13,27,94,0.08)" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
          <rect x={32 + i * 116} y="72" width="40" height="8" rx="2" fill="rgba(255,255,255,0.12)" />
          <rect x={32 + i * 116} y="88" width="60" height="16" rx="2" fill="rgba(0,212,255,0.25)" />
          <rect x={32 + i * 116} y="108" width="30" height="6" rx="2" fill="rgba(255,255,255,0.06)" />
        </g>
      ))}
      {/* Bar chart */}
      <rect x="20" y="140" width="220" height="116" rx="4" fill="rgba(13,27,94,0.06)" stroke="rgba(0,212,255,0.1)" strokeWidth="1" />
      {[0,1,2,3,4].map((b, i) => {
        const heights = [60, 80, 45, 90, 70];
        return <rect key={i} x={36 + i * 38} y={240 - heights[i]} width="24" height={heights[i]} rx="2" fill={`rgba(0,212,255,${0.15 + i * 0.05})`} />;
      })}
      {/* Table */}
      <rect x="252" y="140" width="120" height="116" rx="4" fill="rgba(13,27,94,0.06)" stroke="rgba(0,212,255,0.1)" strokeWidth="1" />
      {[0,1,2,3,4].map(i => (
        <rect key={i} x="264" y={152 + i * 20} width="96" height="10" rx="2" fill={`rgba(255,255,255,${i === 0 ? 0.1 : 0.05})`} />
      ))}
    </svg>
  );
}

function WMSGrid() {
  return (
    <svg viewBox="0 0 380 280" style={{ width: '100%', maxWidth: '380px', opacity: 0.85 }} fill="none">
      <rect x="8" y="8" width="364" height="264" rx="6" stroke="rgba(0,212,255,0.3)" strokeWidth="1.5" fill="rgba(13,27,94,0.06)" />
      <rect x="8" y="8" width="364" height="32" rx="6" fill="rgba(13,27,94,0.15)" />
      <rect x="20" y="14" width="100" height="20" rx="3" fill="rgba(255,255,255,0.08)" />
      {/* Grid cells */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 7 }).map((_, col) => {
          const filled = Math.random() > 0.35;
          return (
            <rect key={`${row}-${col}`}
              x={20 + col * 50} y={52 + row * 40}
              width="42" height="32" rx="3"
              fill={filled ? `rgba(0,212,255,${0.1 + Math.random() * 0.15})` : 'rgba(13,27,94,0.06)'}
              stroke={filled ? 'rgba(0,212,255,0.25)' : 'rgba(13,27,94,0.12)'}
              strokeWidth="1"
            />
          );
        })
      )}
      {/* Row labels */}
      {['A', 'B', 'C', 'D', 'E'].map((label, i) => (
        <text key={label} x="10" y={72 + i * 40} fontSize="9" fill="rgba(0,212,255,0.5)" fontFamily="DM Sans">{label}</text>
      ))}
    </svg>
  );
}

function MobilePhone() {
  return (
    <svg viewBox="0 0 200 360" style={{ width: '100%', maxWidth: '180px', opacity: 0.85, margin: '0 auto' }} fill="none">
      {/* Phone frame */}
      <rect x="8" y="8" width="184" height="344" rx="28" stroke="rgba(0,212,255,0.4)" strokeWidth="2" fill="rgba(13,27,94,0.1)" />
      {/* Notch */}
      <rect x="72" y="12" width="56" height="20" rx="10" fill="rgba(13,27,94,0.4)" />
      {/* Status bar */}
      <rect x="24" y="44" width="60" height="8" rx="2" fill="rgba(255,255,255,0.1)" />
      <rect x="148" y="44" width="28" height="8" rx="2" fill="rgba(0,212,255,0.2)" />
      {/* App header */}
      <rect x="16" y="64" width="168" height="36" rx="4" fill="rgba(13,27,94,0.2)" />
      <rect x="28" y="74" width="60" height="14" rx="2" fill="rgba(255,255,255,0.12)" />
      {/* Stat cards */}
      <rect x="16" y="112" width="78" height="60" rx="4" fill="rgba(13,27,94,0.1)" stroke="rgba(0,212,255,0.15)" strokeWidth="1" />
      <rect x="106" y="112" width="78" height="60" rx="4" fill="rgba(0,212,255,0.1)" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
      {/* Labels */}
      <rect x="24" y="124" width="40" height="6" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="24" y="136" width="56" height="12" rx="2" fill="rgba(0,212,255,0.3)" />
      <rect x="114" y="124" width="40" height="6" rx="1" fill="rgba(255,255,255,0.1)" />
      <rect x="114" y="136" width="56" height="12" rx="2" fill="rgba(255,255,255,0.15)" />
      {/* List items */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x="16" y={188 + i * 36} width="168" height="28" rx="4" fill="rgba(13,27,94,0.06)" stroke="rgba(0,212,255,0.08)" strokeWidth="1" />
          <circle cx="30" cy={202 + i * 36} r="6" fill="rgba(0,212,255,0.15)" />
          <rect x="44" y={197 + i * 36} width="70" height="6" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect x="44" y={207 + i * 36} width="50" height="5" rx="1" fill="rgba(255,255,255,0.06)" />
        </g>
      ))}
      {/* Bottom nav */}
      <rect x="16" y="328" width="168" height="16" rx="3" fill="rgba(13,27,94,0.2)" />
      {[0,1,2,3].map(i => <rect key={i} x={28 + i * 40} y="332" width="20" height="8" rx="2" fill={`rgba(0,212,255,${i === 0 ? 0.4 : 0.1})`} />)}
    </svg>
  );
}
