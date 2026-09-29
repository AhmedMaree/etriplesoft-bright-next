/**
 * Source material for /odoo/accounting
 * Extracted from old-content.xml: post "odoo-for-accounting" (published 2026-04-06, English)
 * plus integration and localization mentions from the implementation post.
 *
 * status:
 *   "legacy"  = stated on the old site; reuse (edit wording, keep meaning); owner reconfirms before launch
 *   "confirm" = do NOT render until the delivery team confirms
 *
 * See BLOCKED at the bottom for old-site claims that must not be migrated.
 */

export type Status = "legacy" | "confirm";
export interface Item { text: string; status: Status; note?: string }

export const hero = {
  h1: "Odoo Accounting for Egypt, UAE & Saudi Arabia",
  intro:
    "One connected system for invoicing, expenses, bank reconciliation, tax compliance and financial reporting, configured to your chart of accounts and the jurisdictions you operate in.",
  // Old H1 said "ETA Compliant ERP". Keep the claim narrower: we connect Odoo to ETA (see egyptEInvoicing).
};

export const accounting: Item[] = [
  { text: "Chart of accounts and journal management", status: "legacy" },
  { text: "Automated journal entries for each transaction type", status: "legacy" },
  { text: "Multi-currency support", status: "legacy" },
  { text: "Full audit trail for financial postings", status: "legacy" },
  { text: "Finance connected to sales, purchasing, inventory and payroll in one system", status: "legacy" },
];

export const invoicing: Item[] = [
  { text: "Invoices created from sales orders and contracts, without re-entering data", status: "legacy" },
  { text: "Payment terms, discounts and penalty rules applied automatically", status: "legacy" },
  { text: "Branded PDF invoices", status: "legacy" },
  { text: "Automated payment reminders on configurable schedules", status: "legacy" },
  { text: "Online payment links / portal", status: "legacy", note: "Which payment providers are supported is unconfirmed." },
  { text: "Recurring invoices for subscription billing", status: "legacy" },
];

export const expenses: Item[] = [
  { text: "Expense capture on mobile with approval routing by policy and amount", status: "legacy" },
  { text: "Approved expenses post to the correct account automatically", status: "legacy" },
  { text: "Per-diem and mileage rules; budget monitoring per department", status: "legacy" },
  { text: "Receipt scanning (OCR)", status: "confirm",
    note: "Odoo's OCR/digitization is an add-on service in Odoo. Confirm availability, cost model and Arabic support." },
];

export const bankReconciliation: Item[] = [
  { text: "Automatic matching rules for bank transactions; bulk reconciliation for high-volume accounts", status: "legacy",
    note: "Old copy said 'AI-assisted'. Say 'automatic matching rules' unless the team confirms the AI feature." },
  { text: "Outstanding cheque and payment tracking", status: "legacy" },
  { text: "Statement import", status: "confirm",
    note: "Add only after confirming supported formats (e.g. CSV, OFX, CAMT.053) with the delivery team." },
  { text: "Live bank feeds", status: "confirm",
    note: "Old site says 'connect bank feeds directly'. Live feeds depend on the bank and provider in Egypt, UAE and Saudi Arabia. Confirm which banks, or drop." },
  { text: "Cash flow forecasting from live bank data", status: "confirm" },
];

export const reporting: Item[] = [
  { text: "Profit & loss, balance sheet and cash flow statements on demand, with drill-down to transactions", status: "legacy" },
  { text: "Ageing reports for receivables and payables", status: "legacy" },
  { text: "Budget vs actuals per cost centre", status: "legacy" },
  { text: "Tax liability and VAT summary reporting", status: "legacy" },
  { text: "Executive dashboards for finance leaders (link to /odoo/dashboard-insights)", status: "legacy" },
];

