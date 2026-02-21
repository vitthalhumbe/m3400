"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Tabs from "@/components/windows/Tabs"
import AboutHome from "./AboutHome"
import AboutEducation from "./AboutEducation"
import AboutStory from "./AboutStory"

const tabs = [
  { id: "home", label: "System Profile" }, 
  { id: "education", label: "Credentials" },
  { id: "story", label: "System Logs (Story)" },
]

export default function AboutApp() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="h-full flex flex-col bg-neutral-900/50">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full absolute inset-0 overflow-auto"
          >
            {activeTab === "home" && <AboutHome />}
            {activeTab === "education" && <AboutEducation />}
            {activeTab === "story" && <AboutStory />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}