import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import AlifCTA from '../components/AlifCTA';
import { COMPANY } from '../lib/data';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Alif Info Tech — our story, mission, vision, and offices in Doha, Qatar and Hyderabad, India.',
};

export default function AboutPage() {
  return (
    <main>
      <div data-bg="#F4F7FF" data-text="#0A1240" data-accent="#00D4FF">
        <PageHero
          eyebrow="About Alif Info Tech"
          title="Transforming Workplaces Through Vision, Values, and Innovation"
          subtitle="We help businesses grow with smart, accessible IT solutions that streamline operations, inspire innovation, and ensure lasting digital success."
        />

        {/* Our Story */}
        <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
          <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 80px)', alignItems: 'center' }}>
              <div>
                <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>Our Story</span>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Empowered People. Shared Values. Continuous Excellence.
                </h2>
                <p style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 300, color: 'var(--text)', opacity: 0.65, lineHeight: 1.85, marginBottom: '20px' }}>
                  The staff members of Alif Info Tech are responsible for the creation of the Vision, Mission, and Core Values of the organization. Team members are empowered and engaged to create the type of dynamic work environment that they are excited to be part of each day.
                </p>
                <p style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 300, color: 'var(--text)', opacity: 0.65, lineHeight: 1.85 }}>
                  From our head office in Doha, Qatar, to our technical delivery centre in Hyderabad, India — we bring together domain expertise, technological capability, and a genuine commitment to client outcomes.
                </p>
              </div>
              <div>
                <TimelineSVG />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Mission + Vision */}
      <div data-bg="#162454" data-text="#FFFFFF" data-accent="#8B5CF6">
        <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
          <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px, 5vw, 60px)' }}>
              {[
                {
                  label: 'Mission',
                  body: 'To empower micro, small, and medium businesses with modern ERP & CRM solutions, enhancing efficiency, digitalizing their business processes, and supporting better decision-making.',
                },
                {
                  label: 'Vision',
                  body: 'To lead in ERP & CRM solutions by setting new standards in efficiency, data-driven decisions, and user-friendly design — making advanced technology accessible to small businesses and driving their digital success.',
                },
                {
                  label: 'Core Values',
                  body: 'Innovation, customer centricity, and empowerment drive our team to succeed. We are constantly advancing our technology, building for the customer, and trusting teammates to do their very best work.',
                },
              ].map(item => (
                <div key={item.label} className="bracket-card" style={{ padding: '32px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '6px' }}>
                  <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>{item.label}</span>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.7 }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Offices */}
      <div data-bg="#EEF1FC" data-text="#0A1240" data-accent="#1A2E8A">
        <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
          <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>Our Offices</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', marginBottom: '40px' }}>
              Two cities, one team.
            </h2>

            {/* World map dots */}
            <WorldMapDots />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
              {Object.values(COMPANY.offices).map(office => (
                <div key={office.city} className="bracket-card" style={{ padding: '32px', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '36px', height: '36px', background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.8)" strokeWidth="1.5">
                        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>{office.label}</p>
                      <p style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>{office.city}</p>
                    </div>
                  </div>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.75 }}>
                    {office.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div data-bg="#050816" data-text="#FFFFFF" data-accent="#00D4FF">
        <AlifCTA />
      </div>
    </main>
  );
}

function TimelineSVG() {
  return (
    <svg viewBox="0 0 320 260" style={{ width: '100%', maxWidth: '320px', opacity: 0.8 }} fill="none">
      {/* Vertical timeline line */}
      <line x1="40" y1="20" x2="40" y2="240" stroke="rgba(0,212,255,0.3)" strokeWidth="1.5" />
      {/* Milestones */}
      {[
        { y: 40,  label: 'Founded', sub: 'Doha, Qatar' },
        { y: 100, label: 'Product Launch', sub: 'Alif AMS released' },
        { y: 160, label: 'Hyderabad Office', sub: 'Branch established' },
        { y: 220, label: 'Partner Network', sub: '7+ ERP partnerships' },
      ].map((m, i) => (
        <g key={i}>
          <circle cx="40" cy={m.y} r="6" fill="rgba(0,212,255,0.25)" stroke="rgba(0,212,255,0.6)" strokeWidth="1.5" />
          <circle cx="40" cy={m.y} r="3" fill="rgba(0,212,255,0.6)" />
          <line x1="46" y1={m.y} x2="70" y2={m.y} stroke="rgba(0,212,255,0.2)" strokeWidth="1" />
          <text x="76" y={m.y - 6} fontSize="12" fill="var(--text)" fontFamily="DM Sans" fontWeight="500">{m.label}</text>
          <text x="76" y={m.y + 10} fontSize="10" fill="var(--text)" opacity="0.6" fontFamily="DM Sans">{m.sub}</text>
        </g>
      ))}
    </svg>
  );
}

function WorldMapDots() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '600px', height: '160px', background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.08)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.15 }} viewBox="0 0 600 160" fill="none">
        {/* Simplified world landmass dots */}
        {Array.from({ length: 320 }).map((_, i) => {
          const x = (i % 32) * 18 + 6;
          const y = Math.floor(i / 32) * 23 + 10;
          const showDot = (x > 60 && x < 210 && y > 30 && y < 130) ||
                          (x > 240 && x < 400 && y > 20 && y < 110) ||
                          (x > 420 && x < 580 && y > 25 && y < 100);
          return showDot ? <circle key={i} cx={x} cy={y} r="2" fill="rgba(0,212,255,0.8)" /> : null;
        })}
      </svg>
      {/* Doha dot */}
      <div style={{ position: 'absolute', left: '63%', top: '45%' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(0,212,255,0.2)' }} />
        <p style={{ fontFamily: 'DM Sans', fontSize: '10px', fontWeight: 500, color: 'var(--text)', whiteSpace: 'nowrap', marginTop: '4px' }}>Doha</p>
      </div>
      {/* Hyderabad dot */}
      <div style={{ position: 'absolute', left: '70%', top: '52%' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(0,212,255,0.6)', boxShadow: '0 0 0 3px rgba(0,212,255,0.15)' }} />
        <p style={{ fontFamily: 'DM Sans', fontSize: '10px', color: 'var(--text)', opacity: 0.7, whiteSpace: 'nowrap', marginTop: '4px' }}>Hyderabad</p>
      </div>
      {/* Connection line */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 600 160" fill="none">
        <line x1="378" y1="72" x2="420" y2="83" stroke="rgba(0,212,255,0.3)" strokeWidth="1" strokeDasharray="4 2" />
      </svg>
    </div>
  );
}
