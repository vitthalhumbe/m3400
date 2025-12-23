"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { edu, Education } from "./AboutEducationData"
export default function AboutEducation() {
    return (
        <div className="grid grid-cols-2 gap-4">
            {edu.map(Education => (
                <motion.div
                    className="rounded-xl border border-neutral-700 p-4 bg-neutral-900 hover:bg-neutral-800"
                >

                    <h1 className="font-bold text-white text-3xl">
                        {Education.title}
                    </h1> <br />

                    <p className="text-neutral-400 mt-1 text-lg">
                        {Education.field}
                    </p>

                    <p className="text-neutral-400 mt-1 text-lg ">
                        {Education.institute}
                    </p>

                    <p className="text-neutral-400 mt-1 text-lg">
                        {Education.time}
                    </p>

                                <p className="text-neutral-400 mt-1 text-lg" >
                                    {Education.grade}
                                </p>

                </motion.div>
            ))}
        </div>
    )
}
