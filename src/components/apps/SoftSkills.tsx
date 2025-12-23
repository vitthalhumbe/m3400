"use client"

import { useState } from "react"

const softSkills = [
  {
    id: "problem-solving",
    title: "Problem Solving",
    description:
      "I approach problems by breaking them down into smaller, manageable parts. Instead of jumping directly to solutions, I focus on understanding constraints, edge cases, and root causes before implementing anything.",
  },
  {
    id: "iterative-thinking",
    title: "Iterative Thinking",
    description:
      "I believe good solutions are built through iterations. I start with a simple version, validate it, identify flaws, and refine it step by step until the solution becomes stable and efficient.",
  },
  {
    id: "self-learning",
    title: "Self Learning",
    description:
      "Most of my skills are self-taught. I rely heavily on documentation, experimentation, and structured learning plans rather than waiting for formal instruction or spoon-feeding.",
  },
  {
    id: "planning",
    title: "Planning Before Building",
    description:
      "Before writing code, I spend time planning system structure, data flow, and edge cases. This reduces rework and helps me build systems that are easier to maintain and extend.",
  },
  {
    id: "fixing-weaknesses",
    title: "Fixing Weaknesses",
    description:
      "I actively identify gaps in my skills and work on them deliberately. Instead of avoiding weak areas, I treat them as priorities for improvement.",
  },
  {
    id: "consistency",
    title: "Long Term Consistency",
    description:
      "I focus on long-term growth rather than short bursts of motivation. Consistency matters more to me than speed, especially when building strong foundations.",
  },
]

export default function SoftSkills() {
  const [active, setActive] = useState(softSkills[0].id)
  const current = softSkills.find(s => s.id === active)

  return (
    <div className="flex h-full w-full">
      
      {/* LEFT SIDEBAR */}
      <div className="w-64 shrink-0 px-6 py-8">
        <div className="flex flex-col gap-5">
          {softSkills.map(skill => (
            <button
              key={skill.id}
              onClick={() => setActive(skill.id)}
              className={`text-left text-lg font-medium transition-colors ${
                active === skill.id
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              {skill.title}
            </button>
          ))}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-px bg-neutral-700" />

      {/* CONTENT */}
      <div className="flex-1 px-10 py-8">
        <p className="max-w-3xl text-lg leading-relaxed text-neutral-300">
          {current?.description}
        </p>
      </div>

    </div>
  )
}
