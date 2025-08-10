# Miles Portfolio & Blog

Personal portfolio and MDX-powered blog built with Next.js App Router, TypeScript, and Tailwind CSS.

## Features

- Next.js (App Router) with TypeScript
- MDX blog posts in `src/posts` with frontmatter (title, date, description, tags)
- Newest-first post ordering and topic-based filtering on the blog index
- Individual post pages with older/newer navigation and a clipboard-only Share button
- Contact page with client-side validation and email delivery via Resend (`/api/contact`)
- Polished UI with Tailwind CSS v4 and custom animations/styles
- Slideshow timeline component for “My Journey in Stories”

## Tech Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS v4
- MDX via `@next/mdx` + `gray-matter` (filesystem loader in `src/lib/mdx.ts`)
- Email via `resend`

## Project Structure (high level)

- `src/app/` – App Router pages and UI components
  - `blog/` – Blog index and post pages
  - `contact/` – Contact form page (`/contact`)
  - `api/contact/route.ts` – POST handler that sends emails via Resend
  - `components/` – Shared UI (e.g., `SlideshowTimeline.tsx`, `CTASection.tsx`)
- `src/posts/` – MDX posts
- `src/lib/mdx.ts` – MDX file loader (frontmatter parsing, sorting)
- `src/styles/theme.css` – Site styles and section utilities

## Writing a Post (MDX)

Create a new `.mdx` file under `src/posts/` with frontmatter like:

```mdx
---
title: The Future of Entertainment Is Interactive
date: 2025-08-08
description: Exploring how interactive media is redefining entertainment.
tags: ["AI", "Interactive Media", "Thoughts"]
---

Your content here…
```

Notes:
- `date` should be `YYYY-MM-DD` to ensure correct sorting.
- `tags` powers the Topics filter on `/blog`.

## Local Development

Scripts (see `package.json`):
- `npm run dev` – Start dev server (Turbopack)
- `npm run build` – Production build
- `npm run start` – Start production server
- `npm run lint` – Lint with ESLint

Open http://localhost:3000 after starting the dev server.

## Environment Variables

For the contact form to send email via Resend, set:

```
RESEND_API_KEY=your_resend_api_key
```

The API route sends from `Portfolio Contact <onboarding@resend.dev>` to `fieldofmiles@gmail.com` and sets `replyTo` to the submitter’s email. Adjust in `src/app/api/contact/route.ts` if needed.

## Deployment

This app is Next.js-ready for hosting on platforms like Vercel. Build with `npm run build` and serve with `npm run start` or connect the repo directly to your hosting provider for CI/CD.

## Notes

- Timeline images use `object-position: top` to reduce head cropping while preserving cover-fit.
- Tailwind v4 styles live in `globals.css` and `src/styles/theme.css`.

## Social Sharing (Discord/Twitter/Slack)

All pages use a single static preview image for link unfurls.

- Place your image at `public/preview-image.png` (recommended 1200×630 PNG/JPG).
- Metadata is configured in `src/app/layout.tsx` and per-post pages to reference this file with an absolute URL.
- To bust Discord cache when testing, append a query like `?v=2` to the URL.
