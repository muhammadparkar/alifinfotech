// ─── Company ─────────────────────────────────────────────────────
export const COMPANY = {
  name: 'Alif Info Tech',
  tagline: 'Transforming Ideas into Powerful and Scalable Digital Solutions',
  subtitle: 'Innovation Experts',
  phone: '+974 6682 3215',
  email: 'info@alifinfotech.net',
  linkedin: 'https://linkedin.com/company/alif-info-tech-services-wll',
  whatsapp: 'https://wa.me/97466823215',
  tel: 'tel:+97466823215',
  offices: {
    doha: {
      city: 'Doha, Qatar',
      label: 'Head Office',
      address: 'Office No. 55, First Floor, Al Maha Business Center, Salwa Road, Doha, Qatar',
    },
    hyderabad: {
      city: 'Hyderabad, India',
      label: 'Branch Office',
      address: '#22-7-511, Purani Haveli, Hyderabad, Telangana, India – 500002',
    },
  },
} as const;

// ─── Navigation ───────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  children?: NavGroup[];
}
export interface NavGroup {
  group: string;
  items: { label: string; href: string; desc?: string }[];
}

export const NAV_LINKS: NavItem[] = [
  { label: 'Solutions', href: '/solutions' },
  {
    label: 'Partners',
    href: '/partners',
    children: [
      {
        group: 'ERP Partners',
        items: [
          { label: 'FACT ERP', href: '/partners#fact' },
          { label: 'Logic ERP', href: '/partners#logic' },
          { label: 'Wings ERP', href: '/partners#wings' },
          { label: 'Roadmap ERP', href: '/partners#roadmap' },
        ],
      },
      {
        group: 'HIS Partner',
        items: [{ label: 'Insta HIS', href: '/partners#insta' }],
      },
      {
        group: 'Garage Management',
        items: [{ label: 'Autorox', href: '/partners#autorox' }],
      },
      {
        group: 'Hotel Management',
        items: [{ label: 'RateGain', href: '/partners#rategain' }],
      },
    ],
  },
  {
    label: 'Our Products',
    href: '/products',
    children: [
      {
        group: '',
        items: [
          { label: 'Alif AMS', href: '/products#ams', desc: 'Asset Management System' },
          { label: 'Alif WMS', href: '/products#wms', desc: 'Workforce Management System' },
          { label: 'Alif Mobile', href: '/products#mobile', desc: 'Field-ready companion app' },
        ],
      },
    ],
  },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Our Clients', href: '/clients' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
];

// ─── Services ─────────────────────────────────────────────────────
export const SERVICES = [
  {
    num: '01',
    name: 'AI Solutions',
    desc: 'Transform your business with intelligent AI-powered services designed to automate workflows, enhance decision-making, and personalize user experiences at scale.',
    tags: ['Machine Learning', 'Automation', 'NLP', 'Analytics'],
  },
  {
    num: '02',
    name: 'Web Application Development',
    desc: 'Robust and intuitive applications designed to elevate your business operations and engage users with seamless, high-performance digital experiences.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    num: '03',
    name: 'Web Development',
    desc: 'Expert web development solutions tailored to elevate your digital presence with performance, modern aesthetics, and measurable business results.',
    tags: ['CMS', 'SEO', 'Performance', 'Responsive'],
  },
  {
    num: '04',
    name: 'Mobile App Development',
    desc: 'Native and cross-platform mobile applications that feel at home on every device — built for scale, speed, and user delight from the first launch.',
    tags: ['iOS', 'Android', 'React Native', 'Flutter'],
  },
  {
    num: '05',
    name: 'ERP / CRM / DMS / HIS',
    desc: 'End-to-end enterprise solutions to streamline operations, boost engagement, and transform how your organization is managed and measured.',
    tags: ['ERP', 'CRM', 'Healthcare', 'Document Mgmt'],
  },
  {
    num: '06',
    name: 'Cloud Solutions',
    desc: 'Comprehensive cloud migration, management, and optimization services to drive operational efficiency and sustainable business growth at scale.',
    tags: ['AWS', 'Azure', 'Google Cloud', 'DevOps'],
  },
  {
    num: '07',
    name: 'Business Consultation',
    desc: 'Strategic advisory combining innovation, deep insight, and disciplined execution to achieve measurable business impact and lasting competitive advantage.',
    tags: ['Strategy', 'Digital Transformation', 'Process Audit'],
  },
] as const;

