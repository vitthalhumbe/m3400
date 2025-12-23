"use client"

import { motion } from "framer-motion"
import { technicalSkills } from "./SkillsData"

export default function TechnicalSkills() {
  return (
    <div className="h-full w-full overflow-y-auto px-10 py-8 space-y-10">
      {technicalSkills.map(section => (
        <div key={section.title}>
          <h2 className="mb-2 text-sm font-semibold text-neutral-400 uppercase tracking-wide">
            {section.title}
          </h2>
          <div className="h-px mb-3 bg-neutral-700" />

          <div className="flex flex-wrap gap-4">
            {section.skills.map(skill => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3 rounded-lg bg-neutral-900 px-10 py-3 text-neutral-200"
                >
                  {Icon && (
                    <Icon className="text-lg text-neutral-400" />
                  )}
                  <span className="text-sm font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
