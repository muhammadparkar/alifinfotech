import type { Metadata } from 'next';
import PageHero from '../components/PageHero';
import ContactForm from '../components/ContactForm';
import { COMPANY } from '../lib/data';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Alif Info Tech — Doha, Qatar: +974 6682 3215 | info@alifinfotech.net',
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's Start the Conversation"
        subtitle="We take on select projects each quarter. Tell us about your challenge and we'll respond within one business day."
      />

      <section style={{ padding: 'clamp(60px, 8vh, 100px) 0' }}>
        <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
          <div className="contact-split">
            {/* Form */}
            <div>
              <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>
                Send a message
              </p>
              <ContactForm />
            </div>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '44px' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '20px' }}>
                  Direct Contact
                </p>

                {[
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    ),
                    label: 'Phone',
                    value: COMPANY.phone,
                    href: COMPANY.tel,
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    label: 'Email',
                    value: COMPANY.email,
                    href: `mailto:${COMPANY.email}`,
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a9 9 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.122 1.528 5.855L.057 23.886a.5.5 0 0 0 .613.612l6.089-1.455A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                      </svg>
                    ),
                    label: 'WhatsApp',
                    value: '+974 6682 3215',
                    href: COMPANY.whatsapp,
                    external: true,
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,212,255,0.7)" strokeWidth="1.5">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                      </svg>
                    ),
                    label: 'LinkedIn',
                    value: 'Alif Info Tech Services WLL',
                    href: COMPANY.linkedin,
                    external: true,
                  },
                ].map(item => (
                  <a key={item.label} href={item.href} {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="contact-item"
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', padding: '16px 0', borderBottom: '1px solid rgba(10,18,64,0.06)', textDecoration: 'none' }}
                  >
                    <div style={{ width: '32px', height: '32px', background: 'rgba(0,212,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'DM Sans', fontSize: '11px', color: 'var(--text)', opacity: 0.45, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</p>
                      <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 400, color: 'var(--text)' }}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Offices */}
              <div>
                <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>
                  Our Offices
                </p>
                {Object.values(COMPANY.offices).map(office => (
                  <div key={office.city} style={{ marginBottom: '20px', padding: '16px', background: 'rgba(13,27,94,0.04)', border: '1px solid rgba(13,27,94,0.07)', borderRadius: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }} />
                      <p style={{ fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                        {office.label} — {office.city}
                      </p>
                    </div>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.65, paddingLeft: '14px' }}>
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
