"use client"

import { useState, useMemo, useEffect } from "react"
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
  onMinimize?: (id: AppID) => void 
}

export default function AppWindow({
  id,
  zIndex,
  onFocus,
  onClose,
  onMinimize,
}: AppWindowProps) {
  const dragControls = useDragControls()
  const [isMaximized, setIsMaximized] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  // Generate a randomized center offset only once when the component mounts
  const randomOffset = useMemo(() => {
    const offsetRange = 40 
    return {
      x: Math.floor(Math.random() * offsetRange) - offsetRange / 2,
      y: Math.floor(Math.random() * offsetRange) - offsetRange / 2,
    }
  }, [])

  // Auto un-minimize when focused. 
  // Clicking the dock icon triggers bringToFront, changing zIndex. We intercept that to reveal the window.
  useEffect(() => {
    setIsMinimized(false)
  }, [zIndex])

  return (
    <motion.div
      layout
      drag={!isMaximized && !isMinimized}
      dragControls={dragControls}
      dragMomentum={false}
      dragListener={false}
      onMouseDown={() => {
        onFocus(id)
        setIsMinimized(false)
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      // CRITICAL FIX: Animate x & y to 0 when maximized to clear drag offsets.
      // Also handles the shrinking animation for minimization.
      animate={{ 
        opacity: isMinimized ? 0 : 1, 
        scale: isMinimized ? 0.8 : 1,
        y: isMinimized ? 100 : (isMaximized ? 0 : undefined),
        x: isMaximized ? 0 : undefined 
      }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      className={`absolute flex flex-col overflow-hidden border bg-[#0d0d0d]/85 shadow-2xl shadow-black/80 backdrop-blur-xl ${
        isMaximized
          ? "inset-0 z-[9998] rounded-none border-transparent ring-0"
          : "rounded-2xl border-neutral-800 ring-1 ring-white/5"
      }`}
      style={{
        zIndex: isMaximized ? 9998 : zIndex,
        width: isMaximized ? "100%" : "60vw",
        height: isMaximized ? "100%" : "80vh",
        left: isMaximized ? 0 : `calc(50% - 30vw + ${randomOffset.x}px)`,
        top: isMaximized ? 0 : `calc(50% - 40vh + ${randomOffset.y}px)`,
        // Disable pointer events entirely when minimized so invisible windows don't block clicks
        pointerEvents: isMinimized ? "none" : "auto",
      }}
    >
      {/* Title Bar & Drag Handle */}
      <div
        onPointerDown={(e) => {
          onFocus(id)
          if (!isMaximized) dragControls.start(e)
        }}
        className={`relative flex h-11 items-center justify-between border-b border-neutral-800/80 bg-neutral-900/80 px-4 select-none ${
          isMaximized ? "cursor-default" : "cursor-move"
        }`}
      >
        <div className="w-24 pointer-events-none" />

        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold tracking-widest text-neutral-400 uppercase">
          {id}
        </span>

        <div className="flex w-24 items-center justify-end gap-0.5">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsMinimized(true)
              if (onMinimize) onMinimize(id)
            }}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-white"
            aria-label="Minimize"
          >
            <span className="mb-1 text-md font-medium leading-none">-</span>
          </button>
          <button
            onClick={(e) => {
               e.stopPropagation()
               setIsMaximized(!isMaximized)
            }}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-neutral-400 hover:bg-neutral-800 hover:text-white"
            aria-label={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? (
              <div className="relative h-3 w-3">
                <div className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 border-[1.5px] border-neutral-400" />
                <div className="absolute bottom-0 left-0 h-2.5 w-2.5 border-[1.5px] border-neutral-400 bg-[#0d0d0d]" />
              </div>
            ) : (
              <div className="h-3 w-3 border-[1.5px] border-neutral-400" />
            )}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              onClose(id)
            }}
            className="flex h-8 w-8 items-center justify-center rounded-md bg-transparent text-neutral-400 hover:bg-red-500/90 hover:text-white"
            aria-label="Close"
          >
            <span className="text-[15px] font-bold">✕</span>
          </button>
        </div>
      </div>

      <div className="h-[1px] w-full bg-neutral-800/80" />
      <div className="relative flex-1 overflow-hidden bg-transparent">
        <div className="pointer-events-none absolute inset-0 z-50 shadow-[inset_0_0_60px_20px_#0d0d0d]" />
        
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