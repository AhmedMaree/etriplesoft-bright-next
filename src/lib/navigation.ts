// Single source of truth for site navigation. The header, mobile menu and
// footer all read from this file so labels/links never drift out of sync.

import { company } from "./company";
import { industryHubItems } from "@/data/industries/hub";

export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  label: string;
  /** Present when the group is a dropdown; omitted for a plain top-level link. */
  href?: string;
  items?: NavLink[];
};

export const odooLinks: NavLink[] = [
  { label: "Odoo Overview", href: "/odoo" },
  { label: "Implementation", href: "/odoo/implementation" },
  { label: "Accounting & E-Invoicing", href: "/odoo/accounting" },
  // Dedicated HR route is not live yet; keep navigation on a valid enquiry flow.
  { label: "HR & Payroll", href: "/contact?service=Odoo%20HR%20%26%20Payroll" },
  { label: "ITSM & Helpdesk", href: "/odoo/itsm-helpdesk" },
  { label: "Dashboard & Insights", href: "/odoo/dashboard-insights" },
];

export const serviceLinks: NavLink[] = [
  { label: "Services Overview", href: "/services" },
  { label: "Cloud & Security", href: "/cloud" },
  { label: "AI & Automation", href: "/ai" },
  { label: "Web Development", href: "/web" },
  { label: "Mobile Applications", href: "/mobile" },
  { label: "Digital Marketing", href: "/digital-marketing" },
];

export const industryLinks: NavLink[] = [
  { label: "Industries Overview", href: "/industries" },
  ...industryHubItems.filter((industry) => industry.hasPage).map((industry) => ({
    label: industry.name,
    href: industry.href,
  })),
];

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Resources", href: "/resources" },
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

export const bookADemo: NavLink = { label: "Book a Demo", href: "/contact" };

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
