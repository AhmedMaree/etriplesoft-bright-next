// Copy for /odoo/hr-payroll. Facts come from ./source.ts (legacy WordPress post
// "odoo-hr-software"); this file filters and structures them, and follows the
// rules recorded there:
//  - only status "legacy" items render; "confirm" items stay out
//  - nothing from BLOCKED is reintroduced: no social-insurance rates, tax
//    brackets, leave entitlements, end-of-service formula, percentages, prices,
//    durations, anonymous case study or "100% compliant" claims
//  - Egypt is described as a set-up process, not as legal rules
//
// TODO (delivery/legal): supply approved wording for Egypt, Saudi Arabia and
// UAE payroll localization, GPS attendance, biometric device support and 360
// feedback before any of them is added to this page.

import {
  appraisals as appraisalItems,
  approvals as approvalItems,
  attendance as attendanceItems,
  documents as documentItems,
  employees as employeeItems,
  faq as faqItems,
  hero as heroSource,
  leave as leaveItems,
  payroll as payrollItems,
  recruitment as recruitmentItems,
  reporting as reportingItems,
  regional,
  type Item,
} from "./source";

/** Text of every item marked "legacy"; "confirm" items are dropped. */
const legacyText = (items: Item[]) =>
  items
    .filter((item) => item.status === "legacy")
    .map((item) => item.text.replace(/\s*\(link to [^)]*\)/, ""));

export const hrMetadata = {
  title: "Odoo HR & Payroll in Egypt, UAE & KSA",
  description:
    "Odoo HR and payroll for Egypt, the UAE and Saudi Arabia: employees, attendance, leave, recruitment, appraisals and payroll connected to Odoo Accounting.",
};

export const hero = {
  eyebrow: "Odoo HR & Payroll",
  title: heroSource.h1,
  description: heroSource.intro,
  highlight: "Payroll posts straight to Odoo Accounting, with Arabic and English payslips.",
  primary: "Book a Free Consultation",
  primaryHref: "/book-consultation",
  secondary: "Explore the modules",
};

export const anchors = [
  ["Core HR", "#core"],
  ["People lifecycle", "#lifecycle"],
  ["Payroll", "#payroll"],
  ["Comparison", "#comparison"],
  ["Who it is for", "#fit"],
  ["FAQs", "#faqs"],
] as const;

export const core = {
  eyebrow: "Core HR",
  title: "One employee record, from hire to payroll",
  description:
    "Employees, time and leave share one database, so HR, managers and finance all work from the same facts.",
  modules: [
    {
      id: "employees",
      title: "Employees & documents",
      intro: "The record everything else builds on.",
      items: [...legacyText(employeeItems), ...legacyText(documentItems)],
    },
    {
      id: "attendance",
      title: "Attendance",
      intro: "Time data that feeds payroll without re-entry.",
      items: legacyText(attendanceItems),
    },
    {
      id: "leave",
      title: "Leave & approvals",
      intro: "Requests, approvals and balances without paper.",
      items: [...legacyText(leaveItems), ...legacyText(approvalItems)],
    },
  ],
};

export const lifecycle = {
  eyebrow: "People lifecycle",
  title: "Hiring, growth and visibility",
  modules: [
    {
      id: "recruitment",
      title: "Recruitment & onboarding",
      intro: "From job posting to a ready-to-work employee.",
      items: legacyText(recruitmentItems),
    },
    {
      id: "appraisals",
      title: "Appraisals",
      intro: "Reviews and goals on a schedule.",
      items: legacyText(appraisalItems),
    },
    {
      id: "reporting",
      title: "HR reporting",
      intro: "What managers and HR need to see, when they need it.",
      items: legacyText(reportingItems),
      link: { key: "dashboard-insights", text: "See Dashboard & Insights" },
    },
  ],
};

export const payroll = {
  eyebrow: "Payroll",
  title: "Payroll configured for each country you operate in",
  description: regional.intro,
  items: legacyText(payrollItems),
  egypt: {
    title: "Egyptian payroll and social insurance",
    // Process only. Rates, brackets and formulas are deliberately not stated;
    // they are confirmed with the client's HR and finance team.
    text: "For Egyptian entities we set up salary structures, social insurance and income tax rules during implementation. Each rule is confirmed with your HR and finance team and checked in a test payroll run before the first live cycle, rather than assumed.",
  },
  otherCountries: {
    title: "Saudi Arabia and the UAE",
    text: "Payroll and HR rules differ by country. If you operate in more than one, we configure each entity separately and confirm its rules with you during discovery.",
  },
  note: "Regulations change. We confirm the current scope with you at the start of the project.",
};

