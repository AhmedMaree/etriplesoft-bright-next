import type { IndustryPageData } from "./types";

export const education: IndustryPageData = {
  slug: "education",
  name: "Education",
  eyebrow: "Odoo for education",
  heroTitle: "Connect admissions, learning, fees and administration",
  heroDescription:
    "Schools and training organizations need student-facing journeys and back-office operations to share reliable records. ETripleSoft combines standard Odoo apps with carefully scoped education configuration around admissions, learning, documents, fees and communications.",
  heroHighlights: [
    "A traceable path from enquiry to enrollment",
    "Learning and administration connected to shared records",
    "Bilingual portals, documents and communication workflows",
  ],
  problemsIntro:
    "The legacy education source centers on scattered admissions, fee administration, communication gaps and siloed student records. It also contains extensive school-specific functionality, which must be separated from Odoo’s standard apps and scoped honestly.",
  problems: [
    { title: "Admissions are scattered", description: "Enquiries, applications, documents, reviews and decisions often move between forms, email and spreadsheets without a reliable status." },
    { title: "Fee records need reconciliation", description: "Structures, instalments, discounts, invoices, receipts and outstanding balances can be difficult to align across administration and finance." },
    { title: "Academic and administrative records diverge", description: "Student, guardian, class, attendance and document information may be repeated in separate systems." },
    { title: "Communication lacks shared context", description: "Applicants, learners, parents or sponsors receive messages through multiple channels without a consistent activity history." },
    { title: "Scheduling is coordination-heavy", description: "Teachers, rooms, cohorts, courses and calendars create conflicts when managed without common availability and ownership." },
    { title: "Portals expose only part of the journey", description: "Users need appropriate access to applications, learning, documents, invoices and updates without seeing internal records." },
  ],
  solutionIntro:
    "We use CRM, Website, eLearning, Accounting, Documents, Sign, Employees and Planning as the standard foundation. Student information, timetables, attendance or parent-specific capabilities are treated as configured or custom scope unless the selected edition provides a validated fit.",
  solutions: [
    { title: "Enquiry-to-enrollment coordination", description: "Website forms and CRM can capture interest, activities and application progress, with Documents and Sign supporting controlled records." },
    { title: "Learning delivery", description: "eLearning supports online courses, content, quizzes and learner access for suitable training and blended-learning use cases." },
    { title: "Fees and financial administration", description: "Accounting can manage invoicing, receipts and follow-up once the institution’s fee and sponsor rules are clearly defined." },
    { title: "People, schedules and communication", description: "Employees, Planning, Email Marketing and portal capabilities can support staff coordination and audience-specific communication." },
  ],
  modules: [
    { name: "CRM" }, { name: "Website" }, { name: "eLearning" },
    { name: "Accounting" }, { name: "Documents" }, { name: "Sign" },
    { name: "Employees" }, { name: "Attendances" }, { name: "Planning" },
    { name: "Email Marketing" }, { name: "Surveys" },
  ],
  workflowIntro:
    "The lifecycle below is typical rather than universal. School, university and training-provider workflows differ, so academic records and approvals are validated before configuration.",
  workflow: [
    { title: "Enquire and apply", description: "Capture interest through the website or staff, create the relevant CRM or application record and request required documents." },
    { title: "Review and decide", description: "Route the application through the institution’s checks, communication and approval steps with a visible status." },
    { title: "Enroll and bill", description: "Create or update the learner record, confirm the agreed course or cohort and issue the appropriate fee documents." },
    { title: "Learn and communicate", description: "Provide authorized course or portal access, coordinate schedules and send relevant learner or guardian updates." },
    { title: "Complete and retain", description: "Record completion, issue approved documents where applicable and retain the history according to institutional policy." },
  ],
  integrationsIntro:
    "Education technology estates vary widely. Odoo can be integrated with specialist platforms when the boundary between systems and the authoritative record is agreed.",
  integrations: [
    { title: "Payment gateways", description: "Online application or fee payments can be connected to suitable local providers and reconciled in Accounting." },
    { title: "E-invoicing services", description: "Invoices can follow the applicable localization and local e-invoicing process for the institution’s legal entity." },
    { title: "Biometric and attendance devices", description: "Staff or student attendance data can be integrated where device APIs and identity matching are reliable." },
    { title: "Video and learning platforms", description: "External learning, virtual-classroom or content platforms can be linked when eLearning is not the sole delivery environment." },
    { title: "Email and WhatsApp", description: "Approved channels can support reminders and updates while the relevant activity remains traceable in the system." },
    { title: "Identity and directory services", description: "Single sign-on or directory integration can be considered for staff and learner access according to the security model." },
  ],
  regionalIntro:
    "The source is written for institutions operating across Egypt, Saudi Arabia and the UAE. Regulatory, academic and fiscal details differ by institution type and must be confirmed with the responsible advisers.",
  regionalConsiderations: [
    { title: "Arabic and RTL", description: "Odoo supports Arabic and RTL use; bilingual application forms, portals, invoices, certificates and notifications still require content and layout review." },
    { title: "Tax and e-invoicing", description: "Fee and service invoicing is configured for the entity’s applicable tax treatment and current local e-invoicing requirements." },
    { title: "Multi-campus and multi-company", description: "Campus, branch and legal-entity structures require clear ownership, access, numbering and financial-reporting rules." },
    { title: "Privacy and role access", description: "Student, guardian, academic and financial data needs least-privilege access, auditability and an agreed retention policy." },
    { title: "Local payment methods", description: "Payment channels, instalments, refunds and sponsor arrangements are designed around actual institutional practice." },
    { title: "Hosting expectations", description: "Hosting, backup, identity, data-location and continuity expectations are reviewed for the institution and its stakeholders." },
  ],
  implementationIntro:
    "Education rollouts are planned around institutional readiness and the academic calendar, but no disruption-free or fixed-duration promise is made. Scope and cutover follow tested workflows and data.",
  implementation: [
    { title: "Discovery", description: "Map audiences, admissions, programs, documents, fees, learning, schedules, communication, reporting and access responsibilities." },
    { title: "Solution design", description: "Separate standard Odoo coverage from education-specific configuration or extensions and define the authoritative records." },
    { title: "Configuration", description: "Configure the selected apps, portals, roles, forms, templates, automations and approved integrations." },
    { title: "Data migration", description: "Assess and migrate agreed learners, contacts, programs, open applications, balances and documents with validation." },
    { title: "Training and go-live", description: "Train admissions, academic, finance, support and administrator roles using end-to-end institutional scenarios." },
    { title: "Support and improvement", description: "Stabilize live journeys, support users and prioritize improvements based on observed academic and administrative work." },
  ],
  faqs: [
    { question: "Does Odoo include a complete school information system?", answer: "Odoo includes useful standard apps for CRM, Website, eLearning, Accounting, Documents, Sign and HR. A complete school information model—such as student, guardian, timetable and academic-record depth—usually needs validated extensions or integration." },
    { question: "Can Odoo manage admissions from the website?", answer: "Website forms, CRM, Documents and Sign can support a structured admissions journey. Review rules, scoring, program capacity and education-specific records are configured to the institution’s requirements." },
    { question: "How long does an education implementation take?", answer: "The plan depends on institution type, academic scope, user groups, data, portals, integrations and the calendar. Discovery and representative scenario testing establish a responsible schedule." },
    { question: "How do you decide between customization and standard apps?", answer: "We use standard behavior where it supports the desired outcome and configure before developing. Custom work is reserved for stable, important education requirements with clear ownership and acceptance criteria." },
    { question: "Can existing student and fee data be migrated?", answer: "Yes, after assessing source structure, completeness, duplicates and retention needs. We agree the migration cut, test representative records and reconcile financial values before cutover." },
    { question: "How are staff trained and supported?", answer: "Training is organized by role for admissions, academic, finance, support and administrators. Post-launch coverage, issue handling and improvement work follow the agreed support plan." },
  ],
  cta: {
    title: "Start with one learner journey and its back-office handoffs",
    description: "Bring your application, enrollment, fee and learning flow. We will help separate standard Odoo coverage from the education-specific scope.",
    button: "Discuss education Odoo",
  },
  seo: {
    title: "Odoo Education Management System",
    description: "Connect admissions, eLearning, documents, fees, staff coordination and communications with a carefully scoped Odoo solution for education providers.",
  },
};

