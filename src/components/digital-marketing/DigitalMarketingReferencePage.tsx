import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Globe2,
  MapPin,
  Megaphone,
  Rocket,
  Search,
  Settings,
  Target,
  UsersRound,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import s from "./DigitalMarketingReferencePage.module.css";
import { DigitalMarketingHero } from "@/components/digital-marketing/DigitalMarketingHero";
import { featuredTestimonials } from "@/data/testimonials";

const testimonial = featuredTestimonials.digitalMarketing;

const services = [
  ["SEO", "Rank higher. Get found organically.", "icon-seo"],
  ["Google Ads", "Drive targeted traffic that converts.", "icon-ads"],
  ["Social Media Marketing", "Build your brand. Engage your audience.", "icon-social"],
  ["Content Marketing", "Create content that drives results.", "icon-content"],
  ["Analytics & Tracking", "Turn data into growth opportunities.", "icon-analytics"],
  ["Reporting & Insights", "Clear reports. Smarter decisions.", "icon-reporting"],
] as const;

const offices = [
  ["Egypt", "Cairo", "country-egypt"],
  ["UAE", "Dubai", "country-uae"],
  ["KSA", "Riyadh", "country-ksa"],
] as const;

const steps = [
  ["Strategy", "Understand your goals", Target],
  ["Launch", "Create and deploy campaigns", Rocket],
  ["Optimize", "Test, refine and scale", Settings],
  ["Report", "Share insights and next steps", BarChart3],
] as const;

const faqs = [
  ["How long does it take to see results?", "Timing depends on your goals, channels, audience and starting point. We agree on a measurement plan together and review progress as campaigns run."],
  ["How much do your services cost?", "The scope and fee depend on the channels, content and reporting support you need. We discuss your priorities before preparing a proposal."],
  ["Do you work with small businesses?", "Yes. We shape the plan around your audience, internal capacity and business priorities."],
  ["Which digital marketing platforms do you use?", "We select channels based on your audience and goals. Our services include search, paid advertising, social media, content and analytics."],
  ["Can you guarantee specific results?", "Marketing outcomes depend on many factors, so we do not promise a fixed result. We agree on clear measures, share reporting and use what we learn to improve the work."],
  ["How do I get started?", "Tell us about your business and goals. We will review the context with you and discuss a practical next step."],
] as const;

function Asset({ name, alt = "", className = "", eager = false }: { name: string; alt?: string; className?: string; eager?: boolean }) {
  const src = name === "hero-dashboard" ? "/images/project-marketing.webp" : `/images/digital-marketing/${name}.webp`;
  return <img className={className} src={src} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} decoding="async" />;
}

function SectionHeading({ eyebrow, title, description, href, link }: { eyebrow?: string; title: React.ReactNode; description?: string; href?: string; link?: string }) {
  return (
    <div className={s.sectionHeading}>
      <div className={s.headingCopy}>
        {eyebrow && <span className={s.eyebrow}>{eyebrow}</span>}
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
      {href && link && <Link className={s.textLink} href={href}>{link}<ArrowRight aria-hidden="true" /></Link>}
    </div>
  );
}

function Button({ children, href = "/contact?service=Digital%20Marketing", secondary = false }: { children: React.ReactNode; href?: string; secondary?: boolean }) {
  return <Link className={`${s.button} ${secondary ? s.buttonSecondary : ""}`} href={href}>{children}<ArrowRight aria-hidden="true" /></Link>;
}

