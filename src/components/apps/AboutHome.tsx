"use client"

import { Terminal, Cpu, LayoutTemplate } from "lucide-react"

export default function AboutHome() {
  return (
    <div className="h-full w-full p-8 flex flex-col md:flex-row items-center justify-center gap-12 overflow-auto">
      
      <div className="w-64 h-64 shrink-0 rounded-2xl border border-neutral-700/50 bg-neutral-800/50 shadow-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src="/me.png"
          alt="Vitthal Humbe"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            <span className="text-xs font-mono text-white/90 uppercase tracking-widest">Online</span>
        </div>
      </div>
      <div className="max-w-2xl flex-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-4 uppercase tracking-widest">
            <Terminal size={14} /> Root User
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2">
          Vitthal Humbe
        </h1>

        <p className="text-xl text-neutral-400 font-mono mb-6">
          Full-Stack Web Developer & AI Enthusiast
        </p>

        <p className="text-base leading-relaxed text-neutral-300 mb-8 bg-neutral-800/30 p-6 rounded-xl border border-white/5 shadow-inner">
          I am a Computer Science student passionate about building real-world applications and systems in AIML and software engineering. Currently executing <strong>"Mission34"</strong>—a personal initiative to build and document 34 unique, high-impact projects. I prefer understanding core systems deeply, starting with architecture and organizing step-by-step.
        </p>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-sm text-neutral-200 shadow-sm hover:bg-neutral-700 transition-colors">
            <LayoutTemplate size={16} className="text-pink-400"/> Web Developer
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-2 text-sm text-neutral-200 shadow-sm hover:bg-neutral-700 transition-colors">
            <Cpu size={16} className="text-blue-400"/> ML Engineer
          </div>
        </div>
      </div>

    </div>
  )
}