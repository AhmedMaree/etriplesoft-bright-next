// Single source of truth for company contact data.
//
// Only values confirmed by more than one source (see docs/PHASES-18-20-AUDIT.md)
// belong here. Unconfirmed facts are `null` and must be omitted from the UI,
// never guessed. Marketing claims (project counts, years, certifications,
// response times) are NOT contact data and live in docs/CLAIMS-REGISTER.md.
//
// Keep this file free of imports so Node scripts can load it directly.

export type CompanyPhone = {
  /** Human-readable form, e.g. "+20 100 210 6952". */
  display: string;
  /** Valid tel: URI, e.g. "tel:+201002106952". */
  href: string;
};

export type CompanyOffice = {
  id: "egypt" | "saudi" | "uae";
  country: string;
  city: string;
  /** Short label, e.g. "Cairo, Egypt". */
  label: string;
  /** Full street address. `null` when not confirmed: show the city only. */
  address: string | null;
  phones: CompanyPhone[];
};

export type CompanySocialLink = {
  platform: "linkedin" | "instagram";
  url: string;
  label: string;
};

const phone = (display: string): CompanyPhone => ({
  display,
  href: "tel:" + display.replace(/[^\d+]/g, ""),
});

export const company = {
  name: "ETripleSoft",
  websiteUrl: "https://etriplesoft.com",

  primaryEmail: "info@etriplesoft.com",
  // No published source confirms support@etriplesoft.com.
  supportEmail: null as string | null,

  /** Existing Odoo Helpdesk ticket portal already linked from /support-ticket. */
  supportPortalUrl: "https://etriple.odoo.com/helpdesk/support-tickets-1",

  offices: [
    {
      id: "egypt",
      country: "Egypt",
      city: "Cairo",
      label: "Cairo, Egypt",
      address: "Villa 350, South Academy B, New Cairo, Egypt",
      phones: [phone("+20 100 210 6952"), phone("+20 104 409 8406")],
    },
    {
      id: "saudi",
      country: "Saudi Arabia",
      city: "Riyadh",
      label: "Riyadh, Saudi Arabia",
      // SAUDI ADDRESS: NEEDS OWNER CONFIRMATION. Sources disagree
      // ("As Sulimaniyah, Al Olaya, Riyadh 12214, Saudi Arabia" vs
      // "Al Olaya, Riyadh 12214"), so only the city is published.
      address: null,
      phones: [phone("+966 508 547 071")],
    },
    {
      id: "uae",
      country: "United Arab Emirates",
      city: "Dubai",
      label: "Dubai, UAE",
      address: "Latifa Tower, West Wing, Office 103, Sheikh Zayed Rd, Dubai, UAE",
      phones: [phone("+971 52 440 1992"), phone("+971 58 158 8214")],
    },
  ] as CompanyOffice[],

  // Facebook is deliberately absent: the legacy footer links to a generic
  // facebook.com/share/... URL (NEEDS-VERIFICATION).
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/company/etriplesoft",
      label: "ETripleSoft on LinkedIn",
    },
    {
      platform: "instagram",
      url: "https://www.instagram.com/etriplesoft",
      label: "ETripleSoft on Instagram",
    },
  ] as CompanySocialLink[],

  /** Unconfirmed: render no business-hours block while null. */
  businessHours: null as string | null,
} as const;

/** Google Maps search link for an office, or null when only a city is known. */
export function officeMapUrl(office: CompanyOffice): string | null {
  return office.address
    ? "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(office.address)
    : null;
}

/** Primary phone (first office phone), used where a single number is needed. */
export const primaryPhone: CompanyPhone = company.offices[0].phones[0];

export const mailto = (subject?: string) =>
  "mailto:" +
  company.primaryEmail +
  (subject ? "?subject=" + encodeURIComponent(subject) : "");
