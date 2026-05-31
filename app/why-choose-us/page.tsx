import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import AlifCTA from '../components/AlifCTA';
import { DIFFERENTIATORS, PILLARS, PRINCIPLES } from '../lib/data';

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description: 'Why Alif Info Tech — customer focused, experienced staff, dual offices, process-driven, and trusted technology partnerships.',
};

export default function WhyChooseUsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Why Alif Info Tech"
        title="Driven by Purpose,\nPowered by Innovation"
        subtitle="Choosing us means partnering with a team that's committed to your success. We blend strategic thinking, creative problem-solving, and cutting-edge technology."
      />

      {/* 5 Differentiators */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '40px' }}>Our Differentiators</span>

          {DIFFERENTIATORS.map((item, i) => (
            <div key={item.num} style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(32px, 5vw, 64px) 1fr 2.5fr',
              gap: 'clamp(16px, 3vw, 48px)',
              alignItems: 'start',
              padding: 'clamp(24px, 4vh, 40px) 0',
              borderTop: '1px solid rgba(10,18,64,0.07)',
            }}>
              <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'var(--text)', opacity: 0.35, letterSpacing: '0.06em', paddingTop: '4px' }}>{item.num}</span>
              <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.2 }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: 'DM Sans', fontSize: 'clamp(13px, 1.2vw, 15px)', fontWeight: 300, color: 'var(--text)', opacity: 0.65, lineHeight: 1.85 }}>
                {item.body}
              </p>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(10,18,64,0.07)' }} />
        </div>
      </section>

      {/* 6 Pillars */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', background: 'rgba(13,27,94,0.03)' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vh, 64px)' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>Six Pillars</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)' }}>
              The foundations we build on.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {PILLARS.map((pillar, i) => (
              <div key={pillar.title} className="bracket-card"
                style={{ background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.08)', borderRadius: '6px', padding: '28px', transition: 'border-color 0.3s, transform 0.3s' }}
              >
                <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '48px', fontWeight: 300, color: 'var(--accent)', opacity: 0.2, lineHeight: 1, display: 'block', marginBottom: '8px' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '24px', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', marginBottom: '10px' }}>{pillar.title}</h3>
                <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.75 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy statement */}
      <section style={{ padding: 'clamp(48px, 6vh, 72px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <blockquote style={{
            maxWidth: '760px', margin: '0 auto', textAlign: 'center',
            borderLeft: 'none', padding: '32px',
            background: 'rgba(0,212,255,0.04)', borderRadius: '4px',
            border: '1px solid rgba(0,212,255,0.15)',
          }}>
            <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.6 }}>
              &ldquo;We are committed to delivering products &amp; services of the highest quality and user-friendly applications that meet or exceed customer expectations. Our operations are focused on continuous improvement, innovation, and customer satisfaction.&rdquo;
            </p>
            <cite style={{ display: 'block', marginTop: '16px', fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 400, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontStyle: 'normal' }}>
              — Alif Info Tech Quality Policy
            </cite>
          </blockquote>
        </div>
      </section>

      {/* 10 Core Principles */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', background: 'rgba(13,27,94,0.03)' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>Core Principles</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', marginBottom: '40px', maxWidth: '560px' }}>
            Ten commitments we make to every client.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {PRINCIPLES.map(p => (
              <div key={p.num} style={{ display: 'flex', gap: '16px', padding: '20px', background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.07)', borderRadius: '4px' }}>
                <span style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'var(--accent)', opacity: 0.6, letterSpacing: '0.06em', flexShrink: 0, paddingTop: '2px' }}>{p.num}</span>
                <div>
                  <h4 style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 500, color: 'var(--text)', marginBottom: '6px' }}>{p.title}</h4>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 300, color: 'var(--text)', opacity: 0.55, lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AlifCTA />
    </main>
  );
}
