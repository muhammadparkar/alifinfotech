import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import AlifCTA from '../components/AlifCTA';
import { INDUSTRIES } from '../lib/data';

export const metadata: Metadata = {
  title: 'Industries',
  description: 'Tailored digital solutions for Projects, Waste Management, Health & Fitness, Logistics, Real Estate, Construction, Hospitality, and more.',
};

const TRADE_FEATURES = [
  'Real-time vehicle utilization display', 'Third-party integration', 'POS Management',
  'Inventory Management', 'Finance & Accounts', 'Material transfer agreement and permits',
  'Simple to configure and easy to use', 'Automated Reporting and Billing System',
  'E-approvals and Acknowledgements', 'Real-time task monitoring',
  'Maintenance and Complaint recordings', 'Digital tracking and monitoring of collections',
  'Route planning for waste collection', 'Enquiry registration',
  'Material & Job cost Analysis', 'Project wise budgets & invoicing',
  'Manpower and overheads allocations posting', 'Project status report',
  'Activity wise project progress', 'Dashboards – Reports and graphs',
  'Delivery note preparation', 'Alerts and notifications', 'Service register and billing',
];

const INDUSTRY_ICONS: Record<string, string> = {
  'Projects': `M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5`,
  'Waste Management': `M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6`,
  'Health & Fitness': `M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z`,
  'Outsourcing Services': `M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75`,
  'Logistics': `M1 3h15v13H1zM16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM18.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z`,
  'Real Estate': `M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10`,
  'Construction': `M2 20h20M6 20V10M18 20V10M12 20V4M9 8l3-4 3 4`,
  'Hospitality': `M3 11l19-9-9 19-2-8-8-2z`,
  'Garage Services': `M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z`,
};

export default function IndustriesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Industries We Serve"
        title="Versatile Solutions for\nDiverse Sectors"
        subtitle="Our adaptable approach allows us to serve a wide range of industries, delivering tailored digital solutions that address unique challenges and drive measurable results."
      />

      {/* Industry grid */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div className="industry-grid">
            {INDUSTRIES.map((industry, i) => (
              <IndustryCard key={industry.name} industry={industry} index={i} iconPath={INDUSTRY_ICONS[industry.name]} />
            ))}
          </div>
        </div>
      </section>

      {/* Trade management features */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', background: 'rgba(13,27,94,0.03)' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>Trade Management</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', marginBottom: '40px', maxWidth: '540px' }}>
            A comprehensive platform built for complex operations.
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {TRADE_FEATURES.map(feature => (
              <span key={feature} className="tag-pill" style={{ fontSize: '11px', padding: '6px 12px' }}>{feature}</span>
            ))}
          </div>
        </div>
      </section>

      <AlifCTA />
    </main>
  );
}

function IndustryCard({ industry, index, iconPath }: { industry: typeof INDUSTRIES[number]; index: number; iconPath?: string }) {
  return (
    <div className="bracket-card"
      style={{ background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.08)', borderRadius: '6px', padding: '28px', transition: 'border-color 0.3s ease, transform 0.3s ease', cursor: 'default' }}
    >
      {/* SVG icon */}
      <div style={{ width: '48px', height: '48px', background: 'rgba(0,212,255,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
        {iconPath ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d={iconPath} />
          </svg>
        ) : (
          <span style={{ fontSize: '20px', color: 'var(--accent)' }}>{industry.icon}</span>
        )}
      </div>
      <h3 style={{ fontFamily: 'DM Sans', fontSize: '15px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>{industry.name}</h3>
      <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.7 }}>{industry.desc}</p>
    </div>
  );
}
