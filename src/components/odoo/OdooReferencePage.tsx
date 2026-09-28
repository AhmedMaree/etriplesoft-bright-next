import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Users,
  MapPin,
  BriefcaseBusiness,
  Star,
  Factory,
  Quote,
  HardHat,
  Settings,
  Box,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
} from "lucide-react";
import styles from "./OdooReferencePage.module.css";

const base = "/images/odoo/reference/";
const demoHref = "/contact?service=Odoo%20ERP%20Demo";
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
const benefits = [
  [
    "Customization & Integration",
    "Tailor Odoo to fit your unique business processes. Integrate with your existing systems and third-party tools seamlessly.",
    "customization",
  ],
  [
    "Local Support in Egypt",
    "Our Cairo-based team provides on-site and remote support, training, and consultation in Arabic and English.",
    "support",
  ],
  [
    "Ongoing Growth",
    "We stay with you beyond go-live. Continuous support, upgrades, and new features to help you grow.",
    "growth",
  ],
];
const industries = [
  ["Construction & Real Estate", "construction", HardHat],
  ["Manufacturing", "manufacturing", Settings],
  ["Trading & Distribution", "distribution", Box],
  ["Retail & E-commerce", "retail", ShoppingBag],
  ["Healthcare", "healthcare", Stethoscope],
  ["Education", "education", GraduationCap],
  ["Professional Services", "professional", Users],
] as const;
const modules = [
  [
    "Accounting",
    "Full financial management with real-time reporting.",
    "accounting",
  ],
  ["CRM", "Turn leads into loyal customers.", "crm"],
  ["Inventory", "Optimize your stock and supply chain.", "inventory"],
  ["Sales", "Boost your revenue with a modern sales flow.", "sales"],
  [
    "Manufacturing",
    "Streamline production and operations.",
    "manufacturing-icon",
  ],
  ["HR", "Manage your people and grow your team.", "hr"],
  ["Projects", "Deliver projects on time and within budget.", "projects"],
];
const faqs = [
  [
    "How long does an Odoo implementation take?",
    "The timeline depends on your modules, data migration, integrations, and business processes. We agree a phased implementation plan after discovery, with clear milestones for testing, training, and go-live.",
  ],
  [
    "Is Odoo suitable for small and medium businesses in Egypt?",
    "Yes. Odoo’s modular structure lets you start with the applications your business needs and add capabilities as you grow. We help you choose a scope that fits your team and operations.",
  ],
  [
    "Do you provide training for our team?",
    "Yes. Training is part of our implementation approach, with practical sessions tailored to your team’s roles and daily workflows.",
  ],
  [
    "Can you integrate Odoo with our existing systems?",
    "We assess your current systems and available interfaces during discovery, then plan the integrations and data migration your workflows require.",
  ],
  [
    "Do you offer ongoing support after go-live?",
    "Yes. We offer ongoing support, consultation, upgrades, and improvements. Support scope and arrangements are agreed with your team.",
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
      className={className}
      src={`${base}${name}.webp`}
      alt={alt}
      loading="lazy"
    />
  );
}
function DemoButton({ secondary = false }: { secondary?: boolean }) {
  return (
    <Link
      className={`${styles.button} ${secondary ? styles.secondary : ""}`}
      href={secondary ? "/contact?service=Odoo%20ERP%20Consultation" : demoHref}
    >
      {secondary ? "Talk to an Odoo Expert" : "Book a Free Demo"}
      {!secondary && <ArrowRight aria-hidden="true" />}
    </Link>
  );
}
function LearnMore({ subject }: { subject: string }) {
  return (
    <Link
      className={styles.learnMore}
      href={`/contact?service=${encodeURIComponent(`Odoo ${subject}`)}`}
      aria-label={`Learn more about Odoo ${subject}`}
    >
      Learn More <ArrowRight aria-hidden="true" />
    </Link>
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

export default function OdooReferencePage() {
  return (
    <main id="main" className={styles.page}>
      <section className={styles.hero}>
        <img
          src={`${base}hero.webp`}
          className={styles.heroImage}
          alt="Odoo dashboard on a laptop in a bright office"
          fetchPriority="high"
        />
        <div className={`${styles.container} ${styles.heroContent}`}>
          <span className={styles.eyebrow}>
            Odoo ERP in Egypt | Licensed Partner | Local Experts
          </span>
          <h1>
            Odoo ERP
            <br />
            Implementation <em>in Egypt</em>
          </h1>
          <p>
            Transform your business with Odoo, the all-in-one ERP solution.
            ETripleSoft helps Egyptian businesses implement, customize and scale
            Odoo for sustainable growth.
          </p>
          <Checks
            items={[
              "Official Odoo Partner",
              "Local Egyptian Team",
              "End-to-End Support",
            ]}
          />
          <div className={styles.actions}>
            <DemoButton />
            <DemoButton secondary />
          </div>
          <Asset
            name="gold-partner"
            className={styles.goldPartner}
            alt="Odoo Gold Partner"
          />
        </div>
      </section>
      <section className={styles.clients} aria-label="Trusted clients">
        <div className={styles.container}>
          <p>Trusted by leading businesses in Egypt and the region</p>
          <div>
            <Asset
              name="clients"
              alt="Orascom Construction, Elsewedy Electric, CIB, Infinite, Juhayna, Carrier, and etisalat"
            />
            <Link href="/portfolio">
              and more… <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.process}`}
        id="implementation"
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
              <h2>
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
      </section>

      <section
        className={`${styles.section} ${styles.benefits}`}
        id="why-etriplesoft"
      >
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>Why ETripleSoft</span>
            <h2>
              Built Around <em>Your Business</em>
            </h2>
            <p>
              More than an ERP implementation — we deliver long-term value with
              solutions
              <br className={styles.desktopBreak} /> that fit your needs, local
              expertise, and continuous support.
            </p>
          </div>
          <div className={styles.benefitGrid}>
            {benefits.map(([title, copy, asset]) => (
              <article key={title}>
                <Asset name={asset} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <LearnMore subject={title} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.industrySection}`}
        id="industries"
      >
        <div className={styles.container}>
          <div className={styles.industryHeading}>
            <div>
              <span className={styles.eyebrow}>Industries</span>
              <h2>
                Industry <em>Solutions</em>
              </h2>
              <p>
                We understand your industry. Our Odoo solutions are tailored
                <br className={styles.desktopBreak} /> to your sector’s unique
                needs.
              </p>
            </div>
            <Link href="/industries" className={styles.learnMore}>
              View All Industries <ArrowRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.industryGrid}>
            {industries.map(([title, asset, Icon]) => (
              <Link
                className={styles.industryCard}
                href={`/contact?service=Odoo%20ERP&industry=${encodeURIComponent(title)}`}
                key={title}
              >
                <Asset name={asset} alt={title} />
                <div>
                  <span>
                    <Icon aria-hidden="true" />
                  </span>
                  <h3>{title}</h3>
                  <ArrowRight
                    className={styles.industryArrow}
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.modules}`} id="solutions">
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.eyebrow}>ERP modules</span>
            <h2>
              A Complete ERP Solution
              <br />
              for <em>Your Business</em>
            </h2>
            <p>
              Odoo integrates all your business processes in one platform,
              helping you work
              <br className={styles.desktopBreak} /> smarter, faster and more
              efficiently.
            </p>
          </div>
          <div className={styles.moduleGrid}>
            {modules.map(([title, copy, asset]) => (
              <article key={title}>
                <Asset name={asset} />
                <h3>{title}</h3>
                <p>{copy}</p>
                <LearnMore subject={title} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.region}`}>
        <div className={styles.container}>
          <div className={styles.regionTop}>
            <div>
              <span className={styles.eyebrow}>
                Trusted partner | Egypt | Saudi Arabia | UAE
              </span>
              <h2>
                Trusted Across
                <br />
                Egypt and the <em>Region</em>
              </h2>
              <p>
                Helping businesses in Egypt, Saudi Arabia and UAE achieve more
                with Odoo. Local expertise, regional presence, and a proven
                track record you can rely on.
              </p>
            </div>
            <Asset
              name="region"
              alt="Regional presence in Egypt, Saudi Arabia, and the UAE"
            />
          </div>
          <div className={styles.stats}>
            {[
              ["250+", "Happy Clients", Users],
              ["3", "Countries", MapPin],
              ["10+", "Years of Experience", BriefcaseBusiness],
              ["98%", "Client Satisfaction", Star],
            ].map(([number, label, Glyph]) => {
              const Icon = Glyph as typeof Users;
              return (
                <div key={String(label)}>
                  <span className={styles.statIcon}>
                    <Icon aria-hidden="true" />
                  </span>
                  <div>
                    <strong>{String(number)}</strong>
                    <span>{String(label)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.proof}`}>
        <div className={`${styles.container} ${styles.proofGrid}`}>
          <article className={styles.story}>
            <h2>
              Customer <em>Success Story</em>
            </h2>
            <span className={styles.storyTag}>
              <Factory aria-hidden="true" />
              Manufacturing <i /> Egypt
            </span>
            <blockquote>
              <Quote aria-hidden="true" />
              <p>
                “ETripleSoft transformed our operations with Odoo. We now have
                full visibility across our inventory, production, and finance,
                which helped us <strong>increase efficiency by 40%.</strong>”
              </p>
            </blockquote>
            <div className={styles.customer}>
              <Asset name="customer" alt="Ahmed Mostafa" />
              <div>
                <h3>Ahmed Mostafa</h3>
                <p>Operations Manager</p>
              </div>
              <Asset name="elsewedy" alt="Elsewedy Electric" />
            </div>
          </article>
          <section className={styles.faq} aria-labelledby="odoo-faq-title">
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
          </section>
        </div>
      </section>

      <section className={styles.demo}>
        <Asset
          name="demo"
          className={styles.demoImage}
          alt="Odoo dashboard ready for a personalized demonstration"
        />
        <div className={styles.container}>
          <div className={styles.demoCopy}>
            <span className={styles.eyebrow}>
              Ready to transform your business?
            </span>
            <h2>
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
              <Checks
                items={[
                  "No commitment",
                  "Expert consultation",
                  "Tailored to your needs",
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
