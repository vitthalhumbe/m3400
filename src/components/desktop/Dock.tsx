"use client"

import type { AppID } from "@/types/window"
import { motion } from "framer-motion"
import {
  User,
  Wrench,
  FolderKanban,
  Award,
  Mail,
  Heart,
  Home,
  Rocket,
} from "lucide-react"

type DockProps = {
  onOpen: (id: AppID) => void
  onHome: () => void
}

const apps: {
  id: AppID
  label: string
  icon: React.ReactNode
}[] = [
  { id: "about", label: "About Me", icon: <User size={22} /> },
  { id: "skills", label: "Skills", icon: <Wrench size={22} /> },
  { id: "projects", label: "Projects", icon: <FolderKanban size={22} /> },
  { id: "mission34", label: "Mission34", icon: <Rocket size={22} /> },
  { id: "certifications", label: "Certifications", icon: <Award size={22} /> },
  { id: "hobbies", label: "Hobbies", icon: <Heart size={22} /> },
  { id: "contact", label: "Contact", icon: <Mail size={22} /> },
]

export default function Dock({ onOpen, onHome }: DockProps) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-neutral-800 px-6 py-3 rounded-2xl z-[9999]">
      
      {apps.map(app => (
        <motion.button
          key={app.id}
          onClick={() => onOpen(app.id)}
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 300 }}
          title={app.label}
          className="w-12 h-12 flex items-center justify-center bg-neutral-700 rounded-xl hover:bg-neutral-600"
        >
          {app.icon}
        </motion.button>
      ))}

      {/* Home / Desktop */}
      <motion.button
        onClick={onHome}
        whileHover={{ scale: 1.3 }}
        transition={{ type: "spring", stiffness: 300 }}
        title="Home"
        className="w-12 h-12 flex items-center justify-center bg-neutral-900 border border-neutral-600 rounded-xl hover:bg-neutral-700"
      >
        <Home size={22} />
      </motion.button>
    </div>
  )
}
