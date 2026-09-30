import Link from "next/link";
import { ArrowRight, Headphones, Plus, Quote } from "lucide-react";
import s from "./CloudReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const contact = "/contact?service=Cloud%20Security";
const asset = (name: string) => `/images/cloud/reference/${name}.webp`;
const cloudTestimonial = featuredTestimonials.cloud;
const cloudOverviewTestimonial = featuredTestimonials.cloudOverview;

const solutions = [
  ["Microsoft 365", "Secure collaboration and productivity.", "microsoft"],
  ["Azure", "Cloud security and governance.", "azure"],
  ["Identity & Access", "Right access, greater control.", "identity"],
  ["Endpoint Protection", "Devices secure. Teams productive.", "endpoint"],
  ["Backup & Recovery", "Your data. Always available.", "backup"],
  ["Compliance", "Meet today’s requirements.", "compliance"],
] as const;
const process = [
  ["Assess", "Understand your current environment and risks."],
  ["Design", "Create a tailored security architecture."],
  ["Implement", "Deploy and integrate security solutions."],
  ["Monitor", "Detect threats and coordinate response."],
  ["Optimize", "Improve controls and compliance."],
] as const;
const reasons = [
  [
    "Proven Expertise",
    "Years of experience in cloud and security solutions.",
    "expertise",
  ],
  [
    "Certified Professionals",
    "Microsoft Partner expertise for cloud, identity and security.",
    "certified",
  ],
  [
    "Responsive Support",
    "Regional assistance from a team you can reach.",
    "support",
  ],
  [
    "Local Presence",
    "In-depth understanding of the Egyptian market.",
    "presence",
  ],
  [
    "Business-Focused",
    "Security strategies aligned with your business goals.",
    "growth",
  ],
] as const;
const industries = [
  ["Banking & Financial Services", "banking"],
  ["Telecommunications", "telecom"],
  ["Government & Public Sector", "government"],
  ["Healthcare", "healthcare"],
  ["Manufacturing", "manufacturing"],
  ["Retail & E-commerce", "retail"],
] as const;
const faqs = [
  [
    "How do you secure Microsoft 365?",
    "We review identity and access, data protection, mail security, Teams and SharePoint settings, then recommend controls for your environment.",
  ],
  [
    "Can you help with compliance requirements?",
    "We assess your environment against the requirements relevant to your organization and define the controls and evidence your team needs.",
  ],
  [
    "Do you support ongoing monitoring?",
    "Monitoring and response coverage can be included in an agreed support scope based on your systems and operational requirements.",
  ],
] as const;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className={s.eyebrow}>{children}</span>;
}
function More({
  subject,
  children = "Learn More",
}: {
  subject: string;
  children?: React.ReactNode;
}) {
  return (
    <Link
      className={s.learnMore}
      href={`${contact}&solution=${encodeURIComponent(subject)}`}
    >
      {children}
      <ArrowRight aria-hidden="true" />
    </Link>
  );
}

