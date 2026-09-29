import { odooMetadata } from "@/components/odoo/content";
import { privacy } from "@/content/legal/privacy";
import { terms } from "@/content/legal/terms";

// Every route served by this catch-all, with its search metadata. Titles omit
// the brand suffix (added by the root template). Descriptions restate visible
// page copy; do not add claims here.
export const pages: Record<string, { title: string; description: string }> = {
  about: {
    title: "About Our Odoo & Digital Solutions Team",
    description:
      "We help businesses across Egypt, the UAE and Saudi Arabia transform, grow and lead with Odoo ERP and digital solutions built for real work.",
  },
  portfolio: {
    title: "Odoo ERP & Digital Project Success Stories",
    description:
      "Selected work and the capabilities behind it: Odoo ERP, cloud and security, AI automation, web, mobile and digital marketing from ETripleSoft.",
  },
  contact: {
    title: "Contact Our Odoo & Digital Solutions Team",
    description:
      "Contact ETripleSoft about Odoo ERP, cloud and security, AI automation, web, mobile or digital marketing. Offices in Cairo, Riyadh and Dubai.",
  },
  "support-ticket": {
    title: "Customer Support for Odoo & Digital Services",
    description:
      "Get help from ETripleSoft with existing Odoo and digital services, or find the right route for sales and general enquiries in Egypt and the Gulf.",
  },
  careers: {
    title: "Careers in Odoo ERP & Digital Solutions",
    description:
      "Explore careers at ETripleSoft, a team of problem-solvers and builders creating digital solutions from Cairo, Saudi Arabia and the UAE.",
  },
  insights: {
    title: "Odoo ERP & Digital Transformation Insights",
    description:
      "Practical guides on Odoo, ERP, implementation cost, e-invoicing and IT from ETripleSoft, for businesses in Egypt, Saudi Arabia and the UAE.",
  },
  faqs: {
    title: "Odoo ERP FAQs for Egypt, UAE & KSA",
    description:
      "Find answers about Odoo ERP, implementation, pricing, support and ETripleSoft's digital services for businesses in Egypt, the UAE and Saudi Arabia.",
  },
  privacy: { title: "Privacy Policy", description: privacy.metaDescription },
  terms: { title: "Terms & Conditions", description: terms.metaDescription },
  odoo: {
    title: odooMetadata.title,
    description: odooMetadata.description,
  },
  cloud: {
    title: "Cloud Security Solutions in Egypt",
    description:
      "Design, secure and manage modern cloud environments. ETripleSoft helps organizations in Egypt protect their cloud, data and business.",
  },
  ai: {
    title: "AI Automation Services for Business in Egypt",
    description:
      "Explore practical AI automation services that reduce repetitive work, connect business processes and help teams make better decisions across Egypt and the Gulf.",
  },
  web: {
    title: "Web Design Company in Egypt",
    description:
      "We design and develop websites and online stores that are clear, useful and manageable, and that help your business grow.",
  },
  mobile: {
    title: "Mobile Application Development",
    description:
      "We design and develop mobile apps for iOS and Android that help you reach customers, streamline operations and turn ideas into growth.",
  },
  "digital-marketing": {
    title: "Digital Marketing Services in Egypt, UAE & KSA",
    description:
      "Grow your brand with ETripleSoft's digital marketing services, including strategy, search and campaigns for businesses in Egypt, the UAE and Saudi Arabia.",
  },
};

// Service landing pages that get Service structured data.
export const serviceSchemaSlugs = [
  "odoo",
  "cloud",
  "ai",
  "web",
  "mobile",
  "digital-marketing",
];
