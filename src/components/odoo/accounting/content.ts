// Copy for /odoo/accounting. Facts come from ./source.ts (legacy WordPress post
// "odoo-for-accounting"); this file filters and structures them.
//
// Rules applied:
//  - only status "legacy" items render (see legacyText); "confirm" items are
//    left out and listed in the phase summary
//  - nothing from source.ts BLOCKED is reintroduced
//  - no durations, prices, percentages, named banks/providers or menu paths
//
// TODO: confirm with the delivery team before launch: OCR/receipt scanning,
// bank statement import formats, live bank feeds, cash-flow forecasting,
// multi-entity/multi-jurisdiction in one instance, consolidated reporting,
// which payment providers are supported, RTL print layouts, Community vs
// Enterprise split per Odoo version, current ZATCA version coverage.
// TODO: delivery/legal review of the ETA, ZATCA and UAE VAT wording.

import {
  accounting as accountingItems,
  bankReconciliation as bankItems,
  egyptEInvoicing,
  expenses as expenseItems,
  faq as faqItems,
  hero as heroSource,
  integrations as integrationItems,
  invoicing as invoicingItems,
  multiCompany as multiCompanyItems,
  reporting as reportingItems,
  saudi as saudiSource,
  taxLocalization as taxSource,
  uae as uaeSource,
  type Item,
} from "./source";

/** Text of every item marked "legacy"; "confirm" items are dropped. */
const legacyText = (items: Item[]) =>
  items
    .filter((item) => item.status === "legacy")
    // Source items mark cross-links as "(link to /path)"; the page renders real links instead.
    .map((item) => item.text.replace(/\s*\(link to [^)]*\)/, ""));

export const accountingMetadata = {
  title: "Odoo Accounting & E-Invoicing in Egypt, UAE & KSA",
  description:
    "Odoo accounting for Egypt, the UAE and Saudi Arabia: invoicing, expenses, reconciliation and reporting, plus e-invoicing connections for ETA and ZATCA.",
};

export const hero = {
  eyebrow: "Odoo Accounting & E-Invoicing",
  title: heroSource.h1,
  description: heroSource.intro,
  // Narrower than the old "ETA Compliant ERP": we connect Odoo to ETA.
  highlight: "Including Odoo e-invoicing for Egypt: we connect Odoo to ETA.",
  primary: "Book a Free Consultation",
  primaryHref: "/book-consultation",
  secondary: "Explore the modules",
};

export const anchors = [
  ["Core accounting", "#core"],
  ["Control & visibility", "#control"],
  ["Tax & localization", "#localization"],
  ["E-invoicing", "#e-invoicing"],
  ["Integrations", "#integrations"],
  ["Comparison", "#comparison"],
  ["FAQs", "#faqs"],
] as const;

export type Module = {
  id: string;
  title: string;
  intro: string;
  items: string[];
  link?: { key: string; text: string };
};

export const core = {
  eyebrow: "Core accounting",
  title: "The everyday finance work, in one place",
  description:
    "Ledger, invoicing and expenses share one database with sales, purchasing, inventory and payroll, so finance works from the same records as the business.",
  modules: [
    {
      id: "accounting",
      title: "Accounting",
      intro: "The ledger and controls behind everything else.",
      items: legacyText(accountingItems),
    },
    {
      id: "invoicing",
      title: "Invoicing",
      intro: "From order to invoice to payment.",
      items: legacyText(invoicingItems),
    },
    {
      id: "expenses",
      title: "Expenses",
      intro: "Capture, approve and post employee spend.",
      items: legacyText(expenseItems),
    },
  ] satisfies Module[],
};

export const control = {
  eyebrow: "Control & visibility",
  title: "Know where the money is, and where it is going",
  modules: [
    {
      id: "bank-reconciliation",
      title: "Bank reconciliation",
      intro: "Match bank activity to your books.",
      items: legacyText(bankItems),
    },
    {
      id: "reporting",
      title: "Reporting",
      intro: "Financial statements and finance dashboards on current data.",
      items: legacyText(reportingItems),
      link: { key: "dashboard-insights", text: "See Dashboard & Insights" },
    },
    {
      id: "multi-company",
      title: "Multi-company",
      intro: "Run more than one company in one system.",
      items: legacyText(multiCompanyItems),
    },
  ] satisfies Module[],
};

export const localization = {
  eyebrow: "Tax & localization",
  title: "Set up for each country you operate in",
  description: taxSource.intro,
  general: legacyText(taxSource.items),
  uae: {
    title: "United Arab Emirates",
    // Source supports VAT only: no UAE e-invoicing claim, no rate.
    text: uaeSource.status === "legacy" ? uaeSource.text : "",
  },
  saudi: {
    title: "Saudi Arabia",
    // High level only: no phases, waves, dates, thresholds or penalties.
    text: saudiSource.status === "legacy" ? saudiSource.text : "",
  },
  note: "Regulations change. We confirm the current scope with you at the start of the project.",
};

