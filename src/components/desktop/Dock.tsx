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
  // { id: "certifications", label: "Certifications", icon: <Award size={22} /> },
  { id: "hobbies", label: "Hobbies", icon: <Heart size={22} /> },
  { id: "contact", label: "Contact", icon: <Mail size={22} /> },
]
export default function Dock({ onOpen, onHome }: DockProps) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-neutral-800/90 backdrop-blur-md px-6 py-3 rounded-2xl z-[9999] border border-white/10 shadow-2xl">
      
      {apps.map(app => (
        <motion.button
          key={app.id}
          onClick={() => onOpen(app.id)}
          whileHover={{ y: -5, scale: 1.2 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="relative group w-12 h-12 flex items-center justify-center bg-neutral-700/80 rounded-xl hover:bg-neutral-600 transition-colors"
        >
          {app.icon}
          
          <span className="absolute -top-12 px-3 py-1.5 bg-neutral-900 text-white/90 text-xs font-medium rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
            {app.label}
          </span>
        </motion.button>
      ))}
      <div className="w-px h-10 bg-neutral-600 self-center mx-1" />

      <motion.button
        onClick={onHome}
        whileHover={{ y: -5, scale: 1.2 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="relative group w-12 h-12 flex items-center justify-center bg-neutral-900 border border-neutral-600 rounded-xl hover:bg-neutral-700 transition-colors"
      >
        <Home size={22} />
        
        <span className="absolute -top-12 px-3 py-1.5 bg-neutral-900 text-white/90 text-xs font-medium rounded-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-150 pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
          Desktop
        </span>
      </motion.button>
    </div>
  )
}