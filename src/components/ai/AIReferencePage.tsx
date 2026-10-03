import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Plus,
  CheckSquare,
} from "lucide-react";
import s from "./AIReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";
import { AiAutomationHero } from "./AiAutomationHero";
import { WhyAutomationSection } from "./WhyAutomationSection";

const contact = "/contact?service=AI%20Automation";
const testimonial = featuredTestimonials.ai;
const solutions = [
  [
    "Workflow Automation",
    "Automate repetitive tasks and approvals.",
    "workflow",
  ],
  ["AI Copilots", "Smart assistants for your team.", "copilot"],
  ["Odoo + AI Integration", "Bring AI into your Odoo ERP.", "odoo"],
  ["CRM Automation", "Capture, nurture and convert faster.", "crm"],
  ["AI Reporting", "Turn data into clear insights.", "reporting"],
  [
    "Process Optimization",
    "Find bottlenecks. Improve continuously.",
    "optimization",
  ],
];
const useCases = [
  ["Invoice Processing", "From email to ERP automatically.", "invoice"],
  ["Lead Qualification", "Score and route leads with AI.", "lead"],
  ["Customer Support", "AI assistants for faster replies.", "chat"],
  [
    "Inventory Optimization",
    "Forecast demand and reduce stockouts.",
    "inventory",
  ],
  ["HR & People Ops", "Automate routines like onboarding.", "people"],
  ["Custom AI Solutions", "Tailored to your industry.", "custom"],
];
const questions = [
  [
    "How can AI automation help my business?",
    "AI can reduce repetitive work such as processing invoices, qualifying leads, and preparing reports. We start with your workflows, identify practical opportunities, and agree how to measure the results.",
  ],
  [
    "Do you integrate AI with Odoo?",
    "Yes. We can connect AI workflows and assistants with Odoo, using the modules, data, and permissions relevant to your business.",
  ],
  [
    "Is it secure and compliant?",
    "We assess data access, privacy requirements, and system permissions during discovery. Security controls and human review are designed around your use case; compliance requirements are reviewed with your team.",
  ],
  [
    "How long does it take to see results?",
    "Timing depends on the workflow, data readiness, and integrations. We define the scope and milestones with you, then measure the initial implementation before expanding it.",
  ],
];
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
      src={`/images/ai/reference/${name}.webp`}
      className={className}
      alt={alt}
      loading="lazy"
    />
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
      href={href}
      className={`${s.button} ${secondary ? s.secondary : ""} ${small ? s.small : ""}`}
    >
      {secondary && <MessageCircle aria-hidden="true" />}
      {children}
      {!secondary && <ArrowRight aria-hidden="true" />}
    </Link>
  );
}
function Heading({
  label,
  children,
  plain = false,
}: {
  label: string;
  children: React.ReactNode;
  plain?: boolean;
}) {
  return (
    <div className={`${s.heading} ${plain ? s.plainHeading : ""}`}>
      <span className={s.label}>{label}</span>
      <h2>{children}</h2>
    </div>
  );
}