export default function DigitalMarketingReferencePage() {
  return (
    <main id="main" className={s.page}>
      <DigitalMarketingHero locale="en" />
      <div className={`${s.container} ${s.pageSections}`}>
        <section className={`${s.section} ${s.services}`} id="solutions">
          <SectionHeading eyebrow="Our digital marketing services" title="A complete suite of digital marketing solutions to grow your business online." description="Choose the channels and measurement that fit your audience, goals and team." href="/contact?service=Digital%20Marketing" link="View All Services" />
          <div className={s.serviceGrid}>
            {services.map(([title, copy, image]) => <Link key={title} className={s.serviceCard} href={`/contact?service=Digital%20Marketing&solution=${encodeURIComponent(title)}`}>
              <span className={s.serviceIcon}><Asset name={image} alt="" /></span>
              <span className={s.serviceCopy}><strong>{title}</strong><small>{copy}</small></span>
              <span className={s.cardArrow}><ArrowRight aria-hidden="true" /></span>
            </Link>)}
          </div>
        </section>

        <section className={`${s.section} ${s.region}`}>
          <div className={s.regionCopy}>
            <SectionHeading eyebrow="Local expertise. Regional impact." title={<>Arabic + English<br /><em>Campaigns</em></>} description="We create culturally relevant campaigns in Arabic and English to help you reach the right audience across Egypt, the UAE and Saudi Arabia." />
            <Button>Start a Campaign</Button>
          </div>
          <div className={s.officeCards}>{offices.map(([country, city, image]) => <article key={country}><Asset name={image} alt="" /><h3>{country}</h3><p>{city}<br />Local perspective.<br />Regional reach.</p></article>)}</div>
        </section>

        <section className={`${s.section} ${s.process}`} id="process">
          <div className={s.processIntro}><SectionHeading eyebrow="Our process" title="From strategy to real results" description="A clear, measured process to grow your brand." /></div>
          <ol className={s.steps}>{steps.map(([title, copy, Icon], index) => <li key={title}><span className={s.stepIcon}><Icon aria-hidden="true" /></span><span className={s.stepArrow}>{index < steps.length - 1 && <ArrowRight aria-hidden="true" />}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
        </section>

        <section className={`${s.section} ${s.proof}`}>
          <SectionHeading eyebrow="A regional team. A proven track record." title="Marketing connected to business." description="Our teams work across the region, bringing years of experience to digital transformation." />
          <div className={s.proofGrid}>
            <article><span><Rocket aria-hidden="true" /></span><strong>250+</strong><h3>Projects delivered</h3><p>Work across digital transformation and business systems.</p></article>
            <article><span><BarChart3 aria-hidden="true" /></span><strong>8+</strong><h3>Years of experience</h3><p>Practical experience supporting growing businesses.</p></article>
            <article><span><Globe2 aria-hidden="true" /></span><strong>3</strong><h3>Regional markets</h3><p>Teams in Egypt, the UAE and Saudi Arabia.</p></article>
          </div>
        </section>

        <section className={`${s.section} ${s.testimonial}`}>
          <div><SectionHeading eyebrow="Client feedback" title={<>How clients describe<br /><em>working with us.</em></>} /></div>
          <figure>
            <blockquote>“{testimonial.quote}”</blockquote>
            <figcaption><span className={s.avatar} aria-hidden="true">WE</span><span><strong>{testimonial.name}</strong><small>{testimonial.role}, {testimonial.company}</small></span></figcaption>
          </figure>
        </section>

        <section className={s.faq}>
          <SectionHeading title="Frequently asked questions" description="Quick answers about our digital marketing services." href="/faqs" link="View All FAQs" />
          <div className={s.faqGrid}>{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div>
        </section>

        <section className={s.cta} id="contact">
          <div className={s.ctaCopy}><span className={s.eyebrow}>Ready to take your business to the next level?</span><h2>Grow your<br /><em>brand online.</em></h2><p>Let’s create a digital marketing strategy connected to your business goals.</p><ul><li><Check aria-hidden="true" />Arabic and English campaigns</li><li><Check aria-hidden="true" />Clear, useful reporting</li><li><Check aria-hidden="true" />Regional market context</li></ul></div>
          <div className={s.form}><ContactForm initialService="Digital Marketing" /></div>
        </section>
      </div>
    </main>
  );
}
