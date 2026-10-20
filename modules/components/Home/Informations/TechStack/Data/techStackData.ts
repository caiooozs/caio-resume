/**
 * Slugs do Simple Icons para a nuvem 3D: as habilidades do curriculo que tem
 * logo. Sem logo no Simple Icons (ficam so no texto): React Native (o logo do
 * React ja representa), Playwright, Canva e OpenAI Codex.
 */
export const cloudStacks = [
  "react",
  "nextdotjs",
  "typescript",
  "javascript",
  "tailwindcss",
  "styledcomponents",
  "mui",
  "shadcnui",
  "reactquery",
  "postgresql",
  "supabase",
  "git",
  "github",
  "vitest",
  "figma",
  "claude",
  "modelcontextprotocol",
]

  export const icons = cloudStacks.map(
    (cs) => `https://cdn.simpleicons.org/${cs}/${cs}`
  )



/** As habilidades do curriculo (caio_tech_cv.pdf), na mesma ordem dos grupos. */
export const textStacks = [{
	frontend: ["React", "Next.js", "TypeScript", "JavaScript", "React Native", "Tailwind", "styled-components", "Material UI", "shadcn/ui", "TanStack Query", "API integration"],
	architecture: ["MVVM", "Microfrontends"],
	ai: ["Claude", "OpenAI Codex", "MCP servers (Figma)", "Spec-Driven Development (GitHub Spec Kit)"],
	db: ["PostgreSQL", "Supabase"],
	tools: ["Git", "GitHub", "Vitest", "Playwright"],
	design: ["Figma", "Canva", "UI/UX Design", "Prototyping", "Accessibility"],
}]
