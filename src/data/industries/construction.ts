import type { IndustryPageData } from "./types";

export const construction: IndustryPageData = {
  slug: "construction",
  name: "Construction",
  eyebrow: "Odoo for construction",
  heroTitle: "Keep projects, procurement and site costs in one operating flow",
  heroDescription:
    "Construction teams need a consistent path from tender and budget to purchasing, site execution, subcontractor work and billing. ETripleSoft configures Odoo around those handoffs so commercial, project and finance teams work from the same records.",
  heroHighlights: [
    "Project and cost visibility across active sites",
    "Controlled material requests and purchasing",
    "Traceable subcontractor and progress-billing workflows",
  ],
  problemsIntro:
    "The legacy source repeatedly identifies fragmented spreadsheets, messages and manual documents as the point where project control breaks down. The issue is less about one missing report and more about disconnected decisions across the project lifecycle.",
  problems: [
    { title: "Budgets drift away from actuals", description: "Committed purchases, site consumption, timesheets and supplier invoices are often reviewed in separate files, delaying a reliable view of project cost." },
    { title: "Material requests lose context", description: "Site requests can arrive through calls or messages without a consistent link to the project, budget, approval or purchase order." },
    { title: "Subcontractor work is hard to reconcile", description: "Work orders, measured progress, deductions, certificates and payments need a traceable relationship instead of parallel paperwork." },
    { title: "Project records are scattered", description: "Drawings, contracts, approvals, inspection records and correspondence can sit across email, shared folders and individual devices." },
    { title: "Milestones and billing disconnect", description: "Delivery progress, client approvals and progress invoices do not always move together, creating avoidable follow-up between teams." },
    { title: "Multi-company reporting becomes manual", description: "Groups operating across entities or countries need consistent account structures, currencies and consolidated management views." },
  ],
  solutionIntro:
    "We map the commercial and operational lifecycle first, then configure standard Odoo apps and carefully scoped extensions around approvals, project coding and construction documents.",
  solutions: [
    { title: "Project-centred records", description: "Projects, tasks, analytic accounts, timesheets, documents and relevant costs share a common project reference." },
    { title: "Procurement with approval context", description: "Material demand can move from a controlled request into supplier comparison, purchase approval, receipt and invoice matching." },
    { title: "Cost and billing traceability", description: "Accounting and project records give commercial teams a clearer route from budget categories and commitments to billing and collection." },
    { title: "Structured site coordination", description: "Planning, Field Service, Documents and Sign can support assignments, inspections, handovers and auditable approvals where they fit the agreed design." },
  ],
  modules: [
    { name: "Project" }, { name: "Accounting" }, { name: "Purchase" },
    { name: "Inventory" }, { name: "Sales" }, { name: "Documents" },
    { name: "Sign" }, { name: "Planning" }, { name: "Timesheets" },
    { name: "Field Service" }, { name: "Maintenance" },
  ],
  workflowIntro:
    "A typical configuration connects commercial intent to site execution. Exact approval levels, BOQ handling and certificate formats are defined during discovery rather than assumed.",
  workflow: [
    { title: "Tender and budget", description: "Create the opportunity or project, establish the agreed cost structure and attach the relevant tender and contract documents." },
    { title: "Plan and request", description: "Plan activities and resources; site teams raise material or service needs against the correct project context." },
    { title: "Approve and procure", description: "Route requests through the agreed authority levels, issue purchase orders and record receipts or service confirmation." },
    { title: "Execute and certify", description: "Track tasks, labour, inspections and subcontractor progress with supporting documents and approvals." },
    { title: "Bill and review", description: "Prepare customer billing from approved progress, reconcile supplier costs and review project financials in Accounting." },
  ],
  integrationsIntro:
    "Odoo can be integrated with surrounding services when the business case and local requirements justify it. Integration scope, ownership and failure handling are agreed before build.",
  integrations: [
    { title: "E-invoicing services", description: "Accounting documents can be connected to the applicable local e-invoicing process through a supported localization or integration." },
    { title: "Banks and payment services", description: "Bank feeds, statement imports and payment services can support reconciliation where provider access is available." },
    { title: "Biometric and attendance systems", description: "Site attendance devices can be integrated when reliable APIs or controlled imports are available." },
    { title: "Email and WhatsApp", description: "Notifications and document exchanges can be connected to approved messaging channels without making informal chat the system of record." },
    { title: "Document storage", description: "Existing document repositories can be linked or migrated according to access, retention and versioning requirements." },
    { title: "Specialist estimating tools", description: "Where estimating or scheduling tools remain in use, agreed data can be exchanged through APIs or governed imports." },
  ],
  regionalIntro:
    "The source is focused on Egypt, Saudi Arabia and the UAE. We keep regulatory language at category level until the legal entity, transaction type and current localization are confirmed.",
  regionalConsiderations: [
    { title: "Tax and e-invoicing", description: "Configure the relevant localization, VAT treatment and local e-invoicing requirements for each operating entity." },
    { title: "Arabic and RTL", description: "Odoo supports Arabic and right-to-left use; bilingual documents and user-facing labels still need review in the implemented workflow." },
    { title: "Multi-company and currency", description: "Separate entities, charts of accounts, intercompany flows and currencies require an agreed governance model." },
    { title: "Retention and contractual documents", description: "Progress certificates, retentions, guarantees and contract variations should reflect the organization’s approved commercial process." },
    { title: "Hosting expectations", description: "Hosting, backup, access control and data-location expectations are evaluated against operational and client requirements." },
    { title: "Local payment practice", description: "Payment terms, bank instruments and approval evidence are configured around the organization’s actual controls." },
  ],
  implementationIntro:
    "The method is staged, but not tied to an invented duration. Scope, data condition, integrations, customization and team availability determine the delivery plan.",
  implementation: [
    { title: "Discovery", description: "Map tender, project, procurement, site, subcontractor, billing and reporting workflows with accountable process owners." },
    { title: "Solution design", description: "Confirm standard-app coverage, required configuration, justified extensions, roles, approvals and reporting." },
    { title: "Configuration", description: "Build the agreed project structure, master data, documents, permissions and integrations in controlled environments." },
    { title: "Data migration", description: "Clean and migrate approved masters, opening balances and active-project data with reconciliation checks." },
    { title: "Training and go-live", description: "Train by role, complete scenario-based acceptance testing and move teams through a governed cutover." },
    { title: "Support and improvement", description: "Stabilize the live system, resolve agreed issues and prioritize improvements using real operational feedback." },
  ],
  faqs: [
    { question: "Can Odoo manage BOQs and project cost codes?", answer: "Odoo can provide the project, analytic accounting, purchasing and billing foundation. BOQ structures, cost codes and certificate rules often require configuration or a scoped extension, which we define during discovery." },
    { question: "How long does a construction implementation take?", answer: "There is no responsible fixed answer before discovery. The plan depends on active projects, companies, approval depth, data quality, integrations, reports and the amount of justified customization." },
    { question: "Should we customize Odoo or use standard apps?", answer: "We start with standard Odoo behavior and adjust the operating process where practical. Custom work is reserved for requirements that are important, stable and not adequately covered by configuration." },
    { question: "Can active project data be migrated?", answer: "Yes, subject to a data assessment. We agree what must move, cleanse source records, test migration and reconcile balances and active commitments before cutover." },
    { question: "How are site teams trained?", answer: "Training is organized by role and real scenario: requesting material, receiving goods, updating tasks, recording time, attaching evidence or approving work. The format depends on locations and access needs." },
    { question: "What support is available after go-live?", answer: "Support scope and response expectations are agreed in the service plan. It can include stabilization, issue handling, administration guidance, refresher training and a governed improvement backlog." },
  ],
  cta: {
    title: "Map your construction workflow before choosing modules",
    description: "Bring one representative project, its approval path and the reports your teams rely on. We will help you frame a practical Odoo scope.",
    button: "Discuss construction Odoo",
  },
  seo: {
    title: "Odoo for Construction Companies",
    description: "Connect construction projects, procurement, materials, subcontractor workflows, billing and accounting with an Odoo implementation shaped for Egypt and the GCC.",
  },
};

