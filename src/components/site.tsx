"use client";
import Image from "next/image";
import Link from "next/link";
import { company, officeMapUrl } from "@/lib/company";
import { clientTestimonials } from "@/data/testimonials";
import { useState, useRef, useEffect, type ReactNode, type CSSProperties } from "react";
import ctaStyles from "./cta-section.module.css";
import tStyles from "./testimonials-section.module.css";
import { CountUp } from "./count-up";
import blurDataJson from "@/lib/blur-data.json";
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Search,
  Globe,
  Settings,
  Cloud,
  Brain,
  Monitor,
  ChartNoAxesCombined,
  Users,
  ShieldCheck,
  Target,
  Eye,
  Lightbulb,
  Handshake,
  Heart,
  MapPin,
  Mail,
  Phone,
  Clock,
  Headphones,
  FileText,
  Box,
  Factory,
  Check,
  Coins,
  Network,
  Database,
  MessageCircle,
  Plug,
  Sparkles,
  PenTool,
  ShoppingCart,
  ShoppingBag,
  Megaphone,
  Rocket,
  Award,
  Building,
  GraduationCap,
  Gift,
  Leaf,
  Code,
  Briefcase,
  Download,
  CheckCircle,
  ArrowUpRight,
  Zap,
  Bell,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";

// Header and Footer now live in their own files — src/components/header.tsx
// (a Server Component) + header-nav.tsx (its client-only interactive parts),
// and src/components/footer.tsx — and are imported from there directly
// (see app/layout.tsx) rather than re-exported through this "use client"
// module, so Header keeps its Server Component boundary.

