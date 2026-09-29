/**
 * Source material for /odoo/implementation
 * Extracted from the legacy WordPress export (old-content.xml):
 *   post "odoo-implementation-process-by-etriplesoft" (published 2026-03-11)
 *   plus regional/e-invoicing mentions from the same post.
 *
 * status:
 *   "legacy"  = stated on the old site; reuse, but the owner must reconfirm before launch
 *   "confirm" = NOT on the old site or conflicting; must not render until confirmed
 *
 * DO NOT render any field marked status: "confirm".
 */

export type Status = "legacy" | "confirm";

export interface Stage {
  id: string;
  order: number;
  title: string;
  legacyPhase: string;          // which of the old 5 phases it came from
  summary: string;
  whatHappens: string[];
  clientContributes: string[];  // generic unless marked
  deliverables: { label: string; status: Status }[];
  duration?: { text: string; status: Status; note?: string };
}

export const stages: Stage[] = [
  {
    id: "discovery",
    order: 1,
    title: "Discovery",
    legacyPhase: "1. Discovery & Scoping",
    summary:
      "Understand the business before building anything: current processes, pain points, and the scope of Odoo apps required.",
    whatHappens: [
      "Structured consultation with leadership, department heads and key users",
      "Audit of existing processes: sales, inventory, finance, HR, project delivery",
      "Pain points and requirements documented (duplicate entry, reporting delays, weak visibility, error-prone approvals)",
      "Scope defined: modules, workflows to automate, data to migrate, integrations, compliance requirements",
      "Roadmap produced with phases, milestones and resource needs",
    ],
    clientContributes: [
      "Access to leadership, department heads and key users",
      "Description of current processes and pain points",
    ],
    deliverables: [
      { label: "Business Requirements Document", status: "legacy" },
      { label: "Implementation roadmap", status: "legacy" },
      { label: "Module scope definition", status: "legacy" },
      { label: "Data audit report (migration readiness)", status: "legacy" },
    ],
    duration: { text: "1–2 weeks", status: "legacy" },
  },
  {
    id: "solution-design",
    order: 2,
    title: "Solution design",
    legacyPhase: "2. System Design & Customization",
    summary:
      "Translate requirements into a technical architecture and a module map, including any bespoke work and planned integrations.",
    whatHappens: [
      "Technical architecture defined (performance, scalability, maintainability)",
      "Custom development specified where standard Odoo does not cover a requirement",
      "Integration architecture planned: payment gateways, e-commerce, shipping carriers, government portals, BI tools",
      "Environment built in staging",
    ],
    clientContributes: ["Review and approval of the design", "Decisions on customization scope"],
    deliverables: [
      { label: "Technical Design Document (architecture and module map)", status: "legacy" },
      { label: "Configured staging environment", status: "legacy" },
      { label: "Custom development specification", status: "legacy" },
      { label: "Integration architecture", status: "legacy" },
    ],
    duration: { text: "1–3 weeks", status: "legacy" },
  },
  {
    id: "configuration",
    order: 3,
    title: "Configuration",
    legacyPhase: "2. System Design & Customization (Module Configuration) / 3. Data Migration & Deployment",
    summary:
      "Configure Odoo modules to the company's business rules, using standard functionality first and custom code only where needed.",
    whatHappens: [
      "Core modules configured: chart of accounts and tax/compliance setup, CRM pipeline stages, HR contract templates and payroll structures, multi-warehouse routing",
      "Custom modules, dashboards, workflow triggers and fields built where the standard platform falls short",
    ],
    clientContributes: ["Confirmation of business rules", "Timely answers to configuration questions"],
    deliverables: [],
    // The old site gives NO separate duration for configuration.
    duration: { text: "TODO: no separate legacy duration. Old site groups it inside phases 2 and 3.", status: "confirm" },
  },
  {
    id: "migration",
    order: 4,
    title: "Migration",
    legacyPhase: "3. Data Migration & Deployment",
    summary:
      "Extract, cleanse, transform and load existing data, then validate it with the people who use it.",
    whatHappens: [
      "Data extracted from legacy ERP, spreadsheets or accounting software",
      "Mandatory cleansing: merge duplicates, standardize naming, validate balances, archive obsolete records",
      "Four-step migration: map data to Odoo fields with a template per data category; load into a test environment and validate against source; key-user verification (finance, operations, HR); final migration timed to a month-end cutover",
      "Data categories: master data, opening balances, historical records where required, configuration data (tax rules, price lists, payment terms, warehouses)",
    ],
    clientContributes: [
      "Access to source data and system owners",
      "Key users from finance, operations and HR verify migrated data",
    ],
    deliverables: [{ label: "Clean, migrated data (verified)", status: "legacy" }],
    duration: {
      text: "2–6 weeks (covers the whole 'Data Migration & Deployment' phase, not migration alone)",
      status: "legacy",
    },
  },
  {
    id: "integration",
    order: 5,
    title: "Integration",
    legacyPhase: "2. System Design (planning) / 3. Deployment (activation)",
    summary: "Connect Odoo to the external systems the business depends on.",
    whatHappens: [
      "Connections planned in design, activated and verified during deployment",
      "Systems named on the old site: payment gateways, e-commerce platforms, shipping carriers (Aramex, DHL, FedEx), government portals (ZATCA, GOSI, Qiwa, WPS, ETA), BI tools",
    ],
    clientContributes: ["Credentials and access to third-party systems", "Sign-off on integration behavior"],
    deliverables: [{ label: "Active, verified integrations", status: "legacy" }],
  },
  {
    id: "testing",
    order: 6,
    title: "Testing",
    legacyPhase: "3. Data Migration & Deployment (Testing & Go-Live Preparation) / 4. UAT",
    summary: "Prove that the system works end to end before users depend on it.",
    whatHappens: [
      "Functional, integration and performance testing across business processes",
      "User Acceptance Testing (UAT): key users validate workflows",
    ],
    clientContributes: ["Key users perform UAT and sign off"],
    deliverables: [
      { label: "Test sign-off report", status: "legacy" },
      { label: "UAT sign-off", status: "legacy" },
      { label: "Production environment ready", status: "legacy" },
    ],
  },
  {
    id: "training",
    order: 7,
    title: "Training",
    legacyPhase: "4. Training & User Adoption",
    summary: "Role-based training in the client's own live environment, with internal champions to support peers.",
    whatHappens: [
      "Role-based sessions (warehouse, finance, sales differ)",
      "Training in the client's actual system with real products, customers and workflows",
      "Refresher sessions, new-hire onboarding, and update training for new Odoo versions after go-live",
    ],
    clientContributes: ["Release of department teams for training", "Nominate super users"],
    deliverables: [
      { label: "Role-based training completed", status: "legacy" },
      { label: "Documentation package (guides, videos, quick-reference cards)", status: "legacy" },
      { label: "Super users identified", status: "legacy" },
    ],
    duration: { text: "1–2 weeks", status: "legacy" },
  },
  {
    id: "go-live",
    order: 8,
    title: "Go-live",
    legacyPhase: "5. Go-Live & Continuous Support",
    summary: "A planned cutover, timed to protect data integrity, followed by an intensive early-support period.",
    whatHappens: [
      "Final data confirmation and live activation of API connections (ZATCA Fatoora, ETA e-invoicing, WPS, payment gateways, shipping carriers)",
      "User access provisioning",
      "Hypercare team deployed for the first critical days",
    ],
    clientContributes: ["Go/no-go decision", "Availability of key users on cutover"],
    deliverables: [{ label: "Live Odoo system in production", status: "legacy" }],
  },
  {
    id: "support",
    order: 9,
    title: "Support",
    legacyPhase: "5. Go-Live & Continuous Support",
    summary: "Hypercare first, then ongoing optimization and structured support.",
    whatHappens: [
      "Hypercare after go-live: fast response, daily check-ins, on-site or remote help for critical processes, rapid configuration adjustments",
      "Continuous optimization: new modules, dashboards, automations, integrations",
      "Support tiers: functional, technical, development, training",
    ],
    clientContributes: ["Report issues through agreed channels"],
    deliverables: [
      { label: "Hypercare coverage", status: "legacy" },
      { label: "Performance monitoring (uptime, speed, integration health)", status: "legacy" },
      { label: "Ongoing support / SLA", status: "confirm" }, // old site says "SLA" but publishes no terms
    ],
    duration: { text: "Hypercare: first 2–4 weeks after go-live", status: "legacy" },
  },
];