export const einvoicing = {
  eyebrow: "Egypt e-invoicing (ETA)",
  title: "Odoo e-invoicing for Egypt, connected to ETA",
  intro: egyptEInvoicing.intro,
  steps: egyptEInvoicing.steps
    .filter((step) => step.status === "legacy")
    .map(({ title, text }) => ({ title, text })),
  enterprise:
    egyptEInvoicing.requiresEnterprise.status === "legacy"
      ? egyptEInvoicing.requiresEnterprise.text
      : "",
  note: "Setup details vary by Odoo version and by taxpayer. We configure and test the connection as part of your implementation.",
};

export const midCta = {
  title: "Want to see Odoo Accounting set up for your business?",
  description:
    "Talk to our team about your entities, tax setup and reporting needs.",
};

export const integrations = {
  eyebrow: "Integrations",
  title: "Connected to the rest of your operation",
  description: "Accounting is more useful when it is connected.",
  items: integrationItems
    .filter((item) => item.status === "legacy")
    .map((item) => item.text.replace(/\s*\(link to [^)]*\)/, ""))
    .map((text) => ({
      text,
      // Where an item names another Odoo module, link to that page.
      link: /payroll/i.test(text)
        ? { key: "hr", text: "See HR & Payroll" }
        : /dashboards/i.test(text)
          ? { key: "dashboard-insights", text: "See Dashboard & Insights" }
          : undefined,
    })),
};

// Every claim below is a sentence already published in the Odoo vs Zoho vs
// QuickBooks guide (see docs/CLAIMS-REGISTER.md, "odoo-vs-zoho-vs-quickbooks").
// Sage is left out: the old page's Sage claims were never verified.
export const comparison = {
  eyebrow: "Comparison",
  title: "Odoo Accounting compared with QuickBooks Online and Zoho Books",
  description:
    "For businesses in Egypt, Saudi Arabia and the UAE, local e-invoicing and tax coverage usually decide the comparison before features do.",
  caption: "Odoo Accounting, QuickBooks Online and Zoho Books at a glance",
  columns: ["", "Odoo Accounting", "QuickBooks Online", "Zoho Books"],
  rows: [
    [
      "E-invoicing in Egypt, Saudi Arabia and the UAE",
      "Local configurations for all three markets",
      "Not built natively around these markets' e-invoicing systems",
      "Not built natively around these markets' e-invoicing systems",
    ],
    [
      "Country and tax coverage",
      "Local configurations for over 80 countries",
      "Not built natively around Egypt, Saudi Arabia or the UAE",
      "Native tax compliance in a limited set of countries",
    ],
    [
      "As your team grows",
      "Licensed per user; we recommend the right edition during discovery",
      "The entry-level Essentials plan caps at three users",
      "Per-user add-ons above the included seats",
    ],
    [
      "Beyond accounting",
      "Inventory, HR, CRM and manufacturing in the same ERP",
      "Accounting-focused",
      "Accounting-focused",
    ],
  ],
  note: "Based on our Odoo vs Zoho vs QuickBooks guide. Vendor plans and features change, so confirm current details with each vendor.",
  guide: {
    text: "Read the full Odoo vs Zoho vs QuickBooks comparison",
    href: "/insights/odoo-vs-zoho-vs-quickbooks",
    ariaLabel: "Read the full Odoo vs Zoho vs QuickBooks comparison",
  },
};

export const why = {
  eyebrow: "Why ETripleSoft",
  title: "Why finance teams choose ETripleSoft",
  cards: [
    {
      title: "Odoo Gold Partner",
      text: "We implement Odoo across Egypt, the UAE and Saudi Arabia as a certified Odoo Gold Partner.",
    },
    {
      title: "Connected to ETA and ZATCA",
      text: "We configure and test the Egypt ETA and Saudi ZATCA connections as part of the implementation.",
    },
    {
      title: "Checked by finance before go-live",
      text: "Your finance users verify migrated master data and opening balances before you go live.",
    },
  ],
};

export const implementation = {
  title: "How we implement this",
  description:
    "Accounting is delivered through our standard implementation process: discovery, design, configuration, data migration, testing, training, go-live and support.",
  link: "See the full implementation process",
};

export const faqs = faqItems
  .filter((item) => item.status === "legacy")
  .map((item) => [item.q, item.a] as const);

export const related = {
  title: "Related Odoo pages",
  siblingKeys: ["hr", "itsm-helpdesk", "dashboard-insights"],
  overview: { label: "Odoo ERP overview", href: "/odoo" },
};

export const closing = {
  title: "Ready to plan your Odoo accounting setup?",
  description:
    "Book a consultation and we will talk through your entities, processes and next steps.",
  secondary: { label: "Explore Solutions", href: "/services" },
};
