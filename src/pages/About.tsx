import { Compass, Eye, Shield, Users, Mail, MapPin, Phone } from 'lucide-react'

export default function About() {
  const offices = [
    {
      city: 'Doha, Qatar',
      type: 'Global Corporate HQ',
      address: 'Office 12, Floor 4, B-Ring Road, Doha, State of Qatar',
      phone: '+974 6682 3215',
      email: 'info@alifinfotech.net',
      support: 'Local Client Liaison & System SLA Auditing',
      image: '/doha_office.png'
    },
    {
      city: 'Hyderabad, India',
      type: 'Technical R&D Labs',
      address: 'Plot 42, Hitech City Phase II, Madhapur, Hyderabad, TS, 500081, India',
      phone: '+91 40 0000 0000',
      email: 'india@alifinfotech.net',
      support: 'Custom Coding, AI Model Training & QA Testing',
      image: '/hyderabad_lab.png'
    }
  ]

  const values = [
    { title: 'Technical Integrity', desc: 'We do not cut corners. We build on standardized frameworks with fully tested, documented code.', icon: Shield },
    { title: 'Customer Alignment', desc: 'Our developers align directly with your operational teams to adapt to changing project demands.', icon: Users },
    { title: 'Innovation Velocity', desc: 'We continuously train our engineers in predictive AI, machine learning and next-gen database solutions.', icon: Compass }
  ]

  return (
    <div className="relative w-full pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background spotlights */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] right-[10%] w-[300px] h-[300px] bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-offwhite">
            About Alif Info Tech Services
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            Founded with a vision to deliver robust, scalable corporate systems, Alif Info Tech coordinates technical development across borders to empower businesses in Qatar and India.
          </p>
        </div>

        {/* Vision & Mission Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 space-y-4 relative overflow-hidden group glow-gold">
            <Eye className="w-10 h-10 text-brand-gold mb-2 group-hover:scale-105 transition-transform duration-300" />
            <h2 className="text-2xl font-serif text-brand-offwhite">Our Long-term Vision</h2>
            <p className="text-xs text-brand-gray leading-relaxed">
              To be the premier B2B software engineering and systems integration partner in the Middle East and South Asia, known for compiling bulletproof databases, automated logistics, and localized developer availability.
            </p>
          </div>
          <div className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 space-y-4 relative overflow-hidden group glow-gold">
            <Compass className="w-10 h-10 text-brand-sand mb-2 group-hover:scale-105 transition-transform duration-300" />
            <h2 className="text-2xl font-serif text-brand-offwhite">Our Active Mission</h2>
            <p className="text-xs text-brand-gray leading-relaxed">
              "Transforming Ideas into Powerful and Scalable Digital Solutions." We achieve this by maintaining certified third-party partnerships, building custom products, and ensuring transparent staging delivery schedules.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-10">
          <div className="text-left space-y-2">
            <h2 className="text-2xl font-serif text-brand-offwhite">Our Core Operating Values</h2>
            <p className="text-brand-gray text-[10px] font-mono uppercase tracking-wide">The philosophy that guides every line of code we write.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded bg-brand-charcoal-light border border-brand-offwhite/5 space-y-4 glow-gold">
                <div className="w-10 h-10 rounded bg-brand-charcoal text-brand-gold border border-brand-gold/10 flex items-center justify-center">
                  <val.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-brand-offwhite font-mono uppercase tracking-wider">{val.title}</h3>
                <p className="text-xs text-brand-gray leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dual HQ Setup */}
        <div className="space-y-10">
          <div className="text-left space-y-2">
            <h2 className="text-2xl font-serif text-brand-offwhite">Our Global Office Footprint</h2>
            <p className="text-brand-gray text-[10px] font-mono uppercase tracking-wide">Strategically bridging market consultation with technical execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offices.map((off, idx) => (
              <div key={idx} className="p-6 rounded bg-brand-charcoal-light border border-brand-offwhite/5 space-y-6 flex flex-col justify-between hover:border-brand-gold/20 transition-all duration-300 group glow-gold">
                <div className="space-y-4 w-full">
                  {/* Office image cover */}
                  <div className="h-44 w-full rounded-lg overflow-hidden border border-brand-offwhite/5 relative">
                    <img 
                      src={off.image} 
                      alt={off.city} 
                      className="w-full h-full object-cover grayscale opacity-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-85 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal-light via-transparent to-transparent opacity-60"></div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-2xl font-serif text-brand-offwhite">{off.city}</h3>
                        <span className="text-[9px] font-mono text-brand-gold uppercase tracking-widest font-semibold">{off.type}</span>
                      </div>
                      <MapPin className="w-5 h-5 text-brand-gray/60" />
                    </div>
                  
                    <div className="space-y-3.5 text-xs leading-relaxed text-brand-gray">
                      <p>
                        <strong className="text-brand-offwhite block mb-0.5 font-mono text-[9px] uppercase tracking-wider">Physical Address</strong>
                        {off.address}
                      </p>
                      <p>
                        <strong className="text-brand-offwhite block mb-0.5 font-mono text-[9px] uppercase tracking-wider">Primary Focus</strong>
                        {off.support}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-offwhite/5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-xs text-brand-gray">
                  <span className="flex items-center gap-1 font-mono">
                    <Phone className="w-3.5 h-3.5 text-brand-gold" />
                    {off.phone}
                  </span>
                  <span className="flex items-center gap-1 font-mono">
                    <Mail className="w-3.5 h-3.5 text-brand-sand" />
                    {off.email}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
