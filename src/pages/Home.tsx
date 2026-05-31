import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronRight, CheckCircle2, Shield, Brain, Smartphone, Database, Cloud, LineChart, Code, Check, Cpu } from 'lucide-react'

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

interface StatCounterProps {
  value: string;
  label: string;
}

// Count-up animation for stats bar using design tokens
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
    <div className="text-left group relative p-6 border-l border-brand-offwhite/5 first:border-0">
      <div className="text-4xl md:text-5xl font-mono font-bold text-brand-gold tracking-tight group-hover:translate-x-1 transition-transform duration-300">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] text-brand-gray uppercase tracking-widest font-mono mt-2">
        {label}
      </div>
    </div>
  )
}

export default function Home({ setCurrentPage }: HomeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [activeServiceTab, setActiveServiceTab] = useState('ai')
  const [activeProductTab, setActiveProductTab] = useState('ams')
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>('AST-9021')
  const [wmsActiveBin, setWmsActiveBin] = useState<string>('A1-01')
  const [mobileScreen, setMobileScreen] = useState<'scan' | 'signature'>('scan')
  const [scanActive, setScanActive] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Slow gold/amber canvas particle network background logic
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particles: { x: number; y: number; vx: number; vy: number; radius: number }[] = []
    const particleCount = Math.min(45, Math.floor(width / 30))

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.15, // slower, calmer
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.2 + 0.8
      })
    }

    const mouse = { x: -1000, y: -1000 }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }

    const handleMouseLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    const animate = () => {
      ctx.clearRect(0, 0, width, height)
      ctx.fillStyle = 'rgba(6, 182, 212, 0.22)' // Logo-based cyan points
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.03)' // Faint blue links

      particles.forEach((p, idx) => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Gentle mouse influence
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 180) {
          p.x += (dx / dist) * 0.15
          p.y += (dy / dist) * 0.15
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        // Connections
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx2 = p.x - p2.x
          const dy2 = p.y - p2.y
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)

          if (dist2 < 140) {
            ctx.lineWidth = (1 - dist2 / 140) * 0.6
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

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
    <div className="relative w-full overflow-hidden bg-brand-charcoal">
      {/* Background spotlights & Grid Pattern overlays */}
      <div className="absolute inset-0 grid-pattern pointer-events-none z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-[100vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[20vh] right-[10%] w-[300px] h-[300px] bg-brand-gold/3 rounded-full blur-[150px] pointer-events-none animate-pulse-glow"></div>
      <div className="absolute top-[60vh] left-[5%] w-[400px] h-[400px] bg-brand-sand/3 rounded-full blur-[180px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '-6s' }}></div>

      {/* 1. HERO SECTION (Asymmetric Left-Aligned Editorial Style) */}
      <section className="relative min-h-screen flex items-center px-6 pt-28 pb-16 z-10">
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0 opacity-80" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-8 space-y-8 text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded bg-brand-charcoal-light border border-brand-offwhite/5 text-[10px] font-mono text-brand-gold uppercase tracking-wider select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
              IT Solutions WLL | Doha (HQ) & Hyderabad
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif text-brand-offwhite tracking-tight leading-[1.08] max-w-4xl">
              We architect <span className="text-gradient-gold italic font-normal">high-performance</span> digital systems for leading enterprises.
            </h1>

            <p className="text-sm md:text-base text-brand-gray max-w-2xl font-sans leading-relaxed">
              Alif Info Tech engineers reliable database systems, certified ERP integrations, custom cloud applications, and AI pipelines to optimize B2B workflows across the Gulf region and India.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-4">
              <button
                onClick={() => handleLinkClick('solutions')}
                className="w-full sm:w-auto px-8 py-4 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 group shadow-md shadow-brand-gold/10"
              >
                Explore Solutions Blueprints
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full sm:w-auto px-8 py-4 rounded border border-brand-offwhite/10 hover:border-brand-gold/30 bg-brand-charcoal-light/30 hover:bg-brand-charcoal-light text-brand-offwhite font-semibold text-xs transition-all duration-300 cursor-pointer flex items-center justify-center"
              >
                Request Architecture Consultation
              </button>
            </div>
          </div>

          {/* Abstract geometric graphic indicating precision engineering */}
          <div className="lg:col-span-4 hidden lg:flex justify-end pr-6">
            <div className="relative w-80 aspect-square rounded-2xl overflow-hidden border border-brand-offwhite/10 glass-panel p-2 shadow-2xl glow-gold hover:scale-[1.01] transition-transform duration-500">
              <img
                src="/hero_tech_graphic.png"
                alt="System Architecture blueprint"
                className="w-full h-full object-cover rounded-xl opacity-80 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BAR (Precise Monospace Design) */}
      <section className="relative py-8 bg-brand-charcoal-dark border-y border-brand-offwhite/5 z-10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCounter value="10+" label="Years Active Operations" />
            <StatCounter value="250+" label="Deployments Completed" />
            <StatCounter value="150+" label="Enterprise Engagements" />
            <StatCounter value="7+" label="Standard ERP Integrators" />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION (Desktop Accordion, Mobile Horizontal Scroll) */}
      <section className="relative py-24 px-6 z-10 border-b border-brand-offwhite/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
                Engineering Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-offwhite">
                Bespoke Systems Architecture
              </h2>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                onClick={() => handleLinkClick('services')}
                className="text-brand-gold hover:text-brand-gold-light text-xs font-semibold font-mono tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer group lg:justify-end"
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
                  className={`w-full text-left p-5 rounded border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                    activeServiceTab === svc.id
                      ? 'bg-brand-charcoal-light border-brand-gold/30 text-brand-offwhite shadow-sm'
                      : 'bg-transparent border-transparent text-brand-gray hover:text-brand-offwhite hover:bg-brand-charcoal-light/30'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <svc.icon className={`w-5 h-5 ${activeServiceTab === svc.id ? 'text-brand-gold' : 'text-brand-gray/60'}`} />
                    <div>
                      <h4 className="text-sm font-bold leading-tight">{svc.title}</h4>
                      <span className="text-[9px] text-brand-gray/60 font-mono block mt-0.5">{svc.subtitle}</span>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${activeServiceTab === svc.id ? 'translate-x-0.5 text-brand-gold' : 'text-brand-gray/40'}`} />
                </button>
              ))}
            </div>

            {/* Accordion Right Expanded Context */}
            <div className="col-span-7 p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 min-h-[380px] flex flex-col justify-between relative glow-gold">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/2 rounded-full blur-3xl pointer-events-none"></div>
              
              {servicesList.map((svc) => {
                if (svc.id !== activeServiceTab) return null;
                return (
                  <div key={svc.id} className="space-y-6 animate-fadeIn">
                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-brand-gold bg-brand-gold/5 px-2.5 py-1 rounded border border-brand-gold/10">
                        {svc.tech}
                      </span>
                      <h3 className="text-2xl font-serif text-brand-offwhite pt-3">{svc.title}</h3>
                      <p className="text-xs text-brand-gray leading-relaxed max-w-xl">{svc.desc}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-brand-offwhite/5">
                      {svc.bullets.map((bullet, idx) => (
                        <div key={idx} className="p-3.5 rounded bg-brand-charcoal border border-brand-offwhite/5 flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span className="text-[11px] text-brand-offwhite/85 font-medium leading-snug">{bullet}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 flex items-center justify-between">
                      <span className="text-[10px] text-brand-gray font-mono">Deployment Matrix: Qatar & India Staged</span>
                      <button
                        onClick={() => handleLinkClick('services')}
                        className="px-5 py-2.5 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-[11px] transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        Technical Scope Specs
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile view: Swipeable Horizontal Card List */}
          <div className="md:hidden flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-brand-charcoal-light">
            {servicesList.map((svc) => (
              <div
                key={svc.id}
                onClick={() => handleLinkClick('services')}
                className="min-w-[280px] max-w-[280px] p-6 rounded bg-brand-charcoal-light border border-brand-offwhite/5 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded bg-brand-charcoal border border-brand-gold/10 flex items-center justify-center text-brand-gold">
                    <svc.icon className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-offwhite">{svc.title}</h3>
                  <span className="text-[9px] text-brand-gold font-mono block -mt-1">{svc.subtitle}</span>
                  <p className="text-xs text-brand-gray leading-relaxed">{svc.desc}</p>
                </div>
                <div className="text-[10px] font-mono text-brand-gold flex items-center gap-1">
                  Scope Parameters <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT PLATFORMS (Distinct Personalities & Mockups) */}
      <section className="relative py-24 px-6 z-10 border-b border-brand-offwhite/5 bg-brand-charcoal-dark/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-left space-y-4 max-w-2xl">
            <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
              Alif Software Core
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-offwhite">
              Proprietary Platform Ecosystems
            </h2>
            <p className="text-brand-gray text-xs md:text-sm">
              We design specialized workflow tools ready for deployment and customization. Click each tab to inspect live configuration schemas.
            </p>
          </div>

          {/* Product Tabs */}
          <div className="flex border-b border-brand-offwhite/5">
            {[
              { id: 'ams', name: 'Alif AMS (Asset Management)' },
              { id: 'wms', name: 'Alif WMS (Warehouse Control)' },
              { id: 'mobile', name: 'Alif Workflows Mobile App' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveProductTab(t.id)}
                className={`py-4 px-6 text-xs font-semibold font-mono tracking-wider transition-all border-b-2 cursor-pointer ${
                  activeProductTab === t.id
                    ? 'border-brand-gold text-brand-gold'
                    : 'border-transparent text-brand-gray hover:text-brand-offwhite'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {/* Active Product Panel Showcase */}
          <div className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 glow-gold">
            {activeProductTab === 'ams' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="text-[9px] font-mono text-brand-gold uppercase tracking-widest bg-brand-gold/5 px-2 py-1 rounded border border-brand-gold/10 inline-block">
                    Module: Calibration & Licensing audits
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-brand-offwhite">Alif Asset Management System</h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    A consolidated audit log tracking local desktop nodes, server instances, company laptops, and vehicle fleets. Syncs depreciation indexes automatically using IFRS and regional tax policies.
                  </p>
                  <ul className="space-y-2.5 text-xs text-brand-offwhite/90">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> QR/Barcode label scanner integrations.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> Auto alerts on software license expirations.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> Preventative hardware maintenance calendars.
                    </li>
                  </ul>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="px-6 py-3.5 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Request AMS Demo Access
                  </button>
                </div>

                {/* AMS High Fidelity mockup */}
                <div className="lg:col-span-6 p-5 rounded bg-brand-charcoal-dark border border-brand-offwhite/5 font-mono text-[10px] space-y-4 shadow-xl">
                  <div className="flex justify-between items-center border-b border-brand-offwhite/5 pb-3">
                    <span className="text-brand-gold text-[9px]">AMS CORE LEDGER // STABLE</span>
                    <span className="text-[8px] text-brand-gray font-mono">UPDATED: JUST NOW</span>
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
                        className={`p-2.5 rounded border transition-colors cursor-pointer flex justify-between ${
                          selectedAssetId === asset.id ? 'bg-brand-charcoal border-brand-gold/30 text-brand-gold' : 'border-brand-offwhite/5 text-brand-gray hover:bg-brand-charcoal/40'
                        }`}
                      >
                        <span>{asset.id} - {asset.name}</span>
                        <span className={`w-1.5 h-1.5 rounded-full self-center ${asset.status === 'Optimal' ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                      </div>
                    ))}
                  </div>
                  {selectedAssetId && (
                    <div className="p-3 rounded bg-brand-charcoal border border-brand-offwhite/5 text-[9px] text-brand-offwhite space-y-1">
                      <div>SPEC: 2.8GHz 24-Core / 128GB RAM</div>
                      <div className="text-brand-gray">Audit sync status: Standard compliance verified by Doha HQ auditor.</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeProductTab === 'wms' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="text-[9px] font-mono text-brand-gold uppercase tracking-widest bg-brand-gold/5 px-2 py-1 rounded border border-brand-gold/10 inline-block">
                    Module: FIFO Warehousing Dispatch
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-brand-offwhite">Alif Warehouse Management System</h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Designed to control stock routes, coordinate pick schedules, and check dispatch latency. Direct link logs automatically feed into third-party inventories like Logic or Wings ERP.
                  </p>
                  <ul className="space-y-2.5 text-xs text-brand-offwhite/90">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> Auto Pick Route algorithms for staff walks.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> Threshold warnings to draft purchase logs.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> Cross-dock routing capabilities.
                    </li>
                  </ul>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="px-6 py-3.5 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Request WMS Demo Access
                  </button>
                </div>

                {/* WMS Bin visualizer mockup */}
                <div className="lg:col-span-6 p-5 rounded bg-brand-charcoal-dark border border-brand-offwhite/5 font-mono text-[10px] space-y-4 shadow-xl">
                  <div className="flex justify-between items-center border-b border-brand-offwhite/5 pb-2">
                    <span className="text-brand-gold text-[9px]">ZONE A PICKING CELLS</span>
                    <span className="text-[8px] text-brand-gray">LINK: ACTIVE</span>
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
                        className={`p-2.5 rounded border text-center transition-colors cursor-pointer flex flex-col justify-between ${
                          wmsActiveBin === bin.code ? 'bg-brand-charcoal border-brand-gold/30 text-brand-gold' : 'border-brand-offwhite/5 text-brand-gray hover:bg-brand-charcoal/40'
                        }`}
                      >
                        <span className="text-[8px] text-brand-gray">{bin.code}</span>
                        <span className="text-xs font-bold font-mono mt-1">{bin.count}</span>
                        <span className="text-[7px] text-brand-gray/60 mt-1 uppercase">{bin.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeProductTab === 'mobile' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-6">
                  <div className="text-[9px] font-mono text-brand-gold uppercase tracking-widest bg-brand-gold/5 px-2 py-1 rounded border border-brand-gold/10 inline-block">
                    Module: Mobile Workflows & Geotags
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-brand-offwhite">Alif Mobile Application</h3>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Custom operational apps enabling field agents to scan barcodes, input signatures, and register deliveries in real time. Works offline, buffering transactions until Internet connection is established.
                  </p>
                  <ul className="space-y-2.5 text-xs text-brand-offwhite/90">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> Geolocation tags mapped to delivery entries.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> Camera scanner utilities with local SQLite sync.
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-brand-gold" /> Bluetooth link for thermal receipt printers.
                    </li>
                  </ul>
                  <button
                    onClick={() => handleLinkClick('products')}
                    className="px-6 py-3.5 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs transition-colors cursor-pointer"
                  >
                    Request Mobile Suite Spec
                  </button>
                </div>

                {/* Mobile Simulator mockup */}
                <div className="lg:col-span-6 flex justify-center">
                  <div className="w-56 aspect-[9/18] rounded-[32px] border-4 border-brand-charcoal bg-brand-charcoal-dark p-3 flex flex-col justify-between shadow-2xl relative overflow-hidden border-brand-offwhite/10">
                    <div className="w-20 h-4 bg-brand-charcoal rounded-b-lg absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="w-8 h-1 bg-brand-charcoal-light rounded-full"></div>
                    </div>
                    <div className="flex justify-between items-center text-[7px] text-brand-gray font-mono pt-1">
                      <span>9:41 AM</span>
                      <span>LTE [■]</span>
                    </div>
                    <div className="flex-grow my-3 rounded-xl bg-brand-charcoal p-3 flex flex-col justify-between border border-brand-offwhite/5">
                      {mobileScreen === 'scan' ? (
                        <>
                          <div className="space-y-2.5">
                            <div className="flex justify-between items-center border-b border-brand-offwhite/5 pb-1.5 text-[8px] text-brand-offwhite font-mono">
                              <span>ALIF SCANNER CORE</span>
                              <span className="text-emerald-400">READY</span>
                            </div>
                            <div className="aspect-square border border-dashed border-brand-gold/30 rounded flex flex-col items-center justify-center relative overflow-hidden">
                              {scanActive && <div className="absolute left-0 right-0 h-0.5 bg-brand-gold animate-bounce"></div>}
                              <Cpu className="w-6 h-6 text-brand-gold/30" />
                              <span className="text-[6px] text-brand-gray font-mono uppercase mt-1">Awaiting QR scan</span>
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
                            className="w-full py-2 rounded bg-brand-gold text-brand-charcoal-dark font-mono text-[8px] font-semibold text-center cursor-pointer"
                          >
                            {scanActive ? 'Scanning...' : 'Trigger Camera Sweep'}
                          </button>
                        </>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center border-b border-brand-offwhite/5 pb-1.5 text-[8px] text-brand-offwhite font-mono">
                              <span>VERIFIED // AST-9021</span>
                            </div>
                            <div className="p-2.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-center">
                              <span className="text-[6px] text-brand-gray block uppercase font-mono mb-1">Cursive Signature</span>
                              <div className="h-10 border border-dashed border-brand-offwhite/5 rounded flex items-center justify-center bg-brand-charcoal/20">
                                <svg className="w-20 h-6 text-brand-gold" viewBox="0 0 100 30" fill="none">
                                  <path d="M10 20 Q 30 5, 45 25 T 80 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => setMobileScreen('scan')}
                            className="w-full py-2 rounded border border-brand-offwhite/5 text-brand-offwhite font-mono text-[8px] text-center cursor-pointer hover:bg-brand-charcoal-dark"
                          >
                            Reset Scanner
                          </button>
                        </>
                      )}
                    </div>
                    <div className="w-16 h-0.5 bg-brand-gray/30 rounded-full mx-auto -mt-1"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC ERP PARTNERS (Trust From Specificity) */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-left space-y-4">
            <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
              Certified Integrations
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-brand-offwhite">
              Enterprise Software Alignment
            </h2>
            <p className="text-brand-gray text-xs md:text-sm max-w-xl">
              Trust comes from transparency. We do not dump silent partner logos. Here is exactly what we do with each standard software ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersList.map((partner) => (
              <div
                key={partner.name}
                onClick={() => handleLinkClick('partners')}
                className="p-6 rounded bg-brand-charcoal-light border border-brand-offwhite/5 hover:border-brand-gold/20 transition-all duration-300 cursor-pointer space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-brand-offwhite group-hover:text-brand-gold transition-colors">{partner.name}</h4>
                    <span className="text-[8px] font-mono text-brand-gold bg-brand-gold/5 px-2 py-0.5 rounded border border-brand-gold/10 uppercase">
                      {partner.purpose}
                    </span>
                  </div>
                  <p className="text-[11px] text-brand-gray leading-relaxed pt-2">
                    {partner.reason}
                  </p>
                </div>
                <div className="text-[10px] font-mono text-brand-gray/60 group-hover:text-brand-gold transition-colors pt-2 border-t border-brand-offwhite/5 flex items-center justify-between">
                  <span>Explore Partner Spec</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (Editorial Conviction Writing) */}
      <section className="relative py-24 px-6 z-10 border-t border-brand-offwhite/5 bg-brand-charcoal-dark/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
                Corporate Differentiators
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-brand-offwhite">
                Pragmatic Execution, Certified Precision.
              </h2>
              <p className="text-brand-gray text-xs md:text-sm">
                We have spent over a decade delivering enterprise-grade database networks, cross-platform mobile apps, and certified ERP integrations.
              </p>
            </div>
            
            <div className="lg:col-span-7 space-y-10 text-left">
              <div className="space-y-2">
                <h3 className="text-lg font-serif text-brand-offwhite font-semibold">
                  Bridging Doha Consulting with Hyderabad Tech Labs
                </h3>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Our strategic layout ensures project compliance. We keep senior solution architects local to our Doha headquarters to advise on regional regulations, tax scopes, and local databases. Core coding execution is directed by our specialized laboratory in Hitech City, Hyderabad, combining expert consulting with cost efficiency.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-serif text-brand-offwhite font-semibold">
                  Complete Codebase Ownership & Flat Rates
                </h3>
                <p className="text-xs text-brand-gray leading-relaxed">
                  We believe in pricing transparency. We deliver flat, milestone-based rates for project scopes, refusing to charge licensing margins or hide monthly developer fees. Once a custom system is completed, full ownership of the source code is transferred entirely to the client, preventing vendor lock-ins.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-serif text-brand-offwhite font-semibold">
                  High-Availability SLAs & Dedicated Support Hotlines
                </h3>
                <p className="text-xs text-brand-gray leading-relaxed">
                  Database disruptions or transaction failures directly damage corporate revenue. We back our integrations with continuous support contracts, ensuring guaranteed response times under 15 minutes. Our clients receive direct hotlines routing problems to engineers who know their database setups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION (Split Column Layout) */}
      <section id="contact" className="relative py-24 px-6 z-10 border-t border-brand-offwhite/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Split Form Left */}
            <div className="lg:col-span-7 p-8 md:p-10 rounded bg-brand-charcoal-light border border-brand-offwhite/5 glow-gold space-y-6 text-left">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-serif text-brand-offwhite">Send a Message</h3>
                <p className="text-brand-gray text-xs">Fill in your system requirements and our developers will contact you in under 12 hours.</p>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded bg-brand-charcoal border border-brand-gold/20 text-center space-y-3 flex flex-col items-center">
                  <CheckCircle2 className="w-12 h-12 text-brand-gold" />
                  <h4 className="text-lg font-serif text-brand-offwhite">Message Transmitted</h4>
                  <p className="text-xs text-brand-gray max-w-sm">Thank you. Your inquiry has been successfully sent. An Alif engineer will connect with you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Your Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+974 6682 3215"
                        className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Select Core Need</label>
                      <select className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors">
                        <option>ERP/CRM Integration</option>
                        <option>Custom AI/ML modeling</option>
                        <option>Web/Mobile Development</option>
                        <option>SLA Support Contracts</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-brand-gold uppercase tracking-wider mb-2 font-mono">Your Message / Scope Requirements</label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your database, legacy modules, or custom system targets..."
                      className="w-full p-3.5 bg-brand-charcoal-dark border border-brand-offwhite/5 rounded text-brand-offwhite focus:outline-none focus:border-brand-gold transition-colors"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Scope Request
                  </button>
                </form>
              )}
            </div>

            {/* Split Details Right */}
            <div className="lg:col-span-5 space-y-10 text-left">
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">Get in Touch</span>
                <h3 className="text-3xl font-serif text-brand-offwhite">Let's Connect Globally</h3>
                <p className="text-brand-gray text-xs leading-relaxed">
                  We have fully staffed operational developer headquarters in Qatar and technical development labs in India. Feel free to contact our architects directly.
                </p>
              </div>

              <div className="space-y-6 text-xs font-sans">
                {/* Qatar Office */}
                <div className="p-5 rounded bg-brand-charcoal-light border border-brand-offwhite/5 space-y-2">
                  <div className="text-[10px] font-mono text-brand-gold uppercase tracking-wider">Head Office (Qatar)</div>
                  <h4 className="text-sm font-bold text-brand-offwhite">Alif Info Tech Services WLL</h4>
                  <p className="text-brand-gray leading-relaxed text-[11px]">
                    Doha, State of Qatar<br />
                    PO Box: 12345
                  </p>
                  <div className="flex gap-4 pt-1 font-mono text-[10px]">
                    <a href="tel:+97466823215" className="text-brand-gold hover:underline">
                      +974 6682 3215
                    </a>
                  </div>
                </div>

                {/* India Office */}
                <div className="p-5 rounded bg-brand-charcoal-light border border-brand-offwhite/5 space-y-2">
                  <div className="text-[10px] font-mono text-brand-sand uppercase tracking-wider">Branch Office (India)</div>
                  <h4 className="text-sm font-bold text-brand-offwhite">Alif Info Tech Lab</h4>
                  <p className="text-brand-gray leading-relaxed text-[11px]">
                    Hitech City, Hyderabad<br />
                    Telangana, 500081, India
                  </p>
                  <div className="flex gap-4 pt-1 font-mono text-[10px]">
                    <a href="mailto:info@alifinfotech.net" className="text-brand-gold hover:underline">
                      info@alifinfotech.net
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded bg-brand-charcoal-light/50 border border-brand-gold/10 flex items-start gap-4">
                <Shield className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-brand-offwhite">Immediate SLA Support Active</h4>
                  <p className="text-[10px] text-brand-gray leading-relaxed">Our partners enjoy dedicated hotlines for ERP systems, hospital software, and custom mobile apps.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
