import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

// Public content is fully crawlable, including /_next assets, CSS, JS and
// images that pages need to render. Only the form endpoint is excluded.
// Keeping noindex pages crawlable is deliberate: crawlers must be able to
// fetch a page to see its noindex tag.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
