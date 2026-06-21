"use client"

import { motion, type Variants } from "framer-motion"
import { technicalSkills } from "./SkillsData"

// Framer Motion variants for staggered entrance animations
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

export default function TechnicalSkills() {
  return (
    <div className="h-full w-full overflow-y-auto px-6 py-8 md:px-12 md:py-12 bg-[#0a0a0a]">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl space-y-12"
      >
        {technicalSkills.map((section) => (
          <motion.div 
            key={section.title} 
            variants={itemVariants} 
            className="space-y-6"
          >
            {/* Redesigned Section Header with Gradient Divider */}
            <div className="flex items-center gap-4">
              <h2 className="text-sm font-bold text-neutral-300 uppercase tracking-widest">
                {section.title}
              </h2>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent" />
            </div>

            {/* Skill Pills Container */}
            <div className="flex flex-wrap gap-3 md:gap-4">
              {section.skills.map((skill) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/50 px-5 py-3 text-neutral-300 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/80 hover:text-white hover:shadow-lg hover:shadow-neutral-900/50"
                  >
                    {Icon && (
                      <Icon className="text-lg text-neutral-500 transition-colors duration-300 group-hover:text-blue-400" />
                    )}
                    <span className="text-sm font-semibold tracking-wide">
                      {skill.name}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}