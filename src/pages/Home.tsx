import { useState, useEffect } from 'react'
import { ArrowRight, ChevronRight, CheckCircle2, Shield, Brain, Smartphone, Database, Cloud, LineChart, Code, Check, Cpu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { CornerMarkers, HeroDecorationBars } from '../components/TwentyDesignSystem'

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

interface StatCounterProps {
  value: string;
  label: string;
}

// Count-up animation for stats bar using twenty.com font stack
function StatCounter({ value, label }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const target = parseInt(value.replace(/\D/g, ''))
  const suffix = value.replace(/\d/g, '')

  useEffect(() => {
    let start = 0
    const end = target
    const duration = 1200
    const increment = Math.ceil(end / (duration / 16))
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-left group relative p-6 border-l border-[#D8D8D4] first:border-0 font-sans">
      <div className="text-4xl md:text-5xl font-bold text-[#0055FF] tracking-tight group-hover:translate-x-0.5 transition-transform duration-300">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] text-[#6B6B6B] uppercase tracking-wider font-bold mt-2">
        {label}
      </div>
    </div>
  )
}

export default function Home({ setCurrentPage }: HomeProps) {
  // Framer Motion entry variants for a premium look
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 14,
      }
    }
  } as const;

  const mockupVariants = {
    hidden: { opacity: 0, y: 35, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 45,
        damping: 15,
        delay: 0.7,
      }
    }
  } as const;

  // Scroll reveal variants
  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 50,
        damping: 15,
      }
    }
  } as const;

  const [activeServiceTab, setActiveServiceTab] = useState('ai')
  const [activeProductTab, setActiveProductTab] = useState('ams')
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>('AST-9021')
  const [wmsActiveBin, setWmsActiveBin] = useState<string>('A1-01')
  const [mobileScreen, setMobileScreen] = useState<'scan' | 'signature'>('scan')
  const [scanActive, setScanActive] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleLinkClick = (page: string) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '' : `#${page}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true)
      setTimeout(() => {
        setFormSubmitted(false)
        setFormData({ name: '', email: '', phone: '', message: '' })
      }, 5000)
    }
  }

  const servicesList = [
    {
      id: 'ai',
      title: 'AI Solutions',
      subtitle: 'Cognitive Automation & NLP',
      desc: 'We train and deploy custom machine learning models, predictive intelligence dashboards, and NLP modules designed to automate heavy core operations.',
      icon: Brain,
      tech: 'Python, PyTorch, OpenAI API, AWS SageMaker',
      bullets: ['Custom predictive modeling', 'NLP document classifications', 'Computer vision integrations']
    },
    {
      id: 'web-app',
      title: 'Web Application Engineering',
      subtitle: 'Robust Cloud Architectures',
      desc: 'Highly interactive enterprise interfaces built to execute complex database operations. Responsive, tested, and optimized for low-latency queries.',
      icon: Code,
      tech: 'React, Node.js, TypeScript, PostgreSQL',
      bullets: ['Secure multi-tenant SaaS structures', 'Real-time database dashboards', 'Bespoke API development']
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      subtitle: 'Offline-First Operations',
      desc: 'Native and hybrid iOS/Android applications mapping signature sign-offs, barcode sweeps, and GPS geotag data directly into headquarters.',
      icon: Smartphone,
      tech: 'Flutter, React Native, SQLite caches',
      bullets: ['Camera scanning widgets', 'Offline data sync buffers', 'Enterprise compliance parameters']
    },
    {
      id: 'erp',
      title: 'ERP / CRM Implementations',
      subtitle: 'Strategic Database Sync',
      desc: 'Certified alignment with FACT, Logic, Wings, and Roadmap ERP. We build isolated bridge tables to sync inventories, sales ledgers, and inventories.',
      icon: Database,
      tech: 'SAP, FACT ERP, Logic, Custom SQL Bridges',
      bullets: ['Real-time stock ledger syncing', 'DMS paperless databases', 'Insta HIS medical informatics']
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions & DevOps',
      subtitle: 'Ironclad Infrastructure',
      desc: 'Automated CI/CD deployment pipelines, infrastructure as code staging networks, and auto-scaling container configurations on secure cloud walls.',
      icon: Cloud,
      tech: 'Terraform, Docker, Kubernetes, AWS',
      bullets: ['Auto-scaling server nodes', 'Isolated database clusters', 'Vulnerability log sweeps']
    },
    {
      id: 'consulting',
      title: 'Business Consultation',
      subtitle: 'Legacy Architecture Audits',
      desc: 'Detailed audits of legacy code databases, query bottlenecks, and cloud structures. We map out clean migration pipelines and SLA frameworks.',
      icon: LineChart,
      tech: 'Agile Frameworks, ITIL Audit, Compliance Mapping',
      bullets: ['Query load optimizations', 'Infrastructure cost reviews', 'Security patch recommendations']
    }
  ]

  const partnersList = [
    { name: 'FACT ERP', purpose: 'Manufacturing & Ledger sync', reason: 'Alif configures FACT bridges for automated currency ledger consolidation across Qatari trading hubs.' },
    { name: 'Logic ERP', purpose: 'Multi-Store POS Integration', reason: 'Used to synchronize sales inventory levels in real-time across POS terminals and retail centers.' },
    { name: 'Wings ERP', purpose: 'Mid-Market Logistics sync', reason: 'Ideal for rapid VAT accounting integrations and small warehouse inventory tracking.' },
    { name: 'Roadmap ERP', purpose: 'Heavy-Industry Operations', reason: 'Configured for complex supply chain schedules and physical inventory dispatching logs.' },
    { name: 'Insta HIS', purpose: 'Clinical Information Portal', reason: 'We implement Insta HIS solutions for HL7-compliant patient records and pharmacy database linkages.' },
    { name: 'Autorox Systems', purpose: 'Fleet Garage Automation', reason: 'Integrated with Alif AMS to automate mechanic task dispatches via QR codes.' },
    { name: 'RateGain Suite', purpose: 'Hospitality Channel Pricing', reason: 'Bridges OTA channels with custom hotel pricing panels to maximize booking yield.' }
  ]

  return (
    <div className="relative w-full overflow-hidden bg-[#F5F4F0] text-[#1A1A1A]">
      {/* Background spotlights & Grid Pattern overlays */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[100vh] radial-spotlight pointer-events-none z-0"></div>

      {/* 1. HERO SECTION (Premium Centered Editorial Style) */}
      <section className="relative w-full border-b border-[#D8D8D4] z-10 overflow-hidden">
        <HeroDecorationBars side="both" />
        
        <div className="relative max-w-[1000px] mx-auto px-6 py-20 lg:py-28 text-center">
          <CornerMarkers />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-[800px] mx-auto flex flex-col items-center gap-6 mt-4"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 select-none">
              <div className="w-[14px] h-[6px] bg-[#0055FF] rounded-[1px]" />
              <span className="font-sans text-[13px] font-bold text-[#1A1A1A] tracking-tight uppercase">
                IT Solutions WLL | Doha (HQ) & Hyderabad
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="twenty-serif text-[42px] sm:text-[60px] md:text-[76px] lg:text-[84px] leading-[1.05] tracking-[-0.03em] text-[#1A1A1A] font-normal text-center">
              We architect <em className="italic font-normal">high-performance</em> digital systems.
            </motion.h1>

            <motion.p variants={itemVariants} className="font-sans text-[15px] sm:text-[18px] leading-[1.65] text-[#6B6B6B] max-w-[620px] text-center mt-2">
              Alif Info Tech engineers reliable database systems, certified ERP integrations, custom cloud applications, and AI pipelines to optimize B2B workflows across the Gulf region and India.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-3 pt-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLinkClick('solutions')}
                className="h-[40px] px-6 bg-[#1A1A1A] text-white text-[11px] font-bold tracking-[0.12em] rounded-[3px] hover:bg-[#2e2e2e] transition-all cursor-pointer uppercase shadow-[3px_3px_0px_rgba(26,26,26,0.15)] flex items-center justify-center gap-1.5"
              >
                <span>Explore Solutions Blueprints</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleLinkClick('contact')}
                className="h-[40px] px-6 bg-transparent text-[#1A1A1A] border border-[#1A1A1A] text-[11px] font-bold tracking-[0.12em] rounded-[3px] hover:bg-[#1A1A1A]/5 transition-all cursor-pointer uppercase flex items-center justify-center"
              >
                Request Consultation
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Browser Interface Mockup - Representing Alif Core Dashboard */}
          <motion.div 
            variants={mockupVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 w-full max-w-[860px] mx-auto bg-white border border-[#D8D8D4] rounded-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden text-left relative z-10"
          >
            <div className="absolute top-0 right-0 w-36 h-36 dither-pattern pointer-events-none" />
            
            {/* Apple header style */}
            <div className="bg-[#EBEBEB] border-b border-[#D8D8D4] px-4 py-3 flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FF5F56]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFBD2E]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#27C93F]" />
              </div>
              <div className="text-[11px] font-bold tracking-wider text-[#6B6B6B] uppercase font-sans">
                ALIF CORE SYSTEM GATEWAY // DOHA CONSOLE
              </div>
              <div className="w-10" />
            </div>

            {/* Core system status table mockup */}
            <div className="p-6 overflow-x-auto scrollbar-none font-sans text-xs text-left">
              <div className="flex items-center justify-between pb-4 border-b border-[#D8D8D4] mb-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-[14px] text-[#1A1A1A]">Enterprise Database Cluster</span>
                  <span className="bg-[#EBEBEB] text-[#0055FF] px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase">Active</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold text-[#6B6B6B] uppercase">DOHA NETWORK RELAY: OK</span>
                </div>
              </div>

              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-[#D8D8D4]/60 text-[#6B6B6B] text-[10px] uppercase font-bold tracking-wider">
                    <th className="py-2.5 text-left font-bold">INTEGRATED ENDPOINT</th>
                    <th className="py-2.5 text-left font-bold">SYNC MECHANIC</th>
                    <th className="py-2.5 text-left font-bold">LATEST LEDGER RECORD</th>
                    <th className="py-2.5 text-left font-bold">STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { endpoint: 'FACT ERP Bridge', sync: 'Automated Consolidation', ledger: 'Q2 Consolidated Ledger', status: 'SYNCD' },
                    { endpoint: 'Logic Multi-Store POS', sync: 'Real-time Stock Buffers', ledger: 'Stock Level Sync #9021', status: 'SYNCD' },
                    { endpoint: 'Autorox Fleet Garage', sync: 'QR Mechanic Dispatch Logs', ledger: 'Job Dispatch AST-9021', status: 'SYNCD' },
                    { endpoint: 'Insta HIS Clinic Portal', sync: 'HL7 Medical Informatics', ledger: 'Patient Check-in AST-8812', status: 'COMPLIANT' }
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[#D8D8D4]/40 hover:bg-[#F5F4F0]/50 transition-colors">
                      <td className="py-3 font-bold text-[#1A1A1A] flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-[#0055FF] rounded-[2px]" />
                        {row.endpoint}
                      </td>
                      <td className="py-3 text-[#6B6B6B]">{row.sync}</td>
                      <td className="py-3 font-semibold text-[#1A1A1A]">{row.ledger}</td>
                      <td className="py-3">
                        <span className="px-2.5 py-0.5 bg-[#0055FF]/10 text-[#0055FF] border border-[#0055FF]/20 rounded-full font-bold text-[9px] uppercase tracking-wider">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR (Precise Monospace Design) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="bg-[#EBEBEB]/50 py-10 px-6 border-b border-[#D8D8D4] text-center relative select-none"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value="10+" label="Years Active Operations" />
            <StatCounter value="250+" label="Deployments Completed" />
            <StatCounter value="150+" label="Enterprise Engagements" />
            <StatCounter value="7+" label="Standard ERP Integrators" />
          </div>
        </div>
      </motion.section>

      {/* 3. SERVICES SECTION (Desktop Accordion, Mobile Horizontal Scroll) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="relative py-24 px-6 z-10 border-b border-[#D8D8D4]"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 select-none">
                <div className="w-[14px] h-[6px] bg-[#0055FF] rounded-[1px]" />
                <span className="font-sans text-[13px] font-bold text-[#1A1A1A] tracking-tight">
                  ENGINEERING CAPABILITIES
                </span>
              </div>
              <h2 className="twenty-serif text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] leading-[1.1] text-[#1A1A1A] font-normal tracking-[-0.02em]">
                Bespoke Systems Architecture
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                onClick={() => handleLinkClick('services')}
                className="text-[#0055FF] hover:text-[#3377FF] text-xs font-bold font-sans tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer group lg:justify-end uppercase"
              >
                VIEW DETAILED CAPABILITIES
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Desktop view: Accordion Detail Selection */}
          <div className="hidden md:grid grid-cols-12 gap-8 items-start min-h-[380px]">
            {/* Accordion Left Tabs */}
            <div className="col-span-5 space-y-2">
              {servicesList.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setActiveServiceTab(svc.id)}
                  className={`w-full text-left p-5 rounded-[6px] border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    activeServiceTab === svc.id
                      ? 'bg-white border-[#D8D8D4] text-[#1A1A1A] shadow-sm'
                      : 'bg-transparent border-transparent text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#EBEBEB]/40'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <svc.icon className={`w-5 h-5 ${activeServiceTab === svc.id ? 'text-[#0055FF]' : 'text-[#6B6B6B]/60'}`} />
                    <div>
                      <h4 className="text-sm font-bold leading-tight">{svc.title}</h4>
                      <span className="text-[9px] text-[#6B6B6B] font-mono block mt-0.5 uppercase tracking-wider">{svc.subtitle}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeServiceTab === svc.id ? 'translate-x-0.5 text-[#0055FF]' : 'text-[#6B6B6B]/40'}`} />
                </button>
              ))}
            </div>

            {/* Accordion Right Expanded Context */}
            <div className="col-span-7 p-8 rounded-[10px] bg-white border border-[#D8D8D4] min-h-[380px] flex flex-col justify-between relative shadow-[0_10px_30px_rgba(0,0,0,0.02)] overflow-hidden">
              {/* Corner markers inside card */}
              <CornerMarkers />
              <div className="absolute top-0 right-0 w-32 h-32 dither-pattern pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {servicesList.map((svc) => {
                  if (svc.id !== activeServiceTab) return null;
                  return (
                    <motion.div
                      key={svc.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="space-y-6 flex-grow flex flex-col justify-between relative z-10"
                    >
                      <div className="space-y-2 text-left">
                        <span className="text-[9px] font-bold text-[#0055FF] bg-[#0055FF]/10 px-2.5 py-1 rounded-full border border-[#0055FF]/25 uppercase tracking-wider">
                          {svc.tech}
                        </span>
                        <h3 className="twenty-serif text-2xl text-[#1A1A1A] pt-4 leading-tight">{svc.title}</h3>
                        <p className="text-xs text-[#6B6B6B] leading-relaxed max-w-xl">{svc.desc}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#D8D8D4]/60 text-left">
                        {svc.bullets.map((bullet, idx) => (
                          <div key={idx} className="p-3.5 rounded-[4px] bg-[#F5F4F0] border border-[#D8D8D4] flex items-start gap-2.5">
                            <Check className="w-3.5 h-3.5 text-[#0055FF] shrink-0 mt-0.5" />
                            <span className="text-[11px] text-[#1A1A1A] font-semibold leading-snug">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 flex items-center justify-between">
                        <span className="text-[10px] text-[#6B6B6B] font-bold uppercase tracking-wider">Deployment Matrix: Qatar & India Staging</span>
                        <button
                          onClick={() => handleLinkClick('services')}
                          className="h-[32px] px-3.5 bg-[#1A1A1A] text-white text-[12px] font-semibold tracking-[0.06em] rounded-[4px] hover:bg-[#1A1A1A]/90 active:scale-95 transition-all cursor-pointer uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_rgba(26,26,26,0.15)]"
                        >
                          Technical Scope Specs
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile view: Swipeable Horizontal Card List */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-4 scrollbar-none">
            {servicesList.map((svc) => (
              <div
                key={svc.id}
                onClick={() => handleLinkClick('services')}
                className="min-w-[280px] max-w-[280px] p-6 rounded-[8px] bg-white border border-[#D8D8D4] space-y-4 flex flex-col justify-between text-left shadow-[0_4px_12px_rgba(0,0,0,0.02)] relative"
              >
                <CornerMarkers />
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-[4px] bg-[#F5F4F0] border border-[#D8D8D4] flex items-center justify-center text-[#0055FF]">
                    <svc.icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-[#1A1A1A]">{svc.title}</h3>
                  <span className="text-[9px] text-[#0055FF] font-bold uppercase tracking-wider block -mt-1">{svc.subtitle}</span>
                  <p className="text-xs text-[#6B6B6B] leading-relaxed">{svc.desc}</p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0055FF] flex items-center gap-1">
                  Scope Parameters <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. PRODUCT PLATFORMS (Distinct Personalities & Mockups) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="relative py-24 px-6 z-10 border-b border-[#D8D8D4] bg-[#EBEBEB]/30"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-left space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 select-none">
              <div className="w-[14px] h-[6px] bg-[#0055FF] rounded-[1px]" />
              <span className="font-sans text-[13px] font-bold text-[#1A1A1A] tracking-tight uppercase">
                Alif Software Core
              </span>
            </div>
            <h2 className="twenty-serif text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] leading-[1.1] text-[#1A1A1A] font-normal tracking-[-0.02em]">
              Proprietary Platform Ecosystems
            </h2>
            <p className="text-[#6B6B6B] text-xs md:text-sm">
              We design specialized workflow tools ready for B2B deployment and customization. Click each tab to inspect live configuration schemas.
            </p>
          </div>

          {/* Product Tabs */}
          <div className="flex border-b border-[#D8D8D4] overflow-x-auto scrollbar-none whitespace-nowrap">
            {[
              { id: 'ams', name: 'Alif AMS (Asset Management)' },
              { id: 'wms', name: 'Alif WMS (Warehouse Control)' },
              { id: 'mobile', name: 'Alif Workflows Mobile App' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={(e) => {
                  setActiveProductTab(t.id)
                  ;(e.currentTarget as HTMLButtonElement).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
                }}
                className={`py-4 px-6 text-xs font-bold font-sans tracking-wider transition-all border-b-2 cursor-pointer shrink-0 uppercase ${
                  activeProductTab === t.id
                    ? 'border-[#0055FF] text-[#0055FF]'
                    : 'border-transparent text-[#6B6B6B] hover:text-[#1A1A1A]'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active Product Panel Showcase */}
          <div className="p-8 rounded-[12px] bg-white border border-[#D8D8D4] shadow-[0_10px_40px_rgba(0,0,0,0.02)] overflow-hidden relative text-left">
            <CornerMarkers />
            <div className="absolute top-0 right-0 w-36 h-36 dither-pattern pointer-events-none" />

            <AnimatePresence mode="wait">
              {activeProductTab === 'ams' && (
                <motion.div
                  key="ams"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
                >
                  <div className="lg:col-span-6 space-y-6">
                    <div className="text-[9px] font-bold text-[#0055FF] bg-[#0055FF]/10 px-2.5 py-1 rounded-full border border-[#0055FF]/25 uppercase tracking-wider inline-block">
                      Module: Calibration & Licensing audits
                    </div>
                    <h3 className="twenty-serif text-2xl sm:text-3xl text-[#1A1A1A]">Alif Asset Management System</h3>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      A consolidated audit log tracking local desktop nodes, server instances, company laptops, and vehicle fleets. Syncs depreciation indexes automatically using IFRS and regional tax policies.
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#1A1A1A]">
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> QR/Barcode label scanner integrations.
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> Auto alerts on software license expirations.
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> Preventative hardware maintenance calendars.
                      </li>
                    </ul>
                    <button
                      onClick={() => handleLinkClick('products')}
                      className="h-[36px] px-4 bg-[#1A1A1A] text-white text-[11px] font-bold tracking-[0.12em] rounded-[3px] hover:bg-[#2e2e2e] active:scale-[0.98] transition-all cursor-pointer uppercase shadow-[3px_3px_0px_rgba(26,26,26,0.15)]"
                    >
                      Request AMS Demo Access
                    </button>
                  </div>

                  {/* AMS High Fidelity mockup */}
                  <div className="lg:col-span-6 p-5 rounded-[8px] bg-[#F5F4F0] border border-[#D8D8D4] font-sans text-[10px] space-y-4 shadow-sm">
                    <div className="flex justify-between items-center border-b border-[#D8D8D4] pb-3">
                      <span className="text-[#0055FF] text-[9px] font-bold tracking-wider">AMS CORE LEDGER // STABLE</span>
                      <span className="text-[8px] text-[#6B6B6B] font-mono">UPDATED: JUST NOW</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { id: 'AST-9021', name: 'Doha Rack Node B1', type: 'Server Node', status: 'Optimal' },
                        { id: 'AST-8812', name: 'Hitech Node C4', type: 'Dev VM Cluster', status: 'Calibration' },
                        { id: 'AST-7431', name: 'HQ Dev Node 18', type: 'Workstation Mac', status: 'Optimal' }
                      ].map((asset) => (
                        <div
                          key={asset.id}
                          onClick={() => setSelectedAssetId(asset.id)}
                          className={`p-2.5 rounded-[4px] border transition-colors cursor-pointer flex justify-between ${
                            selectedAssetId === asset.id ? 'bg-white border-[#0055FF]/40 text-[#0055FF] font-semibold' : 'border-[#D8D8D4] bg-white text-[#6B6B6B] hover:bg-[#F5F4F0]'
                          }`}
                        >
                          <span>{asset.id} - {asset.name}</span>
                          <span className={`w-1.5 h-1.5 rounded-full self-center ${asset.status === 'Optimal' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                        </div>
                      ))}
                    </div>
                    {selectedAssetId && (
                      <div className="p-3 rounded-[4px] bg-white border border-[#D8D8D4] text-[9px] text-[#1A1A1A] space-y-1">
                        <div className="font-bold">SPEC: 2.8GHz 24-Core / 128GB RAM</div>
                        <div className="text-[#6B6B6B]">Audit sync status: Standard compliance verified by Doha HQ auditor.</div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {activeProductTab === 'wms' && (
                <motion.div
                  key="wms"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
                >
                  <div className="lg:col-span-6 space-y-6">
                    <div className="text-[9px] font-bold text-[#0055FF] bg-[#0055FF]/10 px-2.5 py-1 rounded-full border border-[#0055FF]/25 uppercase tracking-wider inline-block">
                      Module: FIFO Warehousing Dispatch
                    </div>
                    <h3 className="twenty-serif text-2xl sm:text-3xl text-[#1A1A1A]">Alif Warehouse Management System</h3>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      Designed to control stock routes, coordinate pick schedules, and check dispatch latency. Direct link logs automatically feed into third-party inventories like Logic or Wings ERP.
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#1A1A1A]">
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> Auto Pick Route algorithms for staff walks.
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> Threshold warnings to draft purchase logs.
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> Cross-dock routing capabilities.
                      </li>
                    </ul>
                    <button
                      onClick={() => handleLinkClick('products')}
                      className="h-[36px] px-4 bg-[#1A1A1A] text-white text-[11px] font-bold tracking-[0.12em] rounded-[3px] hover:bg-[#2e2e2e] active:scale-[0.98] transition-all cursor-pointer uppercase shadow-[3px_3px_0px_rgba(26,26,26,0.15)]"
                    >
                      Request WMS Demo Access
                    </button>
                  </div>

                  {/* WMS Bin visualizer mockup */}
                  <div className="lg:col-span-6 p-5 rounded-[8px] bg-[#F5F4F0] border border-[#D8D8D4] font-sans text-[10px] space-y-4 shadow-sm">
                    <div className="flex justify-between items-center border-b border-[#D8D8D4] pb-2">
                      <span className="text-[#0055FF] text-[9px] font-bold tracking-wider">ZONE A PICKING CELLS</span>
                      <span className="text-[8px] text-[#6B6B6B]">LINK: ACTIVE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { code: 'A1-01', count: 120, status: 'Stored' },
                        { code: 'A1-02', count: 45, status: 'Picking' },
                        { code: 'A1-03', count: 0, status: 'Empty' },
                        { code: 'B2-01', count: 98, status: 'Stored' },
                        { code: 'B2-02', count: 150, status: 'Stored' },
                        { code: 'B2-03', count: 0, status: 'Empty' }
                      ].map((bin) => (
                        <div
                          key={bin.code}
                          onClick={() => setWmsActiveBin(bin.code)}
                          className={`p-2.5 rounded-[4px] border text-center transition-colors cursor-pointer flex flex-col justify-between ${
                            wmsActiveBin === bin.code ? 'bg-[#0055FF]/10 border-[#0055FF]/40 text-[#0055FF] font-bold' : 'border-[#D8D8D4] bg-white text-[#6B6B6B] hover:bg-[#F5F4F0]'
                          }`}
                        >
                          <span className="text-[8px] text-[#6B6B6B]">{bin.code}</span>
                          <span className="text-xs font-bold font-mono mt-1">{bin.count}</span>
                          <span className="text-[7px] text-[#6B6B6B]/60 mt-1 uppercase font-semibold">{bin.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeProductTab === 'mobile' && (
                <motion.div
                  key="mobile"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10"
                >
                  <div className="lg:col-span-6 space-y-6">
                    <div className="text-[9px] font-bold text-[#0055FF] bg-[#0055FF]/10 px-2.5 py-1 rounded-full border border-[#0055FF]/25 uppercase tracking-wider inline-block">
                      Module: Barcode Check-ins & GPS
                    </div>
                    <h3 className="twenty-serif text-2xl sm:text-3xl text-[#1A1A1A]">Alif Workflows Mobile App</h3>
                    <p className="text-xs text-[#6B6B6B] leading-relaxed">
                      Deploys offline-first operations for on-ground mechanics, delivery dispatchers, and site auditors. Scans barcode labels, saves coordinates, and holds signature buffers locally until an active web link is restored.
                    </p>
                    <ul className="space-y-2.5 text-xs text-[#1A1A1A]">
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> Geolocation tagging on service dispatch jobs.
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> Offline-first signature buffers and data queues.
                      </li>
                      <li className="flex items-center gap-2 font-semibold">
                        <Check className="w-4 h-4 text-[#0055FF]" /> Bluetooth link for thermal receipt printers.
                      </li>
                    </ul>
                    <button
                      onClick={() => handleLinkClick('products')}
                      className="h-[36px] px-4 bg-[#1A1A1A] text-white text-[11px] font-bold tracking-[0.12em] rounded-[3px] hover:bg-[#2e2e2e] active:scale-[0.98] transition-all cursor-pointer uppercase shadow-[3px_3px_0px_rgba(26,26,26,0.15)]"
                    >
                      Request Mobile Suite Spec
                    </button>
                  </div>

                  {/* Mobile Simulator mockup */}
                  <div className="lg:col-span-6 flex justify-center">
                    <div className="w-56 aspect-[9/18] rounded-[32px] border-4 border-[#1A1A1A] bg-white p-3 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.06)] relative overflow-hidden">
                      <div className="w-20 h-4 bg-[#1A1A1A] rounded-b-lg absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <div className="w-8 h-1 bg-[#D8D8D4] rounded-full"></div>
                      </div>
                      <div className="flex justify-between items-center text-[7px] text-[#6B6B6B] font-mono pt-1">
                        <span>9:41 AM</span>
                        <span>LTE [■]</span>
                      </div>
                      <div className="flex-grow my-3 rounded-xl bg-[#F5F4F0] p-3 flex flex-col justify-between border border-[#D8D8D4]">
                        {mobileScreen === 'scan' ? (
                          <>
                            <div className="space-y-2.5">
                              <div className="flex justify-between items-center border-b border-[#D8D8D4] pb-1.5 text-[8px] text-[#1A1A1A] font-bold">
                                <span>ALIF SCANNER CORE</span>
                                <span className="text-emerald-600">READY</span>
                              </div>
                              <div className="aspect-square border border-dashed border-[#0055FF]/30 rounded flex flex-col items-center justify-center bg-white relative overflow-hidden">
                                {scanActive && <div className="absolute left-0 right-0 h-0.5 bg-[#0055FF] animate-bounce"></div>}
                                <Cpu className="w-6 h-6 text-[#0055FF]/20" />
                                <span className="text-[6px] text-[#6B6B6B] font-mono uppercase mt-1">Awaiting QR scan</span>
                              </div>
                            </div>
                            <button
                              onClick={() => {
                                setScanActive(true)
                                setTimeout(() => {
                                  setMobileScreen('signature')
                                  setScanActive(false)
                                }, 1500)
                              }}
                              className="w-full py-2 rounded-[4px] bg-[#1A1A1A] text-white font-mono text-[8px] font-semibold text-center cursor-pointer shadow-[1px_1px_0px_rgba(26,26,26,0.15)]"
                            >
                              {scanActive ? 'Scanning...' : 'Trigger Camera Sweep'}
                            </button>
                          </>
                        ) : (
                          <>
                            <div className="space-y-2">
                              <div className="flex justify-between items-center border-b border-[#D8D8D4] pb-1.5 text-[8px] text-[#1A1A1A] font-bold">
                                <span>VERIFIED // AST-9021</span>
                              </div>
                              <div className="p-2.5 bg-white border border-[#D8D8D4] rounded text-center">
                                <span className="text-[6px] text-[#6B6B6B] block uppercase font-bold mb-1">Cursive Signature</span>
                                <div className="h-10 border border-dashed border-[#D8D8D4] rounded flex items-center justify-center bg-[#F5F4F0]">
                                  <svg className="w-20 h-6 text-[#0055FF]" viewBox="0 0 100 30" fill="none">
                                    <path d="M10 20 Q 30 5, 45 25 T 80 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <button
                              onClick={() => setMobileScreen('scan')}
                              className="w-full py-2 rounded-[4px] border border-[#1A1A1A] text-[#1A1A1A] font-mono text-[8px] font-bold text-center cursor-pointer hover:bg-[#1A1A1A]/5"
                            >
                              Reset Scanner
                            </button>
                          </>
                        )}
                      </div>
                      <div className="w-16 h-0.5 bg-[#6B6B6B]/30 rounded-full mx-auto -mt-1"></div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.section>

      {/* 5. STRATEGIC ERP PARTNERS (Trust From Specificity) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="relative py-24 px-6 z-10 text-left"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-left space-y-4">
            <div className="inline-flex items-center gap-2 select-none">
              <div className="w-[14px] h-[6px] bg-[#0055FF] rounded-[1px]" />
              <span className="font-sans text-[13px] font-bold text-[#1A1A1A] tracking-tight uppercase">
                Certified Integrations
              </span>
            </div>
            <h2 className="twenty-serif text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] leading-[1.1] text-[#1A1A1A] font-normal tracking-[-0.02em]">
              Enterprise Software Alignment
            </h2>
            <p className="text-[#6B6B6B] text-xs md:text-sm max-w-xl">
              Trust comes from transparency. We do not dump silent partner logos. Here is exactly what we do with each standard software ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersList.map((partner) => (
              <div
                key={partner.name}
                onClick={() => handleLinkClick('partners')}
                className="p-6 rounded-[8px] bg-white border border-[#D8D8D4] shadow-[0_4px_12px_rgba(0,0,0,0.02)] transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between group relative hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.04)]"
              >
                <CornerMarkers />
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#0055FF] transition-colors">{partner.name}</h4>
                    <span className="text-[8px] font-bold text-[#0055FF] bg-[#0055FF]/10 px-2 py-0.5 border border-[#0055FF]/25 rounded-full uppercase">
                      {partner.purpose}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#6B6B6B] leading-relaxed pt-2">
                    {partner.reason}
                  </p>
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#6B6B6B]/60 group-hover:text-[#0055FF] transition-colors pt-2 border-t border-[#D8D8D4]/60 flex items-center justify-between">
                  <span>Explore Partner Spec</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 6. WHY CHOOSE US (Editorial Conviction Writing) */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="relative py-24 px-6 z-10 border-t border-[#D8D8D4] bg-[#EBEBEB]/50 text-left"
      >
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 select-none">
                <div className="w-[14px] h-[6px] bg-[#0055FF] rounded-[1px]" />
                <span className="font-sans text-[13px] font-bold text-[#1A1A1A] tracking-tight uppercase">
                  Corporate Differentiators
                </span>
              </div>
              <h2 className="twenty-serif text-[34px] sm:text-[44px] md:text-[54px] lg:text-[60px] leading-[1.1] text-[#1A1A1A] font-normal tracking-[-0.02em]">
                Pragmatic Execution, Certified Precision.
              </h2>
              <p className="text-[#6B6B6B] text-xs md:text-sm">
                We have spent over a decade delivering enterprise-grade database networks, cross-platform mobile apps, and certified ERP integrations.
              </p>
            </div>
            
            <div className="lg:col-span-7 space-y-10 text-left">
              <div className="space-y-2">
                <h3 className="twenty-serif text-xl sm:text-2xl text-[#1A1A1A]">
                  Bridging Doha Consulting with Hyderabad Tech Labs
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                  Our strategic layout ensures project compliance. We keep senior solution architects local to our Doha headquarters to advise on regional regulations, tax scopes, and local databases. Core coding execution is directed by our specialized laboratory in Hitech City, Hyderabad, combining expert consulting with cost efficiency.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="twenty-serif text-xl sm:text-2xl text-[#1A1A1A]">
                  Complete Codebase Ownership & Flat Rates
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                  We believe in pricing transparency. We deliver flat, milestone-based rates for project scopes, refusing to charge licensing margins or hide monthly developer fees. Once a custom system is completed, full ownership of the source code is transferred entirely to the client, preventing vendor lock-ins.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="twenty-serif text-xl sm:text-2xl text-[#1A1A1A]">
                  High-Availability SLAs & Dedicated Support Hotlines
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                  Database disruptions or transaction failures directly damage corporate revenue. We back our integrations with continuous support contracts, ensuring guaranteed response times under 15 minutes. Our clients receive direct hotlines routing problems to engineers who know their database setups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* 7. CONTACT SECTION (Split Column Layout) */}
      <motion.section 
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={scrollRevealVariants}
        className="relative py-24 px-6 z-10 border-t border-[#D8D8D4]"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Split Form Left */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded-[12px] bg-white border border-[#D8D8D4] shadow-[0_10px_40px_rgba(0,0,0,0.02)] space-y-6 text-left relative overflow-hidden">
              <CornerMarkers />
              <div className="space-y-2">
                <h3 className="twenty-serif text-2xl sm:text-3xl text-[#1A1A1A]">Send a Message</h3>
                <p className="text-[#6B6B6B] text-xs">Fill in your system requirements and our developers will contact you in under 12 hours.</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-[6px] bg-[#F5F4F0] border border-[#D8D8D4] text-center space-y-3 flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-[#0055FF]" />
                  <h4 className="twenty-serif text-lg text-[#1A1A1A]">Message Transmitted</h4>
                  <p className="text-xs text-[#6B6B6B] max-w-sm">Thank you. Your inquiry has been successfully sent. An Alif engineer will connect with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 text-xs font-sans">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-left">
                      <label className="block text-[#1A1A1A] uppercase tracking-wider mb-2 font-bold text-[10px]">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full p-3.5 bg-[#F5F4F0] border border-[#D8D8D4] rounded-[4px] text-[#1A1A1A] focus:outline-none focus:border-[#0055FF] transition-colors"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[#1A1A1A] uppercase tracking-wider mb-2 font-bold text-[10px]">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full p-3.5 bg-[#F5F4F0] border border-[#D8D8D4] rounded-[4px] text-[#1A1A1A] focus:outline-none focus:border-[#0055FF] transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-left">
                      <label className="block text-[#1A1A1A] uppercase tracking-wider mb-2 font-bold text-[10px]">Phone Number</label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+974 6682 3215"
                        className="w-full p-3.5 bg-[#F5F4F0] border border-[#D8D8D4] rounded-[4px] text-[#1A1A1A] focus:outline-none focus:border-[#0055FF] transition-colors"
                      />
                    </div>
                    <div className="text-left">
                      <label className="block text-[#1A1A1A] uppercase tracking-wider mb-2 font-bold text-[10px]">Select Core Need</label>
                      <select className="w-full p-3.5 bg-[#F5F4F0] border border-[#D8D8D4] rounded-[4px] text-[#1A1A1A] focus:outline-none focus:border-[#0055FF] transition-colors">
                        <option>ERP/CRM Integration</option>
                        <option>Custom AI/ML modeling</option>
                        <option>Web/Mobile Development</option>
                        <option>SLA Support Contracts</option>
                      </select>
                    </div>
                  </div>
                  <div className="text-left">
                    <label className="block text-[#1A1A1A] uppercase tracking-wider mb-2 font-bold text-[10px]">Your Message / Scope Requirements</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your database, legacy modules, or custom system targets..."
                      className="w-full p-3.5 bg-[#F5F4F0] border border-[#D8D8D4] rounded-[4px] text-[#1A1A1A] focus:outline-none focus:border-[#0055FF] transition-colors"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-[4px] bg-[#1A1A1A] hover:bg-[#2e2e2e] text-white font-bold uppercase tracking-wider shadow-[2px_2px_0px_rgba(26,26,26,0.15)] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    Submit Scope Request
                  </button>
                </form>
              )}
            </div>

            {/* Split Details Right */}
            <div className="lg:col-span-5 space-y-10 text-left">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 select-none">
                  <div className="w-[14px] h-[6px] bg-[#0055FF] rounded-[1px]" />
                  <span className="font-sans text-[13px] font-bold text-[#1A1A1A] tracking-tight uppercase">Get in Touch</span>
                </div>
                <h3 className="twenty-serif text-3xl text-[#1A1A1A]">Let's Connect Globally</h3>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">
                  We have fully staffed operational developer headquarters in Qatar and technical development labs in India. Feel free to contact our architects directly.
                </p>
              </div>

              <div className="space-y-6 text-xs font-sans">
                {/* Qatar Office */}
                <div className="p-5 rounded-[8px] bg-white border border-[#D8D8D4] space-y-2 relative shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <CornerMarkers />
                  <div className="text-[9px] font-bold text-[#0055FF] bg-[#0055FF]/10 px-2 py-0.5 border border-[#0055FF]/25 rounded-full uppercase tracking-wider inline-block">Head Office (Qatar)</div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] pt-1">Alif Info Tech Services WLL</h4>
                  <p className="text-[#6B6B6B] leading-relaxed text-[11px]">
                    Doha, State of Qatar<br />
                    PO Box: 12345
                  </p>
                  <div className="flex gap-4 pt-1 font-mono text-[10px]">
                    <a href="tel:+97466823215" className="text-[#0055FF] hover:underline font-bold">
                      +974 6682 3215
                    </a>
                  </div>
                </div>

                {/* India Office */}
                <div className="p-5 rounded-[8px] bg-white border border-[#D8D8D4] space-y-2 relative shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                  <CornerMarkers />
                  <div className="text-[9px] font-bold text-[#0055FF] bg-[#0055FF]/10 px-2 py-0.5 border border-[#0055FF]/25 rounded-full uppercase tracking-wider inline-block">Branch Office (India)</div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] pt-1">Alif Info Tech Lab</h4>
                  <p className="text-[#6B6B6B] leading-relaxed text-[11px]">
                    Hitech City, Hyderabad<br />
                    Telangana, 500081, India
                  </p>
                  <div className="flex gap-4 pt-1 font-mono text-[10px]">
                    <a href="mailto:info@alifinfotech.net" className="text-[#0055FF] hover:underline font-bold">
                      info@alifinfotech.net
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-[8px] bg-white border border-[#D8D8D4] flex items-start gap-4 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
                <Shield className="w-6 h-6 text-[#0055FF] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-[#1A1A1A]">Immediate SLA Support Active</h4>
                  <p className="text-[10px] text-[#6B6B6B] leading-relaxed">Our partners enjoy dedicated hotlines for ERP systems, hospital software, and custom mobile apps.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </motion.section>
    </div>
  )
}
