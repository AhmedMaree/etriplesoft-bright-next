import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Code2,
  FileText,
  PenTool,
  Plus,
  Quote,
  Rocket,
  Search,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import s from "./MobileReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const contact = "/contact?service=Mobile%20Application%20Development";
const testimonial = featuredTestimonials.mobile;
const asset = (name: string) => `/images/mobile/reference/${name}.webp`;

const services = [
  [
    "Flutter Development",
    "One codebase. Two platforms. Faster time to market.",
    "flutter",
  ],
  [
    "Business Apps",
    "Internal tools to streamline your operations.",
    "business",
  ],
  ["Odoo Mobile Extensions", "Extend your Odoo ERP to mobile.", "odoo"],
  ["Customer Apps", "Engaging apps your customers will love.", "customer-apps"],
  [
    "App Maintenance",
    "Keep your app secure, updated and performing.",
    "maintenance",
  ],
  [
    "Consultation & Strategy",
    "Turn your idea into a winning mobile product.",
    "consultation",
  ],
] as const;

const milestones = [
  ["Discovery & Planning", "Goals, users and requirements", FileText],
  ["Design & Prototyping", "Journeys and interface concepts", PenTool],
  ["Development & Testing", "Implementation and quality checks", Code2],
  ["Launch & Support", "Release and ongoing improvement", Rocket],
] as const;

const process = [
  ["Discover", "Understand your goals and requirements.", Search],
  ["Design", "Create intuitive UX/UI concepts.", PenTool],
  ["Develop", "Build and test your app.", Code2],
  ["Release", "Launch and grow with ongoing support.", Rocket],
] as const;

const benefits = [
  ["User-Centric Design", "Apps people love to use.", "user-centric"],
  ["Scalable Architecture", "Built for what’s next.", "scalable"],
  ["Enterprise-Grade Security", "Your data, our priority.", "security"],
  ["Faster Time to Market", "Agile and efficient.", "faster"],
  ["Ongoing Support", "We’re with you, always.", "support"],
  ["Real Business Impact", "Measurable results.", "impact"],
] as const;

const questions = [
  [
    "Do you build both iOS and Android apps?",
    "Yes. We build native and cross-platform applications for iOS and Android, choosing the approach around your users, features and delivery needs.",
  ],
  [
    "How long does it take to build an app?",
    "Timing depends on the product scope, integrations and testing needs. We agree on milestones with you during discovery and planning.",
  ],
  [
    "Can you integrate with our existing systems (e.g. Odoo)?",
    "Yes. We can connect an app with approved APIs, Odoo and other business systems, with access and data handling defined for your requirements.",
  ],
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className={s.eyebrow}>{children}</span>;
}

function SectionTitle({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className={s.sectionTitle}>
      <Eyebrow>{label}</Eyebrow>
      <h2>{children}</h2>
    </div>
  );
}

function Action({
  children,
  href = contact,
  secondary = false,
  small = false,
}: {
  children: React.ReactNode;
  href?: string;
  secondary?: boolean;
  small?: boolean;
}) {
  return (
    <Link
      className={`${s.action} ${secondary ? s.secondary : ""} ${small ? s.small : ""}`}
      href={href}
    >
      {children}
      {!secondary && <ArrowRight aria-hidden="true" />}
    </Link>
  );
}