export const midCta = {
  title: "Want to see Odoo HR & Payroll set up for your business?",
  description:
    "Talk to our team about your headcount, entities and payroll rules.",
};

export const comparison = {
  eyebrow: "Comparison",
  title: "Odoo HR compared with ZenHR and SAP SuccessFactors",
  description:
    "The real difference is scope. Odoo HR is one app inside a full ERP; the alternatives are dedicated HR products.",
  caption: "Odoo HR, ZenHR and SAP SuccessFactors at a glance",
  columns: ["", "Odoo HR (with ETripleSoft)", "ZenHR", "SAP SuccessFactors"],
  rows: [
    [
      "What it is",
      "An HR application inside the Odoo ERP",
      "A standalone cloud HR platform",
      "A cloud HR suite in the SAP portfolio",
    ],
    [
      "Accounting and operations",
      "Same database as Odoo Accounting, projects and operations; payroll entries post to Accounting",
      "Separate product; connects to accounting and operations through third-party integrations",
      "Connects to the SAP ecosystem",
    ],
    [
      "Customization",
      "Open-source core, extended with Odoo apps and custom development",
      "Closed SaaS",
      "Proprietary",
    ],
    [
      "Best fit",
      "Companies running, or planning to run, Odoo for finance and operations",
      "Companies that need a dedicated HR tool on its own",
      "Large enterprises already standardised on SAP",
    ],
  ],
  note: "This compares product positioning, not a feature-by-feature audit. Vendor features and plans change, so confirm current capabilities with each vendor.",
};

export const fit = {
  eyebrow: "Who it is for",
  title: "Built around how your business is organised",
  description:
    "Odoo HR adapts to the size and structure of your workforce, from a single site to several entities and countries.",
  items: [
    "Trading and distribution companies",
    "Construction and contracting",
    "Hospitality and food service",
    "Manufacturing and industry",
    "Healthcare groups",
    "Multi-branch retail",
    "Professional services",
    "Multi-entity groups",
    "Real estate",
    "Education and training",
  ],
};

export const why = {
  eyebrow: "Why ETripleSoft",
  title: "Why HR teams choose ETripleSoft",
  cards: [
    {
      title: "Odoo Gold Partner",
      text: "We implement Odoo across Egypt, the UAE and Saudi Arabia as a certified Odoo Gold Partner.",
    },
    {
      title: "Configured, not templated",
      text: "We set up salary structures, attendance and approvals around your organisation and policies.",
    },
    {
      title: "Tested before go-live",
      text: "We run a test payroll before launch and support your team through the first live payroll cycle.",
    },
  ],
};

export const implementation = {
  title: "How we implement this",
  description:
    "HR and payroll are delivered through our standard implementation process: discovery, design, configuration, data migration, testing, training, go-live and support.",
  link: "See the full implementation process",
};

const extraFaqs = [
  {
    q: "How does Odoo HR compare with ZenHR?",
    a: "Both are used for HR and payroll. The main difference is scope. Odoo HR is one app inside a full ERP, so payroll entries post to Odoo Accounting and HR data sits alongside projects and operations. ZenHR is a standalone HR platform, which suits dedicated HR needs but relies on integrations for accounting and operations.",
  },
  {
    q: "Does Odoo handle Egyptian payroll and social insurance?",
    a: "We configure Egyptian payroll rules, including social insurance and income tax, during implementation and confirm them with your HR and finance team. We test them in a trial payroll before you go live, rather than assuming rates or rules.",
  },
];

export const faqs = [
  ...faqItems
    .filter((item) => item.status === "legacy")
    .map((item) => [item.q, item.a] as const),
  ...extraFaqs.map((item) => [item.q, item.a] as const),
];

export const related = {
  title: "Related Odoo pages",
  siblingKeys: ["accounting", "itsm-helpdesk", "dashboard-insights"],
  overview: { label: "Odoo ERP overview", href: "/odoo" },
};

export const closing = {
  title: "Ready to plan your Odoo HR & Payroll setup?",
  description:
    "Book a consultation and we will talk through your entities, payroll rules and next steps.",
  secondary: { label: "Explore Solutions", href: "/services" },
};
