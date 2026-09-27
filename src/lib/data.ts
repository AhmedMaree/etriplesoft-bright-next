export const services = [
  {
    slug: "odoo",
    title: "Odoo ERP",
    icon: "settings",
    description:
      "Implementation, customization, integrations, training and support for connected operations.",
  },
  {
    slug: "cloud",
    title: "Cloud & Security",
    icon: "cloud",
    description:
      "Cloud infrastructure, identity, endpoint protection, backup and managed support.",
  },
  {
    slug: "ai",
    title: "AI & Automation",
    icon: "brain",
    description:
      "Practical automation for documents, workflows, analytics and customer service.",
  },
  {
    slug: "web",
    title: "Web Development",
    icon: "monitor",
    description:
      "Business websites, online stores and service portals connected to your systems.",
  },
  {
    slug: "mobile",
    title: "Mobile Applications",
    icon: "phone",
    description:
      "Customer and business applications for iOS, Android and cross-platform delivery.",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    icon: "chart",
    description:
      "SEO, paid media, social, content and reporting connected to your sales process.",
  },
];

export type ServiceData = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  primary: string;
  secondary: string;
  secondaryHref?: string;
  note: string;
  checks?: string[];
  sectionTitle: string;
  sectionDescription: string;
  cards: [string, string, string][];
  processTitle: string;
  steps: string[];
  cta: string;
  questions: string[];
};