export default function CloudReferencePage() {
  return (
    <main id="main" className={s.page}>
      <section className={s.hero}>
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <Eyebrow>Secure cloud. Stronger businesses.</Eyebrow>
            <h1>
              Cloud Security
              <br />
              Solutions in <em>Egypt</em>
            </h1>
            <p>
              Protect your cloud, data and business with enterprise-grade cloud
              security solutions. ETripleSoft helps organizations in Egypt
              design, secure and manage modern cloud environments with
              confidence.
            </p>
            <div className={s.actions}>
              <Link
                className={s.button}
                href={`${contact}&subject=Security%20Assessment`}
              >
                Get a Free Security Assessment
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link
                className={`${s.button} ${s.secondary}`}
                href="/book-consultation"
              >
                <Headphones aria-hidden="true" />
                Book a Free Consultation
              </Link>
            </div>
            <div
              className={s.partners}
              aria-label="Cloud platforms and credentials"
            >
              <img
                src={asset("microsoft-partner")}
                alt="Microsoft Solutions Partner"
              />
              <div>
                <strong>Microsoft 365</strong>
                <span>Productivity and security</span>
              </div>
              <div>
                <strong>Microsoft Azure</strong>
                <span>Cloud infrastructure</span>
              </div>
            </div>
          </div>
          <img
            className={s.heroImage}
            src={asset("hero")}
            alt="Secure cloud protected above a server stack"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className={s.trustedSection}>
        <div className={`${s.container} ${s.trusted}`}>
          <p>Trusted by leading organizations across Egypt</p>
          <img
            className={s.clientLogos}
            src={asset("clients")}
            alt="Orascom Construction, Elsewedy Electric, CIB, Vodafone, Samsung, and Etisalat"
          />
          <Link href="/portfolio">
            See All Clients
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className={s.container}>
        <section className={`${s.section} ${s.solutions}`} id="solutions">
          <div className={s.headingRow}>
            <div>
              <Eyebrow>Our solutions</Eyebrow>
              <h2>Complete Cloud Security for a Stronger Tomorrow</h2>
              <p>
                Modern security for modern businesses. Integrated, scalable and
                built for growth.
              </p>
            </div>
            <Link className={s.learnMore} href="/book-consultation">Book a Free Consultation <ArrowRight aria-hidden="true" /></Link>
          </div>
          <div className={s.solutionGrid}>
            {solutions.map(([title, copy, icon]) => (
              <article className={s.solutionCard} key={title}>
                <img src={asset(icon)} alt="" />
                <h3>{title}</h3>
                <p>{copy}</p>
                <More subject={title} />
              </article>
            ))}
          </div>
        </section>

        <section className={`${s.section} ${s.process}`} id="process">
          <div className={s.processLayout}>
            <div className={s.processCopy}>
              <Eyebrow>Our process</Eyebrow>
              <h2>A Clear Path to a More Secure Cloud</h2>
              <p>
                We follow a proven, structured approach to ensure your cloud
                environment is secure, compliant and optimized for your
                business.
              </p>
              <ol className={s.steps}>
                {process.map(([title, copy], index) => (
                  <li key={title}>
                    <span className={s.stepNumber}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    {index < process.length - 1 && (
                      <ArrowRight className={s.stepArrow} aria-hidden="true" />
                    )}
                  </li>
                ))}
              </ol>
            </div>
            <article className={s.processCard}>
              <img src={asset("strategy")} alt="Abstract cloud illustration" />
              <h3>
                From Strategy
                <br />
                to a Safer Tomorrow
              </h3>
              <p>
                We don’t just secure your cloud. We help you unlock its full
                potential.
              </p>
            </article>
          </div>
        </section>

        <section className={`${s.section} ${s.why}`}>
          <Eyebrow>Why ETripleSoft</Eyebrow>
          <h2>A Trusted Partner in Cloud Security</h2>
          <p>Global technology. Local expertise. Real business outcomes.</p>
          <div className={s.whyGrid}>
            {reasons.map(([title, copy, icon]) => (
              <article key={title}>
                <img src={asset(icon)} alt="" />
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className={s.statsBand}>
        <div className={`${s.container} ${s.statsInner}`}>
          <h2>
            Numbers That
            <br />
            Tell Our Story
          </h2>
          <div className={s.statsList}>
            {[
              ["250+", "Projects Delivered"],
              ["3", "Countries"],
              ["10+", "Years of Experience"],
            ].map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <figure className={s.statsQuote}>
            <Quote aria-hidden="true" />
            <blockquote>“{cloudOverviewTestimonial.quote}”</blockquote>
            <figcaption>
              — {cloudOverviewTestimonial.name}, {cloudOverviewTestimonial.role}, {cloudOverviewTestimonial.company}
            </figcaption>
          </figure>
        </div>
      </section>

      <div className={s.container}>
        <section className={`${s.section} ${s.architectureSection}`}>
          <div className={s.architectureLayout}>
            <div className={s.architecture}>
              <Eyebrow>Solution architecture</Eyebrow>
              <h2>A More Secure Cloud Environment</h2>
              <p>People. Devices. Data. Protected everywhere.</p>
              <img
                className={s.architectureImage}
                src={asset("architecture")}
                alt="Microsoft 365 and Azure security architecture connecting users, endpoints, applications, encrypted data, threat protection, and compliance"
              />
            </div>
            <div className={s.proof}>
              <Eyebrow>What our clients say</Eyebrow>
              <figure className={s.testimonial}>
                <Quote className={s.testimonialMark} aria-hidden="true" />
                <blockquote>“{cloudTestimonial.quote}”</blockquote>
                <figcaption>
                  <div>
                    <strong>{cloudTestimonial.name}</strong>
                    <span>{cloudTestimonial.role}, {cloudTestimonial.company}</span>
                  </div>
                </figcaption>
              </figure>
              <div className={s.faq}>
                <div className={s.headingRow}>
                  <h3>Frequently Asked Questions</h3>
                  <Link href="/faqs" className={s.outlineLink}>
                    View All FAQs
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
                {faqs.map(([question, answer]) => (
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
          </div>
        </section>

        <section className={`${s.section} ${s.industries}`}>
          <div className={s.headingRow}>
            <div>
              <Eyebrow>Industries & use cases</Eyebrow>
              <h2>Cloud Security Across Every Industry</h2>
              <p>
                We help organizations in Egypt across multiple sectors secure
                their cloud environments and accelerate digital transformation.
              </p>
            </div>
            <Link className={s.outlineLink} href="/industries">
              Explore All Industries
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className={s.industryGrid}>
            {industries.map(([title, image]) => (
              <Link
                href={`/contact?service=Cloud%20Security&industry=${encodeURIComponent(title)}`}
                className={s.industryCard}
                key={title}
              >
                <img src={asset(image)} alt={title} />
                <span>{title}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className={s.cta}>
        <div className={`${s.container} ${s.ctaInner}`}>
          <div>
            <h2>Ready to Secure Your Cloud?</h2>
            <p>
              Let’s build a safer, stronger and more resilient future for your
              business in Egypt.
            </p>
          </div>
          <Link className={s.ctaButton} href={contact}>
            Get Started Today
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
