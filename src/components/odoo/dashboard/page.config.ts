// Config for /odoo/dashboard-insights, rendered by the shared OdooChildPage
// template. Facts come from ./source.ts (legacy page "odoo-dashboard-insights").
//
// Withheld on purpose (status "confirm" or BLOCKED in source.ts): AI features
// (no section is rendered), spreadsheet upload, real-time refresh, ready-made
// dashboards, chart-type count, layer counts, manager-hierarchy access,
// versions/editions/hosting, upgrade promises, durations, compliance claims.
//
// TODO: owner to confirm before launch: ownership and licensing of both
// modules, supported Odoo versions, Enterprise vs Community, delivery model.
// TODO: engineering to confirm the AI features and how data is handled; only
// then add an AI section.

import { defineOdooPage, renderable } from "../child/renderable";
import {
  accessManagement,
  ai,
  arabic,
  combined,
  dashboard,
  faq,
  hero as heroSource,
  implementation as implementationSource,
  problems,
} from "./source";

const text = (items: { text: string; status: "legacy" | "confirm" }[]) =>
  renderable(items).map((item) => item.text);

const primaryHref =
  "/contact?service=Odoo%20Dashboard%20%26%20Insights%20Consultation";

const aiItems = text(ai);
const kpiArticle = "Odoo KPI Dashboards for Real-Time Business Insights";

export const dashboardPage = defineOdooPage({
  path: "/odoo/dashboard-insights",
  metadata: {
    title: "Odoo Dashboard & Insights with Access Management",
    description:
      "Live dashboards on your Odoo data, plus customised access management so each person sees only what they should. Built on Odoo, with Arabic and right-to-left support.",
  },
  breadcrumbLabel: "Dashboard & Insights",
  hero: {
    eyebrow: "Dashboards & access management",
    title: heroSource.h1,
    description: heroSource.intro,
    highlight:
      "Two modules built on Odoo by ETripleSoft: dashboards, and customised access management.",
    primary: { label: "Book a Consultation", href: primaryHref },
    secondary: { label: "See the dashboards", href: "#dashboards" },
    titleMaxCh: 20,
  },
  sections: [
    {
      type: "section",
      eyebrow: "The problem",
      title: "Why reporting and access control belong together",
      blocks: [
        {
          type: "cards",
          columns: 3,
          items: problems.map(({ title, text: body }) => ({ title, text: body })),
        },
      ],
    },
    {
      type: "section",
      id: "dashboards",
      tone: "tinted",
      eyebrow: "Dashboards",
      title: "Live dashboards on your Odoo data",
      blocks: [{ type: "bullets", items: text(dashboard) }],
    },
    {
      type: "midCta",
      title: "Want dashboards and access rules set up for your team?",
      description:
        "Talk to our team about the data your leaders need and who should see it.",
    },
    // AI: rendered only once the items are confirmed (see source.ts).
    ...(aiItems.length > 0
      ? [
          {
            type: "section" as const,
            eyebrow: "AI",
            title: "AI-assisted insights",
            blocks: [{ type: "bullets" as const, items: aiItems }],
          },
        ]
      : []),
    {
      type: "section",
      id: "access",
      eyebrow: "Access management",
      title: "Customised access management",
      description:
        "A separate module, built on Odoo, for controlling what each person can see and do.",
      blocks: [{ type: "bullets", items: text(accessManagement) }],
    },
    {
      type: "section",
      tone: "tinted",
      eyebrow: "Together",
      title: "How they work together",
      blocks: [{ type: "body", paragraphs: [combined] }],
    },
    {
      type: "section",
      eyebrow: "Language",
      title: "Arabic and right-to-left",
      blocks: [{ type: "bullets", items: text(arabic) }],
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
      title: "Dashboard and access management questions",
      items: renderable(faq).map((item) => [item.q, item.a] as const),
    },
    {
      type: "related",
      title: "Related pages",
      links: [
        { text: "Odoo ERP overview", href: "/odoo" },
        { pageKey: "hr" },
        { pageKey: "accounting" },
        {
          text: kpiArticle,
          href: "/insights/odoo-kpi-dashboard-real-time-business-insights",
          ariaLabel: `Read the article: ${kpiArticle}`,
        },
      ],
    },
  ],
  closing: {
    title: "Ready to plan your dashboards and access rules?",
    description:
      "Book a consultation and we will talk through your data, users and next steps.",
    secondary: { label: "Contact our team", href: "/contact" },
  },
});
