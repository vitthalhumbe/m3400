"use client"

import { useWindowManager } from "@/hooks/useWindowManager"
import Dock from "./Dock"
import AppWindow from "@/components/windows/AppWindow"

export default function Desktop() {
  const { windows, openWindow, bringToFront, closeWindow } =
    useWindowManager()


  return (
    <div className="relative h-screen w-screen bg-neutral-900 text-white overflow-hidden">
      {windows.map(win => (
        <AppWindow
          key={win.id}
          id={win.id}
          zIndex={win.zIndex}
          onFocus={bringToFront}
          onClose={closeWindow}
        />

      ))}

      <Dock onOpen={openWindow} />
    </div>
  )
}
