---
name: Caio Cesar Costa
description: The familiar developer portfolio, made with care; neutral grays, one signal orange, Geist, rows instead of boxes.
colors:
  bg: "#fafafa"
  raised: "#f0f0f0"
  raised-strong: "#e6e6e6"
  ink: "#171717"
  muted: "#636363"
  subtle: "#8f8f8f"
  line: "#e5e5e5"
  dot: "#c4c4c4"
  accent: "#e8541e"
  accent-ink: "#c2410c"
  danger: "#c8261b"
  dark-bg: "#111111"
  dark-raised: "#1c1c1c"
  dark-raised-strong: "#262626"
  dark-ink: "#ededed"
  dark-muted: "#a1a1a1"
  dark-subtle: "#6b6b6b"
  dark-line: "#262626"
  dark-dot: "#3d3d3d"
  dark-accent: "#ff6a33"
  dark-accent-ink: "#ff7d4d"
  dark-danger: "#f87171"
typography:
  display:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.875rem"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  section:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.375
    letterSpacing: "normal"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  control:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "normal"
  meta:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
    fontFeature: "tnum"
rounded:
  sm: "6px"
  md: "8px"
  xl: "12px"
  2xl: "16px"
  full: "9999px"
spacing:
  frame: "60rem"
  side-column: "22.5rem"
  gutter: "20px"
  gutter-sm: "24px"
  row-x: "12px"
  row-y: "16px"
  media-row-y: "8px"
  column-gap: "48px"
  section-gap: "56px"
  chapter-gap: "80px"
  chapter-gap-sm: "96px"
  nav-h: "56px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.bg}"
    typography: "{typography.control}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "40px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    typography: "{typography.control}"
    rounded: "{rounded.full}"
    padding: "0 20px"
    height: "40px"
  button-ghost-hover:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    size: "36px"
  icon-button-hover:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
  nav-link-active:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "32px"
  list-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "16px 12px"
  list-row-highlight:
    backgroundColor: "{colors.raised}"
    rounded: "{rounded.xl}"
  button-ghost-sm:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.full}"
    padding: "0 12px"
    height: "32px"
  disclosure-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.section}"
    rounded: "{rounded.xl}"
    padding: "16px 12px"
  disclosure-panel:
    backgroundColor: "transparent"
    padding: "12px 12px 48px"
  project-screenshot:
    backgroundColor: "{colors.raised}"
    rounded: "{rounded.2xl}"
  input:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: "0 14px"
    height: "44px"
  portrait:
    backgroundColor: "{colors.raised}"
    rounded: "{rounded.2xl}"
    width: "22.5rem"
---

# Design System: Caio Cesar Costa

## Overview

**Creative North Star: "The Quiet Page, Made With Care"**

This is the familiar developer portfolio on purpose: a name, a hello, a photo, a list of work, a list of community, a stack. Nothing about the layout needs explaining. The personality is not in a metaphor but in the finish: Caio's stage photo, one signal-orange accent, and motion precise enough to notice only when you look for it. The craft bar is rauno.me and emilkowal.ski.

The page is typographic and boxless. Content sits directly on a near-white (or near-black) ground inside one 60rem frame; space separates things, and hairlines appear only where structure asks for them (the footer rule, the closing call on About, the scrolled nav edge). Lists are rows, and a soft raised highlight glides between them under the pointer and keyboard focus. Controls are full pills; media and fields have 12-16px corners. Light and dark are equal citizens, switched by a toggle that opens the new theme in a circle from the button.

This world replaced three rejected ones: a dark-purple glass template, a dark transit-map metaphor world, and a GitHub-profile clone ("looks like GitHub, no personality, too many boxes"). None of their devices return. The dot field and the 3D icon cloud are brand commitments carried over and restyled: grey dots that warm to orange under the cursor, and brand-coloured logos floating free on the page with no container.

**Key Characteristics:**
- Neutral grays only, with one signal orange; light and dark themes from the same token names.
- Geist for everything, sentence case, tight negative tracking only at display sizes, tabular figures for numbers.
- No cards: rows with a gliding raised highlight; hairlines only where structure needs them.
- Pills for controls, 12px for fields and rows, 16px for photos.
- Motion uses one curve (expo out), arrives once (staggered blur-in), and always respects reduced motion.

## Colors

A grey-scale page with zero chroma in every neutral, lit by a single warm orange that is rationed to moments of life.