export const multiCompany: Item[] = [
  { text: "Multi-company and multi-currency support in one system", status: "legacy" },
  { text: "Multiple entities and jurisdictions configured in a single Odoo instance (e.g. Egypt and Saudi Arabia)", status: "confirm",
    note: "Old FAQ claims dual-jurisdiction setups (ETA + ZATCA) in one instance. Confirm before rendering." },
  { text: "Consolidated reporting across companies", status: "confirm",
    note: "Old comparison table said 'native consolidation'. Not stated in the body copy. Confirm scope and edition." },
];

export const taxLocalization = {
  intro: "Localization is configured during implementation for each country you operate in.",
  items: [
    { text: "Chart of accounts, tax rules and approval workflows mapped to each entity and jurisdiction during discovery and design", status: "legacy" },
    { text: "Full Arabic interface support", status: "legacy", note: "Confirm RTL print layouts (invoices/reports) are covered." },
  ] as Item[],
};

/** Only what the old site states. No dates, deadlines, thresholds or penalties. */
export const egyptEInvoicing = {
  intro:
    "Egypt's tax authority (ETA) requires invoices to be submitted electronically through its API. Odoo can be connected to the ETA portal so that confirmed invoices are submitted through the integration.",
  steps: [
    { title: "Register Odoo as your ERP on the ETA portal", text: "Done in the taxpayer's ETA portal profile to obtain API credentials.", status: "legacy" },
    { title: "Configure the connection in Odoo", text: "Enter the ETA client credentials in the accounting settings.", status: "legacy" },
    { title: "Set branches and activity codes", text: "One journal per company branch; ETA activity code and branch ID; correct tax IDs and addresses on customer records.", status: "legacy" },
    { title: "Issue invoices", text: "After setup, confirmed invoices are validated, signed and sent to ETA by the integration.", status: "legacy",
      note: "Old copy: 'zero manual steps' and 'no manual intervention'. Do not repeat. Say 'after setup'." },
  ] as { title: string; text: string; status: Status; note?: string }[],
  // Menu paths and portal field names change between Odoo versions and portal releases: keep the steps high level.
  requiresEnterprise: { text: "ETA e-invoicing is part of Odoo Enterprise, not Community.", status: "legacy" as Status, note: "Confirm per Odoo version." },
};

/** Saudi Arabia: explicitly supported by source, high level only. */
export const saudi = {
  text: "For Saudi Arabia, Odoo's localization supports ZATCA e-invoicing (Fatoora), including QR codes, cryptographic signing and submission to the ZATCA platform, configured and tested as part of a Saudi implementation.",
  status: "legacy" as Status,
  note: "Old copy says 'ZATCA Phase 2, B2B and B2C' and 'built-in in v17'. Do not state phases, waves, dates or thresholds. Confirm current version coverage.",
};

/** UAE: source supports VAT only. Do NOT claim UAE e-invoicing. */
export const uae = {
  text: "For the UAE, Odoo supports VAT setup and VAT return reporting.",
  status: "legacy" as Status,
  note: "Old copy: 'UAE VAT (5%)' and 'VAT return generation and submission support'. Say 'VAT setup and reporting'; drop the rate, and 'submission' unless confirmed.",
};

/** Integrations. The accounting post names none; these come from the implementation post + module descriptions. */
export const integrations: Item[] = [
  { text: "Sales, purchasing, inventory and payroll in the same Odoo database", status: "legacy" },
  { text: "Government portals: ETA (Egypt), ZATCA (Saudi Arabia)", status: "legacy" },
  { text: "Payment gateways", status: "legacy", note: "Generic mention in the implementation post. No provider named. Do not name any." },
  { text: "BI and dashboards (link to /odoo/dashboard-insights)", status: "legacy" },
  { text: "Migration from legacy ERP, spreadsheets or accounting software (opening balances, master data, history where required)", status: "legacy" },
  { text: "Named banks or bank feed providers", status: "confirm" },
  { text: "Named accounting/payroll systems (e.g. WPS, GOSI, Qiwa)", status: "confirm", note: "Named on the implementation post for payroll/government; confirm relevance to accounting." },
];

