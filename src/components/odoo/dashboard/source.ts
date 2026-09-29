/**
 * Source material for /odoo/dashboard-insights (legacy PAGE "odoo-dashboard-insights", 2026-04-18)
 * IMPORTANT: the old page describes TWO Etriplesoft-built apps sold as a "suite":
 *   (1) Odoo Dashboard & Insights (AI dashboards), (2) Odoo Customised Access Management.
 * Confirm ownership, licensing, supported versions and delivery model before presenting as products.
 * A related English blog post also exists: "odoo-kpi-dashboard-real-time-business-insights" (redirect target /insights/...).
 * status: "legacy" = reuse | "confirm" = do NOT render until confirmed
 */
export type Status = "legacy" | "confirm";
export interface Item { text: string; status: Status; note?: string }

export const hero = {
  h1: "Odoo Dashboard & Insights",
  intro: "Live dashboards across your Odoo modules, with access controls so each person sees only what they should.",
};

export const problems: { title: string; text: string }[] = [
  { title: "Reports take too long", text: "Numbers compiled in Excel are stale by the time leadership reads them." },
  { title: "Everyone sees everything", text: "A flat permission model exposes cost prices, contracts and bank data to people who do not need them." },
  { title: "Small changes are expensive", text: "Hiding one field or button for one group often needs a developer or a custom module." },
];

export const dashboard: Item[] = [
  { text: "Dashboards on top of the live Odoo database (sales, CRM, inventory, accounting, HR, project, manufacturing) and custom modules", status: "legacy" },
  { text: "Tiles and charts you can resize, re-type and filter; layout saved per user", status: "legacy" },
  { text: "Export charts as Excel, CSV, PDF or PNG", status: "legacy" },
  { text: "Export and import a dashboard between Odoo instances", status: "legacy" },
  { text: "Chat channel on each tile", status: "legacy" },
  { text: "Date filters and custom ranges", status: "legacy" },
  { text: "Multi-source charts and custom formulas", status: "legacy" },
  { text: "Upload Excel/CSV data to combine with Odoo data", status: "confirm", note: "'No ETL, no middleware' is a strong claim. Confirm." },
  { text: "Real-time refresh with custom intervals", status: "confirm" },
  { text: "Ready-made dashboards for Sales, CRM, Accounting, Inventory, POS", status: "confirm", note: "Confirm which ship in the delivered version." },
  { text: "Three access tiers on dashboards (Admin, Full-view, Chart-specific)", status: "legacy" },
  { text: "'17 chart types'", status: "confirm", note: "Verify the count before using it; render a generic 'a range of chart types' if unconfirmed." },
];

export const ai: Item[] = [
  { text: "AI-assisted dashboard creation from a prompt (e.g. 'top customers this quarter')", status: "confirm",
    note: "Which AI service? Is data sent externally? Old FAQ says only schema names are sent. That is a privacy claim: verify with engineering before stating." },
  { text: "AI-written summaries of a chart's trends and outliers", status: "confirm" },
];

export const accessManagement: Item[] = [
  { text: "Hide, restrict or make read-only menus, models, fields, buttons, tabs, filters and reports, per user or group", status: "legacy" },
  { text: "Field-level control: invisible, read-only or required per user", status: "legacy" },
  { text: "Conditional rules based on record values", status: "legacy" },
  { text: "Changes are non-destructive and reversible", status: "legacy" },
  { text: "Rule changes logged with user and timestamp", status: "legacy" },
  { text: "'9 layers of access control', '27+ access controls'", status: "confirm", note: "Counts unverified. Do not use numbers." },
  { text: "Access follows the employee manager hierarchy", status: "confirm" },
];

export const combined = "Installed together, dashboards respect the access rules: each person sees the right data on the same dashboard.";

export const arabic: Item[] = [
  { text: "Arabic and right-to-left layout for dashboard and access-management screens", status: "legacy",
    note: "Old copy also says 'charts flip'. Confirm before saying more." },
];

export const versions = {
  text: "Old site: Odoo 17, 18 and 19; Enterprise and Community; Online, Odoo.sh and on-premise.",
  status: "confirm" as Status,
  note: "Contradiction: the ITSM page says Enterprise only; this page says Enterprise and Community and 'no Enterprise subscription needed'. Confirm per app. Odoo Online typically does not allow custom modules; verify before claiming 'Online'.",
};

export const implementation = {
  text: "Delivery covers discovery, dashboard design, access-rule configuration, Arabic localization and training.",
  status: "legacy" as Status,
  // Old: '2 to 4 weeks', 'under a week'. Do not render.
};

export const faq: { q: string; a: string; status: Status; note?: string }[] = [
  { q: "Can we use the dashboards without the access management app, or the reverse?", status: "legacy",
    a: "Yes. They are independent, but together every dashboard follows your access rules." },
  { q: "Does it work in Arabic?", status: "legacy", a: "Yes. Both apps support Arabic and right-to-left layout." },
  { q: "Can we hide a field for one user and show it to another?", status: "legacy",
    a: "Yes. You create an access profile for the users or groups, choose what to hide or restrict, and save. It applies to forms, lists, filters and exports for those users only." },
  { q: "Can access rules be audited?", status: "legacy",
    a: "Changes to access profiles are logged with the user, timestamp and the rule changed." , note: "Do not add 'ISO, SOC 2' wording." },
  { q: "Which Odoo versions and editions are supported?", status: "confirm", a: "TODO: confirm versions and editions (see versions.note)." },
  { q: "Does the AI send our business data outside Odoo?", status: "confirm", a: "TODO: engineering to supply the verified answer." },
  { q: "How long does it take and what does it cost?", status: "legacy",
    a: "It depends on the number of users, modules in scope and the access rules you need. We scope both after discovery." },
];

export const BLOCKED: { claim: string; why: string }[] = [
  { claim: "'Save 80% of customisation time'", why: "Unsourced." },
  { claim: "'90% of data never informs a decision'", why: "Unsourced statistic." },
  { claim: "'2 to 4 weeks', 'under a week'", why: "No durations." },
  { claim: "'ideal for ISO, SOC 2 and regional data-protection audits'", why: "Compliance-fitness claim." },
  { claim: "'No ETL. No middleware. No consultants.'", why: "Overclaim; also undermines the service." },
  { claim: "'Etriplesoft handles the upgrade and re-certifies the suite as part of standard migration'", why: "Service promise; confirm." },
  { claim: "'Client voices' testimonials and 'measurable outcomes' figures", why: "Unattributed." },
  { claim: "'Enterprise-grade', 'enterprise BI', 'bleeding edge'", why: "Marketing fluff; keep tone consistent." },
  { claim: "'Officially maintained on Odoo 17/18/19'", why: "'Officially' suggests Odoo endorsement. Say 'maintained by us'." },
  { claim: "Gold Partner claims", why: "Reuse the /odoo trust signal only." },
];
