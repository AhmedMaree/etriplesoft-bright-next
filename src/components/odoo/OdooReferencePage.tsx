import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle,
  ChevronDown,
  ChartNoAxesCombined,
  Coins,
  Database,
  GraduationCap,
  HardHat,
  Headphones,
  HeartPulse,
  Home,
  Network,
  Rocket,
  Settings,
  ShieldCheck,
  Star,
  UtensilsCrossed,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { company } from "@/lib/company";
import {
  odooCapabilityPages,
  odooPageByKey,
  odooPageHref,
  type OdooRelatedPage,
} from "@/lib/odoo-pages";
import {
  closing,
  einvoicing,
  faqs,
  implementation as implementationContent,
  industries as industryContent,
  integrations,
  localization,
  midCta,
  partner,
  related,
} from "./content";
import styles from "./OdooReferencePage.module.css";
import hub from "./OdooHub.module.css";
import OdooSectionNav from "./OdooSectionNav";
import OdooPageHero from "./OdooPageHero";
import OdooOutcomes from "./OdooOutcomes";
import OdooSolutions from "./OdooSolutions";

const glyphs = {
  network: Network,
  coins: Coins,
  chart: ChartNoAxesCombined,
  check: CheckCircle,
  rocket: Rocket,
  settings: Settings,
  users: Users,
  headphones: Headphones,
  "hard-hat": HardHat,
  building: Building2,
  wrench: Wrench,
  utensils: UtensilsCrossed,
  graduation: GraduationCap,
} as const;
type Glyph = keyof typeof glyphs;
function GlyphIcon({ name }: { name: string }) {
  const Component = glyphs[name as Glyph] ?? Settings;
  return (
    <span className={hub.glyph} aria-hidden="true">
      <Component />
    </span>
  );
}

const base = "/images/odoo/reference/";
const demoHref = "/book-consultation";
const steps = [
  [
    "Discovery",
    "Understand your business needs, goals and challenges.",
    "discovery",
  ],
  [
    "Solution Design",
    "Plan and customize your Odoo solution to fit your processes.",
    "design",
  ],
  [
    "Implementation",
    "Configure, develop and migrate data with minimal disruption.",
    "implementation",
  ],
  [
    "Training",
    "Empower your team with practical training for success.",
    "training",
  ],
  [
    "Go Live",
    "Launch and ensure a smooth transition to your live system.",
    "launch",
  ],
  [
    "Ongoing Support",
    "Continuous support and improvements to help you grow.",
    "ongoing",
  ],
];
type WhyCardTint = "whyBlue" | "whyViolet";
type WhyCardDecoration = "wave" | "cairo" | "growth";

type WhyCard = {
  number: string;
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tint: WhyCardTint;
  decoration: WhyCardDecoration;
};

type WhyTrustItem = {
  title: string;
  caption: string;
  icon: LucideIcon;
};

const cairoCity =
  company.offices.find((office) => office.id === "egypt")?.city ?? "Cairo";

const whyCards: WhyCard[] = [
  {
    number: "01",
    title: "Customization & Integration",
    description:
      "Tailor Odoo to fit your unique business processes. Integrate with your existing systems and third-party tools seamlessly.",
    // TODO: Replace this placeholder when the final route is provided.
    href: "#",
    icon: Settings,
    tint: "whyBlue",
    decoration: "wave",
  },
  {
    number: "02",
    title: "Local Support in Egypt",
    // TODO: Confirm the Arabic and English support claim with the business owner.
    description: `Our ${cairoCity}-based team provides on-site and remote support, training, and consultation in Arabic and English.`,
    // TODO: Replace this placeholder when the final route is provided.
    href: "#",
    icon: Headphones,
    tint: "whyViolet",
    decoration: "cairo",
  },
  {
    number: "03",
    title: "Ongoing Growth",
    description:
      "We stay with you beyond go-live. Continuous support, upgrades, and new features to help your business grow.",
    // TODO: Replace this placeholder when the final route is provided.
    href: "#",
    icon: BarChart3,
    tint: "whyBlue",
    decoration: "growth",
  },
];

const whyTrustItems: WhyTrustItem[] = [
  { title: "Local Expertise", caption: "In Egypt", icon: Star },
  {
    title: "Long-Term Partnership",
    caption: "Beyond Go-Live",
    icon: Users,
  },
  { title: "Proven Results", caption: "Across Industries", icon: ShieldCheck },
];

