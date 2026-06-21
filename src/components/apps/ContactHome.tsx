"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react"

// Split the labels into platform and handle for a cleaner, two-line card layout
const contacts = [
  {
    platform: "Email",
    handle: "vitthal.3454@gmail.com",
    icon: Mail,
    href: "mailto:vitthal.3454@gmail.com",
  },
  {
    platform: "LinkedIn",
    handle: "VitthalHumbe",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vitthalhumbe",
  },
  {
    platform: "GitHub",
    handle: "vitthalhumbe",
    icon: Github,
    href: "https://github.com/vitthalhumbe",
  },
  {
    platform: "Instagram",
    handle: "vitthal_humbe34",
    icon: Instagram,
    href: "https://instagram.com/vitthal_humbe34",
  },
]

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 300, damping: 24 } 
  },
}

export default function ContactHome() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-y-auto bg-[#0a0a0a] px-6 py-12 md:px-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex w-full max-w-4xl flex-col items-center space-y-12 md:space-y-16"
      >
        {/* Centered Typography Header */}
        <motion.div variants={itemVariants} className="max-w-2xl text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Let's get in touch.
          </h1>
          <p className="text-lg text-neutral-400">
            Want to collaborate, discuss a project, or just want to say hello? My inbox is always open.
          </p>
        </motion.div>

        {/* 2x2 Grid of Contact Cards */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
          {contacts.map((item) => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.platform}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800/80 hover:shadow-xl hover:shadow-neutral-900/50"
              >
                {/* Icon Container with subtle glow on hover */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-800/80 text-neutral-400 transition-colors duration-300 group-hover:bg-blue-500/10 group-hover:text-blue-400">
                  <Icon size={22} strokeWidth={2} />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-wider text-neutral-500 uppercase transition-colors group-hover:text-neutral-400">
                    {item.platform}
                  </span>
                  <span className="text-sm font-medium text-neutral-200 transition-colors group-hover:text-white sm:text-base">
                    {item.handle}
                  </span>
                </div>

                {/* External Link Indicator (Arrow) */}
                <div className="absolute right-6 top-6 text-neutral-600 opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-neutral-400 group-hover:opacity-100">
                  <ArrowUpRight size={20} />
                </div>
              </motion.a>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}