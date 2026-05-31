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
    <footer className="bg-brand-charcoal-dark border-t border-brand-offwhite/5 py-12 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-brand-offwhite/5">
          {/* Brand Info */}
          <div className="flex items-center gap-3 cursor-pointer select-none" onClick={() => handleLinkClick('home')}>
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-brand-gold-dark via-brand-gold to-brand-gold-light flex items-center justify-center font-bold text-brand-charcoal-dark text-base">
              A
            </div>
            <div>
              <span className="font-serif font-bold text-sm tracking-[0.06em] text-brand-offwhite uppercase block">
                ALIF INFO TECH
              </span>
              <span className="block text-[7px] text-brand-gray tracking-[0.22em] font-mono -mt-0.5 uppercase">
                INNOVATION EXPERTS
              </span>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] text-brand-gray font-mono uppercase tracking-[0.1em]">
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
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.page)}
                className="hover:text-brand-gold transition-colors cursor-pointer"
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
              className="w-9 h-9 rounded-full bg-brand-charcoal-light flex items-center justify-center text-brand-gray hover:text-brand-gold hover:bg-brand-charcoal border border-brand-offwhite/5 transition-all cursor-pointer"
              title="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:info@alifinfotech.net"
              className="w-9 h-9 rounded-full bg-brand-charcoal-light flex items-center justify-center text-brand-gray hover:text-brand-gold hover:bg-brand-charcoal border border-brand-offwhite/5 transition-all cursor-pointer"
              title="Email Us"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-brand-gray font-mono">
          <p>© {new Date().getFullYear()} Alif Info Tech Services WLL. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-[9px] text-brand-gold-dark font-mono uppercase tracking-widest bg-brand-charcoal px-2.5 py-1 rounded border border-brand-offwhite/5 select-none">
              Doha HQ | Hyderabad Lab
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
