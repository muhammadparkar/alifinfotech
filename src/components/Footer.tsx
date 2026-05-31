import { Mail } from 'lucide-react'

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleLinkClick = (page: string) => {
    setCurrentPage(page)
    window.location.hash = page === 'home' ? '' : `#${page}`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#F5F4F0] border-t border-[#D8D8D4] py-16 px-6 relative overflow-hidden font-sans text-left">
      <div className="max-w-7xl mx-auto bg-white border border-[#D8D8D4] rounded-[12px] p-8 sm:p-10 shadow-[4px_10px_40px_rgba(0,0,0,0.02)] relative overflow-hidden">
        {/* Decorative dots in the background */}
        <div className="absolute top-0 right-0 w-32 h-32 dither-pattern pointer-events-none" />

        {/* Corner markers */}
        <span className="absolute top-2 left-2 text-[#AAAAAA] font-mono select-none" style={{ fontSize: 16, lineHeight: 1 }}>+</span>
        <span className="absolute top-2 right-2 text-[#AAAAAA] font-mono select-none" style={{ fontSize: 16, lineHeight: 1 }}>+</span>
        <span className="absolute bottom-2 left-2 text-[#AAAAAA] font-mono select-none" style={{ fontSize: 16, lineHeight: 1 }}>+</span>
        <span className="absolute bottom-2 right-2 text-[#AAAAAA] font-mono select-none" style={{ fontSize: 16, lineHeight: 1 }}>+</span>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#D8D8D4]/60 relative z-10">
          {/* Brand Info */}
          <div className="flex items-center cursor-pointer select-none" onClick={() => handleLinkClick('home')}>
            <img
              src="/index-logo.png"
              alt="Alif Info Tech Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] text-[#6B6B6B] font-bold uppercase tracking-[0.08em]">
            {[
              { label: 'Home', page: 'home' },
              { label: 'Services', page: 'services' },
              { label: 'Solutions', page: 'solutions' },
              { label: 'Products', page: 'products' },
              { label: 'Partners', page: 'partners' },
              { label: 'Industries', page: 'industries' },
              { label: 'Why Us', page: 'why-choose-us' },
              { label: 'Clients', page: 'clients' },
              { label: 'About', page: 'about' },
              { label: 'Contact', page: 'contact' },
              { label: 'Twenty Design Ref', page: 'twenty-design-system' },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page)}
                className="hover:text-[#0055FF] hover:underline transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/alif-info-tech-services-wll"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-[4px] bg-[#F5F4F0] flex items-center justify-center text-[#6B6B6B] hover:text-[#0055FF] border border-[#D8D8D4] transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:info@alifinfotech.net"
              className="w-8 h-8 rounded-[4px] bg-[#F5F4F0] flex items-center justify-center text-[#6B6B6B] hover:text-[#0055FF] border border-[#D8D8D4] transition-all cursor-pointer"
              title="Email Us"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#6B6B6B] font-mono relative z-10">
          <p>© {new Date().getFullYear()} Alif Info Tech Services WLL. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[9px] text-[#0055FF] font-bold uppercase tracking-widest bg-[#F5F4F0] px-2.5 py-1 rounded-[3px] border border-[#D8D8D4] select-none">
              Doha HQ | Hyderabad Lab
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
