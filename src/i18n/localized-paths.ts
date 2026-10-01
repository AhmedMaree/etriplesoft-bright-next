// Lightweight route inventory used by the language switcher and SEO helpers.
// Keep page copy out of this module so client navigation does not bundle it.
export const localizedRoutePaths = [
  "/about", "/about-us", "/contact", "/contact-us",
  "/services", "/portfolio", "/support-ticket", "/careers", "/faqs", "/privacy", "/terms",
  "/odoo", "/cloud", "/ai", "/web", "/mobile", "/digital-marketing", "/resources",
  "/request-demo", "/book-consultation", "/tools/chart-of-accounts", "/industries",
  "/odoo/implementation", "/odoo/accounting", "/odoo/hr-payroll", "/odoo/itsm-helpdesk", "/odoo/dashboard-insights",
  "/industries/construction", "/industries/real-estate", "/industries/facility-management", "/industries/restaurants", "/industries/education",
  "/industries/retail", "/industries/healthcare", "/industries/logistics",
] as const;

export const localizedInsightSlugs = [
  "odoo-roi-return-on-investment",
  "signs-you-need-erp-system",
  "odoo-implementation-cost",
  "erp-system-comparison",
  "odoo-implementation-timeline",
  "odoo-vs-zoho-vs-quickbooks",
  "facility-management-software-guide",
  "odoo-kpi-dashboard-real-time-business-insights",
  "how-to-choose-managed-it-services-provider-egypt",
  "data-protection-compliance-egypt-2026",
] as const;

// Legacy article URLs remain directly accessible in English but are unlisted
// and noindex. Keep their Arabic counterparts available without adding them to
// the published article index or sitemap.
export const localizedLegacyInsightSlugs = [
  "odoo-kpi-dashboard-real-time-business-insights-draft",
  "odoo-roi-return-on-investment-draft",
  "signs-you-need-erp-system-draft",
  "odoo-construction",
  "ai-business",
  "seo-strategies",
  "measure-marketing-performance",
  "integrated-digital-campaigns",
  "erp-benefits-for-growing-businesses",
  "modern-seo-friendly-website",
  "b2b-marketing-strategies-middle-east",
] as const;

// Illustrative portfolio detail routes are intentionally noindex, but still
// have matching Arabic pages and should preserve the selected story on switch.
export const localizedPortfolioProjectSlugs = [
  "erp",
  "manufacturing-erp",
  "logistics",
  "cloud",
  "ai",
  "ai-document-automation",
] as const;
