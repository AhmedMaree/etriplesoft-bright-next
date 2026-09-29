// Copy and links for the /services hub. Descriptions are adapted from the
// existing service pages in src/lib/data.ts; nothing here states metrics,
// client names, certifications or awards.

import { odooCapabilityPages, odooPageHref } from "@/lib/odoo-pages";

export const demoHref = "/contact?service=Odoo%20ERP";

export const hero = {
  eyebrow: "Services",
  title: "Digital transformation, with Odoo at the core",
  description:
    "ETripleSoft brings ERP, cloud, automation and digital channels together as one portfolio. Odoo runs the operation, and every other service is built to support and extend it.",
  tiers: [
    ["Core", "Odoo ERP"],
    ["Foundation & intelligence", "Cloud & Security, AI Automation"],
    ["Customer-facing channels", "Web, Mobile, Digital Marketing"],
  ],
};

export const odoo = {
  eyebrow: "Flagship",
  title: "Odoo ERP is the operational core",
  description:
    "Finance, sales, inventory, projects, people and customer operations work best on one connected platform. We implement Odoo around the way your business already works, then extend it as your teams and processes evolve.",
  supporting:
    "Every other service in this portfolio connects to Odoo, so the data your teams rely on stays in one place.",
  capabilitiesLabel: "Odoo capabilities",
  // Links resolve through src/lib/odoo-pages.ts, so they fall back to a
  // consultation request until each child page ships.
  capabilities: odooCapabilityPages.map(
    (page) => [page.label, odooPageHref(page)] as const,
  ),
  cta: { label: "Explore Odoo ERP", href: "/odoo" },
  image: {
    src: "/images/odoo/odoo-laptop-dashboard.webp",
    width: 1408,
    height: 875,
    alt: "An Odoo dashboard displayed on a laptop",
  },
};

export type Support = {
  slug: string;
  icon: string;
  title: string;
  href: string;
  problem: string;
  connection: string;
};

export const foundation = {
  eyebrow: "Foundation & intelligence",
  title: "A secure base, and smarter workflows on top of it",
  description:
    "Odoo is only as dependable as the environment around it. These two services protect that environment and put its data to work.",
  items: [
    {
      slug: "cloud",
      icon: "cloud",
      title: "Cloud & Security",
      href: "/cloud",
      problem:
        "Modernize infrastructure, protect identities and endpoints, and keep critical data recoverable with a practical cloud and security roadmap.",
      connection:
        "It keeps the environment your Odoo system runs in secure, backed up and supported.",
    },
    {
      slug: "ai",
      icon: "brain",
      title: "AI Automation",
      href: "/ai",
      problem:
        "Identify high-value automation opportunities, connect the right data and systems, and keep people in control of important decisions.",
      connection:
        "Automation builds on the records and workflows already flowing through Odoo.",
    },
  ] satisfies Support[],
};

export const channels = {
  eyebrow: "Customer-facing channels",
  title: "Where customers meet the business",
  description:
    "Websites, apps and campaigns are the front door. Connected to Odoo, they draw on the same products, customers and orders as the rest of the operation.",
  items: [
    {
      slug: "web",
      icon: "monitor",
      title: "Web Development",
      href: "/web",
      problem:
        "Clear, responsive websites, online stores and service portals that are easy to manage.",
      connection: "Ready to connect with your CRM, ERP and marketing workflows.",
    },
    {
      slug: "mobile",
      icon: "phone",
      title: "Mobile Applications",
      href: "/mobile",
      problem:
        "Customer and business applications for iOS, Android and cross-platform delivery.",
      connection: "Apps that work from the same data as your teams in Odoo.",
    },
    {
      slug: "digital-marketing",
      icon: "chart",
      title: "Digital Marketing",
      href: "/digital-marketing",
      problem:
        "SEO, paid media, social, content and reporting connected to your sales process.",
      connection: "Leads and results tracked through to the sale.",
    },
  ] satisfies Support[],
};

export const together = {
  eyebrow: "Why it works together",
  title: "One portfolio, built around one system",
  description:
    "When each service is delivered separately, the seams between them become your problem. Delivered together around Odoo, they share data and one accountable partner.",
  diagramLabel:
    "Diagram: Odoo ERP at the centre, connected to Cloud & Security, AI Automation, Web Development, Mobile Applications and Digital Marketing.",
  points: [
    [
      "One accountable partner",
      "A single team answers for how the pieces fit, not several vendors pointing at each other.",
    ],
    [
      "Integrated data",
      "Customers, orders and financials live in Odoo and flow to the channels and tools that need them.",
    ],
    [
      "Faster delivery",
      "Shared context and reusable integrations mean less rework as new services are added.",
    ],
    [
      "Lower integration risk",
      "Designing the connections up front avoids brittle, one-off links between systems.",
    ],
  ],
};

export const region = {
  eyebrow: "Regional presence",
  title: "Supporting businesses across Egypt, Saudi Arabia and the UAE",
  description:
    "ETripleSoft works with organisations in three markets, with offices in Cairo, Riyadh and Dubai.",
  places: [
    ["Cairo", "Egypt"],
    ["Riyadh", "Saudi Arabia"],
    ["Dubai", "United Arab Emirates"],
  ],
  link: { label: "Offices and contact details", href: "/contact#offices" },
};

export const closing = {
  title: "Ready to plan your transformation?",
  description:
    "Talk to our team about where Odoo fits your business and which supporting services make sense alongside it.",
  secondary: { label: "Contact our team", href: "/contact" },
};

export const metadataContent = {
  title: "Digital Transformation Services",
  description:
    "Odoo ERP at the core, supported by cloud and security, AI automation, web, mobile and digital marketing. One connected portfolio from ETripleSoft.",
};
