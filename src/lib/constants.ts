export const SITE = {
  name: "Renown360",
  tagline: "IT Consulting",
  fullName: "Renown360 IT Consulting",
  description:
    "End-to-end IT consulting and staffing solutions for Fortune 500 enterprises. Legacy modernization, cloud transformation, ERP/CRM, and top-tier talent placement.",
  url: "https://renown360.com",
  email: "careers@renown360.com",
  phone: "+1 (984) 376-9525",
  address: {
    line1: "1309 Coffeen Avenue STE 1200",
    city: "Sheridan",
    state: "WY",
    zip: "82801",
    country: "USA",
  },
  social: {
    linkedin: "#",
    twitter: "#",
  },
};

export const NAV_LINKS = [
  { label: "Services",   href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About",      href: "/about" },
  { label: "Team",       href: "/team" },
  { label: "Blog",       href: "/blog" },
  { label: "Careers",    href: "/careers" },
  { label: "Contact",    href: "/contact" },
];

export const SERVICES = [
  {
    slug: "it-staffing-consulting",
    icon: "Users",
    title: "IT Staffing & Consulting",
    shortDesc:
      "Source pre-vetted, enterprise-ready talent — contract, contract-to-hire, and direct placement — across all major technology disciplines.",
    longDesc:
      "Our bench of 100+ active consultants spans software engineering, cloud architecture, data engineering, cybersecurity, and ERP administration. We handle sourcing, screening, compliance, and onboarding — so you get productive contributors from day one.",
    features: [
      "W2 & C2C contract models",
      "Contract-to-hire and direct placement",
      "Compliance & visa management",
      "Dedicated delivery manager",
      "SLA-backed placements",
    ],
    technologies: ["Java", "Python", "AWS", "Azure", "SAP", "Salesforce", "Oracle", "Kubernetes"],
  },
  {
    slug: "legacy-modernization",
    icon: "RefreshCw",
    title: "Legacy System Modernization",
    shortDesc:
      "Migrate monolithic applications to modern, cloud-native architectures without disrupting business continuity.",
    longDesc:
      "We assess your existing landscape, define a phased migration roadmap, and execute iteratively. Our proven methodology minimises risk while progressively unlocking performance, scalability, and developer velocity.",
    features: [
      "Application portfolio assessment",
      "Microservices decomposition",
      "API-first re-platforming",
      "Strangler-fig pattern execution",
      "Zero-downtime cutover strategy",
    ],
    technologies: ["Spring Boot", "Node.js", "Docker", "Kubernetes", "Kafka", "PostgreSQL", "Redis"],
  },
  {
    slug: "cloud-migration",
    icon: "Cloud",
    title: "Cloud Migration & DevOps",
    shortDesc:
      "Accelerate your move to AWS, Azure, or GCP with battle-tested migration frameworks and full DevOps enablement.",
    longDesc:
      "From lift-and-shift to full cloud-native refactoring, we design and execute cloud journeys that optimise cost, reliability, and security. Our DevOps practice embeds CI/CD, IaC, and FinOps from the start.",
    features: [
      "Cloud readiness assessment",
      "Multi-cloud & hybrid architecture",
      "Infrastructure as Code (Terraform/CDK)",
      "CI/CD pipeline automation",
      "FinOps cost optimisation",
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "GitHub Actions", "ArgoCD", "Helm", "Prometheus"],
  },
  {
    slug: "erp-crm",
    icon: "LayoutGrid",
    title: "ERP & CRM Implementation",
    shortDesc:
      "End-to-end SAP, Oracle, Salesforce, and HubSpot implementations — from design to go-live and hypercare.",
    longDesc:
      "Our certified functional and technical consultants deliver large-scale ERP/CRM programmes on time and within budget. We specialise in greenfield implementations, system upgrades, and cross-system integrations.",
    features: [
      "Fit-gap analysis & blueprint",
      "Configuration & customisation",
      "Data migration & cleansing",
      "Integration with downstream systems",
      "Training & change management",
    ],
    technologies: ["SAP S/4HANA", "Oracle EBS", "Salesforce CRM", "HubSpot", "MuleSoft", "Dell Boomi"],
  },
  {
    slug: "data-analytics-ai",
    icon: "BarChart2",
    title: "Data Analytics & AI/ML",
    shortDesc:
      "Turn raw data into strategic advantage with modern data platforms, real-time analytics, and production-grade ML pipelines.",
    longDesc:
      "We architect lakehouses, build ETL/ELT pipelines, and deploy ML models that deliver measurable business impact. From BI dashboards to GenAI solutions, we cover the full data lifecycle.",
    features: [
      "Data platform & lakehouse architecture",
      "ETL/ELT pipeline engineering",
      "BI & self-service analytics",
      "ML model development & MLOps",
      "GenAI & LLM integration",
    ],
    technologies: ["Databricks", "Snowflake", "dbt", "Apache Spark", "Tableau", "Power BI", "TensorFlow", "OpenAI"],
  },
  {
    slug: "digital-transformation",
    icon: "Zap",
    title: "Digital Transformation",
    shortDesc:
      "Strategy-led programmes that reimagine processes, culture, and technology to unlock new business value.",
    longDesc:
      "We partner with CXOs to diagnose transformation gaps, define a future-state architecture, and deploy cross-functional teams to execute. From product strategy to agile operating models, we drive measurable outcomes.",
    features: [
      "Digital maturity assessment",
      "Operating model redesign",
      "Product-led growth enablement",
      "Agile & SAFe transformation",
      "Executive advisory & roadmapping",
    ],
    technologies: ["JIRA", "Confluence", "Miro", "Figma", "ServiceNow", "Workday"],
  },
];

export const INDUSTRIES = [
  {
    slug: "financial-services",
    icon: "Landmark",
    title: "Financial Services",
    desc: "Core banking modernisation, regulatory compliance (SOX, PCI-DSS), risk platforms, and trading system upgrades for banks, insurers, and capital markets firms.",
    clients: ["Investment Banks", "Insurance Carriers", "Fintech Startups", "Asset Managers"],
  },
  {
    slug: "healthcare-life-sciences",
    icon: "HeartPulse",
    title: "Healthcare & Life Sciences",
    desc: "EHR integrations, HIPAA-compliant cloud solutions, clinical data platforms, and digital health applications for hospital systems and pharma firms.",
    clients: ["Hospital Systems", "Health Plans", "Pharma", "MedTech"],
  },
  {
    slug: "manufacturing",
    icon: "Factory",
    title: "Manufacturing & Supply Chain",
    desc: "Smart factory initiatives, ERP rollouts, IoT data platforms, and supply chain visibility solutions for discrete and process manufacturers.",
    clients: ["Automotive OEMs", "Aerospace", "Consumer Goods", "Industrial"],
  },
  {
    slug: "retail-ecommerce",
    icon: "ShoppingBag",
    title: "Retail & eCommerce",
    desc: "Omnichannel platforms, personalisation engines, inventory optimisation, and loyalty systems for retailers operating at scale.",
    clients: ["Enterprise Retailers", "D2C Brands", "Marketplaces", "Grocery Chains"],
  },
  {
    slug: "telecom-media",
    icon: "Radio",
    title: "Telecom & Media",
    desc: "BSS/OSS modernisation, 5G network platforms, content delivery infrastructure, and subscriber analytics for telecoms and media companies.",
    clients: ["Tier-1 Carriers", "Cable MSOs", "Streaming Platforms", "Broadcasting"],
  },
  {
    slug: "government-public-sector",
    icon: "Building2",
    title: "Government & Public Sector",
    desc: "FedRAMP-compliant cloud migrations, citizen-facing digital services, data interoperability, and cybersecurity for federal and state agencies.",
    clients: ["Federal Agencies", "State & Local", "Defense", "Education"],
  },
];

export const STATS = [
  { value: 100, suffix: "+", label: "Active Consultants" },
  { value: 50,  suffix: "+", label: "Enterprise Clients" },
  { value: 98,  suffix: "%", label: "Client Satisfaction" },
  { value: 14,  suffix: "mo", label: "Avg. Retention" },
];

export const VALUES = [
  {
    icon: "Shield",
    title: "Integrity First",
    desc: "We operate with full transparency — on pricing, timelines, and outcomes. No surprises.",
  },
  {
    icon: "Target",
    title: "Outcome Driven",
    desc: "Every engagement is anchored to measurable business outcomes, not just activity metrics.",
  },
  {
    icon: "Zap",
    title: "Agile by Default",
    desc: "We ship in iterations, adapt to change, and eliminate waste from every engagement model.",
  },
  {
    icon: "Globe",
    title: "Global Reach",
    desc: "On-shore, near-shore, and off-shore delivery — calibrated to your cost and quality requirements.",
  },
];

export const TECH_STACK = [
  { category: "Cloud",       items: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"] },
  { category: "Data & AI",   items: ["Databricks", "Snowflake", "Spark", "dbt", "OpenAI"] },
  { category: "ERP / CRM",   items: ["SAP S/4HANA", "Oracle EBS", "Salesforce", "HubSpot"] },
  { category: "Backend",     items: ["Java / Spring", "Python", "Node.js", "Go", ".NET"] },
  { category: "DevOps",      items: ["GitHub Actions", "ArgoCD", "Docker", "Helm", "Prometheus"] },
  { category: "Frontend",    items: ["React", "Next.js", "TypeScript", "Vue.js", "Angular"] },
];

export const OPEN_ROLES = [
  {
    title: "Senior Java Developer",
    type: "Contract",
    location: "Remote / Durham, NC",
    department: "Engineering",
  },
  {
    title: "SAP S/4HANA Consultant",
    type: "Contract",
    location: "Hybrid – Dallas, TX",
    department: "ERP Practice",
  },
  {
    title: "AWS Cloud Architect",
    type: "Contract",
    location: "Remote",
    department: "Cloud Practice",
  },
  {
    title: "Salesforce Developer",
    type: "Contract",
    location: "Remote / Charlotte, NC",
    department: "CRM Practice",
  },
  {
    title: "Data Engineer (Databricks)",
    type: "Contract",
    location: "Remote",
    department: "Data & AI Practice",
  },
  {
    title: "Business Development Manager",
    type: "Full-Time",
    location: "Durham, NC",
    department: "Sales",
  },
];