// ─── Pillars (Why Choose Us) ───────────────────────────────────────
export const PILLARS = [
  {
    title: 'Experience',
    desc: 'Tailored digital solutions crafted to enhance satisfaction, engagement, and overall success in every business interaction.',
  },
  {
    title: 'Products',
    desc: 'Curated product line designed to meet modern demands while ensuring quality, innovation, performance, and reliability.',
  },
  {
    title: 'Support',
    desc: 'Dedicated support always ready to ensure your journey toward business growth is smooth, effective, and uninterrupted.',
  },
  {
    title: 'Approach',
    desc: 'Strategic approach combining innovation, insight, and execution to achieve measurable success and lasting business impact.',
  },
  {
    title: 'Delivery',
    desc: 'On-time delivery with a seamless process, prioritizing reliability, efficiency, and quality in every project.',
  },
  {
    title: 'Pricing',
    desc: 'Flexible and transparent pricing offering unmatched value while aligning with your budget and business goals for maximum ROI.',
  },
] as const;

// ─── Partners ─────────────────────────────────────────────────────
export const PARTNERS = [
  {
    id: 'fact',
    name: 'FACT ERP',
    group: 'ERP Partner',
    oneliner: 'A globally trusted ERP suite for finance, distribution, and manufacturing — proven across the GCC for over three decades.',
    color: '#1A2E8A',
  },
  {
    id: 'logic',
    name: 'Logic ERP',
    group: 'ERP Partner',
    oneliner: 'Feature-rich ERP covering retail, FMCG, and distribution with deep localization for Indian and Gulf markets.',
    color: '#0D1B5E',
  },
  {
    id: 'wings',
    name: 'Wings ERP',
    group: 'ERP Partner',
    oneliner: 'Scalable business management software for SMEs — covering accounts, inventory, payroll, and statutory compliance.',
    color: '#1A2E8A',
  },
  {
    id: 'roadmap',
    name: 'Roadmap ERP',
    group: 'ERP Partner',
    oneliner: 'Construction and project-focused ERP built for contractors, real estate developers, and infrastructure firms.',
    color: '#0D1B5E',
  },
  {
    id: 'insta',
    name: 'Insta HIS',
    group: 'HIS Partner',
    oneliner: 'Comprehensive Hospital Information System covering OPD, IPD, pharmacy, labs, and billing for modern healthcare.',
    color: '#1A2E8A',
  },
  {
    id: 'autorox',
    name: 'Autorox',
    group: 'Garage Management',
    oneliner: 'End-to-end garage and automotive service management — job cards, parts inventory, and customer CRM in one platform.',
    color: '#0D1B5E',
  },
  {
    id: 'rategain',
    name: 'RateGain',
    group: 'Hotel Management',
    oneliner: 'AI-powered revenue management and distribution for hotels — rate intelligence, channel management, and demand forecasting.',
    color: '#1A2E8A',
  },
] as const;

// ─── Industries ───────────────────────────────────────────────────
export const INDUSTRIES = [
  { name: 'Projects', icon: '◈', desc: 'End-to-end lifecycle management with budgeting, milestones, and real-time reporting.' },
  { name: 'Waste Management', icon: '◎', desc: 'Digital tracking, route planning, and compliance for environmental services.' },
  { name: 'Health & Fitness', icon: '◇', desc: 'Membership, scheduling, and operations for gyms and wellness centers.' },
  { name: 'Outsourcing Services', icon: '◉', desc: 'Workforce, contract, and billing management for staffing businesses.' },
  { name: 'Logistics', icon: '▷', desc: 'Fleet, dispatch, and supply chain solutions for transport operators.' },
  { name: 'Real Estate', icon: '□', desc: 'Property management, CRM, and financial tools for developers and agencies.' },
  { name: 'Construction', icon: '△', desc: 'Project costing, subcontractor management, and site monitoring.' },
  { name: 'Hospitality', icon: '◈', desc: 'Hotel management, revenue optimization, and guest experience platforms.' },
  { name: 'Garage Services', icon: '⬡', desc: 'Automotive service management — job cards, inventory, customer records.' },
] as const;

