import { odooMetadata } from "@/components/odoo/content";
import { privacy } from "@/content/legal/privacy";
import { terms } from "@/content/legal/terms";

// Every route served by this catch-all, with its search metadata. Titles omit
// the brand suffix (added by the root template). Descriptions restate visible
// page copy; do not add claims here.
export const pages: Record<string, { title: string; description: string }> = {
  about: {
    title: "About Us",
    description:
      "We help businesses across Egypt, the UAE and Saudi Arabia transform, grow and lead with Odoo ERP and digital solutions built for real work.",
  },
  portfolio: {
    title: "Success Stories",
    description:
      "Selected work and the capabilities behind it: Odoo ERP, cloud and security, AI automation, web, mobile and digital marketing from ETripleSoft.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Contact ETripleSoft about Odoo ERP, cloud and security, AI automation, web, mobile or digital marketing. Offices in Cairo, Riyadh and Dubai.",
  },
  "support-ticket": {
    title: "Support",
    description:
      "Get help from ETripleSoft: existing customer support, sales enquiries and general contact, each with its own path.",
  },
  careers: {
    title: "Careers",
    description:
      "Explore careers at ETripleSoft, a team of problem-solvers and builders creating digital solutions from Cairo, Saudi Arabia and the UAE.",
  },
  insights: {
    title: "Insights",
    description:
      "Practical guides on Odoo, ERP, implementation cost, e-invoicing and IT from ETripleSoft, for businesses in Egypt, Saudi Arabia and the UAE.",
  },
  faqs: {
    title: "FAQ",
    description:
      "Answers about Odoo, implementation, pricing, support and ETripleSoft services, organised by topic.",
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
    title: "AI Automation Services",
    description:
      "Automate processes, empower teams and unlock growth with practical AI solutions built for business.",
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
    title: "Digital Marketing Agency",
    description:
      "Data-driven marketing to grow your brand across Egypt, the UAE and Saudi Arabia.",
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
