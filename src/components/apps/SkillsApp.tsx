"use client"

import { useState } from "react"
import TechnicalSkills from "./TechnicalSkills"
import SoftSkills from "./SoftSkills"

type SkillsTab = "technical" | "soft"

export default function SkillsApp() {
  const [activeTab, setActiveTab] = useState<SkillsTab>("technical")

  return (
    <div className="flex h-full w-full flex-col">
      
      {/* TAB HEADER */}
      <div className="flex gap-8 border-b border-neutral-700 px-8 py-3 text-sm">
        <button
          onClick={() => setActiveTab("technical")}
          className={`pb-2 transition-colors ${
            activeTab === "technical"
              ? "border-b-2 border-violet-500 text-white"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          Technical Skills
        </button>

        <button
          onClick={() => setActiveTab("soft")}
          className={`pb-2 transition-colors ${
            activeTab === "soft"
              ? "border-b-2 border-violet-500 text-white"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          Soft Skills
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "technical" && <TechnicalSkills />}
        {activeTab === "soft" && <SoftSkills />}
      </div>

    </div>
  )
}