// ─── Core Principles ──────────────────────────────────────────────
export const PRINCIPLES = [
  {
    num: '01',
    title: 'Customer Research',
    desc: 'Thorough market research and analysis to gain insights into preferences, requirements, and expectations via surveys, interviews, focus groups, and data analysis.',
  },
  {
    num: '02',
    title: 'Effective Communication',
    desc: "Clear and open lines of communication to ensure thorough understanding of client needs. We actively listen to feedback, concerns, and suggestions.",
  },
  {
    num: '03',
    title: 'Risk Factor Assessment',
    desc: 'We identify and evaluate specific risk factors that could impact delivery — used in project management, workplace safety, and compliance frameworks.',
  },
  {
    num: '04',
    title: 'Customization & Personalization',
    desc: 'We recognize each client has unique needs. We offer personalized solutions and tailor products or services to meet individual requirements.',
  },
  {
    num: '05',
    title: 'Quality Assurance',
    desc: 'We adhere to quality standards, industry best practices, and regulatory requirements to ensure reliability, functionality, and performance.',
  },
  {
    num: '06',
    title: 'Continuous Improvement',
    desc: 'A systematic approach to constantly enhancing processes, products, and services — identifying areas for improvement and monitoring results.',
  },
  {
    num: '07',
    title: 'Empathetic Customer Support',
    desc: 'Active listening, empathy, and problem-solving to address customer concerns with genuine care, understanding, and prompt resolution.',
  },
  {
    num: '08',
    title: 'Timely & Efficient Service',
    desc: 'Providing products, assistance, or solutions in a timely manner while maximizing productivity and minimizing unnecessary delays.',
  },
  {
    num: '09',
    title: 'Compliance & Ethics',
    desc: 'We operate in accordance with legal and ethical standards, keeping up-to-date with relevant laws, regulations, and industry requirements.',
  },
  {
    num: '10',
    title: 'Build Trust & Relationships',
    desc: 'Strong relationships with clients based on trust, transparency, and mutual respect — fostering a customer-centric culture at every level.',
  },
] as const;

// ─── Products ─────────────────────────────────────────────────────
export const PRODUCTS = [
  {
    id: 'ams',
    name: 'Alif AMS',
    fullName: 'Asset Management System',
    badge: 'Track · Maintain · Optimize',
    intro: 'Help organizations efficiently track, maintain, and optimize their assets throughout their entire lifecycle. Whether you manage equipment, vehicles, or IT infrastructure, AMS ensures every asset is monitored, maintained, and utilized effectively.',
    features: [
      'Real-time Asset Tracking and Monitoring',
      'Preventive & Scheduled Maintenance',
      'Automated Request and Allocation System',
      'Asset Purchase & Warranty Tracking',
      'Material and Service Ticket Management',
      'Maintenance Scheduling and Alerts',
    ],
    benefits: [
      'Reduce downtime with preventive maintenance',
      'Increase asset lifespan and ROI',
      'Simplify audits with centralized records',
      'Make data-driven decisions with smart dashboards',
    ],
  },
  {
    id: 'wms',
    name: 'Alif WMS',
    fullName: 'Workforce Management System',
    badge: 'Schedule · Track · Optimize',
    intro: 'Designed to streamline workforce operations, ensuring optimal team performance and efficient contract management. The perfect solution for businesses looking to improve scheduling, attendance, and task management.',
    features: [
      'Employee and Contractor Management',
      'Smart Shift Scheduling',
      'Attendance and Timesheet Tracking',
      'Contract and Budget Monitoring',
      'Invoice and Payroll Integration',
      'Alerts for Contract Expiry and Renewals',
    ],
    benefits: [
      'Boost team productivity and accountability',
      'Automate repetitive HR and admin tasks',
      'Gain real-time visibility of workforce performance',
      'Ensure compliance with labor and contract policies',
    ],
  },
  {
    id: 'mobile',
    name: 'Alif Mobile',
    fullName: 'Alif Mobile Application',
    badge: 'Anywhere · Anytime · Offline-ready',
    intro: 'A field-ready companion app for AMS and WMS — designed for teams on the move. Manage assets, track attendance, approve requests, and stay connected to your operations from anywhere, even without internet.',
    features: [
      'Native iOS & Android Experience',
      'Offline-capable with Smart Sync',
      'Real-time Push Notifications',
      'Biometric & Secure Authentication',
      'Asset QR / Barcode Scanning',
      'Approval Workflows on the Go',
    ],
    benefits: [
      'Empower field teams with mobile-first tools',
      'Reduce manual data entry errors',
      'Access critical data anywhere, anytime',
      'Sync seamlessly with AMS & WMS desktop',
    ],
  },
] as const;

