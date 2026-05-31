import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import AlifCTA from '../components/AlifCTA';
import { PARTNERS } from '../lib/data';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Alif Info Tech technology partners — FACT ERP, Logic ERP, Wings ERP, Roadmap ERP, Insta HIS, Autorox, and RateGain.',
};

const GROUPS = ['ERP Partner', 'HIS Partner', 'Garage Management', 'Hotel Management'];

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Technology Partners"
        title="Our Technology Partners"
        subtitle="We don't just resell software — we build deep technical alliances with the best platforms in each category."
      />

      {/* Network graph visual */}
      <section style={{ padding: 'clamp(40px, 6vh, 72px) 0 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <NetworkGraph />
        </div>
      </section>

      {/* Partners by group */}
      {GROUPS.map(group => {
        const groupPartners = PARTNERS.filter(p => p.group === group);
        if (!groupPartners.length) return null;
        return (
          <section key={group} style={{ padding: 'clamp(48px, 6vh, 72px) 0' }}>
            <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <span className="section-label">{group}</span>
                <div style={{ flex: 1, height: '1px', background: 'var(--text)', opacity: 0.07 }} />
              </div>
              <div className="partner-grid">
                {groupPartners.map(partner => (
                  <PartnerCard key={partner.id} partner={partner} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Become a partner */}
      <section style={{ padding: 'clamp(48px, 6vh, 72px) 0', background: 'rgba(13,27,94,0.03)' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', marginBottom: '16px' }}>
            Interested in becoming a partner?
          </h2>
          <p style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.8 }}>
            We work with technology companies who share our commitment to quality and customer outcomes.
          </p>
          <a href="mailto:info@alifinfotech.net?subject=Partnership Inquiry"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--accent)', color: '#0D1B5E', fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 28px', borderRadius: '2px' }}>
            Get in touch →
          </a>
        </div>
      </section>

      <AlifCTA />
    </main>
  );
}

function PartnerCard({ partner }: { partner: typeof PARTNERS[number] }) {
  return (
    <div id={partner.id} className="bracket-card"
      style={{ background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.08)', borderRadius: '6px', padding: '32px', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
    >
      {/* Logo placeholder with initials */}
      <div style={{ width: '64px', height: '64px', background: `linear-gradient(135deg, ${partner.color}, rgba(0,212,255,0.3))`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <span style={{ fontFamily: 'DM Sans', fontSize: '16px', fontWeight: 500, color: '#FFFFFF', letterSpacing: '0.04em' }}>
          {partner.name.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <h3 style={{ fontFamily: 'DM Sans', fontSize: '16px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>{partner.name}</h3>
      <span className="tag-pill" style={{ marginBottom: '14px', display: 'inline-block' }}>{partner.group}</span>
      <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.75, marginBottom: '20px' }}>{partner.oneliner}</p>
      <span style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 400, color: 'var(--accent)', letterSpacing: '0.05em' }}>Learn more →</span>
    </div>
  );
}

function NetworkGraph() {
  const nodes = [
    { x: 50, y: 50, label: 'Alif', main: true },
    { x: 18, y: 20, label: 'FACT' },
    { x: 82, y: 20, label: 'Logic' },
    { x: 5, y: 55,  label: 'Wings' },
    { x: 95, y: 55, label: 'Roadmap' },
    { x: 18, y: 82, label: 'Insta' },
    { x: 50, y: 90, label: 'Autorox' },
    { x: 82, y: 82, label: 'RateGain' },
  ];

  return (
    <svg viewBox="0 0 100 100" style={{ width: '100%', maxWidth: '480px', height: '240px', margin: '0 auto', display: 'block', opacity: 0.8 }}>
      {nodes.slice(1).map((node, i) => (
        <line key={i} x1="50" y1="50" x2={node.x} y2={node.y} stroke="rgba(0,212,255,0.25)" strokeWidth="0.5" strokeDasharray="2 1" />
      ))}
      {nodes.map((node, i) => (
        <g key={i}>
          <circle cx={node.x} cy={node.y} r={node.main ? 8 : 5} fill={node.main ? 'rgba(0,212,255,0.3)' : 'rgba(13,27,94,0.2)'} stroke={node.main ? 'rgba(0,212,255,0.6)' : 'rgba(0,212,255,0.3)'} strokeWidth="0.8" />
          {node.main && <circle cx={node.x} cy={node.y} r={12} fill="none" stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" />}
          <text x={node.x} y={node.main ? node.y + 1 : node.y + 1} textAnchor="middle" dominantBaseline="middle" fontSize={node.main ? "3.5" : "2.8"} fill={node.main ? '#00D4FF' : 'rgba(10,18,64,0.8)'} fontFamily="DM Sans" fontWeight={node.main ? '500' : '400'}>{node.label}</text>
        </g>
      ))}
    </svg>
  );
}
