---
name: nextjs-react-best-practices
description: Next.js and React best practices. Use when writing, reviewing, or refactoring Next.js/React components, routing, data fetching, or rendering strategy.
---

When writing or reviewing Next.js/React code, apply these defaults unless the project explicitly overrides them:

## Rendering & data
- Default to Server Components. Only add `"use client"` when the component needs state, effects, browser APIs, or event handlers.
- Fetch data as close to where it's used as possible (in the Server Component itself), not by lifting fetches up and prop-drilling.
- Use `loading.tsx` and `<Suspense>` boundaries for slow data instead of blocking the whole route.
- Avoid `useEffect` for data fetching in App Router projects — prefer server fetching or route handlers.

## Components
- Keep components small and single-purpose. Split a component when it mixes layout, data fetching, and interactivity.
- Co-locate a component's styles, types, and tests with the component file.
- Never use array index as a React `key` for lists that can reorder, filter, or have items removed.
- Memoize expensive computations with `useMemo`/`useCallback` only when a real re-render cost is measured — don't do it reflexively.

## Routing & structure
- Use the App Router's file conventions (`page.tsx`, `layout.tsx`, `route.ts`) rather than custom routing logic.
- Put shared UI in `layout.tsx`, not duplicated per page.
- Use dynamic route segments (`[slug]`) with `generateStaticParams` for known content instead of client-side redirects.

## Performance
- Use `next/image` for every image, with explicit width/height or `fill` plus a sized container.
- Use `next/font` for font loading, not manual `<link>` tags to font CDNs.
- Dynamically import heavy client components (`next/dynamic`) that aren't needed on initial load.

## TypeScript
- Type all props explicitly; avoid `any`.
- Prefer discriminated unions over optional-everything props when a component has distinct modes.

When reviewing existing code, flag violations of the above with the specific line and a one-line fix, rather than rewriting the whole file.
