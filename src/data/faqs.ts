// Single source of truth for the /faqs page (Phase 17).
//
// Only entries with status "published" are rendered and included in the
// FAQPage JSON-LD. Everything else is the audit inventory from old-content.xml:
// answers that contain a price, duration, percentage, SLA / 24-7 / response-time
// wording, customer or project count, certification or partner level, office
// location, competitor comparison, or a claim that we support a specific
// regulation (ETA, ZATCA, UAE FTA VAT). They stay here as "needs-verification"
// until the owner confirms, softens or removes them.
//
// English and Arabic versions of the same page are de-duplicated: Arabic
// translations of pages that exist in English are not listed. Arabic-only
// articles are listed as held (the site is English-only; nothing is translated).
//
// Entries generated from the export are verbatim; "origin" says where a
// published answer came from.

export type FaqCategory =
  | "Odoo"
  | "Implementation"
  | "Pricing"
  | "Support"
  | "Cloud"
  | "AI"
  | "Web/Mobile"
  | "Regional operations"
  | "Company";

export type FaqEntry = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  status: "published" | "needs-verification";
  /** Original URL (or site route / "generic explanation") the answer comes from. */
  sourceUrl: string;
  language: "en" | "ar";
  /** Optional follow-up link shown under the answer (not part of the JSON-LD text). */
  link?: { label: string; href: string };
  /** Where a published answer was taken from. */
  origin?: string;
  /** Why an entry is held back. */
  note?: string;
  /** Other pages carrying the same question. */
  alsoOn?: string[];
};

/** Category order for the page navigation and sections. */
export const faqCategories: FaqCategory[] = [
  "Odoo",
  "Implementation",
  "Pricing",
  "Support",
  "Cloud",
  "AI",
  "Web/Mobile",
  "Regional operations",
  "Company",
];

