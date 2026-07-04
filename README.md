# LoginOS

An editorial playbook about modern authentication, login UX, passkeys, signup, recovery, CSAM/itsme and identity trust — built to help product, UX, security and architecture teams align on login decisions.

Live at **loginos.blog**.

## Stack

- [Astro](https://astro.build) — static site generation
- [Tailwind CSS](https://tailwindcss.com) — utility-first styling
- Astro Content Collections (Markdown/YAML) — typed content
- [Decap CMS](https://decapcms.org) — editorial content editing at `/admin`
- Netlify — hosting, Identity and Git Gateway

## Getting started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  components/       Header, Footer, Hero, SectionHeader, Card,
                     PatternCard, BenchmarkCard, ADRCard,
                     RoadmapColumn, ScoreBadge, Tag
  layouts/
    BaseLayout.astro
  content/
    config.ts        content collection schemas
    fundamentals/     7 entries (passwords, MFA, passkeys, sessions, ...)
    patterns/         9 entries (identifier-first login, ...)
    benchmarks/       5 entries (Amazon, Google, Apple, Microsoft, Revolut)
    case-studies/     Partenamut case study
    decisions/        ADR-001 .. ADR-004
    roadmap/
      roadmap.yaml    now / next / later columns
  pages/
    index.astro
    fundamentals/     index + [slug]
    patterns.astro    + patterns/[slug].astro
    benchmarks.astro  + benchmarks/[slug].astro
    case-studies/     index + [slug]
    decision-log/     index + [slug]
    roadmap.astro
public/
  admin/
    config.yml        Decap CMS collections
    index.html        CMS entry point
  favicon.svg
netlify.toml
```

## Editing content

All editorial content lives in `src/content/**` as Markdown or YAML with typed frontmatter (validated by `src/content/config.ts`). You can either:

1. **Edit files directly** in this repo and push — Astro rebuilds on deploy, or
2. **Use Decap CMS** at `/admin` once deployed, which commits changes back to this GitHub repo automatically.

Collections editable via CMS: Fundamentals, Patterns, Benchmarks, Case Studies, Decision Log, Roadmap.

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**, pick the repo. Build command `npm run build`, publish directory `dist` (already set in `netlify.toml`).
3. In Netlify, enable **Identity** for the site.
4. Set **Registration preferences** to `Invite only`.
5. Under **External providers**, enable `GitHub`.
6. Enable **Git Gateway**.
7. Invite yourself as a user from the Netlify Identity panel and accept the invitation email.
8. Open `https://<your-site>/admin` and authenticate to edit content.

## CMS authentication

This project uses:

- Astro for the site
- Decap CMS for editorial editing
- GitHub as the Git repository
- Netlify for hosting
- Netlify Identity + Git Gateway for CMS authentication and commits

That means editors sign in through Netlify, and Decap writes changes back to the connected GitHub repository through Git Gateway.

## Content schema

See `src/content/config.ts` for the full Zod schema per collection (patterns include `problem`, `recommendation`, `uxImpact`, `securityImpact`, `implementationNotes`; benchmarks include a `scores` object rendered via the `ScoreBadge` component; decisions follow an ADR shape with `context`, `options`, `rationale`, `risks`, `status`).

## Design

Off-white paper background, near-black ink text, one accent (deep indigo) used sparingly for links, recommendations and active states. Typeset in IBM Plex Sans / IBM Plex Mono. Sober, rounded cards, subtle grid texture on the hero only — no dark cyber-security styling.
