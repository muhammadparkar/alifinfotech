import { Quote, Star } from 'lucide-react'

export default function Clients() {
  const metrics = [
    { value: '150+', label: 'Active Business Clients' },
    { value: '98.6%', label: 'SLA Support Retention' },
    { value: '10M+', label: 'API Queries Processed Daily' },
    { value: '100%', label: 'On-Time Project Delivery' }
  ]

  const testimonials = [
    {
      quote: "Alif Info Tech transformed our logistical inventory tracking. Their custom WMS integration with Wings ERP allows us to audit stocks in Doha and Hitech City instantly. Absolute game changer.",
      author: "Faisal Al-Thani",
      role: "Operations Director",
      company: "Qatar Logistics & Shipping WLL",
      rating: 5
    },
    {
      quote: "Our previous clinic scheduling database was a bottleneck of manual paperwork. Alif integrated Insta HIS with a custom mobile interface that cut patient wait times by nearly half.",
      author: "Dr. K. Srinivas",
      role: "Medical Superintendent",
      company: "Apex Multispecialty Labs (India)",
      rating: 5
    },
    {
      quote: "The asset tracking accuracy of Alif AMS is unmatched. We are now managing over 1,400 high-value devices with automated servicing calendars, saving us thousands in premature replacements.",
      author: "Adil Shah",
      role: "Chief Technology Officer",
      company: "Apex Construct Solutions (Doha)",
      rating: 5
    }
  ]

  const logos = [
    { name: 'Qatar Logistics WLL' },
    { name: 'Apex Medical Labs' },
    { name: 'Roadmap Industries' },
    { name: 'FACT Solutions' },
    { name: 'Insta Healthcare' },
    { name: 'Autorox Systems' }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background spotlights */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] right-[10%] w-[300px] h-[300px] bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Trust & Validation
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-offwhite">
            Client Success & Trust Metrics
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            From trading houses in Qatar to diagnostic hubs in India, Alif Info Tech provides the software backbone for industry leaders.
          </p>
        </div>

        {/* Big numbers row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-6 rounded bg-brand-charcoal-light text-left border border-brand-offwhite/5 space-y-1">
              <div className="text-3xl md:text-4xl font-bold font-mono text-brand-gold">{m.value}</div>
              <div className="text-[10px] text-brand-gray uppercase tracking-widest font-mono">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials cards */}
        <div className="space-y-10">
          <div className="text-left space-y-2">
            <h2 className="text-2xl font-serif text-brand-offwhite">Feedback from Operations Directors</h2>
            <p className="text-[10px] text-brand-gray uppercase font-mono">Direct reports on system speed, custom code quality, and SLA support.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 flex flex-col justify-between hover:border-brand-gold/20 transition-all duration-300 relative group glow-gold">
                <Quote className="absolute top-6 right-8 w-8 h-8 text-brand-gold/5 group-hover:text-brand-gold/10 transition-colors" />
                
                <div className="space-y-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-3.5 h-3.5 text-brand-gold fill-brand-gold/20" />
                    ))}
                  </div>

                  <p className="text-brand-offwhite/90 text-xs italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-brand-offwhite/5 mt-8 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-charcoal flex items-center justify-center font-bold text-brand-gold text-xs border border-brand-gold/20">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-brand-offwhite leading-tight">{t.author}</h4>
                    <p className="text-[10px] text-brand-gray leading-none mt-1">{t.role}</p>
                    <p className="text-[9px] text-brand-gold font-mono mt-0.5">{t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners grayscale logo grids */}
        <div className="space-y-8 pt-8">
          <div className="text-left space-y-2">
            <h3 className="text-lg font-serif text-brand-offwhite">Sectors Powered by Our Systems</h3>
            <p className="text-xs text-brand-gray">Operational setups that run our active database integrations.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {logos.map((l, idx) => (
              <div
                key={idx}
                className="p-6 rounded bg-brand-charcoal-light border border-brand-offwhite/5 hover:border-brand-gold/20 hover:bg-brand-charcoal text-center font-semibold text-xs text-brand-gray hover:text-brand-offwhite transition-all cursor-pointer select-none font-mono uppercase tracking-wider"
              >
                {l.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
