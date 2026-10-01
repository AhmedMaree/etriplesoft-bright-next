import Link from "next/link";
import Image from "next/image";
import { Caveat } from "next/font/google";
import {
  ArrowRight,
  BarChart3,
  Box,
  Settings,
  Factory,
  FolderKanban,
  ListChecks,
  Receipt,
  Share2,
  ShoppingCart,
  Users,
  type LucideIcon,
} from "lucide-react";
import styles from "./home.module.css";

const caveat = Caveat({ subsets: ["latin"], weight: "400", display: "swap" });

const service = (name: string) =>
  `/contact?service=${encodeURIComponent("Odoo " + name)}`;

type Tone = "blue" | "teal" | "violet" | "amber";

const apps: {
  name: string;
  copy: string;
  href: string;
  icon: LucideIcon;
  tone: Tone;
  motif: "bars" | "spark" | "invoice" | "boxes" | "factory" | "checks" | "people";
}[] = [
  { name: "Sales", copy: "Quotes, orders and pipeline in one flow.", href: service("Sales"), icon: ShoppingCart, tone: "blue", motif: "bars" },
  { name: "CRM", copy: "Track every lead from first touch to close.", href: service("CRM"), icon: BarChart3, tone: "teal", motif: "spark" },
  { name: "Accounting", copy: "Books, tax and e-invoicing without re-keying.", href: "/odoo/accounting", icon: Receipt, tone: "violet", motif: "invoice" },
  { name: "Inventory", copy: "Stock, warehouses and deliveries in real time.", href: service("Inventory"), icon: Box, tone: "amber", motif: "boxes" },
  { name: "Manufacturing", copy: "Bills of materials, work orders and costing.", href: service("Manufacturing"), icon: Factory, tone: "blue", motif: "factory" },
  { name: "Projects", copy: "Plan work, log time and bill it accurately.", href: service("Projects"), icon: FolderKanban, tone: "teal", motif: "checks" },
  { name: "HR & Payroll", copy: "People records, attendance and payroll.", href: service("HR & Payroll"), icon: Users, tone: "violet", motif: "people" },
];

function Motif({ kind }: { kind: (typeof apps)[number]["motif"] }) {
  switch (kind) {
    case "bars":
      return (
        <svg viewBox="0 0 84 64" aria-hidden="true">
          <rect x="6" y="36" width="15" height="22" rx="3" fill="currentColor" opacity="0.16" />
          <rect x="28" y="26" width="15" height="32" rx="3" fill="currentColor" opacity="0.22" />
          <rect x="50" y="14" width="15" height="44" rx="3" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 84 64" aria-hidden="true">
          <path
            d="M4 52 C18 50 24 32 36 34 C48 36 52 20 64 16 L78 8 L78 58 L4 58 Z"
            fill="currentColor"
            opacity="0.12"
          />
          <path
            d="M4 52 C18 50 24 32 36 34 C48 36 52 20 64 16 L78 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="78" cy="8" r="3.5" fill="currentColor" opacity="0.55" />
        </svg>
      );
    case "invoice":
      return (
        <svg viewBox="0 0 84 64" aria-hidden="true">
          <rect x="34" y="4" width="44" height="56" rx="7" fill="currentColor" opacity="0.12" />
          <rect x="42" y="14" width="12" height="12" rx="2.5" fill="currentColor" opacity="0.3" />
          <rect x="58" y="16" width="12" height="4" rx="2" fill="currentColor" opacity="0.3" />
          <rect x="58" y="23" width="9" height="3.4" rx="1.7" fill="currentColor" opacity="0.22" />
          <rect x="42" y="34" width="28" height="4" rx="2" fill="currentColor" opacity="0.25" />
          <rect x="42" y="42" width="22" height="4" rx="2" fill="currentColor" opacity="0.2" />
          <rect x="42" y="50" width="16" height="4" rx="2" fill="currentColor" opacity="0.16" />
        </svg>
      );
    case "boxes":
      return (
        <svg viewBox="0 0 84 64" aria-hidden="true">
          <rect x="8" y="38" width="24" height="20" rx="3" fill="currentColor" opacity="0.18" />
          <rect x="36" y="38" width="24" height="20" rx="3" fill="currentColor" opacity="0.24" />
          <rect x="22" y="14" width="24" height="20" rx="3" fill="currentColor" opacity="0.3" />
        </svg>
      );
    case "factory":
      return <Settings size={88} fill="currentColor" strokeWidth={1} aria-hidden="true" />;
    case "checks":
      return <ListChecks size={58} strokeWidth={1.4} aria-hidden="true" />;
    case "people":
      return <Users size={58} strokeWidth={1.4} aria-hidden="true" />;
  }
}

