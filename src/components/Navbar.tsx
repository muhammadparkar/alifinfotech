import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Cpu, Box, Smartphone, Brain, Code, Laptop, Cloud, Database, Award, Shield, Users, Handshake, Landmark, ArrowRight, Heart, Wrench } from 'lucide-react'

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (page: string, sectionId?: string) => {
    setCurrentPage(page)
    setIsMobileMenuOpen(false)
    window.location.hash = page === 'home' ? '' : `#${page}`
    
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Products Category Dropdown Data
  const products = [
    { name: 'Alif AMS', desc: 'Asset Management System', icon: Cpu, tab: 'ams' },
    { name: 'Alif WMS', desc: 'Warehouse Management System', icon: Box, tab: 'wms' },
    { name: 'Alif Mobile App', desc: 'Custom Business Workflows', icon: Smartphone, tab: 'mobile' },
  ]

  // Services Category Dropdown Data
  const services = [
    { name: 'AI Solutions', desc: 'Machine Learning & prediction engines', icon: Brain, tab: 'ai' },
    { name: 'Web App Engineering', desc: 'React/Node cloud web applications', icon: Code, tab: 'web-app' },
    { name: 'Corporate Web / Headless', desc: 'High conversion portfolio portals', icon: Laptop, tab: 'web' },
    { name: 'Mobile App Engineering', desc: 'Cross-platform native iOS & Android', icon: Smartphone, tab: 'mobile' },
    { name: 'ERP & Database Integration', desc: 'FACT, Logic & custom SQL configurations', icon: Database, tab: 'erp' },
    { name: 'Cloud & DevOps Support', desc: 'AWS scaling, firewalls & Docker layers', icon: Cloud, tab: 'cloud' },
  ]

  // Solutions Category Dropdown Data
  const solutions = [
    { name: 'Enterprise Logistics', desc: 'Integrated ERP & inventory sync (Qatar)', icon: Landmark, tab: 'erp' },
    { name: 'Medical Informatics', desc: 'Insta HIS clinic portal systems (India)', icon: Heart, tab: 'his' },
    { name: 'Fleet & Service Garage', desc: 'Autorox fleet logs & QR checks (Qatar)', icon: Wrench, tab: 'garage' },
  ]

  // Company Category Dropdown Data
  const company = [
    { name: 'About Alif', desc: 'Our corporate story, mission & vision', icon: Award, page: 'about' },
    { name: 'Why Partner With Us', desc: 'Our SLAs, support rates & transparent fees', icon: Shield, page: 'why-choose-us' },
    { name: 'Client Case Histories', desc: 'Testimonials, trust numbers & ratings', icon: Users, page: 'clients' },
    { name: 'Strategic Partners', desc: 'FACT, Logic, Wings & Insta alignments', icon: Handshake, page: 'partners' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-charcoal-dark/90 backdrop-blur-lg border-b border-brand-offwhite/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-gold-dark via-brand-gold to-brand-gold-light flex items-center justify-center font-bold text-brand-charcoal-dark text-lg shadow-md shadow-brand-gold/10 group-hover:scale-[1.02] transition-transform duration-300">
            A
          </div>
          <div>
            <span className="font-serif font-bold text-base tracking-[0.06em] text-brand-offwhite select-none uppercase">
              ALIF INFO TECH
            </span>
            <span className="block text-[7px] text-brand-gray tracking-[0.22em] font-mono -mt-0.5 uppercase select-none">
              INNOVATION EXPERTS
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-2 relative">
          
          {/* Home Direct Link */}
          <button
            onClick={() => handleLinkClick('home')}
            className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] transition-all duration-300 relative cursor-pointer ${
              currentPage === 'home' ? 'text-brand-offwhite' : 'text-brand-gray hover:text-brand-gold'
            }`}
          >
            Home
            {currentPage === 'home' && (
              <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(0,200,248,0.5)]"></span>
            )}
          </button>

          {/* Products Dropdown */}
          <div className="relative group/dropdown">
            <button
              className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                currentPage === 'products' ? 'text-brand-offwhite' : 'text-brand-gray hover:text-brand-gold'
              }`}
            >
              Products
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/dropdown:rotate-180 transition-transform duration-300" />
              {currentPage === 'products' && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(0,200,248,0.5)]"></span>
              )}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 rounded-2xl glass-panel p-2 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0 shadow-2xl">
              <div className="px-3 py-2 text-[10px] font-mono text-brand-gold tracking-wider uppercase border-b border-brand-offwhite/5 mb-1.5">
                Flagship Platforms
              </div>
              {products.map((p) => (
                <div
                  key={p.name}
                  onClick={() => handleLinkClick('products', p.tab)}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-charcoal-light border border-transparent hover:border-brand-offwhite/5 transition-all cursor-pointer group/item"
                >
                  <div className="p-2 rounded-lg bg-brand-charcoal text-brand-gold border border-brand-gold/10 group-hover/item:scale-105 transition-transform">
                    <p.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-offwhite group-hover/item:text-brand-gold transition-colors">{p.name}</h4>
                    <p className="text-[10px] text-brand-gray mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group/dropdown">
            <button
              className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                currentPage === 'services' ? 'text-brand-offwhite' : 'text-brand-gray hover:text-brand-gold'
              }`}
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/dropdown:rotate-180 transition-transform duration-300" />
              {currentPage === 'services' && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(0,200,248,0.5)]"></span>
              )}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[460px] rounded-2xl glass-panel p-3 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0 shadow-2xl">
              <div className="px-3 py-2 text-[10px] font-mono text-brand-gold tracking-wider uppercase border-b border-brand-offwhite/5 mb-2">
                Capabilities Matrix
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {services.map((s) => (
                  <div
                    key={s.name}
                    onClick={() => handleLinkClick('services', s.tab)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-charcoal-light border border-transparent hover:border-brand-offwhite/5 transition-all cursor-pointer group/item"
                  >
                    <div className="p-2 rounded-lg bg-brand-charcoal text-brand-gold border border-brand-gold/10 group-hover/item:scale-105 transition-transform shrink-0">
                      <s.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-brand-offwhite group-hover/item:text-brand-gold transition-colors leading-snug">{s.name}</h4>
                      <p className="text-[9px] text-brand-gray mt-0.5 leading-normal">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group/dropdown">
            <button
              className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                currentPage === 'solutions' ? 'text-brand-offwhite' : 'text-brand-gray hover:text-brand-gold'
              }`}
            >
              Solutions
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/dropdown:rotate-180 transition-transform duration-300" />
              {currentPage === 'solutions' && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(0,200,248,0.5)]"></span>
              )}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-88 rounded-2xl glass-panel p-2 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0 shadow-2xl">
              <div className="px-3 py-2 text-[10px] font-mono text-brand-gold tracking-wider uppercase border-b border-brand-offwhite/5 mb-1.5">
                Industrial Case Blueprinting
              </div>
              {solutions.map((sol) => (
                <div
                  key={sol.name}
                  onClick={() => handleLinkClick('solutions', sol.tab)}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-charcoal-light border border-transparent hover:border-brand-offwhite/5 transition-all cursor-pointer group/item"
                >
                  <div className="p-2 rounded-lg bg-brand-charcoal text-brand-gold border border-brand-gold/10 group-hover/item:scale-105 transition-transform shrink-0">
                    <sol.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-offwhite group-hover/item:text-brand-gold transition-colors leading-snug">{sol.name}</h4>
                    <p className="text-[10px] text-brand-gray mt-0.5 leading-normal">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group/dropdown">
            <button
              className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                ['about', 'why-choose-us', 'clients', 'partners'].includes(currentPage) ? 'text-brand-offwhite' : 'text-brand-gray hover:text-brand-gold'
              }`}
            >
              Company
              <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover/dropdown:rotate-180 transition-transform duration-300" />
              {['about', 'why-choose-us', 'clients', 'partners'].includes(currentPage) && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(0,200,248,0.5)]"></span>
              )}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 rounded-2xl glass-panel p-2 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover/dropdown:translate-y-0 shadow-2xl">
              <div className="px-3 py-2 text-[10px] font-mono text-brand-gold tracking-wider uppercase border-b border-brand-offwhite/5 mb-1.5">
                Organization & Trust
              </div>
              <div className="grid grid-cols-1 gap-1">
                {company.map((comp) => (
                  <div
                    key={comp.name}
                    onClick={() => handleLinkClick(comp.page)}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-brand-charcoal-light border border-transparent hover:border-brand-offwhite/5 transition-all cursor-pointer group/item"
                  >
                    <div className="p-2 rounded-lg bg-brand-charcoal text-brand-gold border border-brand-gold/10 group-hover/item:scale-105 transition-transform shrink-0">
                      <comp.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-brand-offwhite group-hover/item:text-brand-gold transition-colors leading-snug">{comp.name}</h4>
                      <p className="text-[10px] text-brand-gray mt-0.5 leading-normal">{comp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Direct Link */}
          <button
            onClick={() => handleLinkClick('industries')}
            className={`px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.1em] transition-all duration-300 relative cursor-pointer ${
              currentPage === 'industries' ? 'text-brand-offwhite' : 'text-brand-gray hover:text-brand-gold'
            }`}
          >
            Industries
            {currentPage === 'industries' && (
              <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(0,200,248,0.5)]"></span>
            )}
          </button>
        </nav>

        {/* CTA Get In Touch */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleLinkClick('contact')}
            className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-semibold text-brand-charcoal-dark bg-brand-gold hover:bg-brand-gold-light active:scale-95 transition-all duration-300 cursor-pointer shadow-md shadow-brand-gold/10"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-brand-gray hover:text-brand-offwhite hover:bg-brand-charcoal-light rounded-xl transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-brand-charcoal-dark z-40 lg:hidden flex flex-col p-6 transition-all duration-300 border-t border-brand-offwhite/5 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex-1 overflow-y-auto space-y-2 pb-8 pr-2">
          {[
            { id: 'home', name: 'Home' },
            { id: 'services', name: 'Services Matrix' },
            { id: 'solutions', name: 'Solutions Blueprint' },
            { id: 'products', name: 'Product Platforms' },
            { id: 'partners', name: 'Strategic Partnerships' },
            { id: 'industries', name: 'Industries Serviced' },
            { id: 'why-choose-us', name: 'Why Choose Alif' },
            { id: 'clients', name: 'Client Feedback' },
            { id: 'about', name: 'Company About' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`w-full text-left py-3 px-4 rounded-xl text-sm font-semibold transition-all ${
                currentPage === item.id
                  ? 'bg-brand-charcoal-light text-brand-gold border-l-4 border-brand-gold'
                  : 'text-brand-offwhite hover:text-white hover:bg-brand-charcoal-light'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="pt-4 border-t border-brand-offwhite/5">
          <button
            onClick={() => handleLinkClick('contact')}
            className="w-full py-4 text-center rounded-xl bg-brand-gold hover:bg-brand-gold-light font-bold text-brand-charcoal-dark shadow-md shadow-brand-gold/10 active:scale-98 transition-all cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  )
}
