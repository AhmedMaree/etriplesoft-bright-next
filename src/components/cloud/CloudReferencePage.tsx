import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Headphones,
  Factory,
  Hospital,
  Landmark,
  LockKeyhole,
  Plus,
  RadioTower,
  ShoppingCart,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import s from "./CloudReferencePage.module.css";
import { cloudTestimonials } from "@/data/testimonials";
import { publishedFaqs } from "@/data/faqs";
import { CloudSolutionsSection } from "./CloudSolutionsSection";
import { CloudProcessSection } from "./CloudProcessSection";
import { CloudTestimonialCarousel } from "./CloudTestimonialCarousel";
import { CloudClosingCta } from "./CloudClosingCta";

const contact = "/contact?service=Cloud%20Security";
const asset = (name: string) => `/images/cloud/reference/${name}.webp`;
const cloudTestimonialItems = cloudTestimonials.map((item) => ({
  ...item,
  avatarSrc: item.id === "summit" ? asset("customer") : undefined,
}));
const trustLogos = portfolioItems
  .filter((item): item is typeof item & { image: string; source: string } => Boolean(item.image && item.source))
  .slice(0, 6);

const solutions = [
  ["Microsoft 365", "Secure collaboration and productivity.", "microsoft"],
  ["Azure", "Cloud security and governance.", "azure"],
  ["Identity & Access", "Right access, greater control.", "identity"],
  ["Endpoint Protection", "Devices secure. Teams productive.", "endpoint"],
  ["Backup & Recovery", "Your data. Always available.", "backup"],
  ["Compliance", "Meet today’s requirements.", "compliance"],
] as const;

