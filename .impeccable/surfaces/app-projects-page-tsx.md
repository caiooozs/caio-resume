---
version: 1
slug: "app-projects-page-tsx"
primary_target: "app/projects/page.tsx"
related_targets: []
---

# Surface brief: /projects

## Scope and mode

New surface inside the established world (DESIGN.md "The Quiet Page, Made With Care"), Experience mode. Visitor: recruiter or tech lead who wants more than the home rows give: what each project does, how it is built, where to see it. Actions: open the live site, open the code, contact. Answers on 2026-10-19: structure "rows that open" (wireframe, code-led), Claude drafts overview and highlights from real sources (repo READMEs and PRODUCT.md files, About timeline) for Caio to review, screenshots captured from the two live sites, private repos (ZeroAoMEI, UBSstock) show a "Private repository" label instead of a 404 link.

## Direction contract

THESIS: The home's project list, given room: the same quiet rows, each one opening in place into a short case study (screenshot, overview, what it does). Refuses card grids, per-project landing pages and gallery theatrics; depth is one click away and the list stays scannable.

OWN-WORLD: Inherited unchanged: #FAFAFA / #111111 grounds, #171717 / #EDEDED ink, #636363 / #A1A1A1 muted, signal orange only for Building status and focus. Geist, sentence case, tabular ordinals. Rows with the gliding Raised highlight on headers only; panels sit on the ground with no fill. Pills for controls, 16px photo corners with ring and stage shadow.

STORY: The visitor sees all four projects with stack logos at once, opens the one that interests them (or all), reads what it does and sees it running, then follows the code, the live site or the closing call to talk.

FIRST VIEWPORT: At 1440x900, the sticky nav with the active pill on Projects. In the 60rem frame: "Projects" display h1 at about 46px, a two-line muted lead, a meta "4 projects" line with an "Expand all" ghost pill on the right, then the four rows (ordinal, title at 18px, Building status, GitHub/Website or Private repository at right, chevron, description, stack logos), all four visible above the fold.

FORM: Rows that open (accordion), position 4 on the ranked list, locked by the user from seed f4e74684. Signature interaction: the header highlight glides between rows while a panel opens by grid-rows on the expo curve, its screenshot wiping up from the bottom and its text coming into focus; deep links /projects#slug open the row.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Constraints

- Keep DotPattern and the established tokens, motion curve and reveal system.
- Displayed project facts come from the data files; new overview and highlights are drafts for Caio's review, with no metrics, users or prices.
- Respect prefers-reduced-motion; both themes; works at 360px.

## Unresolved decisions

- Project ordinals 01-04 stay, as on the home (craft floor flags section numbers; removal is Caio's call).
- ZeroAoMEI and UBSstock have no screenshots until Caio provides them.
