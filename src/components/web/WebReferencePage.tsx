import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, PanelsTopLeft, Smartphone, CirclePlay,
  ChartNoAxesColumnIncreasing, Zap, Compass, PenTool, Wrench, Rocket,
  MapPin,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import s from "./WebReferencePage.module.css";
import { featuredTestimonials } from "@/data/testimonials";

const testimonial = featuredTestimonials.web;

const contact = "/contact?service=Web%20Design%20and%20Development";
const services = [
  ["Corporate Websites", "Clear, professional sites built around your customers.", "service-corporate"],
  ["Landing Pages", "Focused pages for products, campaigns and enquiries.", "service-landing"],
  ["E-commerce Websites", "Online stores connected to the way you sell.", "service-ecommerce"],
  ["WordPress", "Flexible publishing your team can manage.", "service-wordpress"],
  ["WooCommerce", "Commerce built on a familiar content platform.", "service-woocommerce"],
  ["Shopify", "A store setup shaped around your catalog and operations.", "service-shopify"],
] as const;
const benefits = [
  ["Performance minded", "Fast-loading pages with careful asset and code choices.", "benefit-speed"],
  ["Responsive by design", "A consistent experience across phones, tablets and desktops.", "benefit-mobile"],
  ["Arabic and English", "Layouts planned for both languages and reading directions.", "benefit-search"],
  ["Built around action", "Clear paths help visitors find the next useful step.", "benefit-target"],
] as const;
const steps = [
  ["Plan", "Align the site with your goals, content and audience.", Compass],
  ["Design", "Shape the structure and interface around real user journeys.", PenTool],
  ["Build", "Develop, connect and review the experience across devices.", Wrench],
  ["Launch", "Prepare the release and agree how the site will be supported.", Rocket],
] as const;
const projects = [
  ["Corporate website", "A clear first impression for a regional business.", "corporate-preview"],
  ["Online store", "Product discovery and shopping in one smooth journey.", "commerce-preview"],
  ["Campaign landing page", "A focused concept for a new product launch.", "campaign-preview"],
] as const;
const regions = [
  ["Egypt", "Cairo", "country-egypt"],
  ["United Arab Emirates", "Dubai", "country-uae"],
  ["Saudi Arabia", "Riyadh", "country-ksa"],
] as const;