function WhyCardArtwork({ kind }: { kind: WhyCardDecoration }) {
  if (kind === "wave") {
    return (
      <svg viewBox="0 0 270 150" aria-hidden="true">
        <path d="M-8 126C41 84 85 143 136 104C178 72 203 53 278 72V158H-8Z" />
        <path d="M-8 143C50 112 99 153 151 125C194 101 225 91 278 105V158H-8Z" />
      </svg>
    );
  }

  if (kind === "cairo") {
    return (
      <svg viewBox="0 0 300 170" aria-hidden="true">
        <path d="m42 158 62-58 34 58Z" />
        <path d="m91 158 75-82 71 82Z" />
        <path d="m169 158 39-48 52 48Z" />
        <path d="M225 158V61h7V40l5-20 5 20v21h7v97Z" />
        <path d="M10 159c62-23 145-22 281 0" fill="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 270 170" aria-hidden="true">
      <rect x="114" y="119" width="30" height="43" rx="7" />
      <rect x="158" y="92" width="30" height="70" rx="7" />
      <rect x="202" y="65" width="30" height="97" rx="7" />
      <path d="M92 103c56-13 99-39 141-82" fill="none" />
      <path d="m211 24 28-10-8 29" fill="none" />
    </svg>
  );
}
function Asset({
  name,
  className = "",
  alt = "",
}: {
  name: string;
  className?: string;
  alt?: string;
}) {
  return (
    <img
      className={className}
      src={
        name === "professional"
          ? "/images/professional.webp"
          : `${base}${name}.webp`
      }
      alt={alt}
      loading="lazy"
    />
  );
}
function DemoButton({ secondary = false }: { secondary?: boolean }) {
  return (
    <Link
      className={`${styles.button} ${secondary ? styles.secondary : ""}`}
      href={secondary ? "/services" : demoHref}
    >
      {secondary ? "Explore Solutions" : "Book a Free Consultation"}
      {!secondary && <ArrowRight aria-hidden="true" />}
    </Link>
  );
}
/** Link to a related Odoo topic page (or its consultation fallback). */
function TopicLink({
  page,
  children = "Learn more",
}: {
  page: OdooRelatedPage;
  children?: React.ReactNode;
}) {
  return (
    <Link
      className={styles.learnMore}
      href={odooPageHref(page)}
      aria-label={`${children} about Odoo ${page.label}`}
    >
      {children} <ArrowRight aria-hidden="true" />
    </Link>
  );
}
function PartnerBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`${hub.trust} ${className}`}>
      <Image
        src={partner.badge.src}
        width={partner.badge.width}
        height={partner.badge.height}
        alt={partner.badge.alt}
        sizes="120px"
      />
      <p>{partner.statement}</p>
    </div>
  );
}
function MidCta() {
  return (
    <section className={hub.midCta} aria-labelledby="odoo-mid-cta">
      <div className={`${styles.container} ${hub.midCtaInner}`}>
        <div>
          <h2 id="odoo-mid-cta">{midCta.title}</h2>
          <p>{midCta.description}</p>
        </div>
        <div className={`${styles.actions} ${hub.wrapActions}`}>
          <DemoButton />
          <DemoButton secondary />
        </div>
      </div>
    </section>
  );
}
function Checks({ items }: { items: string[] }) {
  return (
    <ul className={styles.checks}>
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

type ModuleTint = "implementation" | "accounting" | "hr" | "itsm" | "dashboard";

type ModuleCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tint: ModuleTint;
  illustration: () => ReactNode;
};

function ImplementationIllustration() {
  return (
    <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
      <rect
        className={styles.illustrationPanel}
        x="26"
        y="16"
        width="178"
        height="144"
        rx="17"
      />
      <circle className={styles.illustrationAccent} cx="53" cy="52" r="10" />
      <path className={styles.illustrationTick} d="m49 52 3 3 6-7" />
      <rect
        className={styles.illustrationLine}
        x="73"
        y="45"
        width="83"
        height="10"
        rx="5"
      />
      <circle className={styles.illustrationAccent} cx="53" cy="82" r="10" />
      <path className={styles.illustrationTick} d="m49 82 3 3 6-7" />
      <rect
        className={styles.illustrationLine}
        x="73"
        y="75"
        width="101"
        height="10"
        rx="5"
      />
      <circle className={styles.illustrationAccent} cx="53" cy="112" r="10" />
      <path className={styles.illustrationTick} d="m49 112 3 3 6-7" />
      <rect
        className={styles.illustrationLine}
        x="73"
        y="105"
        width="66"
        height="10"
        rx="5"
      />
      <circle className={styles.illustrationBadge} cx="198" cy="145" r="27" />
      <path
        className={styles.illustrationRocket}
        d="M188 148c10-1 18-9 19-19-10 1-18 9-19 19Zm2-5-7 7m11-14 7-7m-16 19-4 1 1-4"
      />
    </svg>
  );
}

function AccountingIllustration() {
  return (
    <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
      <rect
        className={styles.illustrationPanel}
        x="45"
        y="17"
        width="164"
        height="150"
        rx="17"
      />
      <rect
        className={styles.illustrationAccentSoft}
        x="65"
        y="43"
        width="82"
        height="10"
        rx="5"
      />
      <rect
        className={styles.illustrationLine}
        x="65"
        y="72"
        width="119"
        height="9"
        rx="4.5"
      />
      <rect
        className={styles.illustrationLine}
        x="65"
        y="91"
        width="92"
        height="9"
        rx="4.5"
      />
      <rect
        className={styles.illustrationLine}
        x="65"
        y="110"
        width="106"
        height="9"
        rx="4.5"
      />
      <rect
        className={styles.illustrationAccent}
        x="165"
        y="104"
        width="10"
        height="28"
        rx="5"
      />
      <rect
        className={styles.illustrationAccent}
        x="181"
        y="91"
        width="10"
        height="41"
        rx="5"
      />
      <circle className={styles.illustrationBadge} cx="187" cy="143" r="28" />
      <path
        className={styles.illustrationDollar}
        d="M187 129v28m10-23c-2-2-5-3-9-3-5 0-8 2-8 6 0 9 17 4 17 13 0 4-4 7-9 7-4 0-8-1-10-4"
      />
    </svg>
  );
}

function HrIllustration() {
  return (
    <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
      <rect
        className={styles.illustrationPanel}
        x="23"
        y="37"
        width="209"
        height="112"
        rx="17"
      />
      <circle
        className={styles.illustrationAccentSoft}
        cx="64"
        cy="79"
        r="28"
      />
      <circle className={styles.illustrationAccent} cx="64" cy="70" r="9" />
      <path
        className={styles.illustrationAccent}
        d="M47 97c2-11 10-16 17-16s15 5 17 16"
      />
      <rect
        className={styles.illustrationLine}
        x="105"
        y="61"
        width="86"
        height="11"
        rx="5.5"
      />
      <rect
        className={styles.illustrationLine}
        x="105"
        y="84"
        width="58"
        height="10"
        rx="5"
      />
      <rect
        className={styles.illustrationLine}
        x="43"
        y="116"
        width="34"
        height="12"
        rx="6"
      />
      <rect
        className={styles.illustrationLine}
        x="85"
        y="116"
        width="34"
        height="12"
        rx="6"
      />
      <rect
        className={styles.illustrationLine}
        x="127"
        y="116"
        width="34"
        height="12"
        rx="6"
      />
      <circle className={styles.illustrationBadge} cx="211" cy="35" r="16" />
      <path className={styles.illustrationTick} d="m204 35 5 5 9-10" />
    </svg>
  );
}

function ItsmIllustration() {
  return (
    <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
      <rect
        className={styles.illustrationPanel}
        x="33"
        y="32"
        width="196"
        height="124"
        rx="17"
      />
      <circle
        className={styles.illustrationAccentSoft}
        cx="65"
        cy="66"
        r="12"
      />
      <rect
        className={styles.illustrationLine}
        x="88"
        y="59"
        width="77"
        height="10"
        rx="5"
      />
      <rect
        className={styles.illustrationStatus}
        x="181"
        y="57"
        width="27"
        height="12"
        rx="6"
      />
      <circle
        className={styles.illustrationAccentSoft}
        cx="65"
        cy="94"
        r="12"
      />
      <rect
        className={styles.illustrationLine}
        x="88"
        y="87"
        width="64"
        height="10"
        rx="5"
      />
      <rect
        className={styles.illustrationStatus}
        x="181"
        y="85"
        width="27"
        height="12"
        rx="6"
      />
      <circle
        className={styles.illustrationAccentSoft}
        cx="65"
        cy="122"
        r="12"
      />
      <rect
        className={styles.illustrationLine}
        x="88"
        y="115"
        width="84"
        height="10"
        rx="5"
      />
      <rect
        className={styles.illustrationStatus}
        x="181"
        y="113"
        width="27"
        height="12"
        rx="6"
      />
      <circle className={styles.illustrationBadge} cx="207" cy="27" r="18" />
      <path className={styles.illustrationMinus} d="M200 27h14" />
    </svg>
  );
}

function DashboardIllustration() {
  return (
    <svg viewBox="0 0 260 190" aria-hidden="true" focusable="false">
      <rect
        className={styles.illustrationPanel}
        x="24"
        y="24"
        width="203"
        height="139"
        rx="17"
      />
      <rect
        className={styles.illustrationAccentSoft}
        x="46"
        y="45"
        width="89"
        height="10"
        rx="5"
      />
      <rect
        className={styles.illustrationLine}
        x="46"
        y="75"
        width="100"
        height="57"
        rx="9"
      />
      <rect
        className={styles.illustrationAccent}
        x="60"
        y="107"
        width="13"
        height="16"
        rx="3"
      />
      <rect
        className={styles.illustrationAccent}
        x="81"
        y="93"
        width="13"
        height="30"
        rx="3"
      />
      <rect
        className={styles.illustrationAccent}
        x="102"
        y="84"
        width="13"
        height="39"
        rx="3"
      />
      <rect
        className={styles.illustrationAccent}
        x="123"
        y="99"
        width="13"
        height="24"
        rx="3"
      />
      <circle
        className={styles.illustrationAccentSoft}
        cx="179"
        cy="103"
        r="29"
      />
      <path
        className={styles.illustrationDonut}
        d="M179 76a27 27 0 1 1-24 15"
      />
      <path className={styles.illustrationDonut} d="M179 76v27h27" />
      <rect
        className={styles.illustrationLine}
        x="157"
        y="142"
        width="43"
        height="8"
        rx="4"
      />
    </svg>
  );
}

// ─── Industry solutions cards ────────────────────────────────────────────────
type IndustryTint =
  "indBlue" | "indViolet" | "indMint" | "indPeach" | "indSky" | "indPink";

type IndustryCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tint: IndustryTint;
  image: string;
};

