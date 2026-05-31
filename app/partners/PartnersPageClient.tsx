'use client';

import { useState, useMemo, useEffect } from 'react';
import { PARTNERS } from '../lib/data';
import AlifCTA from '../components/AlifCTA';
import PageHero from '../components/PageHero';

const GROUPS = ['All', 'ERP Partner', 'HIS Partner', 'Garage Management', 'Hotel Management'];

// Additional technical rich data for the details drawer
const PARTNER_DETAILS: Record<string, {
  grade: string;
  hq: string;
  coverage: string[];
  modules: string[];
  features: string[];
  clients: string;
}> = {
  fact: {
    grade: 'Platinum Implementation Alliance',
    hq: 'Singapore / India',
    coverage: ['Doha, Qatar', 'Dubai, UAE', 'Riyadh, Saudi Arabia', 'Hyderabad, India'],
    modules: ['Financial Accounting', 'Material Management', 'Production Planning', 'Sales & Distribution', 'Statutory Compliance'],
    features: [
      'Multi-currency consolidation in real-time',
      'Extremely fast ledger updates with zero-lock databases',
      'Robust audit trials compliant with Qatar tax regulations',
      'Integrated logistics and supply chain tracking'
    ],
    clients: '10,000+ globally'
  },
  logic: {
    grade: 'Enterprise Solutions Partner',
    hq: 'India',
    coverage: ['Doha, Qatar', 'Hyderabad, India', 'Mumbai, India'],
    modules: ['Retail POS', 'FMCG Distribution', 'Warehouse Management', 'Merchandise Planning', 'E-commerce Connector'],
    features: [
      'Seamless multi-store retail sync and POS offline capability',
      'Omnichannel inventory tracking across digital and physical stores',
      'Built-in loyalty programs and customer CRM',
      'FMCG route planning and secondary sales tracking'
    ],
    clients: '8,500+ globally'
  },
  wings: {
    grade: 'Certified SME Platform Partner',
    hq: 'India',
    coverage: ['Hyderabad, India', 'GCC remote delivery'],
    modules: ['Accounts & Bookkeeping', 'Inventory Control', 'Payroll & HRM', 'Taxation & VAT', 'Branch Sync'],
    features: [
      'Extremely lightweight footprint for micro and small enterprises',
      'Fully automated branch data synchronization over slow networks',
      'Compliant with standard GCC VAT filing and payroll WPS files',
      'Simple, intuitive interface designed for rapid operator training'
    ],
    clients: '25,000+ SMEs'
  },
  roadmap: {
    grade: 'Certified Contracting & Infrastructure Partner',
    hq: 'India / Saudi Arabia',
    coverage: ['Doha, Qatar', 'Khobar, Saudi Arabia', 'Hyderabad, India'],
    modules: ['Project Estimation', 'Subcontractor Management', 'Equipment & Fleet Control', 'Progress Billing', 'Real Estate Leasing'],
    features: [
      'Accurate activity-based project costing and budget controls',
      'Detailed subcontractor work tracking and automated payment certificates',
      'Live fleet tracking and machine maintenance scheduling',
      'Structured milestone-based billing supporting retention tracking'
    ],
    clients: '450+ large infrastructure contractors'
  },
  insta: {
    grade: 'Enterprise Healthcare Implementation Partner',
    hq: 'India (Practo Group)',
    coverage: ['Doha, Qatar (HQ Implementation)', 'GCC Region', 'Hyderabad, India'],
    modules: ['Outpatient Dept (OPD)', 'Inpatient Dept (IPD)', 'Pharmacy & Inventory', 'Laboratory Information (LIS)', 'Patient Portal & CRM'],
    features: [
      'Fully HL7 and HIPAA compliant electronic health records (EHR)',
      'Integrated clinical dashboards for real-time doctor charts',
      'Multi-department inventory tracking for pharmaceuticals and consumable items',
      'Seamless medical insurance claims validation and Qatar WPS billing'
    ],
    clients: '1,200+ hospitals and clinics'
  },
  autorox: {
    grade: 'Exclusive Automotive Solutions Alliance',
    hq: 'India',
    coverage: ['Doha, Qatar', 'Hyderabad, India', 'GCC Region'],
    modules: ['Job Card Workshop Management', 'Spares Inventory', 'Mechanic Performance KPIs', 'Customer CRM & SMS Alerts', 'Billing & Accounts'],
    features: [
      'Digital vehicle check-in with photos and inspection check sheets',
      'Real-time mechanic efficiency and bay utilization monitoring',
      'Integrated auto spare parts database with automated re-ordering rules',
      'Automated service reminders and customer CRM via text or WhatsApp'
    ],
    clients: '2,000+ modern garages'
  },
  rategain: {
    grade: 'Premium Revenue & Travel Tech Alliance',
    hq: 'India / USA',
    coverage: ['GCC Region', 'Hyderabad, India', 'Dubai, UAE'],
    modules: ['Rate Intelligence (Optima)', 'Channel Manager (RezGain)', 'Dynamic AI Pricing', 'Brand Reputation Management', 'Demand Forecasting'],
    features: [
      'AI-powered competitor hotel rate tracking across 200+ OTA channels',
      'Millisecond inventory and room rate updates across worldwide booking channels',
      'Predictive analytics matching local events and weather to hotel demand',
      'Comprehensive review aggregation and automated sentiment response suggestions'
    ],
    clients: '25,000+ luxury hospitality brands'
  }
};

