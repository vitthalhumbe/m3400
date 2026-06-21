"use client"

import { motion, type Variants } from "framer-motion"

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

// Framer Motion variants for staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
}

export default function SoftSkills() {
  return (
    <div className="h-full w-full overflow-y-auto px-6 py-8 md:px-12 md:py-12 bg-[#0a0a0a]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {softSkills.map((skill) => (
          <motion.div
            key={skill.id}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="group flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/80 hover:shadow-xl hover:shadow-neutral-900/50"
          >
            {/* Card Header */}
            <h3 className="text-xl font-semibold text-neutral-200 transition-colors duration-300 group-hover:text-white">
              {skill.title}
            </h3>
            
            {/* Subtle Animated Divider */}
            <div className="h-[2px] w-12 bg-gradient-to-r from-neutral-700 to-transparent transition-all duration-500 group-hover:w-full group-hover:from-blue-500 group-hover:to-transparent" />
            
            {/* Card Content */}
            <p className="text-base leading-relaxed text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}