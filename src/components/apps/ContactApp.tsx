"use client"

import { useState } from "react"
import ContactHome from "./ContactHome"
import ContactFeedback from "./ContactFeedbacks"

type ContactTab = "home" | "feedback"

export default function ContactApp() {
  const [activeTab, setActiveTab] = useState<ContactTab>("home")

  return (
    <div className="flex h-full w-full flex-col">
      
      {/* TAB HEADER */}
      <div className="flex gap-8 border-b border-neutral-700 px-8 py-3 text-sm">
        <button
          onClick={() => setActiveTab("home")}
          className={`pb-2 transition-colors ${
            activeTab === "home"
              ? "border-b-2 border-violet-500 text-white"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => setActiveTab("feedback")}
          className={`pb-2 transition-colors ${
            activeTab === "feedback"
              ? "border-b-2 border-violet-500 text-white"
              : "text-neutral-400 hover:text-neutral-200"
          }`}
        >
          Feedback
        </button>
      </div>

      {/* CONTENT */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "home" && <ContactHome />}

        {activeTab === "feedback" && <ContactFeedback/>}
      </div>

    </div>
  )
}
