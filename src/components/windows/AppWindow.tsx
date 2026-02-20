"use client"

import { motion, useDragControls } from "framer-motion"
import type { AppID } from "@/types/window"

import SkillsApp from "../apps/SkillsApp"
import ProjectsApp from "@/components/apps/ProjectsApp"
import AboutApp from "@/components/apps/AboutApp"
import ContactApp from "../apps/ContactApp"
import Mission34App from "../apps/Mission34App"
import Hobbies from "../apps/Hobbies"

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
  onClose,
}: AppWindowProps) {
  const dragControls = useDragControls()

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragListener={false}
      onMouseDown={() => onFocus(id)}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.15 }}
      className="absolute top-6 left-6 w-[98%] h-[87%] bg-neutral-800 border border-neutral-600 rounded-xl flex flex-col shadow-xl"
      style={{ zIndex }}
    >
      <div
        onPointerDown={(e) => {
          onFocus(id)
          dragControls.start(e)
        }}
        className="flex cursor-move items-center justify-between px-4 py-2 bg-neutral-700 rounded-t-xl text-sm font-semibold select-none"
      >
        <span>{id.toUpperCase()}</span>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onClose(id)
          }}
          className="text-neutral-400 hover:text-red-400"
        >
          ✕
        </button>
      </div>
      <div className="flex-1 overflow-hidden">
        {id === "about" && <AboutApp />}
        {id === "projects" && <ProjectsApp />}
        {id === "skills" && <SkillsApp />}
        {id === "mission34" && <Mission34App />}
        {id === "contact" && <ContactApp />}
        {id === "hobbies" && <Hobbies />}
      </div>
    </motion.div>
  )
}