### Primary
- **Signal Orange** (light {colors.accent}, dark {colors.dark-accent}): the only colour on the page. It marks "Caio!" in the hello, the dot field's cursor glow, the Building and Current status dots (with a ping on Building), the focus ring, the text caret and the selection tint (24% mix). At 3.5:1 on the light ground it is reserved for large type and non-text marks.
- **Orange Ink** (light {colors.accent-ink}, dark {colors.dark-accent-ink}): the readable orange for small text: status labels, the copy-email check, footer link hover.

### Neutral
- **Paper** ({colors.bg} / dark {colors.dark-bg}): page ground, nav glass base (75% with backdrop blur), toast surface, primary button text.
- **Raised** ({colors.raised} / dark {colors.dark-raised}): the gliding row highlight, the active nav pill, ghost and icon button hovers, image placeholders, field fill at 60%.
- **Raised Strong** ({colors.raised-strong} / dark {colors.dark-raised-strong}): hovered field and outline stroke, nested icon-button hover inside a highlighted row, scrollbar thumb.
- **Ink** ({colors.ink} / dark {colors.dark-ink}): headings, titles, primary button fill, anything that must be read first.
- **Muted** ({colors.muted} / dark {colors.dark-muted}): bio, descriptions, meta, counts, inactive nav, icon buttons at rest.
- **Subtle** ({colors.subtle} / dark {colors.dark-subtle}): glyphs only: external-link arrows at rest, location/calendar/ticket icons, the "/" separator.
- **Line** ({colors.line} / dark {colors.dark-line}): hairlines (footer top, About closing call, nav edge on scroll, field strokes, toast border).
- **Dot** ({colors.dot} / dark {colors.dark-dot}): the dot field's resting grey.
- **Danger** ({colors.danger} / dark {colors.dark-danger}): invalid field stroke and halo, error toast icon.

### Named Rules
**The One Orange Rule.** Orange is the only interface hue. It marks the name, live state, focus and the cursor's glow; it never fills a surface, a button, a heading or a border at rest. Third-party marks are the one exception and stay marks: technology logos (project tech list, icon cloud) in their own brand colour, and the country flags in the language menu.

**The Orange-Ink-For-Small-Text Rule.** Below display size, orange text uses Orange Ink, never Signal Orange.

**The Subtle-Is-For-Glyphs Rule.** Subtle grey never sets words a person must read; text is Ink or Muted.

## Typography

**Display Font:** Geist (with ui-sans-serif, system-ui)
**Body Font:** Geist
**Label/Mono Font:** none in use (Geist Mono is loaded but no surface sets it)

**Character:** One neutral grotesk carried entirely by size, weight and tracking. The hello is large and tightly tracked; everything else is calm and close in size, so the hierarchy reads through spacing and Ink-versus-Muted rather than a steep ramp.

### Hierarchy
- **Display** (600, 2.875rem, 2.375rem below 640px, line-height 1.05, -0.04em): the page hello on Home, About and Contact, and the page title on Projects, which carries its count beside it in Muted at Lead size (400, tabular, normal tracking). One per page.
- **Headline** (600, 2.75rem, 2.125rem below 640px, line-height 1.08, -0.035em, max 16ch): the closing call on About.
- **Section** (500, 1.125rem, -0.015em): section headings (Projects, Community, Tech Stack, About chapters), with an optional Muted tabular count beside them at 0.875rem; also the titles of the rows that open on Projects, which are h2s there.
- **Title** (500, 1rem, line-height 1.375): row titles: project names, roles ("at Company" in Muted 400), channel names.
- **Lead** (400, 1.0625rem, line-height 1.625, Muted, 33rem to 62ch): bio and page intros.
- **Body** (400, 0.9375rem, line-height 1.625, Muted, max 58-62ch): row descriptions, section leads, field text, stack lines.
- **Control** (500, 0.875rem): buttons, nav links, form labels, footer names.
- **Meta** (400, 0.8125rem, tabular): dates, periods, counts, project ordinals, stack lists, sublist headings (Events, Latest Videos, and Overview / What it does inside an open project), status labels, project links and the private-repository label, section links (See details, Watch now).

### Named Rules
**The Sentence-Case Rule.** No uppercase transforms and no positive tracking anywhere; negative tracking only at Section size and above.

**The Tabular-Numbers Rule.** Dates, periods, counts, stats, ordinals and the copyright year use tabular figures.

**The No-Mono-Costume Rule.** Monospace is not a "developer" accent; no label, number or heading is set in mono.

## Layout

