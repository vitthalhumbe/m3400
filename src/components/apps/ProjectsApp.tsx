// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import Tabs from "@/components/windows/Tabs"
// import { projects, Project } from "./ProjectsData"

// type TabState = {
//     id: string
//     label: string
//     closable?: boolean
//     project?: Project
// }

// export default function ProjectsApp() {
//     const [tabs, setTabs] = useState<TabState[]>([
//         { id: "home", label: "Home" },
//     ])
//     const [activeTab, setActiveTab] = useState("home")
//     const [focusedProjectId, setFocusedProjectId] = useState<string | null>(null)

//     const openProjectTab = (project: Project) => {
//         setTabs(prev => {
//             const exists = prev.find(t => t.id === project.id)
//             if (exists) {
//                 setActiveTab(project.id)
//                 return prev
//             }

//             return [
//                 ...prev,
//                 {
//                     id: project.id,
//                     label: project.title,
//                     closable: true,
//                     project,
//                 },
//             ]
//         })
//         setActiveTab(project.id)
//     }

//     const closeTab = (id: string) => {
//         setTabs(prev => prev.filter(t => t.id !== id))
//         setActiveTab("home")
//     }

//     return (
//         <div className="h-full flex flex-col">
//             <Tabs
//                 tabs={tabs}
//                 activeTab={activeTab}
//                 onChange={setActiveTab}
//                 onClose={closeTab}
//             />

//             <div className="flex-1 overflow-auto p-4 text-sm text-neutral-300">
//                 {activeTab === "home" && (
//                     <div className="grid grid-cols-2 gap-4">
//                         {projects.map(project => (
//                             <motion.div
//                                 key={project.id}
//                                 onClick={() => {
//                                     setFocusedProjectId(project.id)
//                                     openProjectTab(project)
//                                 }}
//                                 animate={
//                                     focusedProjectId === project.id
//                                         ? { scale: 0.97 }
//                                         : { scale: 1 }
//                                 }
//                                 whileHover={{ y: -4, scale: 1.02 }}
//                                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                                 className="cursor-pointer rounded-xl border border-neutral-700 p-4 bg-neutral-900 hover:bg-neutral-800"
//                             >


//                                 <h3 className="font-semibold text-white">
//                                     {project.title}
//                                 </h3>

//                                 <p className="text-neutral-400 mt-1">
//                                     {project.description}
//                                 </p>

//                                 <div className="flex flex-wrap gap-2 mt-3">
//                                     {project.tech.map(t => (
//                                         <span
//                                             key={t}
//                                             className="text-xs px-2 py-1 bg-neutral-700 rounded"
//                                         >
//                                             {t}
//                                         </span>
//                                     ))}
//                                 </div>

//                                 {project.status && (
//                                     <div className="mt-2 text-xs text-blue-400">
//                                         {project.status}
//                                     </div>
//                                 )}
//                             </motion.div>
//                         ))}
//                     </div>
//                 )}

//                 {tabs.map(
//                     tab =>
//                         tab.project &&
//                         tab.id === activeTab && (
//                             <div key={tab.id} className="space-y-4">
//                                 <h2 className="text-lg font-semibold text-white">
//                                     {tab.project.title}
//                                 </h2>

//                                 <p>{tab.project.description}</p>

//                                 <div>
//                                     <strong>Tech:</strong>{" "}
//                                     {tab.project.tech.join(", ")}
//                                 </div>

//                                 <p>
//                                     Detailed explanation, architecture, learnings, and links go here.
//                                 </p>
//                             </div>
//                         )
//                 )}
//             </div>
//         </div>
//     )
// }

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
            // If tab is already open, just switch to it
            if (prev.find(t => t.id === project.id)) {
                setActiveTab(project.id)
                return prev
            }
            // Otherwise, open a new tab
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

            <div className="flex-1 overflow-auto p-6">
                
                {/* --- MAIN GRID VIEW --- */}
                {activeTab === "home" && (
                    <div className="animate-in fade-in duration-300">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-white tracking-tight">Simple Projects (SPs)</h2>
                            <p className="text-neutral-400 text-sm mt-4 pr-[50%]">SPs means Simple Projects in my system. They are small, focused projects that I complete in around 2–3 days. Each SP is based on just one clear concept — like one ML algorithm, one backend feature, one API integration, or one UI idea. The goal is not to build something huge, but to deeply understand one topic and implement it properly in a practical way.</p>
                            <p className="text-neutral-400 text-sm mt-3 pr-[50%]">They are different from my Mission 34 projects, which are bigger and long-term. SPs are like quick execution practice — build fast, learn fast, document shortly, and move to the next. I number them like SP-001, SP-002 and keep stacking them. Over time, these small projects improve my fundamentals, confidence, and consistency as an engineer.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {spProjects.map(project => (
                                <motion.div
                                    key={project.id}
                                    onClick={() => openProjectTab(project)}
                                    whileHover={{ y: -2 }}
                                    className="cursor-pointer rounded-xl border border-neutral-700/50 p-4 bg-neutral-800/50 hover:bg-neutral-800 transition-colors flex flex-col justify-between"
                                >
                                    <div className="flex gap-4">
                                        {/* Logo/Image Thumbnail */}
                                        <div className="w-16 h-16 shrink-0 bg-neutral-900 rounded-[15px] border border-neutral-700 flex items-center justify-center overflow-hidden relative">
                                            {project.image ? (
                                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <ImageIcon className="text-neutral-600" size={24} />
                                            )}
                                        </div>
                                        
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <span className="text-xs font-mono text-pink-400 bg-pink-400/10 px-2 py-0.5 rounded">{project.id}</span>
                                                {project.status === "Completed" && <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>}
                                                {project.status === "Not started" && <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>}
                                            </div>
                                            <h3 className="font-semibold text-white text-lg leading-tight">{project.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-neutral-400 text-sm mt-4 leading-relaxed line-clamp-2">{project.description}</p>

                                    <div className="mt-4 pt-4 border-t border-neutral-700/50 flex justify-between items-center">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.map(t => (
                                                <span key={t} className="text-[10px] font-medium px-2 py-1 bg-neutral-900 text-neutral-300 rounded uppercase tracking-wider">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- INDIVIDUAL PROJECT TAB VIEW --- */}
                {tabs.map(tab => tab.project && tab.id === activeTab && (
                    <div key={tab.id} className="animate-in slide-in-from-bottom-2 fade-in duration-300 max-w-3xl text-neutral-300">
                        <div className="flex items-center gap-6 mb-8">
                            {/* Large Logo */}
                            <div className="w-24 h-24 shrink-0 bg-neutral-800 rounded-[25px] border border-neutral-700 flex items-center justify-center overflow-hidden relative shadow-lg">
                                {tab.project.image ? (
                                    <img src={tab.project.image} alt={tab.project.title} className="w-full h-full object-cover" />
                                ) : (
                                    <ImageIcon className="text-neutral-600" size={32} />
                                )}
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">{tab.project.title}</h2>
                                <div className="flex gap-2">
                                    {tab.project.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 bg-pink-500/20 text-pink-300 rounded border border-pink-500/30">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <p className="text-lg text-neutral-400 mb-8">{tab.project.description}</p>
                        
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