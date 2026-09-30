"use client";
import Image from "next/image";
import Link from "next/link";
import { company, officeMapUrl } from "@/lib/company";
import { clientTestimonials } from "@/data/testimonials";
import { useState } from "react";
import { CountUp } from "./count-up";
import blurDataJson from "@/lib/blur-data.json";
import {
  ArrowRight,
  ChevronDown,
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
  primary = "Book a Free Consultation",
  secondary = "Explore Solutions",
  secondaryHref = "/services",
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
          alt=""
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
          <div
            className="step"
            key={s}
            style={{ "--i": i } as React.CSSProperties}
          >
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
              <strong>
                <CountUp value={number} />
              </strong>
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
  button = "Book a Free Consultation",
  href = "/book-consultation",
  secondary,
  note,
}: {
  title?: string;
  description?: string;
  button?: string;
  href?: string;
  /** Second option; when present the band renders as a full section. */
  secondary?: { label: string; href: string; external?: boolean };
  /** Reassurance line under the buttons. */
  note?: string;
}) {
  return (
    <section className={secondary ? "cta-band cta-full" : "cta-band"}>
      <div className="container">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {secondary ? (
          <div className="cta-actions">
            <div className="cta-buttons">
              <Button white href={href}>
                {button}
              </Button>
              {secondary.external ? (
                <a
                  className="button cta-secondary"
                  href={secondary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {secondary.label}
                </a>
              ) : (
                <Link className="button cta-secondary" href={secondary.href}>
                  {secondary.label}
                </Link>
              )}
            </div>
            {note && <small className="cta-note">{note}</small>}
          </div>
        ) : (
          <Button white href={href}>
            {button}
          </Button>
        )}
      </div>
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
export function Testimonials({ single = false }: { single?: boolean }) {
  const [index, setIndex] = useState(0);
  const total = clientTestimonials.length;
  const visible = single
    ? [clientTestimonials[index]]
    : [0, 1, 2].map((offset) => clientTestimonials[(index + offset) % total]);
  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
    >
      <div className="testimonial-heading">
        <SectionHeading
          eyebrow="What Our Clients Say"
          title="Client experiences"
          description="Hear from clients who have worked with the ETripleSoft team."
        />
        <div className="carousel-buttons">
          <button
            aria-label="Previous testimonial"
            onClick={() => setIndex((index + total - 1) % total)}
          >
            <ArrowRight className="reverse" size={19} />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => setIndex((index + 1) % total)}
          >
            <ArrowRight size={19} />
          </button>
        </div>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Showing {visible.map((item) => item.name).join(", ")}
      </p>
      <div className={`testimonials ${single ? "single" : ""}`}>
        {visible.map(({ id, quote, name, role, company: org }) => (
          <article key={id}>
            <p>“{quote}”</p>
            <div className="person">
              <div>
                <strong>{name}</strong>
                <small>{org ? `${role}, ${org}` : role}</small>
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
