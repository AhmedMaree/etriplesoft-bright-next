/**
 * OdooSolutions — "Our Odoo Solutions" section.
 *
 * Grid: 2 large cards (top row) + 4 small cards (bottom row).
 * Illustrations are inline SVGs — replace the function body with
 * <Image src="…" alt="…" fill /> to swap to a real asset in one line.
 *
 * No new dependencies. Icons from the lucide-react already used in the project.
 */
"use client";

import Link from "next/link";
import type { FC, ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Box,
  CheckSquare,
  Headphones,
  Settings2,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import s from "./OdooSolutions.module.css";

// ─── Inline SVG illustrations ────────────────────────────────────────────────
// Each is a standalone function so callers can swap to <Image> in one line.

/** Manufacturing: isometric conveyor belt with boxes + robotic arm (blue family). */
function ManufacturingIllustration() {
  return (
    <svg
      viewBox="0 0 280 190"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Belt base */}
      <rect x="20" y="130" width="220" height="28" rx="8" fill="#bfdbfe" />
      <rect x="32" y="134" width="196" height="20" rx="5" fill="#dbeafe" />
      {/* Belt rollers */}
      <circle cx="36" cy="144" r="8" fill="#93c5fd" />
      <circle cx="244" cy="144" r="8" fill="#93c5fd" />
      {/* Box 1 */}
      <rect x="50" y="100" width="36" height="32" rx="5" fill="#3b82f6" />
      <rect x="50" y="100" width="36" height="10" rx="5" fill="#2563eb" />
      <line x1="68" y1="110" x2="68" y2="132" stroke="#bfdbfe" strokeWidth="1.5" />
      <line x1="50" y1="118" x2="86" y2="118" stroke="#bfdbfe" strokeWidth="1.5" />
      {/* Box 2 */}
      <rect x="104" y="107" width="30" height="25" rx="4" fill="#60a5fa" />
      <rect x="104" y="107" width="30" height="8" rx="4" fill="#3b82f6" />
      <line x1="119" y1="115" x2="119" y2="132" stroke="#dbeafe" strokeWidth="1.5" />
      {/* Robotic arm column */}
      <rect x="198" y="52" width="12" height="80" rx="5" fill="#93c5fd" />
      {/* Arm horizontal */}
      <rect x="152" y="52" width="58" height="12" rx="5" fill="#60a5fa" />
      {/* Arm joint */}
      <circle cx="204" cy="58" r="8" fill="#3b82f6" />
      {/* Arm vertical drop */}
      <rect x="196" y="60" width="16" height="46" rx="4" fill="#93c5fd" />
      {/* Gripper */}
      <rect x="188" y="102" width="32" height="8" rx="3" fill="#2563eb" />
      <rect x="186" y="108" width="6" height="14" rx="3" fill="#2563eb" />
      <rect x="212" y="108" width="6" height="14" rx="3" fill="#2563eb" />
      {/* Glow accent */}
      <ellipse cx="204" cy="160" rx="44" ry="10" fill="#bfdbfe" opacity="0.5" />
    </svg>
  );
}

/** Inventory & Purchasing: warehouse shelves, boxes, clipboard checklist (teal family). */
function InventoryIllustration() {
  return (
    <svg
      viewBox="0 0 280 190"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Warehouse back wall */}
      <rect x="18" y="60" width="160" height="110" rx="6" fill="#ccfbf1" />
      {/* Shelf uprights */}
      <rect x="28" y="70" width="8" height="90" rx="3" fill="#5eead4" />
      <rect x="88" y="70" width="8" height="90" rx="3" fill="#5eead4" />
      <rect x="148" y="70" width="8" height="90" rx="3" fill="#5eead4" />
      {/* Shelf levels */}
      <rect x="28" y="100" width="128" height="7" rx="2" fill="#2dd4bf" />
      <rect x="28" y="130" width="128" height="7" rx="2" fill="#2dd4bf" />
      <rect x="28" y="160" width="128" height="7" rx="2" fill="#2dd4bf" />
      {/* Boxes row 1 */}
      <rect x="36" y="78" width="26" height="22" rx="3" fill="#0d9488" />
      <rect x="36" y="78" width="26" height="7" rx="3" fill="#0f766e" />
      <rect x="68" y="82" width="22" height="18" rx="3" fill="#14b8a6" />
      <rect x="96" y="80" width="24" height="20" rx="3" fill="#0d9488" />
      {/* Boxes row 2 */}
      <rect x="36" y="108" width="20" height="22" rx="3" fill="#14b8a6" />
      <rect x="62" y="110" width="28" height="20" rx="3" fill="#0d9488" />
      <rect x="96" y="109" width="22" height="21" rx="3" fill="#14b8a6" />
      {/* Clipboard */}
      <rect x="196" y="58" width="66" height="90" rx="8" fill="#fff" stroke="#ccfbf1" strokeWidth="1.5" />
      <rect x="210" y="50" width="38" height="18" rx="5" fill="#5eead4" />
      {/* Checklist lines */}
      <rect x="206" y="82" width="8" height="8" rx="2" fill="#0d9488" />
      <rect x="220" y="84" width="30" height="4" rx="2" fill="#ccfbf1" />
      <rect x="206" y="98" width="8" height="8" rx="2" fill="#0d9488" />
      <rect x="220" y="100" width="24" height="4" rx="2" fill="#ccfbf1" />
      <rect x="206" y="114" width="8" height="8" rx="2" fill="#2dd4bf" />
      <rect x="220" y="116" width="28" height="4" rx="2" fill="#ccfbf1" />
      {/* Check marks */}
      <path d="M207.5 85.5 l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M207.5 101.5 l2.5 2.5 4-4" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Shadow */}
      <ellipse cx="120" cy="178" rx="90" ry="9" fill="#99f6e4" opacity="0.45" />
    </svg>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

