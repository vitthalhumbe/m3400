"use client"

import { useState, useEffect, useRef } from "react"
import { useWindowManager } from "@/hooks/useWindowManager"
import Dock from "./Dock"
import AppWindow from "@/components/windows/AppWindow"
import { FileText, FolderGit2, Github, Pause, Music, SkipBack, SkipForward, Play, Linkedin, MapPin, CheckCircle2, Info, } from "lucide-react"
import backgroundImg from "@/assets/images/Background.png";

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
      className="flex flex-col items-center gap-2 group cursor-pointer w-24 p-2 rounded hover:bg-white/10 transition-colors"
    >
      <div className={`p-3 rounded-xl bg-neutral-800/50 border border-white/5 shadow-lg group-hover:scale-110 transition-transform ${color}`}>
        <Icon size={32} />
      </div>
      <span className="text-xs text-center text-white/80 font-medium drop-shadow-md group-hover:text-white bg-black/20 rounded px-2">
        {label}
      </span>
    </div>
  )
export default function Desktop() {
  const {
    windows,
    openWindow,
    bringToFront,
    closeWindow,
    resetDesktop,
  } = useWindowManager()

  const [time, setTime] = useState(new Date())
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000 * 60)
    return () => clearInterval(timer)
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
    })
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
        window.open('https://leetcode.com/vitthal_28', '_blank');
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
    <div className="relative h-screen w-screen bg-neutral-900 text-white overflow-hidden font-sans selection:bg-pink-500/30">
      <audio
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3"
        loop
      />
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-neutral-900">
          <img
            src={backgroundImg.src}
            alt="Background"
            className="w-full h-full object-contain object-bottom opacity-100"
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-neutral-900 via-neutral-900 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-transparent to-neutral-900" />
          <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-neutral-900 via-transparent to-transparent" />
        </div>

        <div className="absolute top-12 left-12 select-none pointer-events-none">
          <h1 className="text-6xl font-bold tracking-tight text-white/90 drop-shadow-lg">
            Vitthal Humbe
          </h1>
          <p className="mt-2 text-xl text-white/60 font-mono tracking-widest uppercase">
            Full Stack Web Developer
          </p>
        </div>

        <div className="absolute top-12 right-12 flex flex-col gap-4 items-end pointer-events-auto">
          <div className="flex gap-4 items-start">
            <div className="relative group">
              <div className="w-48 p-4 bg-yellow-200/90 text-neutral-800 rounded-lg shadow-lg rotate-[-2deg] transition-transform hover:rotate-0 hover:scale-105 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2 border-b border-neutral-800/20 pb-1">
                  <Info size={14} />
                  <span className="text-xs font-bold">README.txt</span>
                </div>
                <p className="text-sm font-handwriting leading-relaxed">
                  Click icons to open Windows<br />
                  Drag windows to organize Desktop<br />
                  <span className="font-bold">Explore the Portfolio! </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl text-right min-w-[180px]">
                <div className="text-5xl font-light tracking-tighter text-white">
                  {formatTime(time)}
                </div>
                <div className="text-sm font-medium text-white/60 mt-1 uppercase tracking-widest">
                  {formatDate(time)}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-neutral-800/60 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg flex items-center gap-4 min-w-[200px]">
              <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                <CheckCircle2 size={24} />
              </div>
              <div className="flex-1">
                <div className="text-xs text-white/50 uppercase font-bold">Projects Done</div>
                <div className="text-2xl font-bold">26</div>
                <div className="w-full h-1 bg-neutral-700 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full" />
                </div>
              </div>
            </div>
            <div className="bg-neutral-800/60 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-lg flex flex-col justify-center min-w-[140px]">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin size={18} className="text-pink-500" />
                <span className="font-medium">Kolhapur</span>
              </div>
              <div className="text-xs text-white/40 ml-6 mt-1">India</div>
            </div>
          </div>


        </div>
        <div className="absolute top-48 left-12 flex flex-col gap-8 z-0">
          <div className="absolute top-8 left-12 flex flex-col gap-6 z-10">
            <DesktopShortcut
              icon={FileText}
              label="Resume.pdf"
              color="text-red-400"
              onClick={() => handleShortcutClick('resume')}
            />
            <DesktopShortcut
              icon={LeetCodeIcon}
              label="LeetCode"
              color="text-yellow-400"
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
        </div>
        <div className="absolute bottom-32 right-12 z-10">
          <div className="bg-neutral-900/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4 w-72 shadow-2xl group hover:bg-neutral-800/80 transition-colors">
            <div className={`w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg ${isPlaying ? 'animate-pulse' : ''}`}>
              <Music size={24} className="text-white" />
            </div>

            <div className="flex-1">
              <div className="text-xs text-green-400 font-bold tracking-wider mb-1 flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full bg-green-500 ${isPlaying ? 'animate-ping' : ''}`} />
                Spotify
              </div>
              <div className="font-bold text-sm text-white">Coding Lo-Fi</div>
              <div className="text-xs text-white/50">Chill Hop Beats</div>
              <div className="flex gap-3 mt-2 text-white/80 items-center">
                <SkipBack size={16} className="hover:text-white cursor-pointer" />
                <div
                  onClick={toggleMusic}
                  className="bg-white text-black p-1 rounded-full hover:scale-110 transition-transform cursor-pointer"
                >
                  {isPlaying ? <Pause size={14} fill="black" /> : <Play size={14} fill="black" className="ml-0.5" />}
                </div>

                <SkipForward size={16} className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-30 w-full h-full pointer-events-none">
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
      <div className="absolute bottom-4 left-0 right-0 z-50 flex justify-center pointer-events-auto">
        <Dock onOpen={openWindow} onHome={resetDesktop} />
      </div>
    </div>
  )
} 