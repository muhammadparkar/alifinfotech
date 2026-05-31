import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import AlifCTA from '../components/AlifCTA';
import { SERVICES, ERP_MODULES } from '../lib/data';

export const metadata: Metadata = {
  title: 'Services',
  description: 'End-to-end digital services — AI, ERP, web, mobile, cloud, and business consultation tailored to your business goals.',
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="What We Offer"
        title="Empowering Businesses\nwith Tailored IT Solutions"
        subtitle="From custom software development to seamless cloud integration, our solutions are built around your goals — not a template."
      />

      {/* Services accordion section */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          {SERVICES.map((svc, i) => (
            <ServiceRow key={svc.num} service={svc} index={i} />
          ))}
        </div>
      </section>

      {/* Alif Studio / ERP Platform */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', background: 'rgba(13,27,94,0.03)' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(40px, 5vw, 80px)', alignItems: 'start' }}>
            <div>
              <span className="section-label" style={{ marginBottom: '16px', display: 'block' }}>Alif Studio</span>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.15, marginBottom: '20px' }}>
                AI-Powered ERP Platform
              </h2>
              <p style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 300, color: 'var(--text)', opacity: 0.65, lineHeight: 1.8, marginBottom: '24px' }}>
                An Artificial Intelligence-powered, quick-launch ERP platform providing the best enterprise resource planning solutions for businesses of all sizes.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Cloud Deployment', 'Mobile ERP', 'Third-party Integrations'].map(cap => (
                  <span key={cap} className="tag-pill">{cap}</span>
                ))}
              </div>

              {/* Circuit illustration */}
              <CircuitSVG />
            </div>

            <div>
              <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '20px' }}>
                ERP Modules
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {ERP_MODULES.map((mod, i) => (
                  <div key={mod.name} className="bracket-card"
                    style={{ background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.08)', borderRadius: '4px', padding: '16px', transition: 'border-color 0.25s ease' }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'DM Sans', fontSize: '10px', color: 'var(--accent)', opacity: 0.7 }}>{String(i + 1).padStart(2, '0')}</span>
                      <h4 style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500, color: 'var(--text)' }}>{mod.name}</h4>
                    </div>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 300, color: 'var(--text)', opacity: 0.55, lineHeight: 1.6 }}>{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alif Swift */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>Alif Swift</span>
            <blockquote style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.5 }}>
              &ldquo;A sophisticated web-based cloud ERP application designed to provide micro, small, and medium enterprises with a cost-effective and rapidly deployable alternative to manual processes.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      <AlifCTA />
    </main>
  );
}

function ServiceRow({ service, index }: { service: typeof SERVICES[number]; index: number }) {
  return (
    <div className="service-row">
      <div className="service-row-inner" style={{ cursor: 'default' }}>
        <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 300, color: 'var(--accent)', opacity: 0.3, lineHeight: 1 }}>
          {service.num}
        </span>
        <div>
          <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', marginBottom: '8px' }}>
            {service.name}
          </h3>
          <p style={{ fontFamily: 'DM Sans', fontSize: 'clamp(13px, 1.2vw, 15px)', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.75, maxWidth: '600px' }}>
            {service.desc}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
            {service.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
          </div>
        </div>
        <div style={{ flexShrink: 0 }}>
          <div className="circle-arrow-btn">
            →
          </div>
        </div>
      </div>
    </div>
  );
}

function CircuitSVG() {
  return (
    <svg style={{ marginTop: '32px', width: '100%', maxWidth: '280px', opacity: 0.7 }} viewBox="0 0 280 120" fill="none">
      <path d="M0 60 H40 V20 H100 V60 H160 V90 H220 V60 H280" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5" strokeDasharray="600" style={{ animation: 'pathDraw 4s ease-in-out infinite' }} />
      <circle cx="40" cy="20" r="4" fill="rgba(0,212,255,0.6)" />
      <circle cx="100" cy="60" r="4" fill="rgba(0,212,255,0.6)" />
      <circle cx="160" cy="90" r="4" fill="rgba(0,212,255,0.6)" />
      <circle cx="220" cy="60" r="4" fill="rgba(0,212,255,0.6)" />
      <rect x="96" y="56" width="8" height="8" stroke="rgba(0,212,255,0.4)" fill="none" />
      <rect x="216" y="56" width="8" height="8" stroke="rgba(0,212,255,0.4)" fill="none" />
      <path d="M100 20 V0 M160 20 V0" stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
      <circle cx="100" cy="0" r="2" fill="rgba(0,212,255,0.3)" />
      <circle cx="160" cy="0" r="2" fill="rgba(0,212,255,0.3)" />
    </svg>
  );
}
