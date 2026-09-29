import { defineOdooPage } from "../child/renderable";
import {
  closing,
  faqs,
  hero,
  implementationMetadata,
  meaning,
  midCta,
  regional,
  related,
  risks,
  stageMappingNote,
  stageNav,
  supportTiers,
  timeline,
  timelineFactors,
  visibleStages,
} from "./content";

export const implementationPage = defineOdooPage({
  path: "/odoo/implementation",
  metadata: implementationMetadata,
  breadcrumbLabel: "Implementation",
  hero: {
    eyebrow: hero.eyebrow,
    title: hero.title,
    description: hero.description,
    primary: { label: hero.primary, href: hero.primaryHref },
    secondary: { label: hero.secondary, href: "#process" },
    titleMaxCh: 18,
  },
  sections: [
    {
      type: "intro",
      eyebrow: meaning.eyebrow,
      title: meaning.title,
      paragraphs: meaning.intro,
      lists: [
        { title: meaning.partnerTitle, items: meaning.partner },
        { title: meaning.clientTitle, items: meaning.client },
      ],
    },
    {
      type: "section",
      id: "process",
      tone: "tinted",
      eyebrow: "The process",
      title: "Nine stages, from first conversation to ongoing support",
      description: stageMappingNote,
      blocks: [{ type: "stages", stages: visibleStages, supportTiers }],
    },
    {
      type: "section",
      eyebrow: timeline.eyebrow,
      title: timeline.title,
      description: timeline.description,
      blocks: [
        {
          type: "timeline",
          sequence: stageNav,
          left: { title: "Where stages overlap", items: timeline.overlaps },
          right: { title: timeline.factorsTitle, items: timelineFactors },
          note: timeline.note,
        },
      ],
    },
    { type: "midCta", title: midCta.title, description: midCta.description },
    {
      type: "section",
      eyebrow: risks.eyebrow,
      title: risks.title,
      description: risks.description,
      blocks: [
        {
          type: "callouts",
          label: "How we address it:",
          items: risks.items.map(([risk, mitigation]) => [risk, mitigation]),
        },
      ],
    },
    {
      type: "section",
      tone: "pale",
      eyebrow: regional.eyebrow,
      title: regional.title,
      description: regional.description,
      blocks: [
        {
          type: "cards",
          columns: 3,
          items: regional.countries.map((country) => ({
            title: country.name,
            items: country.points,
          })),
        },
        ...(regional.egyptNote
          ? [{ type: "body" as const, paragraphs: [regional.egyptNote] }]
          : []),
        { type: "note", text: regional.note },
        {
          type: "links",
          items: [
            {
              text: related.regionalLink.label,
              href: related.regionalLink.href,
            },
            {
              text: "E-invoicing detail: Accounting & E-Invoicing",
              pageKey: "accounting",
              ariaLabel: "Learn about Odoo Accounting and E-Invoicing",
            },
          ],
        },
      ],
    },
    { type: "faq", title: "Implementation questions", items: faqs },
    {
      type: "related",
      title: related.title,
      links: [
        { text: related.overview.label, href: related.overview.href },
        ...related.siblingKeys.map((pageKey) => ({ pageKey })),
      ],
    },
  ],
  closing: {
    title: closing.title,
    description: closing.description,
    secondary: closing.secondary,
  },
});
