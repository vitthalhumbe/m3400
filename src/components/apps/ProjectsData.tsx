// export type Project = {
//   id: string
//   title: string
//   description: string
//   tech: string[]
//   status?: "Featured" | "Completed" | "In Progress"
// }

// export const projects: Project[] = [
//   {
//     id: "m3400",
//     title: "M3400 – Desktop OS Portfolio",
//     description: "Desktop OS–style portfolio with custom window manager.",
//     tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
//     status: "Featured",
//   },
//   {
//     id: "myalgo",
//     title: "M3402 – MyAlgo",
//     description: "Algorithms and ML implemented from scratch.",
//     tech: ["Python", "NumPy", "ML"],
//     status: "In Progress",
//   },
// ]


export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
  status?: "Featured" | "Completed" | "In Progress" | "Not started"
  image?: string  
  mediaUrl?: string   
  pdfDocUrl?: string  
}

export const m34Projects: Project[] = [
  {
    id: "m3400",
    title: "M3400 – Desktop OS Portfolio",
    description: "The Problem: Standard web portfolios are static, boring, and fail to demonstrate actual software engineering and state-management skills.\n\nThe Solution: A fully functional web-based operating system built from scratch, complete with a custom window manager, real-time clock, and simulated file system.\n\nKey Features:\n- Draggable, overlapping windows with Framer Motion.\n- Complex Z-index management and focus-state tracking.\n- Responsive custom dock and glassmorphism UI.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/vitthalhumbe/portfolio",
    live: "https://vitthalhumbe.me",
    status: "Completed",
    image: "https://placehold.co/400x400/171717/ffffff?text=OS",
    mediaUrl: "/outputs/m3400-demo.gif", 
    pdfDocUrl: "/docs/m3400-architecture.pdf" 
  },
  {
    id: "m3401",
    title: "M3401 – Personal Finance Tracker",
    description: "The Problem: Most finance tracking apps are cluttered with unnecessary features and lack customizable categorizations for college students.\n\nThe Solution: A secure, full-stack web application designed for rapid daily expense logging and visual financial health monitoring.\n\nKey Features:\n- Secure REST API with JWT authentication.\n- Interactive data visualization for monthly expense breakdowns.\n- MongoDB aggregation pipelines for fast analytical querying.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/vitthalhumbe/finance-tracker",
    status: "Completed",
    image: "https://placehold.co/400x400/0ea5e9/ffffff?text=FIN",
    mediaUrl: "/outputs/m3401-dashboard.png",
    pdfDocUrl: "/docs/m3401-database-schema.pdf"
  },
  {
    id: "m3404",
    title: "M3404 – TLDR (AI Summarizer)",
    description: "The Problem: Processing lengthy academic documents and long lecture videos takes hours of manual review.\n\nThe Solution: An AI-powered web tool utilizing Retrieval-Augmented Generation (RAG) to instantly extract key bullet points and summaries from vast amounts of text.\n\nKey Features:\n- FastAPI backend handling asynchronous LLM requests to prevent UI blocking.\n- Next.js frontend with real-time streaming text responses.\n- PDF document parsing and text chunking pipeline.",
    tech: ["Next.js", "Python", "FastAPI", "LLMs"],
    github: "https://github.com/vitthalhumbe/tldr",
    status: "In Progress",
    image: "https://placehold.co/400x400/8b5cf6/ffffff?text=AI",
    mediaUrl: "/outputs/m3404-rag-demo.gif",
    pdfDocUrl: "/docs/m3404-rag-pipeline.pdf"
  },
  {
    id: "m3402",
    title: "M3402 – MyAlgo Engine",
    description: "The Problem: Relying solely on high-level machine learning libraries abstracts away the core mathematical mechanics of how models actually learn.\n\nThe Solution: A custom machine learning engine built entirely from scratch without external ML frameworks to master under-the-hood algorithms.\n\nKey Features:\n- High-performance C++ backend for matrix operations and calculations.\n- Intuitive Python frontend interface for model configuration.\n- Custom implementations of foundational ML algorithms.",
    tech: ["Python", "C++", "NumPy"],
    github: "https://github.com/vitthalhumbe/myalgo",
    status: "Featured",
    image: "https://placehold.co/400x400/f59e0b/ffffff?text=ML",
    mediaUrl: "/outputs/m3402-engine.png",
    pdfDocUrl: "/docs/m3402-math-whitepaper.pdf"
  }
]
export const spProjects: Project[] = [
  {
    id: "SP-012",
    title: "Currency Convertor GUI",
    description: "The simple java Swing GUI application for Currency Conversion, Available currencies are (Yen, Ruppes, Euro, Dollar)",
    tech: ["Java", "Swing"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=Currency" 
  },
  {
    id: "SP-011",
    title: "Bank Management System",
    description: "The simple java Swing GUI application for Bank management system ",
    tech: ["Java", "Swing", "MySQL"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=BMS" 
  },
  {
    id: "SP-010",
    title: "Currency Convertor",
    description: " A simple Java standalone app, CLI app to convert the currencies",
    tech: ["Java"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=Currency" 
  },
  {
    id: "SP-009",
    title: "Student Management System",
    description: " A simple Java Swing application for managing student records. Includes features for creating, updating, and deleting student information with a user-friendly interface.Resources ",
    tech: ["Java", "Swing"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=SMS" 
  },
  {
    id: "SP-008",
    title: "Student Average Calculator GUI",
    description: "Java AWT GUI project on GitHub: Student Average Calculator with a user-friendly interface for inputting marks, accompanied by submission and clearing options. Ideal for educational references and learning AWT concepts in Java. ",
    tech: ["Java", "AWT"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=AVG" 
  },
  {
    id: "SP-007",
    title: "Word Counter",
    description: "WordCounter is a Java utility that efficiently calculates word and character counts in user-inputted strings, providing a handy tool for text analysis and processing tasks. ",
    tech: ["Java"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=Counter" 
  },
  {
    id: "SP-006",
    title: "Library Management System",
    description: "Python-based Library Management System implemented using the Tkinter GUI toolkit and SQLite for database management. Users can add books and members, search for books, view statistics, and lend books to members. ",
    tech: ["Python", "Tkinter", "SQLite"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=LMS" 
  },
  {
    id: "SP-005",
    title: "Hospital Management System",
    description: "Built in Python, Hospital Management System using Tkinter and MySQL for tracking patient information and prescriptions.",
    tech: ["Python", "Tkinter", "MySQL"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=HMS" 
  },
  {
    id: "SP-004",
    title: "LinkedList to Tree Conversion",
    description: "It was college course mini-project, I sprint coded this project in 2-3 days.",
    tech: ["Python"],
    status: "Completed",
    image: "https://placehold.co/400x400/6366f1/ffffff?text=DSA" 
  },
  {
    id: "SP-003",
    title: "Tic Tac Toe",
    description: "Simple yet difficult to design the GUI for me, (2022)",
    tech: ["Python", "Tkinter"],
    status: "Completed",
    image: "https://placehold.co/400x400/6366f1/ffffff?text=TicTac" 
  },
  {
    id: "SP-002",
    title: "To Do List",
    description: "Built in Python, with Tkinter module, I Built To Do List GUI. In this Project I have used the MySQL database. (Runs only in LocalHost)",
    tech: ["Python", "Tkinter", "MySQL"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=ToDo" 
  },
  {
    id: "SP-001",
    title: "Calculator GUI",
    description: "Built in Python, with Tkinter module, I Built Calculator GUI. It was my first GUI app built",
    tech: ["Python", "Tkinter"],
    status: "Completed",
    image: "https://placehold.co/400x400/10b981/ffffff?text=Calc" 
  },
  
]