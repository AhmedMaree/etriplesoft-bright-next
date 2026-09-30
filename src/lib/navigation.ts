// Single source of truth for site navigation. The header, mobile menu and
// footer all read from this file so labels/links never drift out of sync.

import { company } from "./company";
import { industryHubItems } from "@/data/industries/hub";

export type NavLink = {
  label: string;
  href: string;
  /** One-line summary shown in the mega menu. */
  description?: string;
  /** Key into the icon map in nav-dropdown.tsx. */
  icon?: string;
};

export type NavGroup = {
  label: string;
  /** Present when the group is a dropdown; omitted for a plain top-level link. */
  href?: string;
  items?: NavLink[];
};

export const odooLinks: NavLink[] = [
  { label: "Odoo Overview", href: "/odoo", icon: "layout", description: "Every Odoo app on one connected platform." },
  { label: "Request a Demo", href: "/request-demo", icon: "play", description: "See Odoo running on your own processes." },
  { label: "Implementation", href: "/odoo/implementation", icon: "rocket", description: "Structured rollout from discovery to go-live." },
  { label: "Accounting & E-Invoicing", href: "/odoo/accounting", icon: "receipt", description: "Books, tax and e-invoicing in one place." },
  // Dedicated HR route is not live yet; keep navigation on a valid enquiry flow.
  { label: "HR & Payroll", href: "/odoo/hr-payroll", icon: "users", description: "People records, attendance and payroll." },
  { label: "ITSM & Helpdesk", href: "/odoo/itsm-helpdesk", icon: "headset", description: "Tickets, SLAs and service management." },
  { label: "Dashboard & Insights", href: "/odoo/dashboard-insights", icon: "chart", description: "Live KPIs and reporting for decisions." },
];

export const serviceLinks: NavLink[] = [
  { label: "Services Overview", href: "/services", icon: "layout", description: "ERP, cloud, AI, web, mobile and marketing." },
  { label: "Cloud & Security", href: "/cloud", icon: "cloud", description: "Secure, scalable hosting and infrastructure." },
  { label: "AI & Automation", href: "/ai", icon: "bot", description: "Automate routine work with practical AI." },
  { label: "Web Development", href: "/web", icon: "code", description: "Fast websites and portals that convert." },
  { label: "Mobile Applications", href: "/mobile", icon: "phone", description: "iOS and Android apps for your customers." },
  { label: "Digital Marketing", href: "/digital-marketing", icon: "megaphone", description: "Data-driven campaigns and SEO." },
];

const industryIcons: Record<string, string> = {
  construction: "hardhat",
  "real-estate": "building",
  "facility-management": "wrench",
  restaurants: "utensils",
  education: "graduation",
};

export const industryLinks: NavLink[] = [
  {
    label: "Industries Overview",
    href: "/industries",
    icon: "layout",
    description: "How we tailor solutions to your sector.",
  },
  ...industryHubItems.filter((industry) => industry.hasPage).map((industry) => ({
    label: industry.name,
    href: industry.href,
    icon: industryIcons[industry.id] ?? "building",
    description: industry.cardDescription,
  })),
];

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about", icon: "info", description: "Who we are and how we work." },
  { label: "Careers", href: "/careers", icon: "briefcase", description: "Join our teams across the region." },
  { label: "Contact", href: "/contact", icon: "mail", description: "Talk to us in Cairo, Riyadh or Dubai." },
  { label: "Resources", href: "/resources", icon: "book", description: "Guides and tools for your projects." },
];

// Primary header navigation, in display order.
export const primaryNav: NavGroup[] = [
  { label: "Odoo ERP", items: odooLinks },
  { label: "Services", items: serviceLinks },
  { label: "Industries", items: industryLinks },
  { label: "Success Stories", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Company", items: companyLinks },
];

export const bookADemo: NavLink = {
  label: "Book a Free Consultation",
  href: "/book-consultation",
};

// Footer columns, in display order. The CSS grid this renders into
// (`.footer-grid`) is tuned for exactly four link columns plus the brand and
// offices columns, so Insights/FAQs/Support Ticket/Privacy/Terms are grouped
// into the Company column rather than opening a fifth grid track.
export const footerColumns: { title: string; links: NavLink[] }[] = [
  { title: "Odoo", links: odooLinks },
  { title: "Services", links: serviceLinks },
  {
    title: "Industries",
    links: industryHubItems.map((industry) => ({
      label: industry.name,
      href: industry.href,
    })),
  },
  {
    title: "Company",
    links: [
      ...companyLinks,
      { label: "Insights", href: "/insights" },
      { label: "FAQs", href: "/faqs" },
      { label: "Support Ticket", href: "/support-ticket" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export const siteContact = {
  email: company.primaryEmail,
  offices: company.offices.map((office) => ({
    label: office.label,
    href: "/contact#offices",
  })),
};
