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
  { id: "about", label: "About Me", icon: <User size={22} strokeWidth={1.5} /> },
  { id: "skills", label: "Skills", icon: <Wrench size={22} strokeWidth={1.5} /> },
  { id: "projects", label: "Projects", icon: <FolderKanban size={22} strokeWidth={1.5} /> },
  { id: "mission34", label: "Mission 34", icon: <Rocket size={22} strokeWidth={1.5} /> },
  // { id: "certifications", label: "Certifications", icon: <Award size={22} strokeWidth={1.5} /> },
  { id: "hobbies", label: "Hobbies", icon: <Heart size={22} strokeWidth={1.5} /> },
  { id: "contact", label: "Contact", icon: <Mail size={22} strokeWidth={1.5} /> },
]

export default function Dock({ onOpen, onHome }: DockProps) {
  return (
    <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-neutral-800 bg-[#0d0d0d]/85 px-4 py-3 shadow-2xl shadow-black/80 ring-1 ring-white/5 backdrop-blur-xl z-[9999]">
      
      {/* App Icons */}
      {apps.map((app) => (
        <motion.button
          key={app.id}
          onClick={() => onOpen(app.id)}
          whileHover={{ y: -8, scale: 1.25 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-transparent bg-neutral-900/50 text-neutral-400 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
        >
          {app.icon}
          
          {/* Tooltip */}
          <span className="absolute -top-14 pointer-events-none rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-neutral-200 opacity-0 shadow-xl transition-all duration-200 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 whitespace-nowrap">
            {app.label}
          </span>
        </motion.button>
      ))}

      {/* Divider */}
      <div className="mx-1 h-10 w-[1px] rounded-full bg-neutral-800" />

      {/* Desktop/Home Button */}
      <motion.button
        onClick={onHome}
        whileHover={{ y: -8, scale: 1.25 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="group relative flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900/80 text-neutral-300 transition-colors hover:border-neutral-600 hover:bg-neutral-800 hover:text-white"
      >
        <Home size={22} strokeWidth={1.5} />
        
        {/* Tooltip */}
        <span className="absolute -top-14 pointer-events-none rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-xs font-semibold text-neutral-200 opacity-0 shadow-xl transition-all duration-200 translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 whitespace-nowrap">
          Desktop
        </span>
      </motion.button>
    </div>
  )
}