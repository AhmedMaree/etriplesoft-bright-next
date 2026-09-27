import { notFound } from "next/navigation";
import { Photo, CTA, TextLink } from "@/components/site";
const articles: Record<
  string,
  {
    title: string;
    category: string;
    image: string;
    intro: string;
    sections: [string, string][];
  }
> = {
  "odoo-kpi-dashboard-real-time-business-insights": {
    title: "Odoo KPI Dashboards for Real-Time Business Insights",
    category: "Odoo ERP",
    image: "odoo-hero",
    intro:
      "A useful KPI dashboard connects decisions to reliable operational data. The goal is not to show every available number, but to give each role the information needed to act.",
    sections: [
      [
        "Start with the decision",
        "Define what the user needs to notice, compare or approve before choosing a metric or visualization.",
      ],
      [
        "Connect the source workflow",
        "A dashboard is only as useful as the records behind it. Confirm ownership, data quality and update timing for sales, finance, inventory and project information.",
      ],
      [
        "Design for different roles",
        "Executives, managers and operational teams need different levels of detail. Use role-based views and provide a clear path from a summary to the underlying record.",
      ],
    ],
  },
  "odoo-roi-return-on-investment": {
    title: "Understanding the Return on an Odoo ERP Investment",
    category: "Odoo ERP",
    image: "growth-chart",
    intro:
      "ERP value should be assessed against the work it changes: manual handoffs, duplicated data, reporting effort, process delays and the cost of maintaining disconnected tools.",
    sections: [
      [
        "Establish the current baseline",
        "Document the time, systems and responsibilities involved in the existing process before estimating the value of a new platform.",
      ],
      [
        "Include the full implementation scope",
        "Evaluate configuration, migration, integrations, training, support and internal team involvement—not software licenses alone.",
      ],
      [
        "Measure adoption and operational change",
        "Review whether teams are using the intended workflow and whether information reaches the next decision faster and with fewer corrections.",
      ],
    ],
  },
  "signs-you-need-erp-system": {
    title: "Signs Your Business Is Ready for an ERP System",
    category: "ERP Planning",
    image: "professional",
    intro:
      "Businesses often begin evaluating ERP when growth makes disconnected tools and informal handoffs difficult to control.",
    sections: [
      [
        "Teams maintain the same data in different places",
        "Repeated entry across spreadsheets and separate tools creates conflicting records and makes ownership unclear.",
      ],
      [
        "Reporting requires manual reconciliation",
        "When routine reports depend on collecting and correcting information from several teams, decisions arrive later than the work they describe.",
      ],
      [
        "Processes depend on individual memory",
        "Approvals, follow-up and exceptions become harder to manage when the workflow is not visible in a shared system.",
      ],
    ],
  },
  "odoo-construction": {
    title: "How Odoo Helps Construction Companies Improve Efficiency",
    category: "Odoo ERP",
    image: "construction",
    intro:
      "Construction projects bring together people, materials, subcontractors and tight schedules. Connecting these workflows helps teams understand costs and make informed decisions.",
    sections: [
      [
        "Connect project costs and accounting",
        "An integrated ERP connects purchase orders, supplier invoices and project budgets. Project managers and finance teams can work from the same information instead of reconciling disconnected spreadsheets.",
      ],
      [
        "Improve procurement and inventory visibility",
        "Link material requests to purchasing and inventory. Teams can track what has been ordered, what has arrived and what is still needed at each site.",
      ],
      [
        "Build a practical implementation plan",
        "Begin with a clear process review, confirm the reporting your teams need and introduce workflows in manageable phases. Training and ongoing support help make the new system part of daily work.",
      ],
    ],
  },
  "ai-business": {
    title: "5 Ways AI Can Transform Your Business Operations",
    category: "AI & Automation",
    image: "ai-hero",
    intro:
      "AI is most useful when it solves a specific operational problem. Start with a repeatable workflow, clear success criteria and appropriate human review.",
    sections: [
      [
        "1. Process documents",
        "Extract structured information from invoices and forms, then route uncertain results to a person for review.",
      ],
      [
        "2. Support customers",
        "Help customers find answers to common questions and pass complex requests to your support team with context.",
      ],
      [
        "3. Prepare reports",
        "Bring information from your existing systems into clear reports, with source records available for verification.",
      ],
      [
        "4. Assist employee onboarding",
        "Coordinate document requests, account setup and training reminders through a consistent onboarding process.",
      ],
      [
        "5. Connect business systems",
        "Reduce repetitive data entry by connecting tools and triggering actions when defined conditions are met. Monitor the workflow and retain human approval for important decisions.",
      ],
    ],
  },
  "seo-strategies": {
    title: "SEO Strategies for Businesses in Egypt, UAE and Saudi Arabia",
    category: "Digital Marketing",
    image: "marketing-hero",
    intro:
      "A useful search strategy begins with understanding your customers, the questions they ask and the locations you serve.",
    sections: [
      [
        "Create useful local content",
        "Explain your services clearly and write content that answers real customer questions. Include relevant location information where it helps a visitor make a decision.",
      ],
      [
        "Support Arabic and English audiences",
        "Plan language-specific content and navigation around your audience. Use clear URLs and accurate translations, and make each language experience easy to use.",
      ],
      [
        "Build a strong technical foundation",
        "Readable pages, descriptive titles, accessible links and a responsive layout help both users and search engines understand your website.",
      ],
      [
        "Measure meaningful outcomes",
        "Look beyond traffic to qualified inquiries and business results. Review the pages customers use and improve content based on their needs.",
      ],
    ],
  },
};
export function generateStaticParams() {
  return Object.keys(articles).map((article) => ({ article }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  return { title: articles[article]?.title || "Article Not Found" };
}
export default async function Article({
  params,
}: {
  params: Promise<{ article: string }>;
}) {
  const { article } = await params;
  const a = articles[article];
  if (!a) notFound();
  return (
    <main id="main">
      <div className="container">
        <article className="article-content">
          <TextLink href="/insights">All Articles</TextLink>
          <span className="eyebrow mt">{a.category}</span>
          <h1>{a.title}</h1>
          <p>{a.intro}</p>
          <Photo name={a.image} alt={a.title} />
          {a.sections.map(([t, p]) => (
            <section key={t}>
              <h2>{t}</h2>
              <p>{p}</p>
            </section>
          ))}
        </article>
      </div>
      <CTA />
    </main>
  );
}
