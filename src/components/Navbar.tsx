import { useState } from 'react'
import { Menu, X, ChevronDown, Cpu, Box, Smartphone, Brain, Code, Laptop, Cloud, Database, Award, Shield, Users, Handshake, Landmark, ArrowRight, Heart, Wrench } from 'lucide-react'

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      className="fixed top-0 left-0 right-0 z-50 h-[52px] bg-[#F5F4F0] border-b border-[#D8D8D4] flex items-center transition-all duration-300 font-sans"
    >
      <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
        
        <div
          onClick={() => handleLinkClick('home')}
          className="flex items-center cursor-pointer group"
        >
          <img
            src="/index-logo.png"
            alt="Alif Info Tech Logo"
            className="h-7 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 relative">
          
          {/* Home Direct Link */}
          <button
            onClick={() => handleLinkClick('home')}
            className={`px-3 py-1.5 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.08em] transition-all duration-200 relative cursor-pointer ${
              currentPage === 'home' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#4444FF]'
            }`}
          >
            Home
            {currentPage === 'home' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4444FF]"></span>
            )}
          </button>

          {/* Products Dropdown */}
          <div className="relative group/dropdown">
            <button
              className={`px-3 py-1.5 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.08em] flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                currentPage === 'products' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#4444FF]'
              }`}
            >
              Products
              <ChevronDown className="w-3 h-3 opacity-60 group-hover/dropdown:rotate-180 transition-transform duration-200" />
              {currentPage === 'products' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4444FF]"></span>
              )}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-80 rounded-[8px] bg-white border border-[#D8D8D4] p-2 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-200 transform translate-y-1.5 group-hover/dropdown:translate-y-0 shadow-[4px_8px_24px_rgba(0,0,0,0.06)] text-left">
              <div className="px-3 py-2 text-[10px] font-bold text-[#4444FF] tracking-wider uppercase border-b border-[#D8D8D4]/60 mb-1.5">
                Flagship Platforms
              </div>
              {products.map((p) => (
                <div
                  key={p.name}
                  onClick={() => handleLinkClick('products', p.tab)}
                  className="flex items-start gap-3 p-2.5 rounded-[6px] hover:bg-[#EBEBEB] border border-transparent hover:border-[#D8D8D4]/40 transition-all cursor-pointer group/item"
                >
                  <div className="p-2 rounded-[4px] bg-[#F5F4F0] text-[#4444FF] border border-[#D8D8D4] group-hover/item:scale-102 transition-transform">
                    <p.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A1A1A] group-hover/item:text-[#4444FF] transition-colors">{p.name}</h4>
                    <p className="text-[10px] text-[#6B6B6B] mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Dropdown */}
          <div className="relative group/dropdown">
            <button
              className={`px-3 py-1.5 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.08em] flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                currentPage === 'services' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#4444FF]'
              }`}
            >
              Services
              <ChevronDown className="w-3 h-3 opacity-60 group-hover/dropdown:rotate-180 transition-transform duration-200" />
              {currentPage === 'services' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4444FF]"></span>
              )}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[460px] rounded-[8px] bg-white border border-[#D8D8D4] p-3 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-200 transform translate-y-1.5 group-hover/dropdown:translate-y-0 shadow-[4px_8px_24px_rgba(0,0,0,0.06)] text-left">
              <div className="px-3 py-2 text-[10px] font-bold text-[#4444FF] tracking-wider uppercase border-b border-[#D8D8D4]/60 mb-2">
                Capabilities Matrix
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                {services.map((s) => (
                  <div
                    key={s.name}
                    onClick={() => handleLinkClick('services', s.tab)}
                    className="flex items-start gap-3 p-2.5 rounded-[6px] hover:bg-[#EBEBEB] border border-transparent hover:border-[#D8D8D4]/40 transition-all cursor-pointer group/item"
                  >
                    <div className="p-2 rounded-[4px] bg-[#F5F4F0] text-[#4444FF] border border-[#D8D8D4] group-hover/item:scale-102 transition-transform shrink-0">
                      <s.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1A1A] group-hover/item:text-[#4444FF] transition-colors leading-snug">{s.name}</h4>
                      <p className="text-[9px] text-[#6B6B6B] mt-0.5 leading-normal">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group/dropdown">
            <button
              className={`px-3 py-1.5 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.08em] flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                currentPage === 'solutions' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#4444FF]'
              }`}
            >
              Solutions
              <ChevronDown className="w-3 h-3 opacity-60 group-hover/dropdown:rotate-180 transition-transform duration-200" />
              {currentPage === 'solutions' && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4444FF]"></span>
              )}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-88 rounded-[8px] bg-white border border-[#D8D8D4] p-2 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-200 transform translate-y-1.5 group-hover/dropdown:translate-y-0 shadow-[4px_8px_24px_rgba(0,0,0,0.06)] text-left">
              <div className="px-3 py-2 text-[10px] font-bold text-[#4444FF] tracking-wider uppercase border-b border-[#D8D8D4]/60 mb-1.5">
                Industrial Case Blueprinting
              </div>
              {solutions.map((sol) => (
                <div
                  key={sol.name}
                  onClick={() => handleLinkClick('solutions', sol.tab)}
                  className="flex items-start gap-3 p-2.5 rounded-[6px] hover:bg-[#EBEBEB] border border-transparent hover:border-[#D8D8D4]/40 transition-all cursor-pointer group/item"
                >
                  <div className="p-2 rounded-[4px] bg-[#F5F4F0] text-[#4444FF] border border-[#D8D8D4] group-hover/item:scale-102 transition-transform shrink-0">
                    <sol.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#1A1A1A] group-hover/item:text-[#4444FF] transition-colors leading-snug">{sol.name}</h4>
                    <p className="text-[10px] text-[#6B6B6B] mt-0.5 leading-normal">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group/dropdown">
            <button
              className={`px-3 py-1.5 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.08em] flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                ['about', 'why-choose-us', 'clients', 'partners'].includes(currentPage) ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#4444FF]'
              }`}
            >
              Company
              <ChevronDown className="w-3 h-3 opacity-60 group-hover/dropdown:rotate-180 transition-transform duration-200" />
              {['about', 'why-choose-us', 'clients', 'partners'].includes(currentPage) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4444FF]"></span>
              )}
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-96 rounded-[8px] bg-white border border-[#D8D8D4] p-2 opacity-0 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto transition-all duration-200 transform translate-y-1.5 group-hover/dropdown:translate-y-0 shadow-[4px_8px_24px_rgba(0,0,0,0.06)] text-left">
              <div className="px-3 py-2 text-[10px] font-bold text-[#4444FF] tracking-wider uppercase border-b border-[#D8D8D4]/60 mb-1.5">
                Organization & Trust
              </div>
              <div className="grid grid-cols-1 gap-1">
                {company.map((comp) => (
                  <div
                    key={comp.name}
                    onClick={() => handleLinkClick(comp.page)}
                    className="flex items-start gap-3 p-2 rounded-[6px] hover:bg-[#EBEBEB] border border-transparent hover:border-[#D8D8D4]/40 transition-all cursor-pointer group/item"
                  >
                    <div className="p-2 rounded-[4px] bg-[#F5F4F0] text-[#4444FF] border border-[#D8D8D4] group-hover/item:scale-102 transition-transform shrink-0">
                      <comp.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#1A1A1A] group-hover/item:text-[#4444FF] transition-colors leading-snug">{comp.name}</h4>
                      <p className="text-[10px] text-[#6B6B6B] mt-0.5 leading-normal">{comp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Industries Direct Link */}
          <button
            onClick={() => handleLinkClick('industries')}
            className={`px-3 py-1.5 rounded-[4px] text-[11px] font-bold uppercase tracking-[0.08em] transition-all duration-200 relative cursor-pointer ${
              currentPage === 'industries' ? 'text-[#1A1A1A]' : 'text-[#6B6B6B] hover:text-[#4444FF]'
            }`}
          >
            Industries
            {currentPage === 'industries' && (
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4444FF]"></span>
            )}
          </button>
        </nav>

        {/* CTA Get In Touch */}
        <div className="hidden lg:block">
          <button
            onClick={() => handleLinkClick('contact')}
            className="h-[32px] px-3.5 bg-[#1A1A1A] text-white text-[12px] font-semibold tracking-[0.06em] rounded-[4px] hover:bg-[#1A1A1A]/90 active:scale-95 transition-all cursor-pointer uppercase flex items-center gap-1.5 shadow-[2px_2px_0px_rgba(26,26,26,0.15)]"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-[#EBEBEB] rounded-[6px] transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[52px] bg-[#F5F4F0] z-40 lg:hidden flex flex-col p-6 transition-all duration-300 border-t border-[#D8D8D4] ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex-1 overflow-y-auto space-y-2 pb-8 pr-2 text-left">
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
              className={`w-full text-left py-3 px-4 rounded-[4px] text-sm font-semibold transition-all ${
                currentPage === item.id
                  ? 'bg-[#EBEBEB] text-[#4444FF] border-l-2 border-[#4444FF]'
                  : 'text-[#1A1A1A] hover:bg-[#EBEBEB]'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="pt-4 border-t border-[#D8D8D4]">
          <button
            onClick={() => handleLinkClick('contact')}
            className="w-full py-3.5 text-center rounded-[4px] bg-[#1A1A1A] hover:bg-[#1A1A1A]/90 font-bold text-white text-xs shadow-[2px_2px_0px_rgba(26,26,26,0.15)] active:scale-98 transition-all cursor-pointer uppercase"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </header>
  )
}