const icons: Record<string, typeof Settings> = {
  globe: Globe,
  settings: Settings,
  cloud: Cloud,
  brain: Brain,
  monitor: Monitor,
  chart: ChartNoAxesCombined,
  users: Users,
  shield: ShieldCheck,
  target: Target,
  eye: Eye,
  bulb: Lightbulb,
  handshake: Handshake,
  heart: Heart,
  pin: MapPin,
  mail: Mail,
  phone: Phone,
  clock: Clock,
  headphones: Headphones,
  file: FileText,
  box: Box,
  factory: Factory,
  check: CheckCircle,
  coins: Coins,
  network: Network,
  database: Database,
  message: MessageCircle,
  plug: Plug,
  sparkles: Sparkles,
  zap: Zap,
  bell: Bell,
  grid: LayoutGrid,
  pen: PenTool,
  cart: ShoppingCart,
  bag: ShoppingBag,
  megaphone: Megaphone,
  rocket: Rocket,
  award: Award,
  building: Building,
  graduation: GraduationCap,
  gift: Gift,
  leaf: Leaf,
  code: Code,
  briefcase: Briefcase,
  search: Search,
};
export function Icon({
  name = "settings",
  className = "",
}: {
  name?: string;
  className?: string;
}) {
  const Component = icons[name] || Settings;
  return (
    <span className={`icon ${className}`}>
      <Component strokeWidth={1.9} aria-hidden="true" />
    </span>
  );
}
export function Button({
  children,
  href = "/contact",
  secondary = false,
  white = false,
  gradient = false,
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  white?: boolean;
  gradient?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "secondary" : ""} ${white ? "white" : ""} ${gradient ? "gradient" : ""}`}
      href={href}
    >
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
export function TextLink({
  children,
  href = "/contact",
  prefetch,
}: {
  children: React.ReactNode;
  href?: string;
  prefetch?: boolean;
}) {
  return (
    <Link className="text-link" href={href} prefetch={prefetch}>
      {children}
      <ArrowRight size={15} />
    </Link>
  );
}
export function Photo({
  name,
  alt = "",
  className = "",
}: {
  name: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={`/images/${name}.webp`}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  headingLevel = 2,
  center = false,
  link,
  href,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  headingLevel?: 1 | 2;
  center?: boolean;
  link?: string;
  href?: string;
}) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <Heading>{title}</Heading>
        {description && <p>{description}</p>}
      </div>
      {link && <TextLink href={href}>{link}</TextLink>}
    </div>
  );
}
export function ValueProps({
  eyebrow = "Built for a Smarter Tomorrow",
  title = (
    <>
      Technology That <em>Empowers Your Business</em>
    </>
  ),
  description = "Smart solutions. Modern technology. Real business impact.",
  items = [
    {
      icon: "network",
      eyebrow: "Unify",
      title: "ERP & Digital",
      description: "Business systems, apps and automation.",
      color: "blue",
    },
    {
      icon: "rocket",
      eyebrow: "Growth",
      title: "From A to Z",
      description: "We take you from start to finish.",
      color: "teal",
    },
    {
      icon: "pin",
      eyebrow: "MENA",
      title: "Regional Experts",
      description: "Egypt, United Arab Emirates and Saudi Arabia.",
      color: "violet",
    },
    {
      icon: "users",
      eyebrow: "People",
      title: "Solutions, Not Features",
      description: "Every solution is built around real business outcomes.",
      color: "amber",
    },
  ],
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  items?: {
    icon: string;
    eyebrow: string;
    title: string;
    description: string;
    color: string;
  }[];
}) {
  return (
    <section className="value-props">
      <div className="container">
        <div className="value-props-head">
          <span className="eyebrow muted">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
          <span className="value-props-divider" />
        </div>
        <div className="value-props-grid">
          {items.map((item) => (
            <div className={`value-card ${item.color}`} key={item.title}>
              <span className="value-card-icon">
                <Icon name={item.icon} />
              </span>
              <span className="value-card-eyebrow">{item.eyebrow}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="value-card-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function TechTrust() {
  const logos: [string, string][] = [
    ["Odoo", "odoo"],
    ["Flutter", "flutter"],
    ["WordPress", "wordpress"],
    ["WooCommerce", "woocommerce"],
    ["Shopify", "shopify"],
    ["Microsoft", "microsoft"],
  ];
  const loop = [...logos, ...logos];
  return (
    <section className="tech-trust">
      <div className="container">
        <span className="eyebrow muted">Technologies We Build With</span>
        <div className="tech-trust-viewport">
          <div className="tech-trust-track">
            {loop.map(([label, file], i) => (
              <span
                className="tech-trust-item"
                key={file + i}
                aria-hidden={i >= logos.length}
              >
                <img
                  src={`/images/trust/${file}.webp`}
                  alt={i < logos.length ? label : ""}
                />
                {file === "microsoft" && <span>Microsoft</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export function Partners({ type = "clients" }: { type?: string }) {
  const files: Record<string, string> = {
    clients: "client-logos",
    ai: "partners-ai",
    technology: "partners-web",
    marketing: "partners-marketing",
  };
  const labels: Record<string, string> = {
    clients: "Orascom, Elsewedy Electric, CIB, Vodafone, Samsung and Etisalat",
    ai: "Odoo, Microsoft, AWS, Google Cloud, SAP, Salesforce, OpenAI and UiPath",
    technology: "Odoo, Microsoft, Shopify, WordPress and Egypt",
    marketing:
      "Odoo, Microsoft, Shopify, AWS, Samsung, Intel, Dell and HubSpot",
  };
  return (
    <section className="partners">
      <div className="container">
        <span className="eyebrow muted">
          {type === "clients"
            ? "Trusted by forward-thinking companies"
            : "Trusted by growing businesses"}
        </span>
        <img
          className="client-logos"
          src={"/images/" + files[type] + ".png"}
          alt={labels[type]}
        />
      </div>
    </section>
  );
}
export function PartnerBadges({
  cloud = false,
  odooLabel = "Gold Partner",
  microsoftLabel = (
    <>
      Microsoft
      <br />
      Partner
    </>
  ),
}: {
  cloud?: boolean;
  odooLabel?: string;
  microsoftLabel?: React.ReactNode;
}) {
  return (
    <div className="partner-badges">
      {!cloud && (
        <div className="odoo-partner">
          <img src="/images/odoo-wordmark.png" alt="Odoo" />
          <span>{odooLabel}</span>
        </div>
      )}
      <div className="microsoft-partner">
        <img src="/images/microsoft-logo.png" alt="" />
        <span>{microsoftLabel}</span>
      </div>
      {cloud && (
        <>
          <div>
            <b className="aws-logo">aws</b>
            <small>Partner Network</small>
          </div>
          <div>
            <b>vmware</b>
            <small>Partner</small>
          </div>
        </>
      )}
    </div>
  );
}
export function Hero({
  eyebrow,
  title,
  accent,
  description,
  image,
  mobileImage,
  primary = "Book a Free Consultation",
  secondary = "Explore Solutions",
  secondaryHref = "/services",
  primaryHref = "/contact",
  note,
  checks,
  children,
  subtitle,
  className = "",
  callouts,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  mobileImage?: string;
  primary?: string;
  secondary?: string;
  secondaryHref?: string;
  primaryHref?: string;
  note?: string;
  checks?: string[];
  children?: React.ReactNode;
  subtitle?: string;
  className?: string;
  callouts?: { icon: string; text: string }[];
}) {
  const isHomeHero = image === "hero-image" || image === "hero-image-ar";
  const heroImage = (
    <div className="hero-image">
      <picture>
        {mobileImage && (
          <source
            media="(max-width: 760px)"
            srcSet={`/images/${mobileImage}.webp`}
            type="image/webp"
          />
        )}
        <Image
          src={`/images/${image}.webp`}
          alt=""
          fill
          sizes="100vw"
          loading={isHomeHero ? "eager" : "lazy"}
          fetchPriority={isHomeHero ? "high" : undefined}
          preload={isHomeHero && !mobileImage}
        />
      </picture>
    </div>
  );
  const homeCallouts = isHomeHero ? (
    <div
      className="home-hero-callouts"
      aria-label={image === "hero-image-ar" ? "مزايا المنصة" : "Platform benefits"}
    >
      {callouts ? (
        <>
          {callouts[0] && <span className="operations-callout"><Icon name={callouts[0].icon} /><strong>{callouts[0].text}</strong></span>}
          {callouts[1] && <span className="automation-callout"><Icon name={callouts[1].icon} /><strong>{callouts[1].text}</strong></span>}
          {callouts[2] && <span className="security-callout"><Icon name={callouts[2].icon} /><strong>{callouts[2].text}</strong></span>}
        </>
      ) : (
        <>
          <span className="operations-callout"><Icon name="chart" /><strong>Streamline Operations</strong></span>
          <span className="automation-callout"><Icon name="sparkles" /><strong>AI-Powered Automation</strong></span>
          <span className="security-callout"><Icon name="shield" /><strong>Secure &amp; Scalable</strong></span>
        </>
      )}
    </div>
  ) : null;

  return (
    <section className={`hero ${className}`}>
      {!isHomeHero && heroImage}
      <div className="container hero-inner">
        <div className="hero-copy">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {line}
              </span>
            ))}{" "}
            {accent && <em>{accent}</em>}
          </h1>
          {subtitle && <h2 className="hero-subtitle">{subtitle}</h2>}
          <p>{description}</p>
          {checks && image !== "ai-hero" && (
            <div className="hero-checks">
              {checks.map((c) => (
                <span key={c}>
                  <CheckCircle size={17} />
                  {c}
                </span>
              ))}
            </div>
          )}
          {primary && (
            <div className="button-row">
              <Button href={primary === "Book a Free Consultation" && primaryHref === "/contact" ? "/book-consultation" : primaryHref}>{primary}</Button>
              {secondary && (
                <Button secondary href={secondaryHref}>
                  {secondary}
                </Button>
              )}
            </div>
          )}
          {checks && image === "ai-hero" && (
            <div className="hero-checks">
              {checks.map((c) => (
                <span key={c}>
                  <Icon
                    name={
                      c.startsWith("Increase")
                        ? "chart"
                        : c.startsWith("Reduce")
                          ? "coins"
                          : "shield"
                    }
                  />
                  {c}
                </span>
              ))}
            </div>
          )}
          {!isHomeHero && children}
        </div>
        {image === "skyline" && (
          <div className="region-callout">
            <div className="region-countries">
              <span>
                <i className="flag flag-eg" aria-hidden="true" /> Egypt
              </span>
              <span>
                <i className="flag flag-sa" aria-hidden="true" /> Saudi Arabia
              </span>
              <span>
                <i className="flag flag-ae" aria-hidden="true" /> UAE
              </span>
            </div>
            <p>Local teams. Regional delivery.</p>
          </div>
        )}
        {image === "support-hero" && (
          <div className="support-callout">
            <Icon name="headphones" />
            <p className="callout-title">
              One request.
              <br />
              The right team.
            </p>
            {[
              "Customer support",
              "Sales enquiries",
              "General contact",
            ].map((t) => (
              <span key={t}>
                <CheckCircle size={13} />
                {t}
              </span>
            ))}
          </div>
        )}
        {image === "cloud-hero" && (
          <div className="cloud-callout">
            <h3>
              <Icon name="shield" />
              Secure Your Cloud
            </h3>
            {["Detect", "Prevent", "Protect", "Stay Compliant"].map((t) => (
              <span key={t}>
                <CheckCircle size={15} />
                {t}
              </span>
            ))}
          </div>
        )}
        {note && !isHomeHero && (
          <div className="hand-note">
            {note}
            <svg width="44" height="45" viewBox="0 0 44 45">
              <path
                d="M20 3C6 20 12 30 34 34m-9-8 10 9-13 1"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </div>
        )}
        {!isHomeHero && (image === "hero-image" || image === "hero-image-ar") && (
          <div
            className="home-hero-callouts"
            aria-label={image === "hero-image-ar" ? "مزايا المنصة" : "Platform benefits"}
          >
            {callouts ? (
              <>
                {callouts[0] && (
                  <span className="operations-callout">
                    <Icon name={callouts[0].icon} />
                    <strong>{callouts[0].text}</strong>
                  </span>
                )}
                {callouts[1] && (
                  <span className="automation-callout">
                    <Icon name={callouts[1].icon} />
                    <strong>{callouts[1].text}</strong>
                  </span>
                )}
                {callouts[2] && (
                  <span className="security-callout">
                    <Icon name={callouts[2].icon} />
                    <strong>{callouts[2].text}</strong>
                  </span>
                )}
              </>
            ) : (
              <>
                <span className="operations-callout">
                  <Icon name="chart" />
                  <strong>Streamline Operations</strong>
                </span>
                <span className="automation-callout">
                  <Icon name="sparkles" />
                  <strong>AI-Powered Automation</strong>
                </span>
                <span className="security-callout">
                  <Icon name="shield" />
                  <strong>Secure &amp; Scalable</strong>
                </span>
              </>
            )}
          </div>
        )}
      </div>
      {isHomeHero && (
        <>
          <div className="home-hero-visual">
            {heroImage}
            {note && (
              <div className="hand-note">
                {note}
                <svg width="44" height="45" viewBox="0 0 44 45" aria-hidden="true">
                  <path
                    d="M20 3C6 20 12 30 34 34m-9-8 10 9-13 1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
            )}
            {homeCallouts}
          </div>
          <div className="home-hero-partners">{children}</div>
        </>
      )}
    </section>
  );
}
const blurData: Record<string, string> = blurDataJson;

export function IndustryBento({
  items,
}: {
  items: {
    id: string;
    name: string;
    image: string;
    description: string;
    href: string;
  }[];
}) {
  return (
    <div className="industry-bento">
      {items.map(({ id, name, image, description, href }, i) => (
        <Link
          href={href}
          prefetch={false}
          className={
            "industry-bento-tile" + (i === 0 || i === 3 ? " wide" : "")
          }
          key={id}
        >
          <Image
            src={`/images/${image}.webp`}
            alt=""
            fill
            sizes="(max-width: 760px) 78vw, (max-width: 1000px) 50vw, 33vw"
            placeholder={blurData[image] ? "blur" : "empty"}
            blurDataURL={blurData[image]}
          />
          <span className="industry-bento-copy">
            <strong>{name}</strong>
            {description && <em>{description}</em>}
          </span>
        </Link>
      ))}
    </div>
  );
}
export function Cards({
  items,
  columns = 4,
  href = "/contact",
  compact = false,
}: {
  items: [string, string, string][];
  columns?: number;
  href?: string;
  compact?: boolean;
}) {
  return (
    <div className={`card-grid cols-${columns} ${compact ? "compact" : ""}`}>
      {items.map(([title, description, icon]) => (
        <article className="service-card" key={title}>
          <Icon name={icon} />
          <h3>{title}</h3>
          <p>{description}</p>
          <TextLink
            href={
              href.startsWith("#")
                ? href
                : `${href}${href.includes("?") ? "&" : "?"}service=${encodeURIComponent(title)}`
            }
          >
            Learn More
          </TextLink>
        </article>
      ))}
    </div>
  );
}
const processTones = ["blue", "teal", "amber", "violet"] as const;
type ProcessTone = (typeof processTones)[number];

/** Fixed icon/tone pairing for the default four steps (matches the design). */
const processIcons: Record<string, LucideIcon> = {
  Discover: Search,
  Design: Lightbulb,
  Implement: Settings,
  Support: BarChart3,
};

function processStepVisual(
  name: string,
  index: number,
): { icon: LucideIcon; tone: ProcessTone } {
  const tone = processTones[index % processTones.length];
  const direct = processIcons[name];
  if (direct) return { icon: direct, tone };
  const n = name.toLowerCase();
  const find = (icon: LucideIcon, ...keys: string[]) =>
    keys.some((k) => n.includes(k)) ? icon : null;
  const icon =
    find(
      Search,
      "discover",
      "search",
      "assess",
      "measure",
      "analy",
      "screen",
      "ticket",
      "investigat",
      "apply",
    ) ??
    find(
      Lightbulb,
      "design",
      "plan",
      "strateg",
      "prototyp",
      "solution",
      "idea",
    ) ??
    find(
      Settings,
      "implement",
      "build",
      "develop",
      "execut",
      "integrat",
      "configur",
      "deploy",
      "launch",
      "test",
      "creat",
    ) ??
    find(
      Headphones,
      "support",
      "help",
      "train",
      "onboard",
      "monitor",
      "optimiz",
      "improv",
      "maintain",
      "care",
      "resolution",
      "update",
      "grow",
      "review",
    ) ??
    [Search, Lightbulb, Settings, BarChart3, Headphones][index % 5];
  return { icon: icon ?? Search, tone };
}

export function Process({
  title = (
    <>
      From Idea to
      <br />
      <em>Real Impact</em>
    </>
  ),
  description = "We follow a proven process to understand your goals, build the right solution and support you for long-term success.",
  steps = ["Discover", "Design", "Implement", "Support"],
  inline = false,
  pill = "Our Process",
  ctaLabel = "Start Your Project",
  ctaHref = "/contact",
  moreLabel = "Learn more",
  stepItems,
}: {
  title?: React.ReactNode;
  description?: string;
  steps?: string[];
  inline?: boolean;
  pill?: string;
  ctaLabel?: string;
  ctaHref?: string;
  moreLabel?: string;
  stepItems?: { title: string; description: string; icon?: LucideIcon }[];
}) {
  const descriptions: Record<string, string> = {
    "Submit Ticket": "Fill out the support form with details.",
    "Ticket Acknowledged": "Get an instant confirmation via email.",
    "We Investigate": "Our experts analyze your issue.",
    "Get Update": "We'll keep you informed on the progress.",
    Resolution: "Issue resolved and you're back on track.",
    Apply: "Submit your application.",
    Screening: "Initial review of your profile.",
    Interview: "Technical and cultural conversation.",
    Offer: "Welcome to the team!",
    Discover: "Understand your business goals, challenges and opportunities.",
    Discovery: "Understand your business needs.",
    Design: "Create the right strategy and solution tailored to your needs.",
    Implement: "Develop, configure, test and launch with best practices.",
    Support: "Provide continuous support, training and optimization to help you grow.",
    Assess: "Understand your current environment and risks.",
    Monitor: "Continuous protection, detection and response.",
    Optimize: "Monitor, improve and scale for greater impact.",
    Build: "Develop, integrate and test your solution.",
    Deploy: "Launch and train your team for success.",
    Plan: "Create a strategy and sitemap.",
    Develop: "Build with clean, scalable code.",
    Test: "Ensure quality, performance and security.",
    Launch: "Your website goes live — and we’re here for you.",
    Strategize: "Build a custom marketing plan.",
    Execute: "Launch and optimize campaigns across channels.",
    Measure: "Analyze results and share transparent reports.",
    Grow: "Scale what works for long-term success.",
    Training: "Empower your team for success.",
    "Go Live": "Launch and ensure a smooth transition.",
    "Ongoing Support": "Continuous improvement.",
    "Solution Design": "Plan and customize your Odoo solution.",
    Implementation: "Configure, develop and migrate data.",
    "Discovery & Analysis":
      "Understand your business goals, processes and requirements.",
    "Planning & Design":
      "Define the solution architecture and implementation roadmap.",
    "Training & Testing":
      "Validate configuration and prepare your team to use it confidently.",
    "Go Live & Support":
      "Launch with confidence and continue with ongoing support.",
    Assessment: "Understand your current environment and risks.",
    Planning: "Define the right solution and implementation roadmap.",
    Prototype: "Build and validate a working proof of concept.",
    Integrate: "Connect the automation with your existing systems and data.",
    Review: "Test outcomes with your team and refine before rollout.",
    Improve: "Track results and scale what works for long-term impact.",
    "Launch & Support": "Go live with training and continued support.",
    "Release & Support":
      "Publish to the app stores and support ongoing improvement.",
  };
  return (
    <div className={`process ${inline ? "inline" : ""}`}>
      <div className="process-intro">
        <span className="process-pill">
          <i aria-hidden="true" />
          {pill}
        </span>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="process-cta" href={ctaHref}>
          {ctaLabel} <ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
      <div className="steps">
        {stepItems
          ? stepItems.map((item, i) => {
              const tone = processTones[i % processTones.length];
              const StepIcon = item.icon || [Search, Lightbulb, Settings, BarChart3, Headphones][i % 5];
              const last = i === stepItems.length - 1;
              return (
                <article
                  className={`step tone-${tone}`}
                  key={item.title}
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {!last && (
                    <svg
                      className="step-link"
                      viewBox="0 0 100 48"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M2 42 Q 50 0 94 34"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M87 29 L 95 35 L 88 41"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {last && (
                    <svg
                      className="step-growth"
                      viewBox="0 0 120 90"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M18 78 C 45 72 60 55 78 30 L 70 26 L 92 14 L 96 40 L 88 34 C 72 56 55 74 24 84 Z"
                        fill="currentColor"
                        opacity="0.35"
                      />
                      <path
                        d="M22 30 l 14 -8 M30 34 l 10 -12"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  <span className="step-badge" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="step-blob" aria-hidden="true" />
                  <span className="step-icon" aria-hidden="true">
                    <StepIcon size={27} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link className="step-more" href={ctaHref}>
                    {moreLabel} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })
          : steps.map((s, i) => {
              const { icon: StepIcon, tone } = processStepVisual(s, i);
              const last = i === steps.length - 1;
              return (
                <article
                  className={`step tone-${tone}`}
                  key={s}
                  style={{ "--i": i } as React.CSSProperties}
                >
                  {!last && (
                    <svg
                      className="step-link"
                      viewBox="0 0 100 48"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M2 42 Q 50 0 94 34"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeDasharray="6 6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M87 29 L 95 35 L 88 41"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  {last && (
                    <svg
                      className="step-growth"
                      viewBox="0 0 120 90"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M18 78 C 45 72 60 55 78 30 L 70 26 L 92 14 L 96 40 L 88 34 C 72 56 55 74 24 84 Z"
                        fill="currentColor"
                        opacity="0.35"
                      />
                      <path
                        d="M22 30 l 14 -8 M30 34 l 10 -12"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                  <span className="step-badge" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="step-blob" aria-hidden="true" />
                  <span className="step-icon" aria-hidden="true">
                    <StepIcon size={27} />
                  </span>
                  <h3>{s}</h3>
                  <p>
                    {descriptions[s] ||
                      "Work with our team for a successful next step."}
                  </p>
                  <Link className="step-more" href={ctaHref}>
                    {moreLabel} <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
      </div>
    </div>
  );
}
const statTones = ["blue", "teal", "green", "violet"] as const;
type StatTone = (typeof statTones)[number];

const statToneByIcon: Record<string, StatTone> = {
  briefcase: "blue",
  globe: "teal",
  clock: "green",
  building: "violet",
};

function StatMotif({ index }: { index: number }) {
  if (index % 4 === 1) {
    // Dotted world map (teal).
    const dots: { cx: number; cy: number }[] = [];
    const blobs = [
      { cx: 28, cy: 34, rx: 17, ry: 22 },
      { cx: 60, cy: 36, rx: 13, ry: 20 },
      { cx: 85, cy: 26, rx: 15, ry: 13 },
      { cx: 90, cy: 54, rx: 8, ry: 6 },
    ];
    for (let gx = 4; gx <= 108; gx += 5) {
      for (let gy = 6; gy <= 60; gy += 5) {
        if (
          blobs.some(
            ({ cx, cy, rx, ry }) =>
              ((gx - cx) / rx) ** 2 + ((gy - cy) / ry) ** 2 <= 1,
          )
        ) {
          dots.push({ cx: gx, cy: gy });
        }
      }
    }
    return (
      <svg viewBox="0 0 112 66" aria-hidden="true" focusable="false">
        {dots.map(({ cx, cy }, i) => (
          <circle key={i} cx={cx} cy={cy} r={1.7} fill="currentColor" />
        ))}
      </svg>
    );
  }
  if (index % 4 === 2) {
    // Growth wave with peak dot (green).
    return (
      <svg viewBox="0 0 200 70" aria-hidden="true" focusable="false" preserveAspectRatio="none">
        <path
          d="M0 56 C 40 54 55 30 90 32 C 125 34 135 14 170 12 L 200 10 L 200 70 L 0 70 Z"
          fill="currentColor"
          opacity="0.14"
        />
        <path
          d="M0 56 C 40 54 55 30 90 32 C 125 34 135 14 170 12 L 200 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />
        <circle cx="138" cy="22" r="5" fill="currentColor" />
        <circle cx="138" cy="22" r="9" fill="currentColor" opacity="0.2" />
      </svg>
    );
  }
  // Ascending bars (blue on first card, violet on fourth).
  const bars = index % 4 === 0 ? [14, 22, 32, 44, 56, 68] : [12, 20, 30, 42, 56];
  return (
    <svg
      viewBox={`0 0 ${bars.length * 20} 76`}
      aria-hidden="true"
      focusable="false"
      className={index % 4 === 0 ? "bars-left" : "bars-right"}
    >
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 20 + 4}
          y={72 - h}
          width={11}
          height={h}
          rx={5.5}
          fill="currentColor"
          opacity={0.28 + (i / bars.length) * 0.5}
        />
      ))}
    </svg>
  );
}

export function Stats({
  title = "Numbers That Tell Our Story",
  description,
  items = [
    ["250+", "Projects Delivered", "briefcase", "Real work, real outcomes."],
    ["3", "Countries", "globe", "Egypt, UAE & Saudi Arabia."],
    ["8+", "Years of Experience", "clock", "Regional technology experience."],
  ],
  badge = "Our Impact",
  offices,
}: {
  title?: React.ReactNode;
  description?: string;
  items?: string[][];
  badge?: string;
  offices?: { id: string; label: string }[];
}) {
  const displayOffices = offices || company.offices;
  return (
    <section className="stats-band">
      <div className="stats-deco" aria-hidden="true">
        <i className="deco-blob blob-a" />
        <i className="deco-blob blob-b" />
        <i className="deco-dots dots-a" />
        <i className="deco-dots dots-b" />
        <svg className="deco-curve" viewBox="0 0 600 600" focusable="false">
          <path
            d="M-20 120 C 150 100 220 220 360 200 C 480 184 540 80 640 60"
            fill="none"
            stroke="#c9d5f2"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <div className="container stats-inner">
        <span className="stats-badge">
          <Icon name="sparkles" />
          {badge}
        </span>
        <h2>{title}</h2>
        {description && <p className="stats-description">{description}</p>}
        <div className="stats-cards">
          {items.map(([number, label, icon, description], i) => {
            const tone: StatTone =
              statToneByIcon[icon ?? ""] ?? statTones[i % statTones.length];
            return (
              <div className={`stat-card tone-${tone}`} key={label}>
                <span className="stat-dot" aria-hidden="true" />
                {icon && <Icon name={icon} />}
                <strong>
                  <CountUp value={number} />
                </strong>
                <span className="stat-label">{label}</span>
                {description && <p>{description}</p>}
                <span className="stat-motif" aria-hidden="true">
                  <StatMotif index={i} />
                </span>
              </div>
            );
          })}
        </div>
        <div className="stats-offices">
          {displayOffices.map((office) => (
            <span key={office.id}>
              <MapPin size={18} aria-hidden="true" />
              {office.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
export function CTA({
  title = (
    <>
      Ready to Transform <span>Your Business?</span>
    </>
  ),
  description = "Get expert guidance and tailored solutions that help you work smarter, grow faster, and stay ahead.",
  button = "Book a Free Consultation",
  href = "/book-consultation",
  secondary = {
    label: "Chat With Us",
    href: company.whatsappUrl,
    external: true,
  },
  badge = "Let’s get started",
  perks = [
    "Free consultation",
    "Tailored to your industry",
    "No obligation, no pressure",
  ],
  note,
}: {
  title?: ReactNode;
  description?: string;
  button?: string;
  href?: string;
  /** Second option; rendered as the ghost button. */
  secondary?: { label: string; href: string; external?: boolean };
  /** Reassurance line under the buttons. */
  note?: string;
  badge?: string;
  perks?: string[];
}) {
  const isExternalUrl = (url: string) => /^https?:\/\//i.test(url);
  return (
    <section className={ctaStyles.cta} aria-labelledby="cta-title">
      <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
        <symbol id="cta-bolt" viewBox="0 0 24 24">
          <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
        </symbol>
        <symbol id="cta-arrow" viewBox="0 0 24 24">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </symbol>
        <symbol id="cta-chat" viewBox="0 0 24 24">
          <path d="M21 12a8.5 8.5 0 01-12.4 7.5L3 21l1.6-5.2A8.5 8.5 0 1121 12z" />
        </symbol>
        <symbol id="cta-cal" viewBox="0 0 24 24">
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <path d="M4 10h16M8 3v4M16 3v4" />
        </symbol>
        <symbol id="cta-people" viewBox="0 0 24 24">
          <path d="M9 11a3 3 0 100-6 3 3 0 000 6zM3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 11a2.5 2.5 0 100-5M18 14c1.8.6 3 2.3 3 4.5" />
        </symbol>
        <symbol id="cta-shield" viewBox="0 0 24 24">
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5" />
        </symbol>
      </svg>

      <i className={`${ctaStyles.wave} ${ctaStyles.l1}`} aria-hidden="true" />
      <i className={`${ctaStyles.wave} ${ctaStyles.l2}`} aria-hidden="true" />
      <i className={`${ctaStyles.wave} ${ctaStyles.r1}`} aria-hidden="true" />
      <i className={`${ctaStyles.orb} ${ctaStyles.a}`} aria-hidden="true" />
      <i className={`${ctaStyles.orb} ${ctaStyles.b}`} aria-hidden="true" />
      <i className={`${ctaStyles.dots} ${ctaStyles.a}`} aria-hidden="true" />
      <i className={`${ctaStyles.dots} ${ctaStyles.b}`} aria-hidden="true" />

      <span className={ctaStyles.badge}>
        <svg className={ctaStyles.i} aria-hidden="true">
          <use href="#cta-bolt" />
        </svg>
        {badge}
      </span>
      <h2 id="cta-title">{title}</h2>
      <p className={ctaStyles.sub}>{description}</p>

      <div className={ctaStyles.actions}>
        {isExternalUrl(href) ? (
          <a className={`${ctaStyles.btn} ${ctaStyles.primary}`} href={href}>
            {button}{" "}
            <svg className={ctaStyles.i} aria-hidden="true">
              <use href="#cta-arrow" />
            </svg>
          </a>
        ) : (
          <Link className={`${ctaStyles.btn} ${ctaStyles.primary}`} href={href}>
            {button}{" "}
            <svg className={ctaStyles.i} aria-hidden="true">
              <use href="#cta-arrow" />
            </svg>
          </Link>
        )}
        {secondary.external || isExternalUrl(secondary.href) ? (
          <a
            className={`${ctaStyles.btn} ${ctaStyles.ghost}`}
            href={secondary.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={ctaStyles.i} aria-hidden="true">
              <use href="#cta-chat" />
            </svg>
            {secondary.label}
          </a>
        ) : (
          <Link
            className={`${ctaStyles.btn} ${ctaStyles.ghost}`}
            href={secondary.href}
          >
            <svg className={ctaStyles.i} aria-hidden="true">
              <use href="#cta-chat" />
            </svg>
            {secondary.label}
          </Link>
        )}
      </div>

      <ul className={ctaStyles.perks}>
        {perks.map((perk, i) => {
          const perkIcons = ["#cta-cal", "#cta-people", "#cta-shield"];
          const iconId = perkIcons[i % perkIcons.length];
          return (
            <li key={perk}>
              <span className={ctaStyles.ic}>
                <svg className={ctaStyles.i} aria-hidden="true">
                  <use href={iconId} />
                </svg>
              </span>
              {perk}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export function FAQ({
  items,
  compact = false,
}: {
  items: { question: string; answer: string }[];
  compact?: boolean;
}) {
  return (
    <div className={`faq ${compact ? "compact-faq" : ""}`}>
      {items.map(({ question, answer }) => (
        <details key={question}>
          <summary>
            {question}
            <ChevronDown size={16} />
          </summary>
          <p>{answer}</p>
        </details>
      ))}
    </div>
  );
}
const testimonialTones = ["blue", "violet", "green"] as const;
const testimonialAvatarTones = [
  { bg: "#dbe7ff", ink: "#1d3fbf" },
  { bg: "#e7e2ff", ink: "#5b3df0" },
  { bg: "#d7f5e9", ink: "#0b7a5c" },
] as const;

function testimonialInitials(name: string) {
  const parts = name.replace(/^Eng\.\s*/i, "").split(/\s+/).filter(Boolean);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? "") : "";
  return (first + last).toUpperCase();
}

export function Testimonials({
  single = false,
  locale = "en",
  eyebrow = "Client Experiences",
  title = (
    <>
      Trusted by Businesses
      <br />
      Across <span>Industries</span>
    </>
  ),
  sub = "Hear from clients who have partnered with ETripleSoft and achieved real results.",
  itemsList,
}: {
  single?: boolean;
  locale?: "en" | "ar";
  eyebrow?: string;
  title?: ReactNode;
  sub?: string;
  itemsList?: readonly {
    id: string;
    quote: string;
    name: string;
    role: string;
    company?: string;
  }[];
}) {
  const isArabic = locale === "ar";
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  const sourceItems = itemsList || clientTestimonials;
  const items = single ? sourceItems.slice(0, 1) : sourceItems;

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const first = track?.firstElementChild as HTMLElement | null;
      if (!track || !first) return;
      const perView = Math.max(
        1,
        Math.round(track.clientWidth / first.getBoundingClientRect().width) || 1,
      );
      const pages = Math.max(1, items.length - perView + 1);
      setPageCount(pages);
      setPage((current) => Math.min(current, pages - 1));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const cards = Array.from(track.children) as HTMLElement[];
        const leadingCard = cards
          .map((card, index) => ({ index, rect: card.getBoundingClientRect() }))
          .filter(({ rect }) => rect.left < trackRect.right && rect.right > trackRect.left)
          .sort((a, b) =>
            isArabic
              ? Math.abs(a.rect.right - trackRect.right) - Math.abs(b.rect.right - trackRect.right)
              : Math.abs(a.rect.left - trackRect.left) - Math.abs(b.rect.left - trackRect.left),
          )[0];
        if (leadingCard) setPage(Math.min(leadingCard.index, pageCount - 1));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isArabic, pageCount]);

  const goTo = (next: number) => {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(next, pageCount - 1));
    const target = track.children[clamped] as HTMLElement | undefined;
    if (!target) return;
    setPage(clamped);
    target.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  };

  return (
    <div
      className={tStyles.testimonials}
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className={tStyles.deco} aria-hidden="true">
        <span className={tStyles.dots} />
        <span className={tStyles.q}>”</span>
      </div>

      <div className={tStyles.head}>
        <div>
          <p className={tStyles.eyebrow}>{eyebrow}</p>
          <h2 id="home-testimonials-title" className={tStyles.title}>
            {title}
          </h2>
          <p className={tStyles.sub}>{sub}</p>
        </div>
        {!single && pageCount > 1 && (
          <div className={tStyles.nav}>
            <button
              className={tStyles.prev}
              aria-label={isArabic ? "الشهادات السابقة" : "Previous testimonials"}
              disabled={page === 0}
              onClick={() => goTo(page - 1)}
            >
              {isArabic ? <ChevronRight size={20} aria-hidden="true" /> : <ChevronLeft size={20} aria-hidden="true" />}
            </button>
            <button
              className={tStyles.next}
              aria-label={isArabic ? "الشهادات التالية" : "Next testimonials"}
              disabled={page >= pageCount - 1}
              onClick={() => goTo(page + 1)}
            >
              {isArabic ? <ChevronLeft size={20} aria-hidden="true" /> : <ChevronRight size={20} aria-hidden="true" />}
            </button>
          </div>
        )}
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {isArabic ? `عرض الشهادة ${page + 1} من ${pageCount}` : `Showing testimonial ${page + 1} of ${pageCount}`}
      </p>

      <div
        className={tStyles.track}
        ref={trackRef}
        tabIndex={0}
        aria-label={isArabic ? "شهادات العملاء" : "Client testimonials"}
      >
        {items.map((item, i) => {
          const tone = testimonialTones[i % testimonialTones.length];
          const avatarTone =
            testimonialAvatarTones[i % testimonialAvatarTones.length];
          const sourceOrg = "company" in item ? item.company : undefined;
          const matchingEnglishTestimonial = isArabic
            ? clientTestimonials.find((testimonial) => testimonial.id === item.id)
            : undefined;
          const englishOrg =
            matchingEnglishTestimonial && "company" in matchingEnglishTestimonial
              ? matchingEnglishTestimonial.company
              : undefined;
          const org = englishOrg ?? sourceOrg;
          return (
            <figure
              key={item.id}
              className={`${tStyles.card} ${tStyles[tone]}`}
            >
              <blockquote className={tStyles.quote}>{item.quote}</blockquote>
              <figcaption className={tStyles.foot}>
                <div
                  className={tStyles.avatar}
                  style={
                    {
                      "--avatar-bg": avatarTone.bg,
                      "--avatar-ink": avatarTone.ink,
                    } as CSSProperties
                  }
                  aria-hidden="true"
                >
                  {testimonialInitials(item.name)}
                </div>
                <div className={tStyles.who}>
                  <b>{item.name}</b>
                  <small>{org ? `${item.role}, ${org}` : item.role}</small>
                  <div
                    className={tStyles.stars}
                    role="img"
                    aria-label="Rated 5 out of 5 stars"
                  >
                    ★★★★★
                  </div>
                </div>
                {org && <div className={tStyles.logo}>{org}</div>}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {!single && pageCount > 1 && (
        <div
          className={tStyles.dotsNav}
          role="tablist"
          aria-label={isArabic ? "صفحات الشهادات" : "Testimonial pages"}
        >
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              aria-label={isArabic ? `انتقل إلى الشهادة ${i + 1}` : `Go to testimonial ${i + 1}`}
              aria-current={i === page}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export function Offices({ contact = false }: { contact?: boolean }) {
  return (
    <div className="office-grid" id="offices">
      {company.offices.map((office) => {
        const mapUrl = officeMapUrl(office);
        const image = { egypt: "cairo", saudi: "riyadh", uae: "dubai" }[
          office.id
        ];
        return (
          <article className="office-card" key={office.id}>
            <Photo
              name={contact ? "contact-" + image : image}
              alt={office.label}
            />
            <div>
              <h3>
                <MapPin size={20} aria-hidden="true" />
                {office.label}
              </h3>
              {office.address && <p>{office.address}</p>}
              {office.phones.length > 0 && (
                <div className="office-phones">
                  {office.phones.map((phone) => (
                    <span key={phone.href}>
                      <a href={phone.href}>{phone.display}</a>
                    </span>
                  ))}
                </div>
              )}
              {mapUrl && (
                <a
                  className="text-link"
                  href={mapUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Directions <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
