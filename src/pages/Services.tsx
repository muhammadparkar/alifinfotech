import { Brain, Code, Laptop, Smartphone, Database, Cloud, LineChart, CheckCircle2, ChevronRight } from 'lucide-react'

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const handleContactClick = () => {
    setCurrentPage('contact')
    window.location.hash = '#contact'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const allServices = [
    {
      id: 'ai',
      title: 'AI Solutions',
      icon: Brain,
      color: 'text-brand-gold bg-brand-charcoal-light border-brand-gold/20',
      desc: 'Harness the power of Artificial Intelligence to automate complex decisions, analyze unstructured data, and provide predictive intelligence.',
      bullets: [
        'Custom Machine Learning models (TensorFlow, PyTorch)',
        'Natural Language Processing (NLP) for customer bots & classification',
        'Computer Vision & Object Detection for warehouses & surveillance',
        'Predictive business intelligence and forecasting systems'
      ],
      tech: 'Python, PyTorch, OpenAI API, AWS SageMaker'
    },
    {
      id: 'web-app',
      title: 'Web Application Development',
      icon: Code,
      color: 'text-brand-gold bg-brand-charcoal-light border-brand-gold/20',
      desc: 'We engineer highly interactive, robust, and responsive single-page and server-rendered web applications built to handle millions of queries.',
      bullets: [
        'Secure multi-tenant SaaS architecture configurations',
        'Real-time dashboards, interactive charts & notifications',
        'State-of-the-art API designs and microservices integration',
        'Rigorous automated unit & integration testing matrices'
      ],
      tech: 'React, Node.js, TypeScript, PostgreSQL, GraphQL'
    },
    {
      id: 'web',
      title: 'Web Development & Branding',
      icon: Laptop,
      color: 'text-brand-gold bg-brand-charcoal-light border-brand-gold/20',
      desc: 'Premium front-end corporate portfolios, branding directories and lightning-fast marketing hubs designed to capture conversions.',
      bullets: [
        'SEO-optimized, mobile-first responsive landing experiences',
        'Headless CMS integrations (Strapi, Sanity, Contentful)',
        'Speed optimization scoring 95+ on Google PageSpeed Insights',
        'Interactive UI/UX prototypes designed in Figma'
      ],
      tech: 'Vite, Next.js, Tailwind CSS, Headless CMS'
    },
    {
      id: 'mobile',
      title: 'Mobile App Development',
      icon: Smartphone,
      color: 'text-brand-gold bg-brand-charcoal-light border-brand-gold/20',
      desc: 'Build frictionless native and cross-platform mobile apps for iOS and Android. Empower your field operations and end customers.',
      bullets: [
        'Cross-platform Flutter & React Native setups',
        'Offline-first capabilities with SQLite local syncing',
        'Payment gateway integrations (Stripe, QPay, local banks)',
        'Biometric authentication and real-time push messaging'
      ],
      tech: 'Flutter, React Native, Swift, Kotlin'
    },
    {
      id: 'erp',
      title: 'ERP / CRM / DMS / HIS Systems',
      icon: Database,
      color: 'text-brand-gold bg-brand-charcoal-light border-brand-gold/20',
      desc: 'Maximize company workflow efficiency. We integrate, configure, and extend world-renowned enterprise management suites.',
      bullets: [
        'Integration with FACT ERP, Logic ERP, Wings & Roadmap ERP',
        'Custom Hospital Information Systems (HIS) using Insta HIS',
        'Robust Document Management Systems (DMS) for paperless workflows',
        'Bespoke Customer Relationship Management (CRM) databases'
      ],
      tech: 'SAP, FACT, Logic, Custom SQL Bridges'
    },
    {
      id: 'cloud',
      title: 'Cloud Solutions & DevOps',
      icon: Cloud,
      color: 'text-brand-gold bg-brand-charcoal-light border-brand-gold/20',
      desc: 'Move your digital operations securely to the cloud. We construct highly-available, auto-scaling architectures with ironclad firewalls.',
      bullets: [
        'AWS, Azure, and Google Cloud Platform (GCP) configurations',
        'CI/CD deployment pipelines (GitHub Actions, GitLab)',
        'Infrastructure as Code (IaC) using Terraform',
        'Kubernetes container orchestration and Docker deployments'
      ],
      tech: 'Terraform, Docker, Kubernetes, AWS, Jenkins'
    },
    {
      id: 'consulting',
      title: 'Business Technology Consultation',
      icon: LineChart,
      color: 'text-brand-gold bg-brand-charcoal-light border-brand-gold/20',
      desc: 'Evaluate your existing infrastructure, discover bottlenecks, and align your technology decisions with strategic growth objectives.',
      bullets: [
        'Legacy code audits and security vulnerability reports',
        'Scalability roadmaps and database query optimization plans',
        'Technology stack transitions (e.g. migrating to serverless)',
        'Vendor analysis and project management guidance'
      ],
      tech: 'Agile Frameworks, ITIL, Compliance Audits'
    }
  ]

  return (
    <div className="relative w-full pt-24 lg:pt-32 pb-16 lg:pb-24 px-6 bg-brand-charcoal text-left">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] radial-spotlight pointer-events-none z-0"></div>
      <div className="absolute top-[30vh] right-[10%] w-[300px] h-[300px] bg-brand-gold/2 rounded-full blur-[120px] pointer-events-none animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-left space-y-4 max-w-3xl">
          <span className="text-[10px] font-mono text-brand-gold uppercase tracking-widest block">
            Capabilities Matrix
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-brand-offwhite">
            Our Professional IT Services
          </h1>
          <p className="text-brand-gray text-xs md:text-sm leading-relaxed max-w-xl">
            From deploying scalable enterprise cloud systems to training custom prediction models, Alif Info Tech provides full-lifecycle engineering services.
          </p>
        </div>

        {/* Services Detail List */}
        <div className="space-y-12">
          {allServices.map((svc) => (
            <div
              key={svc.id}
              className={`p-8 md:p-12 rounded bg-brand-charcoal-light border border-brand-offwhite/5 flex flex-col lg:flex-row gap-8 lg:gap-12 items-start glow-gold hover:border-brand-gold/20 transition-colors duration-300`}
            >
              {/* Left Side: Icon & Title */}
              <div className="lg:w-1/3 space-y-4">
                <div className={`w-14 h-14 rounded flex items-center justify-center border ${svc.color}`}>
                  <svc.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif text-brand-offwhite">{svc.title}</h2>
                <p className="text-brand-gray text-xs leading-relaxed">{svc.desc}</p>
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-brand-gold bg-brand-gold/5 px-3 py-1 rounded border border-brand-gold/10 select-none">
                    {svc.tech}
                  </span>
                </div>
              </div>

              {/* Right Side: Details & Bullets */}
              <div className="lg:w-2/3 w-full flex flex-col justify-between h-full space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {svc.bullets.map((bullet, idx) => (
                    <div key={idx} className="p-4 rounded bg-brand-charcoal border border-brand-offwhite/5 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                      <span className="text-xs text-brand-offwhite/90 leading-snug">{bullet}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-brand-offwhite/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[10px] text-brand-gray font-mono">Available in Qatar & India (Hybrid/On-Site models)</span>
                  <button
                    onClick={handleContactClick}
                    className="w-full sm:w-auto px-5 py-3 rounded bg-brand-gold hover:bg-brand-gold-light text-brand-charcoal-dark text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    Discuss project parameters
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
