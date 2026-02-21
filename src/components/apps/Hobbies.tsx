"use client"

import { motion } from "framer-motion"
import { 
  Pencil, 
  Palette, 
  Music, 
  Feather, 
  Box, 
  Library, 
  Crown 
} from "lucide-react"

// Hobby Data Array
const hobbies = [
  {
    id: "sketching",
    title: "Sketching",
    description: "Graphite on paper. I love bringing ideas to life, especially through detailed pencil sketches and anime-style character art.",
    icon: Pencil,
    color: "text-neutral-400",
    bgColor: "bg-neutral-500/10",
    colSpan: "col-span-1 md:col-span-2", // Makes this card wider in the bento grid
  },
  {
    id: "reading",
    title: "Reading",
    description: "Absorbing knowledge from self-help and philosophy books like Ikigai and the Bhagavad Gita.",
    icon: Library,
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    colSpan: "col-span-1",
  },
  {
    id: "writing",
    title: "Creative Writing",
    description: "World-building and drafting fantasy novel concepts that blend deep philosophy with epic storytelling.",
    icon: Feather,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    colSpan: "col-span-1",
  },
  {
    id: "flute",
    title: "Flute",
    description: "Currently on a musical journey, learning to play the flute and master breath control in my daily schedule.",
    icon: Music,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    id: "cube",
    title: "Rubik's Cube",
    description: "Algorithm recognition and speed-solving. A tactile puzzle that keeps my problem-solving skills sharp offline.",
    icon: Box,
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    colSpan: "col-span-1",
  },
  {
    id: "painting",
    title: "Painting",
    description: "Experimenting with colors, blending techniques, and translating imagination onto canvas.",
    icon: Palette,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    colSpan: "col-span-1",
  },
  {
    id: "chess",
    title: "Chess",
    description: "Tactical foresight, pattern recognition, and strategic planning on the 64 squares.",
    icon: Crown,
    color: "text-yellow-100",
    bgColor: "bg-neutral-100/10",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
  },
]

export default function Hobbies() {
  return (
    <div className="h-full flex flex-col p-6 overflow-auto bg-neutral-900/50">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white tracking-tight">Beyond the Screen</h2>
        <p className="text-neutral-400 text-sm mt-2 max-w-xl leading-relaxed">
          When I am not writing code or building systems, I spend my time exploring creativity, strategy, and continuous learning through these offline pursuits.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
        {hobbies.map((hobby, index) => {
          const Icon = hobby.icon
          return (
            <motion.div
              key={hobby.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-700/50 bg-neutral-800/40 p-6 hover:bg-neutral-800 transition-colors ${hobby.colSpan}`}
            >
              <div className={`absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${hobby.bgColor}`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl ${hobby.bgColor} ${hobby.color} border border-white/5`}>
                    <Icon size={24} />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-neutral-200 transition-colors">
                    {hobby.title}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {hobby.description}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
      
    </div>
  )
}