One centred frame of 60rem with 20px side padding (24px from 640px). The nav is sticky at 56px, translucent Paper with backdrop blur, and gains its hairline only after 48px of scroll (scroll-driven; static fallback).

The page uses a fluid main column beside a fixed 22.5rem side column (48px gap): on Home, the intro text sits beside the 5:4 portrait (17rem at 768px, 22.5rem at 1024px), Projects sits beside Community from 1024px, and the stack text sits beside the icon cloud. About's timeline reuses the same axis (22.5rem meta column at 1024px). Below 768px everything stacks, a 56px round avatar replaces the portrait above the hello, and Projects precede Community.

Projects is one column in the same frame: the Display title and lead on the left, Expand all bottom-aligned on the right (below 640px it drops under the lead, left-aligned), the rows 32px below (40px from 640px), then the same closing call as About. An open row's content starts on the title's column, after the ordinal; under the screenshot, Overview and What it does split into a fluid column and the 22.5rem side column at 1024px (48px gap) and stack below that, 32px apart. Below 640px a project's links take their own line under its title.

Rhythm: 56-64px from intro to the work band, 80-96px between chapters, 40px intro top padding. Rows carry 12px horizontal and 16px vertical padding (8px for media rows) so the highlight has room. Anchors land below the nav (scroll padding nav + 2rem).

**The Shared Axis Rule.** The right column is always 22.5rem at desktop; portrait, Community, icon cloud, timeline meta and the What it does column of an open project line up on it.

## Elevation & Depth

Flat by default. Text, rows and controls sit directly on the ground; depth comes from tonal Raised fills (the row highlight, the active nav pill) rather than shadow. Shadows exist only on things that are photographs or that float above the page.

### Shadow Vocabulary
- **Stage photo** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 12px 32px -12px rgb(0 0 0 / 0.25)` plus a 1px black/5% ring, white/8% in dark): the portrait. Event photos on About and project screenshots on Projects use the deeper `0 16px 40px -16px rgb(0 0 0 / 0.3)` tail. In dark theme, project screenshots (mostly light interfaces) dim to brightness 0.86 so they do not glare off the dark ground.
- **Floating preview** (`box-shadow: 0 18px 40px -12px rgb(0 0 0 / 0.35)`): the event photo that follows the cursor.
- **Toast** (`box-shadow: 0 12px 32px -8px rgb(0 0 0 / 0.18)`): toasts, with a Line border.
- **Primary lip** (`box-shadow: 0 1px 2px rgb(0 0 0 / 0.12), inset 0 1px 0 rgb(255 255 255 / 0.08)`): the ink pill only.

### Named Rules
**The Photos-Lift Rule.** Only photographs and floating layers cast shadows. Rows, sections and text never do, at rest or on hover.

**The Inset-Stroke Rule.** Outlines on controls and fields are inset 1px shadows in Line, so a stroke never changes the box size.

## Shapes

Three silhouettes. Controls (buttons, nav links, icon buttons, avatars, status dots) are full pills or circles. Rows, the row highlight and fields use 12px. Photos (portrait, event photos, project screenshots) and toasts use 16px; project screenshots keep their own aspect ratio, set from the image's real width and height, never a forced crop; small thumbnails inside rows (44px event squares, 88px video frames) use 8px so they nest inside the 12px row. Thumbnails and photos carry a 1px ring at black/5% (white/8% in dark) instead of a border. The focus outline is 2px Signal Orange, 3px offset, 6px corners.

## Components

### Buttons
Quiet pills that compress slightly when pressed.
- **Shape:** full pill (9999px); 36px default, 40px large, 32px small.
- **Primary:** Ink fill with Paper text, Primary lip shadow; hover drops the fill to 88% Ink. Trailing arrow nudges 2px toward its direction on hover.
- **Ghost:** Muted text, no fill; hover adds Raised fill and Ink text. The default partner of a primary pill ("Download CV", "See my events").
- **Outline:** Ink text with an inset Line stroke; hover adds Raised fill and a Raised Strong stroke.
- **Press:** scale to 0.97 (0.94 for icon buttons), 200ms expo out.

### Icon Buttons
Round 36px targets with 18px icons; no fill at rest, a Raised bubble and Ink icon on hover. Used for socials, the theme toggle and copy-email (28px).

### Rows (gliding list)
The replacement for cards. A row is a 12px-cornered block with 16px/12px padding; the whole row is the link (stretched pseudo-element), secondary links sit above it on z-index. A single Raised highlight measures the hovered or focused row and springs to it (stiffness 520, damping 42, mass 0.6), fading in over 180ms; it jumps without travel on first appearance and under reduced motion.
- **Project row:** Meta ordinal column (1.75rem), Title, optional Building status, Project Links at the right, Body description, then the Tech List. On Home the whole row links to that project's open row on Projects (`/projects#slug`); GitHub and Website stay as secondary links above it.
- **Media row:** 44px square or 88px 16:9 thumbnail with 8px corners, Title-weight body text and a tabular Meta line. Video thumbnails reveal a dark play disc on hover.

