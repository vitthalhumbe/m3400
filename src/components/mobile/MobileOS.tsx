"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  User, Wrench, FolderKanban, Rocket, Heart, Mail,
  FileText, Github, Linkedin, Signal, Wifi, BatteryFull,
  ArrowLeft, Circle, Square, X,
} from "lucide-react"
import type { AppID } from "@/types/window"

import AboutApp from "@/components/apps/AboutApp"
import ProjectsApp from "@/components/apps/ProjectsApp"
import SkillsApp from "@/components/apps/SkillsApp"
import Mission34App from "@/components/apps/Mission34App"
import ContactApp from "@/components/apps/ContactApp"
import Hobbies from "@/components/apps/Hobbies"

const LeetCodeIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
)

type MobileApp = {
  id: AppID
  label: string
  icon: React.ReactNode
  bg: string
}

const apps: MobileApp[] = [
  { id: "about", label: "About Me", icon: <User size={26} strokeWidth={1.8} />, bg: "bg-blue-500" },
  { id: "skills", label: "Skills", icon: <Wrench size={26} strokeWidth={1.8} />, bg: "bg-purple-500" },
  { id: "projects", label: "Projects", icon: <FolderKanban size={26} strokeWidth={1.8} />, bg: "bg-emerald-500" },
  { id: "mission34", label: "Mission 34", icon: <Rocket size={26} strokeWidth={1.8} />, bg: "bg-orange-500" },
  { id: "hobbies", label: "Hobbies", icon: <Heart size={26} strokeWidth={1.8} />, bg: "bg-pink-500" },
  { id: "contact", label: "Contact", icon: <Mail size={26} strokeWidth={1.8} />, bg: "bg-cyan-500" },
]

const links = [
  { label: "Resume", icon: <FileText size={24} strokeWidth={1.8} />, bg: "bg-red-500", url: "/Resume.pdf" },
  { label: "LeetCode", icon: <LeetCodeIcon size={22} />, bg: "bg-yellow-500", url: "https://leetcode.com/vitthal_28" },
  { label: "GitHub", icon: <Github size={24} strokeWidth={1.8} />, bg: "bg-neutral-700", url: "https://github.com/vitthalhumbe" },
  { label: "LinkedIn", icon: <Linkedin size={24} strokeWidth={1.8} />, bg: "bg-blue-600", url: "https://www.linkedin.com/in/vitthal-humbe-9a8b12264" },
]

function renderAppContent(id: AppID) {
  switch (id) {
    case "about": return <AboutApp />
    case "projects": return <ProjectsApp />
    case "skills": return <SkillsApp />
    case "mission34": return <Mission34App />
    case "contact": return <ContactApp />
    case "hobbies": return <Hobbies />
    default: return null
  }
}

