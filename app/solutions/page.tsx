import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import AlifCTA from '../components/AlifCTA';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Performance, security, and AI-powered solutions for smarter businesses.',
};

const PERFORMANCE_FEATURES = [
  { name: 'AI Integration', desc: 'Enhance applications with cutting-edge AI that boosts automation, decision-making, and user experience.' },
  { name: 'MySQL Optimization', desc: 'Database always optimized and running efficiently without manual setup or monitoring.' },
  { name: 'Application Performance Monitoring', desc: 'Track and fix slow processes and queries — no external monitoring tools needed.' },
  { name: 'Image Optimization', desc: 'Convert and compress images to modern formats like WebP to improve site performance and load speed.' },
  { name: 'Edge Caching', desc: 'Cache pages closer to users. Reduce Time To First Byte by up to 50%.' },
  { name: 'Early Hints', desc: 'Preload essential resources like styles and scripts before the page fully loads.' },
] as const;

const SECURITY_FEATURES = [
  { name: 'Security Vulnerability Alerts', desc: 'Timely notifications about security vulnerabilities with actionable steps to address them.' },
  { name: 'Multiple Backup Options', desc: 'Automatic daily, manual, system-generated, and downloadable backups — always protected.' },
  { name: 'Secure Remote Access', desc: 'Log in remotely over SSH or SFTP. Supports WP-CLI, Git, Composer, and server cron jobs.' },
  { name: 'WAF with DDoS Protection', desc: 'Secured behind Cloudflare with Enterprise DDoS protection and Google Cloud firewall.' },
  { name: 'Free Malware Removal', desc: 'Malware removal specialists help undo damage caused by hackers at no additional cost.' },
  { name: 'Access Management', desc: 'Create unlimited users and grant each one precisely the access level they need.' },
] as const;

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Solutions"
        title="Smart Solutions for\nSmarter Businesses"
        subtitle="Discover a powerful suite of web, app, and cloud solutions designed to elevate business efficiency. From custom development to enterprise tools, we have your growth covered."
      />

      {/* Performance section */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px, 5vw, 80px)', marginBottom: 'clamp(48px, 6vh, 72px)', alignItems: 'end' }}>
            <div>
              <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>Performance</span>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.15 }}>
                Built for speed,<br />optimized for scale.
              </h2>
            </div>
            <p style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.8 }}>
              Every solution we deliver is engineered for performance from day one. We eliminate bottlenecks before they reach production.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {PERFORMANCE_FEATURES.map((feat, i) => (
              <FeatureCard key={feat.name} feature={feat} index={i} icon={PERF_ICONS[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Security section */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', background: 'rgba(13,27,94,0.03)' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(32px, 5vw, 80px)', marginBottom: 'clamp(48px, 6vh, 72px)', alignItems: 'end' }}>
            <div>
              <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>Security</span>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.15 }}>
                Secure Your Business<br />with Real Protection.
              </h2>
            </div>
            <div>
              <p style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.8, marginBottom: '16px' }}>
                ALIF is SOC 2 compliant, focused on protecting your operations with enterprise-grade security baked into every aspect of our managed solutions.
              </p>
              {/* SOC2 badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 16px', background: 'rgba(0,212,255,0.07)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '4px' }}>
                <ShieldSVG />
                <span style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>SOC 2 Compliant</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {SECURITY_FEATURES.map((feat, i) => (
              <FeatureCard key={feat.name} feature={feat} index={i} icon={SEC_ICONS[i]} />
            ))}
          </div>
        </div>
      </section>

      <AlifCTA />
    </main>
  );
}

const PERF_ICONS = ['◈', '⬡', '◎', '◇', '▷', '△'];
const SEC_ICONS  = ['◉', '□', '◈', '⬡', '◇', '▷'];

function FeatureCard({ feature, index, icon }: { feature: { name: string; desc: string }; index: number; icon: string }) {
  return (
    <div className="bracket-card"
      style={{ background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.08)', borderRadius: '6px', padding: '28px', transition: 'border-color 0.3s ease, transform 0.3s ease' }}
    >
      <div style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--accent)' }}>{icon}</div>
      <h3 style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '10px' }}>{feature.name}</h3>
      <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.75 }}>{feature.desc}</p>
    </div>
  );
}

function ShieldSVG() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#00D4FF" strokeWidth="1.5" fill="rgba(0,212,255,0.1)" />
      <path d="M9 12l2 2 4-4" stroke="#00D4FF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
