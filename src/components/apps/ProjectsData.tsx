export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  status?: "Featured" | "Completed" | "In Progress"
}

export const projects: Project[] = [
  {
    id: "m3400",
    title: "M3400 – Desktop OS Portfolio",
    description: "Desktop OS–style portfolio with custom window manager.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    status: "Featured",
  },
  {
    id: "myalgo",
    title: "M3402 – MyAlgo",
    description: "Algorithms and ML implemented from scratch.",
    tech: ["Python", "NumPy", "ML"],
    status: "In Progress",
  },
]
