"use client"

import { motion } from "framer-motion"
import { edu } from "./AboutEducationData"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

export default function AboutEducation() {
    return (
        <div className="h-full w-full p-8 overflow-auto">
            <div className="max-w-4xl mx-auto space-y-6">
                
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white tracking-tight">Academic Credentials</h2>
                    <p className="text-neutral-400 mt-1">Formal education and institutional training.</p>
                </div>

                {edu.map((education, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-6 hover:bg-neutral-800 transition-colors shadow-lg"
                    >
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-violet-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity" />

                        <div className="flex flex-col md:flex-row gap-6 md:items-start">
                            <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-700 shrink-0">
                                <GraduationCap size={32} className="text-violet-400" />
                            </div>

                            <div className="flex-1 space-y-3">
                                <div>
                                    <h3 className="font-bold text-white text-2xl tracking-tight">
                                        {education.title}
                                    </h3>
                                    <p className="text-violet-300 font-medium text-lg mt-1">
                                        {education.field}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4 border-t border-neutral-700/50">
                                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                                        <MapPin size={16} className="text-neutral-500 shrink-0"/>
                                        <span className="truncate">{education.institute}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-neutral-400 text-sm">
                                        <Calendar size={16} className="text-neutral-500 shrink-0"/>
                                        <span>{education.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-neutral-400 text-sm md:col-span-2">
                                        <Award size={16} className="text-green-400 shrink-0"/>
                                        <span className="text-green-400 font-mono">{education.grade}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}