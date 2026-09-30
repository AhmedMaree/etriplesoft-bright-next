// Copy for /odoo/implementation. Stage data comes from ./source.ts (extracted
// from the legacy WordPress post); this file adds the surrounding page copy.
//
// Integrity rules applied here:
//  - source items with status "confirm" are never rendered (see visible*)
//  - legacy per-phase durations stay hidden unless SHOW_LEGACY_DURATIONS is
//    true, and no total duration is ever rendered
//  - no pricing, client counts or percentage metrics
//
// TODO: confirm typical duration with delivery team. The legacy phase ranges
// (1-2, 1-3, 2-6, 1-2 weeks; hypercare 2-4 weeks) conflict with "4-16 weeks"
// elsewhere on the old site, so they are gated off.
// TODO: confirm with the owner before launch that the legacy stage content
// (deliverables, integration systems, support tiers) is still current.
// TODO: confirm with the delivery team, and have legal review, the regional
// and e-invoicing wording. Regulator names are used only at a high level.

import { localization } from "../content";
import {
  regional as legacyRegional,
  stages,
  supportTiers,
  timelineFactors,
  type Stage,
} from "./source";

export { supportTiers, timelineFactors };

export const SHOW_LEGACY_DURATIONS = false;

export const implementationMetadata = {
  title: "Odoo Implementation: Our Process, Stage by Stage",
  description:
    "How ETripleSoft delivers Odoo projects: discovery, design, configuration, migration, testing, training, go-live and support across Egypt, the UAE and Saudi Arabia.",
};

export const hero = {
  eyebrow: "Odoo implementation",
  title: "Odoo implementation, from discovery to support",
  description:
    "A clear, stage-by-stage approach to putting Odoo to work in your business: what happens at each step, what we need from your team, and what you receive.",
  primary: "Book a Free Consultation",
  primaryHref: "/book-consultation",
  secondary: "See the process",
};

export const meaning = {
  eyebrow: "What implementation means",
  title: "More than installing software",
  intro: [
    "An Odoo implementation is the work of turning Odoo into your system: understanding how your business runs, configuring the applications around those processes, moving your existing data across, connecting the systems you rely on, and preparing your people to use it.",
    "It runs from an initial discovery conversation through go-live and beyond, into ongoing support.",
  ],
  partnerTitle: "What ETripleSoft does",
  partner: [
    "Leads discovery and documents requirements and scope",
    "Designs the solution and configures Odoo, using standard functionality first",
    "Migrates and validates data with your key users",
    "Plans, activates and verifies integrations",
    "Tests, trains your team and manages the go-live",
    "Supports the system after launch",
  ],
  clientTitle: "What we need from you",
  client: [
    "Access to leadership, department heads and key users",
    "Clear descriptions of current processes and pain points",
    "Timely decisions and approvals on design and customization scope",
    "Access to source data and third-party systems",
    "Key users to verify data and take part in acceptance testing",
    "Release of teams for training, and a go/no-go decision",
  ],
};

// Stage ids are stable: they drive the timeline, the anchors and the stage nav.
export type RenderedStage = Omit<Stage, "deliverables" | "duration"> & {
  deliverables: string[];
  duration?: string;
};

/** Stages with all "confirm" items removed and durations gated. */
export const visibleStages: RenderedStage[] = stages.map((stage) => ({
  ...stage,
  deliverables: stage.deliverables
    .filter((d) => d.status === "legacy")
    .map((d) => d.label),
  duration:
    SHOW_LEGACY_DURATIONS && stage.duration?.status === "legacy"
      ? stage.duration.text
      : undefined,
}));

export const stageNav = visibleStages.map(({ id, order, title }) => ({
  id,
  order,
  title,
}));

// Old site has five phases; this page shows nine stages. Configuration,
// Integration and Testing were not separate phases in the old content.
export const stageMappingNote =
  "Some stages overlap in practice. Configuration, integration and testing are shown separately here so each is easy to find.";

export const timeline = {
  eyebrow: "Typical timeline",
  title: "The order of work, and what shapes it",
  description:
    "Stages follow a logical order, but they are not strictly one after another. Some run alongside each other.",
  overlaps: [
    "Data audit and migration preparation can begin during discovery and continue alongside configuration.",
    "Integrations are planned in design, then activated and verified during deployment.",
    "Training is prepared while testing is under way, so users learn in the system they will use.",
  ],
  factorsTitle: "What influences how long a project takes",
  note: "Timelines are confirmed during discovery and scoping, once the scope is clear.",
};

