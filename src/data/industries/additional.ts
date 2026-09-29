import { industryHubItems } from "./hub";
import type { IndustryPageData, IndustrySlug } from "./types";

type AdditionalSlug = Extract<IndustrySlug, "retail" | "healthcare" | "logistics">;

const implementation = [
  {
    title: "Map the operating flow",
    description: "Agree on owners, source records, approvals, exceptions and reporting needs before choosing apps.",
  },
  {
    title: "Configure the agreed scope",
    description: "Set up standard Odoo apps around the documented workflow and identify any integration requirements.",
  },
  {
    title: "Validate with real scenarios",
    description: "Walk through day-to-day work and edge cases with the people who will use the system.",
  },
  {
    title: "Launch and review",
    description: "Prepare users, move approved records, support go-live and review the agreed measures after launch.",
  },
];

const profiles: Record<AdditionalSlug, Omit<IndustryPageData, "slug" | "name" | "heroHighlights" | "modules">> = {
  retail: {
    eyebrow: "Odoo for retail operations",
    heroTitle: "Connect retail sales, stock and replenishment",
    heroDescription: "Give store and central teams a shared view of products, prices, sales and stock movements across the channels included in your scope.",
    problemsIntro: "Retail operations depend on consistent product, price and stock records across branches and channels. The right Odoo scope starts with how each sale changes stock, customer activity and financial records.",
    problems: [
      { title: "Stock visibility differs by location", description: "Store, warehouse and online teams can act on different availability when stock movements are entered late or tracked separately." },
      { title: "Product and price changes are hard to coordinate", description: "Catalogues, variants and approved pricing need clear ownership when the same products are sold through multiple branches or channels." },
      { title: "Returns and settlement need reconciliation", description: "Refunds, payment settlement, stock adjustments and accounting entries should be traceable to the original sale." },
    ],
    solutionIntro: "Select the sales, inventory and accounting apps that support the agreed store and channel model. Keep exceptions visible so teams can resolve differences before close.",
    solutions: [
      { title: "Branch sales and stock", description: "Use Point of Sale and Inventory to record sales and movements against the locations and products in scope." },
      { title: "Purchasing and replenishment", description: "Set reorder rules and purchasing approvals around agreed stock policies and supplier lead times." },
      { title: "Customer and online channels", description: "Connect CRM, loyalty or e-commerce workflows where the required customer and product records are defined." },
    ],
    workflowIntro: "A practical retail flow connects product setup and stock readiness to sale, returns, replenishment and financial reconciliation.",
    workflow: [
      { title: "Prepare the catalogue", description: "Agree product, variant, barcode, price-list and branch records." },
      { title: "Record the sale", description: "Capture the transaction, payment method, customer context and resulting stock movement." },
      { title: "Resolve stock exceptions", description: "Review transfers, returns and replenishment actions with named ownership." },
      { title: "Reconcile and review", description: "Match settlements and accounting entries, then review branch and channel performance." },
    ],
    integrationsIntro: "External sales and payment systems should exchange only the records needed for the agreed retail workflow.",
    integrations: [
      { title: "Payment services", description: "Confirm payment terminal and settlement requirements before selecting or configuring a connector." },
      { title: "E-commerce channels", description: "Define which system owns products, prices, availability, orders and customer records." },
      { title: "Finance and reporting", description: "Align settlement references, tax treatment and reporting dimensions with the finance team." },
    ],
    regionalIntro: "Regional setup depends on the entities, currencies, tax requirements and channels included in the rollout.",
    regionalConsiderations: [
      { title: "Entity and branch model", description: "Confirm how stores, warehouses and legal entities should be separated and reported." },
      { title: "Tax and payment review", description: "Validate applicable tax configuration and settlement flows with the responsible finance advisors." },
      { title: "Local teams and access", description: "Set roles, languages and approval paths around each operating team." },
    ],
    implementationIntro: "Start with the store and channel scenarios that create the most reconciliation work. Confirm the record owners before configuring the apps.",
    implementation,
    faqs: [
      { question: "Can Odoo support several retail branches?", answer: "Branch and warehouse configuration can support the agreed operating model. The project should first define locations, stock ownership, access and reporting needs." },
      { question: "Can Odoo connect an online shop to store operations?", answer: "It can support connected commerce workflows. The available integration and system of record for products, prices, orders and customers must be confirmed during discovery." },
      { question: "How are payments and refunds handled?", answer: "The flow depends on the payment provider and settlement process. We map payments, refunds and reconciliation requirements before agreeing the implementation scope." },
    ],
    cta: { title: "Plan a connected retail workflow", description: "Bring your branch, channel and stock scenarios. We will map the records and decisions that belong in the first scope.", button: "Discuss retail operations" },
    seo: { title: "Odoo for Retail in Egypt, UAE & Saudi Arabia", description: "Connect retail point of sale, inventory, purchasing and accounting workflows with an Odoo implementation shaped around your branches and channels." },
  },
  healthcare: {
    eyebrow: "Odoo for healthcare operations",
    heroTitle: "Connect healthcare administration around clinical systems",
    heroDescription: "Coordinate procurement, medical-supply inventory, finance and workforce processes while keeping specialist clinical records in their appropriate system.",
    problemsIntro: "Healthcare organizations often need a dependable operational layer around existing clinical software. Start by defining which teams and records belong in ERP and which remain with specialist clinical systems.",
    problems: [
      { title: "Supply and purchasing records are separated", description: "Teams need clearer visibility into medical supplies, supplier commitments, receipts and the costs assigned to each facility." },
      { title: "Administrative handoffs lack ownership", description: "Requests across finance, people, facilities and procurement can lose context when they move through email and spreadsheets." },
      { title: "Clinical and business systems have different roles", description: "Integrations need an explicit boundary so operational workflows do not duplicate or replace the authoritative clinical record." },
    ],
    solutionIntro: "Use Odoo for agreed administrative and operational workflows. Define data boundaries, access and integration responsibilities before connecting a clinical platform.",
    solutions: [
      { title: "Supply and purchasing control", description: "Track approved suppliers, purchase requests, receipts and stock movements for the locations in scope." },
      { title: "Finance and workforce workflows", description: "Coordinate accounting, employee administration and planning with clear approval and access roles." },
      { title: "Service and facility operations", description: "Manage maintenance or internal requests where those processes are part of the organization’s agreed ERP scope." },
    ],
    workflowIntro: "Keep clinical care records in the system selected by the organization, and connect only the administrative handoffs that have a clear owner and purpose.",
    workflow: [
      { title: "Set data boundaries", description: "Name the clinical and operational systems of record and document what information may cross between them." },
      { title: "Coordinate requests", description: "Route approved procurement, supply, finance and facility workflows to responsible teams." },
      { title: "Track completion", description: "Keep approvals, receipts, service work and financial references traceable." },
      { title: "Review access and reporting", description: "Check that roles, reports and integrations follow the organization’s governance requirements." },
    ],
    integrationsIntro: "Healthcare integrations should be scoped around data minimization, security review and a clear system of record.",
    integrations: [
      { title: "Clinical platforms", description: "Assess available interfaces and approvals before connecting any clinical system; avoid duplicating its authoritative records." },
      { title: "Suppliers and inventory", description: "Define product, purchase, receipt and replenishment references for the medical supplies in scope." },
      { title: "Finance and identity", description: "Align accounting references and user access with internal governance and security review." },
    ],
    regionalIntro: "Data handling, tax configuration and hosting choices need review against each entity’s requirements and the organization’s policies.",
    regionalConsiderations: [
      { title: "Data governance", description: "Have the organization’s privacy, security and compliance owners approve the data boundary and access model." },
      { title: "Entity and finance setup", description: "Confirm legal entities, currencies, reporting needs and applicable tax configuration with local finance advisors." },
      { title: "Clinical system remains authoritative", description: "Document whether integrations exchange limited references, status updates or other approved administrative data." },
    ],
    implementationIntro: "A safe scope begins with operational workflows and governance. Clinical data, access and integrations need explicit review before configuration.",
    implementation,
    faqs: [
      { question: "Does Odoo replace an electronic medical record system?", answer: "This implementation scope focuses on administrative and operational workflows. A specialist clinical system should remain authoritative unless the organization separately approves another approach." },
      { question: "Which healthcare workflows can be considered?", answer: "Procurement, supplies, accounting, workforce and facility operations may be assessed. The organization’s requirements and existing systems determine what belongs in scope." },
      { question: "Can Odoo connect to clinical software?", answer: "Potential integrations depend on available interfaces, governance approvals and the information that is permitted to move. Each connection needs a security and data review." },
    ],
    cta: { title: "Map your healthcare operating workflows", description: "Define the operational handoffs around your clinical systems, with data boundaries agreed before integration work begins.", button: "Discuss healthcare operations" },
    seo: { title: "Odoo for Healthcare in Egypt, UAE & Saudi Arabia", description: "Coordinate healthcare procurement, supplies, finance and facilities workflows around the clinical systems your organization already relies on." },
  },
  logistics: {
    eyebrow: "Odoo for logistics operations",
    heroTitle: "Connect warehouse, delivery and financial workflows",
    heroDescription: "Give warehouse, dispatch and finance teams a traceable view from order and stock allocation through delivery exceptions and cost review.",
    problemsIntro: "Logistics work crosses orders, locations, vehicles, delivery events and financial records. Shared references help teams resolve exceptions before they become reconciliation work.",
    problems: [
      { title: "Warehouse and order records diverge", description: "Late or inconsistent movements make it difficult to confirm availability, picking status and commitments to customers." },
      { title: "Delivery exceptions are hard to trace", description: "Dispatch, proof of delivery, returns and exception handling often span calls and separate operational tools." },
      { title: "Costs arrive after operational close", description: "Freight, vehicle and service costs can lose their link to the original order, route or delivery when records are disconnected." },
    ],
    solutionIntro: "Connect the agreed order, inventory, barcode, fleet and accounting flows. Keep carrier and vehicle systems in scope only when their ownership and interfaces are clear.",
    solutions: [
      { title: "Warehouse and barcode operations", description: "Structure locations, picking steps and stock movements around the teams and controls in scope." },
      { title: "Dispatch and fleet context", description: "Coordinate vehicle, planning and delivery references where those workflows belong in the agreed design." },
      { title: "Cost and finance follow-through", description: "Link invoices, purchases and operating costs to the records used for delivery and financial review." },
    ],
    workflowIntro: "A connected logistics path makes order status, stock movements, dispatch and exceptions visible from a shared set of references.",
    workflow: [
      { title: "Allocate the order", description: "Confirm availability, location, delivery commitment and any required approval." },
      { title: "Pick and dispatch", description: "Record warehouse execution, transfer status and dispatch details against the order." },
      { title: "Confirm delivery or exception", description: "Capture the agreed delivery result and route any delay, return or short shipment for review." },
      { title: "Reconcile operating costs", description: "Connect supplier, fleet and delivery costs to the appropriate order and finance records." },
    ],
    integrationsIntro: "Carrier, fleet and customer systems should exchange agreed order and status references without creating competing records.",
    integrations: [
      { title: "Carrier and tracking services", description: "Confirm which delivery events can be exchanged and which system owns customer-facing status." },
      { title: "Warehouse equipment", description: "Review barcode devices, label formats and other warehouse tools against the receiving and picking workflow." },
      { title: "Finance and customer systems", description: "Align invoice, cost and delivery references with the records used by sales and accounting teams." },
    ],
    regionalIntro: "The rollout should account for the locations, legal entities, carriers and financial requirements involved in each operating market.",
    regionalConsiderations: [
      { title: "Warehouse and entity structure", description: "Confirm which locations and companies own stock, transfers and operating costs." },
      { title: "Carrier and border events", description: "Map the status and handoff references available from each carrier or cross-border partner." },
      { title: "Finance and tax review", description: "Validate currency, invoicing and applicable tax configuration with the relevant finance advisors." },
    ],
    implementationIntro: "Prioritize the order and delivery scenarios where teams currently lose status or cost context. Validate the design with warehouse and dispatch users.",
    implementation,
    faqs: [
      { question: "Can Odoo manage several warehouses?", answer: "Warehouse and location structures can be configured around the agreed stock ownership, picking and reporting model." },
      { question: "Can Odoo connect with our carriers?", answer: "That depends on carrier interfaces, available connectors and the delivery statuses you want to exchange. We assess those requirements during discovery." },
      { question: "Can logistics costs be linked to deliveries?", answer: "Costs can be reviewed against agreed order, purchase, fleet and accounting references. The exact allocation method depends on your operating and finance model." },
    ],
    cta: { title: "Map the path from order to delivery", description: "Bring your warehouse, dispatch and cost scenarios. We will identify the records and exceptions the first scope needs to connect.", button: "Discuss logistics operations" },
    seo: { title: "Odoo for Logistics in Egypt, UAE & Saudi Arabia", description: "Connect Odoo inventory, warehouse, dispatch, fleet and accounting workflows around your delivery and cost requirements across Egypt and the Gulf." },
  },
};

export const additionalIndustryPages = Object.fromEntries(
  (Object.keys(profiles) as AdditionalSlug[]).map((slug) => {
    const industry = industryHubItems.find((item) => item.id === slug);
    if (!industry) throw new Error(`Missing industry hub entry: ${slug}`);
    return [
      slug,
      {
        ...profiles[slug],
        slug,
        name: industry.name,
        heroHighlights: industry.capabilities,
        modules: industry.modules.map((name) => ({ name })),
      } satisfies IndustryPageData,
    ];
  }),
) as Record<AdditionalSlug, IndustryPageData>;
