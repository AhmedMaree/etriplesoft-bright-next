"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUp,
  ChevronDown,
  Menu,
  X,
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
} from "lucide-react";
import { services } from "@/lib/data";
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
}: {
  children: React.ReactNode;
  href?: string;
}) {
  return (
    <Link className="text-link" href={href}>
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
export function Header() {
  const path = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearCloseTimer = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = (label: string) => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setOpenGroup((cur) => (cur === label ? null : cur));
    }, 120);
  };
  useEffect(() => {
    if (!openGroup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenGroup(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openGroup]);
  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [path]);
  const groups = [
    {
      label: "Odoo ERP",
      links: [
        ["Odoo Implementation", "/odoo"],
        ["Request a Demo", "/contact?service=Odoo%20ERP"],
      ],
    },
    { label: "Services", links: services.map((s) => [s.title, "/" + s.slug]) },
    {
      label: "Industries",
      links: [
        ["Industry Expertise", "/industries#expertise"],
        ["Portfolio & Success Stories", "/portfolio"],
      ],
    },
    {
      label: "Resources",
      links: [
        ["Articles & Insights", "/insights"],
        ["Case Studies", "/portfolio"],
        ["FAQs", "/faqs"],
        ["Support Ticket", "/support-ticket"],
      ],
    },
    {
      label: "Company",
      links: [
        ["About Us", "/about"],
        ["Careers", "/careers"],
        ["Contact Us", "/contact"],
      ],
    },
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" aria-label="ETripleSoft home" className="brand">
          <Image
            src="/images/logo-header-hq.png"
            alt="ETripleSoft"
            width={1600}
            height={393}
            sizes="178px"
            priority
          />
        </Link>
        <nav
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          <Link
            onClick={() => setOpen(false)}
            className={path === "/" ? "active" : ""}
            href="/"
          >
            Home
          </Link>
          {groups.map((g) => (
            <div
              className={
                openGroup === g.label ? "nav-dropdown is-open" : "nav-dropdown"
              }
              key={g.label}
              onMouseEnter={() => {
                clearCloseTimer();
                setOpenGroup(g.label);
              }}
              onMouseLeave={() => scheduleClose(g.label)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                  setOpenGroup((cur) => (cur === g.label ? null : cur));
                }
              }}
            >
              <button
                type="button"
                className="nav-dropdown-trigger"
                aria-expanded={openGroup === g.label}
                onClick={() =>
                  setOpenGroup((cur) => (cur === g.label ? null : g.label))
                }
              >
                {g.label}
                <ChevronDown size={12} aria-hidden="true" />
              </button>
              <div className="dropdown-panel">
                {g.links.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => {
                      setOpen(false);
                      setOpenGroup(null);
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="header-tools">
          <button
            className="icon-button search-toggle"
            aria-label="Search website"
            onClick={() => setSearch(!search)}
          >
            <Search size={19} />
          </button>
          <span className="language">
            <Globe size={16} /> EN
          </span>
          <Button gradient={!["/about", "/about-us"].includes(path)} href="/contact">
            {["/about", "/about-us"].includes(path) ? "Talk To Our Experts" : "Book a Free Demo"}
          </Button>
          <button
            className="icon-button mobile-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {search && (
        <div className="search-panel">
          <label htmlFor="site-search">Find a solution</label>
          <input
            id="site-search"
            autoFocus
            placeholder="Search services, company, support…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div>
            {[
              ...services.map((s) => ({ title: s.title, href: "/" + s.slug })),
              { title: "About Us", href: "/about" },
              { title: "Careers", href: "/careers" },
              { title: "Contact Us", href: "/contact" },
              { title: "Support Ticket", href: "/support-ticket" },
            ]
              .filter((s) =>
                s.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setSearch(false)}
                >
                  {s.title}
                  <ArrowRight size={15} />
                </Link>
              ))}
          </div>
        </div>
      )}
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="ETripleSoft home">
            <img src="/images/logo-white.png" alt="ETripleSoft" />
          </Link>
          <p>
            We empower businesses across Egypt, UAE and Saudi Arabia with
            innovative technology solutions to build a smarter, more connected
            future.
          </p>
          <div className="socials" aria-label="Contact channels">
            <a
              href="mailto:info@etriplesoft.com"
              aria-label="Email ETripleSoft"
            >
              <Mail size={17} />
            </a>
            <Link href="/contact" aria-label="Our locations">
              <Globe size={17} />
            </Link>
            <Link href="/support-ticket" aria-label="Contact support">
              <Headphones size={17} />
            </Link>
          </div>
        </div>
        {[
          ["Solutions", ...services.map((s) => `${s.title}|/${s.slug}`)],
          [
            "Industries",
            "Construction|/industries#expertise",
            "Retail|/industries#expertise",
            "Real Estate|/industries#expertise",
            "Education|/industries#expertise",
            "Healthcare|/industries#expertise",
            "Logistics|/industries#expertise",
          ],
          [
            "Company",
            "About Us|/about",
            "Careers|/careers",
            "Portfolio|/portfolio",
            "Contact Us|/contact",
            "Support Ticket|/support-ticket",
          ],
          [
            "Resources",
            "Blog|/insights",
            "Case Studies|/portfolio",
            "FAQs|/faqs",
            "Privacy Policy|/privacy",
            "Terms of Service|/terms",
          ],
        ].map(([title, ...links]) => (
          <div key={title}>
            <h4>{title}</h4>
            {links.map((l) => {
              const [label, href] = l.split("|");
              return (
                <Link key={label} href={href}>
                  {label}
                </Link>
              );
            })}
          </div>
        ))}
        <div>
          <h4>Our Offices</h4>
          <Link href="/contact#offices">
            <MapPin size={14} aria-hidden="true" /> Cairo, Egypt
          </Link>
          <Link href="/contact#offices">
            <MapPin size={14} aria-hidden="true" /> Riyadh, Saudi Arabia
          </Link>
          <Link href="/contact#offices">
            <MapPin size={14} aria-hidden="true" /> Dubai, UAE
          </Link>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>
          © {new Date().getFullYear()} ETripleSoft. All rights reserved.
        </span>
        <span>Technology for a smarter tomorrow.</span>
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  link,
  href,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  center?: boolean;
  link?: string;
  href?: string;
}) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {link && <TextLink href={href}>{link}</TextLink>}
    </div>
  );
}
export function ValueProps() {
  const items: {
    icon: string;
    eyebrow: string;
    title: string;
    description: string;
    color: string;
  }[] = [
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
  ];
  return (
    <section className="value-props">
      <div className="container">
        <div className="value-props-head">
          <span className="eyebrow muted">Built for a Smarter Tomorrow</span>
          <h2>
            Technology That <em>Empowers Your Business</em>
          </h2>
          <p>Smart solutions. Modern technology. Real business impact.</p>
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
export function PartnerBadges({ cloud = false }: { cloud?: boolean }) {
  return (
    <div className="partner-badges">
      {!cloud && (
        <div className="odoo-partner">
          <img src="/images/odoo-wordmark.png" alt="Odoo" />
          <span>Gold Partner</span>
        </div>
      )}
      <div className="microsoft-partner">
        <img src="/images/microsoft-logo.png" alt="" />
        <span>
          Microsoft
          <br />
          Partner
        </span>
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
  primary = "Get a Free Consultation",
  secondary = "Talk to Our Experts",
  secondaryHref = "/contact",
  primaryHref = "/contact",
  note,
  checks,
  children,
  subtitle,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description: string;
  image: string;
  primary?: string;
  secondary?: string;
  secondaryHref?: string;
  primaryHref?: string;
  note?: string;
  checks?: string[];
  children?: React.ReactNode;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-image">
        <Image
          src={`/images/${image}.webp`}
          alt={`${title} — ETripleSoft solutions`}
          fill
          sizes="100vw"
          preload={image === "hero-image"}
        />
      </div>
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
              <Button href={primaryHref}>{primary}</Button>
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
          {children}
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
            <h3>
              Support
              <br />
              You Can Trust
            </h3>
            {[
              "Real People",
              "Expert Solutions",
              "Faster Resolution",
              "Business Continuity",
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
        {note && (
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
        {image === "hero-image" && (
          <div className="home-hero-callouts" aria-label="Platform benefits">
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
          </div>
        )}
      </div>
      {image === "hero-image" && (
        <nav className="home-hero-services" aria-label="Core solutions">
          {[
            [
              "coins",
              "Odoo ERP",
              "Run your entire business on one platform",
              "/odoo",
            ],
            [
              "cloud",
              "Cloud & Security",
              "Secure, scalable infrastructure",
              "/cloud",
            ],
            [
              "brain",
              "AI Automation",
              "Automate and unlock new opportunities",
              "/ai",
            ],
            [
              "monitor",
              "Web & Mobile Solutions",
              "Modern apps that grow with you",
              "/web",
            ],
            [
              "chart",
              "Digital Marketing",
              "Increase your visibility and sales",
              "/digital-marketing",
            ],
          ].map(([icon, label, copy, href]) => (
            <Link href={href} key={label}>
              <Icon name={icon} />
              <span>
                <strong>{label}</strong>
                <small>{copy}</small>
              </span>
            </Link>
          ))}
        </nav>
      )}
    </section>
  );
}
export function IndustryBento({
  items,
  href = "/industries#expertise",
}: {
  items: string[][];
  href?: string;
}) {
  const order =
    items.length >= 6
      ? [items[0], items[1], items[3], items[2], items[4], items[5]]
      : items;
  return (
    <div className="industry-bento">
      {order.map(([title, image, description], i) => (
        <a
          href={href}
          className={
            "industry-bento-tile" + (i === 0 || i === 3 ? " wide" : "")
          }
          key={title}
        >
          <Photo name={image} alt={title} />
          <span className="industry-bento-copy">
            <strong>{title}</strong>
            {description && <em>{description}</em>}
          </span>
        </a>
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
export function Process({
  title = "A Clear Path to Your Success",
  steps = ["Discover", "Design", "Implement", "Support"],
  inline = false,
}: {
  title?: string;
  steps?: string[];
  inline?: boolean;
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
    Discover: "Understand your business goals and opportunities.",
    Discovery: "Understand your business needs.",
    Design: "Create the right solution for your needs.",
    Implement: "Configure, test and launch.",
    Support: "Train, optimize and grow together.",
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
      <SectionHeading
        eyebrow="Our Process"
        title={
          inline && title === "A Clear Path to Your Success" ? (
            <>
              A Clear Path to
              <br />
              <em>Your Success</em>
            </>
          ) : (
            title
          )
        }
        description="We follow a proven approach to deliver real results."
      />
      <div className="steps">
        {steps.map((s, i) => (
          <div className="step" key={s}>
            <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
            <h3>{s}</h3>
            <p>
              {descriptions[s] ||
                "Work with our team for a successful next step."}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
export function Stats({
  title = "Numbers That Tell Our Story",
  description,
  items = [
    ["250+", "Projects Delivered", "briefcase", "Real work, real outcomes."],
    ["3", "Countries", "globe", "Egypt, UAE & Saudi Arabia."],
    ["10+", "Years of Experience", "clock", "Regional technology experience."],
  ],
}: {
  title?: React.ReactNode;
  description?: string;
  items?: string[][];
}) {
  return (
    <section className="stats-band">
      <div className="container stats-inner">
        <span className="stats-badge">
          <Icon name="sparkles" />
          Our Impact
        </span>
        <h2>{title}</h2>
        {description && <p className="stats-description">{description}</p>}
        <div className="stats-cards">
          {items.map(([number, label, icon, description]) => (
            <div className="stat-card" key={label}>
              {icon && <Icon name={icon} />}
              <strong>{number}</strong>
              <span>{label}</span>
              {description && <p>{description}</p>}
            </div>
          ))}
        </div>
        <div className="stats-offices">
          <span>
            <Icon name="pin" />
            Cairo, Egypt
          </span>
          <span>
            <Icon name="pin" />
            Riyadh, Saudi Arabia
          </span>
          <span>
            <Icon name="pin" />
            Dubai, UAE
          </span>
        </div>
      </div>
    </section>
  );
}
export function CTA({
  title = "Ready to Transform Your Business?",
  description = "Book a free consultation with our team and discover how we can help you achieve your goals.",
  button = "Book Your Consultation",
  href = "/contact",
}: {
  title?: string;
  description?: string;
  button?: string;
  href?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Button white href={href}>
          {button}
        </Button>
      </div>
    </section>
  );
}
export function FAQ({
  questions,
  compact = false,
}: {
  questions?: string[];
  compact?: boolean;
}) {
  const qs = questions || [
    "How quickly will you respond to my inquiry?",
    "Can you help with existing systems upgrades?",
    "Do you provide support after project delivery?",
    "Can I schedule a consultation call?",
    "Do you work with international clients?",
  ];
  return (
    <div className={`faq ${compact ? "compact-faq" : ""}`}>
      {qs.map((q, i) => (
        <details key={q}>
          <summary>
            {q}
            <ChevronDown size={16} />
          </summary>
          <p>
            {/long|quickly|time/.test(q)
              ? "Timelines depend on the scope, integrations and needs of your business. Contact our team for an assessment and a clear project plan."
              : /cost|guarantee/.test(q)
                ? "Every business has different goals. We assess your requirements and provide a tailored proposal with transparent scope and pricing. Specific results depend on your market and project."
                : /training|support|maintenance/.test(q)
                  ? "Yes. We help your team get started and offer ongoing training, maintenance and support. We agree on coverage and response times as part of your service plan."
                  : "Our team works with businesses of different sizes across Egypt, Saudi Arabia and the UAE. We review your needs and existing systems to recommend the right solution."}
          </p>
        </details>
      ))}
    </div>
  );
}
export function Testimonials({ single = false }: { single?: boolean }) {
  const [index, setIndex] = useState(0);
  const quotes = [
    [
      "Professional, responsive, and truly understand our business needs.",
      "Marco Youssef",
      "CEO, Manufacturing Company",
    ],
    [
      "ETripleSoft delivered our Odoo system with great expertise and support.",
      "Waled El Ganzory",
      "Operations Manager, Trading Company",
    ],
    [
      "A reliable partner for our digital transformation journey.",
      "Eng. Mahmoud Hamdy",
      "CTO, Services Company",
    ],
  ];
  return (
    <div>
      <div className="testimonial-heading">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Real Partners. Real Results."
          description="Trusted by forward-thinking businesses across the MENA region to turn ideas into impact with Odoo and beyond."
        />
        <div className="carousel-buttons">
          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((index + 2) % 3)}
          >
            <ArrowRight className="reverse" size={19} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((index + 1) % 3)}
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
      <div className={`testimonials ${single ? "single" : ""}`}>
        {(single
          ? [quotes[index]]
          : [quotes[index], quotes[(index + 1) % 3], quotes[(index + 2) % 3]]
        ).map(([quote, name, role]) => (
          <article key={name}>
            <p>“{quote}”</p>
            <div className="person">
              <Icon name="users" />
              <div>
                <strong>{name}</strong>
                <small>{role}</small>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
export function Offices({ contact = false }: { contact?: boolean }) {
  return (
    <div className="office-grid">
      {[
        ["Cairo, Egypt", "cairo", "Nile Corniche, Maadi, Cairo, Egypt"],
        [
          "Riyadh, Saudi Arabia",
          "riyadh",
          "King Fahd Road, Olaya, Riyadh, Saudi Arabia",
        ],
        ["Dubai, UAE", "dubai", "Business Bay, Dubai, United Arab Emirates"],
      ].map(([title, image, address]) => (
        <article className="office-card" key={title}>
          <Photo name={contact ? "contact-" + image : image} alt={title} />
          <div>
            <h3>
              <MapPin size={20} />
              {title}
            </h3>
            <p>{address}</p>
            <a
              className="text-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions <ArrowUpRight size={15} />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