export default function MobileReferencePage() {
  return (
    <main id="main" className={s.page}>
      <section className={s.hero}>
        <div className={`${s.container} ${s.heroContainer}`}>
          <div className={s.heroGrid}>
            <div className={s.heroCopy}>
              <Eyebrow>Mobile apps development</Eyebrow>
              <h1>
                Mobile <em>Apps</em>
              </h1>
              <h2>Useful apps. Real business value.</h2>
              <p>
                We design and develop high-performance mobile apps for iOS and
                Android that help you reach more customers, streamline
                operations, and turn ideas into real growth.
              </p>
              <div className={s.actions}>
                <Action href="/book-consultation">Book a Free Consultation</Action>
                <Action secondary href="/services">Explore Solutions</Action>
              </div>
              <div className={s.heroBenefits}>
                <div>
                  <ChartIcon />
                  <span>
                    Modern
                    <br />
                    Technology
                  </span>
                </div>
                <div>
                  <ShieldCheck aria-hidden="true" />
                  <span>
                    Secure
                    <br />
                    &amp; Scalable
                  </span>
                </div>
                <div>
                  <UsersRound aria-hidden="true" />
                  <span>
                    Built for
                    <br />
                    Business Growth
                  </span>
                </div>
              </div>
            </div>
            <img
              className={s.heroArt}
              src={asset("hero")}
              alt="Two mobile apps: a business dashboard and a customer shopping experience"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      <div className={s.container}>
        <section className={`${s.section} ${s.platforms}`} id="platforms">
          <div className={s.platformCopy}>
            <SectionTitle label="Native & cross-platform">
              iOS &amp; Android Apps
            </SectionTitle>
            <p>
              Reach your customers everywhere. We build high-performance apps
              for iOS and Android with a single codebase or native approach.
            </p>
            <Action href="#services" small>
              Learn More
            </Action>
          </div>
          <div className={s.platformCards}>
            <article>
              <img src={asset("ios")} alt="" />
              <div>
                <h3>iOS</h3>
                <p>
                  Beautiful. Secure.
                  <br />
                  Built for growth.
                </p>
              </div>
            </article>
            <article>
              <img src={asset("android")} alt="" />
              <div>
                <h3>Android</h3>
                <p>
                  Powerful. Flexible.
                  <br />
                  Ready for scale.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className={`${s.section} ${s.services}`} id="services">
          <div className={s.sectionHeadingRow}>
            <div>
              <SectionTitle label="Our mobile app services">
                From Idea to <em>Impact</em>
              </SectionTitle>
              <p>
                End-to-end mobile app development services that turn ideas into
                real business value.
              </p>
            </div>
            <Link className={s.outlineLink} href={contact}>
              See All Services <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className={s.serviceGrid}>
            {services.map(([title, copy, icon]) => (
              <Link
                className={s.serviceCard}
                href={`${contact}&solution=${encodeURIComponent(title)}`}
                key={title}
              >
                <span className={s.serviceIcon}>
                  <img src={asset(icon)} alt="" />
                </span>
                <span className={s.cardCopy}>
                  <strong>{title}</strong>
                  <span>{copy}</span>
                </span>
                <span className={s.cardArrow}>
                  <ArrowRight aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section
          className={`${s.section} ${s.timeline}`}
          aria-labelledby="delivery-timeline-title"
        >
          <div className={s.timelineHeading}>
            <div>
              <SectionTitle label="Typical delivery timeline">
                <span
                  id="delivery-timeline-title"
                  className={s.timelineTitleLine}
                >
                  From Plan
                </span>{" "}
                <span className={s.timelineTitleLine}>
                  to <em>Launch</em>
                </span>
              </SectionTitle>
              <p>A clear and agile process to get your app to market.</p>
            </div>
            <div className={s.scopeNote}>
              <span>
                <CalendarDays aria-hidden="true" />
              </span>
              <div>
                <strong>Scope-defined plan</strong>
                <small>Milestones agreed together</small>
              </div>
            </div>
          </div>
          <ol className={s.milestones}>
            {milestones.map(([title, copy, Glyph], index) => (
              <li key={title}>
                <span className={s.milestoneDot}>{index + 1}</span>
                <div className={s.milestoneCard}>
                  <span className={s.milestoneIcon} aria-hidden="true">
                    <Glyph />
                  </span>
                  <span className={s.milestoneCopy}>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className={`${s.section} ${s.process}`}>
          <SectionTitle label="Our process">
            Simple. Transparent. <em>Effective.</em>
          </SectionTitle>
          <p>We follow a proven process to deliver high-quality mobile apps.</p>
          <ol className={s.processGrid}>
            {process.map(([title, copy, Glyph], index) => (
              <li key={title}>
                <span className={s.processIcon}>
                  <Glyph aria-hidden="true" />
                </span>
                <span>
                  <strong>
                    {index + 1}. {title}
                  </strong>
                  <small>{copy}</small>
                </span>
                {index < process.length - 1 && (
                  <ArrowRight className={s.processArrow} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className={`${s.section} ${s.why}`}>
          <div className={s.whyIntro}>
            <SectionTitle label="Why choose ETripleSoft">
              Apps That Make a <em>Difference</em>
            </SectionTitle>
            <p>
              More than just code — we build solutions that create real value.
            </p>
          </div>
          <div className={s.benefitGrid}>
            {benefits.map(([title, copy, icon]) => (
              <article key={title}>
                <img src={asset(icon)} alt="" />
                <span>
                  <strong>{title}</strong>
                  <small>{copy}</small>
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.proof}`}>
          <div className={s.testimonialBlock}>
            <SectionTitle label="Client feedback">
              How clients describe our work
            </SectionTitle>
            <figure className={s.testimonial}>
              <Quote className={s.quoteMark} aria-hidden="true" />
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <span className={s.clientBadge} aria-hidden="true">
                  AE
                </span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </figcaption>
            </figure>
          </div>
          <div className={s.faq}>
            <div className={s.faqHeading}>
              <SectionTitle label="Frequently asked questions">
                Quick Answers
              </SectionTitle>
              <Link className={s.outlineLink} href="/faqs">
                View All FAQs <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className={s.questions}>
              {questions.map(([question, answer]) => (
                <details key={question}>
                  <summary>
                    {question}
                    <Plus aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className={s.cta}>
          <div>
            <h2>
              Ready to Build Your <em>App?</em>
            </h2>
            <p>Let’s turn your idea into a powerful mobile experience.</p>
          </div>
          <div className={s.ctaActions}>
            <Action href="/book-consultation">Book a Free Consultation</Action>
            <Action secondary href="/services">Explore Solutions</Action>
          </div>
        </section>
      </div>
    </main>
  );
}

function ChartIcon() {
  return (
    <span className={s.chartIcon} aria-hidden="true">
      <i />
      <i />
      <i />
    </span>
  );
}
