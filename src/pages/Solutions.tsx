import { useState } from 'react'
import { ChevronRight, Check, Terminal } from 'lucide-react'

interface SolutionsProps {
  setCurrentPage: (page: string) => void;
}

export default function Solutions({ setCurrentPage }: SolutionsProps) {
  const [activeStep, setActiveStep] = useState<number>(0)

  const handleContactClick = () => {
    setCurrentPage('contact')
    window.location.hash = '#contact'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const steps = [
    {
      num: '01',
      title: 'Consultation & Audit',
      subtitle: 'Analyzing infrastructure silos',
      desc: 'Our architects audit your current databases, ERP structures, and transaction locks in Doha or Hyderabad to discover processing delays.',
      consoleOutput: `{
  "action": "INFRASTRUCTURE_AUDIT",
  "target": "Logic_ERP_Bridge",
  "status": "Scanning",
  "logs": [
    "Read latency: 310ms (High)",
    "Database index locks discovered in POS ledger",
    "Missing redundancy clusters in regional syncing"
  ]
}`
    },
    {
      num: '02',
      title: 'Architectural Blueprinting',
      subtitle: 'Designing unified APIs',
      desc: 'We design custom database schema overlays linking Wings/Roadmap ERP tables with bespoke AI pipelines and field mobile apps.',
      consoleOutput: `[Client Workstation]
       │ (React Web Console / App)
       ▼
[Cloud API Gateway]  <───> [Token Validator]
       │ (HTTPS encrypted routing)
       ├───> [Alif AMS Module] ───> [PostgreSQL Main]
       └───> [SAP/FACT ERP Bridge] ───> [Wings DB]`
    },
    {
      num: '03',
      title: 'Iterative Construction',
      subtitle: 'Bi-weekly sprint increments',
      desc: 'We build your codebase in transparent sprint intervals, dispatching active staging preview URLs so you can click and review modules.',
      consoleOutput: `commit ee9a215b (HEAD -> sprint-14, staging)
Author: Alif Dev Team <dev@alifinfotech.net>
Date:   May 2026

    feat: integrate FACT ERP purchase order webhooks
    test: validated 42 offline sync edge cases
    build: compiled Docker production image successfully`
    },
    {
      num: '04',
      title: 'Deployment & SLA Support',
      subtitle: 'Continuous support matrices',
      desc: 'Seamless cutover to live hosting with dedicated SLA developer hotlines in Doha and Hyderabad for instant help.',
      consoleOutput: `{
  "system_status": "Production_Online",
  "uptime_sla": "99.992% validated",
  "active_nodes": [
    { "region": "Qatar-East", "latency": "14ms" },
    { "region": "India-Central", "latency": "22ms" }
  ],
  "monitoring": "Active 24/7"
}`
    }
  ]

  const caseStudies = [
    {
      title: 'Enterprise ERP Consolidation',
      client: 'Major Trading & Logistics Co. (Doha, Qatar)',
      challenge: 'The client was using separate legacy inventory systems across three warehouses, creating billing lag.',
      solution: 'Deployed a synchronized database mapping Alif WMS with Roadmap ERP and Wings ERP, creating real-time stock dashboards.',
      results: ['34% reduction in order processing times', 'Zero stock discrepancies over a 6-month period', 'Real-time billing feed into finance headquarters'],
      tech: 'Roadmap ERP, Alif WMS, PostgreSQL, Docker'
    },
    {
      title: 'Integrated Medical Informatics Portal',
      client: 'Multi-specialty Clinic Network (Hyderabad, India)',
      challenge: 'Manual patient records and non-integrated lab systems delayed consultation diagnostics.',
      solution: 'Configured a cloud-hosted Insta HIS solution synchronized with custom tablet app access for doctors.',
      results: ['Patient waiting room times slashed by 45%', 'Secure HL7 compliance validation for patient data sharing', 'Instant digital prescriptions saved to central files'],
      tech: 'Insta HIS, React tablet portal, AWS Cloud, PostgreSQL'
    },
    {
      title: 'Fleet & Service Garage Automation',
      client: 'Commercial Logistics Fleet Operator (Qatar)',
      challenge: 'Preventative maintenance logs were stored in spreadsheets, leading to truck breakdowns and delays.',
      solution: 'Integrated Autorox software with Alif Asset Management System (AMS) to automate servicing logs via QR scanning.',
      results: ['21% increase in active fleet availability', 'Automated spare parts purchasing logs when stock falls below limits', 'Instant mobile check-in for drivers'],
      tech: 'Autorox API, Alif AMS, Flutter mobile utility'
    }
  ]

  return (
    <div className="relative w-full pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background gradients & overlays */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] left-[5%] w-[400px] h-[400px] bg-brand-gold/2 rounded-full blur-[150px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-3s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-24">
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Transformation Frameworks
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-offwhite">
            Architecting Powerful Business Solutions
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            We merge standard enterprise resources (FACT, Logic, Wings ERP) with bespoke AI and mobile engineering to solve concrete operational bottlenecks.
          </p>
        </div>

        {/* Deliver methodology: INTERACTIVE PANEL BUILDER */}
        <div className="space-y-12">
          <div className="text-left">
            <h2 className="text-2xl font-serif text-brand-offwhite">Our Delivery Methodology</h2>
            <p className="text-brand-gray text-[10px] font-mono mt-1 uppercase">Click the steps below to explore our database staging blueprints.</p>
          </div>

          <div className="p-6 md:p-10 rounded bg-brand-charcoal-light border border-brand-offwhite/5 glow-gold grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Steps Left Selector */}
            <div className="lg:col-span-5 space-y-3 flex flex-col justify-center">
              {steps.map((s, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded border transition-all cursor-pointer flex items-center gap-4 ${
                    activeStep === idx
                      ? 'bg-brand-charcoal border-brand-gold/20 text-brand-offwhite shadow-sm'
                      : 'bg-transparent border-transparent text-brand-gray hover:bg-brand-charcoal/20'
                  }`}
                >
                  <span className={`text-xl font-mono font-black ${activeStep === idx ? 'text-brand-gold' : 'text-brand-gray/40'}`}>
                    {s.num}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold leading-tight">{s.title}</h4>
                    <span className="text-[9px] text-brand-gray/60 font-mono block mt-0.5">{s.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Terminal Display Right */}
            <div className="lg:col-span-7 p-6 rounded bg-brand-charcoal-dark border border-brand-offwhite/5 flex flex-col justify-between relative overflow-hidden group shadow-2xl min-h-[280px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/2 rounded-full blur-2xl"></div>
              
              <div className="flex items-center justify-between border-b border-brand-offwhite/5 pb-3.5 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-brand-charcoal-light border border-brand-offwhite/10"></span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-brand-gray">
                  <Terminal className="w-3.5 h-3.5 text-brand-gold" />
                  <span>ALIF SCHEMA CONSOLE</span>
                </div>
              </div>

              {/* Description context */}
              <div className="text-xs text-brand-offwhite/90 leading-relaxed mb-4">
                {steps[activeStep].desc}
              </div>

              {/* Simulated code display */}
              <pre className="flex-grow p-4 rounded bg-brand-charcoal border border-brand-offwhite/5 font-mono text-[10px] text-brand-gold overflow-x-auto whitespace-pre leading-normal">
                {steps[activeStep].consoleOutput}
              </pre>

              <div className="pt-3 border-t border-brand-offwhite/5 mt-4 flex items-center justify-between text-[9px] font-mono text-brand-gray">
                <span>Methodology Step: {steps[activeStep].num}</span>
                <span>Audit Logs: Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Case profiles */}
        <div className="space-y-16">
          <div className="text-left space-y-2">
            <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">Operational Proof</span>
            <h2 className="text-3xl font-serif text-brand-offwhite">Proven Case Histories</h2>
            <p className="text-brand-gray text-xs max-w-lg">See how our custom systems and third-party integrations perform in the real world.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 flex flex-col justify-between hover:border-brand-gold/20 hover:bg-brand-charcoal/20 transition-all duration-300">
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-brand-gold bg-brand-gold/5 px-2.5 py-1 rounded border border-brand-gold/10 select-none">
                      {cs.tech}
                    </span>
                    <h3 className="text-xl font-serif text-brand-offwhite mt-3">{cs.title}</h3>
                    <p className="text-[10px] text-brand-gray italic">{cs.client}</p>
                  </div>

                  <div className="space-y-3 text-xs leading-relaxed">
                    <p className="text-brand-gray">
                      <strong className="text-brand-offwhite block mb-0.5 uppercase tracking-wider text-[9px] font-mono">The Challenge</strong>
                      {cs.challenge}
                    </p>
                    <p className="text-brand-gray">
                      <strong className="text-brand-offwhite block mb-0.5 uppercase tracking-wider text-[9px] font-mono">The Integration</strong>
                      {cs.solution}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <strong className="text-brand-offwhite block uppercase tracking-wider text-[9px] font-mono mb-1">Key Metrics Met</strong>
                    {cs.results.map((res, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-2 text-xs">
                        <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="text-brand-offwhite/90">{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-offwhite/5 mt-8">
                  <button
                    onClick={handleContactClick}
                    className="w-full py-3 rounded border border-brand-gold/20 hover:border-brand-gold/40 text-brand-gold text-xs font-semibold flex items-center justify-center gap-1 group transition-all"
                  >
                    Request similar system build
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Regional Alignment banner */}
        <div className="p-8 md:p-12 rounded bg-gradient-to-r from-brand-charcoal-light to-brand-charcoal-dark border border-brand-offwhite/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-xl font-serif text-brand-offwhite">Seamless Multi-Region Deployment</h3>
            <p className="text-xs text-brand-gray leading-relaxed">
              Alif Info Tech supports cross-border operations. If your company is headquartered in Qatar with manufacturing units or operational back-offices in India, we construct unified database links keeping latency to a minimum and data security synchronized.
            </p>
          </div>
          <button
            onClick={handleContactClick}
            className="px-6 py-4 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs shrink-0 cursor-pointer transition-colors"
          >
            Initiate Architecture Discussion
          </button>
        </div>
      </div>
    </div>
  )
}
