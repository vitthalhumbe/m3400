"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Tabs from "@/components/windows/Tabs"

const tabs = [
  { id: "home", label: "Home" },
  { id: "education", label: "Education" },
  { id: "story", label: "My Story" },
]

export default function AboutApp() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="h-full flex flex-col">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="p-4 text-sm text-neutral-300 flex-1 overflow-auto"
      >

        {activeTab === "home" && (
          <p>
            Hi, I’m Vitthal. I build systems, not just projects.
          </p>
        )}

        {activeTab === "education" && (
          <p>
            AIML Diploma student with strong focus on algorithms and ML fundamentals.
          </p>
        )}

        {activeTab === "story" && (
          <p>
            Mission34 is about disciplined growth — one system at a time.
          </p>
        )}
      </motion.div>
    </div>
  )
}