export default function MobileOS() {
  const [time, setTime] = useState(new Date())
  const [openApps, setOpenApps] = useState<AppID[]>([])
  const [activeApp, setActiveApp] = useState<AppID | null>(null)
  const [showRecents, setShowRecents] = useState(false)

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000 * 30)
    return () => clearInterval(t)
  }, [])

  const formatStatusTime = (d: Date) =>
    d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: false })

  const formatClockTime = (d: Date) =>
    d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })

  const formatDate = (d: Date) =>
    d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }).toUpperCase()

  const launchApp = (id: AppID) => {
    setOpenApps(prev => (prev.includes(id) ? prev : [...prev, id]))
    setActiveApp(id)
    setShowRecents(false)
  }

  const goHome = () => {
    setActiveApp(null)
    setShowRecents(false)
  }

  const goBack = () => {
    if (showRecents) return setShowRecents(false)
    if (activeApp) return goHome()
  }

  const toggleRecents = () => {
    setShowRecents(v => !v)
  }

  const closeFromRecents = (id: AppID) => {
    setOpenApps(prev => prev.filter(a => a !== id))
    if (activeApp === id) setActiveApp(null)
  }

  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-[#050505] font-sans text-white select-none">
      {/* Status bar */}
      <div className="z-40 flex items-center justify-between px-5 py-1  text-xs font-medium text-neutral-200">
        <span>{formatStatusTime(time)}</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} />
          <Wifi size={14} />
          <BatteryFull size={16} />
        </div>
      </div>

      {/* Main content area */}
      <div className="relative flex-1 overflow-hidden">
        {/* Home screen */}
        <div className="absolute inset-0 overflow-y-auto">
          {/* Wallpaper: abstract gradient blobs instead of the stretched photo */}
          <div className="absolute inset-0 overflow-hidden bg-[#050505]">
            <div className="absolute -left-16 -top-24 h-72 w-72 rounded-full bg-violet-600/25 blur-[90px]" />
            <div className="absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-pink-600/20 blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-blue-600/20 blur-[90px]" />
          </div>

          <div className="relative z-10 px-6 pt-8">
            {/* Profile header with small avatar */}
            <div className="flex items-center gap-4 px-5">
              <div className="relative h-16 w-16 shrink-0">
                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-neutral-700 bg-neutral-800 shadow-lg">
                  <img src="/me.png" alt="Vitthal Humbe" className="h-full w-full object-cover object-top" />
                </div>
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#050505] bg-green-500" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">Vitthal Humbe</h1>
                <p className="mt-0.5 font-mono text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                  Computer Engineer
                </p>
              </div>
            </div>

            {/* Clock widget */}
            <div className="mt-10 mb-8 px-5">
              <div className="text-6xl font-light tracking-tighter text-white">
                {formatClockTime(time)}
              </div>
              <div className="mt-1 text-xs font-semibold tracking-[0.15em] text-neutral-500 uppercase">
                {formatDate(time)}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-y-6">
              {apps.map(app => (
                <button
                  key={app.id}
                  onClick={() => launchApp(app.id)}
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${app.bg} text-white shadow-lg active:scale-95 transition-transform`}>
                    {app.icon}
                  </div>
                  <span className="text-[10px] font-medium text-neutral-300 text-center leading-tight">
                    {app.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-10 mb-28 grid grid-cols-4 gap-y-6">
              {links.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-1.5"
                >
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${link.bg} text-white shadow-lg active:scale-95 transition-transform`}>
                    {link.icon}
                  </div>
                  <span className="text-[10px] font-medium text-neutral-300 text-center leading-tight">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Active app, full screen, no header chrome */}
        <AnimatePresence>
          {activeApp && !showRecents && (
            <motion.div
              key={activeApp}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="absolute inset-0 z-30 flex flex-col overflow-y-auto bg-[#0a0a0a] px-3 pt-2"
            >
              {renderAppContent(activeApp)}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Recents (app switcher) */}
        <AnimatePresence>
          {showRecents && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-40 flex flex-col bg-[#050505]/98 backdrop-blur-xl"
            >
              <div className="px-5 pt-5 text-xs font-bold uppercase tracking-wider text-neutral-500">
                Recent Apps
              </div>

              {openApps.length === 0 ? (
                <div className="flex flex-1 items-center justify-center text-sm text-neutral-500">
                  No recent apps
                </div>
              ) : (
                <div className="flex flex-1 items-center gap-4 overflow-x-auto px-5 py-6 snap-x snap-mandatory">
                  {openApps.map(id => {
                    const meta = apps.find(a => a.id === id)!
                    return (
                      <div
                        key={id}
                        className="relative flex h-[60vh] w-[62vw] shrink-0 snap-center flex-col overflow-hidden rounded-3xl border border-neutral-800 shadow-2xl"
                      >
                        <button
                          onClick={() => launchApp(id)}
                          className="flex h-full w-full flex-col items-center justify-center gap-4 bg-neutral-900"
                        >
                          <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${meta.bg} text-white shadow-lg`}>
                            {meta.icon}
                          </div>
                          <span className="text-sm font-semibold text-neutral-200">{meta.label}</span>
                        </button>

                        <button
                          onClick={() => closeFromRecents(id)}
                          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800/90 text-neutral-300 active:scale-95"
                          aria-label={`Close ${meta.label}`}
                        >
                          <X size={16} />
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}

              {openApps.length > 0 && (
                <button
                  onClick={() => {
                    setOpenApps([])
                    setActiveApp(null)
                  }}
                  className="mx-auto mb-4 rounded-full border border-neutral-800 px-4 py-1.5 text-xs font-medium text-neutral-400 active:scale-95"
                >
                  Clear all
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Android nav bar */}
      <div className="relative z-40 flex items-center justify-around border-t border-neutral-900 bg-[#050505] px-8 py-3 pb-[env(safe-area-inset-bottom,12px)]">
        <button onClick={goBack} className="text-neutral-400 active:text-white">
          <ArrowLeft size={20} />
        </button>
        <button onClick={goHome} className="text-neutral-400 active:text-white">
          <Circle size={20} />
        </button>
        <button onClick={toggleRecents} className={`active:text-white ${showRecents ? "text-white" : "text-neutral-400"}`}>
          <Square size={18} />
        </button>
      </div>
    </div>
  )
}