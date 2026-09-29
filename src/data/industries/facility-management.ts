import type { IndustryPageData } from "./types";

export const facilityManagement: IndustryPageData = {
  slug: "facility-management",
  name: "Facility Management",
  eyebrow: "Odoo for facility management",
  heroTitle: "Turn service requests into controlled work across every site",
  heroDescription:
    "Facility operations depend on assets, preventive plans, service requests, technicians, spare parts, SLAs and cost control moving together. ETripleSoft configures Odoo so those records support one traceable service workflow.",
  heroHighlights: [
    "Asset and maintenance context across sites",
    "Work-order dispatch with service visibility",
    "Spare-parts, supplier and cost records connected to the job",
  ],
  problemsIntro:
    "The legacy sources describe the operational gap clearly: a CMMS, helpdesk, finance system and technician communications may all tell different parts of the same story. That fragmentation makes preventive work, SLA control and cost review harder than they need to be.",
  problems: [
    { title: "Maintenance becomes reactive", description: "Preventive schedules are missed or managed outside the system, leaving teams to respond after an asset fails." },
    { title: "Requests lack consistent triage", description: "Calls, messages and emails do not reliably capture site, asset, priority, SLA, requester and required skill." },
    { title: "Paper work orders hide progress", description: "Dispatch, time, parts, evidence and completion approval cannot be followed while the work is happening." },
    { title: "Asset history is incomplete", description: "Documents, warranty details, readings, interventions and replacement decisions are separated across tools." },
    { title: "Multisite reporting is manual", description: "Comparing backlog, service levels, costs and recurring failures across contracts or buildings requires consolidation." },
    { title: "Job cost and finance disconnect", description: "Technician time, spare parts, supplier services and customer billing do not always reconcile to the same work record." },
  ],
  solutionIntro:
    "We align Helpdesk, Maintenance and Field Service around a governed asset and site model, then connect Inventory, Purchase, Planning and Accounting where the operating scope requires them.",
  solutions: [
    { title: "Consistent intake and SLA routing", description: "Helpdesk can capture service context, priority and responsibility before the request becomes planned or dispatched work." },
    { title: "Preventive and corrective maintenance", description: "Maintenance supports equipment records, maintenance requests and preventive scheduling with traceable history." },
    { title: "Technician execution", description: "Field Service and Planning support assignment, mobile work, time, worksheets, customer sign-off and follow-up." },
    { title: "Parts, purchasing and financial context", description: "Inventory, Purchase and Accounting can connect parts availability, supplier work and costs to the operational process." },
  ],
  modules: [
    { name: "Maintenance" }, { name: "Field Service" }, { name: "Helpdesk" },
    { name: "Planning" }, { name: "Timesheets" }, { name: "Inventory" },
    { name: "Purchase" }, { name: "Accounting" }, { name: "Project" },
    { name: "Documents" }, { name: "Sign" },
  ],
  workflowIntro:
    "A typical flow starts with a preventive trigger or service request and ends with verified completion, updated asset history and financial follow-through.",
  workflow: [
    { title: "Request or trigger", description: "Capture a user request or create scheduled work from the relevant asset, site and preventive plan." },
    { title: "Triage and plan", description: "Confirm priority, SLA, responsibility, required skills, parts and an appropriate service window." },
    { title: "Dispatch and execute", description: "Assign the technician, provide job context and record time, parts, findings, evidence and follow-up needs." },
    { title: "Review and close", description: "Verify the work, obtain the required sign-off, update the asset history and record any next action." },
    { title: "Cost and improve", description: "Connect supplier and customer documents where relevant, then review backlog, recurrence, service and cost patterns." },
  ],
  integrationsIntro:
    "Facility environments often contain specialist systems. Odoo can be integrated where an interface is reliable and the ownership of events, assets and readings is unambiguous.",
  integrations: [
    { title: "Building management and IoT", description: "Alerts or readings can create or enrich maintenance activity when the source platform exposes a stable integration path." },
    { title: "Email and WhatsApp", description: "Approved channels can support request intake and notifications while Odoo retains the governed service record." },
    { title: "Access and identity systems", description: "User, site or access context can be exchanged when it materially improves safe dispatch and service evidence." },
    { title: "Accounting and bank services", description: "Supplier invoices, customer billing, statements and payments can follow the agreed finance integration pattern." },
    { title: "Maps and routing", description: "Location and routing services can support field scheduling where provider terms and address quality allow it." },
    { title: "Customer portals", description: "Portal access can expose appropriate tickets, visits, documents and status without sharing internal operational data." },
  ],
  regionalIntro:
    "The legacy content targets facility operators in Egypt, Saudi Arabia and the UAE. Local setup is confirmed against contracts, legal entities, workforce practice and current tax requirements.",
  regionalConsiderations: [
    { title: "Local invoicing requirements", description: "Service invoices and credit documents follow the applicable localization, tax treatment and local e-invoicing process." },
    { title: "Arabic and RTL service journeys", description: "Arabic interfaces, customer communications and worksheets can be prepared for right-to-left use and reviewed by operational users." },
    { title: "Contract and SLA structure", description: "Response, attendance and resolution rules must reflect the signed contract and escalation model rather than a generic template." },
    { title: "Multisite and multi-company control", description: "Sites, contracts, operating entities, cost ownership and cross-company access need a defined hierarchy." },
    { title: "Mobile workforce conditions", description: "Connectivity, device policy, evidence requirements and supervisor approval affect the field-service design." },
    { title: "Hosting and client expectations", description: "Security roles, audit history, backup and data-hosting expectations are assessed for each operating context." },
  ],
  implementationIntro:
    "We prove the service lifecycle with representative assets, sites and job types before widening the rollout. The plan follows complexity and readiness, not a promised fixed duration.",
  implementation: [
    { title: "Discovery", description: "Map sites, assets, contracts, request channels, maintenance plans, dispatch, parts, SLAs, billing and reporting." },
    { title: "Solution design", description: "Define the asset hierarchy, work states, priorities, roles, mobile evidence, integrations and service measures." },
    { title: "Configuration", description: "Configure the selected Odoo apps, forms, automations, worksheets, permissions and agreed interfaces." },
    { title: "Data migration", description: "Clean and migrate approved sites, assets, preventive plans, spare parts and open work with sampling and reconciliation." },
    { title: "Training and go-live", description: "Train requesters, dispatchers, technicians, supervisors and administrators through realistic service scenarios." },
    { title: "Support and improvement", description: "Stabilize live operations and use backlog, recurrence and user feedback to govern the next improvements." },
  ],
  faqs: [
    { question: "Can Odoo work as a CMMS for facility management?", answer: "Odoo Maintenance, Field Service and Helpdesk can cover many CMMS-style needs, supported by Inventory, Purchase and Accounting. Fit depends on asset depth, preventive logic, mobile work, SLAs and reporting requirements." },
    { question: "Does Odoo include a full CAFM application?", answer: "Odoo has strong operational building blocks but does not turn every space-planning or specialist CAFM requirement into a standard app. We identify what can be configured and where a specialist system should remain or integrate." },
    { question: "How long does an FM implementation take?", answer: "It depends on asset volume and quality, number of sites and contracts, SLA complexity, mobile workflows, integrations and rollout strategy. Discovery establishes the realistic plan." },
    { question: "Can existing asset and maintenance history be migrated?", answer: "Yes, after assessing identifiers, duplicates, hierarchy and usable history. We prioritize data that supports current service and compliance decisions rather than moving every legacy record automatically." },
    { question: "How are technicians and dispatchers trained?", answer: "Training uses role-specific scenarios from request intake through dispatch, mobile execution, parts use, evidence and closure. Supervisors and administrators receive separate control and reporting training." },
    { question: "What support is available after launch?", answer: "The agreed support plan can cover stabilization, issues, user and administrator guidance, refresher training and prioritized improvements. Coverage and response expectations are documented before go-live." },
  ],
  cta: {
    title: "Trace one work order from request to verified closure",
    description: "Bring a representative site, asset, SLA and technician workflow. We will help identify where Odoo can remove the operational gaps.",
    button: "Discuss facility Odoo",
  },
  seo: {
    title: "Odoo Facility Management Software",
    description: "Connect assets, preventive maintenance, helpdesk requests, field service, spare parts and finance with Odoo for facility operations in Egypt and the GCC.",
  },
};

