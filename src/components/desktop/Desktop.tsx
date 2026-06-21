"use client"

import { useState, useEffect, useRef } from "react"
import { useWindowManager } from "@/hooks/useWindowManager"
import Dock from "./Dock"
import AppWindow from "@/components/windows/AppWindow"
import { FileText, Github, Pause, Music, SkipBack, SkipForward, Play, Linkedin, MapPin, CheckCircle2, Info, RefreshCw, Monitor, Code, LayoutGrid } from "lucide-react"
import backgroundImg from "@/assets/images/Background.png"

const LeetCodeIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
  </svg>
)

const DesktopShortcut = ({ icon: Icon, label, color = "text-blue-400", onClick }: any) => (
  <div
    onClick={onClick}
    className="flex w-20 cursor-pointer flex-col items-center gap-2 rounded-lg p-2 transition-colors hover:bg-neutral-800/50 group"
  >
    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-[#0d0d0d]/80 shadow-xl transition-transform group-hover:scale-105 ${color}`}>
      <Icon size={22} strokeWidth={1.5} />
    </div>
    <span className="rounded-md border border-transparent bg-neutral-950/50 px-2 py-0.5 text-center text-[11px] font-medium text-neutral-400 transition-all group-hover:border-neutral-800 group-hover:text-white">
      {label}
    </span>
  </div>
)

export default function Desktop() {
  const { windows, openWindow, bringToFront, closeWindow, resetDesktop } = useWindowManager()

  const [time, setTime] = useState(new Date())
  const [isPlaying, setIsPlaying] = useState(false)
  const [contextMenu, setContextMenu] = useState({ show: false, x: 0, y: 0 })
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000 * 60)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      
      let x = e.pageX
      let y = e.pageY
      
      if (x + 220 > window.innerWidth) x = window.innerWidth - 220
      if (y + 200 > window.innerHeight) y = window.innerHeight - 200

      setContextMenu({ show: true, x, y })
    }

    const handleClick = () => {
      setContextMenu({ show: false, x: 0, y: 0 })
    }

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("click", handleClick)
    }
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    }).toUpperCase()
  }

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleShortcutClick = (type: string) => {
    switch (type) {
      case 'resume':
        window.open('/Resume.pdf', '_blank')
        break
      case 'leetcode':
        window.open('https://leetcode.com/vitthal_28', '_blank')
        break
      case 'github':
        window.open('https://github.com/vitthalhumbe', '_blank')
        break
      case 'linkedin':
        window.open('https://www.linkedin.com/in/vitthal-humbe-9a8b12264', '_blank')
        break
      default:
        break
    }
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#050505] font-sans text-white select-none selection:bg-pink-500 selection:text-white">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
        loop
      />
      
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <img
            src={backgroundImg.src}
            alt="Background"
            className="h-full w-full object-contain object-bottom opacity-100 pointer-events-none"
          />
        </div>

        <div className="pointer-events-none absolute left-12 top-12">
          <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-xl">
            Vitthal Humbe
          </h1>
          <p className="mt-3 font-mono text-sm tracking-[0.2em] text-neutral-400 uppercase">
            Computer Engineer
          </p>
        </div>

        <div className="pointer-events-auto absolute left-12 top-40 z-10 flex flex-col gap-4">
          <DesktopShortcut
            icon={FileText}
            label="Resume.pdf"
            color="text-red-400"
            onClick={() => handleShortcutClick('resume')}
          />
          <DesktopShortcut
            icon={LeetCodeIcon}
            label="LeetCode"
            color="text-yellow-500"
            onClick={() => handleShortcutClick('leetcode')}
          />
          <DesktopShortcut
            icon={Github}
            label="Github_Repo"
            color="text-white"
            onClick={() => handleShortcutClick('github')}
          />
          <DesktopShortcut
            icon={Linkedin}
            label="Connect_Me"
            color="text-blue-500"
            onClick={() => handleShortcutClick('linkedin')}
          />
        </div>

        <div className="pointer-events-auto absolute right-12 top-12 flex flex-col items-end gap-4">
          <div className="flex items-start gap-4">
            <div className="group relative">
              <div className="w-48 rotate-[-2deg] rounded-lg border border-[#eab308] bg-[#fef08a] p-4 text-neutral-900 shadow-xl transition-transform hover:rotate-0 hover:scale-105">
                <div className="mb-2 flex items-center gap-2 border-b border-neutral-900/20 pb-1">
                  <Info size={14} className="text-neutral-900" />
                  <span className="text-[10px] font-bold tracking-wider uppercase">README.txt</span>
                </div>
                <p className="text-xs font-medium leading-relaxed">
                  Click icons to open Windows<br />
                  Drag windows to organize Desktop<br />
                  <span className="mt-1 block font-bold">Explore the Portfolio!</span>
                </p>
              </div>
            </div>

            <div className="min-w-[180px] rounded-2xl border border-neutral-800 bg-[#0d0d0d]/85 p-6 text-right shadow-xl backdrop-blur-xl">
              <div className="text-4xl font-light tracking-tighter text-white">
                {formatTime(time)}
              </div>
              <div className="mt-2 text-[10px] font-bold tracking-[0.15em] text-neutral-500 uppercase">
                {formatDate(time)}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex min-w-[200px] items-center gap-4 rounded-xl border border-neutral-800 bg-[#0d0d0d]/85 p-4 shadow-xl backdrop-blur-xl">
              <div className="rounded-full border border-green-500/20 bg-green-500/10 p-2.5 text-green-500">
                <CheckCircle2 size={20} strokeWidth={2} />
              </div>
              <div className="flex-1">
                <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase">Projects Done</div>
                <div className="text-xl font-bold text-white">40+</div>
                <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-neutral-800">
                  <div className="h-full w-full bg-green-500" />
                </div>
              </div>
            </div>

            <div className="flex min-w-[140px] flex-col justify-center rounded-xl border border-neutral-800 bg-[#0d0d0d]/85 p-4 shadow-xl backdrop-blur-xl">
              <div className="flex items-center gap-2 text-neutral-200">
                <MapPin size={16} className="text-pink-500" strokeWidth={2} />
                <span className="text-sm font-medium">Kolhapur</span>
              </div>
              <div className="ml-6 mt-0.5 text-xs text-neutral-500">India</div>
            </div>
          </div>
        </div>

        <div className="pointer-events-auto absolute bottom-24 right-12 z-10 md:bottom-12">
          <div className="flex w-72 items-center gap-4 rounded-2xl border border-neutral-800 bg-[#0d0d0d]/85 p-3 shadow-xl backdrop-blur-xl transition-colors hover:bg-neutral-900">
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-pink-600 shadow-lg ${isPlaying ? 'animate-pulse' : ''}`}>
              <Music size={20} className="text-white" strokeWidth={2} />
            </div>

            <div className="flex-1">
              <div className="text-xs font-bold tracking-wide text-white">Coding Lo-Fi</div>
              <div className="mt-2 flex items-center gap-4 text-neutral-400">
                <SkipBack size={14} className="cursor-pointer transition-colors hover:text-white" />
                <div
                  onClick={toggleMusic}
                  className="cursor-pointer rounded-full bg-white p-1.5 text-black transition-transform hover:scale-105"
                >
                  {isPlaying ? <Pause size={12} fill="black" /> : <Play size={12} fill="black" className="ml-0.5" />}
                </div>
                <SkipForward size={14} className="cursor-pointer transition-colors hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none relative z-30 h-full w-full">
        {windows.map(win => (
          <div key={win.id} className="pointer-events-auto"> 
            <AppWindow
              id={win.id}
              zIndex={win.zIndex}
              onFocus={bringToFront}
              onClose={closeWindow}
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-auto absolute bottom-6 left-0 right-0 z-50 flex justify-center">
        <Dock onOpen={openWindow} onHome={resetDesktop} />
      </div>

      {contextMenu.show && (
        <div
          className="fixed z-[9999] flex w-56 flex-col gap-1 rounded-xl border border-neutral-800 bg-[#0d0d0d]/90 p-1.5 shadow-2xl backdrop-blur-xl"
          style={{ top: contextMenu.y, left: contextMenu.x }}
        >
          <button 
            onClick={() => window.location.reload()}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
          
          <button 
            onClick={resetDesktop}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <LayoutGrid size={16} />
            Clean Desktop
          </button>
          
          <div className="my-1 h-px w-full bg-neutral-800" />
          
          <button 
            onClick={() => window.open('https://github.com/vitthalhumbe', '_blank')}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <Code size={16} />
            View Source
          </button>
          
          <button 
            onClick={() => handleShortcutClick('linkedin')}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <Monitor size={16} />
            Connect
          </button>
        </div>
      )}
    </div>
  )
}