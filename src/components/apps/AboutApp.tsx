"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Tabs from "@/components/windows/Tabs"
import AboutHome from "./AboutHome"
import AboutEducation from "./AboutEducation"
import AboutStory from "./AboutStory"

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

        {activeTab === "home" && <AboutHome/>}

        {activeTab === "education" && <AboutEducation/>}

        {activeTab === "story" && <AboutStory/>}
      </motion.div>
    </div>
  )
}