const industryCards: IndustryCard[] = [
  {
    title: "Construction",
    description: "Project tracking, procurement and site cost control.",
    href: "/industries/construction",
    icon: HardHat,
    tint: "indBlue",
    image: "/images/industries/construction.webp",
  },
  {
    title: "Real Estate",
    description: "Property, leasing and sales pipeline management.",
    href: "/industries/real-estate",
    icon: Home,
    tint: "indViolet",
    image: "/images/industries/real-estate.webp",
  },
  {
    title: "Facility Management",
    description: "Property, tenant and maintenance management.",
    href: "/industries/facility-management",
    icon: Settings,
    tint: "indMint",
    image: "/images/industries/facility-management.webp",
  },
  {
    title: "Restaurants",
    description: "Point of sale, ordering and kitchen operations.",
    href: "/industries/restaurants",
    icon: UtensilsCrossed,
    tint: "indPeach",
    image: "/images/industries/restaurants.webp",
  },
  {
    title: "Education",
    description: "Student records, admissions and campus operations.",
    href: "/industries/education",
    icon: GraduationCap,
    tint: "indSky",
    image: "/images/industries/education.webp",
  },
  {
    // TODO: update href to /industries/healthcare when the dedicated page exists
    title: "Healthcare",
    description: "Patient records, appointments and facility management.",
    href: "/industries",
    icon: HeartPulse,
    tint: "indPink",
    image: "/images/industries/healthcare.webp",
  },
];

