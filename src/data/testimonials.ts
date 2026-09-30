// Client quotes and attributions from the published home page in old-content.xml.
// Keep these verbatim apart from a small grammar repair to the regional deployment quote.
export const clientTestimonials = [
  {
    id: "technonet",
    quote:
      "Their Odoo accounting solution streamlined our finances with flawless ZATCA compliance and excellent support.",
    name: "Marco Youssef",
    role: "CFO",
    company: "Technonet",
  },
  {
    id: "onestack",
    quote: "I'm so impressed by your dedication to get the job done.",
    name: "Waled El Ganzory",
    role: "CEO",
    company: "OneStack",
  },
  {
    id: "alkanal",
    quote:
      "Your helpful attitude makes it clear that we can continue to take on new challenges and grow with your company.",
    name: "Tamer Gahreb",
    role: "Owner",
    company: "AlKanal",
  },
  {
    id: "summit",
    quote:
      "Their cloud security and ERP integration exceeded our expectations with outstanding technical expertise.",
    name: "Osama Hasabllah",
    role: "IT Manager",
    company: "Summit",
  },
  {
    id: "regional-deployment",
    quote:
      "Their bilingual support and regional expertise made deployment go smoothly across our Egyptian and UAE offices.",
    name: "Abd Elrahman Abd Elhakim",
    role: "Project Manager",
  },
  {
    id: "ram-electronics",
    quote:
      "Their ERP solution transformed our inventory and sales management efficiently.",
    name: "Eng. Mahmoud Hamdy",
    role: "CEO",
    company: "RAM Electronics",
  },
  {
    id: "bbr",
    quote:
      "Their custom Odoo solution streamlined our construction workflow efficiently.",
    name: "Ahmed Wafaey",
    role: "Project Manager",
    company: "BBR",
  },
  {
    id: "abm",
    quote:
      "Their customized Odoo solution streamlined our operations and delivered measurable ROI within months.",
    name: "Eng. Kassem",
    role: "Engineering Manager",
    company: "ABM",
  },
] as const;

export const featuredTestimonials = {
  ai: clientTestimonials[1],
  about: clientTestimonials[5],
  cloud: clientTestimonials[3],
  cloudOverview: clientTestimonials[2],
  digitalMarketing: clientTestimonials[1],
  mobile: clientTestimonials[4],
  web: clientTestimonials[2],
} as const;
