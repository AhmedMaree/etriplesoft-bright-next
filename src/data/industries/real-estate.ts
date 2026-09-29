import type { IndustryPageData } from "./types";

export const realEstate: IndustryPageData = {
  slug: "real-estate",
  name: "Real Estate",
  eyebrow: "Odoo for real estate",
  heroTitle: "Connect property, customer, contract and financial records",
  heroDescription:
    "Real estate operations cross sales, leasing, collections, maintenance and finance. ETripleSoft shapes Odoo around those connected records so teams can follow a unit or property from first enquiry through contract, billing and ongoing service.",
  heroHighlights: [
    "A clearer view of units, customers and contract status",
    "Connected sales, leasing and collection workflows",
    "Maintenance requests linked to the relevant property context",
  ],
  problemsIntro:
    "The legacy page highlights a familiar pattern: CRM, lease schedules, invoices and maintenance requests are kept in different tools. Every handoff then depends on reconciliation instead of a shared record.",
  problems: [
    { title: "Property data is fragmented", description: "Availability, unit attributes, pricing, documents and customer activity can diverge across spreadsheets and specialist tools." },
    { title: "Renewals depend on reminders", description: "Lease milestones, notices, revisions and approvals are vulnerable when dates and responsibilities are maintained manually." },
    { title: "Sales and finance see different pipelines", description: "Reservations, contracts, instalments, invoices and collections need consistent status across commercial and accounting teams." },
    { title: "Maintenance lacks property context", description: "Requests are harder to prioritize when the unit, tenant, asset, SLA, technician and cost are not connected." },
    { title: "Portfolio reporting arrives late", description: "Management views often require manual consolidation across developments, buildings, branches or legal entities." },
    { title: "Off-plan delivery adds more handoffs", description: "Milestones, customer documents, payment plans, changes and handover activities create a long chain of dependencies." },
  ],
  solutionIntro:
    "We use Odoo’s CRM, Sales, Subscriptions, Accounting, Helpdesk and Field Service foundations, then define the property-specific data and contract controls the organization actually needs.",
  solutions: [
    { title: "Shared property and customer context", description: "A governed property or unit structure can connect opportunities, customers, documents, contracts and service history." },
    { title: "Structured commercial pipeline", description: "CRM stages, activities, quotations, approvals and Sign provide a traceable path from enquiry to agreed contract." },
    { title: "Scheduled billing and collections", description: "Accounting and Subscriptions can support recurring or milestone billing patterns where they fit the contract design." },
    { title: "Service after the transaction", description: "Helpdesk, Field Service and Maintenance can route tenant or owner requests into assigned, documented work." },
  ],
  modules: [
    { name: "CRM" }, { name: "Sales" }, { name: "Subscriptions" },
    { name: "Accounting" }, { name: "Documents" }, { name: "Sign" },
    { name: "Helpdesk" }, { name: "Field Service" }, { name: "Maintenance" },
    { name: "Website" },
  ],
  workflowIntro:
    "The exact route differs for sales, leasing and property management. A typical design keeps the property reference stable while customer, contract, billing and service states progress around it.",
  workflow: [
    { title: "Publish and qualify", description: "Maintain approved availability information, capture an enquiry and qualify requirements in CRM." },
    { title: "Offer and reserve", description: "Match the customer to a unit, prepare commercial terms and apply the agreed reservation and approval controls." },
    { title: "Contract and sign", description: "Generate controlled documents, collect required records and route the agreement for review and electronic signature." },
    { title: "Bill and collect", description: "Create the relevant invoice or schedule, record payments and give authorized teams a consistent collection status." },
    { title: "Handover and serve", description: "Complete handover activities and route later service or maintenance requests with the property history attached." },
  ],
  integrationsIntro:
    "Property portals and payment services vary by market and provider. They are typically integrated only after data ownership, API access and update rules are clear.",
  integrations: [
    { title: "Property portals", description: "Approved listing and availability data can be synchronized with external portals where usable APIs are available." },
    { title: "Payment gateways", description: "Reservation, instalment or tenant payments can be connected to suitable payment providers and reconciled in Accounting." },
    { title: "E-invoicing services", description: "Invoices can follow the applicable localization and local e-invoicing process for the legal entity." },
    { title: "Email and WhatsApp", description: "Enquiry follow-up, document requests and service notifications can use approved messaging channels with activity captured in Odoo." },
    { title: "Bank feeds", description: "Supported bank connections or statement imports can reduce manual collection reconciliation." },
    { title: "Access and building systems", description: "Handover, access or facility platforms can be integrated when there is a defined operational need and supported interface." },
  ],
  regionalIntro:
    "Real estate structures and contract practice vary across Egypt, Saudi Arabia and the UAE. Configuration is validated against the entity, property model and current professional advice.",
  regionalConsiderations: [
    { title: "Tax and invoicing", description: "Set taxes, fiscal positions and e-invoicing processes according to the entity and transaction type rather than applying one rule to every property flow." },
    { title: "Arabic and bilingual documents", description: "Arabic and RTL interfaces are available; bilingual offers, contracts, invoices and portal content require deliberate templates and review." },
    { title: "Multi-company portfolios", description: "Ownership, management and operating entities need clear record ownership, intercompany treatment and access controls." },
    { title: "Multi-currency transactions", description: "Currency, exchange-rate and reporting rules are agreed for cross-border owners, customers or operating entities." },
    { title: "Document and approval practice", description: "Reservation, identity, contract and handover documents follow the organization’s approved legal and operational process." },
    { title: "Hosting and privacy expectations", description: "Access, audit, backup and data-hosting expectations are assessed for customer, tenant and property records." },
  ],
  implementationIntro:
    "A useful real estate implementation begins with the target property and contract model, not a long feature list. The stages below are adapted to sales, leasing or property-management scope.",
  implementation: [
    { title: "Discovery", description: "Map property structures, commercial journeys, contract types, billing, collections, handover and service responsibilities." },
    { title: "Solution design", description: "Define records, statuses, approvals, security roles, document templates, integrations and reporting boundaries." },
    { title: "Configuration", description: "Configure standard Odoo apps and build only the justified property-specific fields, automations and controls." },
    { title: "Data migration", description: "Assess and migrate agreed properties, units, customers, contracts, balances and open service items with validation." },
    { title: "Training and go-live", description: "Test end-to-end scenarios by role, train teams on their actual tasks and execute a controlled cutover." },
    { title: "Support and improvement", description: "Stabilize daily use, support administrators and prioritize changes based on live process evidence." },
  ],
  faqs: [
    { question: "Is property management a standard Odoo app?", answer: "Odoo provides strong standard foundations across CRM, Sales, Subscriptions, Accounting, Helpdesk, Field Service, Documents and Sign. Property, unit and contract-specific behavior usually needs configuration and may require scoped extensions." },
    { question: "Can one system cover both property sales and leasing?", answer: "It can, provided the two operating models are mapped separately. Their stages, documents, billing patterns, approvals and reporting may share records without being forced into one identical workflow." },
    { question: "How long does a real estate implementation take?", answer: "The schedule depends on portfolio complexity, contract types, active records, migration quality, integrations, templates and user availability. Discovery produces the defensible plan." },
    { question: "How much customization should we expect?", answer: "We keep standard CRM, sales, accounting and service behavior wherever it fits. Property-specific extensions are considered only when the requirement is important, stable and cannot be handled clearly through configuration." },
    { question: "Can existing properties, contracts and balances be migrated?", answer: "Yes, after a source-data assessment. We define the migration cut, cleanse duplicates, test representative records and reconcile financial and contract states before go-live." },
    { question: "What training and post-launch support are included?", answer: "Training is role-based for sales, leasing, finance, service and administrators. Support coverage, response expectations and improvement work are defined in the agreed service plan." },
  ],
  cta: {
    title: "Start with one complete property journey",
    description: "Show us how an enquiry becomes a contract, an invoice and an ongoing service relationship. We will help identify a practical Odoo scope.",
    button: "Discuss real estate Odoo",
  },
  seo: {
    title: "Odoo Real Estate Software",
    description: "Connect property records, CRM, sales or leasing, contracts, billing, collections and maintenance with an Odoo solution for Egypt, Saudi Arabia and the UAE.",
  },
};

