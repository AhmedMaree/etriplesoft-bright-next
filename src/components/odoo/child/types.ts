// Typed config for the shared Odoo child-page template. Each /odoo/<topic>
// page supplies one OdooChildPageConfig; no page renders its own section JSX.

export type Status = "legacy" | "confirm";

/** Link to another Odoo topic page, resolved through src/lib/odoo-pages.ts. */
export type PageLink = { key: string; text: string };

export type Hero = {
  eyebrow: string;
  title: string;
  description: string;
  highlight?: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  /** Max width of the H1, in ch. */
  titleMaxCh?: number;
};

export type Module = {
  id: string;
  title: string;
  intro?: string;
  items?: string[];
  /** Named sub-groups, each with its own bullets (used by `rows`). */
  entries?: { name: string; points: string[] }[];
  link?: PageLink;
};

export type Step = { title: string; text: string };

export type Block =
  | { type: "body"; paragraphs: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "note"; text: string }
  | { type: "columns"; modules: Module[] }
  | { type: "rows"; modules: Module[] }
  | {
      type: "flow";
      id?: string;
      eyebrow?: string;
      title?: string;
      intro?: string;
      steps: Step[];
      /** 4 = single horizontal row with connectors on desktop; 3 = wrapped grid. */
      columns?: 3 | 4;
      panel?: boolean;
      callout?: string;
      note?: string;
      ariaLabel: string;
    }
  | {
      type: "cards";
      columns: 2 | 3;
      items: { title: string; text?: string; items?: string[] }[];
    }
  | {
      type: "callouts";
      label: string;
      items: [title: string, text: string][];
    }
  | {
      type: "links";
      items: { text: string; href?: string; pageKey?: string; ariaLabel?: string }[];
    }
  | { type: "list"; items: { text: string; link?: PageLink }[] }
  | {
      type: "timeline";
      sequence: { id: string; order: number; title: string }[];
      left: { title: string; items: string[] };
      right: { title: string; items: string[] };
      note: string;
    }
  | {
      type: "stages";
      stages: {
        id: string;
        order: number;
        title: string;
        summary: string;
        whatHappens: string[];
        clientContributes: string[];
        deliverables: string[];
        duration?: string;
      }[];
      supportTiers: { name: string; text: string }[];
    };

export type Section =
  | {
      type: "intro";
      eyebrow: string;
      title: string;
      paragraphs: string[];
      lists: { title: string; items: string[] }[];
    }
  | {
      type: "section";
      id?: string;
      tone?: "plain" | "tinted" | "pale";
      eyebrow?: string;
      title: string;
      description?: string;
      blocks: Block[];
    }
  | { type: "midCta"; title: string; description: string }
  | {
      type: "strip";
      title: string;
      description: string;
      link: { text: string; href: string; ariaLabel: string };
    }
  | { type: "faq"; id?: string; title: string; items: readonly (readonly [string, string])[] }
  | {
      type: "related";
      title: string;
      links: { text?: string; href?: string; pageKey?: string; ariaLabel?: string }[];
    };

export type OdooChildPageConfig = {
  /** Route, e.g. "/odoo/accounting". Also the canonical URL. */
  path: string;
  metadata: { title: string; description: string };
  breadcrumbLabel: string;
  hero: Hero;
  /** Optional chip navigation under the hero. */
  anchors?: readonly (readonly [label: string, href: string])[];
  sections: Section[];
  closing: {
    title: string;
    description: string;
    secondary: { label: string; href: string };
  };
};
