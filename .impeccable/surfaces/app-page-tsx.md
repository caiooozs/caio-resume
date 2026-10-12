---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/about/page.tsx","app/contact/page.tsx"]
---

# Surface brief: portfolio site (/, /about, /contact)

## Scope and mode

Whole-site redesign, Persuade. Visitor: recruiter or tech lead scanning in a few minutes; secondary, YouTube / Hyphen followers. Actions: open a project on GitHub, download the CV, send a message, follow YouTube / Hyphen. Data and copy are fixed; presentation is replaced. Third replacement in a row: the user rejected the transit-map world and then the GitHub-profile world ("looks like a GitHub copy, no personality, too many boxes"). Answers on 2026-10-12: community and work share the first screen (events, YouTube and Hyphen next to projects), balanced boldness, light and dark with a toggle. The user took the category standard on purpose and named rauno.me / emilkowal.ski as the quality bar.

## Direction contract

THESIS: The familiar developer portfolio, made at rauno.me / emilkowal.ski craft: a quiet typographic page of real work and real community, with no boxes. Personality lives in Caio's stage photo, one orange accent and precise motion. Refuses card grids, platform imitation and costume metaphors.

OWN-WORLD: Neutral grays only: light #FAFAFA ground, #171717 ink, #636363 muted; dark #111111 ground, #EDEDED ink, #A1A1A1 muted; hairlines only where structure needs them. One accent, signal orange (#E8541E light, #FF6A33 dark): "Caio!" in the hello, dot-field glow, Building/Current state, focus ring, selection. Geist for everything, tabular figures, no mono costume. Controls are full pills; photos, thumbnails and fields have 12px corners. Lists are rows with a gliding hover highlight; there are no cards.

STORY: Meet Caio (stage photo, hello, bio, CV). See projects and community side by side (Hyphen, newest videos, events with photos), then the stack (icon cloud). About tells career, channels and events through real photos and ends on the build-together call. Contact is a calm form.

FIRST VIEWPORT: At 1440x900: a sticky 56px nav with avatar and name on the left, All / Projects / About / Contact with a gliding active pill, and a theme toggle. Inside a 60rem frame, the intro has the text on the left: "Hello, I'm Caio!" at about 44px semibold, bio at 17px muted, an ink pill "Go to Projects" plus a ghost pill "Download CV", then location and social icons. On the right is me.jpg at 5:4 with 16px corners, 22.5rem (360px) wide, sharing its column with Community below. Amended after the finish review: the only portrait asset is a 433x347 landscape video frame; a 4:5 crop throws away a third of its pixels and the hand-held mic that makes it read as on stage. From about y460, two columns (fluid, then 22.5rem): "Projects 4" rows, and "Community" rows (Hyphen Community, the two newest videos with thumbnails, three events with a cursor photo preview). On mobile, a 56px avatar sits above the hello, the large photo is dropped, and projects come before community.

FORM: The category standard, chosen by the user over the assigned "Palco" direction in seed 649e4596 (canon, not a list candidate). The quality bar is rauno.me / emilkowal.ski. Signature interactions: a hover highlight that glides between list rows, the theme toggle revealing the new theme in a circle from the button (View Transitions), the dot field glowing orange under the cursor, a staggered blur-in on first load, event photos previewing at the cursor, and the portrait morphing between Home and About.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Constraints

- Keep DotPattern (mouse-reactive canvas) and IconCloud, restyled into this world and readable in both themes.
- Keep every data file, copy string, link and route; nav labels stay All / Projects / About / Contact.
- Contact form validation, errors, loading and toasts and the YouTube feed with its empty state keep working.
- Respect prefers-reduced-motion for every animation.

## Unresolved decisions

- Project ordinals 01-04: the finish review asked to remove them (craft floor: section numbers). They stay because PRODUCT.md pins displayed data and they were shown on the original site; removing them is the user's call.
