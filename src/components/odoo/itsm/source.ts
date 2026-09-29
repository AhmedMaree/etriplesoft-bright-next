/**
 * Source material for /odoo/itsm-helpdesk (legacy post "odoo-itsm-helpdesk-module", 2026-04-18, English)
 * IMPORTANT: this is Etriplesoft's OWN custom-built module on Odoo Enterprise, not Odoo's standard Helpdesk app.
 * Ownership, licensing, supported versions and packaging must be confirmed before the page presents it as a product.
 * status: "legacy" = reuse | "confirm" = do NOT render until confirmed
 */
export type Status = "legacy" | "confirm";
export interface Item { text: string; status: Status; note?: string }

export const hero = {
  h1: "Odoo ITSM & Helpdesk",
  intro: "A ticketing, problem, change and asset workflow for IT teams, built on Odoo Enterprise and aligned with ITIL concepts.",
  // Old copy: 'leading', '#1 Odoo helpdesk module', 'ITIL compliance', 'full ITIL v4 practice set', 'ServiceNow discipline'. Drop all.
};

export const positioning: Item[] = [
  { text: "A custom module on Odoo Enterprise, separate from Odoo's standard Helpdesk app, with its own menus, stages and security groups", status: "legacy",
    note: "Confirm: is it sold as a product, delivered as a service, or both? Who owns the code? Which Odoo versions (old site: 17, 18, 19)?" },
  { text: "Replaces spreadsheets and disconnected tools with one database where tickets, problems, changes and assets are linked", status: "legacy" },
  { text: "Requires Odoo Enterprise", status: "legacy" },
];

export const lifecycle: { id: string; title: string; text: string; status: Status }[] = [
  { id: "intake", title: "Ticket intake", status: "legacy", text: "Requests and incidents raised by portal, email or direct entry, with auto-generated references, priority from an impact-by-urgency matrix, and an SLA matched automatically." },
  { id: "triage", title: "Assignment and resolution", status: "legacy", text: "Tickets routed to teams by manual, round-robin or balanced assignment; Kanban pipeline; On Hold pauses the SLA clock." },
  { id: "problem", title: "Problem management", status: "legacy", text: "Recurring incidents raised as problems with a root-cause pipeline." },
  { id: "kedb", title: "Known errors and knowledge base", status: "legacy", text: "A documented workaround creates a knowledge-base article linked to the problem." },
  { id: "change", title: "Change and CAB approval", status: "legacy", text: "Standard, normal and emergency changes. Higher-risk changes require CAB approval before implementation." },
  { id: "pir", title: "Post-implementation review", status: "legacy", text: "Outcome recorded (successful, partial, failed, rolled back) and linked to the originating problem and tickets." },
];

export const components: { name: string; points: string[]; status: Status }[] = [
  { name: "Dashboard", status: "legacy", points: ["Live KPIs (open, breached, unassigned)", "Kanban, list, pivot and graph views", "Drill-down from tiles"] },
  { name: "Tickets", status: "legacy", points: ["Incidents and service requests with separate references", "Priority computed from impact and urgency", "Links to problems, changes and assets"] },
  { name: "Problems & known errors", status: "legacy", points: ["Root-cause pipeline", "Workaround and permanent fix records", "Create a change from the fix"] },
  { name: "Changes & CAB", status: "legacy", points: ["Standard, normal, emergency types", "Risk-driven CAB requirement", "Implementation, rollback, test and communication plans"] },
  { name: "Assets / CMDB", status: "legacy", points: ["Configuration item types incl. hardware, VM, business service", "Parent/child and depends-on relationships", "Warranty status"] },
  { name: "SLA policies", status: "legacy", points: ["Separate response and resolution targets", "On track / at risk / breached status", "Escalation contacts on breach", "Business-hours calculation"] },
  { name: "Knowledge base", status: "legacy", points: ["Categories and visibility levels (draft, internal, portal)", "Voting"] },
  { name: "Reports", status: "legacy", points: ["SLA compliance, volume trends, category breakdown, team performance pivot"] },
];

export const agentFeatures: Item[] = [
  { text: "Customer self-service portal to raise and track tickets", status: "legacy" },
  { text: "Chatter and audit trail on every record", status: "legacy" },
  { text: "Customer satisfaction (CSAT) ratings", status: "legacy" },
  { text: "Saved filters and group-by options", status: "legacy" },
];

