// Config for /odoo/itsm-helpdesk, rendered by the shared OdooChildPage template.
// Facts come from ./source.ts (legacy post "odoo-itsm-helpdesk-module").
//
// Withheld on purpose (status "confirm" or BLOCKED in source.ts): SLA default
// numbers, durations, case studies, testimonials, metrics, "leading/#1",
// "ITIL compliant", ServiceNow comparisons, ETA/ZATCA/VAT wording, demo data.
//
// TODO: owner to confirm before launch: who owns and licenses this module,
// whether it is sold as a product or delivered as a service, supported Odoo
// versions, and the SLA example defaults.
// TODO: delivery review of the "aligned with ITIL concepts" wording.

import { defineOdooPage, renderable } from "../child/renderable";
import {
  agentFeatures,
  components,
  faq,
  hero as heroSource,
  implementation as implementationSource,
  lifecycle,
  positioning,
  regional as regionalSource,
} from "./source";

const text = (items: { text: string; status: "legacy" | "confirm" }[]) =>
  renderable(items).map((item) => item.text);

const primaryHref = "/book-consultation";

// Grouping is presentational; component names and points are unchanged.
const groupOf = (names: string[]) =>
  renderable(components)
    .filter((component) => names.includes(component.name))
    .map((component) => ({ name: component.name, points: component.points }));

export const itsmPage = defineOdooPage({
  path: "/odoo/itsm-helpdesk",
  metadata: {
    title: "Odoo ITSM & Helpdesk Module for IT Teams",
    description:
      "An ITSM and helpdesk module built on Odoo Enterprise: tickets, problems, changes, assets, SLAs and a knowledge base in one system, aligned with ITIL concepts.",
  },
  breadcrumbLabel: "ITSM & Helpdesk",
  hero: {
    eyebrow: "IT service management",
    title: heroSource.h1,
    description: heroSource.intro,
    highlight: "Built on Odoo Enterprise by ETripleSoft.",
    primary: { label: "Book a Free Consultation", href: primaryHref },
    secondary: { label: "See the ticket lifecycle", href: "#lifecycle" },
    titleMaxCh: 20,
  },
  anchors: [
    ["Overview", "#overview"],
    ["Lifecycle", "#lifecycle"],
    ["Components", "#components"],
    ["Day to day", "#features"],
    ["Security", "#security"],
    ["FAQs", "#faqs"],
  ],
  sections: [
    {
      type: "section",
      id: "overview",
      eyebrow: "What it is",
      title: "A separate ITSM application on Odoo Enterprise",
      blocks: [{ type: "bullets", items: text(positioning) }],
    },
    {
      type: "section",
      id: "lifecycle",
      tone: "tinted",
      eyebrow: "Ticket lifecycle",
      title: "From first request to lessons learned",
      description:
        "Six connected steps take work from intake to review, all in one database.",
      blocks: [
        {
          type: "flow",
          columns: 3,
          steps: renderable(lifecycle).map(({ title, text: body }) => ({
            title,
            text: body,
          })),
          ariaLabel: "The ITSM ticket lifecycle",
        },
        { type: "note", text: "ITIL is a trademark of its owner." },
      ],
    },
    {
      type: "section",
      id: "components",
      eyebrow: "Core components",
      title: "What is in the module",
      blocks: [
        {
          type: "rows",
          modules: [
            {
              id: "work-the-queue",
              title: "Work the queue",
              intro: "Where agents spend their day.",
              entries: groupOf(["Dashboard", "Tickets", "SLA policies"]),
            },
            {
              id: "causes-and-change",
              title: "Fix causes, manage change",
              intro: "Go beyond the single ticket.",
              entries: groupOf([
                "Problems & known errors",
                "Changes & CAB",
                "Knowledge base",
              ]),
            },
            {
              id: "assets-and-insight",
              title: "Assets and insight",
              intro: "Know what you run and how you are doing.",
              entries: groupOf(["Assets / CMDB", "Reports"]),
            },
          ],
        },
      ],
    },
    {
      type: "midCta",
      title: "Want to see the ITSM module in action?",
      description:
        "Talk to our team about your IT service processes and how they would map to Odoo.",
    },
    {
      type: "section",
      id: "features",
      tone: "tinted",
      eyebrow: "Day to day",
      title: "Everyday features for agents and customers",
      blocks: [{ type: "bullets", items: text(agentFeatures) }],
    },
    {
      type: "section",
      id: "security",
      eyebrow: "Security and governance",
      title: "Three roles keep responsibilities clear",
      blocks: [
        {
          type: "cards",
          columns: 3,
          items: [
            {
              title: "Agent",
              text: "Works on records, with read-only access to configuration.",
            },
            { title: "Manager", text: "Full access, including configuration." },
            { title: "CAB Member", text: "Approves changes only." },
          ],
        },
      ],
    },
    {
      type: "section",
      tone: "tinted",
      eyebrow: "Language",
      title: "Language support",
      blocks: [
        {
          type: "bullets",
          items: regionalSource.status === "legacy" ? [regionalSource.text] : [],
        },
      ],
    },
    {
      type: "strip",
      title: "How we implement this",
      description: implementationSource.text,
      link: {
        text: "See the full implementation process",
        href: "/odoo/implementation",
        ariaLabel: "Read about the Odoo implementation process",
      },
    },
    {
      type: "faq",
      id: "faqs",
      title: "ITSM and helpdesk questions",
      items: renderable(faq).map((item) => [item.q, item.a] as const),
    },
    {
      type: "related",
      title: "Related Odoo pages",
      links: [
        { text: "Odoo ERP overview", href: "/odoo" },
        {
          text: "Implementation",
          pageKey: "implementation",
          ariaLabel: "Learn more about Odoo Implementation",
        },
        { pageKey: "accounting" },
        { pageKey: "hr" },
        { pageKey: "dashboard-insights" },
      ],
    },
  ],
  closing: {
    title: "Ready to plan your ITSM setup?",
    description:
      "Book a consultation and we will talk through your IT service processes and next steps.",
    secondary: { label: "Explore Solutions", href: "/services" },
  },
});
