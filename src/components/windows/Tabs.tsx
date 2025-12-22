"use client"

type Tab = {
  id: string
  label: string
}

type TabsProps = {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex gap-2 border-b border-neutral-600 px-4 py-2">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`text-sm px-3 py-1 rounded-md ${
            activeTab === tab.id
              ? "bg-neutral-700 text-white"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
