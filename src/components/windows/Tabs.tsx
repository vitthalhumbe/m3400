"use client"
import { motion } from "framer-motion"


type Tab = {
  id: string
  label: string
  closable?: boolean
}

type TabsProps = {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
  onClose?: (id: string) => void
}

export default function Tabs({
  tabs,
  activeTab,
  onChange,
  onClose,
}: TabsProps) {
  return (
    <div className="flex gap-1 border-b border-neutral-700 px-2 py-2">
      {tabs.map(tab => {
        const isActive = activeTab === tab.id

        return (
          <div
            key={tab.id}
            className="relative"
            onClick={() => onChange(tab.id)}
          >
            <motion.div
              whileHover={!isActive ? { opacity: 0.6 } : {}}
              className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm cursor-pointer ${isActive
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
                }`}
            >
              <span>{tab.label}</span>

              {tab.closable && onClose && (
                <button
                  onClick={e => {
                    e.stopPropagation()
                    onClose(tab.id)
                  }}
                  className="text-neutral-400 hover:text-red-400"
                >
                  ✕
                </button>
              )}
            </motion.div>

            {/* Active underline */}
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-400 rounded"
              />
            )}
          </div>
        )
      })}

    </div>
  )
}
