export type IndustryHubItem = {
  id: string;
  name: string;
  challenge: string;
  capabilities: string[];
  improvement: string;
  modules: string[];
  href: string;
  linkLabel: string;
  dedicated: boolean;
};

export const industryHubItems: IndustryHubItem[] = [
  {
    id: "construction",
    name: "Construction",
    challenge: "Project budgets, site requests, procurement, subcontractor work and progress billing often live in different records. That separation makes it difficult for project, commercial and finance teams to understand the same job at the same time.",
    capabilities: ["Project and analytic cost structure", "Controlled purchasing and material movement", "Documented progress, approvals and billing"],
    improvement: "The workflow becomes a traceable path from project setup and site demand through approval, purchasing, execution, certification and financial review.",
    modules: ["Project", "Accounting", "Purchase", "Inventory", "Documents", "Sign", "Planning", "Timesheets"],
    href: "/industries/construction",
    linkLabel: "Explore construction",
    dedicated: true,
  },
  {
    id: "real-estate",
    name: "Real Estate",
    challenge: "Property availability, enquiries, contracts, instalments and maintenance requests are frequently managed in separate tools. Teams then spend time reconciling unit, customer and payment status instead of acting on one shared record.",
    capabilities: ["CRM and property-specific pipeline configuration", "Contract documents, signatures and scheduled billing", "Service requests linked to property context"],
    improvement: "The workflow becomes a connected journey from enquiry and unit matching to contract, billing, collection, handover and ongoing service.",
    modules: ["CRM", "Sales", "Subscriptions", "Accounting", "Documents", "Sign", "Helpdesk", "Field Service"],
    href: "/industries/real-estate",
    linkLabel: "Explore real estate",
    dedicated: true,
  },
  {
    id: "facility-management",
    name: "Facility Management",
    challenge: "Service requests, preventive schedules, assets, technicians, parts and SLAs lose context when a helpdesk, CMMS and finance system operate independently. Multisite operators also need consistent visibility without rebuilding reports manually.",
    capabilities: ["Request triage and SLA routing", "Preventive maintenance and asset history", "Field dispatch, parts and job-cost context"],
    improvement: "The workflow becomes one controlled loop from request or preventive trigger through triage, dispatch, execution, verification and service review.",
    modules: ["Maintenance", "Field Service", "Helpdesk", "Planning", "Inventory", "Purchase", "Accounting"],
    href: "/industries/facility-management",
    linkLabel: "Explore facility management",
    dedicated: true,
  },
  {
    id: "restaurants",
    name: "Restaurants / F&B",
    challenge: "Orders may arrive from tables, takeaway and delivery platforms while kitchens, stock and finance see different versions of the transaction. Multi-branch operations add menu, purchasing, payment and reconciliation complexity.",
    capabilities: ["Restaurant Point of Sale and preparation flow", "Ingredient, inventory and purchasing control", "Payments, loyalty and accounting follow-through"],
    improvement: "The workflow becomes a connected path from menu and stock readiness through order, preparation, settlement, inventory impact and daily reconciliation.",
    modules: ["Point of Sale", "Inventory", "Purchase", "Accounting", "Manufacturing", "Barcode", "CRM", "Planning"],
    href: "/industries/restaurants",
    linkLabel: "Explore restaurants and F&B",
    dedicated: true,
  },
  {
    id: "education",
    name: "Education",
    challenge: "Admissions, learner records, fees, documents and communications often span forms, email and spreadsheets. Education-specific records also need clear ownership rather than being forced into a generic sales workflow.",
    capabilities: ["Website and CRM admissions foundation", "eLearning, documents and electronic signatures", "Accounting, staff planning and communications"],
    improvement: "The workflow becomes a governed journey from enquiry and application through review, enrollment, billing, learning access and completion records.",
    modules: ["CRM", "Website", "eLearning", "Accounting", "Documents", "Sign", "Employees", "Planning"],
    href: "/industries/education",
    linkLabel: "Explore education",
    dedicated: true,
  },
  {
    id: "retail",
    name: "Retail",
    challenge: "Stores need sales, stock, purchasing, pricing and customer activity to stay aligned across locations and channels. When updates arrive late, teams lose confidence in availability and replenishment decisions.",
    capabilities: ["Multi-store sales and inventory visibility", "Replenishment, purchasing and barcode operations", "Customer, loyalty and e-commerce connections"],
    improvement: "The workflow becomes a consistent cycle from product and price control to sale, stock movement, replenishment, customer follow-up and financial reconciliation.",
    modules: ["Point of Sale", "Inventory", "Purchase", "Sales", "CRM", "Barcode", "Website", "Accounting"],
    // TODO: Upgrade to /industries/retail when a dedicated page is approved.
    href: "/contact",
    linkLabel: "Talk to us about retail",
    dedicated: false,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    challenge: "Healthcare operations combine sensitive records, appointments, billing, supplies and service coordination. Clinical systems may need to remain authoritative while ERP workflows support finance, inventory, purchasing and workforce operations around them.",
    capabilities: ["Administrative CRM and service workflows", "Medical-supply inventory and purchasing", "Accounting, workforce and facility operations"],
    improvement: "The workflow becomes a governed exchange between specialist clinical records and the operational processes for procurement, stock, finance, people and service requests.",
    modules: ["CRM", "Inventory", "Purchase", "Accounting", "Employees", "Planning", "Maintenance", "Helpdesk"],
    // TODO: Upgrade to /industries/healthcare when a dedicated page is approved.
    href: "/contact",
    linkLabel: "Talk to us about healthcare",
    dedicated: false,
  },
  {
    id: "logistics",
    name: "Logistics",
    challenge: "Orders, warehouse activity, fleet, delivery status and costs cross teams and systems. Without shared references, exceptions are discovered through calls and manual reconciliation rather than a controlled operational flow.",
    capabilities: ["Warehouse, barcode and replenishment operations", "Fleet and delivery activity context", "Sales, purchasing, invoicing and cost follow-through"],
    improvement: "The workflow becomes a visible path from order and stock allocation through picking, dispatch, delivery confirmation, exception handling and financial close.",
    modules: ["Inventory", "Barcode", "Fleet", "Sales", "Purchase", "Accounting", "Planning", "Maintenance"],
    // TODO: Upgrade to /industries/logistics when a dedicated page is approved.
    href: "/contact",
    linkLabel: "Talk to us about logistics",
    dedicated: false,
  },
];