function AppCard({
  name,
  copy,
  href,
  icon: AppIcon,
  tone,
  motif,
}: (typeof apps)[number]) {
  return (
    <li className={`${styles.app} ${styles[tone]}`}>
      <span className={styles.appIcon} aria-hidden="true">
        <AppIcon size={24} />
      </span>
      <h3>
        <Link href={href} className={styles.appLink}>
          {name}
        </Link>
      </h3>
      <p>{copy}</p>
      <div className={styles.appFoot}>
        <span className={styles.go} aria-hidden="true">
          <ArrowRight size={18} />
        </span>
        <span className={styles.motif} aria-hidden="true">
          <Motif kind={motif} />
        </span>
      </div>
    </li>
  );
}

const chips: { icon: LucideIcon; tone: Tone; label: string; className: string }[] = [
  { icon: ShoppingCart, tone: "blue", label: "Sales", className: "chipCart" },
  { icon: BarChart3, tone: "teal", label: "Reporting", className: "chipChart" },
  { icon: Users, tone: "violet", label: "People", className: "chipPeople" },
  { icon: Share2, tone: "amber", label: "Connected", className: "chipNodes" },
];

export function OdooAppsGrid({
  pill = "Odoo ERP",
  title = (
    <>
      All your business
      <br />
      apps, <em>working</em>
      <br />
      <em>together</em>
    </>
  ),
  description = "Start with the app that solves today's bottleneck and add the rest as you grow — they already share the same data.",
  ctaLabel = "Explore all apps",
  ctaHref = "/odoo",
  visualNote = (
    <>
      One platform
      <br />
      Endless possibilities
    </>
  ),
  visualCaption = "One Database • Connected Apps • Real-time Data",
  appsList,
  chipsList,
}: {
  pill?: string;
  title?: React.ReactNode;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  visualNote?: React.ReactNode;
  visualCaption?: string;
  appsList?: {
    name: string;
    copy: string;
    href: string;
    icon?: LucideIcon;
    tone?: Tone;
    motif?: "bars" | "spark" | "invoice" | "boxes" | "factory" | "checks" | "people";
  }[];
  chipsList?: { icon?: LucideIcon; tone?: Tone; label: string; className?: string }[];
}) {
  const displayApps = appsList
    ? appsList.map((app, i) => ({
        ...apps[i % apps.length],
        ...app,
        icon: app.icon || apps[i % apps.length].icon,
        tone: app.tone || apps[i % apps.length].tone,
        motif: app.motif || apps[i % apps.length].motif,
      }))
    : apps;

  const displayChips = chipsList
    ? chipsList.map((chip, i) => ({
        ...chips[i % chips.length],
        ...chip,
        icon: chip.icon || chips[i % chips.length].icon,
        tone: chip.tone || chips[i % chips.length].tone,
        className: chip.className || chips[i % chips.length].className,
      }))
    : chips;

  return (
    <section className={styles.apps} aria-labelledby="odoo-apps-heading">
      <div className="container">
        <div className={styles.appsLayout}>
          <div className={styles.intro}>
            <span className={styles.pill}>
              <i aria-hidden="true" />
              {pill}
            </span>
            <h2 id="odoo-apps-heading">{title}</h2>
            <p>{description}</p>
            <Link className={styles.introCta} href={ctaHref}>
              {ctaLabel} <ArrowRight size={17} aria-hidden="true" />
            </Link>
            <div className={styles.visual} aria-hidden="true">
              <svg className={styles.visualDots} viewBox="0 0 320 300" focusable="false">
                <path
                  d="M-10 220 C60 200 40 140 110 130 C180 120 170 60 250 50"
                  fill="none"
                  stroke="#c9d5f2"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                />
                <path
                  d="M230 300 C240 250 290 240 330 200"
                  fill="none"
                  stroke="#c9d5f2"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                />
              </svg>
              <div className={styles.platform} />
              <div className={styles.odooBadge}><Image src="/images/odoo-wordmark.png" alt="" width={108} height={40} /></div>
              {displayChips.map(({ icon: ChipIcon, tone, label, className }) => (
                <span
                  key={label}
                  className={`${styles.chip} ${styles[tone]} ${styles[className]}`}
                  title={label}
                >
                  <ChipIcon size={24} />
                </span>
              ))}
              <p className={`${styles.visualNote} ${caveat.className}`}>
                {visualNote}
              </p>
              <svg className={styles.visualArrow} viewBox="0 0 48 48" focusable="false">
                <path
                  d="M36 6 C34 20 26 30 12 34 M12 34 l10 -2 M12 34 l3 -10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className={styles.visualCaption}>
                {visualCaption}
              </p>
            </div>
          </div>
          <div className={styles.cards}>
            <ul className={styles.cardsTop}>
              {displayApps.slice(0, 3).map((app) => (
                <AppCard key={app.name} {...app} />
              ))}
            </ul>
            <ul className={styles.cardsBottom}>
              {displayApps.slice(3).map((app) => (
                <AppCard key={app.name} {...app} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
