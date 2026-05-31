interface WhyChooseUsProps {
  setCurrentPage: (page: string) => void;
}

export default function WhyChooseUs({ setCurrentPage }: WhyChooseUsProps) {
  const handleContactClick = () => {
    setCurrentPage('contact')
    window.location.hash = '#contact'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const sections = [
    {
      num: '01',
      title: 'Bridging Doha Consulting with Hyderabad Execution',
      lead: 'A coordinated presence that ensures compliance, speed, and cost efficiency.',
      body: 'Our structural footprint gives enterprise clients the best of both worlds. We retain our senior systems architects at our headquarters in Doha (State of Qatar) to consult directly with managers, evaluate regional compliance (like Qatar taxation and HL7 healthcare standards), and audit active databases on-site. The heavy software development and coding execution is handled by our specialized tech lab in Hitech City, Hyderabad, matching international engineering talent with optimized development cost structures.'
    },
    {
      num: '02',
      title: 'milestone-based Rates & Full Source Code Ownership',
      lead: 'Pragmatic pricing that prevents vendor lock-in and vendor pricing spikes.',
      body: 'We reject hidden licensing fees, database markups, or endless rolling developer costs. Alif operates on clean, milestone-based rates defined clearly before contracts are signed. Once a custom system is completed, tested, and pushed live, we transfer full ownership of the source code repository directly to the client. This leaves your company in complete control of its digital intellectual property.'
    },
    {
      num: '03',
      title: 'Interactive Staging Previews & Agile Bi-Weekly Sprints',
      lead: 'Transparency you can click, test, and approve at every sprint cycle.',
      body: 'We do not build software in isolation and present it months later. We develop in strict bi-weekly sprints, assigning tasks transparently. At the end of every sprint, clients receive secure staging dashboard links where they can view, click, and validate new modules. Development is an active collaboration, allowing you to request design changes or schema tweaks before they are locked into production.'
    },
    {
      num: '04',
      title: 'High-Availability SLAs & Dedicated Developer Hotlines',
      lead: 'Ironclad maintenance agreements protecting your core company revenue.',
      body: 'Database deadlocks, POS checkout failures, or warehouse routing drops are emergency situations. Alif backs its custom integrations with dedicated Service Level Agreements (SLAs) supporting 24/7 active developer hotlines. We guarantee engineer response times under 15 minutes to diagnose processing drops, execute emergency backups, or patch critical database synchronizations.'
    },
    {
      num: '05',
      title: 'Secure CI/CD Deployment Pipelines',
      lead: 'Modern containerized structures built to protect enterprise records.',
      body: 'Data security is paramount. We build our solutions on isolated container nodes (Docker/GCP) with automated build validation pipelines (GitHub Actions, GitLab). Every database migration is automated and backed up. Alif ensures your company databases, customer invoices, and inventory logs remain secure and accessible.'
    },
    {
      num: '06',
      title: 'Pre-Built Software Platforms for Rapid Customization',
      lead: 'Accelerating project delivery by up to 50% without rebuilding from scratch.',
      body: 'We offer proprietary base platforms, including Alif AMS (Asset Management) and Alif WMS (Warehouse Control), designed and maintained by our senior engineers. Instead of coding basic database models from scratch, we customize these stable bases to match your specific operations, reducing deployment latency, testing overheads, and overall project costs.'
    }
  ]

  return (
    <div className="relative w-full pt-32 pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] right-[10%] w-[300px] h-[300px] bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-20">
        {/* Header */}
        <div className="space-y-4">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Core Philosophy
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-brand-offwhite max-w-2xl">
            Why Leading Enterprises Partner with Alif
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            Over a decade of successful implementations across the Middle East and India has established us as a premier partner for digital operations.
          </p>
        </div>

        {/* Detailed Differentiators List */}
        <div className="space-y-16">
          {sections.map((sec) => (
            <div key={sec.num} className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-12 border-t border-brand-offwhite/5 first:border-0 first:pt-0">
              {/* Number and accent */}
              <div className="md:col-span-2">
                <span className="text-3xl font-mono font-bold text-brand-gold">{sec.num}</span>
                <span className="block w-6 h-[1px] bg-brand-gold/40 mt-2"></span>
              </div>
              {/* Title & Body */}
              <div className="md:col-span-10 space-y-4">
                <h2 className="text-2xl font-serif text-brand-offwhite">{sec.title}</h2>
                <p className="text-xs text-brand-gold font-mono tracking-wide uppercase">{sec.lead}</p>
                <p className="text-xs text-brand-gray leading-relaxed font-sans">{sec.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Global call to action */}
        <div className="p-8 rounded bg-brand-charcoal-light border border-brand-offwhite/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 glow-gold">
          <div className="space-y-1">
            <h3 className="text-lg font-serif text-brand-offwhite">Ready to Experience the Alif Difference?</h3>
            <p className="text-[11px] text-brand-gray">Schedule a free 30-minute system consultation with our technical architects.</p>
          </div>
          <button
            onClick={handleContactClick}
            className="px-6 py-4 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark font-semibold text-xs shrink-0 cursor-pointer transition-colors"
          >
            Schedule Consultation Now
          </button>
        </div>
      </div>
    </div>
  )
}