function Action({ children, secondary = false, href = contact }: { children: React.ReactNode; secondary?: boolean; href?: string }) {
  return <Link href={href} className={`${s.action} ${secondary ? s.secondary : ""}`}>
    {secondary ? <CirclePlay aria-hidden="true" /> : null}
    {children}
    {!secondary && <ArrowRight aria-hidden="true" />}
  </Link>;
}
function Heading({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className={s.heading}><span>{label}</span><h2>{children}</h2></div>;
}
function Asset({ name, alt, className = "" }: { name: string; alt: string; className?: string }) {
  return <img className={className} src={`/images/web/reference/${name}.webp`} alt={alt} loading="lazy" />;
}

export default function WebReferencePage() {
  return (
    <main id="main" className={s.page}>
      <section className={s.hero}>
        <div className={`container ${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <span className={s.pill}><PanelsTopLeft aria-hidden="true" />Web Design &amp; Development</span>
            <h1>
              <span>Web<span className={s.desktopSpace}> </span><br className={s.mobileBreak} /><em>Platforms</em></span>
              <span>That Move Your <span className={s.desktopCopy}>Business</span></span>
              <span><span className={s.desktopCopy}>Forward</span><span className={s.mobileCopy}>Business Forward</span></span>
            </h1>
            <p>We design and develop high-performance websites and web applications that combine modern design, seamless user experience and real business results.</p>
            <div className={s.actions}><Action>Start a Project</Action><Action secondary href="#work">View Our Work</Action></div>
            <div className={s.heroBenefits}>
              <div><span className={s.benefitIcon}><PanelsTopLeft aria-hidden="true" /></span><span>Modern<br />Designs</span></div>
              <div><span className={s.benefitIcon}><Zap aria-hidden="true" /></span><span>High<br />Performance</span></div>
              <div><span className={s.benefitIcon}><Smartphone aria-hidden="true" /></span><span>Mobile<br />First</span></div>
              <div><span className={s.benefitIcon}><ChartNoAxesColumnIncreasing aria-hidden="true" /></span><span>Built for<br />Business Growth</span></div>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Image
              src="/images/web/reference/hero-scene-en.webp"
              alt="Laptop and phone displaying a business website, surrounded by design, development, and results cards"
              width={1536}
              height={1024}
              sizes="(max-width: 760px) calc(100vw - 36px), (max-width: 820px) calc(100vw - 64px), (max-width: 1200px) 50vw, 48vw"
              fetchPriority="high"
              loading="eager"
              className={s.heroArt}
            />
          </div>
        </div>
      </section>

      <section className={s.regionStrip} aria-label="Regional offices">
        <div className={`container ${s.container} ${s.regionInner}`}>
          <div className={s.regionLead}><MapPin aria-hidden="true" /><strong>Local teams.<br />Regional reach.</strong></div>
          <div className={s.regionCards}>{regions.map(([name, city, image]) => <div key={name}><Asset name={image} alt="" className={s.regionIcon} /><span><strong>{name}</strong><small>{city}</small></span></div>)}</div>
        </div>
      </section>

      <div className={`container ${s.container}`}>
        <section className={`${s.section} ${s.services}`} id="solutions">
          <div className={s.sectionIntro}><div><Heading label="Our solutions">Web design &amp; development<br />for real business growth</Heading><p>From company websites to online stores, we build platforms that are clear, useful and manageable.</p></div><Link className={s.outlineLink} href={contact}>All Services <ArrowRight aria-hidden="true" /></Link></div>
          <div className={s.serviceGrid}>{services.map(([title, copy, image]) => <Link className={s.serviceCard} href={`${contact}&solution=${encodeURIComponent(title)}`} key={title}><span className={s.serviceIcon}><Asset name={image} alt="" /></span><span className={s.cardCopy}><strong>{title}</strong><small>{copy}</small></span><span className={s.cardArrow}><ArrowRight aria-hidden="true" /></span></Link>)}</div>
        </section>

        <section className={`${s.section} ${s.why}`}>
          <div className={s.whyIntro}><Heading label="Why choose ETripleSoft">More than just a website</Heading><p>We bring design, technology and business context together to create a site your team can use and your customers can understand.</p></div>
          <div className={s.benefitGrid}>{benefits.map(([title, copy, image]) => <article key={title}><span><Asset name={image} alt="" /></span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </section>

        <section className={`${s.section} ${s.process}`} id="process">
          <div className={s.sectionIntro}><Heading label="Our process">A clear path to launch</Heading><Action>Let's Get Started</Action></div>
          <ol className={s.steps}>{steps.map(([title, copy, Icon], index) => <li key={title}><span className={s.stepNumber}>{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" /><div><h3>{title}</h3><p>{copy}</p></div>{index < steps.length - 1 && <ArrowRight className={s.stepArrow} aria-hidden="true" />}</li>)}</ol>
        </section>

        <section className={`${s.section} ${s.work}`} id="work">
          <div className={s.sectionIntro}><Heading label="Illustrative design concepts">Websites made for real journeys</Heading><Link className={s.outlineLink} href="/portfolio">View All Work <ArrowRight aria-hidden="true" /></Link></div>
          <div className={s.projectGrid}>{projects.map(([title, copy, image]) => <article className={s.projectCard} key={title}><Asset name={image} alt={`${title} illustrative website preview`} /><div><span>Design concept</span><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </section>

        <section className={`${s.section} ${s.proof}`}>
          <div className={s.proofLead}><Heading label="Client feedback">How clients describe our work</Heading></div>
          <figure className={s.testimonial}><blockquote>“{testimonial.quote}”</blockquote><figcaption><span className={s.avatar} aria-hidden="true">TG</span><span><strong>{testimonial.name}</strong><small>{testimonial.role}, {testimonial.company}</small></span></figcaption></figure>
        </section>

        <section className={s.cta} id="contact">
          <div className={s.ctaCopy}><span>Have a project in mind?</span><h2>Ready to build your website?</h2><p>Let's create a clear, high-performing website that helps your business grow.</p><div className={s.actions}><Action>Start a Project</Action><Action secondary href="/portfolio">View Our Work</Action></div><ul><li>Planned around your goals</li><li>Responsive across devices</li><li>Connected to your workflows</li></ul></div>
          <div className={s.form}><ContactForm initialService="Web Development" /></div>
        </section>
      </div>
    </main>
  );
}