/**
 * TIMELINE WARNING
 * The old site contradicts itself on total duration:
 *  - Implementation post, per-phase chips add up to 5–13 weeks
 *    (1–2 + 1–3 + 2–6 + 1–2), hypercare (2–4 weeks) is on top
 *  - /odoo-erp-egypt post: "4–16 weeks", also "go-live in as little as 4 weeks"
 *  - Same post FAQ: "from a few weeks to a few months"
 *  - "Fixed pricing" is claimed on that post but not defined
 * Recommendation: render per-phase ranges only if the owner confirms them;
 * do NOT render a total. Show the qualitative timeline instead.
 */
export const timelineFactors = [
  "Scope and number of modules",
  "Data quality and volume",
  "Number and complexity of integrations",
  "Localization and compliance requirements",
  "Level of customization",
  "Client availability and speed of decisions",
];

export const supportTiers = [
  { name: "Functional support", text: "Helping users resolve day-to-day questions and perform tasks correctly." },
  { name: "Technical support", text: "Troubleshooting errors, configuration issues and integration problems." },
  { name: "Development support", text: "New customizations, reports and module enhancements as needs evolve." },
  { name: "Training support", text: "Onboarding new team members and refresher training." },
];

/** Regional: only what the old site states. Everything else needs confirmation. */
export const regional = {
  egypt: { status: "legacy" as Status, eInvoicing: "ETA", note: "Old site: ETA e-invoicing connection activated at go-live." },
  saudi: { status: "legacy" as Status, eInvoicing: "ZATCA (Fatoora)", note: "Old site also names GOSI, Qiwa, WPS." },
  uae: { status: "legacy" as Status, eInvoicing: "FTA VAT", note: "Old site frames UAE compliance as FTA VAT; no e-invoicing system named." },
};
