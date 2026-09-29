/**
 * Source material for /odoo/hr  (legacy post "odoo-hr-software", 2026-03-18, English)
 * status: "legacy" = reuse (edit wording, keep meaning) | "confirm" = do NOT render until delivery/legal confirms
 * PAYROLL RULE: no payroll/labor-law figure, formula, rate or entitlement may be rendered. See BLOCKED.
 */
export type Status = "legacy" | "confirm";
export interface Item { text: string; status: Status; note?: string }

export const hero = {
  h1: "Odoo HR & Payroll for Egypt, UAE & Saudi Arabia",
  intro: "Employees, attendance, leave, recruitment and payroll in one system, connected to accounting and operations.",
  // Old H1 said "Payroll, Attendance & Compliance". Drop "Compliance" from headline claims.
};

export const employees: Item[] = [
  { text: "Central employee database with profiles, contracts and status tracking", status: "legacy" },
  { text: "Contract renewal alerts", status: "legacy" },
  { text: "Org chart with departments and reporting lines", status: "legacy" },
  { text: "Skills records", status: "legacy" },
  { text: "Role-based access; Arabic/English interface", status: "legacy" },
];
export const attendance: Item[] = [
  { text: "Shift planning, flexible schedules and remote-work tracking", status: "legacy" },
  { text: "Overtime calculation and exception flagging for payroll", status: "legacy" },
  { text: "Mobile clock-in/out", status: "legacy" },
  { text: "GPS location validation", status: "confirm", note: "Confirm it works with the Odoo version and privacy expectations." },
  { text: "Biometric devices (fingerprint / face) syncing attendance into Odoo", status: "confirm",
    note: "Old site says 'ZKTeco, Suprema' via 'API or middleware connector'. Requires custom/middleware work. Confirm scope, supported models, and whether it is standard. Do not name brands until confirmed." },
];
export const leave: Item[] = [
  { text: "Self-service leave requests on mobile or web", status: "legacy" },
  { text: "Configurable leave types (annual, sick, unpaid, other)", status: "legacy" },
  { text: "Multi-level approvals per department and leave type", status: "legacy" },
  { text: "Automatic balance updates and calendar integration", status: "legacy" },
  // '21-day annual leave built in', 'sick leave rules' => BLOCKED (labor-law entitlements).
];
export const recruitment: Item[] = [
  { text: "Job postings and candidate pipeline", status: "legacy" },
  { text: "Interview scheduling, feedback and offers", status: "legacy" },
  { text: "Convert an accepted applicant to an employee record", status: "legacy" },
  { text: "Onboarding checklists (equipment, access, documents)", status: "legacy" },
  { text: "Referral tracking and sourcing channels", status: "legacy" },
];
export const payroll: Item[] = [
  { text: "Salary structures, allowances, deductions and overtime rules configured per company", status: "legacy" },
  { text: "Arabic and English payslips", status: "legacy", note: "Do not add 'compliance requirement' wording." },
  { text: "Payroll journal entries posted to Odoo Accounting", status: "legacy" },
  { text: "Payroll rules and localization set up during implementation for the countries you operate in", status: "legacy",
    note: "This is the only safe localization statement. Specific rules stay out until the delivery team supplies verified text." },
  { text: "Test payroll run before go-live; support through the first payroll cycle", status: "legacy" },
];
export const approvals: Item[] = [
  { text: "Approval workflows by department and leave type", status: "legacy" },
  { text: "Approval hierarchy following the org structure", status: "legacy", note: "Source: leave approvals; hierarchy from employee manager field." },
];
export const expenses: Item[] = [
  { text: "Employee expense capture and approval routing", status: "legacy",
    note: "Not in the HR post. Comes from the accounting post. Keep to one short block linking to /odoo/accounting; do not duplicate." },
];
export const documents: Item[] = [
  { text: "Contracts, ID and visa copies, and employee records centralized in one access-controlled place", status: "legacy" },
  { text: "Arabic/English bilingual documents", status: "legacy" },
];
export const reporting: Item[] = [
  { text: "HR dashboard: pending leave, upcoming payroll, attendance exceptions, open positions, contract expiries", status: "legacy" },
  { text: "Headcount, attendance and recruitment pipeline visibility for managers", status: "legacy" },
  { text: "Appraisals, KPIs and skills reporting", status: "legacy" },
  { text: "Link to /odoo/dashboard-insights for cross-module dashboards", status: "legacy" },
];
export const appraisals: Item[] = [
  { text: "Scheduled review cycles, KPIs, goals and competency assessments", status: "legacy" },
  { text: "360-degree feedback and training plans", status: "confirm", note: "Confirm 360 feedback is available in the delivered edition." },
];