function IndustryCardItem({ card }: { card: IndustryCard }) {
  const Icon = card.icon;
  return (
    <li className={`${styles.indCard} ${styles[card.tint]}`}>
      {/* Stretched-link: the <a> covers the whole card via ::after */}
      <div className={styles.indCopy}>
        <span className={styles.indIconTile} aria-hidden="true">
          <Icon />
        </span>
        <h3 className={styles.indTitle}>{card.title}</h3>
        <p className={styles.indDesc}>{card.description}</p>
        <a
          className={styles.indLink}
          href={card.href}
          aria-label={`Learn more about ${card.title}`}
        >
          Learn more <ArrowRight aria-hidden="true" />
        </a>
      </div>
      {/*
       * Photo area – rendered as a tinted gradient placeholder until the
       * image files exist. Once /images/industries/*.webp are added, swap
       * this <div> for:
       *   <Image src={card.image} alt="" fill className={styles.indPhoto} />
       * (remember to set sizes and add position:relative to indPhotoWrap)
       */}
      <div className={styles.indPhotoWrap} aria-hidden="true">
        <div className={styles.indPhotoPlaceholder} />
      </div>
    </li>
  );
}
// ─── End industry cards ───────────────────────────────────────────────────────

const moduleCards: ModuleCard[] = [
  {
    title: "Implementation",
    description:
      "From discovery to go-live and support, delivered around how your business already works.",
    href: "#", // TODO: replace with the implementation route.
    icon: Settings,
    tint: "implementation",
    illustration: ImplementationIllustration,
  },
  {
    title: "Accounting & E-Invoicing",
    description:
      "Financial operations, reporting and controls in one place, planned around local tax and e-invoicing requirements.",
    href: "#", // TODO: replace with the accounting route.
    icon: Database,
    tint: "accounting",
    illustration: AccountingIllustration,
  },
  {
    title: "HR & Payroll",
    description: "Employee records, attendance, leave and payroll workflows.",
    href: "#", // TODO: replace with the HR and payroll route.
    icon: Users,
    tint: "hr",
    illustration: HrIllustration,
  },
  {
    title: "ITSM & Helpdesk",
    description:
      "Manage support requests, assignments and service follow-up in one place.",
    href: "#", // TODO: replace with the ITSM and helpdesk route.
    icon: Headphones,
    tint: "itsm",
    illustration: ItsmIllustration,
  },
  {
    title: "Dashboard & Insights",
    description:
      "Bring operational data into dashboards and reports so teams can track what matters.",
    href: "#", // TODO: replace with the dashboard and insights route.
    icon: BarChart3,
    tint: "dashboard",
    illustration: DashboardIllustration,
  },
];

