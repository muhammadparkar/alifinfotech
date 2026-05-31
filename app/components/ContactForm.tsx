'use client';

import { useState } from 'react';
import { SERVICES } from '../lib/data';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link with form data
    const subject = encodeURIComponent(`Enquiry from ${form.name} — ${form.service || 'General'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:info@alifinfotech.net?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: '48px 32px', textAlign: 'center', background: 'rgba(0,212,255,0.05)', border: '1px solid rgba(0,212,255,0.2)', borderRadius: '6px' }}>
        <div style={{ fontSize: '32px', marginBottom: '16px' }}>✓</div>
        <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '26px', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', marginBottom: '8px' }}>
          Message ready to send.
        </h3>
        <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.6 }}>
          Your email client should have opened. Send the message and we&apos;ll respond within one business day.
        </p>
        <button onClick={() => setSubmitted(false)} style={{ marginTop: '20px', fontFamily: 'DM Sans', fontSize: '12px', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="form-field">
          <label className="form-label" htmlFor="contact-name">Full Name *</label>
          <input id="contact-name" name="name" type="text" required value={form.name} onChange={handleChange} className="form-input" placeholder="Your full name" />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="contact-company">Company</label>
          <input id="contact-company" name="company" type="text" value={form.company} onChange={handleChange} className="form-input" placeholder="Company name" />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div className="form-field">
          <label className="form-label" htmlFor="contact-email">Email Address *</label>
          <input id="contact-email" name="email" type="email" required value={form.email} onChange={handleChange} className="form-input" placeholder="you@company.com" />
        </div>
        <div className="form-field">
          <label className="form-label" htmlFor="contact-phone">Phone Number</label>
          <input id="contact-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} className="form-input" placeholder="+974 ..." />
        </div>
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="contact-service">Service Interested In</label>
        <select id="contact-service" name="service" value={form.service} onChange={handleChange} className="form-input" style={{ appearance: 'none', WebkitAppearance: 'none' }}>
          <option value="">Select a service...</option>
          {SERVICES.map(s => <option key={s.num} value={s.name}>{s.name}</option>)}
          <option value="General Enquiry">General Enquiry</option>
          <option value="Product Demo">Product Demo (AMS / WMS)</option>
          <option value="Partnership">Partnership</option>
        </select>
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="contact-message">Message *</label>
        <textarea id="contact-message" name="message" required value={form.message} onChange={handleChange} className="form-input form-textarea" placeholder="Tell us about your project or challenge..." />
      </div>
      <button type="submit" style={{
        background: 'var(--accent)', color: '#0D1B5E',
        fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500,
        letterSpacing: '0.15em', textTransform: 'uppercase',
        padding: '16px 32px', borderRadius: '2px', border: 'none',
        display: 'inline-flex', alignItems: 'center', gap: '8px',
        alignSelf: 'flex-start', transition: 'transform 0.2s, box-shadow 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,212,255,0.25)'; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
      >
        Send Message →
      </button>
    </form>
  );
}
