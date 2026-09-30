// Topic pages related to /odoo, with a flag for whether the page has shipped.
// While `exists` is false the link falls back to a consultation request, so
// visitors never hit a 404. Flip `exists` to true when a page ships; that is
// the only change needed, and every consumer (/odoo, /services) follows.
//
// Temporary fallbacks to swap once the page ships: every entry below.

export type OdooRelatedPage = {
  key: string;
  label: string;
  path: string;
  exists: boolean;
};

export const odooCapabilityPages: OdooRelatedPage[] = [
  { key: "implementation", label: "Implementation", path: "/odoo/implementation", exists: true },
  { key: "accounting", label: "Accounting & E-Invoicing", path: "/odoo/accounting", exists: true },
  { key: "hr", label: "HR & Payroll", path: "/odoo/hr-payroll", exists: true },
  { key: "itsm-helpdesk", label: "ITSM & Helpdesk", path: "/odoo/itsm-helpdesk", exists: true },
  { key: "dashboard-insights", label: "Dashboard & Insights", path: "/odoo/dashboard-insights", exists: true },
];

export const odooIndustryPages: OdooRelatedPage[] = [
  { key: "construction", label: "Construction", path: "/industries/construction", exists: true },
  { key: "real-estate", label: "Real Estate", path: "/industries/real-estate", exists: true },
  { key: "facility-management", label: "Facility Management", path: "/industries/facility-management", exists: true },
  { key: "restaurants", label: "Restaurants", path: "/industries/restaurants", exists: true },
  { key: "education", label: "Education", path: "/industries/education", exists: true },
];

/** Real page when it exists, otherwise a consultation request for that topic. */
export function odooPageHref(page: OdooRelatedPage): string {
  if (page.exists) return page.path;
  return `/contact?service=${encodeURIComponent(`Odoo ${page.label}`)}&topic=odoo-${page.key}`;
}

export function odooPageByKey(key: string): OdooRelatedPage {
  const page = [...odooCapabilityPages, ...odooIndustryPages].find((p) => p.key === key);
  if (!page) throw new Error(`Unknown Odoo page: ${key}`);
  return page;
}