function ModuleCardItem({ module }: { module: ModuleCard }) {
  const Icon = module.icon;
  const Illustration = module.illustration;

  return (
    <li className={`${styles.moduleCard} ${styles[module.tint]}`}>
      <div className={styles.moduleCopy}>
        <span className={styles.moduleIcon} aria-hidden="true">
          <Icon />
        </span>
        <h3>{module.title}</h3>
        <p>{module.description}</p>
        <a className={styles.moduleLink} href={module.href}>
          Learn more <ArrowRight aria-hidden="true" />
        </a>
      </div>
      <div className={styles.moduleIllustration} aria-hidden="true">
        <Illustration />
      </div>
    </li>
  );
}

export default function OdooReferencePage() {
  return (
    <main id="main" className={styles.page}>
      <OdooPageHero />

      <OdooSectionNav />

      <OdooOutcomes />

      <section
        className={`${styles.section} ${styles.process}`}
        id="implementation"
        aria-labelledby="odoo-process-title"
      >
        <div className={styles.processTop}>
          <Asset
            name="process"
            className={styles.processImage}
            alt="ETripleSoft specialist implementing Odoo, with local expertise, fast implementation, tailored solutions, and long-term partnership"
          />
          <div className={styles.container}>
            <div className={styles.processCopy}>
              <span className={styles.eyebrow}>
                A proven methodology <i />
              </span>
              <h2 id="odoo-process-title">
                Our Implementation
                <br />
                <em>Process</em>
              </h2>
              <p>
                A proven, step-by-step approach to successful Odoo ERP
                implementation in Egypt. We plan, implement, and support you at
                every stage to ensure a smooth and lasting transformation.
              </p>
            </div>
          </div>
        </div>
        <ol className={`${styles.container} ${styles.steps}`}>
          {steps.map(([title, copy, asset], index) => (
            <li key={title}>
              <span className={styles.stepNumber}>{index + 1}</span>
              <Asset name={asset} className={styles.stepIcon} />
              <h3>{title}</h3>
              <p>{copy}</p>
              {index < steps.length - 1 && (
                <ArrowRight className={styles.stepArrow} aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
        <div className={`${styles.container} ${hub.related}`}>
          <TopicLink page={odooPageByKey("implementation")}>
            {implementationContent.link}
          </TopicLink>
        </div>
      </section>

      <MidCta />

      <section
        className={`${styles.section} ${styles.modules}`}
        id="modules"
        aria-labelledby="odoo-modules-title"
      >
        <div className={styles.container}>
          <div className={styles.modulesIntro}>
            <span className={styles.modulesEyebrow}>ERP modules</span>
            <h2 id="odoo-modules-title" className={styles.modulesTitle}>
              The Odoo capabilities <span>we deliver</span>
            </h2>
            <p>
              Five areas most clients start with, each with its own page. Odoo
              integrates all your business processes in one platform.
            </p>
          </div>
          <div className={styles.modulesRows}>
            <ul className={`${styles.modulesGrid} ${styles.modulesTopRow}`}>
              {moduleCards.slice(0, 3).map((module) => (
                <ModuleCardItem key={module.title} module={module} />
              ))}
            </ul>
            <ul className={`${styles.modulesGrid} ${styles.modulesBottomRow}`}>
              {moduleCards.slice(3).map((module) => (
                <ModuleCardItem key={module.title} module={module} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.industrySection} ${styles.industrySectionV2}`}
        id="industries"
        aria-labelledby="odoo-industries-title"
      >
        <div className={styles.container}>
          {/* ── Header ── */}
          <div className={styles.indHeader}>
            <div className={styles.indHeaderLeft}>
              <span className={styles.indEyebrow}>
                {industryContent.eyebrow}
                <span className={styles.indEyebrowLine} aria-hidden="true" />
              </span>
              <h2 id="odoo-industries-title" className={styles.indH2}>
                Industry <span className={styles.indGradient}>solutions</span>
              </h2>
              <p className={styles.indSubtitle}>
                {industryContent.description}
              </p>
            </div>
            <Link href="/industries" className={styles.indViewAll}>
              View All Industries <ArrowRight aria-hidden="true" />
            </Link>
          </div>

          {/* ── Card grid ── */}
          <ul className={styles.indGrid}>
            {industryCards.map((card) => (
              <IndustryCardItem key={card.title} card={card} />
            ))}
          </ul>
        </div>
      </section>

      <OdooSolutions />

      <section
        className={`${styles.section} ${hub.integrations}`}
        id="integrations"
        aria-labelledby="odoo-integrations-title"
      >
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>{integrations.eyebrow}</span>
            <h2 id="odoo-integrations-title">{integrations.title}</h2>
            <p>{integrations.description}</p>
          </div>
          <ul className={hub.integrationGrid}>
            {integrations.items.map(([title, copy]) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.whySection}`}
        id="why-etriplesoft"
        aria-labelledby="odoo-why-title"
      >
        <div className={styles.whyBackdrop} aria-hidden="true">
          <div className={`${styles.whyFloat} ${styles.whyFloatStart}`}>
            <span className={styles.whyFloatTile}>
              <BarChart3 />
            </span>
            <svg viewBox="0 0 210 150">
              <path d="M8 12c96 5 157 50 192 130" />
            </svg>
          </div>
          <div className={`${styles.whyFloat} ${styles.whyFloatEnd}`}>
            <span className={styles.whyFloatTile}>
              <CheckCircle />
            </span>
            <svg viewBox="0 0 210 150">
              <path d="M202 12C106 17 45 62 10 142" />
            </svg>
          </div>
        </div>

        <div className={`${styles.container} ${styles.whyContainer}`}>
          <header className={styles.whyHeader}>
            <div className={styles.whyEyebrow}>
              <span>Why ETripleSoft</span>
            </div>
            <h2 id="odoo-why-title" className={styles.whyTitle}>
              Built Around <span>Your Business</span>
            </h2>
            <p className={styles.whySubtitle}>
              More than an ERP implementation — we deliver long-term value with
              solutions that fit your needs, local
              expertise, and continuous support.
            </p>
          </header>

          <ul className={styles.whyCards}>
            {whyCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <li
                  className={`${styles.whyCard} ${styles[card.tint]} ${index === 1 ? styles.whyCardFeatured : ""}`}
                  key={card.number}
                >
                  <article>
                    <div className={styles.whyCardTop}>
                      <span className={styles.whyIconTile} aria-hidden="true">
                        <Icon />
                        <i />
                      </span>
                      <span className={styles.whyNumber}>{card.number}</span>
                    </div>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <Link
                      className={styles.whyLink}
                      href={card.href}
                      aria-label={`Learn more about ${card.title}`}
                    >
                      Learn More <ArrowRight aria-hidden="true" />
                    </Link>
                    <span className={styles.whyCardArtwork} aria-hidden="true">
                      <WhyCardArtwork kind={card.decoration} />
                    </span>
                  </article>
                </li>
              );
            })}
          </ul>

          <ul
            className={styles.whyTrustStrip}
            aria-label="Why choose ETripleSoft"
          >
            {whyTrustItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title}>
                  <span className={styles.whyTrustIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <span className={styles.whyTrustCopy}>
                    <strong>{item.title}</strong>
                    <small>{item.caption}</small>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.region}`}
        id="localization"
        aria-labelledby="odoo-localization-title"
      >
        <div className={styles.container}>
          <div className={styles.regionTop}>
            <div>
              <span className={styles.eyebrow}>{localization.eyebrow}</span>
              <h2 id="odoo-localization-title">{localization.title}</h2>
              <p>{localization.description}</p>
            </div>
            <Asset
              name="region"
              alt="Regional presence in Egypt, Saudi Arabia, and the UAE"
            />
          </div>
          <div className={hub.countryGrid}>
            {localization.countries.map((country) => (
              <article key={country.name}>
                <h3>{country.name}</h3>
                <ul>
                  {country.points.map((point) => (
                    <li key={point}>
                      <Check aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className={hub.note}>{localization.note}</p>
        </div>
      </section>

      <section
        className={`${styles.section} ${hub.einvoicing}`}
        aria-labelledby="odoo-einvoicing-title"
      >
        <div className={styles.container}>
          <span className={styles.eyebrow}>{einvoicing.eyebrow}</span>
          <h2 id="odoo-einvoicing-title">{einvoicing.title}</h2>
          <div className={hub.einvoiceGrid}>
            {einvoicing.items.map(([country, copy]) => (
              <div key={country}>
                <h3>{country}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <p className={hub.note}>{einvoicing.note}</p>
        </div>
      </section>

      <section
        className={`${styles.section} ${hub.faqSection}`}
        id="faqs"
        aria-labelledby="odoo-faq-title"
      >
        <div className={`${styles.container} ${hub.faqWrap}`}>
          <div className={styles.faq}>
            <h2 id="odoo-faq-title">
              Frequently <em>Asked Questions</em>
            </h2>
            <div>
              {faqs.map(([question, answer], index) => (
                <details key={question}>
                  <summary>
                    <span>{index + 1}</span>
                    {question}
                    <ChevronDown aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${hub.relatedSection}`}
        aria-labelledby="odoo-related-title"
      >
        <div className={styles.container}>
          <h2 id="odoo-related-title">{related.title}</h2>
          <ul className={hub.relatedList}>
            {odooCapabilityPages.map((page) => (
              <li key={page.key}>
                <TopicLink page={page}>{page.label}</TopicLink>
              </li>
            ))}
            {related.moreLinks.map(([label, href]) => (
              <li key={href}>
                <Link className={styles.learnMore} href={href}>
                  {label} <ArrowRight aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.demo} aria-labelledby="odoo-demo-title">
        <div className={styles.container}>
          <div className={styles.demoCopy}>
            <span className={styles.eyebrow}>
              Ready to transform your business?
            </span>
            <h2 id="odoo-demo-title">
              Book Your Free
              <br />
              <em>Odoo Demo Today</em>
            </h2>
            <p>
              See how Odoo can work for your business. Get a personalized demo
              from our experts in Egypt.
            </p>
            <div className={styles.demoActions}>
              <DemoButton />
              <Link className={styles.learnMore} href={closing.secondary.href}>
                {closing.secondary.label} <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className={hub.demoChecks}>
              <Checks
                items={[
                  "No commitment",
                  "Expert consultation",
                  "Tailored to your needs",
                ]}
              />
            </div>
            <PartnerBadge className={hub.trustCompact} />
          </div>
        </div>
      </section>
    </main>
  );
}
