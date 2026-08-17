"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Tabs from "@/components/windows/Tabs"
import { spProjects, Project } from "./ProjectsData"
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react"

type TabState = {
    id: string
    label: string
    closable?: boolean
    project?: Project
}

export default function ProjectsApp() {
    const [tabs, setTabs] = useState<TabState[]>([{ id: "home", label: "Simple Projects" }])
    const [activeTab, setActiveTab] = useState("home")

    const openProjectTab = (project: Project) => {
        setTabs(prev => {
            if (prev.find(t => t.id === project.id)) {
                setActiveTab(project.id)
                return prev
            }
            return [...prev, { id: project.id, label: project.id, closable: true, project }]
        })
        setActiveTab(project.id)
    }

    const closeTab = (id: string) => {
        setTabs(prev => prev.filter(t => t.id !== id))
        setActiveTab("home")
    }

    return (
        <div className="h-full flex flex-col bg-neutral-900/50">
            <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} onClose={closeTab} />

            <div className="flex-1 overflow-auto p-4 md:p-6">
                {activeTab === "home" && (
                    <div className="animate-in fade-in duration-300">
                        <div className="mb-6">
                            <h2 className="text-lg md:text-2xl font-bold text-white tracking-tight">Simple Projects (SPs)</h2>
                            <p className="text-neutral-400 text-xs md:text-sm mt-3 md:mt-4 md:pr-[50%]">SPs means Simple Projects in my system. They are small, focused projects that I complete in around 2–3 days. Each SP is based on just one clear concept — like one ML algorithm, one backend feature, one API integration, or one UI idea. The goal is not to build something huge, but to deeply understand one topic and implement it properly in a practical way.</p>
                            <p className="text-neutral-400 text-xs md:text-sm mt-3 md:pr-[50%]">They are different from my Mission 34 projects, which are bigger and long-term. SPs are like quick execution practice — build fast, learn fast, document shortly, and move to the next. I number them like SP-001, SP-002 and keep stacking them. Over time, these small projects improve my fundamentals, confidence, and consistency as an engineer.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                            {spProjects.map(project => (
                                <motion.button
                                    key={project.id}
                                    onClick={() => openProjectTab(project)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="aspect-square w-full overflow-hidden rounded-4xl border border-neutral-700/50 bg-neutral-900 shadow-lg"
                                >
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                                    ) : (
                                        <div className="flex h-full w-full items-center justify-center">
                                            <ImageIcon className="text-neutral-600" size={28} />
                                        </div>
                                    )}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                )}

                {tabs.map(tab => tab.project && tab.id === activeTab && (
                    <div key={tab.id} className="animate-in slide-in-from-bottom-2 fade-in duration-300 max-w-3xl text-neutral-300">
                        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                            <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 bg-neutral-800 rounded-[20px] md:rounded-[25px] border border-neutral-700 flex items-center justify-center overflow-hidden relative shadow-lg">
                                {tab.project.image ? (
                                    <img src={tab.project.image} alt={tab.project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <ImageIcon className="text-neutral-600" size={26} />
                                )}
                            </div>
                            <div>
                                <h2 className="text-xl md:text-3xl font-bold text-white mb-2">{tab.project.title}</h2>
                                <div className="flex flex-wrap gap-2">
                                    {tab.project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded border border-pink-500/30">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-sm md:text-lg text-neutral-400 mb-6 md:mb-8">{tab.project.description}</p>
                        
                        <div className="flex gap-4 mb-8">
                            {tab.project.github && (
                                <a href={tab.project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-neutral-800 hover:bg-neutral-700 text-white px-4 py-2 rounded-lg transition-colors">
                                    <Github size={18} /> Source Code
                                </a>
                            )}
                            {tab.project.live && (
                                <a href={tab.project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-lg transition-colors font-medium">
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}