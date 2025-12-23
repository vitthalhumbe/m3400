"use client"

import SkillsApp from "../apps/SkillsApp"
import ProjectsApp from "@/components/apps/ProjectsApp"
import AboutApp from "@/components/apps/AboutApp"
import type { AppID } from "@/types/window"
import { motion } from "framer-motion"

type AppWindowProps = {
  id: AppID
  zIndex: number
  onFocus: (id: AppID) => void
  onClose: (id: AppID) => void
}


export default function AppWindow({
  id,
  zIndex,
  onFocus,
  onClose
}: AppWindowProps) {
  return (
    <motion.div
  onMouseDown={() => onFocus(id)}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.15 }}
  className="absolute top-4 left-4 w-[98%] h-[87%] bg-neutral-800 border border-neutral-600 rounded-xl flex flex-col"
  style={{ zIndex }}
>

      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-neutral-700 rounded-t-xl text-sm font-semibold">
  <span>{id.toUpperCase()}</span>

  <button
    onClick={() => onClose(id)}
    className="text-neutral-400 hover:text-red-400"
  >
    ✕
  </button>
</div>


      {/* Content placeholder */}
     <div className="flex-1 overflow-hidden">
  {id === "about" && <AboutApp />}
  {id === "projects" && <ProjectsApp/>}
  {id === "skills" && <SkillsApp/>}
  {id === "mission34" && <div className="p-4">Mission34 in progress</div>}
  {id === "contact" && <div className="p-4">Contact details here</div>}
</div>

    </motion.div>
  )
}