const published: FaqEntry[] = [
  {
    id: "odoo-01",
    category: "Odoo",
    question: "What is an ERP system?",
    answer:
      "An ERP system is software that centralizes core business processes such as accounting, inventory, sales, HR, and operations into one integrated platform.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-erp-egypt/",
    language: "en",
    origin: "export",
  },
  {
    id: "odoo-02",
    category: "Odoo",
    question: "What is Odoo ERP?",
    answer:
      "Odoo ERP is an open-source enterprise resource planning system that offers modular applications for accounting, CRM, inventory, manufacturing, and HR.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-erp-egypt/",
    language: "en",
    origin: "export",
  },
  {
    id: "odoo-03",
    category: "Odoo",
    question: "What is the difference between Odoo Community and Enterprise?",
    answer:
      "Community is Odoo's open-source edition. Enterprise adds further applications and features, and access to Odoo's official services. The right edition depends on the functionality, hosting and support you need, and we recommend one during discovery.",
    status: "published",
    sourceUrl: "/odoo",
    language: "en",
    link: { label: "Explore Odoo ERP", href: "/odoo" },
    origin: "new-site /odoo FAQ",
  },
  {
    id: "odoo-04",
    category: "Odoo",
    question: "How do I know if my business is ready for an ERP system?",
    answer:
      "If your team is manually re-entering the same data across multiple spreadsheets, reports take days instead of minutes, or you no longer have real-time visibility into inventory or finances, these are strong signs it's time to consider an ERP system.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/signs-you-need-erp-system/",
    language: "en",
    link: {
      label: "Read: signs you need an ERP system",
      href: "/insights/signs-you-need-erp-system",
    },
    origin: "export",
  },
  {
    id: "odoo-05",
    category: "Odoo",
    question: "Is an ERP system worth it for a small business?",
    answer:
      "Yes, for growing small businesses specifically. Modern ERP systems like Odoo are priced and scaled for SMEs, not just large enterprises, so the cost-benefit shifts favorably once manual spreadsheet work starts costing more time than the software would.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/signs-you-need-erp-system/",
    language: "en",
    origin: "export",
  },
  {
    id: "odoo-06",
    category: "Odoo",
    question:
      "What's the risk of waiting too long to switch from spreadsheets?",
    answer:
      "The longer a business relies on spreadsheets past its growth stage, the more data errors, reporting delays, and version-control problems compound — and the migration itself becomes more complex the more historical data accumulates.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/signs-you-need-erp-system/",
    language: "en",
    origin: "export",
  },
  {
    id: "odoo-07",
    category: "Odoo",
    question: "When is it NOT a good time to invest in an ERP system?",
    answer:
      "If your team is very small with simple operations, about to go through a major business change, or has no internal capacity to actually learn and adopt a new system, it may be worth waiting until conditions are right to see real ROI.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-roi-return-on-investment/",
    language: "en",
    origin: "export",
  },
  {
    id: "odoo-08",
    category: "Odoo",
    question: "How is ERP ROI calculated?",
    answer:
      "ROI is calculated as (Total Benefits − Total Cost) ÷ Total Cost × 100. Total cost includes licensing, implementation, and training; total benefits include time saved, errors avoided, and other measurable improvements.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-roi-return-on-investment/",
    language: "en",
    link: {
      label: "Read the Odoo ROI guide",
      href: "/insights/odoo-roi-return-on-investment",
    },
    origin: "export",
  },
  {
    id: "odoo-09",
    category: "Odoo",
    question: "What are the biggest sources of ERP ROI?",
    answer:
      "The four largest sources are typically reduced manual work, fewer costly errors, faster and better-informed decisions from real-time data, and avoiding the need to hire additional staff to manage manual processes.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-roi-return-on-investment/",
    language: "en",
    origin: "export",
  },
  {
    id: "odoo-10",
    category: "Odoo",
    question: "Is ERP ROI different for small businesses vs large enterprises?",
    answer:
      "Yes. Small businesses replacing highly manual processes often see a higher percentage ROI and faster payback, because the gap between their old process and the new system is largest. Large enterprises typically see a lower percentage ROI but a much larger absolute dollar return.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-roi-return-on-investment/",
    language: "en",
    origin: "export",
  },
  {
    id: "odoo-11",
    category: "Odoo",
    question: "Do I need Power BI if I already use Odoo dashboards?",
    answer:
      "Not necessarily. Odoo's native dashboards cover daily operational monitoring — sales, stock, cash — for most SMEs. Power BI becomes useful mainly when you need to combine data across many modules in one advanced chart or run multi-year trend analysis.",
    status: "published",
    sourceUrl:
      "https://etriplesoft.com/odoo-kpi-dashboard-real-time-business-insights/",
    language: "en",
    link: {
      label: "Read: Odoo KPI dashboards",
      href: "/insights/odoo-kpi-dashboard-real-time-business-insights",
    },
    origin: "export",
  },
  {
    id: "odoo-12",
    category: "Odoo",
    question:
      "Why does my Odoo dashboard show numbers that don't match my actual sales?",
    answer:
      "This is usually a data or filter issue rather than a dashboard bug — most often unposted invoices, unconfirmed stock moves, or a date filter left on the wrong period.",
    status: "published",
    sourceUrl:
      "https://etriplesoft.com/odoo-kpi-dashboard-real-time-business-insights/",
    language: "en",
    origin: "export",
  },
  {
    id: "odoo-13",
    category: "Odoo",
    question: "How many KPIs should a dashboard actually show?",
    answer:
      "Around 5 to 8 metrics tied directly to decisions your team makes daily. Dashboards with 15-20+ metrics tend to get ignored rather than used.",
    status: "published",
    sourceUrl:
      "https://etriplesoft.com/odoo-kpi-dashboard-real-time-business-insights/",
    language: "en",
    origin: "export",
  },
  {
    id: "implementation-01",
    category: "Implementation",
    question: "How long does an Odoo implementation take?",
    answer:
      "The timeline depends on your modules, data migration, integrations, and business processes. We agree a phased implementation plan after discovery, with clear milestones for testing, training, and go-live.",
    status: "published",
    sourceUrl: "/odoo",
    language: "en",
    link: {
      label: "See the implementation process",
      href: "/odoo/implementation",
    },
    origin: "new-site /odoo FAQ",
  },
  {
    id: "implementation-02",
    category: "Implementation",
    question: "Can I migrate my existing spreadsheet data into an ERP system?",
    answer:
      "Yes. A structured data migration process — cleaning and mapping your spreadsheet data before import — is a standard part of any ERP implementation.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/signs-you-need-erp-system/",
    language: "en",
    origin: "export",
  },
  {
    id: "implementation-03",
    category: "Implementation",
    question: "What does a typical Odoo project involve?",
    answer:
      "It moves through discovery, solution design, configuration, data migration, integration, testing, training, go-live and support. Scope and the exact plan depend on your business and are agreed after discovery.",
    status: "published",
    sourceUrl: "/odoo/implementation",
    language: "en",
    link: {
      label: "See the implementation process",
      href: "/odoo/implementation",
    },
    origin: "new-site /odoo/implementation FAQ",
  },
  {
    id: "implementation-04",
    category: "Implementation",
    question: "Who from our side is involved?",
    answer:
      "Leadership and department heads help set direction in discovery, key users verify data and take part in acceptance testing, and super users you nominate support colleagues after go-live. Your team also makes design and customization decisions along the way.",
    status: "published",
    sourceUrl: "/odoo/implementation",
    language: "en",
    link: {
      label: "See the implementation process",
      href: "/odoo/implementation",
    },
    origin: "new-site /odoo/implementation FAQ",
  },
  {
    id: "implementation-05",
    category: "Implementation",
    question: "How is our data migrated?",
    answer:
      "We extract data from your existing systems, cleanse it, and map it to Odoo fields. It is loaded into a test environment and validated against the source, your key users verify it, and the final migration is timed to a planned cutover.",
    status: "published",
    sourceUrl: "/odoo/implementation",
    language: "en",
    link: {
      label: "See the implementation process",
      href: "/odoo/implementation",
    },
    origin: "new-site /odoo/implementation FAQ",
  },
  {
    id: "implementation-06",
    category: "Implementation",
    question: "Can we go live in phases?",
    answer:
      "The go-live approach, including whether to phase it, is agreed during discovery and scoping, based on your modules, teams and risks.",
    status: "published",
    sourceUrl: "/odoo/implementation",
    language: "en",
    link: {
      label: "See the implementation process",
      href: "/odoo/implementation",
    },
    origin: "new-site /odoo/implementation FAQ",
  },
  {
    id: "implementation-07",
    category: "Implementation",
    question: "How is training handled?",
    answer:
      "Training is role-based, because a warehouse, finance or sales user needs different things. Sessions use your own system with your real products, customers and workflows, backed by documentation and super users.",
    status: "published",
    sourceUrl: "/odoo/implementation",
    language: "en",
    link: {
      label: "See the implementation process",
      href: "/odoo/implementation",
    },
    origin: "new-site /odoo/implementation FAQ",
  },
  {
    id: "implementation-08",
    category: "Implementation",
    question: "Can you customize Odoo?",
    answer:
      "Yes, where standard functionality does not cover a requirement. We configure standard Odoo first and specify any custom development in the design stage, so customization stays deliberate.",
    status: "published",
    sourceUrl: "/odoo/implementation",
    language: "en",
    link: {
      label: "See the implementation process",
      href: "/odoo/implementation",
    },
    origin: "new-site /odoo/implementation FAQ",
  },
  {
    id: "implementation-09",
    category: "Implementation",
    question: "What affects how long an implementation takes?",
    answer:
      "Mainly scope and number of modules, data quality and volume, the number and complexity of integrations, localization and compliance needs, the level of customization, and how available your team is and how quickly decisions are made.",
    status: "published",
    sourceUrl: "/odoo/implementation",
    language: "en",
    link: {
      label: "See the implementation process",
      href: "/odoo/implementation",
    },
    origin: "new-site /odoo/implementation FAQ",
  },
  {
    id: "pricing-01",
    category: "Pricing",
    question: "What determines the cost of an Odoo implementation?",
    answer:
      "Cost is driven mainly by the number of users, the number of modules, how deeply Odoo is customized, how complex your data migration is, and the scope of the implementation partner's work. Data migration, customization, training and ongoing support are often quoted separately from the software license.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-implementation-cost-egypt/",
    language: "en",
    link: {
      label: "Read the Odoo implementation cost guide (figures are estimates)",
      href: "/insights/odoo-implementation-cost",
    },
    origin: "export (summarised from the article's cost factors)",
  },
  {
    id: "pricing-02",
    category: "Pricing",
    question: "How much does Odoo ERP cost?",
    answer:
      "Odoo ERP pricing depends on the number of users, selected modules, and hosting type, making it suitable for different business sizes and budgets.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-erp-egypt/",
    language: "en",
    link: {
      label: "Read the Odoo implementation cost guide (figures are estimates)",
      href: "/insights/odoo-implementation-cost",
    },
    origin: "export",
  },
  {
    id: "pricing-03",
    category: "Pricing",
    question: "Does Odoo have hidden fees?",
    answer:
      "Not hidden, but often overlooked: data migration, customization, training, and ongoing support are usually quoted separately from the monthly license. A transparent partner will break these out clearly before the project starts.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/odoo-implementation-cost-egypt/",
    language: "en",
    link: {
      label: "Read the Odoo implementation cost guide (figures are estimates)",
      href: "/insights/odoo-implementation-cost",
    },
    origin: "export",
  },
  {
    id: "pricing-04",
    category: "Pricing",
    question:
      "How much does it cost to switch from spreadsheets to an ERP system?",
    answer:
      "Costs vary by business size and complexity. For a detailed breakdown of licensing, implementation, and migration costs, see our Odoo implementation cost guide.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/signs-you-need-erp-system/",
    language: "en",
    link: {
      label: "Read the Odoo implementation cost guide (figures are estimates)",
      href: "/insights/odoo-implementation-cost",
    },
    origin: "export",
  },
  {
    id: "support-01",
    category: "Support",
    question: "How do I contact ETripleSoft for support?",
    answer:
      "For support requests, submit a ticket through the support ticket page. For general enquiries, or to talk to our team, use the contact page. Support arrangements are agreed with each client.",
    status: "published",
    sourceUrl: "/support-ticket",
    language: "en",
    link: { label: "Open a support ticket", href: "/support-ticket" },
    origin: "new-site routes",
  },
  {
    id: "support-02",
    category: "Support",
    question: "Do you support us after go-live?",
    answer:
      "Yes. Training is part of our implementation approach, and we offer ongoing support, consultation, upgrades, and improvements. Support scope and arrangements are agreed with your team.",
    status: "published",
    sourceUrl: "/odoo",
    language: "en",
    origin: "new-site /odoo FAQ",
  },
  {
    id: "support-03",
    category: "Support",
    question: "Do you provide support after the app is launched?",
    answer:
      "Yes, ongoing maintenance and support are part of our process, including updates, performance monitoring, and fixes as your app and business grow.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/mobile-apps-services/",
    language: "en",
    origin: "export",
  },
  {
    id: "cloud-01",
    category: "Cloud",
    question: "What does a managed IT services provider do?",
    answer:
      "A managed IT services provider takes ongoing responsibility for monitoring, maintaining, and securing a company's technology infrastructure — including servers, networks, cloud systems, and cybersecurity — typically for a predictable monthly fee, rather than billing only when something breaks.",
    status: "published",
    sourceUrl:
      "https://etriplesoft.com/how-to-choose-managed-it-services-provider-egypt/",
    language: "en",
    origin: "export",
  },
  {
    id: "cloud-02",
    category: "Cloud",
    question:
      "What is the difference between managed IT services and break-fix IT support?",
    answer:
      "Break-fix support is reactive — you call for help only when something breaks, and costs are unpredictable. Managed IT services are proactive, with continuous monitoring, a fixed monthly fee, and issues addressed before they cause downtime.",
    status: "published",
    sourceUrl:
      "https://etriplesoft.com/how-to-choose-managed-it-services-provider-egypt/",
    language: "en",
    origin: "export",
  },
  {
    id: "cloud-03",
    category: "Cloud",
    question: "How do you secure Microsoft 365?",
    answer:
      "We review identity and access, data protection, mail security, Teams and SharePoint settings, then recommend controls for your environment.",
    status: "published",
    sourceUrl: "/cloud",
    language: "en",
    link: { label: "Explore cloud and security", href: "/cloud" },
    origin: "new-site /cloud FAQ",
  },
  {
    id: "cloud-04",
    category: "Cloud",
    question: "Can you help with compliance requirements?",
    answer:
      "We assess your environment against the requirements relevant to your organization and define the controls and evidence your team needs.",
    status: "published",
    sourceUrl: "/cloud",
    language: "en",
    link: { label: "Explore cloud and security", href: "/cloud" },
    origin: "new-site /cloud FAQ",
  },
  {
    id: "cloud-05",
    category: "Cloud",
    question: "Do you support ongoing monitoring?",
    answer:
      "Monitoring and response coverage can be included in an agreed support scope based on your systems and operational requirements.",
    status: "published",
    sourceUrl: "/cloud",
    language: "en",
    link: { label: "Explore cloud and security", href: "/cloud" },
    origin: "new-site /cloud FAQ",
  },
  {
    id: "ai-01",
    category: "AI",
    question: "Why should businesses use AI automation?",
    answer:
      "Businesses use AI automation to increase productivity, reduce operational costs, improve accuracy, and scale processes faster without increasing manual headcount. AI Automation also enables better decision-making through real-time data analysis.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/ai-automation-services-etriplesoft/",
    language: "en",
    link: { label: "Explore AI automation", href: "/ai" },
    origin: "export",
  },
  {
    id: "ai-02",
    category: "AI",
    question: "How can AI automation help my business?",
    answer:
      "AI can reduce repetitive work such as processing invoices, qualifying leads, and preparing reports. We start with your workflows, identify practical opportunities, and agree how to measure the results.",
    status: "published",
    sourceUrl: "/ai",
    language: "en",
    link: { label: "Explore AI automation", href: "/ai" },
    origin: "new-site /ai FAQ",
  },
  {
    id: "ai-03",
    category: "AI",
    question: "Do you integrate AI with Odoo?",
    answer:
      "Yes. We can connect AI workflows and assistants with Odoo, using the modules, data, and permissions relevant to your business.",
    status: "published",
    sourceUrl: "/ai",
    language: "en",
    link: { label: "Explore AI automation", href: "/ai" },
    origin: "new-site /ai FAQ",
  },
  {
    id: "ai-04",
    category: "AI",
    question: "Is AI automation secure and compliant?",
    answer:
      "We assess data access, privacy requirements, and system permissions during discovery. Security controls and human review are designed around your use case; compliance requirements are reviewed with your team.",
    status: "published",
    sourceUrl: "/ai",
    language: "en",
    link: { label: "Explore AI automation", href: "/ai" },
    origin: "new-site /ai FAQ",
  },
  {
    id: "ai-05",
    category: "AI",
    question: "How long does it take to see results from AI automation?",
    answer:
      "Timing depends on the workflow, data readiness, and integrations. We define the scope and milestones with you, then measure the initial implementation before expanding it.",
    status: "published",
    sourceUrl: "/ai",
    language: "en",
    link: { label: "Explore AI automation", href: "/ai" },
    origin: "new-site /ai FAQ",
  },
  {
    id: "web-mobile-01",
    category: "Web/Mobile",
    question: "Do you build both iOS and Android apps?",
    answer:
      "Yes. We build native and cross-platform applications for iOS and Android, choosing the approach around your users, features and delivery needs.",
    status: "published",
    sourceUrl: "/mobile",
    language: "en",
    link: { label: "Explore mobile applications", href: "/mobile" },
    origin: "new-site /mobile FAQ",
  },
  {
    id: "web-mobile-02",
    category: "Web/Mobile",
    question: "How long does it take to build an app?",
    answer:
      "Timing depends on the product scope, integrations and testing needs. We agree on milestones with you during discovery and planning.",
    status: "published",
    sourceUrl: "/mobile",
    language: "en",
    link: { label: "Explore mobile applications", href: "/mobile" },
    origin: "new-site /mobile FAQ",
  },
  {
    id: "web-mobile-03",
    category: "Web/Mobile",
    question:
      "Can you integrate an app with our existing systems, such as Odoo?",
    answer:
      "Yes. We can connect an app with approved APIs, Odoo and other business systems, with access and data handling defined for your requirements.",
    status: "published",
    sourceUrl: "/mobile",
    language: "en",
    link: { label: "Explore mobile applications", href: "/mobile" },
    origin: "new-site /mobile FAQ",
  },
  {
    id: "web-mobile-04",
    category: "Web/Mobile",
    question: "What is digital marketing?",
    answer:
      "Digital marketing uses online channels — SEO, social media marketing, Google Ads, content marketing, and email — to grow your brand, attract qualified leads, and convert them into customers through measurable, data-driven strategies.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    link: { label: "Explore digital marketing", href: "/digital-marketing" },
    origin: "export",
  },
  {
    id: "web-mobile-05",
    category: "Web/Mobile",
    question: "What is the difference between SEO and paid advertising?",
    answer:
      "SEO builds long-term organic visibility on Google — traffic that keeps growing without paying per click. Paid advertising (Google Ads, Meta Ads) delivers immediate traffic and leads but stops when the budget stops. The best-performing businesses use both: SEO for compounding organic growth, paid ads for instant reach and conversion.",
    status: "published",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    origin: "export",
  },
  {
    id: "web-mobile-06",
    category: "Web/Mobile",
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Timing depends on your goals, channels, audience and starting point. We agree on a measurement plan together and review progress as campaigns run.",
    status: "published",
    sourceUrl: "/digital-marketing",
    language: "en",
    link: { label: "Explore digital marketing", href: "/digital-marketing" },
    origin: "new-site /digital-marketing FAQ",
  },
  {
    id: "web-mobile-07",
    category: "Web/Mobile",
    question: "How much do digital marketing services cost?",
    answer:
      "The scope and fee depend on the channels, content and reporting support you need. We discuss your priorities before preparing a proposal.",
    status: "published",
    sourceUrl: "/digital-marketing",
    language: "en",
    link: { label: "Explore digital marketing", href: "/digital-marketing" },
    origin: "new-site /digital-marketing FAQ",
  },
  {
    id: "web-mobile-08",
    category: "Web/Mobile",
    question: "Do you work with small businesses on digital marketing?",
    answer:
      "Yes. We shape the plan around your audience, internal capacity and business priorities.",
    status: "published",
    sourceUrl: "/digital-marketing",
    language: "en",
    link: { label: "Explore digital marketing", href: "/digital-marketing" },
    origin: "new-site /digital-marketing FAQ",
  },
  {
    id: "web-mobile-09",
    category: "Web/Mobile",
    question: "Can you guarantee specific marketing results?",
    answer:
      "Marketing outcomes depend on many factors, so we do not promise a fixed result. We agree on clear measures, share reporting and use what we learn to improve the work.",
    status: "published",
    sourceUrl: "/digital-marketing",
    language: "en",
    link: { label: "Explore digital marketing", href: "/digital-marketing" },
    origin: "new-site /digital-marketing FAQ",
  },
  {
    id: "regional-operations-01",
    category: "Regional operations",
    question: "What does regional localization mean for an ERP system?",
    answer:
      "Regional localization adapts an ERP system to local requirements such as e-invoicing rules, VAT and tax handling, Arabic and right-to-left language support, and multi-currency operation. Requirements differ by country and change over time, so they should be confirmed during discovery.",
    status: "published",
    sourceUrl: "generic explanation",
    language: "en",
    origin: "generic",
  },
  {
    id: "regional-operations-02",
    category: "Regional operations",
    question:
      "Does Odoo support Arabic and right-to-left layouts, and multiple currencies?",
    answer:
      "Yes. Odoo supports Arabic with right-to-left layouts and can transact in multiple currencies. We configure languages, currencies and regional settings for each entity during implementation.",
    status: "published",
    sourceUrl: "/odoo",
    language: "en",
    link: {
      label: "Regional localization on the Odoo overview",
      href: "/odoo#localization",
    },
    origin: "new-site /odoo FAQ",
  },
  {
    id: "regional-operations-03",
    category: "Regional operations",
    question: "What is e-invoicing?",
    answer:
      "E-invoicing means issuing invoices as structured digital documents that are validated by, or reported to, a tax authority electronically. The rules, formats and timelines differ by country and change over time, so the requirements that apply to your business should be confirmed with your tax adviser.",
    status: "published",
    sourceUrl: "generic explanation",
    language: "en",
    origin: "generic",
  },
];