const architectureBenefits = [
  ["Stronger Security", LockKeyhole],
  ["Higher Productivity", ChartNoAxesColumnIncreasing],
  ["Simpler Management", Settings],
  ["Full Compliance", ShieldCheck],
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
  { title: "Banking & Financial Services", description: "Secure operations and customer data.", image: "banking", alt: "Banking and financial services building", Icon: Landmark },
  { title: "Telecommunications", description: "Reliable and secure connectivity.", image: "telecommunications", alt: "Telecommunications towers", Icon: RadioTower },
  { title: "Government & Public Sector", description: "Trusted security for critical services.", image: "government", alt: "Government building in Egypt", Icon: Landmark },
  { title: "Healthcare", description: "Protecting sensitive patient information.", image: "healthcare", alt: "Modern healthcare facility", Icon: Hospital },
  { title: "Manufacturing", description: "Secure and resilient operations.", image: "manufacturing", alt: "Industrial manufacturing facility", Icon: Factory },
  { title: "Retail & E-commerce", description: "Safe and seamless digital experiences.", image: "retail", alt: "Modern retail and e-commerce facility", Icon: ShoppingCart },
] as const;
const cloudFaqIds = ["cloud-03", "cloud-04", "cloud-05", "cloud-01", "cloud-02"] as const;
const faqs = cloudFaqIds
  .map((id) => publishedFaqs.find((faq) => faq.id === id))
  .filter((faq): faq is NonNullable<typeof faq> => faq !== undefined);

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
            <div className={s.partners} aria-label="Cloud platforms">
              <div className={s.partnerCard}>
                <Image src={asset("microsoft")} alt="" width={38} height={38} />
                <span>
                  <strong>Microsoft 365</strong>
                  <small>Productivity and security</small>
                </span>
                <ArrowRight aria-hidden="true" />
              </div>
              <div className={s.partnerCard}>
                <Image src={asset("azure")} alt="" width={38} height={38} />
                <span>
                  <strong>Microsoft Azure</strong>
                  <small>Cloud infrastructure</small>
                </span>
                <ArrowRight aria-hidden="true" />
              </div>
            </div>
          </div>
          <Image
            className={s.heroImage}
            src={asset("hero-english")}
            alt="Cloud security, threat monitoring and compliance around protected servers"
            width={1448}
            height={1086}
            sizes="(max-width: 900px) calc(100vw - 36px), (max-width: 1240px) 48vw, 600px"
            preload
          />
        </div>
      </section>

      <section className={s.trustedSection} aria-label="Cloud clients and success stories">
        <div className={`${s.container} ${s.trusted}`}>
          <p>Trusted by leading organizations across Egypt</p>
          <ul className={s.clientLogos} aria-label="Selected clients from our success stories">
            {trustLogos.map((client) => (
              <li key={client.id}>
                <Image
                  src={client.image}
                  alt={client.name}
                  width={72}
                  height={72}
                  sizes="(max-width: 720px) 12vw, 48px"
                />
              </li>
            ))}
          </ul>
          <Link href="/portfolio">
            See All Clients
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <div className={s.container}>
        <CloudSolutionsSection locale="en" />

        <CloudProcessSection locale="en" />

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
              ["8+", "Years of Experience"],
            ].map(([number, label]) => (
              <div key={label}>
                <strong>{number}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container">
        <section className={`${s.section} ${s.architectureSection}`}>
          <div className={s.architectureLayout}>
            <div className={s.architecture}>
              <Eyebrow>Solution architecture</Eyebrow>
              <h2>
                A More Secure
                <br />
                <em>Cloud Environment</em>
              </h2>
              <p>People. Devices. Data. Protected everywhere.</p>
              <Image
                className={s.architectureImage}
                src="/images/cloud/reference/secure-en-image.webp"
                alt="Microsoft 365 and Azure security architecture connecting users, endpoints, applications, encrypted data, threat protection, and compliance"
                width={1672}
                height={941}
                quality={95}
                sizes="(max-width: 767px) calc(100vw - 36px), (max-width: 1279px) calc(100vw - 96px), 760px"
              />
              <ul className={s.benefitStrip} aria-label="Cloud security benefits">
                {architectureBenefits.map(([label, Icon]) => (
                  <li key={label}>
                    <span className={s.benefitIcon}><Icon aria-hidden="true" /></span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={s.proof}>
              <CloudTestimonialCarousel items={cloudTestimonialItems} locale="en" />
              <div className={s.faq}>
                <div className={s.headingRow}>
                  <h3>Frequently Asked Questions</h3>
                  <Link href="/faqs" className={s.outlineLink}>
                    View All FAQs
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
                {faqs.map(({ id, question, answer }) => (
                  <details key={id}>
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
          <div className={s.industryContent}>
            <div className={s.headingRow}>
              <div className={s.industryIntro}>
                <Eyebrow>Industries & use cases</Eyebrow>
                <h2>
                  Cloud Security Across
                  <br />
                  <em>Every Industry</em>
                </h2>
                <p>
                  We help organizations in Egypt across multiple sectors secure
                  their cloud environments and accelerate digital transformation.
                </p>
              </div>
              <Link className={s.industryCta} href="/industries">
                Explore All Industries
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className={s.industryGrid}>
              {industries.map(({ title, description, image, alt, Icon }) => (
                <Link
                  href={`/contact?service=Cloud%20Security&industry=${encodeURIComponent(title)}`}
                  className={s.industryCard}
                  key={title}
                >
                  <Image
                    src={`/images/industries/${image}.webp`}
                    alt={alt}
                    fill
                    quality={90}
                    sizes="(max-width: 620px) calc(100vw - 40px), (max-width: 1100px) 31vw, (max-width: 1279px) 15vw, 197px"
                  />
                  <span className={s.industryIcon}><Icon aria-hidden="true" /></span>
                  <span className={s.industryCopy}>
                    <strong>{title}</strong>
                    <span>{description}</span>
                  </span>
                  <span className={s.industryArrow} aria-hidden="true"><ArrowRight /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <CloudClosingCta href={contact} />
    </main>
  );
}
