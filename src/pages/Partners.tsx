import { useState } from 'react'
import { Database, Heart, Wrench, BarChart2, ExternalLink, ArrowUpRight } from 'lucide-react'

interface PartnersProps {
  setCurrentPage: (page: string) => void;
}

export default function Partners({ setCurrentPage }: PartnersProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | 'erp' | 'his' | 'garage' | 'hotel'>('all')

  const handleContactClick = () => {
    setCurrentPage('contact')
    window.location.hash = '#contact'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const partnersList = [
    {
      id: 'fact',
      category: 'erp',
      name: 'FACT ERP',
      tier: 'Gold Integration Partner',
      icon: Database,
      desc: 'FACT ERP specializes in heavy-duty manufacturing control, real-time ledger accounting, and multi-currency consolidation.',
      details: 'We implement FACT ERP configurations because their processing engine handles complex tax ledgers and inventory evaluations securely. We develop direct API layers syncing production outputs into their core ledger.',
      trustSnippet: 'Standard cross-border sync setup'
    },
    {
      id: 'logic',
      category: 'erp',
      name: 'Logic ERP',
      tier: 'Certified Retail Integrator',
      icon: Database,
      desc: 'Logic ERP handles retail stores logistics, multi-store registers, apparel size-wise stock matrix, and e-commerce feeds.',
      details: 'Alif configures Logic ERP database triggers to push updates directly to custom web portals. We build POS checkout pipelines that verify stock changes in under 50ms, preventing transaction delays.',
      trustSnippet: 'Millisecond POS adjustment sync'
    },
    {
      id: 'wings',
      category: 'erp',
      name: 'Wings ERP',
      tier: 'Strategic Mid-Market Partner',
      icon: Database,
      desc: 'Wings ERP offers streamlined inventory, trade bookkeeping, local tax calculations, and core finance ledgers.',
      details: 'We deploy Wings ERP bridges for companies that require fast VAT sync and inventory routing without the footprint of heavy software setups. We write custom database sync services keeping local ledgers in line.',
      trustSnippet: 'Lightweight ledger compliance'
    },
    {
      id: 'roadmap',
      category: 'erp',
      name: 'Roadmap ERP',
      tier: 'Authorized Systems Integrator',
      icon: Database,
      desc: 'Roadmap ERP is built for massive supply chain management, shipping logistics, and physical inventory flows.',
      details: 'Alif integrates Roadmap ERP with our proprietary Alif WMS. We write the staging layer that translates warehouse barcode checks into active inventory records on Roadmap tables, preventing manual logging errors.',
      trustSnippet: 'Dynamic pick-route mapping'
    },
    {
      id: 'insta',
      category: 'his',
      name: 'Insta HIS',
      tier: 'Clinical Systems Partner',
      icon: Heart,
      desc: 'Insta HIS is a global hospital information system covering patient records, lab diagnostics, and pharmacy inventories.',
      details: 'We configure Insta HIS databases to enable secure, HL7-compliant patient chart sharing. We construct doctor tablet interfaces that retrieve electronic health records instantly from core hospital servers.',
      trustSnippet: 'HL7-compliant medical sync'
    },
    {
      id: 'autorox',
      category: 'garage',
      name: 'Autorox Systems',
      tier: 'Certified Fleet Garage Partner',
      icon: Wrench,
      desc: 'Autorox offers automotive repair scheduling, parts stock indexing, and vehicle check logs.',
      details: 'Alif integrates Autorox with our Alif AMS (Asset Management System). When a logistics vehicle is flagged for repair, a barcode trigger is fired, generating job cards on Autorox and ordering spares when stocks run low.',
      trustSnippet: 'Automated vehicle calibration'
    },
    {
      id: 'rategain',
      category: 'hotel',
      name: 'RateGain Suite',
      tier: 'Revenue Management Integrator',
      icon: BarChart2,
      desc: 'RateGain provides automated hotel channel pricing, yield calculations, and competitor rate logs.',
      details: 'We build direct database integrations connecting RateGain data feeds with custom booking portals. Our software syncs rates dynamically, adjusting local room pricing to maximize hotel booking margins.',
      trustSnippet: 'Yield-optimizing channel sync'
    }
  ]

  const filteredPartners = activeFilter === 'all' 
    ? partnersList 
    : partnersList.filter(p => p.category === activeFilter)

  return (
    <div className="relative w-full pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background gradients */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] left-[5%] w-[400px] h-[400px] bg-brand-gold/2 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Authorized Alignments
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-offwhite">
            Strategic Software Partners
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            Alif Info Tech collaborates with the world’s most trusted enterprise database platforms to deliver certified implementation, data migration, and local support.
          </p>
        </div>

        {/* Directory Filters */}
        <div className="flex justify-start flex-wrap gap-2 py-4 border-b border-brand-offwhite/5">
          {[
            { id: 'all', label: 'All Partnerships' },
            { id: 'erp', label: 'ERP Systems' },
            { id: 'his', label: 'Clinical (Insta HIS)' },
            { id: 'garage', label: 'Fleet (Autorox)' },
            { id: 'hotel', label: 'Revenue (RateGain)' }
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActiveFilter(btn.id as 'all' | 'erp' | 'his' | 'garage' | 'hotel')}
              className={`px-5 py-2 rounded text-xs font-semibold font-mono transition-all cursor-pointer border ${
                activeFilter === btn.id
                  ? 'bg-brand-gold border-brand-gold text-brand-charcoal-dark shadow-sm'
                  : 'bg-transparent border-brand-offwhite/10 text-brand-gray hover:text-brand-offwhite hover:border-brand-offwhite/20'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px]">
          {filteredPartners.map((b) => (
            <div key={b.id} className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 hover:border-brand-gold/20 hover:bg-brand-charcoal/20 transition-all flex flex-col justify-between group glow-gold">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-brand-charcoal border border-brand-gold/10 flex items-center justify-center text-brand-gold group-hover:scale-105 transition-transform duration-300">
                      <b.icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-offwhite font-serif">{b.name}</h3>
                      <span className="text-[9px] font-mono text-brand-gold uppercase tracking-wider block mt-0.5">
                        {b.tier}
                      </span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded bg-brand-charcoal border border-brand-offwhite/5 flex items-center justify-center text-brand-gray group-hover:text-brand-gold group-hover:border-brand-gold/20 transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
                
                <div className="space-y-4 text-xs leading-relaxed text-brand-gray border-t border-brand-offwhite/5 pt-4">
                  <p>
                    <strong className="text-brand-offwhite block mb-1 font-mono text-[9px] uppercase tracking-wider">What they do</strong>
                    {b.desc}
                  </p>
                  <p>
                    <strong className="text-brand-offwhite block mb-1 font-mono text-[9px] uppercase tracking-wider font-semibold">Alif Integration Strategy</strong>
                    {b.details}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-offwhite/5 mt-6 flex justify-between items-center text-[9px] font-mono text-brand-gray">
                <span>Deploy Support: Doha & Hyderabad</span>
                <span className="text-brand-gold font-semibold uppercase bg-brand-gold/5 px-2 py-0.5 rounded border border-brand-gold/10">{b.trustSnippet}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Integration Call to Action */}
        <div className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 text-center space-y-4 pt-10">
          <h3 className="text-xl font-serif text-brand-offwhite">Need a Custom Software Integration?</h3>
          <p className="text-xs text-brand-gray max-w-xl mx-auto leading-relaxed">
            Our engineers in Doha and Hyderabad can design custom database pipelines linking your proprietary legacy modules with FACT, Logic, Wings or Insta systems.
          </p>
          <button
            onClick={handleContactClick}
            className="px-6 py-3.5 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs transition-colors cursor-pointer inline-flex items-center gap-1.5"
          >
            Inquire about ERP configurations
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