export const servicePages: Record<string, ServiceData> = {
  odoo: {
    eyebrow: "ODOO ERP · IMPLEMENTATION · SUPPORT",
    title: "Connect Every Part of Your Business",
    accent: "with Odoo",
    description:
      "Bring finance, sales, inventory, projects, people and customer operations into one adaptable ERP platform, implemented around the way your business works.",
    image: "odoo-hero",
    primary: "Book an Odoo Demo",
    secondary: "Talk to an Odoo Expert",
    note: "One platform\nfor connected operations",
    checks: [
      "Odoo Gold Partner",
      "Regional implementation team",
      "Training and ongoing support",
    ],
    sectionTitle: "One Platform. Every Business Function.",
    sectionDescription:
      "Start with the applications you need today, then extend the platform as your teams and processes evolve.",
    cards: [
      [
        "Accounting & Finance",
        "Financial operations, reporting and controls in one place.",
        "coins",
      ],
      [
        "Sales & CRM",
        "Move from lead management to quotation, sale and follow-up.",
        "users",
      ],
      [
        "Inventory & Purchasing",
        "Coordinate stock, suppliers, warehouses and replenishment.",
        "box",
      ],
      [
        "Projects & Services",
        "Plan work, track delivery and connect time with costs.",
        "check",
      ],
      [
        "Manufacturing",
        "Coordinate production, materials, quality and maintenance.",
        "factory",
      ],
      [
        "HR & Payroll",
        "Support employee records, attendance, leave and payroll workflows.",
        "briefcase",
      ],
      [
        "E-commerce",
        "Connect online orders with inventory, customers and accounting.",
        "cart",
      ],
      [
        "Integrations",
        "Link Odoo with the tools and data your teams already use.",
        "plug",
      ],
    ],
    processTitle: "From Discovery to Ongoing Support",
    steps: [
      "Discovery & Analysis",
      "Planning & Design",
      "Implementation",
      "Training & Testing",
      "Go Live & Support",
    ],
    cta: "See How Odoo Can Fit Your Business",
    questions: [
      "What business functions can Odoo manage?",
      "Can Odoo connect with our existing systems?",
      "How do you approach data migration and configuration?",
      "Do you train our team before go-live?",
      "What support is available after implementation?",
    ],
  },
  cloud: {
    eyebrow: "CLOUD · SECURITY · MANAGED SUPPORT",
    title: "Build a Secure, Resilient",
    accent: "Cloud Foundation",
    description:
      "Modernize infrastructure, protect identities and endpoints, and keep critical data recoverable with a practical cloud and security roadmap.",
    image: "cloud-hero",
    primary: "Request a Security Assessment",
    secondary: "Talk to Our Experts",
    note: "Secure systems.\nClear ownership.",
    sectionTitle: "What We Deliver",
    sectionDescription:
      "A connected service covering infrastructure, collaboration, protection, recovery and day-to-day operations.",
    cards: [
      [
        "Cloud Infrastructure",
        "Plan, migrate and operate scalable cloud environments.",
        "cloud",
      ],
      [
        "Cybersecurity Protection",
        "Strengthen identity, devices, networks and access controls.",
        "shield",
      ],
      [
        "Microsoft 365 & Collaboration",
        "Configure email, Teams, SharePoint and secure access.",
        "users",
      ],
      [
        "Backup & Recovery",
        "Protect business data and prepare practical recovery procedures.",
        "database",
      ],
      [
        "Governance & Readiness",
        "Organize policies, controls and evidence for your requirements.",
        "file",
      ],
      [
        "Managed IT Support",
        "Monitor systems, resolve issues and maintain a clear support path.",
        "headphones",
      ],
    ],
    processTitle: "A Clear Path to Safer Operations",
    steps: ["Assessment", "Planning", "Implementation", "Support"],
    cta: "Plan Your Cloud and Security Next Step",
    questions: [
      "Can you assess our current cloud and security setup?",
      "Do you support Microsoft 365 and hybrid environments?",
      "How do backup and recovery planning work?",
      "Can cloud services integrate with our ERP environment?",
    ],
  },
  ai: {
    eyebrow: "AI · AUTOMATION · INTEGRATION",
    title: "Turn Repetitive Work into",
    accent: "Reliable Workflows",
    description:
      "Identify high-value automation opportunities, connect the right data and systems, and keep people in control of important decisions.",
    image: "ai-hero",
    primary: "Request an Automation Assessment",
    secondary: "Talk to an Expert",
    note: "From manual steps\nto connected workflows",
    checks: ["Human review", "System integration", "Measurable operations"],
    sectionTitle: "Automation for Real Business Problems",
    sectionDescription:
      "Focus automation on the work that slows teams down: documents, handoffs, reporting, customer requests and disconnected data.",
    cards: [
      [
        "Workflow Automation",
        "Coordinate repeatable tasks, approvals and system actions.",
        "settings",
      ],
      [
        "Document Intelligence",
        "Extract, classify and route information from business documents.",
        "file",
      ],
      [
        "AI Assistants",
        "Help teams find information and complete guided internal tasks.",
        "sparkles",
      ],
      [
        "Customer Service Automation",
        "Triage requests and support faster, consistent responses.",
        "message",
      ],
      [
        "Analytics & Forecasting",
        "Turn operational data into useful signals for decisions.",
        "chart",
      ],
      [
        "Lead Scoring",
        "Prioritize opportunities using agreed business criteria and data.",
        "target",
      ],
      [
        "System Integration & APIs",
        "Connect automation with ERP, CRM and business tools.",
        "plug",
      ],
      [
        "Controls & Monitoring",
        "Track exceptions, access and performance after launch.",
        "shield",
      ],
    ],
    processTitle: "From Use Case to Measured Improvement",
    steps: ["Discover", "Prototype", "Integrate", "Review", "Improve"],
    cta: "Explore a Practical Automation Use Case",
    questions: [
      "Which processes are good candidates for automation?",
      "Can automation work with our existing ERP and tools?",
      "How do you handle human review and exceptions?",
      "How will we measure whether the automation is working?",
    ],
  },
  web: {
    eyebrow: "WEB DESIGN · COMMERCE · PORTALS",
    title: "Digital Experiences That Connect",
    accent: "with Your Business",
    description:
      "Create a clear, responsive website, online store or service portal that is easy to manage and ready to connect with your CRM, ERP and marketing workflows.",
    image: "web-hero",
    primary: "Discuss Your Website",
    secondary: "Explore Capabilities",
    secondaryHref: "#solutions",
    note: "Clear content.\nUseful experiences.",
    checks: ["Arabic & English", "Accessible layouts", "Business integrations"],
    sectionTitle: "What We Build",
    sectionDescription:
      "Choose the platform and delivery approach around your content, commerce, integration and editing needs.",
    cards: [
      [
        "Business Websites",
        "Credible, editable websites structured around customer decisions.",
        "monitor",
      ],
      [
        "E-commerce Stores",
        "Connected catalog, ordering and customer experiences.",
        "cart",
      ],
      [
        "Service Portals",
        "Secure customer and partner journeys connected to business systems.",
        "globe",
      ],
      [
        "WordPress",
        "Flexible publishing and content operations for marketing teams.",
        "file",
      ],
      [
        "Shopify & WooCommerce",
        "Commerce platforms configured around products and operations.",
        "bag",
      ],
      [
        "Arabic & English",
        "Responsive bilingual experiences prepared for RTL content.",
        "globe",
      ],
      [
        "Odoo & API Integration",
        "Connect enquiries, orders, inventory and customer records.",
        "plug",
      ],
    ],
    processTitle: "From Discovery to Launch and Support",
    steps: ["Discover", "Plan", "Design", "Build", "Launch & Support"],
    cta: "Build a Website That Supports the Business Behind It",
    questions: [
      "Which platform is right for our website or store?",
      "Can you build Arabic and English experiences?",
      "Can the website connect with Odoo or another CRM?",
      "Will our team be able to edit content after launch?",
      "What support is available after launch?",
    ],
  },
  mobile: {
    eyebrow: "IOS · ANDROID · CROSS-PLATFORM",
    title: "Mobile Applications Designed Around",
    accent: "Real User Journeys",
    description:
      "Design and build customer-facing and internal applications that connect securely with your APIs, ERP and operational systems.",
    image: "web-hero",
    primary: "Discuss Your App",
    secondary: "Explore Capabilities",
    secondaryHref: "#solutions",
    note: "One product.\nConnected experiences.",
    checks: [
      "iOS & Android",
      "Cross-platform delivery",
      "ERP & API integration",
    ],
    sectionTitle: "Mobile Products for Customers and Teams",
    sectionDescription:
      "Shape the product around the task, the user and the systems required to complete the journey.",
    cards: [
      [
        "Customer Applications",
        "Self-service, ordering, booking and account experiences.",
        "users",
      ],
      [
        "Business Applications",
        "Operational tools for field teams and internal workflows.",
        "briefcase",
      ],
      [
        "Cross-Platform Development",
        "Shared delivery for iOS and Android where it fits the product.",
        "code",
      ],
      [
        "UX & Accessibility",
        "Clear interaction design for different users and environments.",
        "pen",
      ],
      [
        "API & ERP Integration",
        "Secure connections to Odoo and other business systems.",
        "plug",
      ],
      [
        "Release & Support",
        "Testing, store preparation, monitoring and ongoing improvement.",
        "rocket",
      ],
    ],
    processTitle: "From Product Idea to Supported Release",
    steps: ["Discover", "Design", "Build", "Test", "Release & Support"],
    cta: "Turn Your Mobile Product Idea into a Clear Plan",
    questions: [
      "Should we build native or cross-platform?",
      "Can the app connect to our ERP or existing APIs?",
      "How do you test the app before release?",
      "Can you support the app after launch?",
    ],
  },
  "digital-marketing": {
    eyebrow: "SEO · PAID MEDIA · CONTENT",
    title: "Marketing Connected to",
    accent: "Business Outcomes",
    description:
      "Build a practical acquisition system across search, paid media, social and content, with reporting connected to enquiries and sales workflows.",
    image: "marketing-hero",
    primary: "Request a Marketing Consultation",
    secondary: "Explore Services",
    secondaryHref: "#solutions",
    note: "Strategy. Execution.\nLearning. Improvement.",
    checks: ["Arabic & English", "Channel reporting", "CRM handoff"],
    sectionTitle: "What We Offer",
    sectionDescription:
      "Combine the channels your audience uses with the research, content and measurement your team needs.",
    cards: [
      [
        "SEO",
        "Improve technical foundations, content relevance and search visibility.",
        "search",
      ],
      [
        "Paid Advertising",
        "Plan, launch and improve paid search and social campaigns.",
        "megaphone",
      ],
      [
        "Social Media",
        "Build a consistent publishing and engagement rhythm.",
        "network",
      ],
      [
        "Content Creation",
        "Create useful Arabic and English content for each stage of the journey.",
        "file",
      ],
      [
        "Marketing Strategy",
        "Turn business goals into priorities, channels and a working plan.",
        "target",
      ],
      [
        "Market Research",
        "Understand audiences, competitors and buying context.",
        "eye",
      ],
      [
        "Creative & Design",
        "Develop campaign assets that communicate one clear message.",
        "pen",
      ],
      [
        "Analytics & CRM Handoff",
        "Connect campaign activity with enquiries and follow-up.",
        "chart",
      ],
    ],
    processTitle: "A Repeatable Marketing Cycle",
    steps: ["Discover", "Plan", "Execute", "Measure", "Improve"],
    cta: "Build a More Connected Marketing System",
    questions: [
      "Which marketing channels should we prioritize?",
      "Can you create Arabic and English campaigns?",
      "How do you report performance?",
      "Can marketing enquiries connect to our CRM or Odoo?",
      "How do you improve campaigns over time?",
    ],
  },
};

export const industries = [
  [
    "Construction",
    "construction",
    "Project tracking, procurement and site cost control.",
  ],
  ["Retail", "retail", "Multi-branch POS, inventory and customer loyalty."],
  ["Real Estate", "dubai", "Property, leasing and sales pipeline management."],
  [
    "Education",
    "education",
    "Student records, admissions and campus operations.",
  ],
  [
    "Healthcare",
    "healthcare",
    "Patient records, scheduling and operational workflows.",
  ],
  ["Logistics", "distribution", "Fleet, warehouse and shipment visibility."],
];

// Compatibility data for the existing project-grid widget. These layouts are
// illustrative and are not presented as verified client case studies.
export const projects = [
  {
    title: "Manufacturing ERP",
    category: "Odoo",
    image: "project-erp",
    description: "An illustrative ERP project layout.",
  },
  {
    title: "Logistics Website",
    category: "Web",
    image: "project-logistics",
    description: "An illustrative web project layout.",
  },
  {
    title: "Cloud Infrastructure",
    category: "Cloud",
    image: "project-cloud",
    description: "An illustrative cloud project layout.",
  },
  {
    title: "Document Automation",
    category: "AI",
    image: "project-ai",
    description: "An illustrative automation project layout.",
  },
];
