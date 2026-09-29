import Link from "next/link";
import {
  ArrowRight, Building2, PanelsTopLeft, Code2, Smartphone, UsersRound,
  ChartNoAxesColumnIncreasing, Zap, Compass, PenTool, Wrench, Rocket,
  MapPin, Star,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import s from "./WebReferencePage.module.css";

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
  return <Link href={href} className={`${s.action} ${secondary ? s.secondary : ""}`}>{children}{!secondary && <ArrowRight aria-hidden="true" />}</Link>;
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
        <div className={`${s.container} ${s.heroGrid}`}>
          <div className={s.heroCopy}>
            <span className={s.pill}><PanelsTopLeft aria-hidden="true" />Web design &amp; development</span>
            <h1>Web<br /><em>Platforms</em></h1>
            <h2>Fast. Modern. Built to convert.</h2>
            <p>We design and develop high-performing websites that look great, work flawlessly and help your business grow.</p>
            <div className={s.actions}><Action>Start a Project</Action><Action secondary href="#work">View Our Work</Action></div>
            <div className={s.heroBenefits}>
              <div><ChartNoAxesColumnIncreasing aria-hidden="true" /><span>Modern<br />Designs</span></div>
              <div><Code2 aria-hidden="true" /><span>High<br />Performance</span></div>
              <div><Smartphone aria-hidden="true" /><span>Mobile<br />First</span></div>
              <div><UsersRound aria-hidden="true" /><span>Built for<br />Business Growth</span></div>
            </div>
          </div>
          <div className={s.heroVisual}>
            <Asset name="hero-scene" alt="Laptop and phone showing a responsive website in a bright workspace" className={s.heroArt} />
            <span className={s.heroNote}>Design<br />Develop<br />Grow <ArrowRight aria-hidden="true" /></span>
          </div>
        </div>
      </section>

      <section className={s.regionStrip} aria-label="Regional offices">
        <div className={`${s.container} ${s.regionInner}`}>
          <div className={s.regionLead}><MapPin aria-hidden="true" /><strong>Local teams.<br />Regional reach.</strong></div>
          <div className={s.regionCards}>{regions.map(([name, city, image]) => <div key={name}><Asset name={image} alt="" className={s.regionIcon} /><span><strong>{name}</strong><small>{city}</small></span></div>)}</div>
        </div>
      </section>

      <div className={s.container}>
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
          <div className={s.proofLead}><Heading label="What our clients say">Real partners.<br />Real results.</Heading></div>
          <figure className={s.testimonial}><div className={s.stars} aria-label="Five stars">{Array.from({ length: 5 }, (_, i) => <Star key={i} fill="currentColor" aria-hidden="true" />)}</div><blockquote>Professional, responsive, and truly understand our business needs.</blockquote><figcaption><span className={s.avatar}>MY</span><span><strong>Marco Youssef</strong><small>CEO, Manufacturing Company</small></span></figcaption></figure>
        </section>

        <section className={s.cta} id="contact">
          <div className={s.ctaCopy}><span>Have a project in mind?</span><h2>Ready to build your website?</h2><p>Let's create a clear, high-performing website that helps your business grow.</p><div className={s.actions}><Action>Start a Project</Action><Action secondary href="/portfolio">View Our Work</Action></div><ul><li>Planned around your goals</li><li>Responsive across devices</li><li>Connected to your workflows</li></ul></div>
          <div className={s.form}><ContactForm initialService="Web Development" /></div>
        </section>
      </div>
    </main>
  );
}
