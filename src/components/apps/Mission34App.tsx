"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Tabs from "@/components/windows/Tabs"
import { m34Projects, Project } from "./ProjectsData"
import { Github, ExternalLink, FileText, X } from "lucide-react"

type TabState = { id: string; label: string; closable?: boolean; project?: Project }

export default function Mission34App() {
    const [tabs, setTabs] = useState<TabState[]>([{ id: "home", label: "Mission 34" }])
    const [activeTab, setActiveTab] = useState("home")
    const [viewingPdf, setViewingPdf] = useState<string | null>(null)

    const openProjectTab = (project: Project) => {
        setTabs(prev => {
            if (prev.find(t => t.id === project.id)) {
                setActiveTab(project.id)
                return prev
            }
            return [...prev, { id: project.id, label: project.id.toUpperCase(), closable: true, project }]
        })
        setActiveTab(project.id)
        setViewingPdf(null) // Reset PDF viewer on new tab
    }

    const closeTab = (id: string) => {
        setTabs(prev => prev.filter(t => t.id !== id))
        setActiveTab("home")
    }

    return (
        <div className="h-full flex flex-col bg-neutral-900/50">
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} onClose={closeTab} />

            <div className="flex-1 overflow-auto p-6 text-sm text-neutral-300 relative">
                
                {/* --- HOME TAB --- */}
                {activeTab === "home" && (
                    <div className="animate-in fade-in duration-300">
                        <p className="mb-6 text-neutral-400">My core mission to build 34 high-impact, full-stack applications and systems.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {m34Projects.map(project => (
                                <motion.div key={project.id} onClick={() => openProjectTab(project)} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className="cursor-pointer rounded-xl border border-neutral-700/50 p-5 bg-gradient-to-br from-neutral-800 to-neutral-900 shadow-lg hover:border-neutral-500 transition-all">
                                    <h3 className="font-bold text-white text-lg">{project.title}</h3>
                                    <p className="text-neutral-400 mt-2 h-10 line-clamp-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs font-medium px-2 py-1 bg-black/30 rounded text-neutral-300 border border-white/5">{t}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- PROJECT TAB --- */}
                {tabs.map(tab => tab.project && tab.id === activeTab && (
                    <div key={tab.id} className="animate-in slide-in-from-bottom-2 fade-in duration-300 max-w-4xl mx-auto">
                        
                        {/* 1. Media Hero Section (GIF/Image) */}
                        {tab.project.mediaUrl && (
                            <div className="w-full h-64 md:h-96 bg-neutral-950 rounded-2xl mb-8 border border-neutral-800 overflow-hidden shadow-2xl relative group">
                                <img src={tab.project.mediaUrl} alt="Project Demo" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                            </div>
                        )}

                        <h2 className="text-3xl font-bold text-white mb-2">{tab.project.title}</h2>
                        <div className="flex gap-2 mb-6">
                            {tab.project.tech.map(t => (
                                <span key={t} className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded border border-pink-500/30">{t}</span>
                            ))}
                        </div>
                        
                        {/* 2. Action Buttons (including PDF Doc) */}
                        <div className="flex flex-wrap gap-4 mb-8 border-b border-neutral-800 pb-8">
                            {tab.project.github && (
                                <a href={tab.project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg transition-colors"><Github size={18} /> Source Code</a>
                            )}
                            {tab.project.live && (
                                <a href={tab.project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-lg transition-colors font-medium"><ExternalLink size={18} /> Live Demo</a>
                            )}
                            {tab.project.pdfDocUrl && (
                                <button onClick={() => setViewingPdf(viewingPdf === tab.project!.id ? null : tab.project!.id)} className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium border ${viewingPdf === tab.project.id ? 'bg-red-500/20 text-red-400 border-red-500/50' : 'bg-blue-500/20 text-blue-400 border-blue-500/50 hover:bg-blue-500/30'}`}>
                                    {viewingPdf === tab.project.id ? <><X size={18} /> Close Docs</> : <><FileText size={18} /> Read Docs.pdf</>}
                                </button>
                            )}
                        </div>

                        {/* 3. Native PDF Viewer */}
                        {viewingPdf === tab.project.id && tab.project.pdfDocUrl && (
                            <div className="w-full h-[600px] bg-neutral-900 rounded-xl mb-8 border border-neutral-700 overflow-hidden shadow-inner animate-in slide-in-from-top-4">
                                <iframe src={tab.project.pdfDocUrl} className="w-full h-full" title="PDF Documentation" />
                            </div>
                        )}

                        {/* 4. Formatted Description (Preserves \n newlines) */}
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-white">Overview</h3>
                            <p className="leading-relaxed whitespace-pre-line text-lg text-neutral-400">
                                {tab.project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}