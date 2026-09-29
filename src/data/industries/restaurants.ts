import type { IndustryPageData } from "./types";

export const restaurants: IndustryPageData = {
  slug: "restaurants",
  name: "Restaurants / F&B",
  eyebrow: "Odoo for restaurants and F&B",
  heroTitle: "Connect orders, kitchens, stock and finance across every branch",
  heroDescription:
    "Restaurants need the order, preparation, ingredient, purchasing, payment and accounting records to agree. ETripleSoft configures Odoo around the operating model—from dine-in and takeaway to delivery and multi-branch oversight.",
  heroHighlights: [
    "Point of Sale connected to stock and accounting",
    "Clearer kitchen and order-status handoffs",
    "Branch purchasing, inventory and performance in one system",
  ],
  problemsIntro:
    "The legacy restaurant source focuses on fragmented delivery channels, billing risk, weak food-cost visibility, kitchen handoffs and disconnected branch reporting. Those issues compound when the same product, ingredient or order is represented differently in each tool.",
  problems: [
    { title: "Orders arrive through separate channels", description: "Dine-in, takeaway and delivery orders can create duplicate entry, inconsistent menus and incomplete status visibility." },
    { title: "Kitchen handoffs are unclear", description: "Preparation teams need an accurate queue, course or station context, exceptions and completion status without relying on verbal relays." },
    { title: "Food cost is difficult to explain", description: "Purchases, recipes, consumption, waste and sales do not always share consistent units, products or timing." },
    { title: "Branch stock moves late", description: "Transfers, receipts, counts and replenishment can lag behind operational demand and create avoidable shortages or over-ordering." },
    { title: "Billing and finance require reconciliation", description: "Payment methods, discounts, refunds, delivery commissions and taxes must reconcile from the order through Accounting." },
    { title: "Staff planning sits outside sales patterns", description: "Schedules, attendance and demand are often reviewed separately, making shift decisions harder to coordinate." },
  ],
  solutionIntro:
    "Odoo Point of Sale anchors the order. Inventory, Purchase, Accounting, CRM and Planning then connect the operational and financial steps that surround it, with scoped integration for delivery channels and payments.",
  solutions: [
    { title: "One controlled menu and order record", description: "Products, prices, taxes, tables, order lines and payments follow a governed Point of Sale setup by branch or operating model." },
    { title: "Kitchen-ready order routing", description: "Preparation status and kitchen-display behavior can be configured around categories, stations and the restaurant’s actual service flow." },
    { title: "Ingredient and replenishment control", description: "Inventory, Purchase and Manufacturing capabilities can connect recipes or bills of materials, stock moves and procurement where appropriate." },
    { title: "Commercial and financial follow-through", description: "CRM, loyalty, payments and Accounting can connect customer activity and daily sales to controlled reconciliation and reporting." },
  ],
  modules: [
    { name: "Point of Sale" }, { name: "Inventory" }, { name: "Purchase" },
    { name: "Accounting" }, { name: "Manufacturing" }, { name: "Barcode" },
    { name: "CRM" }, { name: "Sales" }, { name: "Planning" },
    { name: "Employees" }, { name: "Attendances" }, { name: "Website" },
  ],
  workflowIntro:
    "A typical restaurant flow begins before the order with menu, stock and shift readiness, then carries the transaction through preparation, payment, inventory impact and financial close.",
  workflow: [
    { title: "Prepare", description: "Publish the approved menu, pricing and tax setup; confirm stock, purchasing needs, branch configuration and staffing." },
    { title: "Capture the order", description: "Record dine-in, takeaway or integrated delivery demand with the correct products, options, table or customer context." },
    { title: "Route and prepare", description: "Send order lines to the appropriate preparation flow and update status as items move toward completion." },
    { title: "Serve and settle", description: "Complete the order, apply controlled discounts or returns, collect payment and issue the appropriate receipt or invoice." },
    { title: "Reconcile and replenish", description: "Review stock impact, exceptions, payment totals and accounting entries, then act on replenishment and operating signals." },
  ],
  integrationsIntro:
    "Delivery, payment and fiscal integrations depend on provider APIs and local requirements. They are typically integrated through a supported connector or a governed custom interface.",
  integrations: [
    { title: "Delivery and aggregator platforms", description: "Menus, orders and status can be integrated with delivery marketplaces when the platform provides suitable access and operating rules are agreed." },
    { title: "Payment terminals and gateways", description: "Card, online and local payment methods can be connected where supported, with settlement and reconciliation designed explicitly." },
    { title: "E-invoicing services", description: "Receipts and invoices can follow the applicable localization and local e-invoicing process for the operating entity." },
    { title: "Kitchen and display devices", description: "Point of Sale and kitchen workflows can be prepared for the screens, printers and network conditions in each branch." },
    { title: "Biometric attendance", description: "Attendance devices can be connected to Odoo Attendances through available APIs or controlled imports." },
    { title: "E-commerce and online ordering", description: "Odoo Website and eCommerce or an external ordering channel can connect to product, customer, order and payment workflows." },
  ],
  regionalIntro:
    "The legacy source addresses Egypt, Saudi Arabia and the UAE. Tax, receipt, payment and delivery setup is confirmed for each entity and branch against current requirements and provider capabilities.",
  regionalConsiderations: [
    { title: "Tax and fiscal documents", description: "Configure taxes, receipts, invoices and the applicable local e-invoicing requirements for the transaction and legal entity." },
    { title: "Arabic and RTL", description: "Arabic interfaces, customer displays, receipts and online journeys can be prepared for RTL and bilingual operations." },
    { title: "Local payment methods", description: "Payment providers, terminals, tips, refunds and settlement cycles are designed around methods used in the target market." },
    { title: "Delivery ecosystem", description: "Aggregator contracts, commissions, menus, order ownership and failure handling differ by provider and must be mapped explicitly." },
    { title: "Multi-branch and franchise control", description: "Products, pricing, stock, access and financial reporting need clear rules for company-owned and franchise structures." },
    { title: "Connectivity and continuity", description: "Branch network reliability, device management, offline expectations and support responsibility are reviewed before rollout." },
  ],
  implementationIntro:
    "A representative branch is used to validate menu, order, kitchen, payment, stock and close-of-day scenarios. Wider rollout follows proven configuration and clean branch data.",
  implementation: [
    { title: "Discovery", description: "Map service models, menus, branches, kitchen routing, purchasing, recipes, payments, delivery channels, finance and staffing." },
    { title: "Solution design", description: "Confirm Point of Sale structure, products, taxes, devices, permissions, integrations, stock rules and exception handling." },
    { title: "Configuration", description: "Configure the selected Odoo apps, branch data, preparation flow, payments, accounting and approved integrations." },
    { title: "Data migration", description: "Prepare products, variants, prices, taxes, suppliers, stock and customer data with test imports and branch validation." },
    { title: "Training and go-live", description: "Train cashiers, kitchen users, supervisors, inventory teams, finance and administrators using live-service scenarios." },
    { title: "Support and improvement", description: "Stabilize devices and integrations, resolve operating issues and prioritize improvements using real branch feedback." },
  ],
  faqs: [
    { question: "Can Odoo Point of Sale support dine-in and takeaway?", answer: "Odoo Point of Sale supports restaurant-oriented flows, but the exact table, course, preparation, takeaway and receipt setup should be validated against the operation and deployed version." },
    { question: "Can delivery aggregators be integrated?", answer: "They can often be integrated when the provider offers reliable API or connector access. We confirm menu ownership, order acceptance, status updates, commissions, cancellations and support responsibility before committing scope." },
    { question: "How long does a restaurant rollout take?", answer: "Timing depends on branches, menus, product and recipe data, devices, payments, delivery integrations, finance design and rollout strategy. A pilot or representative branch helps establish the real plan." },
    { question: "Do recipes and food cost require customization?", answer: "Inventory and Manufacturing can support bills of materials and consumption patterns. Waste, substitutions, yield and detailed food-cost logic must be assessed; configuration or a scoped extension may be needed." },
    { question: "How is existing menu and stock data migrated?", answer: "We define the product and unit structure first, then cleanse and import approved products, prices, taxes, suppliers and opening stock. Representative transactions are tested before go-live." },
    { question: "What training and support do branches receive?", answer: "Training is role-based for cashiers, kitchen staff, supervisors, inventory, finance and system administrators. Post-launch coverage and response expectations are set in the support plan." },
  ],
  cta: {
    title: "Walk through one order from channel to daily close",
    description: "Bring your menu structure, order channels, kitchen flow and payment methods. We will help identify the right Odoo and integration scope.",
    button: "Discuss restaurant Odoo",
  },
  seo: {
    title: "Odoo Restaurant Management Software",
    description: "Connect restaurant Point of Sale, kitchen workflows, inventory, purchasing, delivery channels, payments and accounting with Odoo in Egypt and the GCC.",
  },
};

