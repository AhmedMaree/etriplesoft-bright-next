export type IndustrySlug =
  | "construction"
  | "real-estate"
  | "facility-management"
  | "restaurants"
  | "education";

export type IndustryCard = {
  title: string;
  description: string;
};

export type IndustryModule = {
  name: string;
  href?: string;
};

export type IndustryWorkflowStep = {
  title: string;
  description: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type IndustryPageData = {
  slug: IndustrySlug;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  heroHighlights: string[];
  problemsIntro: string;
  problems: IndustryCard[];
  solutionIntro: string;
  solutions: IndustryCard[];
  modules: IndustryModule[];
  workflowIntro: string;
  workflow: IndustryWorkflowStep[];
  integrationsIntro: string;
  integrations: IndustryCard[];
  regionalIntro: string;
  regionalConsiderations: IndustryCard[];
  implementationIntro: string;
  implementation: IndustryWorkflowStep[];
  faqs: IndustryFaq[];
  cta: {
    title: string;
    description: string;
    button: string;
  };
  seo: {
    title: string;
    description: string;
  };
};

