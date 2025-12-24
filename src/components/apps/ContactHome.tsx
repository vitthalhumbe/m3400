"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Instagram } from "lucide-react"

const contacts = [
  {
    label: "vitthal.3454@gmail.com",
    icon: Mail,
    href: "mailto:vitthal.3454@gmail.com",
  },
  {
    label: "LinkedIn (VitthalHumbe)",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/vitthalhumbe",
  },
  {
    label: "GitHub (vitthalhumbe)",
    icon: Github,
    href: "https://github.com/vitthalhumbe",
  },
  {
    label: "Instagram (vitthal_humbe34)",
    icon: Instagram,
    href: "https://instagram.com/vitthal_humbe34",
  },
]

export default function ContactHome() {
  return (
    <div className="flex h-full w-full items-center justify-around px-[10%] py-[20%]">
      
      {/* LEFT CONTENT */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-semibold leading-tight text-white">
          Want to get in touch with me or just want to say hello?
        </h1>

        <div className="mt-10 flex flex-col gap-4">
          {contacts.map(item => {
            const Icon = item.icon
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 rounded-lg bg-neutral-900 px-5 py-4 text-neutral-200"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-700">
                  <Icon size={18} />
                </div>
                <span className="text-sm font-medium">
                  {item.label}
                </span>
              </motion.a>
            )
          })}
        </div>
      </div>

      {/* RIGHT ILLUSTRATION */}
      <div className="pointer-events-none">
        <img
          src="/contact-illustration.png"
          alt="Contact illustration"
          className="max-h-[420px] object-contain"
        />
      </div>

    </div>
  )
}