export const midCta = {
  title: "Want to talk through your project?",
  description:
    "Tell us about your business and we will outline how an implementation could work for you.",
};

export const risks = {
  eyebrow: "Common risks",
  title: "What can go wrong, and how we plan for it",
  description:
    "Every ERP project has predictable risks. Naming them early is how they are managed.",
  items: [
    ["Unclear scope", "Requirements, module scope and a phased roadmap are documented in discovery and agreed before design begins."],
    ["Poor data quality", "Data is audited early, cleansed before loading, and validated against source in a test environment before the final migration."],
    ["Low user adoption", "Role-based training in your own system, plus super users who support their colleagues after go-live."],
    ["Over-customization", "Standard Odoo functionality comes first. Custom development is specified only where a requirement is not covered."],
    ["Too many integrations at once", "Connections are planned in design, and each one is verified before go-live."],
    ["Unavailable stakeholders", "Resource needs are set out in the roadmap, and key users and decision-makers are identified up front."],
    ["Inadequate testing", "Functional, integration and performance testing, followed by user acceptance testing with sign-off."],
    ["Weak change management", "Training, documentation and an intensive hypercare period after go-live help the change take hold."],
  ] as const,
};

export const regional = {
  eyebrow: "Regional considerations",
  title: "Implementation across Egypt, the UAE and Saudi Arabia",
  description:
    "Regional requirements are scoped in discovery and built into configuration. This is a summary; the full regional detail sits on the Odoo overview.",
  // Reuse the /odoo localization bullets so both pages stay consistent.
  countries: localization.countries,
  // Legacy: Egypt e-invoicing connection is activated at go-live.
  egyptNote:
    legacyRegional.egypt.status === "legacy"
      ? "For Egypt, the connection to ETA e-invoicing is activated at go-live."
      : undefined,
  note: "Requirements change and differ by business. We confirm the current scope with you during discovery.",
};

export const faqs = [
  [
    "What does a typical Odoo project involve?",
    "It moves through discovery, solution design, configuration, data migration, integration, testing, training, go-live and support. Scope and the exact plan depend on your business and are agreed after discovery.",
  ],
  [
    "Who from our side is involved?",
    "Leadership and department heads help set direction in discovery, key users verify data and take part in acceptance testing, and super users you nominate support colleagues after go-live. Your team also makes design and customization decisions along the way.",
  ],
  [
    "How is our data migrated?",
    "We extract data from your existing systems, cleanse it, and map it to Odoo fields. It is loaded into a test environment and validated against the source, your key users verify it, and the final migration is timed to a planned cutover.",
  ],
  [
    "Can we go live in phases?",
    "The go-live approach, including whether to phase it, is agreed during discovery and scoping, based on your modules, teams and risks.",
  ],
  [
    "How is training handled?",
    "Training is role-based, because a warehouse, finance or sales user needs different things. Sessions use your own system with your real products, customers and workflows, backed by documentation and super users.",
  ],
  [
    "What happens after go-live?",
    "An intensive hypercare period follows go-live, with fast responses to issues. After that we offer ongoing optimization and structured support across functional, technical, development and training needs. Support arrangements are agreed with your team.",
  ],
  [
    "Can you customize Odoo?",
    "Yes, where standard functionality does not cover a requirement. We configure standard Odoo first and specify any custom development in the design stage, so customization stays deliberate.",
  ],
  [
    "What affects how long an implementation takes?",
    "Mainly scope and number of modules, data quality and volume, the number and complexity of integrations, localization and compliance needs, the level of customization, and how available your team is and how quickly decisions are made.",
  ],
] as const;

export const related = {
  title: "Related Odoo pages",
  overview: { label: "Odoo ERP overview", href: "/odoo" },
  regionalLink: { label: "Regional localization on the Odoo overview", href: "/odoo#localization" },
  siblingKeys: ["accounting", "hr", "itsm-helpdesk", "dashboard-insights"],
};

export const closing = {
  title: "Ready to plan your Odoo implementation?",
  description:
    "Book a consultation and we will talk through your processes, scope and next steps.",
  secondary: { label: "Explore Solutions", href: "/services" },
};