export default function AIReferencePage() {
  return (
    <main id="main" className={s.page}>
      <AiAutomationHero locale="en" />
      <div className={s.container}>
        <nav className={s.capabilities} aria-label="Connected services">
          {[
            ["Web", "Modern workflows", "web", "/web"],
            ["Mobile", "Work anywhere", "mobile", "/mobile"],
            ["AI", "Smarter operations", "brain", "#solutions"],
            ["Integrations", "Odoo + AI", "integrations", "/odoo"],
            ["Support", "Real people", "support", "/support-ticket"],
          ].map(([title, copy, asset, href]) => (
            <Link href={href} key={title}>
              <Asset name={asset} />
              <span>
                <strong>{title}</strong>
                <small>{copy}</small>
              </span>
            </Link>
          ))}
        </nav>

        <section className={`${s.section} ${s.solutions}`} id="solutions">
          <div>
            <Heading label="Our AI solutions">
              From Tasks to
              <br />
              <em>Transformation</em>
            </Heading>
            <p>
              Practical AI automation that fits your business. Designed to save
              time, reduce manual work and help you do more with less.
            </p>
            <Action href={`${contact}&subject=Explore%20AI%20Solutions`}>
              Explore AI Solutions
            </Action>
          </div>
          <div className={s.solutionGrid}>
            {solutions.map(([title, copy, icon]) => (
              <Link
                href={`/contact?service=${encodeURIComponent(title)}`}
                className={s.solutionCard}
                key={title}
              >
                <Asset name={icon} />
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
                <ArrowRight className={s.cardArrow} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>

        <section className={s.section} id="process">
          <Heading label="A simple path to impact">
            Analyze. Automate. <em>Improve.</em>
          </Heading>
          <ol className={s.process}>
            {[
              [
                "Analyze",
                "Identify opportunities and measure impact.",
                "analyze",
              ],
              ["Automate", "Deploy AI workflows and assistants.", "workflow"],
              ["Improve", "Track results and scale what works.", "improve"],
            ].map(([title, copy, icon], i) => (
              <li key={title}>
                <span className={s.step}>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <Asset name={icon} />
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                </div>
                {i < 2 && (
                  <ArrowRight className={s.processArrow} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className={s.section} id="use-cases">
          <div className={s.headingRow}>
            <Heading label="Real-world use cases">
              AI That Delivers Results
            </Heading>
            <Link
              href={`${contact}&subject=AI%20Use%20Cases`}
              className={s.outlineLink}
            >
              See All Use Cases <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className={s.useCases}>
            {useCases.map(([title, copy, icon]) => (
              <Link
                href={`/contact?service=${encodeURIComponent(`AI ${title}`)}`}
                key={title}
              >
                <div>
                  <Asset name={icon} />
                  <h3>{title}</h3>
                </div>
                <p>{copy}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

        <WhyAutomationSection locale="en" />

      <div className={s.container}>
        <section className={s.section}>
          <Heading label="Our experience">Experience across the region</Heading>
          <div className={s.metrics}>
            {[
              ["250+", "Projects delivered", "clients"],
              ["8+", "Years of experience", "clock"],
              ["3", "Countries", "web"],
              ["6", "Industries served", "clients"],
            ].map(([number, label, asset]) => (
              <div key={label}>
                <Asset name={asset} />
                <div>
                  <strong>{number}</strong>
                  <p>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.proof}`}>
          <div>
            <span className={s.label}>What our clients say</span>
            <figure className={s.testimonial}>
              <blockquote>“{testimonial.quote}”</blockquote>
              <figcaption>
                <div>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}, {testimonial.company}</span>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className={s.faq}>
            <div className={s.headingRow}>
              <h2 className={s.label}>Frequently asked questions</h2>
              <Link href="/faqs" className={s.outlineLink}>
                View All FAQs <ArrowRight aria-hidden="true" />
              </Link>
            </div>
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
        </section>

        <section className={s.cta}>
          <div>
            <h2>Ready to Automate?</h2>
            <p>Let’s explore how AI can create real impact in your business.</p>
            <div className={s.actions}>
              <Action href="#solutions" small>
                Explore AI
              </Action>
              <Action href="/book-consultation" secondary small>
                Book a Free Consultation
              </Action>
            </div>
          </div>
          <ul>
            {[
              "Tailored to your needs",
              "Seamless Odoo integration",
              "Practical, measurable results",
            ].map((text) => (
              <li key={text}>
                <CheckSquare aria-hidden="true" />
                {text}
              </li>
            ))}
          </ul>
          <p className={s.signoff}>
            Smarter
            <br />
            <strong>Business</strong>
            <br />
            Brighter Tomorrow
          </p>
        </section>
      </div>
    </main>
  );
}
