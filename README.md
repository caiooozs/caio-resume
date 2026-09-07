# Caio Costa — Portfolio

Personal portfolio built with Next.js. It presents who I am, the projects I've built, my career timeline, the content channels I run (YouTube and the Hyphen Community), and the events I've taken part in.

The site has two pages:

- **`/`** — hero, projects, tech stack, and media (Hyphen, latest YouTube videos pulled from the channel feed, and a Spotify playlist embed).
- **`/about`** — intro, career timeline, channels, events, and a contact CTA.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with **shadcn/ui** and **Magic UI** components
- **Motion** for animations, **Lenis** for smooth scrolling
- **lucide-react** and **@animateicons/react** for icons
- **fast-xml-parser** to read the YouTube RSS feed
- **TanStack Query** and **Axios** for data fetching

## Project structure

```
app/                     # routes (App Router) — thin, they just render a page module
modules/
  pages/                 # page compositions (Home, About)
  components/            # feature components, grouped by section
    <Section>/data/      # all copy and links live in data.ts files
components/ui/           # shared UI primitives (GlassCard, animations, etc.)
types/types.ts           # shared types
public/                  # images
```

Content is deliberately separated from markup: to update text, links, jobs, events, or projects, edit the `data.ts` file of the matching section — no component changes needed.

## Running locally

```bash
npm install
npm run dev
```

The app runs at http://localhost:3000.

### Environment variables

Create a `.env.local` file:

```bash
YOTUBR_CHANNEL_ID=   # YouTube channel id, used to fetch the latest videos
```

Without it, the YouTube card renders its empty state.

## Upcoming changes

- **Contact form with email delivery via [Resend](https://resend.com)** — today the CTA buttons open a `mailto:` link, which depends on the visitor having a mail client set up. The plan is to replace it with a proper form (name, email, message) on the About page, validated with Zod and submitted to a Next.js Route Handler that sends the message through the Resend API using a `RESEND_API_KEY` server-side environment variable, plus a React Email template, rate limiting, and success/error feedback in the UI.
- Activate the `/projects` route (already linked from the navbar and footer).
- Downloadable CV on the home page.
- Testimonials section on the About page.
