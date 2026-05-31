import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import AlifCTA from '../components/AlifCTA';

export const metadata: Metadata = {
  title: 'Our Clients',
  description: 'Businesses across Qatar, India, and the GCC that trust Alif Info Tech for their digital transformation.',
};

export default function ClientsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Clients"
        title="Trusted by Businesses\nAcross the GCC & Beyond"
        subtitle="We partner with organisations of all sizes — from ambitious SMEs to established enterprises — across Qatar, India, and the wider Gulf region."
      />

      {/* Stats strip */}
      <section style={{ padding: 'clamp(40px, 5vh, 60px) 0', borderBottom: '1px solid rgba(10,18,64,0.07)' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0', flexWrap: 'wrap' }}>
            {[{ n: '2+', label: 'Countries' }, { n: '50+', label: 'Projects Delivered' }, { n: '10+', label: 'Years of Trust' }].map((s, i, arr) => (
              <div key={s.label} style={{ display: 'flex', alignItems: 'center', flex: '1 1 140px', minWidth: '120px' }}>
                <div style={{ flex: 1, textAlign: 'center', padding: '16px 0' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 300, color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', opacity: 0.5, marginTop: '6px' }}>{s.label}</p>
                </div>
                {i < arr.length - 1 && <div style={{ width: '1px', height: '48px', background: 'var(--text)', opacity: 0.08 }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo placeholder grid */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
            <span className="section-label">A selection of clients</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--text)', opacity: 0.08 }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bracket-card" style={{
                height: '80px', background: 'rgba(13,27,94,0.04)',
                border: '1px solid rgba(13,27,94,0.08)', borderRadius: '4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'border-color 0.25s',
              }}
              >
                <span style={{ fontFamily: 'DM Sans', fontSize: '11px', letterSpacing: '0.12em', color: 'var(--text)', opacity: 0.2, textTransform: 'uppercase' }}>
                  Client {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: '24px', fontFamily: 'DM Sans', fontSize: '12px', fontStyle: 'italic', color: 'var(--text)', opacity: 0.35 }}>
            Client logos being updated — contact us for references.
          </p>
        </div>
      </section>

      {/* Testimonials placeholder */}
      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0', background: 'rgba(13,27,94,0.03)' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <span className="section-label" style={{ display: 'block', marginBottom: '12px' }}>Client Feedback</span>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', marginBottom: '40px' }}>
            What our clients say.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {[
              { text: 'Alif delivered our ERP implementation on time and within budget. Their team understood our industry-specific requirements from day one.', author: 'Operations Director', company: 'Logistics Company, Doha' },
              { text: 'The AMS system transformed how we track and manage our assets across multiple sites. The mobile app is particularly useful for our field teams.', author: 'IT Manager', company: 'Manufacturing Group, Qatar' },
              { text: 'Professional, responsive, and technically excellent. They are our go-to partner for all digital initiatives.', author: 'CEO', company: 'Services Company, GCC' },
            ].map((testimonial, i) => (
              <div key={i} className="bracket-card" style={{ background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.08)', borderRadius: '6px', padding: '32px' }}>
                <div style={{ fontSize: '28px', color: 'var(--accent)', opacity: 0.3, marginBottom: '16px', fontFamily: 'Georgia' }}>&ldquo;</div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '17px', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.7, marginBottom: '20px' }}>
                  {testimonial.text}
                </p>
                <div>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 500, color: 'var(--text)' }}>{testimonial.author}</p>
                  <p style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 300, color: 'var(--text)', opacity: 0.5 }}>{testimonial.company}</p>
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
