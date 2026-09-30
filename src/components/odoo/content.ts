// Copy for the /odoo hub sections added in Phase 6. Only qualitative claims:
// no percentages, client counts, dates or named clients.
//
// Anything not verifiable from the repo is marked TODO in a code comment and
// deliberately NOT rendered. See docs/FINAL-WEBSITE-AUDIT.md for the list.

export const odooMetadata = {
  title: "Odoo ERP Implementation in Egypt, UAE & Saudi Arabia",
  description:
    "Implement, localize and scale Odoo ERP with ETripleSoft: accounting, HR and payroll, helpdesk, dashboards and industry solutions for Egypt, the UAE and Saudi Arabia.",
};

export const anchorLinks = [
  ["Outcomes", "#outcomes"],
  ["Implementation", "#implementation"],
  ["Modules", "#solutions"],
  ["Industries", "#industries"],
  ["Integrations", "#integrations"],
  ["Localization", "#localization"],
  ["FAQs", "#faqs"],
] as const;

// TODO: confirm "Odoo Gold Partner" against the official Odoo partner listing.
// The badge (public/images/odoo/reference/gold-partner.webp) and the wording
// already exist in the repo, but the tier and its current validity are not
// verified here.
export const partner = {
  badge: {
    src: "/images/odoo/reference/gold-partner.webp",
    width: 435,
    height: 218,
    alt: "Odoo Gold Partner badge",
  },
  statement: "ETripleSoft is an Odoo Gold Partner.",
};

export const outcomes = {
  eyebrow: "Business outcomes",
  title: "What a connected ERP changes",
  description:
    "The goal of an Odoo project is not a new system; it is a business that runs with fewer gaps between teams and data.",
  items: [
    ["Unified operations", "Finance, sales, inventory, projects and people work from one platform instead of disconnected tools and spreadsheets.", "network"],
    ["A faster financial close", "Accounting connected to sales, purchasing and inventory means less manual reconciliation at period end.", "coins"],
    ["Better visibility", "Dashboards and reports draw on live operational data, so decisions rest on current numbers.", "chart"],
    ["Less manual work", "Repeated entry, approvals and follow-up move into defined workflows your teams no longer chase by hand.", "check"],
    ["Room to scale", "Start with the applications you need today, then add modules and users as your operations grow.", "rocket"],
  ] as const,
};

export const implementation = {
  link: "See the full implementation approach",
};

export const midCta = {
  title: "Not sure which Odoo modules fit your business?",
  description:
    "Talk to an Odoo expert, or see a demo built around your processes.",
};

export const modules = {
  eyebrow: "ERP modules",
  title: "The Odoo capabilities we deliver",
  description:
    "Five areas most clients start with, each with its own page. Odoo integrates all your business processes in one platform.",
  featured: [
    ["implementation", "Implementation", "From discovery to go-live and support, delivered around how your business already works.", "settings"],
    ["accounting", "Accounting & E-Invoicing", "Financial operations, reporting and controls in one place, planned around local tax and e-invoicing requirements.", "coins"],
    ["hr", "HR & Payroll", "Employee records, attendance, leave and payroll workflows.", "users"],
    ["itsm-helpdesk", "ITSM & Helpdesk", "Manage support requests, assignments and service follow-up in one place.", "headphones"],
    ["dashboard-insights", "Dashboard & Insights", "Bring operational data into dashboards and reports so teams can track what matters.", "chart"],
  ] as const,
  othersTitle: "Other Odoo applications",
};

export const industries = {
  eyebrow: "Industries",
  title: "Industry solutions",
  description:
    "We understand your industry. Our Odoo solutions are tailored to your sector's needs.",
  items: [
    ["construction", "Project tracking, procurement and site cost control.", "hard-hat"],
    ["real-estate", "Property, leasing and sales pipeline management.", "building"],
    ["facility-management", "Property, tenant and maintenance management.", "wrench"],
    ["restaurants", "Point of sale, ordering and kitchen operations.", "utensils"],
    ["education", "Student records, admissions and campus operations.", "graduation"],
  ] as const,
  alsoServe:
    "We also deliver Odoo for manufacturing, trading and distribution, retail and e-commerce, healthcare, and professional services.",
};

// TODO: confirm named providers (payment gateways, banks) with the delivery
// team before naming any. Categories below are the ones the company has
// described; vendor names are intentionally omitted.
export const integrations = {
  eyebrow: "Integrations",
  title: "Odoo connected to the rest of your stack",
  description:
    "We assess your current systems and available interfaces during discovery, then plan the integrations your workflows require.",
  items: [
    ["E-commerce", "Connect online orders with inventory, customers and accounting."],
    ["Payment gateways", "Take online payments and reconcile them in Odoo."],
    ["Banks", "Bring bank data into accounting to support reconciliation."],
    ["Third-party and custom APIs", "Link Odoo with the tools and data your teams already use."],
    ["Legacy system migration", "Plan and migrate data from your existing systems with minimal disruption."],
  ] as const,
};

