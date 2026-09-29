export type IndustryHubItem = {
  id: string;
  name: string;
  image: string;
  cardDescription: string;
  challenge: string;
  capabilities: string[];
  improvement: string;
  modules: string[];
  href: string;
  linkLabel: string;
  hasPage: boolean;
};

export const industryHubItems: IndustryHubItem[] = [
  {
    id: "construction",
    name: "Construction",
    image: "construction",
    cardDescription: "Project budgets, procurement and site costs in one view.",
    challenge: "Project budgets, site requests, procurement, subcontractor work and progress billing often live in different records. That separation makes it difficult for project, commercial and finance teams to understand the same job at the same time.",
    capabilities: ["Project and analytic cost structure", "Controlled purchasing and material movement", "Documented progress, approvals and billing"],
    improvement: "The workflow becomes a traceable path from project setup and site demand through approval, purchasing, execution, certification and financial review.",
    modules: ["Project", "Accounting", "Purchase", "Inventory", "Documents", "Sign", "Planning", "Timesheets"],
    href: "/industries/construction",
    linkLabel: "Explore construction",
    hasPage: true,
  },
  {
    id: "real-estate",
    name: "Real Estate",
    image: "dubai",
    cardDescription: "Property, enquiries, contracts and billing connected.",
    challenge: "Property availability, enquiries, contracts, instalments and maintenance requests are frequently managed in separate tools. Teams then spend time reconciling unit, customer and payment status instead of acting on one shared record.",
    capabilities: ["CRM and property-specific pipeline configuration", "Contract documents, signatures and scheduled billing", "Service requests linked to property context"],
    improvement: "The workflow becomes a connected journey from enquiry and unit matching to contract, billing, collection, handover and ongoing service.",
    modules: ["CRM", "Sales", "Subscriptions", "Accounting", "Documents", "Sign", "Helpdesk", "Field Service"],
    href: "/industries/real-estate",
    linkLabel: "Explore real estate",
    hasPage: true,
  },
  {
    id: "facility-management",
    name: "Facility Management",
    image: "construction-team",
    cardDescription: "Service requests, assets and field work coordinated.",
    challenge: "Service requests, preventive schedules, assets, technicians, parts and SLAs lose context when a helpdesk, CMMS and finance system operate independently. Multisite operators also need consistent visibility without rebuilding reports manually.",
    capabilities: ["Request triage and SLA routing", "Preventive maintenance and asset history", "Field dispatch, parts and job-cost context"],
    improvement: "The workflow becomes one controlled loop from request or preventive trigger through triage, dispatch, execution, verification and service review.",
    modules: ["Maintenance", "Field Service", "Helpdesk", "Planning", "Inventory", "Purchase", "Accounting"],
    href: "/industries/facility-management",
    linkLabel: "Explore facility management",
    hasPage: true,
  },
  {
    id: "restaurants",
    name: "Restaurants / F&B",
    image: "web-restaurant",
    cardDescription: "Multi-branch POS, purchasing and daily reconciliation.",
    challenge: "Orders may arrive from tables, takeaway and delivery platforms while kitchens, stock and finance see different versions of the transaction. Multi-branch operations add menu, purchasing, payment and reconciliation complexity.",
    capabilities: ["Restaurant Point of Sale and preparation flow", "Ingredient, inventory and purchasing control", "Payments, loyalty and accounting follow-through"],
    improvement: "The workflow becomes a connected path from menu and stock readiness through order, preparation, settlement, inventory impact and daily reconciliation.",
    modules: ["Point of Sale", "Inventory", "Purchase", "Accounting", "Manufacturing", "Barcode", "CRM", "Planning"],
    href: "/industries/restaurants",
    linkLabel: "Explore restaurants and F&B",
    hasPage: true,
  },
  {
    id: "education",
    name: "Education",
    image: "education",
    cardDescription: "Admissions, learner records and finance aligned.",
    challenge: "Admissions, learner records, fees, documents and communications often span forms, email and spreadsheets. Education-specific records also need clear ownership rather than being forced into a generic sales workflow.",
    capabilities: ["Website and CRM admissions foundation", "eLearning, documents and electronic signatures", "Accounting, staff planning and communications"],
    improvement: "The workflow becomes a governed journey from enquiry and application through review, enrollment, billing, learning access and completion records.",
    modules: ["CRM", "Website", "eLearning", "Accounting", "Documents", "Sign", "Employees", "Planning"],
    href: "/industries/education",
    linkLabel: "Explore education",
    hasPage: true,
  },
  {
    id: "retail",
    name: "Retail",
    image: "retail",
    cardDescription: "Store sales, stock, replenishment and customer activity.",
    challenge: "Stores need sales, stock, purchasing, pricing and customer activity to stay aligned across locations and channels. When updates arrive late, teams lose confidence in availability and replenishment decisions.",
    capabilities: ["Multi-store sales and inventory visibility", "Replenishment, purchasing and barcode operations", "Customer, loyalty and e-commerce connections"],
    improvement: "The workflow becomes a consistent cycle from product and price control to sale, stock movement, replenishment, customer follow-up and financial reconciliation.",
    modules: ["Point of Sale", "Inventory", "Purchase", "Sales", "CRM", "Barcode", "Website", "Accounting"],
    href: "/industries#retail",
    linkLabel: "Explore retail",
    hasPage: false,
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: "healthcare",
    cardDescription: "Administrative workflows connected around clinical systems.",
    challenge: "Healthcare operations combine sensitive records, appointments, billing, supplies and service coordination. Clinical systems may need to remain authoritative while ERP workflows support finance, inventory, purchasing and workforce operations around them.",
    capabilities: ["Administrative CRM and service workflows", "Medical-supply inventory and purchasing", "Accounting, workforce and facility operations"],
    improvement: "The workflow becomes a governed exchange between specialist clinical records and the operational processes for procurement, stock, finance, people and service requests.",
    modules: ["CRM", "Inventory", "Purchase", "Accounting", "Employees", "Planning", "Maintenance", "Helpdesk"],
    href: "/industries#healthcare",
    linkLabel: "Explore healthcare",
    hasPage: false,
  },
  {
    id: "logistics",
    name: "Logistics",
    image: "distribution",
    cardDescription: "Warehouse, delivery, fleet and cost visibility.",
    challenge: "Orders, warehouse activity, fleet, delivery status and costs cross teams and systems. Without shared references, exceptions are discovered through calls and manual reconciliation rather than a controlled operational flow.",
    capabilities: ["Warehouse, barcode and replenishment operations", "Fleet and delivery activity context", "Sales, purchasing, invoicing and cost follow-through"],
    improvement: "The workflow becomes a visible path from order and stock allocation through picking, dispatch, delivery confirmation, exception handling and financial close.",
    modules: ["Inventory", "Barcode", "Fleet", "Sales", "Purchase", "Accounting", "Planning", "Maintenance"],
    href: "/industries#logistics",
    linkLabel: "Explore logistics",
    hasPage: false,
  },
];

export const industryCardItems = ["construction", "retail", "education", "real-estate", "healthcare", "logistics"].map((id) => industryHubItems.find((industry) => industry.id === id)!).map((industry) => ({
  id: industry.id,
  name: industry.name,
  image: industry.image,
  description: industry.cardDescription,
  href: industry.href,
}));