const heldForVerification: FaqEntry[] = [
  {
    id: "held-001",
    category: "AI",
    question: "What are AI automation services?",
    answer:
      "AI Automation Services use artificial intelligence to automate business processes, reduce manual work, and improve efficiency. Etriplesoft delivers end-to-end AI Automation across workflow automation, predictive analytics, document intelligence, and conversational AI.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ai-automation-services-etriplesoft/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-002",
    category: "AI",
    question: "Are AI automation services suitable for startups and SMEs?",
    answer:
      "Yes. AI Automation Services are suitable for startups and SMEs because modern solutions are modular, scalable, and cost-effective. Etriplesoft designs implementations that can begin small and expand incrementally as ROI is proven.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ai-automation-services-etriplesoft/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-003",
    category: "Implementation",
    question: "How does AI automation implementation work?",
    answer:
      "Etriplesoft follows five stages: process discovery, AI model design, system integration, team training and testing, and live deployment with ongoing optimisation. The full process typically takes 4 to 12 weeks depending on scope.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ai-automation-services-etriplesoft/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-004",
    category: "AI",
    question: "Do you offer AI automation demos?",
    answer:
      "Yes. Etriplesoft offers free AI Automation demos tailored to your industry and specific process challenges, showing exactly how AI-driven automation would work within your existing systems before you commit to implementation.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ai-automation-services-etriplesoft/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-005",
    category: "Pricing",
    question: "How much does AI automation cost for SMEs?",
    answer:
      "AI automation for SMEs is priced based on process complexity, number of workflows automated, and integration scope. Etriplesoft designs modular engagements that let small and mid-sized businesses start with a focused use case and expand as ROI is proven — book a free demo for a tailored estimate.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ai-automation-services-etriplesoft/",
    language: "en",
    note: "price",
  },
  {
    id: "held-006",
    category: "AI",
    question: "Can AI automation integrate with Odoo ERP?",
    answer:
      "Yes. As certified Odoo ERP partners, Etriplesoft connects AI Automation Services directly into your Odoo modules — from document intelligence feeding your accounting workflows to predictive analytics surfacing insights from your ERP data, all within one integrated system.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ai-automation-services-etriplesoft/",
    language: "en",
    note: "certification or partner level",
  },
  {
    id: "held-007",
    category: "Pricing",
    question: "How much does mobile app development cost in Egypt?",
    answer:
      "Cost depends on app complexity, platform (Android, iOS, or both), and the integrations required. Etriplesoft provides a free consultation to scope your specific app and give you an accurate estimate.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/mobile-apps-services/",
    language: "en",
    note: "price",
  },
  {
    id: "held-008",
    category: "Web/Mobile",
    question: "Do you build apps for both Android and iOS?",
    answer:
      "Yes, we develop native and cross-platform applications for both Android and iOS, so your app reaches users regardless of which device they use.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/mobile-apps-services/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-009",
    category: "Web/Mobile",
    question: "Can my mobile app integrate with our existing business systems?",
    answer:
      "Yes. We regularly integrate mobile apps with ERP systems like Odoo, CRMs, payment gateways, and other third-party services so your app connects directly to how your business already operates.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/mobile-apps-services/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-010",
    category: "Implementation",
    question: "How long does it take to build a mobile app?",
    answer:
      "Timelines vary by scope, but most projects move through discovery, design, development, and launch in a structured, predictable process - we'll give you a realistic timeline after the discovery phase.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/mobile-apps-services/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-011",
    category: "Cloud",
    question: "ما حلول الأمن السحابي التي تقدمها إيتريبل سوفت؟",
    answer:
      "تقدم إيتريبل سوفت حلول أمن سحابي شاملة تشمل البنية التحتية السحابية على أزور وأمازون، ونشر مايكروسوفت 365، والحماية من التهديدات الإلكترونية، والنسخ الاحتياطي وتعافٍ من الكوارث، والامتثال التنظيمي، ودعم تقنية المعلومات المُدار بالكامل. جميع الخدمات متاحة بالعربية والإنجليزية عبر السعودية والإمارات ومصر.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/cloud-security-solutions/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
    alsoOn: [
      "https://etriplesoft.com/cloud-security-solutions/",
      "https://etriplesoft.com/cloud-security-solutions/",
      "https://etriplesoft.com/cloud-security-solutions/",
      "https://etriplesoft.com/cloud-security-solutions/",
      "https://etriplesoft.com/cloud-security-solutions/",
    ],
  },
  {
    id: "held-012",
    category: "Odoo",
    question: "Odoo vs SAP: which is better?",
    answer:
      "Odoo is better for small and medium-sized businesses due to its flexibility and cost-effectiveness, while SAP is more suitable for large enterprises with complex requirements.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-erp-egypt/",
    language: "en",
    note: "competitor comparison",
  },
  {
    id: "held-013",
    category: "Implementation",
    question: "How long does Odoo ERP implementation take?",
    answer:
      "Odoo ERP implementation usually takes from a few weeks to a few months, depending on business complexity, required modules, and customization needs.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-erp-egypt/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-014",
    category: "Odoo",
    question:
      "Do you provide Odoo ERP services in UAE, Egypt, and Saudi Arabia?",
    answer:
      "Yes, we provide Odoo ERP implementation and support services for businesses in the UAE, Egypt, and Saudi Arabia, with localized expertise for each market.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-erp-egypt/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-015",
    category: "Regional operations",
    question: "Why is Odoo the best ERP system for Egyptian SMEs in 2026?",
    answer:
      "Odoo ERP Egypt is the top choice for Egyptian SMEs because it combines enterprise-grade features with SME-friendly pricing, full Arabic and RTL support, native ETA e-invoicing compliance, and a modular structure that lets you start small and scale. With 176 certified Odoo partners in Egypt — more than any other ERP platform — the local support ecosystem is unmatched. Etriplesoft, as a certified Odoo Gold Partner, delivers Odoo ERP for SMEs Egypt with fixed pricing, 4–16 week go-live timelines, and dedicated post-implementation support tailored to Egyptian business regulations. Odoo is also the #1 ERP system Egypt businesses choose for ETA compliance, making it the safest and most future-proof ERP investment for Egyptian companies in 2026.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-erp-egypt/",
    language: "en",
    note: "price; duration/timeline; certification or partner level; regulation or claim that we support a regime; superlative or absolute claim",
  },
  {
    id: "held-016",
    category: "Regional operations",
    question: "What makes Etriplesoft the right Odoo partner in Egypt?",
    answer:
      "Etriplesoft is a certified Odoo Gold Partner in Egypt with 250+ successful Odoo implementations across 9+ industries — including construction, retail, real estate, education, HR, logistics, and healthcare. Unlike generic IT firms, Etriplesoft is the only Odoo partner Egypt businesses use that also delivers full-scale digital marketing — meaning your CRM data, ERP operations, and marketing campaigns are integrated from day one. Every Odoo implementation Egypt project includes ETA e-invoicing setup, Arabic interface configuration, ZATCA compliance for Saudi operations, and dedicated post-go-live support with a fixed SLA. For businesses seeking a trusted Odoo partner Egypt with proven results and regional compliance expertise, Etriplesoft is the partner of choice across Egypt, UAE, and Saudi Arabia.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-erp-egypt/",
    language: "en",
    note: "SLA / 24-7 / response-time / guarantee wording; certification or partner level; regulation or claim that we support a regime; superlative or absolute claim",
  },
  {
    id: "held-017",
    category: "Odoo",
    question: "What Is Odoo for Construction — and What Does It Do?",
    answer:
      "This fully integrated ERP platform is configured for construction businesses — covering project management, BOQ management, budget control, procurement, subcontractor management, IPC billing, site inspections, and GCC tax compliance in a single connected system. Unlike standalone tools, the platform connects every project cost to accounting, HR, and compliance — eliminating the need for separate BOQ spreadsheets, billing tools, or tax software.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-construction/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-018",
    category: "Regional operations",
    question: "What is the best construction ERP software for Egypt?",
    answer:
      "For Egyptian construction companies, Odoo for construction configured by an Odoo Gold Partner like Etriplesoft is the most comprehensive option available. It includes full ETA e-invoicing compliance for IPC and supplier invoices, Arabic UI, Egyptian Labour Law payroll integration — all in one platform. No other construction ERP offers all these capabilities for the Egyptian market in a single integrated system.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-construction/",
    language: "en",
    note: "certification or partner level; regulation or claim that we support a regime; superlative or absolute claim",
  },
  {
    id: "held-019",
    category: "Odoo",
    question: "How does Odoo handle BOQ management for construction projects?",
    answer:
      "This construction ERP allows project managers to build detailed Bills of Quantities per project phase — with each BOQ line item linked directly to procurement, cost accounts, and budget tracking. Actual quantities consumed are compared to BOQ estimates automatically, and client-ready BOQ reports can be generated in one click. Revision history and approval workflows are built in, eliminating the version control issues of spreadsheet-based BOQ management.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-construction/",
    language: "en",
    note: "Odoo version/edition claim",
  },
  {
    id: "held-020",
    category: "Regional operations",
    question: "Can Odoo generate Interim Payment Certificates automatically?",
    answer:
      "Yes. The platform automates IPC generation based on certified work completion percentages. Once the site team records and approves progress, the IPC is generated automatically with the correct amount, retention deduction, and advance recovery calculation applied — then transmitted as an ETA, ZATCA, or UAE VAT compliant invoice depending on your market. The entire process from site certification to client invoice requires no manual calculations.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-construction/",
    language: "en",
    note: "certification or partner level; regulation or claim that we support a regime",
  },
  {
    id: "held-021",
    category: "Regional operations",
    question:
      "Does Odoo for construction support ZATCA Phase 2 for Saudi Arabia?",
    answer:
      "Yes. The platform is fully ZATCA Phase 2 compliant for Saudi Arabia. All construction invoices — including IPC payments, supplier bills, and subcontractor transactions — are generated and cleared through the Fatoora platform in real time with cryptographic signing, QR codes, and XML generation handled automatically. Etriplesoft configures ZATCA compliance as part of every Saudi Arabia construction implementation at no extra cost.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-construction/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-022",
    category: "Pricing",
    question: "How Much Does Construction ERP Implementation Cost in Egypt?",
    answer:
      "We don't offer fixed pricing packages because no two construction businesses are the same. Your implementation is scoped and priced based on the number of active projects, required modules, compliance markets (Egypt ETA, UAE VAT, or Saudi ZATCA), and team size. The best way to get an accurate picture is to book a free 45-minute discovery call with our team — we will scope your requirements and provide a detailed fixed-price proposal at no obligation.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-construction/",
    language: "en",
    note: "price; duration/timeline; regulation or claim that we support a regime; superlative or absolute claim",
  },
  {
    id: "held-023",
    category: "Regional operations",
    question:
      "Can It Replace Procore for Construction in Egypt, UAE & Saudi Arabia?",
    answer:
      "Yes — and with significant advantages for Egypt, UAE, and Saudi Arabia contractors. The platform includes native Arabic interface, ETA e-invoicing, ZATCA Phase 2, UAE VAT 5%, GOSI payroll integration, and fully integrated accounting — none of which Procore offers natively for the GCC market. Odoo also covers BOQ management, Letters of Guarantee, and IPC billing in ways that Procore's standalone construction management approach does not match for MENA regulatory requirements.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-construction/",
    language: "en",
    note: "percentage; SLA / 24-7 / response-time / guarantee wording; regulation or claim that we support a regime; competitor comparison",
  },
  {
    id: "held-024",
    category: "Implementation",
    question: "How Long Does a Construction ERP Implementation Take?",
    answer:
      "A typical implementation by Etriplesoft takes 6 to 14 weeks depending on project size, number of active projects, subcontractor complexity, and compliance configuration. SME contractors can go live in as few as 6 weeks. Multi-project contractors with full BOQ, IPC, and compliance configuration typically require 90 days. Enterprise implementations with multi-country compliance across Egypt, UAE, and Saudi Arabia are scoped individually.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-construction/",
    language: "en",
    note: "duration/timeline; regulation or claim that we support a regime",
  },
  {
    id: "held-025",
    category: "Odoo",
    question: "Do I need both apps or can I buy one?",
    answer:
      "You can install and use each independently — the Odoo dashboard module works with or without Odoo Customised Access Management, and vice versa. But the real magic happens when they're combined: every Odoo KPI dashboard automatically respects every access rule, so a single dashboard naturally shows the right data to the right person. We recommend deploying both for any organisation over twenty users running Odoo 17, 18, and 19.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "Odoo version/edition claim",
  },
  {
    id: "held-026",
    category: "Odoo",
    question:
      "Does the Odoo Insight and Control AI send my business data to external servers?",
    answer:
      "No. Only the data schema (field names, model structure) is sent to the AI service to help it generate the right charts. Your actual records — customer names, amounts, invoices, contracts — never leave your Odoo database. Ideal for organisations with strict data-residency or privacy requirements.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "superlative or absolute claim",
  },
  {
    id: "held-027",
    category: "Odoo",
    question: "Will this work on our existing Odoo 17, 18, and 19 deployment?",
    answer:
      "Yes. The Odoo Dashboard & Insights suite and Odoo Customised Access Management are officially maintained on Odoo 17, 18, and 19 — Enterprise and Community, Online, Odoo.sh, and On-Premise. Your existing Odoo 17, 18, and 19 custom modules, views, and automations remain untouched. The Odoo Insight and Control installation is non-destructive and fully reversible.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "Odoo version/edition claim",
  },
  {
    id: "held-028",
    category: "Regional operations",
    question:
      "Is Arabic truly supported in the Odoo dashboard & insights module?",
    answer:
      "Fully. Both the Odoo dashboard & insights interface and the Odoo Customised Access Management configuration screens render correctly in Arabic with right-to-left (RTL) layout. Charts flip, labels align to the right, and Arabic typography renders without truncation. We also localise finance and HR terminology to regional conventions (Egypt, KSA, UAE) on request.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-029",
    category: "Odoo",
    question:
      "Can I hide a field for one user and show it for another — in the same database?",
    answer:
      'Yes. That\'s exactly the kind of rule Customised Access Management was built for. You create an access profile, link it to the users or groups it applies to, tick "invisible" next to the field name, and save. The field disappears from forms, lists, filters, kanban cards, group-by, pivot views, and exports — for those users only.',
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "superlative or absolute claim",
  },
  {
    id: "held-030",
    category: "Odoo",
    question:
      "Do these apps require Odoo Studio or any paid add-on on Odoo 17, 18, and 19?",
    answer:
      "No. Both apps in the Odoo Insight and Control suite are fully standalone. They don't depend on Odoo Studio, they don't require the Enterprise subscription (though both work beautifully on Enterprise), and they don't pull in any paid third-party bundles. Standard Odoo dependencies only.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "superlative or absolute claim; Odoo version/edition claim",
  },
  {
    id: "held-031",
    category: "Regional operations",
    question: "How long before we're fully live?",
    answer:
      "For most mid-sized deployments (20–150 users, 3–6 Odoo apps in scope), the full rollout — including discovery, dashboard design, access-rule configuration, Arabic localisation, and training — is 2 to 4 weeks. Very small deployments can be live in under a week.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-032",
    category: "Odoo",
    question:
      "What about Odoo 17, 18, and 19 version upgrades? Do the rules break?",
    answer:
      "No. Both apps in the Odoo Insight and Control suite are version-aware and officially maintained on Odoo 17, 18, and 19. Your dashboard configurations and access rules migrate forward cleanly — you don't rebuild them when you upgrade. Etriplesoft handles the upgrade and re-certifies the Suite on your new version as part of the standard migration service.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "Odoo version/edition claim",
  },
  {
    id: "held-033",
    category: "Odoo",
    question:
      "Can Odoo Customised Access Management rules be audited? Who changed what, and when?",
    answer:
      "Yes. Every change to an Odoo Customised Access Management profile is logged in the record's chatter with the user, timestamp, and the specific field or rule modified. Combined with Odoo's native audit log, you get a complete trail — perfect for ISO, SOC 2, and regional data-protection audits.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "certification or partner level",
  },
  {
    id: "held-034",
    category: "Odoo",
    question: "Does the hierarchy access automatically follow our org chart?",
    answer:
      "Yes. It reads directly from Odoo's native employee parent_id (manager) relationships — the same hierarchy you already maintain for leave approvals, timesheets, and expense validations. When you add a new employee under a manager, that manager instantly sees every record owned by the new employee — no rule edits, no re-configuration.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-035",
    category: "Odoo",
    question:
      'What\'s the difference between "hide field" and "soft restrict"?',
    answer:
      "Hiding a field makes it completely invisible — the user never knows it exists. Soft restriction makes the field (or record) visible but locked for editing — the user can read the context but cannot change it. Both have legitimate uses: hide when the information itself is confidential (like bank account numbers), soft-restrict when visibility matters for context but changes must go through an approver.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-036",
    category: "Odoo",
    question:
      "Can the Odoo dashboard & insights view be set as a user's home screen?",
    answer:
      "Yes. After you build your Odoo KPI dashboard, you can assign it as the default landing page per user via Preferences → Home Action. So your sales team logs in and immediately sees their sales dashboard; finance sees their P&L cockpit; the CEO sees the consolidated group view — each tailored to their role and access level.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-dashboard-insights/",
    language: "en",
    note: "price",
  },
  {
    id: "held-037",
    category: "Regional operations",
    question: "What cloud security solutions does Etriplesoft offer in Egypt?",
    answer:
      "Etriplesoft provides end-to-end cloud security solutions in Egypt — including cloud infrastructure on Azure and AWS, Microsoft 365 deployment, cybersecurity protection (VAPT, endpoint security, monitoring), backup and disaster recovery, compliance with Egypt's PDPL, and fully managed IT support. All services are available in Arabic and English across Egypt, UAE, and Saudi Arabia.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/cloud-security-solutions-in-egypt/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-038",
    category: "Pricing",
    question: "How much do managed IT services cost in Egypt?",
    answer:
      "Managed IT services Egypt pricing depends on the number of users, devices, and services included. Etriplesoft offers flexible monthly packages covering helpdesk support, monitoring, Microsoft 365 management, and security — with clear SLAs and no hidden costs. Contact us for a custom quote based on your team size and infrastructure.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/cloud-security-solutions-in-egypt/",
    language: "en",
    note: "price",
  },
  {
    id: "held-039",
    category: "Regional operations",
    question: "Does Egypt have data protection laws that affect cloud storage?",
    answer:
      "Yes. Egypt's Personal Data Protection Law (PDPL) requires organisations to implement appropriate technical and organisational measures to protect personal data — including data stored in the cloud. Etriplesoft's cloud security solutions in Egypt are designed with PDPL compliance built in — access controls, encryption, audit trails, and data residency options are standard on every deployment.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/cloud-security-solutions-in-egypt/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-040",
    category: "Cloud",
    question: "Can you integrate cloud infrastructure with Odoo ERP?",
    answer:
      "Yes — and this is our unique advantage. As a certified Odoo Gold Partner, Etriplesoft is the only provider of cloud security solutions in Egypt that natively integrates your cloud environment with Odoo ERP. Your CRM data, inventory, HR, and business operations are all connected to the same secure infrastructure — eliminating the gap between IT and business systems that most Egyptian companies face.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/cloud-security-solutions-in-egypt/",
    language: "en",
    note: "certification or partner level; superlative or absolute claim",
  },
  {
    id: "held-041",
    category: "Regional operations",
    question: "Why should Egyptian businesses move to the cloud in 2026?",
    answer:
      "Cloud adoption in Egypt has accelerated sharply in 2025–2026, driven by Egypt's National Digital Transformation Strategy, rising cyberattack rates across MENA, and the enforcement of PDPL compliance requirements. Businesses that migrate to a properly secured cloud environment benefit from lower infrastructure costs, higher uptime, remote access for teams, and significantly stronger protection against the ransomware and phishing attacks that are increasingly targeting Egyptian SMEs and enterprises. The cost of a single data breach now far exceeds the annual cost of a full managed cloud security solution.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/cloud-security-solutions-in-egypt/",
    language: "en",
    note: "SLA / 24-7 / response-time / guarantee wording; regulation or claim that we support a regime; superlative or absolute claim",
  },
  {
    id: "held-042",
    category: "Implementation",
    question: "How long does cloud migration take for an Egyptian business?",
    answer:
      "A typical cloud migration Egypt project takes 3–8 weeks depending on infrastructure complexity, data volume, and the number of systems being migrated. Microsoft 365 deployments for SMEs are typically complete in 1–2 weeks. Full cloud infrastructure migrations for enterprise clients with on-premise servers, legacy systems, and Odoo ERP integration take 4–8 weeks. Etriplesoft provides a fixed timeline and go-live date before any work begins — no open-ended projects.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/cloud-security-solutions-in-egypt/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-043",
    category: "Web/Mobile",
    question: "What is marketing?",
    answer:
      "Marketing is the process of promoting products or services using a clear marketing mix, marketing funnel, and effective marketing strategy to reach the right audience and increase sales.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-044",
    category: "Pricing",
    question: "How much do digital marketing services cost in Egypt?",
    answer:
      "Pricing depends entirely on your goals, channels, and scope. Etriplesoft offers flexible packages — from focused SEO retainers to full-channel campaigns covering Google Ads, social media, and content. Book a free strategy session and we will recommend the right package for your budget and growth targets.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    note: "price",
  },
  {
    id: "held-045",
    category: "Implementation",
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Paid advertising (Google Ads, Meta) delivers results within days. SEO typically shows measurable ranking improvements within 60–90 days and significant traffic growth by month 4–6. Social media engagement builds within 30–60 days. A well-structured digital marketing strategy combines quick wins from paid channels with long-term organic growth from SEO and content.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-046",
    category: "Web/Mobile",
    question:
      "What digital marketing channels work best for B2B companies in Egypt?",
    answer:
      "For B2B companies in Egypt, the highest-ROI channels are: LinkedIn Ads for decision-maker targeting, Google Search Ads for intent-based lead generation, SEO for long-term authority building, and email marketing for nurturing warm prospects. Content marketing — case studies, whitepapers, and industry reports — is the most effective trust-builder for B2B buyers in the Egyptian and GCC markets.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    note: "superlative or absolute claim",
  },
  {
    id: "held-047",
    category: "Web/Mobile",
    question: "Does Etriplesoft offer digital marketing for Odoo ERP clients?",
    answer:
      "Yes — and this is our strongest differentiator. As a certified Odoo Gold Partner, Etriplesoft is the only digital marketing agency in Egypt that integrates your CRM, ERP data, and marketing campaigns into one unified strategy. Your leads flow directly into Odoo CRM, your sales data informs campaign targeting, and every marketing action is measurable inside your Odoo dashboard.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    note: "certification or partner level; superlative or absolute claim",
  },
  {
    id: "held-048",
    category: "Web/Mobile",
    question: "What industries does Etriplesoft serve with digital marketing?",
    answer:
      "We deliver digital marketing services across technology, manufacturing, real estate, automotive, education, healthcare, retail, and professional services — for businesses in Egypt, UAE, and Saudi Arabia. Our team understands both B2B and B2C funnels and adapts strategy to the specific buying behaviour of each industry.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-049",
    category: "Web/Mobile",
    question: "How do you measure digital marketing ROI?",
    answer:
      "We track every campaign with clearly defined KPIs: cost per lead, conversion rate, organic traffic growth, Google Ads ROAS, social media reach and engagement, and revenue influenced by marketing. Monthly reports show exactly what each channel is generating — so you always know where your budget is working and where to invest more.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    note: "Odoo version/edition claim",
  },
  {
    id: "held-050",
    category: "Regional operations",
    question: "Can you do digital marketing in both Arabic and English?",
    answer:
      "Absolutely. Every Etriplesoft campaign is built for bilingual delivery — native Arabic copywriting, RTL social creatives, Arabic SEO keyword targeting, and fully localised Google Ads — alongside English content for international audiences. This bilingual capability gives our clients a significant reach advantage in the Egyptian, UAE, and Saudi Arabian markets.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/digital-marketing-agency/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-051",
    category: "Pricing",
    question: "How much does a website cost in Egypt?",
    answer:
      "Website cost in Egypt depends on scope, platform, and features. A professional WordPress business website typically starts from 15,000–30,000 EGP. An e-commerce website on Shopify or WooCommerce starts from 25,000 EGP. Custom portals and Odoo-integrated platforms are priced based on complexity. Contact Etriplesoft for a fixed-price quote tailored to your project.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/web-design-company-in-egypt/",
    language: "en",
    note: "price",
  },
  {
    id: "held-052",
    category: "Regional operations",
    question: "WordPress or Shopify — which is better for Egyptian businesses?",
    answer:
      "WordPress is better for corporate websites, content-heavy platforms, multilingual portals, and lead generation. Shopify is better for pure e-commerce — product catalogs, Fawry/Tap payments, and online selling. Both support Arabic RTL. Etriplesoft recommends based on your goals — we do not push one platform over the other.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/web-design-company-in-egypt/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-053",
    category: "Regional operations",
    question: "Can you build a bilingual Arabic and English website?",
    answer:
      "Yes. Every website we build supports full Arabic RTL layout and English — with per-user language switching. We handle both the technical RTL implementation and the Arabic copywriting so your bilingual website looks and reads naturally in both languages.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/web-design-company-in-egypt/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-054",
    category: "Implementation",
    question: "How long does it take to build a website in Egypt?",
    answer:
      "A standard business website takes 3–5 weeks. An e-commerce store takes 4–8 weeks depending on product volume and payment integrations. Custom portals with Odoo integration take 6–12 weeks. All timelines are fixed and agreed before work begins.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/web-design-company-in-egypt/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-055",
    category: "Web/Mobile",
    question:
      "Why is Etriplesoft the best web design company in Egypt for B2B businesses?",
    answer:
      "Etriplesoft is the only web design company in Egypt that is also a certified Odoo Gold Partner — meaning your website connects directly to your CRM, ERP, inventory, and marketing from day one. For B2B businesses, this means every lead from your website flows automatically into your sales pipeline with zero manual entry. No other web agency in Egypt offers this level of business system integration as a standard service.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/web-design-company-in-egypt/",
    language: "en",
    note: "certification or partner level; superlative or absolute claim",
  },
  {
    id: "held-056",
    category: "Regional operations",
    question: "What makes a high-ranking business website in Egypt in 2026?",
    answer:
      "In 2026, Google's ranking signals for Egyptian businesses prioritize: Core Web Vitals (LCP under 2.5 seconds, no layout shift), mobile-first responsive design, bilingual Arabic and English content with proper hreflang tags, structured data (LocalBusiness and Service schema), and a strong local backlink profile from Egyptian directories. Etriplesoft builds every website with all of these signals built in — not added later as an afterthought. This is why our clients see organic traffic from day one rather than months after launch.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/web-design-company-in-egypt/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-057",
    category: "Regional operations",
    question: "What is the best restaurant management software for Egypt?",
    answer:
      "For Egyptian restaurant operators, Odoo restaurant management software configured by a certified Odoo Gold Partner like Etriplesoft is the most complete option available. It includes full ETA e-invoicing compliance for POS receipts, Arabic UI, Talabat and Elmenus delivery integration, and native accounting — all in one system. No other restaurant ERP combines all four capabilities for the Egyptian F&B market in a single platform.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-restaurant-management-software/",
    language: "en",
    note: "certification or partner level; regulation or claim that we support a regime; superlative or absolute claim",
  },
  {
    id: "held-058",
    category: "Regional operations",
    question: "Does Odoo POS support ZATCA Phase 2 for Saudi restaurants?",
    answer:
      "Yes. Odoo v17 includes full ZATCA Phase 2 compliance for Saudi restaurant POS transactions. Every receipt generated at the point of sale includes the mandatory QR code, cryptographic signing, and real-time Fatoora portal submission — for both dine-in receipts and delivery aggregator orders. Etriplesoft configures and tests full ZATCA compliance as part of every Saudi Arabia restaurant implementation.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-restaurant-management-software/",
    language: "en",
    note: "regulation or claim that we support a regime; Odoo version/edition claim",
  },
  {
    id: "held-059",
    category: "Odoo",
    question: "Can Odoo integrate with Talabat and Noon Food delivery apps?",
    answer:
      "Yes. Odoo restaurant management software integrates with Talabat, Noon Food, Elmenus, Mrsool, HungerStation, and Jahez — consolidating all delivery orders into one unified KDS screen. Your kitchen team sees every order from every channel in one place with no tablet switching required. Aggregator commission tracking and settlement reconciliation with your accounting module are also handled automatically.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-restaurant-management-software/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-060",
    category: "Pricing",
    question: "How does Odoo handle food cost tracking and recipe management?",
    answer:
      "Odoo restaurant management software uses a bill of materials system for each menu item — defining the exact ingredients and quantities needed per dish. Every time an order is placed, those quantities are automatically deducted from your inventory. You can see your live food cost percentage per dish, per category, and across your whole menu — updated in real time with every sale. This gives you the data to manage margins without waiting for month-end stock counts.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-restaurant-management-software/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-061",
    category: "Odoo",
    question:
      "Can Odoo manage cloud kitchen operations with multiple virtual brands?",
    answer:
      "Yes. Odoo is well-suited for cloud kitchen management. You can run multiple virtual brands from a single Odoo instance — each with its own menu, pricing, and P&L tracking — while the kitchen operates from a unified KDS screen that distinguishes orders by brand and delivery channel. Etriplesoft configures this multi-brand architecture as part of cloud kitchen implementations.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-restaurant-management-software/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-062",
    category: "Regional operations",
    question:
      "What is the difference between Odoo POS and Foodics for restaurants?",
    answer:
      "Foodics is a dedicated restaurant POS platform with strong MENA market coverage. Odoo is a full ERP system that includes a restaurant POS module — meaning your POS, accounting, inventory, HR, and payroll all run in one connected platform. The key advantages of Odoo over Foodics for restaurant operators are: native HR and payroll integration, full accounting with ETA/ZATCA compliance built in, open-source customisability, and food cost tracking with recipe bill of materials. Foodics is POS-first; Odoo is business-operations-first.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-restaurant-management-software/",
    language: "en",
    note: "regulation or claim that we support a regime; competitor comparison",
  },
  {
    id: "held-063",
    category: "Implementation",
    question:
      "How long does an Odoo restaurant management software implementation take?",
    answer:
      "A typical Odoo restaurant implementation by Etriplesoft takes 6 to 10 weeks depending on branch count, delivery integrations, and modules required. Single-branch restaurants with standard POS and KDS configuration can go live in as few as 4 weeks. Multi-branch F&B groups with cloud kitchen management, loyalty programs, and multi-jurisdiction compliance typically require 8 to 12 weeks. The exact timeline is agreed at the discovery appointment before any work begins.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-restaurant-management-software/",
    language: "en",
    note: "duration/timeline; regulation or claim that we support a regime",
  },
  {
    id: "held-064",
    category: "Odoo",
    question:
      "Does Odoo restaurant software work offline when the internet is down?",
    answer:
      "Yes. Odoo POS is designed to operate in offline mode — your team can continue taking orders, processing payments, and closing tables with no internet connection. All transactions are synchronized automatically once connectivity is restored. This is a critical requirement for Egyptian restaurants where connectivity can be unpredictable during peak service hours.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-restaurant-management-software/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-065",
    category: "Odoo",
    question: "What is Odoo real estate software?",
    answer:
      "Odoo real estate software is an all-in-one ERP platform that manages property listings, lease contracts, CRM pipelines, maintenance requests, and financial reporting in a single connected system. Unlike standalone property management tools, Odoo includes native CRM, full accounting, maintenance management, payroll, and business intelligence — eliminating the need for multiple disconnected tools across your real estate business.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-real-estate-software/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-066",
    category: "Regional operations",
    question: "What is the best real estate software for Egypt?",
    answer:
      "For Egyptian property businesses, Odoo real estate software configured by an Odoo Gold Partner like Etriplesoft is the most comprehensive option available. It includes full ETA e-invoicing compliance for rental and sale transactions, Arabic UI, Egyptian tenancy law lease templates, and EGP pricing — with transparent implementation costs starting from EGP 65,000. No other real estate ERP offers all four capabilities for the Egyptian market in one platform.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-real-estate-software/",
    language: "en",
    note: "price; certification or partner level; regulation or claim that we support a regime; superlative or absolute claim",
  },
  {
    id: "held-067",
    category: "Regional operations",
    question:
      "Does Odoo real estate software support RERA compliance for UAE brokerages?",
    answer:
      "Yes. Etriplesoft configures Odoo real estate software to support RERA broker compliance requirements in Dubai and the UAE — including agent license tracking, Form A/B/F document management, and RERA-compliant fee structures. Ejari tenancy registration workflows and DLD transaction fee tracking are also configured as part of a standard UAE real estate implementation.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-real-estate-software/",
    language: "en",
    note: "office/location; regulation or claim that we support a regime",
  },
  {
    id: "held-068",
    category: "Regional operations",
    question: "Does Odoo support Ejar registration in Saudi Arabia?",
    answer:
      "Yes. Saudi Arabia's mandatory Ejar lease registration system is supported through Odoo's contract and document management modules. Etriplesoft configures Ejar-compliant lease templates, automated submission workflows, and REGA compliance tracking as part of every Saudi Arabia real estate implementation. ZATCA Phase 2 e-invoicing for property transactions is also included at no extra cost.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-real-estate-software/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-069",
    category: "Pricing",
    question:
      "How much does Odoo real estate software implementation cost in Egypt?",
    answer:
      "We don't offer fixed pricing tiers because every real estate business is different. Your implementation is scoped and priced based on your portfolio size, branch count, modules required, and compliance markets. Book a free 45-minute discovery call and we will provide a detailed fixed-price proposal within 48 hours — no obligation.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-real-estate-software/",
    language: "en",
    note: "price; duration/timeline; regulation or claim that we support a regime",
  },
  {
    id: "held-070",
    category: "Regional operations",
    question:
      "Can Odoo real estate software replace Yardi for property management in the UAE?",
    answer:
      "Yes — and with significant advantages for UAE-based property businesses. Odoo real estate software includes native CRM, Arabic interface, RERA compliance, Ejari integration, and UAE VAT handling — none of which Yardi offers natively for the UAE market. Odoo is also open-source, fully customisable, and significantly more cost-effective for the MENA market than Yardi's global enterprise pricing model.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-real-estate-software/",
    language: "en",
    note: "regulation or claim that we support a regime; competitor comparison; superlative or absolute claim",
  },
  {
    id: "held-071",
    category: "Implementation",
    question: "How long does an Odoo real estate software implementation take?",
    answer:
      "A typical Odoo real estate software implementation by Etriplesoft takes 6 to 12 weeks depending on portfolio size, number of branches, and modules required. Single-branch brokerages can go live in as few as 45 days. Multi-branch developers with off-plan projects and full compliance configuration typically require 90 days. Enterprise implementations with multi-country compliance across Egypt, UAE, and Saudi Arabia are scoped individually.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-real-estate-software/",
    language: "en",
    note: "duration/timeline; regulation or claim that we support a regime",
  },
  {
    id: "held-072",
    category: "Odoo",
    question: "How to automate lease renewals with Odoo real estate software?",
    answer:
      "Odoo real estate software automates lease renewals through configurable renewal reminder workflows — sending alerts to both agents and tenants at 90, 60, and 30 days before expiry. Renewal terms, escalation rules, and updated pricing are applied automatically from the original contract template. Once the tenant confirms, the new contract is generated, sent for e-signature, and the invoice schedule is updated — all without manual intervention.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-real-estate-software/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-073",
    category: "Company",
    question: "What is Odoo facility management software?",
    answer:
      "Odoo facility management software is a fully integrated ERP platform that connects CMMS maintenance management, CAFM asset tracking, field service dispatch, helpdesk, spare parts inventory, and finance in one system — designed for facility management businesses of every size. As a certified Odoo Gold Partner, Etriplesoft configures Odoo FM for Egypt, UAE, and Saudi Arabia compliance from day one.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-facility-management-software/",
    language: "en",
    note: "certification or partner level; regulation or claim that we support a regime",
  },
  {
    id: "held-074",
    category: "Odoo",
    question: "Can Odoo replace a standalone CMMS like Archibus or IBM Maximo?",
    answer:
      "Yes. Odoo delivers full CMMS capabilities — corrective and preventive work orders, technician assignment, mobile completion, and asset inspection tracking — while also connecting your maintenance operations directly to finance, HR, and procurement in one platform. For FM businesses currently running Archibus or IBM Maximo alongside separate accounting software, Odoo eliminates the integration overhead entirely and reduces total system cost significantly.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-facility-management-software/",
    language: "en",
    note: "competitor comparison; superlative or absolute claim",
  },
  {
    id: "held-075",
    category: "Support",
    question: "Does Odoo support preventive maintenance scheduling?",
    answer:
      "Yes. Odoo's preventive maintenance module automates every recurring maintenance task across all your buildings and assets. You configure the schedule once per asset type — HVAC, elevators, fire systems, generators — and Odoo generates work orders automatically before due dates. Technicians receive automated assignments and complete jobs on mobile. No manual scheduling or calendar management required.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-facility-management-software/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-076",
    category: "Odoo",
    question: "How does Odoo track SLA compliance for FM contractors?",
    answer:
      "Odoo's helpdesk module includes built-in SLA countdown timers that start automatically when a client or tenant request is logged. Escalation rules trigger manager alerts before deadlines are breached. Completion time is recorded per ticket and compiled into automated SLA compliance reports per client, per site, and per contract period — all without manual reporting.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-facility-management-software/",
    language: "en",
    note: "SLA / 24-7 / response-time / guarantee wording; regulation or claim that we support a regime",
  },
  {
    id: "held-077",
    category: "Odoo",
    question:
      "What is the difference between CMMS and CAFM — and does Odoo cover both?",
    answer:
      "A CMMS (Computerized Maintenance Management System) manages work orders, preventive schedules, and technician assignments. A CAFM (Computer-Aided Facility Management) system manages the full asset register, space data, compliance documents, and lifecycle tracking. Odoo covers both: the Maintenance module delivers CMMS functionality while the Assets module delivers CAFM-grade asset management — all inside one ERP system with full financial integration.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-facility-management-software/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-078",
    category: "Regional operations",
    question: "Does Odoo FM software support multi-site management in the UAE?",
    answer:
      "Yes. One Odoo instance handles unlimited facilities, buildings, and sites. You get a consolidated group dashboard alongside site-level drill-downs per building, per client contract, and per technician team. UAE VAT compliance, multi-currency support, and Arabic interface are all included in the standard Odoo v17 enterprise edition configured by Etriplesoft for UAE FM businesses.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-facility-management-software/",
    language: "en",
    note: "regulation or claim that we support a regime; Odoo version/edition claim",
  },
  {
    id: "held-079",
    category: "Pricing",
    question:
      "How much does Odoo facility management software implementation cost in Egypt?",
    answer:
      "We don't offer fixed pricing tiers because every FM operation is different. Your implementation is scoped and priced based on your building count, SLA contract structure, modules required, and compliance market. Book a free 45-minute discovery call and we will provide a detailed fixed-price proposal within 48 hours — no obligation.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-facility-management-software/",
    language: "en",
    note: "price; duration/timeline; SLA / 24-7 / response-time / guarantee wording; regulation or claim that we support a regime",
  },
  {
    id: "held-080",
    category: "Implementation",
    question: "How long does an Odoo FM implementation take?",
    answer:
      "Single-site FM implementations go live in a minimum of 6 weeks from kick-off — covering module configuration, asset data import, team training, and a full operational simulation before go-live. Multi-site implementations with complex SLA workflows and finance integration typically run 8–12 weeks. The exact timeline is agreed at the discovery appointment before any work begins.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-facility-management-software/",
    language: "en",
    note: "duration/timeline; SLA / 24-7 / response-time / guarantee wording",
  },
  {
    id: "held-081",
    category: "Company",
    question: "What is Odoo HR software?",
    answer:
      "Odoo HR software is a fully integrated human resources management system that covers employee management, payroll, attendance, leave, recruitment, and performance appraisals — all inside one ERP platform. It eliminates separate HR tools by connecting people operations directly to accounting, projects, and operations in Odoo ERP. As a certified Odoo Gold Partner, Etriplesoft configures Odoo HR software to match your exact org structure, payroll rules, and compliance obligations — whether you need Odoo HR Egypt, Odoo HR UAE, or Odoo HR Saudi Arabia localization.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "certification or partner level; regulation or claim that we support a regime",
  },
  {
    id: "held-082",
    category: "Odoo",
    question: "Does Odoo HR calculate Egyptian social insurance automatically?",
    answer:
      "Yes. Odoo's Egypt payroll localization automatically calculates the employee social insurance share (14% of the social insurance reference amount) and the employer share (26%) on every payslip. The Social Insurance Reference Amount is set per employee contract. No manual calculation is required — Odoo handles the deduction and employer contribution every payroll run.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "percentage",
  },
  {
    id: "held-083",
    category: "Odoo",
    question: "How does Odoo handle end-of-service benefits in Egypt?",
    answer:
      "Odoo calculates Egyptian end-of-service benefits (EOSB) using the standard formula: (Wage + Allowances ÷ 30) × Number of Leave Days ÷ 12. The provision accrues monthly and is reported on each payslip automatically. When an employee leaves, the final EOSB calculation is generated based on their service period, contract type, and reason for leaving — all compliant with Egyptian Labor Law.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-084",
    category: "Odoo",
    question: "Can Odoo connect to biometric attendance devices in Egypt?",
    answer:
      "Yes. Etriplesoft configures Odoo to integrate with popular biometric devices used in Egypt — including ZKTeco and Suprema fingerprint scanners and facial recognition devices — via API or middleware connector. Attendance records from the device sync directly to Odoo's attendance module, which feeds automatically into payroll. This eliminates manual attendance imports entirely.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-085",
    category: "Regional operations",
    question: "Does Odoo generate Arabic payslips?",
    answer:
      "Yes. Odoo HR supports bilingual payslip generation — Arabic and English — from the same system. Arabic payslip templates are configured during implementation to match your company branding and include all required fields. Employees receive payslips in their preferred language, which is a compliance requirement for many Egyptian and GCC businesses.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-086",
    category: "Regional operations",
    question:
      "What is the difference between Odoo HR and ZenHR for Egyptian businesses?",
    answer:
      "Both platforms support Egyptian payroll compliance, Arabic interface, and biometric attendance. The key difference is integration scope: Odoo HR software is part of a full ERP system, so payroll journals post automatically to Odoo Accounting, project costs pull from timesheets, and HR data connects to operations and sales. ZenHR is a standalone HR platform — strong for HR-specific needs but requiring third-party integrations for accounting and operations. For businesses running Odoo for finance or operations already, Odoo HR software is the natural choice.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "regulation or claim that we support a regime; competitor comparison",
  },
  {
    id: "held-087",
    category: "Pricing",
    question: "How much does Odoo HR implementation cost in Egypt?",
    answer:
      "Odoo HR software implementation fees start from EGP 60,000 for a single-entity HR setup covering payroll, attendance, and leave management. Multi-module scopes (adding recruitment, appraisals, and multi-branch) range from EGP 120,000 to 280,000. Multi-company group implementations start from EGP 280,000. All figures are implementation fees — Odoo Enterprise licensing is billed separately per user/month. The exact scope and investment are confirmed at your free discovery appointment.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "price",
  },
  {
    id: "held-088",
    category: "Regional operations",
    question: "Does Odoo HR support GOSI and WPS for Saudi Arabia?",
    answer:
      "Yes. Odoo v17 includes Saudi Arabia payroll localization covering GOSI contribution calculations for both employee and employer, WPS (Wage Protection System) salary file export, and end-of-service benefit calculations under Saudi Labor Law. Etriplesoft configures and tests full Saudi compliance as part of every KSA implementation, and can handle dual-jurisdiction setups (Egypt + Saudi Arabia) within a single Odoo instance.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "regulation or claim that we support a regime; Odoo version/edition claim",
  },
  {
    id: "held-089",
    category: "Implementation",
    question: "How long does Odoo HR implementation take?",
    answer:
      "All Etriplesoft HR implementations go live in a minimum of 6 weeks from kick-off — this ensures proper payroll localization, biometric device integration, data migration, team training, and a full test payroll run before going live. Multi-entity or multi-country implementations with complex payroll structures typically run 10–14 weeks. The exact timeline is agreed at your discovery appointment before any work begins.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-hr-software/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-090",
    category: "Regional operations",
    question: "Is Odoo free for accounting?",
    answer:
      "Odoo Community is free and includes basic accounting features. The Enterprise edition — which includes full bank reconciliation, ETA e-invoicing, ZATCA Phase 2, AI-assisted matching, and mobile expense capture — requires a per-user monthly subscription. For most Egypt and GCC businesses, Enterprise is required for full compliance coverage. Etriplesoft will recommend the right edition during your discovery session.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-091",
    category: "Odoo",
    question: "What is Odoo for Accounting?",
    answer:
      "Odoo for Accounting is a fully integrated ERP accounting module that manages invoicing, expense tracking, bank reconciliation, tax compliance, and financial reporting within a single connected platform. It eliminates the need for separate accounting software by connecting finance directly to sales, purchasing, inventory, and payroll in Odoo ERP.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-092",
    category: "Regional operations",
    question: "How does Odoo handle ETA e-invoicing in Egypt?",
    answer:
      "Odoo integrates directly with the Egyptian Tax Authority (ETA) portal via API. Once configured, every confirmed invoice is automatically validated, digitally signed, assigned a UUID, and transmitted to ETA in real time. Etriplesoft configures your ETA Client ID, ETA Secret, branch codes, and activity codes during implementation — so ETA compliance is fully automatic from day one with no manual intervention required.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-093",
    category: "Pricing",
    question: "How much does Odoo accounting implementation cost?",
    answer:
      "We don't offer fixed pricing tiers because every accounting operation is different. Your implementation is scoped and priced based on your entity structure, compliance markets, modules required, and data migration complexity. Book a free 45-minute discovery call and we will deliver a detailed fixed-price proposal within 48 hours — no obligation.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "price; duration/timeline; regulation or claim that we support a regime",
  },
  {
    id: "held-094",
    category: "Implementation",
    question: "How long does an Odoo accounting implementation take?",
    answer:
      "All Odoo for Accounting implementations by Etriplesoft go live in a minimum of 6 weeks from kick-off — this ensures proper configuration, data migration, team training, and testing are completed without shortcuts. Multi-company or multi-jurisdiction projects typically run 10–16 weeks depending on complexity. The exact timeline is agreed with you at the discovery appointment before any work begins.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-095",
    category: "Regional operations",
    question: "Does Odoo support ZATCA Phase 2 for Saudi Arabia?",
    answer:
      "Yes. Odoo for Accounting v17 includes built-in ZATCA Phase 2 e-invoicing compliance for Saudi Arabia, covering B2B and B2C invoices, QR code generation, cryptographic signing, and automatic submission to the ZATCA platform. Etriplesoft configures and tests full ZATCA compliance as part of every Saudi Arabia implementation, and can handle dual-jurisdiction setups (Egypt ETA + ZATCA Phase 2) within a single Odoo instance.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "regulation or claim that we support a regime; Odoo version/edition claim",
  },
  {
    id: "held-096",
    category: "Regional operations",
    question:
      "What is the difference between Odoo Accounting and Odoo Invoicing?",
    answer:
      "Odoo Invoicing is a lighter module for customer billing, payment tracking, and basic expense management — suitable for businesses without a double-entry accounting requirement. Odoo Accounting is the full module with a complete general ledger, journal entries, bank reconciliation, multi-currency, tax reporting, and ETA compliance. For any business with employees, multiple bank accounts, or tax compliance requirements in Egypt or GCC, Odoo Accounting is the right choice.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-097",
    category: "Regional operations",
    question: "Can Odoo replace QuickBooks or Sage for an Egyptian company?",
    answer:
      "Yes, and for most Egyptian businesses Odoo for Accounting is the stronger choice. QuickBooks does not natively support ETA e-invoicing, has no Arabic interface, and lacks ERP integration with sales, inventory, and HR. Sage supports more accounting depth but requires third-party addons for ETA and ZATCA compliance. Odoo covers ETA, ZATCA, and UAE VAT natively in v17 — with a full Arabic UI and native ERP integration — making it purpose-built for MENA compliance requirements.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "regulation or claim that we support a regime; competitor comparison; Odoo version/edition claim",
  },
  {
    id: "held-098",
    category: "Implementation",
    question:
      "Why should businesses choose Etriplesoft for Odoo accounting implementation?",
    answer:
      "Etriplesoft is a certified Odoo partner based in Cairo with 10+ years of ERP delivery experience across Egypt, UAE, and Saudi Arabia. Every implementation follows a structured From Setup To Success methodology covering discovery, system design, configuration, data migration, team training, and go-live support — with full local tax compliance from day one.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-for-accounting/",
    language: "en",
    note: "duration/timeline; certification or partner level; office/location; regulation or claim that we support a regime",
  },
  {
    id: "held-099",
    category: "Odoo",
    question: "Is this a replacement for Odoo's standard Helpdesk app?",
    answer:
      "Yes. Our ITSM Helpdesk is a standalone application — it doesn't depend on the standard Helpdesk module. It has its own menu, models, stages, and security groups. You can install them side-by-side if you want, but most clients uninstall the standard one to avoid confusion.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-itsm-helpdesk-module/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-100",
    category: "Odoo",
    question: "Does it depend on third-party apps or Odoo Studio?",
    answer:
      "No. The module depends only on Odoo's standard dependencies: base, mail, portal, and resource. No OCA apps, no Studio, no external paid modules.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-itsm-helpdesk-module/",
    language: "en",
    note: "superlative or absolute claim",
  },
  {
    id: "held-101",
    category: "Odoo",
    question: "How does the CAB approval actually block an unapproved change?",
    answer:
      'When a Normal change is flagged with High or Critical risk (or when it\'s an Emergency change), the "Start Implementation" button raises a UserError until CAB approval is recorded. The error message is explicit: "CAB approval is required before implementation." There is no technical workaround.',
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-itsm-helpdesk-module/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-102",
    category: "Odoo",
    question:
      "Can the SLA timer pause automatically when we're waiting on the customer?",
    answer:
      'Yes. The "On Hold" stage has an sla_paused flag set to True. Moving a ticket into On Hold pauses the clock; moving it back to an active stage resumes it. The full pause history is auditable.',
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-itsm-helpdesk-module/",
    language: "en",
    note: "SLA / 24-7 / response-time / guarantee wording",
  },
  {
    id: "held-103",
    category: "Odoo",
    question: "What happens when a problem is marked as a Known Error?",
    answer:
      'If a workaround has been documented, the system automatically creates a Knowledge Base article with category "Known Error", visibility "Internal", and content combining the workaround and root cause. The article is linked back to the problem. Your Level-1 team gets a self-growing KEDB without lifting a finger.',
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-itsm-helpdesk-module/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-104",
    category: "Odoo",
    question:
      "Does it come with demo data so we can evaluate before committing?",
    answer:
      "Yes — the ITSM platform includes 10 realistic tickets, 4 problems, 4 changes, 7 assets, 4 SLA policies, and 5 KB articles loaded automatically. You can walk the full ITIL lifecycle on day one — perfect for evaluating before committing to go-live.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-itsm-helpdesk-module/",
    language: "en",
    note: "SLA / 24-7 / response-time / guarantee wording",
  },
  {
    id: "held-105",
    category: "Implementation",
    question: "How long until we go live?",
    answer:
      "Typically 4–10 weeks depending on volume of legacy tickets, CMDB complexity, and integration needs. Etriplesoft deploys for ITSM software Egypt, UAE, and Saudi Arabia clients on the same structured timeline — Tickets + SLA + KB first, then Changes + CMDB in phase two.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-itsm-helpdesk-module/",
    language: "en",
    note: "duration/timeline; SLA / 24-7 / response-time / guarantee wording",
  },
  {
    id: "held-106",
    category: "Odoo",
    question:
      "Does the Odoo Education Management System work for all user types — teachers, students, parents, admins?",
    answer:
      "Yes. The Odoo Education Management System ships with four distinct role-based portals. Each role gets its own login, its own dashboard, and its own data scope. Admins have full configuration control; teachers manage their classes; students work on their own records; and parents see their children's records with the ability to pay fees online.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-107",
    category: "Regional operations",
    question:
      "Does this education ERP software support Arabic natively, or is it a plugin?",
    answer:
      "Arabic is part of Odoo's core translation engine, and this module inherits it fully. Menus, forms, reports, invoices, transcripts, and email templates all render in Arabic with full right-to-left (RTL) layout. Each user picks their preferred language independently — the database is shared, the experience is personal.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-108",
    category: "Odoo",
    question:
      "In the Odoo school management system, are teachers linked to Odoo HR?",
    answer:
      "Teachers in the Odoo school management system are Odoo Employees under the hood. That means every teacher record is a proper HR employee with contract, department, and manager — instantly compatible with Odoo Payroll, Time Off, Appraisals, and Expenses. You manage the academic dimension (subjects taught, class allocations) in the Education module and the employment dimension (salary, leave, performance) in HR, on the same record.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-109",
    category: "Odoo",
    question:
      "How does the school ERP software Egypt and GCC schools use for timetable management work?",
    answer:
      "Timetables are configured by the admin: you create classes per subject with capacity limits, assign teachers and rooms, and schedule them on the calendar. The system enforces the master-data rules (capacity caps, room availability) but doesn't auto-solve the scheduling problem itself — that remains a human-in-the-loop task because every school has different priorities. Once published, timetables appear in calendar views for every role.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-110",
    category: "Odoo",
    question: "Can I track attendance different ways — daily vs per-class?",
    answer:
      "Yes. Both modes coexist. Daily attendance captures the student's overall presence at school; per-class attendance captures subject-level presence. Both update the same student record, with tags (Tardy, Sick Leave, Excused, etc.) and calendar visibility. Optional kiosk integration can automate daily check-in while teachers handle per-class marking.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-111",
    category: "Odoo",
    question:
      "Can this school management system UAE and multi-campus institutions use for multiple branches?",
    answer:
      "Yes. You can configure multiple branches under one head institution and manage them within the same database — making it ideal as a school management system UAE, a school ERP Saudi Arabia group-wide solution, or for any school ERP software Egypt multi-campus deployment. Students, teachers, and records can be scoped to a branch, while consolidated reports and financials roll up across all branches for group-level visibility.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-112",
    category: "Odoo",
    question:
      "Can this education ERP software grading system match our local curriculum?",
    answer:
      "Yes. The education erp software lets you define your own grade scales, weights, and rules. Whether your institution uses letter grades, percentages, GPA, or a custom formula, the grading engine adapts without code. Grade scales can also be converted between formats for transcripts.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "company or module capability claim not yet verified with the delivery team",
  },
  {
    id: "held-113",
    category: "Odoo",
    question: "How does fee management work in this education ERP software?",
    answer:
      "Fees in the education ERP software generate standard Odoo invoices that post directly into the accounting journals you configure. Tuition, transport, lunch, and library fees map to the correct revenue accounts. Online payments reconcile automatically. Your finance team gets one clean set of books — no separate school-fee subsystem.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-114",
    category: "Odoo",
    question:
      "Can parents with multiple children manage them from one account?",
    answer:
      "Yes. Parents log in once and switch between their children's profiles without separate credentials. They see each child's grades, attendance, schedule, and fees, and can pay invoices across all children from the same portal.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-115",
    category: "Odoo",
    question:
      "Does the school ERP Saudi Arabia and Egypt transport billing work automatically?",
    answer:
      "Yes. Transport is a fee element in the grade-wise fee structure. Assigning a student to a bus route automatically adds the correct transport fee to their invoice. Route changes, mid-year joins, and early exits prorate cleanly into the accounting records — whether deployed as a school ERP Saudi Arabia, school ERP software Egypt, or school management system UAE.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-116",
    category: "Odoo",
    question:
      "Can students and parents access the school management system UAE and mobile portals?",
    answer:
      "Yes. Odoo's portal — including the school management system UAE mobile experience — is responsive and works on any modern smartphone browser. Parents can check grades, pay fees, and read announcements on the go; students can submit assignments and check their schedule from anywhere.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-117",
    category: "Odoo",
    question:
      "Which Odoo version is the Odoo school management system compatible with?",
    answer:
      "The Odoo school management system — as a fully maintained education ERP software — is actively maintained across current Odoo versions (both Community and Enterprise editions). E-TripleSoft will confirm the exact version that best fits your hosting environment and existing Odoo deployment during the discovery phase.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "superlative or absolute claim; Odoo version/edition claim",
  },
  {
    id: "held-118",
    category: "Implementation",
    question:
      "How long does it take to go live with school ERP software Egypt or GCC?",
    answer:
      "Typically 6–12 weeks depending on volume of legacy student data, fee structure complexity, branch count, and integrations (e.g. online payment gateways, SMS providers). Most schools go live with Enrollments, Students, Fees, and Portals first, then add Library and Transport in phase two.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-education-management-system/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-119",
    category: "Pricing",
    question: "How much does managed IT support cost in Egypt?",
    answer:
      "Costs vary based on company size, number of users, and the scope of services included, ranging from basic helpdesk support to full infrastructure and cybersecurity management. Most providers offer a free consultation to assess your needs and provide a tailored quote based on your specific environment.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/how-to-choose-managed-it-services-provider-egypt/",
    language: "en",
    note: "price",
  },
  {
    id: "held-120",
    category: "Cloud",
    question:
      "What questions should I ask an IT services provider before hiring?",
    answer:
      "Ask about response times and SLA terms, what's included in cybersecurity coverage, how backups and disaster recovery are handled, whether support is available 24/7, and how the contract scales as your business grows. Clear, specific answers are a strong signal of a provider you can trust.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/how-to-choose-managed-it-services-provider-egypt/",
    language: "en",
    note: "SLA / 24-7 / response-time / guarantee wording",
  },
  {
    id: "held-121",
    category: "Regional operations",
    question: "What is Egypt's data protection law?",
    answer:
      "Egypt's data protection law is a legal framework that regulates how businesses collect, process, and store the personal data of individuals. It requires explicit consent for data collection, limits how that data can be used, and obliges companies to implement reasonable security measures to protect it.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/data-protection-compliance-egypt-2026/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-122",
    category: "Regional operations",
    question:
      "Is my company required to comply with data protection regulations in Egypt?",
    answer:
      "If your business collects, stores, or processes personal data belonging to individuals in Egypt — regardless of your company's size or industry — data protection regulations apply to you. This includes customer records, employee data, and information handled through third-party vendors or cloud services.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/data-protection-compliance-egypt-2026/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-123",
    category: "Regional operations",
    question: "What are the penalties for data protection violations in Egypt?",
    answer:
      "Penalties typically include financial fines proportional to the violation, orders to halt non-compliant data processing activities, and in serious or repeated cases, more significant legal consequences. Because specific figures can change, it's best to consult the official law or a legal professional for current details.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/data-protection-compliance-egypt-2026/",
    language: "en",
    note: "regulation or claim that we support a regime; superlative or absolute claim",
  },
  {
    id: "held-124",
    category: "Regional operations",
    question: "Do I need a data protection officer for my business?",
    answer:
      "Whether a formally designated data protection officer is required generally depends on the scale and sensitivity of the data your business processes. Even smaller businesses without a dedicated role should assign clear internal responsibility for data protection compliance.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/data-protection-compliance-egypt-2026/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-125",
    category: "Odoo",
    question:
      "Is Odoo suitable for small businesses, or only larger companies?",
    answer:
      "Odoo works for both. Its per-app pricing and free Community edition make it accessible for small teams, while its Enterprise tier scales to support larger, multi-department organizations.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/erp-system-egypt-odoo-vs-sap-vs-dynamics/",
    language: "en",
    note: "superlative or absolute claim",
  },
  {
    id: "held-126",
    category: "Regional operations",
    question: "Does Odoo support Egyptian e-invoicing and tax compliance?",
    answer:
      "Yes — Odoo includes regional localization for Egypt's e-invoicing requirements, along with support for UAE and Saudi tax regulations.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/erp-system-egypt-odoo-vs-sap-vs-dynamics/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-127",
    category: "Pricing",
    question: "How does Odoo's cost compare to SAP Business One over time?",
    answer:
      "Odoo's per-user licensing is typically lower than SAP Business One's, and implementation costs tend to be more predictable, particularly for small and mid-sized deployments.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/erp-system-egypt-odoo-vs-sap-vs-dynamics/",
    language: "en",
    note: "competitor comparison",
  },
  {
    id: "held-128",
    category: "Odoo",
    question:
      "Can I switch from SAP or Dynamics to Odoo without losing my data?",
    answer:
      "Yes. A structured migration process — including data mapping and testing before go-live — is standard practice for moving from any legacy ERP to Odoo.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/erp-system-egypt-odoo-vs-sap-vs-dynamics/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-129",
    category: "Implementation",
    question: "How long does a typical Odoo implementation take?",
    answer:
      "For standard business processes, implementation often takes a few weeks to a few months, depending on the number of modules and the complexity of customization required.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/erp-system-egypt-odoo-vs-sap-vs-dynamics/",
    language: "en",
    note: "not selected for publication (module-specific; verify with the delivery team)",
  },
  {
    id: "held-130",
    category: "Pricing",
    question: "How much does Odoo cost per month?",
    answer:
      "Odoo's Standard plan starts around $9–$14 per user/month in the Middle East region, while the Custom (Enterprise) plan runs approximately $19–$24 per user/month. Community edition is free but self-hosted.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-implementation-cost-egypt/",
    language: "en",
    note: "price",
  },
  {
    id: "held-131",
    category: "Odoo",
    question: "Is Odoo cheaper than SAP?",
    answer:
      "Yes, significantly. Odoo implementation typically costs roughly 15–25% of a comparable SAP Business One deployment, making it a common choice for SMEs that need enterprise-level functionality without enterprise-level pricing. See our full Odoo vs SAP comparison for a detailed breakdown.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-implementation-cost-egypt/",
    language: "en",
    note: "percentage; competitor comparison; superlative or absolute claim",
  },
  {
    id: "held-132",
    category: "Pricing",
    question: "How much does a small business pay for Odoo implementation?",
    answer:
      "For a small team (1–20 users) with standard modules and minimal customization, implementation typically costs between $3,000 and $8,000, plus annual licensing fees.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-implementation-cost-egypt/",
    language: "en",
    note: "price",
  },
  {
    id: "held-133",
    category: "Regional operations",
    question: "Does Odoo pricing differ between Egypt, UAE, and Saudi Arabia?",
    answer:
      "Licensing cost is largely consistent across the three markets under the same regional pricing tier. Implementation cost varies more, mainly due to local compliance requirements like e-invoicing or VAT reporting.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-implementation-cost-egypt/",
    language: "en",
    note: "regulation or claim that we support a regime",
  },
  {
    id: "held-134",
    category: "Implementation",
    question: "How long until Odoo pays for itself?",
    answer:
      "Most small businesses with heavily manual processes see payback within 6 to 12 months. Mid-sized businesses typically see payback in 12 to 24 months, and larger, more complex deployments can take 24 to 36 months.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/odoo-roi-return-on-investment/",
    language: "en",
    note: "duration/timeline",
  },
  {
    id: "held-135",
    category: "Odoo",
    question:
      "Does Odoo have a built-in dashboard, or do I need to buy an app?",
    answer:
      "Yes. Odoo includes a native Dashboards app (from version 17 onward) that pulls live data from your existing modules — no extra purchase or installation needed to get started.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/odoo-kpi-dashboard-real-time-business-insights/",
    language: "en",
    note: "Odoo version/edition claim",
  },
  {
    id: "held-136",
    category: "Odoo",
    question: "Can I build an Odoo KPI dashboard myself without a developer?",
    answer:
      "Yes, for most standard dashboards. Odoo's Dashboards app and Odoo Studio both use no-code, drag-and-drop widgets. A developer is only needed for complex calculations that combine several modules in non-standard ways.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/odoo-kpi-dashboard-real-time-business-insights/",
    language: "en",
    note: "superlative or absolute claim",
  },
  {
    id: "held-137",
    category: "Regional operations",
    question: "هل شركتي ملتزمة بقانون حماية البيانات؟",
    answer:
      "للتأكد من التزام شركتك، ابدأ بحصر جميع البيانات الشخصية التي تجمعها من العملاء أو الموظفين، وتحقق من وجود موافقة صريحة لكل نوع من هذه البيانات، ووثّق الغرض من استخدامها. إذا كانت شركتك تعالج بيانات مقيمين في أكثر من دولة من الدول الثلاث، فقد تحتاج للالتزام بأكثر من قانون في نفس الوقت.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/data-protection-laws-egypt-saudi-uae/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-138",
    category: "Regional operations",
    question: "ما هي عقوبة مخالفة قانون حماية البيانات في مصر؟",
    answer:
      "تشمل عقوبات المخالفة في مصر غرامات مالية تختلف حسب طبيعة وحجم المخالفة، بالإضافة إلى إمكانية إلزام الشركة بوقف نشاط معالجة البيانات المخالف. للحصول على تفاصيل دقيقة ومحدثة، يُنصح دائماً بالرجوع إلى النص الرسمي للقانون أو استشارة مختص قانوني.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/data-protection-laws-egypt-saudi-uae/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-139",
    category: "Regional operations",
    question: "هل القوانين الثلاثة متشابهة؟",
    answer:
      "تشترك القوانين الثلاثة في المبادئ العامة مثل ضرورة الموافقة الصريحة وحماية البيانات من التسريب، لكنها تختلف في التفاصيل الإجرائية، مثل قيود نقل البيانات خارج الدولة، ومتطلبات تعيين مسؤول حماية البيانات، ومدد الإخطار عند حدوث اختراق.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/data-protection-laws-egypt-saudi-uae/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-140",
    category: "Regional operations",
    question: "هل الشركات الصغيرة مطالبة بالالتزام أيضاً؟",
    answer:
      "نعم، هذه القوانين تنطبق على أي شركة تجمع بيانات شخصية بغض النظر عن حجمها، وإن كانت بعض المتطلبات الإضافية مثل تعيين مسؤول حماية بيانات مخصص قد ترتبط بحجم النشاط أو حجم البيانات المعالجة.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/data-protection-laws-egypt-saudi-uae/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-141",
    category: "Cloud",
    question: "متى تحتاج شركتي إلى الانتقال إلى الحوسبة السحابية؟",
    answer:
      "تحتاج شركتك إلى الانتقال عند ظهور أي من العلامات التالية: ارتفاع مستمر في تكلفة صيانة السيرفرات، صعوبة في العمل من أكثر من فرع، قلق دائم من فقدان البيانات، بطء ملحوظ في النظام وقت ضغط العمل، أو صعوبة في توسيع الشركة بالبنية التحتية الحالية.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/signs-your-business-needs-cloud-computing/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-142",
    category: "Cloud",
    question: "ما الفرق بين السيرفر المحلي والحوسبة السحابية؟",
    answer:
      "السيرفر المحلي يعني تخزين البيانات وتشغيل الأنظمة على أجهزة داخل مقر الشركة، وتكون الشركة مسؤولة بالكامل عن الصيانة والحماية. أما الحوسبة السحابية فتعني تشغيل الأنظمة عبر خوادم بعيدة يديرها مزود الخدمة، مع إمكانية الوصول من أي مكان ونسخ احتياطي تلقائي.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/signs-your-business-needs-cloud-computing/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-143",
    category: "Cloud",
    question: "هل الانتقال إلى الحوسبة السحابية آمن على بيانات الشركة؟",
    answer:
      "نعم، بشرط التعامل مع مزود خدمة موثوق يوفر تشفيراً للبيانات، ونسخاً احتياطية تلقائية ومستمرة، وتحديثات أمنية دورية.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/signs-your-business-needs-cloud-computing/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-144",
    category: "Cloud",
    question: "كم يستغرق الانتقال إلى الحوسبة السحابية؟",
    answer:
      "تختلف المدة حسب حجم الشركة وكمية البيانات، لكن الانتقال التدريجي المخطط له جيداً يمكن أن يتم خلال أسابيع قليلة دون توقف العمل.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/signs-your-business-needs-cloud-computing/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-145",
    category: "Regional operations",
    question: "هل الفاتورة الإلكترونية إجبارية لكل الشركات في مصر؟",
    answer:
      "آه، منظومة الفاتورة الإلكترونية إجبارية لكل الممولين المسجلين في ضريبة القيمة المضافة، وبيتم تعميمها تدريجياً على كل القطاعات حسب قرارات مصلحة الضرائب المصرية.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/electronic-invoice-egypt-odoo/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-146",
    category: "Regional operations",
    question: "إيه غرامة عدم الالتزام بالفاتورة الإلكترونية؟",
    answer:
      "الغرامة تتراوح بين ٢٠ ألف جنيه و١٠٠ ألف جنيه لكل مخالفة، وممكن غرامة إضافية لحد ٥٠ ألف جنيه لعدم الاحتفاظ بالسجلات المطلوبة، بالإضافة لفقدان خصم المصروفات الضريبية للفواتير الورقية.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/electronic-invoice-egypt-odoo/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-147",
    category: "Regional operations",
    question: "هل أودو بيدعم الفاتورة الإلكترونية المصرية تلقائياً؟",
    answer:
      "آه، أودو بيوفر ربط مباشر مع بوابة مصلحة الضرائب، ويصدر الفواتير بالصيغة والترميز المطلوبين تلقائياً، مع استلام حالة القبول أو الرفض بشكل لحظي.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/electronic-invoice-egypt-odoo/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-148",
    category: "Regional operations",
    question: "ممكن أرجع أستخدم فواتير ورقية بدل الإلكترونية؟",
    answer:
      "لأ، من أبريل ٢٠٢٣ الفواتير الورقية مبقتش مقبولة كمصروفات خاضعة للخصم الضريبي، فالاستمرار في الفواتير الورقية بيعرّض الشركة لدفع ضرائب أكتر من اللازم بجانب المخاطر القانونية.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/electronic-invoice-egypt-odoo/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-149",
    category: "Regional operations",
    question: "قد إيه ياخد تفعيل الفاتورة الإلكترونية في أودو؟",
    answer:
      "التفعيل الأساسي غالباً بياخد أيام قليلة، لكن المدة الفعلية بتعتمد على مدى تعقيد أصناف الشركة وعدد الفروع المطلوب ربطها بالمنظومة.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/electronic-invoice-egypt-odoo/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-150",
    category: "Implementation",
    question: "إزاي أتأكد إن شركة معينة شريك أودو معتمد فعلاً؟",
    answer:
      "تقدر تتأكد مباشرة من دليل الشركاء الرسمي على موقع أودو نفسه (odoo.com/partners)، اللي بيوضح اسم الشركة ومستوى الاعتماد (ذهبي أو فضي) بشكل رسمي وموثّق.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/choosing-odoo-implementation-partner/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-151",
    category: "Implementation",
    question: "هل شريك التنفيذ الأغلى دايماً أفضل اختيار؟",
    answer:
      "لأ بالضرورة. السعر الأعلى مش دايماً مؤشر جودة، والأرخص مش دايماً يعني توفير حقيقي. الأهم إن السعر يكون واضح ومفصّل، ومربوط بخطة تنفيذ محددة، مش عرض عام غامض.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/choosing-odoo-implementation-partner/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-152",
    category: "Implementation",
    question: "إيه أهم علامة تدل إن الشريك مش مناسب؟",
    answer:
      "غياب خطة مشروع واضحة بجدول زمني ومعالم محددة، أو الإصرار على نقل كامل للنظام دفعة واحدة من غير فترة تشغيل متوازي مع النظام القديم، من أوضح العلامات التحذيرية.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/choosing-odoo-implementation-partner/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-153",
    category: "Implementation",
    question: "هل لازم الشريك يكون عنده خبرة في مجال شركتي بالتحديد؟",
    answer:
      "مش شرط إجباري، لكنه ميزة كبيرة. شريك عنده خبرة سابقة في مشاريع مشابهة لحجم ونوع نشاط شركتك هيقلل وقت التنفيذ ويقلل احتمالية الأخطاء في مرحلة الإعداد.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/choosing-odoo-implementation-partner/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-154",
    category: "Implementation",
    question: "هل الدعم الفني بعد الإطلاق مهم بنفس قدر مرحلة التنفيذ؟",
    answer:
      "آه، ومهم جداً. أغلب المشاكل الحقيقية بتظهر بعد الإطلاق مش أثناءه، فشريك من غير خطة دعم واضحة (تدريب، صيانة، تحديثات) بيسيبك لوحدك في أهم مرحلة.",
    status: "needs-verification",
    sourceUrl:
      "https://etriplesoft.com/ar/choosing-odoo-implementation-partner/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-155",
    category: "Pricing",
    question: "هل سعر أودو في مصر والخليج مثل سعره في أمريكا أو أوروبا؟",
    answer:
      "لا. يستخدم أودو قوائم أسعار إقليمية مختلفة، ودول الشرق الأوسط (مصر والسعودية والإمارات) لها أسعارها الخاصة الأقل من السعر الأمريكي. ولكل دولة سعرها، فتحقق منه مباشرة من odoo.com/pricing.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/odoo-pricing-egypt-gulf-guide/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-156",
    category: "Pricing",
    question: "هل تشمل رخصة أودو التنفيذ والتدريب؟",
    answer:
      "لا. رخصة أودو (التي تدفعها لأودو مباشرة) تمنحك البرنامج والاستضافة والدعم الفني الأساسي فقط. أما التنفيذ والتخصيص ونقل البيانات والتدريب فبتكلفة منفصلة تحددها مع شريك التنفيذ.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/odoo-pricing-egypt-gulf-guide/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-157",
    category: "Pricing",
    question: "ما الفرق بين خطة Standard وخطة Custom في أودو؟",
    answer:
      "خطة Standard تمنحك كل تطبيقات أودو باستضافة سحابية. وخطة Custom تضيف إليها Odoo Studio (تخصيص بدون كود)، وإدارة أكثر من شركة في النظام نفسه، وربط API خارجي، ومرونة في اختيار الاستضافة.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/odoo-pricing-egypt-gulf-guide/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-158",
    category: "Pricing",
    question: "هل توجد نسخة مجانية من أودو؟",
    answer:
      "نعم. خطة One App Free تمنحك تطبيقا واحدا فقط (المحاسبة مثلا) مجانا بعدد مستخدمين غير محدود. وإذا احتجت أكثر من تطبيق يعملان معا، فستحتاج إلى خطة مدفوعة.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/odoo-pricing-egypt-gulf-guide/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
  {
    id: "held-159",
    category: "Pricing",
    question: "هل تشمل تكلفة التنفيذ الربط مع الفاتورة الإلكترونية؟",
    answer:
      "أي تنفيذ احترافي لأودو في مصر أو الخليج يجب أن يشمل التوافق مع منظومة الفاتورة الإلكترونية المعتمدة في بلدك (مثل ETA في مصر وZATCA في السعودية) من البداية. وإذا لم يذكر عرض السعر هذا الأمر، فاسأل عنه صراحة قبل التعاقد.",
    status: "needs-verification",
    sourceUrl: "https://etriplesoft.com/ar/odoo-pricing-egypt-gulf-guide/",
    language: "ar",
    note: "Arabic-only article; the site is English-only, so it is not translated or published (contains claims that also need verification)",
  },
];

export const faqEntries: FaqEntry[] = [...published, ...heldForVerification];

export const publishedFaqs = faqEntries.filter(
  (entry) => entry.status === "published" && entry.language === "en",
);