export const faq: { q: string; a: string; status: Status; note?: string }[] = [
  { q: "What is Odoo Accounting?",
    a: "A fully integrated accounting application inside Odoo ERP covering invoicing, expenses, bank reconciliation, tax and reporting, connected to sales, purchasing, inventory and payroll.", status: "legacy" },
  { q: "What is the difference between Odoo Accounting and Odoo Invoicing?",
    a: "Odoo Invoicing is a lighter application for customer billing and payment tracking. Odoo Accounting adds the full general ledger, journal entries, bank reconciliation, multi-currency and tax reporting. Businesses with several bank accounts or tax compliance needs usually need Accounting.", status: "legacy" },
  { q: "Is Odoo free for accounting?",
    a: "Odoo Community is free and includes basic accounting. Odoo Enterprise adds features such as ETA e-invoicing and ZATCA e-invoicing, and is billed per user. We recommend the right edition during discovery.", status: "legacy", note: "Confirm edition split per version. No prices." },
  { q: "How does Odoo handle ETA e-invoicing in Egypt?",
    a: "Odoo connects to the ETA portal through its API. During implementation we configure the credentials, branch and activity codes; after that, confirmed invoices are validated, signed and submitted through the integration.", status: "legacy" },
  { q: "Does Odoo support e-invoicing in Saudi Arabia?",
    a: "Yes. Odoo's Saudi localization supports ZATCA e-invoicing, and we configure and test it as part of a Saudi implementation. Regulatory requirements change, so we confirm the current scope with you at the start.", status: "legacy" },
  { q: "Can you migrate data from our current accounting software?",
    a: "Yes. We extract, cleanse and load master data and opening balances, and historical records where required, and finance users verify the data before go-live. See our implementation process.", status: "legacy" },
  { q: "How long does an accounting implementation take?",
    a: "It depends on scope: modules, number of entities and jurisdictions, data volume and quality, integrations and customization. We agree the timeline with you after discovery.", status: "legacy",
    note: "Deliberately qualitative. Old site has conflicting figures." },
  { q: "How much does it cost?",
    a: "Cost depends on the same factors, plus Odoo licensing for your chosen edition. We scope each project individually after discovery.", status: "legacy", note: "Deliberately non-committal. Old site contradicts itself on 'fixed price'." },
];

export const BLOCKED: { claim: string; why: string }[] = [
  { claim: "Horizon Trading Group case study (18 days to 4 days, 340+ invoices, CFO quote)", why: "No evidence it is a real client. Also says 6-week project. Use only with real, permissioned data." },
  { claim: "'80% less manual entry', '3x faster invoice processing', '100% tax compliant', 'reduce monthly close by up to 80%'", why: "Unsourced metrics. '100% compliant' is a legal risk." },
  { claim: "'Go live in 6+ weeks', 'minimum 6 weeks', '10–16 weeks' multi-company", why: "Conflicts with 4–16 weeks (/odoo-erp-egypt) and the 5–13 weeks implied by the implementation page." },
  { claim: "'Fixed-price proposal within 48 hours', '45-minute discovery call'", why: "Operational promises; contradicts 'we don't offer fixed pricing tiers' in the same FAQ." },
  { claim: "QuickBooks vs Sage comparison table and 'Can Odoo replace QuickBooks or Sage'", why: "Unverifiable competitor claims ('English only', 'not supported')." },
  { claim: "'Zero manual steps', 'no manual intervention', 'no third-party tax tools required', 'handles all three automatically'", why: "Overpromises; compliance depends on setup and current regulation." },
  { claim: "'Odoo v17' as the current version", why: "Dashboard page says 17, 18 and 19. Confirm supported versions." },
  { claim: "'ETA Compliant ERP' in the H1", why: "Compliance is a regulatory status. Say we connect Odoo to ETA." },
  { claim: "Odoo Gold Partner claims", why: "Reuse the trust signal from /odoo exactly; add none." },
];
