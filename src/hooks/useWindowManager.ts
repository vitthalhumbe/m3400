import { useState } from "react"
import type { AppID, WindowInstance } from "@/types/window"

export function useWindowManager() {
  const [windows, setWindows] = useState<WindowInstance[]>([])
  const [topZ, setTopZ] = useState(1)

  const openWindow = (id: AppID) => {
    setWindows(prev => {
      const exists = prev.find(w => w.id === id)

      if (exists) {
        // bring existing window to front
        return prev.map(w =>
          w.id === id ? { ...w, zIndex: topZ } : w
        )
      }

      // open new window
      return [...prev, { id, zIndex: topZ }]
    })

    setTopZ(z => z + 1)
  }

  const closeWindow = (id: AppID) => {
    setWindows(prev => prev.filter(w => w.id !== id))
  }

  const bringToFront = (id: AppID) => {
    setWindows(prev =>
      prev.map(w =>
        w.id === id ? { ...w, zIndex: topZ } : w
      )
    )
    setTopZ(z => z + 1)
  }

  return {
    windows,
    openWindow,
    bringToFront,
    closeWindow,
  }

}
