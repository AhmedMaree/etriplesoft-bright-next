// Legacy /insights entries that predate the WordPress migration (Phase 16).
// They are generic filler with no counterpart in the export, so they are kept
// as drafts: served with noindex, excluded from the /insights index and the
// sitemap. Three of them shared a slug with a migrated article; the migrated
// article owns the real slug and the old copy lives on under "-draft".
// Nothing here is deleted; promote or remove entries deliberately.

export const legacyDrafts: Record<
  string,
  {
    title: string;
    category: string;
    image: string;
    intro: string;
    sections: [string, string][];
  }
> = {
  "odoo-kpi-dashboard-real-time-business-insights-draft": {
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
  "odoo-roi-return-on-investment-draft": {
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
  "signs-you-need-erp-system-draft": {
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
  "measure-marketing-performance": {
    title: "Make Marketing Reports Useful to the Whole Team",
    category: "Digital Marketing",
    image: "marketing-hero",
    intro:
      "A useful marketing report helps a team understand what happened, what it means for the business and what to review next. Start with the decisions the report should support, then choose the measures and sources that answer those questions.",
    sections: [
      [
        "Start with the business question",
        "Agree whether the team needs to understand qualified enquiries, campaign reach, channel contribution or the next step in a customer journey. A clear question keeps a report focused.",
      ],
      [
        "Document the source and definition",
        "Record where each measure comes from and how the team defines it. Consistent definitions make comparisons easier and help people spot gaps in the data.",
      ],
      [
        "Turn observations into next steps",
        "Use the report to identify what needs further review. Share the context, owner and follow-up question alongside the numbers, then revisit them in the next reporting cycle.",
      ],
    ],
  },
  "integrated-digital-campaigns": {
    title: "Plan Digital Campaigns Around Real Customer Journeys",
    category: "Digital Marketing",
    image: "marketing-hero",
    intro:
      "Search, paid media, social and content can support different parts of a customer's decision. Coordinating those channels starts with understanding the audience and what the business wants each campaign to help people do.",
    sections: [
      [
        "Understand the audience and context",
        "Review the questions customers ask, the locations and languages you serve, and the information people need before they contact your team.",
      ],
      [
        "Give each channel a clear role",
        "Plan how search, advertising, social and content work together. Align messages and landing pages so a person can continue their journey without having to start over.",
      ],
      [
        "Review and improve as a team",
        "Choose measures that match the campaign goal, check the quality of enquiries with the people handling follow-up, and use those observations to guide the next iteration.",
      ],
    ],
  },
  "erp-benefits-for-growing-businesses": {
    title: "ERP Benefits to Consider as Your Business Grows",
    category: "ERP Planning",
    image: "growth-chart",
    intro:
      "An ERP system can help connect information and workflows across a business. The useful benefits depend on the problems a team needs to solve, the quality of its processes and how well the system is adopted.",
    sections: [
      [
        "Work from shared information",
        "Connecting records across finance, sales, inventory and operations can reduce repeated data entry and make ownership clearer. Begin by understanding how information moves between teams today.",
      ],
      [
        "Make routine processes easier to follow",
        "A mapped workflow can show who owns a task, what approvals it needs and what should happen when an exception appears. Keep the process clear before automating it.",
      ],
      [
        "Build reports around real decisions",
        "Choose the measures managers need to review, then confirm where the data comes from and who maintains it. Reliable definitions matter more than filling a dashboard with metrics.",
      ],
      [
        "Plan for adoption and ongoing support",
        "Training, testing and clear responsibilities help teams use the system consistently. Include the time and support needed to introduce new workflows when planning the project.",
      ],
    ],
  },
  "modern-seo-friendly-website": {
    title: "Why Your Business Needs a Modern, SEO-Friendly Website",
    category: "Web Development",
    image: "web-hero",
    intro:
      "A business website should make it easy for people to understand what you offer, find useful information and choose a next step. Clear structure and a responsive experience also help search engines interpret the content.",
    sections: [
      [
        "Organize pages around customer questions",
        "Use plain headings, helpful service details and descriptive links. A visitor should be able to scan a page and understand whether it answers their question.",
      ],
      [
        "Make the experience work on mobile",
        "Check that text, navigation, images and forms remain clear on smaller screens. A responsive layout should make the same important actions easy to find across devices.",
      ],
      [
        "Build a sound search foundation",
        "Use accurate page titles, accessible markup, descriptive URLs and useful content. For regional audiences, plan Arabic and English experiences with the right language and reading direction.",
      ],
      [
        "Connect enquiries to the next step",
        "Make contact options clear and agree who follows up. When the process needs it, connect website forms to the systems that manage enquiries and customer records.",
      ],
    ],
  },
  "b2b-marketing-strategies-middle-east": {
    title: "Digital Marketing Strategies for B2B Growth in the Middle East",
    category: "Digital Marketing",
    image: "marketing-hero",
    intro:
      "B2B marketing works best when channel choices, useful content and follow-up reflect how customers make decisions. In the Middle East, businesses may also need to account for different local markets and Arabic- and English-speaking audiences.",
    sections: [
      [
        "Understand the buying context",
        "Identify the roles involved, the questions they ask and what they need to evaluate a supplier. Use conversations with sales and customer-facing teams to shape the plan.",
      ],
      [
        "Choose channels for their role",
        "Search can help people find information, paid campaigns can test a specific offer, and useful content can support longer decisions. Set a clear purpose for each channel.",
      ],
      [
        "Plan for regional language and context",
        "Decide where Arabic and English content is useful and adapt examples and terminology for the audiences you serve. Translation alone may not answer local questions.",
      ],
      [
        "Measure and learn with the sales team",
        "Agree how to identify a qualified enquiry and how campaign information reaches the people following up. Review what happened and use it to guide the next campaign.",
      ],
    ],
  },
};