### Rows That Open
The project row given room: on Projects each row opens in place into a short case study (WAI accordion pattern). The header is the project row unchanged except that the title is Section size, set as an h2 whose button stretches over the whole header, and a 16px chevron sits in its own third column so it holds the corner when the links wrap (Subtle at rest, Ink on row hover, turning 180° over 300ms when open). The gliding Raised highlight moves between headers only; an open panel sits on the bare ground with no fill, border or shadow.
- **Panel:** 12px top and 48px bottom padding, content on the title column: the screenshot (when there is one), then the gallery of other screens (two columns from 640px with 16px/24px gaps, each with its caption in Meta Muted under it, 10px apart; an odd last screen takes the full row), then Overview (Body in Ink at 85%, max 62ch) beside What it does (Body in Muted, each item led by an 8px Subtle hairline dash instead of a bullet glyph), under Meta sub-headings in Muted. See Layout for the columns.
- **Open state:** each row's id is its slug; opening writes `#slug` with replaceState (no history entry, no scroll), closing clears it, and arriving at `/projects#slug` opens that row. Closed panels stay in the DOM but inert; without JS every panel is open.
- **Expand all:** a small ghost pill (32px, 0.8125rem) in the page intro with a chevron that turns when everything is open; its label switches to Collapse all.

### Project Links
GitHub, Website and LinkedIn post as Meta links in Muted with a 14px diagonal arrow in Subtle that nudges toward its corner and turns Ink on hover; they sit above the row link. A private repository shows a label instead of a dead link: a 14px lock glyph in Subtle and "Private repository" in Muted, not interactive.

### Section Link
A Meta link in Muted to the right of a section heading, baseline-aligned, with a 14px arrow in Subtle that nudges 2px and turns Ink on hover: "See details" (straight arrow) beside Projects on Home leads to Projects, "Watch now" (diagonal arrow) beside Latest Videos leads out.

### Tech List
The technologies of a project, highlighted (requested by the user on 2026-10-12): each item is the official Simple Icons logo at 15px in its brand colour plus the name in Ink at 85%, Meta size, 500 weight, 16px column and 8px row gaps, no pill or fill. Black marks (Next.js, shadcn/ui) follow Ink so they flip with the theme; in dark theme every brand colour is mixed 28% toward white to hold contrast on #111. Concepts with no logo (App Router, Clean Code, MVVM) follow the logos in Muted text. Career stacks keep the plain comma list.

### Status
A 6px Signal Orange dot (pinging for Building) and a Meta label in Orange Ink. Text and dot only; no pill, no fill.

### Inputs / Fields
- **Style:** 12px corners, Raised at 60% fill, inset 1px Line stroke, 44px tall, 14px side padding, Body size; textarea min 160px.
- **Hover:** stroke to Raised Strong.
- **Focus:** fill to Paper, stroke to Signal Orange plus a 4px halo of orange at 16%.
- **Error:** stroke and halo switch to Danger. Labels use Control type in Ink.

### Navigation
Sticky 56px bar: 28px round avatar (from 420px) and name (from 768px) on the left, All / Projects / About / Contact as 32px pill links (Muted, Ink on hover; 13px with 8px padding below 640px so Spanish labels fit at 360px), then the language menu and the theme toggle. The active page carries a Raised pill that slides between links via a shared layout spring (stiffness 480, damping 38).

### Language Menu
English is the default; Portuguese (pt-BR) and Spanish are chosen from a Base UI menu in the nav. Trigger: a ghost pill with the current flag (18x12, 3px corners, 1px black/8% ring, white/12% in dark), the code (EN, PT, ES; from 640px) and a chevron that turns when open. Popup: 16px corners, Line border, Paper fill, Floating preview-style shadow, scale 0.97 and fade in from 4px above (200ms expo out); radio rows use 12px corners and a Raised highlight, and show flag, native language name, Muted code and an Orange Ink check on the active one. Choosing a language writes the `lang` cookie and re-renders on the server; the URL, scroll and theme stay as they were, and the trigger dims to 60% while the refresh runs.

