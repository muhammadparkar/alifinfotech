import { PhoneCall, MessageCircle } from 'lucide-react'

export default function WhatsAppWidget() {
  const whatsappUrl = 'https://wa.me/97466823215'
  const callUrl = 'tel:+97466823215'

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
      
      {/* Phone Call Button */}
      <a
        href={callUrl}
        className="group relative w-12 h-12 rounded-full bg-brand-charcoal-light hover:bg-brand-gold border border-brand-gold/20 hover:border-brand-gold text-brand-gold hover:text-brand-charcoal-dark flex items-center justify-center shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer shrink-0"
        title="Call Us Now"
      >
        <PhoneCall className="w-4.5 h-4.5 shrink-0" />
        
        {/* Floating Tooltip Left */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-brand-charcoal-dark border border-brand-offwhite/5 text-[10px] font-mono text-brand-offwhite opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl transform translate-x-2 group-hover:translate-x-0 select-none">
          Call +974 6682 3215
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 rounded-full bg-emerald-950/40 hover:bg-emerald-600 border border-emerald-500/20 hover:border-emerald-500 text-emerald-400 hover:text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 cursor-pointer shrink-0"
        title="Chat on WhatsApp"
      >
        <div className="relative flex items-center justify-center shrink-0">
          <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span>
          <span className="absolute -top-1.5 -right-1.5 w-2 h-2 bg-emerald-400 rounded-full"></span>
          <MessageCircle className="w-4.5 h-4.5 shrink-0" />
        </div>

        {/* Floating Tooltip Left */}
        <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-brand-charcoal-dark border border-brand-offwhite/5 text-[10px] font-mono text-brand-offwhite opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl transform translate-x-2 group-hover:translate-x-0 select-none">
          WhatsApp Chat
        </span>
      </a>
    </div>
  )
}
