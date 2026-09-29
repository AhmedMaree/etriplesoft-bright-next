// Legal documents are migrated text, not marketing copy. Do not reword clauses
// here without owner/legal approval (see docs/PHASES-18-20-AUDIT.md).
//
// Inline markup in strings: **bold**, [label](href), {{websiteUrl}}.

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type LegalSection = {
  id: string;
  title: string;
  /** Heading level: 2 (default, listed in the contents), 3 or 4. */
  level?: 2 | 3 | 4;
  blocks?: LegalBlock[];
};

export type LegalDocument = {
  title: string;
  metaDescription: string;
  path: "/privacy" | "/terms";
  intro: LegalBlock[];
  sections: LegalSection[];
  contactLead: string;
  /** The other legal page, linked from the foot of this one. */
  related: { label: string; href: string };
};
