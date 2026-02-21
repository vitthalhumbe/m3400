"use client"

import { useState } from "react"
import { Sparkles , BookOpen, TrendingUp, Hammer} from "lucide-react"

const sections = [
    {
        id: "curiosity",
        title: "Curiosity",
        icon: Sparkles,
        content: `When I was in my 10th class I was addicted to the mobile game called “Free Fire”, any time you can find me playing this game. One day the spark of curiosity triggered inside me and I asked the question “How were these games made ?”. I searched it on Google and I discovered a new term in my life - “Computer Programming” ! After I researched it more deeply I discovered new things such as “Programming Languages”, “C++”, “Computer Aided Designs”, and so on. These were just buzz words for me at that time. Then I came across a youtube video with the title “Learn C++ under 1 hour”, and I clicked on it… again discovered new things such as “Syntax”, “Algorithm”, “Data”, etc. I completed that video on my phone, and thought “These things are tough, but crazy enough to satisfy my curious mind”. 
Time passed and My 10th board exams were over, now I had to choose one career path. I researched game development, software engineering and all other things that came to mind. Then I learned that I have to do either of these things - 12+B.tech, 12+BCA, or Diploma+B.tech… what did I chose ? yes Diploma + B.tech because I don’t want to waste my time on some physics and chemistry stuff. Unfortunately or maybe luckily I got admission in AIML department of NIT, kolhapur rather than CSE. and from that admission day my long learning journey begins….

    `,
    },
    {
        id: "learning",
        title: "Learning",
        icon: BookOpen,
        content: `I started with the Python language, but got bored in 3 months because it was too easy. I started web designing using HTML and CSS, yes that basic static website designs 1st year students builds, these things were also built by me. Web development is the most interesting domain I have ever learned. Although these were not in our syllabus in the first semester, I learned it anyway from Youtube. My rule was clear “Don’t be dependent on anyone for learning, go search and grab the required knowledge”. After a very long exam period I stopped web designing, and shifted my focus to core programming in C language. Here things got crazy and I came to know about a lot more basics and deep computer system knowledge.  After scratching my head for 6 months I stopped learning C language and with that first year was over.

In the two month break between 1st and 2nd year I didn’t stop learning - in this period, I started web designing again but with tailwind and bootstrap. Learned about Object oriented programming and GUI building in Python. The Tkinter library was too interesting, therefore I did almost 10 projects in Tkinter. At this point, the third semester had ended and I had some knowledge about DSA, web designing, Python and C.  Guess what I did next ? Yes, you guessed it right, I left everything as it is and picked “JAVA”, a new language, and a new semester. Java got my mental health crashed more than any past things I learned, it was tough, really. Time passed, and I broke up with Java, goodbye java. Now I am interested in Dynamic web designing, so I learned Javascript in depth in 20 days. Then I got to know about React.js framework and started learning that also. Thus the  2nd year was completed.
`,
    },
    {
        id: "improvement",
        title: "Improvement",
        icon: TrendingUp,
        content: `
Third year of college begins, and I get a solid slap of reality check that “I was learning in different domains, but not in depth”, and this is the problem I didn’t learn anything way deeper. So I changed my learning strategies and started to improve. I picked one domain "Machine Learning” and took 3 books, 1 online certification course, 4 youtube playlists and learned everything they had to offer in fundamentals. I went from what is learning to how LSTMs works. Along with this, I got a “full stack web development” certificate from IBM skillbuild portal. In that course I learned many things including database connections to web, node, react, express, mongodb, and php. Alongside, in college I went deeper in one particular subject named “Cloud Computing” with 3 reference books and multiple youtube playlists. I took a major project of Diploma under Machine Learning Domain and learned “Deep Learning” in sixth semester. 
Thus I completed UG DIPLOMA in AIML with 96% along with my personal skill development.

    `,
    },
    {
        id: "building",
        title: "Building",
        icon: Hammer,
        content: `
After all struggles related to college admission I went from, I was admitted in PCCOE, pune. Now at this moment, I got a reality check again, “I didn’t do real projects yet”, all projects are completely repeated ideas. So I think…think…and think… Then I got another reality check that said “I don’t have problem solving skills under DSA yet”. This feels personal, because in the focused work on development I forgot to do DSA. Therefore, here I am, not with empty hands but with the Strategic plan of “Mission34” and “Vission FAANG”. I am now learning DSA concepts in depth along with building unique projects under mission34… 

    `,
    },
]
export default function AboutStory() {
    const [activeSection, setActiveSection] = useState("curiosity")
    const current = sections.find(s => s.id === activeSection)
    const Icon = current?.icon

    return (
        <div className="flex h-full w-full bg-neutral-900/30">
            <div className="w-64 shrink-0 px-4 py-6 border-r border-neutral-700/50 bg-neutral-900/50">
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4 px-3">System Logs</div>
                <div className="flex flex-col gap-1">
                    {sections.map(section => {
                        const SectionIcon = section.icon;
                        const isActive = activeSection === section.id;
                        return (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg transition-all text-sm font-medium ${
                                    isActive
                                        ? "bg-violet-500/20 text-violet-300"
                                        : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200"
                                }`}
                            >
                                <SectionIcon size={16} className={isActive ? "text-violet-400" : "text-neutral-500"} />
                                {section.title}
                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="flex-1 overflow-y-auto px-10 py-10 bg-[#1e1e1e]">
                <div className="max-w-3xl mx-auto">
                    <div className="flex items-center gap-4 mb-8 border-b border-neutral-700/50 pb-6">
                        {Icon && <div className="p-3 bg-neutral-800 rounded-xl border border-neutral-700 shadow-sm"><Icon size={28} className="text-white"/></div>}
                        <h2 className="text-4xl font-bold text-white tracking-tight">
                            {current?.title}
                        </h2>
                    </div>


                    <div className="prose prose-invert max-w-none">
                        <p className="whitespace-pre-line text-lg leading-loose text-neutral-300">
                            {current?.content}
                        </p>
                    </div>

                    {current?.title === "Building" && (
                        <div className="mt-12 p-6 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center gap-4">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                            </span>
                            <p className="text-xl font-mono text-violet-400">
                                To Be Continued...
                            </p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}