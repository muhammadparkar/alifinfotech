import { Heart, ShoppingCart, Globe, Car, Building, Landmark, ChevronRight } from 'lucide-react'

interface IndustriesProps {
  setCurrentPage: (page: string) => void;
}

export default function Industries({ setCurrentPage }: IndustriesProps) {
  const handleContactClick = () => {
    setCurrentPage('contact')
    window.location.hash = '#contact'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const industries = [
    {
      title: 'Healthcare & Pharmacies',
      icon: Heart,
      color: 'text-brand-gold bg-brand-charcoal border-brand-gold/15',
      desc: 'Deploy patient billing databases and diagnostic scheduling queues compliant with international data sharing protocols.',
      challenge: 'Manual clinic schedules, insurance dispute delays, and medical file transcription lag.',
      solution: 'Configured Insta HIS patient logs linked directly with local medical insurance databases.',
      products: 'Insta HIS, custom tablet portals'
    },
    {
      title: 'Retail & E-Commerce',
      icon: ShoppingCart,
      color: 'text-brand-gold bg-brand-charcoal border-brand-gold/15',
      desc: 'Connect physical multi-store registers with cloud e-commerce sites, automating central inventory counts.',
      challenge: 'Stock level errors between online portals and warehouse registers causing order cancellations.',
      solution: 'Synchronized Logic ERP POS inventory pipelines with WooCommerce and Shopify interfaces.',
      products: 'Logic ERP, WooCommerce Bridges'
    },
    {
      title: 'Hospitality & Hotels',
      icon: Globe,
      color: 'text-brand-gold bg-brand-charcoal border-brand-gold/15',
      desc: 'Sync real-time room availability across global online travel booking portals to maximize pricing yields.',
      challenge: 'Room double-booking conflicts across different reservation websites during peak periods.',
      solution: 'Integrated RateGain room distribution engine with local property management databases.',
      products: 'RateGain Yield Optimization'
    },
    {
      title: 'Automotive & Garage Hubs',
      icon: Car,
      color: 'text-brand-gold bg-brand-charcoal border-brand-gold/15',
      desc: 'Streamline vehicle repair job cards, mechanic timesheets, and spare parts inventory scanning.',
      challenge: 'Vague repair estimate invoicing and delays in tracking available spare parts in stock rooms.',
      solution: 'Implemented Autorox garage systems mapped with local warehouse barcodes and SMS status updates.',
      products: 'Autorox Garage Systems'
    },
    {
      title: 'Manufacturing & Plants',
      icon: Building,
      color: 'text-brand-gold bg-brand-charcoal border-brand-gold/15',
      desc: 'Track assembly workflows, evaluate raw material costs, and schedule preventive machinery maintenance.',
      challenge: 'Machinery downtime due to unexpected breakdowns and uncoordinated batch scheduling.',
      solution: 'Integrated FACT ERP manufacturing ledgers with Alif Asset Management System (AMS) maintenance alerts.',
      products: 'FACT ERP, Alif AMS'
    },
    {
      title: 'Finance & Banking',
      icon: Landmark,
      color: 'text-brand-gold bg-brand-charcoal border-brand-gold/15',
      desc: 'Deploy encrypted multi-tenant software nodes and customized ledger applications.',
      challenge: 'Strict local banking compliance guidelines and legacy reporting latency.',
      solution: 'Constructed custom cloud database APIs with encrypted ledger syncing and automated report sheets.',
      products: 'Custom Secure Cloud APIs'
    }
  ]

  return (
    <div className="relative w-full pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background spotlights */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] right-[10%] w-[300px] h-[300px] bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Sector Optimization
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-offwhite">
            Industries We Serve
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            Alif Info Tech designs, integrates, and deploys software solutions customized specifically to meet the operational demands of each industry sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 flex flex-col justify-between hover:border-brand-gold/20 hover:bg-brand-charcoal/20 transition-all duration-300 glow-gold"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded flex items-center justify-center border ${ind.color}`}>
                    <ind.icon className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-offwhite font-serif">{ind.title}</h3>
                </div>

                <p className="text-brand-gray text-xs leading-relaxed">{ind.desc}</p>

                <div className="space-y-3.5 pt-2 text-xs border-t border-brand-offwhite/5">
                  <p className="text-brand-gray">
                    <strong className="text-brand-offwhite block mb-0.5 uppercase text-[9px] font-mono tracking-wider">Common Pain Point</strong>
                    {ind.challenge}
                  </p>
                  <p className="text-brand-gray">
                    <strong className="text-brand-offwhite block mb-0.5 uppercase text-[9px] font-mono tracking-wider">Our Deployment</strong>
                    {ind.solution}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-brand-offwhite/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-brand-gold bg-brand-gold/5 px-2.5 py-1 rounded border border-brand-gold/10">
                  {ind.products}
                </span>
                <button
                  onClick={handleContactClick}
                  className="text-brand-offwhite hover:text-brand-gold font-semibold text-xs flex items-center gap-1 transition-colors cursor-pointer group"
                >
                  Discuss sector project
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
