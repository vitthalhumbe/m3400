"use client"

import type { AppID } from "@/types/window"
import { motion } from "framer-motion"

type DockProps = {
    onOpen: (id: AppID) => void
}

const apps: { id: AppID; label: string }[] = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "mission34", label: "Mission34" },
    { id: "contact", label: "Contact" },
]

export default function Dock({ onOpen }: DockProps) {
    return (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 bg-neutral-800 px-6 py-3 rounded-2xl">
            {apps.map(app => (
                <motion.button
                    key={app.id}
                    onClick={() => onOpen(app.id)}
                    whileHover={{ scale: 1.3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-3 py-2 bg-neutral-700 rounded-lg hover:bg-neutral-600"
                >
                    {app.label}
                </motion.button>

            ))}
        </div>
    )
}
