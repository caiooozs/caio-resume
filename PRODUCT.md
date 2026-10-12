# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters and tech leads evaluating Caio for frontend roles. They arrive from a job application, LinkedIn, or a shared link, scan fast, and want to judge projects, stack, and experience in a few minutes.

Secondary: people coming from Caio's YouTube channel or the Hyphen Community who want to know him better.

## Product Purpose

Personal portfolio and résumé of Caio Cesar Costa, frontend developer from Recife, PE. Success means a recruiter leaves with a clear read of what he builds and acts: opens a project on GitHub, sends a message, or follows the YouTube channel / Hyphen Community.

## Positioning

A frontend developer (React, Next.js, TypeScript) who also runs a YouTube channel, helps lead the Hyphen Community, founded HyphenLab, and has hackathon results (1st place at Hackathon Recriando a Cidade, 2nd place at the Recife Frontend Community Ideathon). The community and content side, backed by real event photos and videos, is what a typical junior portfolio cannot truthfully copy.

## Operating Context

- Next.js app (Next 16, React 19, Tailwind v4, shadcn `base-nova`, `motion`, `lenis`), deployed on Vercel at caiodev-olive.vercel.app.
- Routes: `/` (intro, projects next to community: Hyphen, latest YouTube videos and events; then tech stack), `/about` (bio, career timeline, channels, events, closing CTA), `/contact` (message form).
- Latest videos come from the channel's RSS feed, server-fetched and revalidated hourly; an empty state exists.
- Contact form validates with zod and posts to formsubmit.co.
- Site copy is English by default, with Portuguese (pt-BR) and Spanish versions chosen from a flag menu in the nav (`lang` cookie; URLs do not change). The English data files stay the source of truth; translations live in each data folder's `i18n.ts` and in `lib/i18n/dictionaries`.
- Components follow a model / view / viewmodel split.

## Capabilities and Constraints

- Every piece of displayed data stays as is: the data files under `modules/components/**/data`, hero copy, section copy, contact copy, links, and metadata. A redesign changes presentation only.
- Contact form behavior (validation, errors, loading, toasts) and the YouTube feed must keep working.
- Known pre-existing issue: the footer links to `/projects`, a route that does not exist (the navbar uses `/#projects`).

## Brand Commitments

- The interactive dot-pattern background (mouse-reactive canvas) stays.
- The 3D tech-stack icon cloud stays.
- Purple is not a brand commitment.
- Standing preference (2026-10-12): after rejecting the dark-purple template, a transit-map world and a GitHub-profile world, Caio chose the category standard on purpose: a familiar developer portfolio executed at the craft level of rauno.me and emilkowal.ski. Light and dark themes with a toggle. Community (Hyphen, YouTube, events) shares the first screen with projects. No boxed card grids, no imitation of any platform's interface.
- The result must not read as a template (glass cards, purple glow, gradient text, identical cards everywhere), must not be so experimental that projects, contact, and channels get hard to find, and must not turn corporate: the personality of someone who runs a channel and a community has to come through.

## Evidence on Hand

- Portrait: `public/me.jpg`.
- Event photos: `public/rfec_ideathon.jpg`, `public/upe_idathon.jpg`, `public/recriando_cidade.jpeg`.
- CV: `public/caio_tech_cv.pdf`.
- 4 projects (2 marked as building), 4 career entries (3 current), 3 events, 2 channels, live YouTube feed.
- No testimonials, metrics, client logos, or follower counts exist. Do not invent them.

## Product Principles

1. A recruiter's first minute decides: projects, stack, and experience must be findable without hunting.
2. Proof over adjectives: real projects, real events, real photos, real videos.
3. Personality with restraint: human and community-minded, neither corporate nor experimental.
4. The two signature interactions (dot field, icon cloud) are part of the identity, not decoration to be cut.
