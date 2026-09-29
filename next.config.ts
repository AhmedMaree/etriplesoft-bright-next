import type { NextConfig } from "next";
import { redirectRules, trailingSlashRule } from "./src/lib/redirects";
const config: NextConfig = {
  images: { unoptimized: true },
  devIndicators: false,
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      // Canonical host is the apex (see src/lib/company.ts websiteUrl).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.etriplesoft.com" }],
        destination: "https://etriplesoft.com/:path*",
        statusCode: 301,
      },
      ...redirectRules,
      trailingSlashRule,
    ];
  },
};
export default config;
