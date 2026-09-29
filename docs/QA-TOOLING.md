# QA tooling: links, redirects, SEO

All commands are plain Node (no added dependencies). They need the app running, except `check-links -- --static-only`.

```bash
npm run build && npm start          # or: npm run dev
npm run check-site                  # tsc + links + redirects + SEO audit, against http://localhost:3000
```

| Command | What it checks |
|---|---|
| `npm run check` | TypeScript (`tsc --noEmit`). There is no lint script in this project. |
| `npm run check-links` | Crawls the sitemap and every first-party link: 404s, redirect chains, legacy URLs, missing anchors, duplicate ids, placeholder hrefs, localhost/preview hosts, mailto/tel, missing assets, duplicate route definitions, and a source scan of `app/` and `src/`. |
| `npm run check-redirects` | Every entry of `src/lib/redirects.ts`, three ways each (exact, trailing slash, `?utm_source`): one hop, 301/308, expected destination, final 200, self-canonical, not noindex. Plus rule conflicts and host normalisation. |
| `npm run check-content` | Scans rendered sitemap pages for high-confidence placeholder, unresolved-marker and local/preview-host text; ambiguous demo/sample/mock terms are reported for review. |
| `npm run test:seo` | Titles, descriptions, canonicals, OG/Twitter, JSON-LD, headings, alt attributes, sitemap and robots. |
| `npm run test:qa` | Self-test: serves a deliberately broken site and asserts each tool reports every seeded problem. Run it after changing the tools. |

Options (`--flag` or `--key=value` after `--`): `--base-url=https://etriplesoft.com` (or `BASE_URL`), `--json[=path]` (default `reports/link-check.json`, `reports/redirect-check.json`; `reports/` is git-ignored), `--strict` (warnings fail), `--allow-localhost`, `--static-only`, `--verbose` (redirects: print passes).
Exit codes: `0` pass, `1` errors, `2` server unreachable.

Configuration lives in `scripts/lib/qa-config.mjs` (forbidden hosts, tracking parameters, documented allowlist, provenance-line rule). Redirect rules live only in `src/lib/redirects.ts`; `next.config.ts` serves them and adds the `www` host rule.

After deploying, run the same commands with `BASE_URL=https://etriplesoft.com`. In that mode `check-redirects` also tests the `http`/`www` variants.

CI: the commands need no input. There is no CI pipeline in the repository, so none was modified; a job needs `npm ci && npm run build`, start the server in the background, then `npm run check-site`.