### Portrait
Caio's stage photo at 5:4, 16px corners, Stage photo shadow, object position 55% 40%. The same view-transition name on Home and About morphs it between pages (520ms expo out); other navigations cut without crossfade.

### Theme Toggle
Sun and moon cross-rotate and scale (500ms). With View Transitions and no reduced-motion preference, the new theme opens as a circle clip from the button centre over 560ms; otherwise it swaps instantly. An inline head script applies the saved or system theme before first paint.

### Entrances
One material for every entrance: things come into focus. Elements carry `data-reveal`; a client `RevealObserver` (IntersectionObserver, 12% threshold, -8% bottom margin) marks `data-shown` once, and a MutationObserver picks up elements added by navigation or a language switch. Nothing hides without JS: the head script sets `html[data-motion]`, and a 3s CSS failsafe reveals everything if the observer never mounts.
- **focus** (section headings): 6px rise and 6px blur to sharp.
- **rise** (rows, sublists, footer, form fields): 14px rise and fade, staggered by `--i` at 70ms with a cap of 6 steps, or by an explicit `--d`.
- **pop** (project tech logos): the logo spins in from 0.2 scale on the expo curve while its name rises, 45ms apart, starting 260ms after the row.
- **scale** (icon cloud): 0.88 scale and blur to sharp.
- **wipe** (About event photos): the photo uncovers bottom to top by clip-path over 1.1s inside its rising row.
- **words** (the closing question on About): each word rises out of an 8px blur, 60ms apart; the actions follow at 420ms and 520ms.
- **status ping**: the Current dot on career rows pings twice when its row arrives.
- **panel** (rows that open on Projects): driven by the open state, not the observer. The panel grows on grid rows from 0fr to 1fr (0.55s open, 0.3s close); inside, the screenshot uncovers bottom to top by clip-path over 0.9s and the text blocks come into focus (8px rise, 6px blur, fade) 60ms apart from 160ms. Closing is quick and unsequenced.
Durations 0.6-0.9s (1.1s for the wipe). Under reduced motion nothing is hidden and nothing moves; panels open and close instantly.

### Dot Field (brand commitment)
A fixed canvas behind everything: 2px dots on a 26px pitch in Dot grey, calmer near the centre (elliptical falloff) so text breathes, breathing on a slow diagonal wave (speed 0.45). Within 120px of the mouse, dots smoothstep toward Signal Orange, grow to about twice their size and gain a soft radial glow. Colours are read from the theme tokens and re-read on theme change; the wave freezes under reduced motion; touch is ignored.

### Icon Cloud (brand commitment)
A 3D rotating sphere of technology logos in each brand's own colour, free on the page beside the stack text in the 22.5rem column (19rem centred on mobile), with no container. Black logos (Next.js, Vercel, GitHub) switch to Dark Ink in dark theme.

## Do's and Don'ts

### Do:
- **Do** build every surface inside the 60rem frame, with the 22.5rem side column as the shared right axis.
- **Do** present collections as rows inside a gliding-highlight list, with the whole row as the link.
- **Do** keep controls as full pills: Ink primary, Ghost secondary, round icon buttons.
- **Do** use Signal Orange only for the name, live status, focus, caret, selection and the dot field; use Orange Ink for small orange text.
- **Do** separate with space first and a Line hairline only where structure needs one.
- **Do** give photos and project screenshots 16px corners, a 1px ring and the Stage photo shadow; give in-row thumbnails 8px.
- **Do** animate with cubic-bezier(0.16, 1, 0.3, 1): the intro blurs in once on load (0.8s, 80ms stagger), everything below enters once on scroll through the Entrances system, state changes take 160-200ms.
- **Do** design both themes from the same token names and check every surface in each.
- **Do** keep the dot field and icon cloud on every build.

### Don't:
- **Don't** put content in bordered cards or boxed grids; this is the device the GitHub-profile world was rejected for.
- **Don't** imitate any platform's interface (tab bars with counters, repository cards, language-colour dots, grey box headers).
- **Don't** return to the rejected worlds: purple, glass cards, glow on content, gradient text, transit-map or any costume metaphor.
- **Don't** add a second accent hue or fill a surface with orange.
- **Don't** set text in Subtle, uppercase, positive tracking or monospace.
- **Don't** put shadows on rows, sections or text; only photos and floating layers lift.
- **Don't** wrap stack items or labels in pills; stacks are comma-separated Meta text.
- **Don't** ship motion that ignores prefers-reduced-motion.