export default function PartnersPageClient() {
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPartnerId, setSelectedPartnerId] = useState<string | null>(null);
  const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null);

  // Filter partners based on tab selection and search query
  const filteredPartners = useMemo(() => {
    return PARTNERS.filter(partner => {
      const matchesGroup = selectedGroup === 'All' || partner.group === selectedGroup;
      const matchesSearch =
        partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        partner.oneliner.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesGroup && matchesSearch;
    });
  }, [selectedGroup, searchQuery]);

  // Smooth scroll and highlight helper
  const handlePartnerSelect = (partnerId: string) => {
    setSelectedPartnerId(partnerId);
    setHighlightedNodeId(partnerId);

    // Scroll to element smoothly
    setTimeout(() => {
      const el = document.getElementById(`partner-card-${partnerId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Visual cue of highlight
        el.classList.add('glowing-highlight');
        setTimeout(() => {
          el.classList.remove('glowing-highlight');
        }, 2200);
      }
    }, 100);
  };

  // Get active partner detail data
  const activePartner = useMemo(() => {
    if (!selectedPartnerId) return null;
    const base = PARTNERS.find(p => p.id === selectedPartnerId);
    if (!base) return null;
    const details = PARTNER_DETAILS[selectedPartnerId] || {
      grade: 'Authorized Technology Partner',
      hq: 'Global',
      coverage: ['GCC Region'],
      modules: ['General Core Integration'],
      features: ['Secure data pipeline', 'Seamless system interoperability'],
      clients: 'Established track record'
    };
    return { ...base, ...details };
  }, [selectedPartnerId]);

  return (
    <main>
      <div data-bg="#F4F7FF" data-text="#0A1240" data-accent="#00D4FF">
        <PageHero
          eyebrow="Technology Partners"
          title="Our Technology Partners"
          subtitle="We don't just resell software — we build deep technical alliances with the best enterprise systems in each category."
        />

        {/* Interactive Network Graph & Workspace */}
        <section style={{ padding: 'clamp(40px, 6vh, 80px) 0 20px' }}>
          <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
            <div className="workspace-layout" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '40px', alignItems: 'center' }}>
              
              {/* Interactive SVG Network Graph */}
              <div className="graph-container" style={{ padding: '32px', background: 'rgba(13,27,94,0.03)', border: '1px solid rgba(13,27,94,0.06)', borderRadius: '12px', textAlign: 'center', position: 'relative' }}>
                <span style={{ position: 'absolute', top: '16px', left: '20px', fontFamily: 'DM Sans', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.45 }}>
                  Alliance Ecosystem Map
                </span>
                <span style={{ position: 'absolute', top: '16px', right: '20px', fontFamily: 'DM Sans', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)', fontWeight: 500 }}>
                  • Interactive
                </span>
                
                <NetworkGraph 
                  highlightedId={highlightedNodeId} 
                  onHoverNode={setHighlightedNodeId} 
                  onClickNode={handlePartnerSelect}
                />
                
                <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'var(--text)', opacity: 0.45, fontStyle: 'italic', marginTop: '16px' }}>
                  Click on any partner node above to inspect capabilities and jump to their card.
                </p>
              </div>

              {/* Quick stats and instructions */}
              <div>
                <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>Ecosystem Highlights</span>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.2, marginBottom: '20px' }}>
                  Interoperability is the key to velocity.
                </h2>
                <p style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 300, color: 'var(--text)', opacity: 0.65, lineHeight: 1.8, marginBottom: '24px' }}>
                  We believe that software should talk to software. Our implementation staff are certified experts in each partner ecosystem, delivering seamless linkages with custom tools like Alif AMS and WMS.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ padding: '16px', background: 'rgba(0,212,255,0.05)', borderRadius: '6px', borderLeft: '3px solid var(--accent)' }}>
                    <h4 style={{ fontFamily: 'DM Sans', fontSize: '18px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>100%</h4>
                    <p style={{ fontFamily: 'DM Sans', fontSize: '12px', color: 'var(--text)', opacity: 0.5 }}>Compliance with local tax & regulatory standards.</p>
                  </div>
                  <div style={{ padding: '16px', background: 'rgba(0,212,255,0.05)', borderRadius: '6px', borderLeft: '3px solid var(--accent)' }}>
                    <h4 style={{ fontFamily: 'DM Sans', fontSize: '18px', fontWeight: 500, color: 'var(--text)', marginBottom: '4px' }}>Certified</h4>
                    <p style={{ padding: '16px', background: 'rgba(0,212,255,0.05)', borderRadius: '6px', borderLeft: '3px solid var(--accent)' }}>Engineers on payroll for every product ecosystem.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Directory Section with Tabs and Search */}
      <div data-bg="#0D1B5E" data-text="#FFFFFF" data-accent="#00D4FF">
        <section style={{ padding: '60px 0 clamp(60px, 8vh, 100px)' }}>
          <div className="site-container" style={{ padding: '0 clamp(20px, 5vw, 80px)' }}>
            
            {/* Controls Workspace */}
            <div className="directory-controls" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              gap: '24px', flexWrap: 'wrap', marginBottom: '40px',
              paddingBottom: '20px', borderBottom: '1px solid var(--card-border)'
            }}>
              
              {/* Search Box */}
              <div style={{ position: 'relative', flex: '1 1 280px', maxWidth: '400px' }}>
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search partners or features..."
                  style={{
                    width: '100%',
                    padding: '12px 16px 12px 42px',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    borderRadius: '6px',
                    fontFamily: 'DM Sans',
                    fontSize: '13px',
                    color: 'var(--text)',
                    outline: 'none',
                    transition: 'border-color 0.25s, box-shadow 0.25s'
                  }}
                  className="search-input"
                />
                <svg 
                  style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }}
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5, background: 'none', border: 'none', fontSize: '14px', cursor: 'pointer', color: 'var(--text)' }}
                  >
                    ✕
                  </button>
                )}
              </div>

              {/* Filter Tabs */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {GROUPS.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setSelectedGroup(tab)}
                    style={{
                      padding: '8px 16px',
                      fontFamily: 'DM Sans',
                      fontSize: '12px',
                      fontWeight: 500,
                      borderRadius: '4px',
                      border: '1px solid',
                      borderColor: selectedGroup === tab ? 'var(--accent)' : 'var(--card-border)',
                      background: selectedGroup === tab ? 'rgba(0,212,255,0.08)' : 'transparent',
                      color: selectedGroup === tab ? 'var(--accent)' : 'var(--text)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease'
                    }}
                    className="filter-tab-btn"
                  >
                    {tab === 'All' ? 'All Partners' : tab}
                  </button>
                ))}
              </div>

            </div>

            {/* Grid Output */}
            {filteredPartners.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                {filteredPartners.map(partner => {
                  const isSelected = selectedPartnerId === partner.id;
                  return (
                    <div 
                      key={partner.id} 
                      id={`partner-card-${partner.id}`} 
                      className={`bracket-card partner-tile ${isSelected ? 'selected' : ''}`}
                      onClick={() => handlePartnerSelect(partner.id)}
                      style={{ 
                        background: 'var(--card-bg)', 
                        border: '1px solid var(--card-border)', 
                        borderRadius: '6px', 
                        padding: '28px', 
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                      }}
                    >
                      {/* Left Accent indicator */}
                      <div style={{
                        position: 'absolute', top: 0, left: 0, bottom: 0, width: '4px',
                        background: partner.color, opacity: isSelected ? 1 : 0.4,
                        transition: 'opacity 0.25s'
                      }} />

                      {/* Minimalist Tech-Aligned Logo Container */}
                      <div 
                        className="partner-tile-logo"
                        style={{ 
                          width: '56px', height: '56px', 
                          background: 'var(--card-bg)', 
                          border: `1px solid ${partner.color}40`,
                          borderRadius: '6px', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          marginBottom: '20px', 
                          transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
                          boxShadow: `0 4px 16px ${partner.color}08`,
                          position: 'relative'
                        }} 
                      >
                        {/* Futuristic corner dot */}
                        <div style={{
                          position: 'absolute', top: '4px', right: '4px',
                          width: '4px', height: '4px', borderRadius: '50%',
                          background: partner.color,
                          boxShadow: `0 0 6px ${partner.color}`
                        }} />
                        <span style={{ 
                          fontFamily: 'DM Sans, system-ui, sans-serif', 
                          fontSize: '14px', 
                          fontWeight: 500, 
                          color: 'var(--text)', 
                          letterSpacing: '0.08em' 
                        }}>
                          {partner.name.slice(0, 2).toUpperCase()}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: 'DM Sans', fontSize: '16px', fontWeight: 500, color: 'var(--text)', marginBottom: '8px' }}>{partner.name}</h3>
                      <span className="tag-pill" style={{ marginBottom: '14px', alignSelf: 'flex-start' }}>{partner.group}</span>
                      <p style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: 'var(--text)', opacity: 0.6, lineHeight: 1.75, marginBottom: '24px', flexGrow: 1 }}>
                        {partner.oneliner}
                      </p>
                      
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                        <span style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.05em' }}>
                          Inspect Integration →
                        </span>
                        {isSelected && (
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 8px var(--accent)' }} />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 0', border: '1px dashed var(--card-border)', borderRadius: '12px' }}>
                <p style={{ fontFamily: 'DM Sans', fontSize: '15px', color: 'var(--text)', opacity: 0.45, marginBottom: '16px' }}>
                  No partners matches your search criteria.
                </p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedGroup('All'); }}
                  style={{
                    background: 'var(--accent)', color: '#0D1B5E', border: 'none',
                    fontFamily: 'DM Sans', fontSize: '11px', fontWeight: 500,
                    textTransform: 'uppercase', letterSpacing: '0.1em',
                    padding: '10px 20px', borderRadius: '4px', cursor: 'pointer'
                  }}
                >
                  Reset Search Filters
                </button>
              </div>
            )}

          </div>
        </section>
      </div>

      {/* Slide-out Overlay Drawer Modal */}
      {activePartner && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1000,
          background: 'rgba(10,18,64,0.5)', backdropFilter: 'blur(4px)',
          display: 'flex', justifyContent: 'flex-end',
          animation: 'fadeIn 0.25s ease-out'
        }} onClick={() => setSelectedPartnerId(null)}>
          <div 
            style={{
              width: '100%', maxWidth: '540px', height: '100%',
              background: '#F4F7FF', borderLeft: '1px solid rgba(13,27,94,0.08)',
              padding: 'clamp(32px, 5vw, 48px) clamp(24px, 4vw, 40px)',
              boxShadow: '-10px 0 40px rgba(0,0,0,0.15)',
              display: 'flex', flexDirection: 'column',
              overflowY: 'auto',
              animation: 'slideLeft 0.3s ease-out'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
              <div>
                <span style={{ fontFamily: 'DM Sans', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 500, display: 'block', marginBottom: '6px' }}>
                  {activePartner.grade}
                </span>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 300, fontStyle: 'italic', color: '#0D1B5E', lineHeight: 1.15 }}>
                  {activePartner.name}
                </h2>
              </div>
              <button 
                onClick={() => setSelectedPartnerId(null)}
                style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  border: '1px solid rgba(13,27,94,0.08)', background: 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '18px', cursor: 'pointer', color: '#0D1B5E',
                  transition: 'background 0.2s'
                }}
                className="close-drawer-btn"
              >
                ✕
              </button>
            </div>

            {/* Quick Info Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '16px', background: 'rgba(13,27,94,0.03)', border: '1px solid rgba(13,27,94,0.06)', borderRadius: '6px', marginBottom: '32px' }}>
              <div>
                <p style={{ fontFamily: 'DM Sans', fontSize: '10px', color: '#0D1B5E', opacity: 0.45, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Global Headquarters</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500, color: '#0D1B5E' }}>{activePartner.hq}</p>
              </div>
              <div>
                <p style={{ fontFamily: 'DM Sans', fontSize: '10px', color: '#0D1B5E', opacity: 0.45, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Global Installs</p>
                <p style={{ fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500, color: '#0D1B5E' }}>{activePartner.clients}</p>
              </div>
            </div>

            {/* Main oneliner */}
            <p style={{ fontFamily: 'DM Sans', fontSize: '14px', fontWeight: 300, color: '#0D1B5E', opacity: 0.8, lineHeight: 1.8, marginBottom: '32px' }}>
              {activePartner.oneliner}
            </p>

            {/* Modules */}
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontFamily: 'DM Sans', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 500, marginBottom: '14px' }}>
                Key Certified Modules
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {activePartner.modules.map(mod => (
                  <span key={mod} className="tag-pill" style={{ borderColor: 'rgba(13,27,94,0.15)', background: 'transparent', color: '#0D1B5E', fontSize: '11px', padding: '6px 12px' }}>
                    {mod}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Integration Features */}
            <div style={{ marginBottom: '40px' }}>
              <h4 style={{ fontFamily: 'DM Sans', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--accent)', fontWeight: 500, marginBottom: '16px' }}>
                Alif Custom Integration Capabilities
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activePartner.features.map((feat, index) => (
                  <li key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, marginTop: '7px' }} />
                    <span style={{ fontFamily: 'DM Sans', fontSize: '13px', fontWeight: 300, color: '#0D1B5E', opacity: 0.7, lineHeight: 1.5 }}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
              <a 
                href={`mailto:info@alifinfotech.net?subject=Partnership Query - ${activePartner.name} Integration`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  background: 'var(--accent)', color: '#0D1B5E', width: '100%',
                  fontFamily: 'DM Sans', fontSize: '12px', fontWeight: 500,
                  textTransform: 'uppercase', letterSpacing: '0.15em',
                  padding: '16px 24px', borderRadius: '2px', textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(0,212,255,0.2)'
                }}
                className="drawer-action-btn"
              >
                Inquire About Integration →
              </a>
              <p style={{ fontFamily: 'DM Sans', fontSize: '11px', color: '#0D1B5E', opacity: 0.45, textAlign: 'center', marginTop: '10px' }}>
                Average response time: 24 business hours
              </p>
            </div>

          </div>
        </div>
      )}

      <AlifCTA />
    </main>
  );
}

// ─── Network Graph Helper ──────────────────────────────────────────
function NetworkGraph({ 
  highlightedId, 
  onHoverNode, 
  onClickNode 
}: { 
  highlightedId: string | null;
  onHoverNode: (id: string | null) => void;
  onClickNode: (id: string) => void;
}) {
  const nodes = [
    { id: 'alif',     x: 50, y: 50, label: 'ALIF',    main: true,  color: '#00D4FF', glow: 'rgba(0,212,255,0.6)' },
    { id: 'fact',     x: 18, y: 20, label: 'FACT',    main: false, color: '#00D4FF', glow: 'rgba(0,212,255,0.6)' },
    { id: 'logic',    x: 82, y: 20, label: 'LOGIC',   main: false, color: '#00D4FF', glow: 'rgba(0,212,255,0.6)' },
    { id: 'wings',    x: 6,  y: 55, label: 'WINGS',   main: false, color: '#00D4FF', glow: 'rgba(0,212,255,0.6)' },
    { id: 'roadmap',  x: 94, y: 55, label: 'ROADMAP', main: false, color: '#00D4FF', glow: 'rgba(0,212,255,0.6)' },
    { id: 'insta',    x: 18, y: 82, label: 'INSTA',   main: false, color: '#8B5CF6', glow: 'rgba(139,92,246,0.6)' }, // AI Purple
    { id: 'autorox',  x: 50, y: 90, label: 'AUTOROX', main: false, color: '#00FFB2', glow: 'rgba(0,255,178,0.6)' },  // Electric Green
    { id: 'rategain', x: 82, y: 82, label: 'RATEGAIN',main: false, color: '#00FFB2', glow: 'rgba(0,255,178,0.6)' },  // Electric Green
  ];

  return (
    <svg viewBox="0 0 100 100" style={{ width: '100%', maxWidth: '480px', height: '260px', margin: '0 auto', display: 'block', overflow: 'visible' }}>
      {/* Connections (Lines) */}
      {nodes.slice(1).map((node, i) => {
        const isActiveConnection = highlightedId === node.id;
        return (
          <line 
            key={i} 
            x1="50" y1="50" 
            x2={node.x} y2={node.y} 
            stroke={isActiveConnection ? node.color : 'rgba(13,27,94,0.15)'} 
            strokeWidth={isActiveConnection ? '0.8' : '0.4'} 
            strokeDasharray={isActiveConnection ? 'none' : '2 1'} 
            style={{ 
              transition: 'stroke 0.25s, stroke-width 0.25s',
              filter: isActiveConnection ? `drop-shadow(0 0 4px ${node.color})` : 'none'
            }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => {
        const isMain = node.main;
        const isHighlighted = highlightedId === node.id;
        
        return (
          <g 
            key={node.id} 
            onClick={() => !isMain && onClickNode(node.id)}
            onMouseEnter={() => !isMain && onHoverNode(node.id)}
            onMouseLeave={() => !isMain && onHoverNode(null)}
            style={{ cursor: isMain ? 'default' : 'pointer' }}
          >
            {/* Outer rings */}
            {isMain && (
              <circle 
                cx={node.x} cy={node.y} r={12} 
                fill="none" 
                stroke="rgba(0,212,255,0.15)" strokeWidth="0.5" 
              />
            )}
            
            {/* Glowing active outline */}
            {isHighlighted && (
              <circle 
                cx={node.x} cy={node.y} r={isMain ? 9.5 : 6.5} 
                fill="none" 
                stroke={node.color} strokeWidth="0.8" 
                style={{ 
                  animation: 'pingGlow 1.5s infinite ease-in-out',
                  filter: `drop-shadow(0 0 6px ${node.color})`
                }}
              />
            )}

            <circle 
              cx={node.x} cy={node.y} 
              r={isMain ? 8 : 4.5} 
              fill={isMain ? 'rgba(0,212,255,0.25)' : isHighlighted ? node.color : 'rgba(13,27,94,0.15)'} 
              stroke={isMain ? 'rgba(0,212,255,0.7)' : isHighlighted ? '#0D1B5E' : 'rgba(13,27,94,0.25)'} 
              strokeWidth="0.6" 
              style={{ 
                transition: 'fill 0.25s, stroke 0.25s',
                filter: isHighlighted ? `drop-shadow(0 0 6px ${node.color})` : 'none'
              }}
            />
            
            <text 
              x={node.x} y={node.y + 0.8} 
              textAnchor="middle" 
              dominantBaseline="middle" 
              fontSize={isMain ? "3.2" : "2.5"} 
              fill={isMain ? '#00D4FF' : isHighlighted ? '#0D1B5E' : '#0D1B5E'} 
              fontFamily="DM Sans" 
              fontWeight={isMain || isHighlighted ? '500' : '400'}
              style={{ transition: 'fill 0.25s, font-weight 0.25s', pointerEvents: 'none' }}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