/** Regional localization: high level only. No rates, formulas, entitlements, dates. */
export const regional = {
  intro: "Payroll and HR rules differ by country. We configure localization for each entity during implementation and confirm the rules with your team.",
  egypt: { text: "Egypt: payroll localization is configured during implementation, including social insurance and income tax setup as applicable.", status: "confirm" as Status,
    note: "Old site names social insurance, income tax and end-of-service. Wording 'as applicable' is a placeholder. Have the delivery team supply the approved sentence." },
  saudi: { text: "Saudi Arabia: GOSI contribution setup and WPS salary file export.", status: "confirm" as Status,
    note: "Old site says Odoo v17 includes GOSI, WPS and end-of-service for Saudi. Confirm current version coverage. No rates or timelines." },
  uae: { text: "UAE: the old HR page claims 'full GOSI and WPS automation' for UAE. GOSI is a Saudi (and Gulf social-insurance) concept, WPS applies in the UAE. Do NOT render anything for the UAE until the delivery team supplies verified text.", status: "confirm" as Status },
};

export const faq: { q: string; a: string; status: Status; note?: string }[] = [
  { q: "What is Odoo HR?", status: "legacy",
    a: "An integrated HR application inside Odoo ERP covering employees, attendance, leave, recruitment, appraisals and payroll, connected to accounting, projects and operations." },
  { q: "Can employees request leave from their phones?", status: "legacy",
    a: "Yes. Employees submit requests through the mobile app or web portal, and managers approve them through configurable workflows." },
  { q: "Does Odoo support Arabic payslips?", status: "legacy",
    a: "Yes. Payslips can be generated in Arabic and English from the same system. Templates are configured during implementation." },
  { q: "Can attendance devices connect to Odoo?", status: "legacy",
    a: "Attendance device integration is possible in many setups and is scoped during discovery, including which devices and what middleware is needed." },
  { q: "Does payroll post to accounting?", status: "legacy",
    a: "Yes. Payroll journal entries are posted to Odoo Accounting." },
  { q: "How is payroll set up for our country?", status: "legacy",
    a: "We configure salary structures and local payroll rules for each entity during implementation and confirm them with your HR and finance team. See our implementation process." },
  { q: "How long does implementation take, and what does it cost?", status: "legacy",
    a: "Both depend on scope: modules, number of entities and countries, data volume, devices and customization. We agree timeline and investment after discovery." },
];

export const BLOCKED: { claim: string; why: string }[] = [
  { claim: "'Egyptian social insurance 14% employee / 26% employer' (also in the FAQ)", why: "Payroll compliance claim; the figures differ from the rates I know for Egypt (employee 11%, employer 18.75% under Law 148 of 2019). Do not render any rate. Have legal/HR verify." },
  { claim: "End-of-service formula '(Wage + Allowances ÷ 30) × Number of Leave Days ÷ 12'", why: "Presented as the 'standard Egyptian formula' with no legal source; it reads like leave encashment, not an end-of-service calculation." },
  { claim: "'21-day annual leave built in', 'sick leave fully paid first 30 days'", why: "Labor-law entitlements; vary by seniority/age/contract. Not ours to state." },
  { claim: "'Egyptian income tax brackets applied automatically', 'no compliance risk', '100% payroll compliant'", why: "Compliance guarantees." },
  { claim: "'Payroll run becomes a 10-minute task', 'payroll in under 3 days', '80% less manual HR work'", why: "Unsourced metrics." },
  { claim: "Cairo logistics case study (340 employees, 6 branches) + quote", why: "Anonymous, unverifiable." },
  { claim: "ZenHR / SAP SuccessFactors comparison table and FAQ", why: "Competitor claims." },
  { claim: "'Implementation from EGP 60,000', '120,000 to 280,000', 'from 280,000'", why: "Pricing that conflicts with 'scoped individually' elsewhere. No prices." },
  { claim: "'Minimum 6 weeks', '10–14 weeks'", why: "Conflicts with other pages. No durations." },
  { claim: "'Fixed-price proposal', '45-minute demo'", why: "Operational promises." },
  { claim: "'Full GOSI and WPS automation' for UAE", why: "Inaccurate framing (see regional.uae)." },
  { claim: "'Odoo v17' as current version", why: "Confirm supported versions." },
  { claim: "Gold Partner claims", why: "Reuse the /odoo trust signal only." },
];