type Tint = "tintBlue" | "tintMint" | "tintViolet" | "tintGreen" | "tintSky" | "tintOrange";
type CardSize = "large" | "small";

type SolutionCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tint: Tint;
  size: CardSize;
  illustration?: FC;
};

const solutions: SolutionCard[] = [
  {
    title: "Manufacturing",
    description:
      "Streamline production, manage work orders and track costs in real time.",
    href: "#", // TODO: replace with manufacturing route
    icon: Settings2,
    tint: "tintBlue",
    size: "large",
    illustration: ManufacturingIllustration,
  },
  {
    title: "Inventory & Purchasing",
    description:
      "Keep track of your stock, suppliers and warehouses with complete visibility.",
    href: "#", // TODO: replace with inventory route
    icon: Box,
    tint: "tintMint",
    size: "large",
    illustration: InventoryIllustration,
  },
  {
    title: "CRM",
    description: "Turn leads into loyal customers with a smarter sales process.",
    href: "#", // TODO: replace with CRM route
    icon: Users,
    tint: "tintViolet",
    size: "small",
  },
  {
    title: "Sales",
    description: "Manage quotations, orders and invoicing with ease.",
    href: "#", // TODO: replace with sales route
    icon: BarChart3,
    tint: "tintGreen",
    size: "small",
  },
  {
    title: "Projects",
    description: "Deliver projects on time and within budget.",
    href: "#", // TODO: replace with projects route
    icon: CheckSquare,
    tint: "tintSky",
    size: "small",
  },
  {
    title: "ITSM & Helpdesk",
    description: "Manage support requests and improve customer service.",
    href: "#", // TODO: replace with ITSM route
    icon: Headphones,
    tint: "tintOrange",
    size: "small",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function LearnMore({ href }: { href: string }) {
  return (
    <Link href={href} className={s.learnMore}>
      Learn more
      {/* Arrow-right inline SVG — no extra import, matches existing ArrowRight usage */}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

function LargeCard({ card }: { card: SolutionCard }) {
  const Icon = card.icon;
  const Illustration = card.illustration;
  return (
    <article className={`${s.card} ${s.cardLarge} ${s[card.tint]}`}>
      <div className={s.iconTileLarge} aria-hidden="true">
        <Icon />
      </div>
      <div className={s.textBlock}>
        <h3 className={s.cardTitleLarge}>{card.title}</h3>
        <p className={s.cardDesc}>{card.description}</p>
        <LearnMore href={card.href} />
      </div>
      {Illustration && (
        <div className={s.illustration} aria-hidden="true">
          <Illustration />
        </div>
      )}
    </article>
  );
}

function SmallCard({ card }: { card: SolutionCard }) {
  const Icon = card.icon;
  return (
    <article className={`${s.card} ${s.cardSmall} ${s[card.tint]}`}>
      <div className={s.iconTileSmall} aria-hidden="true">
        <Icon />
      </div>
      <div className={s.textBlockSmall}>
        <h3 className={s.cardTitleSmall}>{card.title}</h3>
        <p className={s.cardDescSmall}>{card.description}</p>
        <LearnMore href={card.href} />
      </div>
    </article>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function OdooSolutions() {
  const large = solutions.filter((c) => c.size === "large");
  const small = solutions.filter((c) => c.size === "small");

  return (
    <section
      className={s.section}
      id="solutions"
      aria-labelledby="odoo-solutions-title"
    >
      <div className={s.wrapper}>
        {/* ── Header ── */}
        <header className={s.header}>
          <div className={s.eyebrowRow}>
            <span className={s.eyebrow}>Our Odoo Solutions</span>
            <span className={s.eyebrowLine} aria-hidden="true" />
          </div>
          <h2 id="odoo-solutions-title" className={s.title}>
            Powerful Modules for a{" "}
            <span className={s.titleGradient}>Connected Business</span>
          </h2>
          <p className={s.subtitle}>
            Start with the modules you need and scale as you grow. All fully
            integrated in one platform.
          </p>
        </header>

        {/* ── Grid ── */}
        <div className={s.grid}>
          {/* Row 1 — 2 large cards */}
          <div className={s.rowLarge}>
            {large.map((card) => (
              <LargeCard key={card.title} card={card} />
            ))}
          </div>

          {/* Row 2 — 4 small cards */}
          <div className={s.rowSmall}>
            {small.map((card) => (
              <SmallCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