export const localization = {
  eyebrow: "Regional localization",
  title: "Odoo set up for how your market works",
  description:
    "Odoo ships with country localizations, and Arabic and multi-currency support. We configure them around your entity, tax position and reporting needs.",
  note: "Regulations and requirements change. We confirm the current scope with you during discovery.",
  // TODO: confirm with the delivery team which localization modules and Odoo
  // versions are used per country before making any stronger claim.
  countries: [
    {
      name: "Egypt",
      points: [
        "Egyptian chart of accounts and tax handling",
        "Arabic and English with right-to-left layouts",
        "Egyptian pound alongside other currencies",
        "ETA e-invoicing and e-receipt requirements",
      ],
    },
    {
      name: "United Arab Emirates",
      points: [
        "UAE chart of accounts and VAT handling",
        "Arabic and English with right-to-left layouts",
        "UAE dirham alongside other currencies",
        "VAT reporting to the Federal Tax Authority",
      ],
    },
    {
      name: "Saudi Arabia",
      points: [
        "Saudi chart of accounts and VAT handling",
        "Arabic and English with right-to-left layouts",
        "Saudi riyal alongside other currencies",
        "ZATCA e-invoicing regulation",
      ],
    },
  ],
};

// TODO: confirm with the delivery team exactly how our implementation connects
// Odoo to ETA (Egypt) and to ZATCA (Saudi Arabia) before describing the
// integration for Saudi Arabia. Legal/delivery review required before launch.
// No dates, thresholds or penalties are stated on purpose.
export const einvoicing = {
  eyebrow: "E-invoicing context",
  title: "E-invoicing in the region",
  items: [
    [
      "Egypt",
      "The Egyptian Tax Authority (ETA) requires electronic invoicing and e-receipts for in-scope taxpayers. We help businesses connect Odoo to these requirements as part of accounting setup.",
    ],
    [
      "Saudi Arabia",
      "Saudi Arabia regulates e-invoicing through ZATCA. During discovery we scope how your Odoo configuration should meet the requirements that apply to your business.",
    ],
  ] as const,
  note: "Requirements differ by taxpayer and change over time. Confirm the rules that apply to you with your tax adviser.",
};

export const benefits = {
  // In-page anchors: these topics live on this page, not on a child page.
  links: {
    customization: "#integrations",
    support: "#localization",
    growth: "#implementation",
  },
};

export const faqs = [
  [
    "What is Odoo?",
    "Odoo is a modular business platform that brings accounting, sales, inventory, projects, HR and other applications into one system. You start with the applications you need and add more as you grow.",
  ],
  [
    "What is the difference between Odoo Community and Enterprise?",
    "Community is Odoo's open-source edition. Enterprise adds further applications and features, and access to Odoo's official services. The right edition depends on the functionality, hosting and support you need, and we recommend one during discovery.",
  ],
  [
    "How long does an Odoo implementation take?",
    "The timeline depends on your modules, data migration, integrations, and business processes. We agree a phased implementation plan after discovery, with clear milestones for testing, training, and go-live.",
  ],
  [
    "Does Odoo support Arabic and multiple currencies?",
    "Yes. Odoo supports Arabic with right-to-left layouts and can transact in multiple currencies. We configure languages, currencies and regional settings for each entity during implementation.",
  ],
  [
    "Can Odoo handle ETA e-invoicing in Egypt?",
    "We help businesses connect Odoo to Egyptian Tax Authority e-invoicing and e-receipt requirements. The exact setup depends on your business, and we scope it with you during discovery.",
  ],
  [
    "How do you approach data migration?",
    "We review your existing data, agree what to bring across, clean and map it, and test the migration before go-live so the switch causes minimal disruption.",
  ],
  [
    "Can you customize Odoo and integrate it with our existing systems?",
    "Yes. We assess your current systems and available interfaces during discovery, then plan the customization and integrations your workflows require.",
  ],
  [
    "Do you support us after go-live?",
    "Yes. Training is part of our implementation approach, and we offer ongoing support, consultation, upgrades, and improvements. Support scope and arrangements are agreed with your team.",
  ],
] as const;

export const related = {
  title: "Explore more about Odoo",
  moreLinks: [
    ["All industries", "/industries"],
    ["Explore Solutions", "/services"],
  ],
};

export const closing = {
  secondary: { label: "Explore Solutions", href: "/services" },
};