// ─── ERP Modules ──────────────────────────────────────────────────
export const ERP_MODULES = [
  { name: 'Project Management', desc: 'Support, upgrades, integration, and change management for controlled ERP delivery.' },
  { name: 'Procurement', desc: 'Ensures cost effectiveness by bringing production and procurement much closer.' },
  { name: 'HRMS', desc: 'Superior workforce management, talent acquisition, and advanced remuneration systems.' },
  { name: 'Sales & Distribution', desc: 'Streamline order management, customer delivery, and distribution tracking.' },
  { name: 'Production Management', desc: 'Digitize operations for leadership in the Industry 4.0 era.' },
  { name: 'Quality Management', desc: 'Customer-focused QMS ensuring adherence to industry standards.' },
  { name: 'Inventory Management', desc: 'Real-time visibility and control over inventory and stock.' },
  { name: 'Finance & Accounting', desc: 'Improve financial planning, budgeting, reporting, and analysis.' },
  { name: 'Plant Maintenance', desc: 'Tailored maintenance plans and optimal uptime of equipment.' },
  { name: 'Customer Relationship', desc: 'Build stronger customer relationships and improve service delivery.' },
] as const;

// ─── Differentiators (Why Choose Us) ──────────────────────────────
export const DIFFERENTIATORS = [
  {
    num: '01',
    title: 'Customer Focused',
    body: "We don't deliver software — we solve business problems. Every engagement starts with listening: understanding your workflows, your bottlenecks, and your ambitions before a single line of code is written. Our satisfaction metrics are tied to your outcomes, not ours.",
  },
  {
    num: '02',
    title: 'Experienced Staff',
    body: 'Our team brings years of real-world delivery experience across ERP, cloud, AI, and product engineering. We have worked with businesses across Qatar, India, and the GCC — giving us rare context about local regulations, market expectations, and enterprise-grade challenges.',
  },
  {
    num: '03',
    title: 'Resources to Deliver',
    body: 'Dual offices in Doha and Hyderabad mean we have the capacity to handle large, complex projects without compromising quality or timelines. Our delivery model blends on-site engagement with a deep technical bench — so you always have the right people on the job.',
  },
  {
    num: '04',
    title: 'Process Oriented',
    body: 'We follow structured project methodologies — from discovery and prototyping through to deployment and support. Every project has a clear scope, milestones, and accountability. This is how we deliver on time, on budget, and without the surprises.',
  },
  {
    num: '05',
    title: 'Strong & Trusted Partnerships',
    body: 'We are authorized partners of leading ERP platforms — FACT, Logic, Wings, Roadmap — as well as specialist solutions like Insta HIS, Autorox, and RateGain. These are not reseller relationships; they are deep technical alliances that let us deliver best-in-class solutions for every industry.',
  },
] as const;
