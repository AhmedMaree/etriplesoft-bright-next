import { construction } from "./construction";
import { realEstate } from "./real-estate";
import { facilityManagement } from "./facility-management";
import { restaurants } from "./restaurants";
import { education } from "./education";
import type { IndustryPageData, IndustrySlug } from "./types";

export const industryPages = {
  construction,
  "real-estate": realEstate,
  "facility-management": facilityManagement,
  restaurants,
  education,
} satisfies Partial<Record<IndustrySlug, IndustryPageData>>;

export { type IndustryPageData, type IndustrySlug } from "./types";