export const security: Item[] = [
  { text: "Three roles: Agent, Manager, CAB Member", status: "legacy" },
  { text: "Agent: work on records, read-only configuration. Manager: full access and configuration. CAB Member: approve changes only.", status: "legacy" },
];

export const slaDefaults: { name: string; response: string; resolution: string; status: Status }[] = [
  // Product defaults per old page. Render only as 'example defaults, configurable', after the owner confirms.
  { name: "Critical", response: "0.5h", resolution: "4h", status: "confirm" },
  { name: "High", response: "1h", resolution: "8h", status: "confirm" },
  { name: "Standard", response: "4h", resolution: "24h", status: "confirm" },
  { name: "Service requests", response: "8h", resolution: "72h", status: "confirm" },
];

export const implementation = {
  text: "Deployed in stages, typically starting with tickets, SLAs and knowledge base, then changes and CMDB. Steps: discovery, design, migrate and build, training, go-live and support.",
  status: "legacy" as Status,
  // No durations. Old: '4–10 weeks' (FAQ), 'six weeks' and 'eight weeks' (case study). Inconsistent.
};

export const regional = {
  text: "Arabic interface support.",
  status: "legacy" as Status,
  note: "Old copy says 'ETA billing integration', 'ZATCA-compliant billing', 'VAT 5% billing integration', 'Vision 2030 alignment'. A helpdesk has no billing function in the source. Do not render any of it.",
};

export const faq: { q: string; a: string; status: Status; note?: string }[] = [
  { q: "Is this Odoo's standard Helpdesk app?", status: "legacy",
    a: "No. It is a separate ITSM application on Odoo Enterprise with its own menus, stages and security groups. It can run alongside the standard Helpdesk app." },
  { q: "Do we need Odoo Enterprise?", status: "legacy", a: "Yes, it runs on Odoo Enterprise." },
  { q: "How does change approval work?", status: "legacy",
    a: "Changes flagged as higher risk, and emergency changes, need CAB approval before implementation can start. Approvals are recorded with who, when and why." },
  { q: "Does the SLA clock pause?", status: "legacy", a: "Yes. Moving a ticket to On Hold pauses the SLA clock, and the pause history is auditable." },
  { q: "What happens when a problem is marked a known error?", status: "legacy",
    a: "If a workaround is documented, a knowledge-base article is created and linked to the problem." },
  { q: "Can we migrate existing tickets and assets?", status: "legacy", a: "Yes. Existing tickets and asset inventory can be imported during the build stage." },
  { q: "How long does it take and what does it cost?", status: "legacy",
    a: "It depends on ticket volume, CMDB complexity, integrations and configuration. We scope both after discovery." },
];

export const BLOCKED: { claim: string; why: string }[] = [
  { claim: "GulfNet ICT case study (backlog to ITIL in 8 weeks / 6 weeks, 12-person team, 2,400+ tickets/quarter) and the named quote 'Karim El-Sherif'", why: "Unverified; internally inconsistent (8 vs 6 weeks)." },
  { claim: "Three testimonials incl. 'SLA compliance jumped from 68% to 94%'", why: "Unattributed, unverifiable." },
  { claim: "'Faster ticket triage', 'reduction in SLA breaches', 'KEDB reuse rate', 'unapproved changes in prod' metrics", why: "Unsourced." },
  { claim: "'Leading IT service management software Egypt', '#1 Odoo helpdesk module deployed'", why: "Unsupportable superlatives." },
  { claim: "'ITIL compliance', 'full ITIL v4 practice set', 'ITIL v4 aligned'", why: "ITIL is a framework, not a compliance standard; the trademark belongs to PeopleCert. Say 'aligned with ITIL concepts' at most." },
  { claim: "'ServiceNow pattern', 'ITIL discipline of ServiceNow', 'ServiceNow 3x3 matrix'", why: "Competitor brand comparisons." },
  { claim: "ETA / ZATCA / VAT 5% billing, Vision 2030 alignment", why: "No basis in a helpdesk module." },
  { claim: "Code-level details: UserError message, 'sla_paused', dependencies base/mail/portal/resource, 'no OCA, no Studio'", why: "Developer internals; not marketing copy." },
  { claim: "Demo data ('10 tickets, 4 problems...') as a selling point", why: "Production installs should not ship demo data. Confirm." },
  { claim: "'4–10 weeks' go-live; 'zero disruption'", why: "No durations or guarantees." },
  { claim: "'Fully hosted. Fully yours.'", why: "Unclear commercial meaning." },
  { claim: "Gold Partner claims", why: "Reuse the /odoo trust signal only." },
];
