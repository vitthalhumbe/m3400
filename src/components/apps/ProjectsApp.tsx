"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Tabs from "@/components/windows/Tabs"
import { projects, Project } from "./ProjectsData"

type TabState = {
    id: string
    label: string
    closable?: boolean
    project?: Project
}

export default function ProjectsApp() {
    const [tabs, setTabs] = useState<TabState[]>([
        { id: "home", label: "Home" },
    ])
    const [activeTab, setActiveTab] = useState("home")
    const [focusedProjectId, setFocusedProjectId] = useState<string | null>(null)

    const openProjectTab = (project: Project) => {
        setTabs(prev => {
            const exists = prev.find(t => t.id === project.id)
            if (exists) {
                setActiveTab(project.id)
                return prev
            }

            return [
                ...prev,
                {
                    id: project.id,
                    label: project.title,
                    closable: true,
                    project,
                },
            ]
        })
        setActiveTab(project.id)
    }

    const closeTab = (id: string) => {
        setTabs(prev => prev.filter(t => t.id !== id))
        setActiveTab("home")
    }

    return (
        <div className="h-full flex flex-col">
            <Tabs
                tabs={tabs}
                activeTab={activeTab}
                onChange={setActiveTab}
                onClose={closeTab}
            />

            <div className="flex-1 overflow-auto p-4 text-sm text-neutral-300">
                {activeTab === "home" && (
                    <div className="grid grid-cols-2 gap-4">
                        {projects.map(project => (
                            <motion.div
                                key={project.id}
                                onClick={() => {
                                    setFocusedProjectId(project.id)
                                    openProjectTab(project)
                                }}
                                animate={
                                    focusedProjectId === project.id
                                        ? { scale: 0.97 }
                                        : { scale: 1 }
                                }
                                whileHover={{ y: -4, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="cursor-pointer rounded-xl border border-neutral-700 p-4 bg-neutral-900 hover:bg-neutral-800"
                            >


                                <h3 className="font-semibold text-white">
                                    {project.title}
                                </h3>

                                <p className="text-neutral-400 mt-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-3">
                                    {project.tech.map(t => (
                                        <span
                                            key={t}
                                            className="text-xs px-2 py-1 bg-neutral-700 rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {project.status && (
                                    <div className="mt-2 text-xs text-blue-400">
                                        {project.status}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                )}

                {tabs.map(
                    tab =>
                        tab.project &&
                        tab.id === activeTab && (
                            <div key={tab.id} className="space-y-4">
                                <h2 className="text-lg font-semibold text-white">
                                    {tab.project.title}
                                </h2>

                                <p>{tab.project.description}</p>

                                <div>
                                    <strong>Tech:</strong>{" "}
                                    {tab.project.tech.join(", ")}
                                </div>

                                <p>
                                    Detailed explanation, architecture, learnings, and links go here.
                                </p>
                            </div>
                        )
                )}
            </div>
        </div>
    )
}
