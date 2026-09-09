# Caio Costa — Portfolio

Personal portfolio built with Next.js. It presents who I am, the projects I've built, my career timeline, the content channels I run (YouTube and the Hyphen Community), and the events I've taken part in.

The site has three pages:

- **`/`** — hero, projects, tech stack, and media (Hyphen and the latest YouTube videos pulled from the channel feed).
- **`/about`** — intro, career timeline, channels, events, and a contact CTA.
- **`/contact`** — a contact form that delivers messages straight to my inbox.

## Contact form

`/contact` takes a name, email, and message and sends it without a backend of its own, through the [FormSubmit](https://formsubmit.co) ajax endpoint.

The flow follows the same MVVM split used elsewhere in the project — the view only renders, and every decision lives in the ViewModel:

- **`Contact.model.ts`** — the Zod schema (`ContactSchema`), the inferred `ContactFormData`, and `ContactViewProps`, derived from the ViewModel's return type.
- **`Contact.viewmodel.ts`** — owns the field state, validates with Zod on submit, tracks the submitting state, calls the service, and fires the feedback toasts.
- **`Contact.view.tsx`** — the form inside a `GlassCard`, with per-field error messages and a submit button that shows a spinner while in flight.
- **`service/Contact/contact.service.ts`** — the actual request. It throws on failure instead of swallowing the error, so the ViewModel decides what the user sees.

Validation runs before anything leaves the browser: an invalid field shows its message inline and no request is made. On success the form clears and a toast confirms it; on failure a toast explains what went wrong. Toasts come from **sonner**, mounted once in `app/layout.tsx`.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** with **shadcn/ui** and **Magic UI** components
- **Motion** for animations, **Lenis** for smooth scrolling
- **lucide-react** and **@animateicons/react** for icons
- **fast-xml-parser** to read the YouTube RSS feed
- **Zod** for form validation, **sonner** for toast feedback
- **TanStack Query** and **Axios** for data fetching

## Project structure

```
app/                     # routes (App Router) — thin, they just render a page module
modules/
  pages/                 # page compositions (Home, About, Contact)
  components/            # feature components, grouped by section
    <Section>/data/      # all copy and links live in data.ts files
service/                 # external API calls, one folder per domain
components/ui/           # shared UI primitives (GlassCard, form inputs, animations, etc.)
types/types.ts           # shared types
public/                  # images
```

Interactive components follow an MVVM split: `X.view.tsx` renders, `X.viewmodel.ts` holds the state and handlers, `X.model.ts` declares the types, and `X.tsx` wires the two together.

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
YOUTUBE_CHANNEL_ID=     # YouTube channel id, used to fetch the latest videos
NEXT_PUBLIC_EMAIL=      # inbox that receives the contact form messages
```

Without `YOUTUBE_CHANNEL_ID`, the YouTube card renders its empty state.

`NEXT_PUBLIC_EMAIL` is the address FormSubmit delivers to. It is public by design — it ends up in the client bundle, which is how the form works without a backend. FormSubmit also requires confirming the address once: the first submission sends an activation email instead of the message.

## Upcoming changes

- **Move the contact form to [Resend](https://resend.com)** — the form is live and delivering, but FormSubmit means the destination address ships in the client bundle and the sending is someone else's service. The plan is to keep the ViewModel exactly as it is and swap only the service layer for a Next.js Route Handler that sends through the Resend API with a server-side `RESEND_API_KEY`, plus a React Email template and rate limiting.
- Point the About page CTA at `/contact` instead of the `mailto:` link, which depends on the visitor having a mail client set up.
- Activate the `/projects` route (already linked from the navbar and footer).
- Downloadable CV on the home page.
- Testimonials section on the About page.
