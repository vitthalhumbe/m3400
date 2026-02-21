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
    id: "SP-030",
    title: "Fashion MNIST CNN over WEB",
    description: "To try out the FastAPI, I have built this website. It's a API created for CNN trained in PyTorch.",
    tech: ["Python", "PyTorch", "FastAPI"],
    status: "Completed",
    image: "./icons/30.jpg" 
  },
  {
    id: "SP-029",
    title: "UwU Commentor",
    description: "Discalemer : it just for FUN. It is a VSCode extension that converts our boring commands to the ANIME-GIRL stlyed comments.",
    tech: ["TypeScript"],
    status: "Completed",
    image: "./icons/29.jpg" 
  },
  {
    id: "SP-024",
    title: "N-Queen Solver",
    description: "To understand the GENETIC Algorithm, I solved this N-Queen problem using this algorithm. Basic, but has visualization to provide insight that it is actually optimizing the solution in each generation.",
    tech: ["Python", "Matplotlib"],
    status: "Completed",
    image: "./icons/24.jpg" 
  },
  {
    id: "SP-023",
    title: "Snake Game + A*",
    description: "it's not just a Snake game I built. It has auto play mode, which uses the A* algorithm to determine the path to the target(food). We also can play this game using ASWD keys.",
    tech: ["Python", "PyGame"],
    status: "Completed",
    image: "./icons/23.jpg" 
  },
  {
    id: "SP-022",
    title: "Personal Fianance Tracker",
    description: "It is one of the beautiful UI I designed. It is a simple transaction storage, bank management, and other tools such as lending and borrowing money kathabook. It is built using MERN stack.",
    tech: ["MongoDB", "React.js", "Express.js", "Node.js"],
    status: "Completed",
    image: "./icons/22.jpg" 
  },
  {
    id: "SP-021",
    title: "Physics Simulation",
    description: "I have decided to simulate physics, but not have decided what to implemented like fluid, gravity,etc.",
    tech: ["Yet to be decided"],
    status: "Not started",
    image: "./icons/21.jpg" 
  },
  {
    id: "SP-020",
    title: "URL shortner",
    description: "Simple concept but lengthy project to do. when you have the long URL, you can use this tool to shorten it! just paste your long link on website click 'convert' button and it will give you shortened link mapped directly to your long url. It uses MONGODB to store the long URL and assinges it to the random string of length of 6. and givens back the https://domain.com/<your-shorthen code>.",
    tech: ["Node.js", "Express.js", "MongoDB"],
    status: "Completed",
    image: "./icons/20.jpg" 
  },
  {
    id: "SP-019",
    title: "File Conversion Tool",
    description: "Simple CSV to JSON conversion, I did it becuase I wanted to learn the file handling using Multer",
    tech: ["Node.js", "Express.js", "Multer"],
    status: "Completed",
    image: "./icons/19.jpg" 
  },
  {
    id: "SP-018",
    title: "Resources",
    description: "It is in planning stage. I want to have the website where all the resources related to learning CSE, AIML, and other things all at in front of us once.",
    tech: ["Yet to be decided"],
    status: "Not started",
    image: "./icons/18.jpg" 
  },
  {
    id: "SP-017",
    title: "E-waste Hub",
    description: "It is a first Full stack website I have built. It is a central hub provided to the e-waste collector and disposers. we can list our unused electronic gadgets here, collectors make call with us and then collector collects form us.",
    tech: ["Node.js", "React.js","Express.js", "MongoDB", "Cloudinary"],
    status: "Completed",
    image: "./icons/17.jpg" 
  },
  {
    id: "SP-016",
    title: "College Website",
    description: "As a suggestion for our mini-project under course 'Client-Side scripting' course, I were assigned to build college website (static) using HTML, CSS, and JavaScript",
    tech: ["JavaScript"],
    status: "Completed",
    image: "./icons/16.jpg" 
  },
  {
    id: "SP-015",
    title: "Weather Website",
    description: "Simple API call is being established to fetch the weather data, and is represented in simple HTML, CSS and JS.",
    tech: ["JavaScript"],
    status: "Completed",
    image: "./icons/15.jpg" 
  },
  {
    id: "SP-014",
    title: "Calendar",
    description: "It simply is JS calendar, nothing special about it",
    tech: ["JavaScript"],
    status: "Completed",
    image: "./icons/14.jpg" 
  },
  {
    id: "SP-013",
    title: "Email Subscribing",
    description: "It simply creates automatic response to the emails which are being subscribed using API call",
    tech: ["JavaScript"],
    status: "Completed",
    image: "./icons/13.jpg" 
  },
  {
    id: "SP-012",
    title: "Currency Convertor GUI",
    description: "The simple java Swing GUI application for Currency Conversion, Available currencies are (Yen, Ruppes, Euro, Dollar)",
    tech: ["Java", "Swing"],
    status: "Completed",
    image: "./icons/12.jpg" 
  },
  {
    id: "SP-011",
    title: "Bank Management System",
    description: "The simple java Swing GUI application for Bank management system ",
    tech: ["Java", "Swing", "MySQL"],
    status: "Completed",
    image: "./icons/11.jpg" 
  },
  {
    id: "SP-010",
    title: "Currency Convertor",
    description: " A simple Java standalone app, CLI app to convert the currencies",
    tech: ["Java"],
    status: "Completed",
    image: "./icons/10.jpg" 
  },
  {
    id: "SP-009",
    title: "Student Management System",
    description: " A simple Java Swing application for managing student records. Includes features for creating, updating, and deleting student information with a user-friendly interface.Resources ",
    tech: ["Java", "Swing"],
    status: "Completed",
    image: "./icons/9.jpg " 
  },
  {
    id: "SP-008",
    title: "Student Average Calculator GUI",
    description: "Java AWT GUI project on GitHub: Student Average Calculator with a user-friendly interface for inputting marks, accompanied by submission and clearing options. Ideal for educational references and learning AWT concepts in Java. ",
    tech: ["Java", "AWT"],
    status: "Completed",
    image: "./icons/8.jpg" 
  },
  {
    id: "SP-007",
    title: "Word Counter",
    description: "WordCounter is a Java utility that efficiently calculates word and character counts in user-inputted strings, providing a handy tool for text analysis and processing tasks. ",
    tech: ["Java"],
    status: "Completed",
    image: "./icons/7.jpg" 
  },
  {
    id: "SP-006",
    title: "Library Management System",
    description: "Python-based Library Management System implemented using the Tkinter GUI toolkit and SQLite for database management. Users can add books and members, search for books, view statistics, and lend books to members. ",
    tech: ["Python", "Tkinter", "SQLite"],
    status: "Completed",
    image: "./icons/6.jpg" 
  },
  {
    id: "SP-005",
    title: "Hospital Management System",
    description: "Built in Python, Hospital Management System using Tkinter and MySQL for tracking patient information and prescriptions.",
    tech: ["Python", "Tkinter", "MySQL"],
    status: "Completed",
    image: "./icons/5.jpg" 
  },
  {
    id: "SP-004",
    title: "LinkedList to Tree Conversion",
    description: "It was college course mini-project, I sprint coded this project in 2-3 days.",
    tech: ["Python"],
    status: "Completed",
    image: "./icons/4.jpg" 
  },
  {
    id: "SP-003",
    title: "Tic Tac Toe",
    description: "Simple yet difficult to design the GUI for me, (2022)",
    tech: ["Python", "Tkinter"],
    status: "Completed",
    image: "./icons/3.jpg" 
  },
  {
    id: "SP-002",
    title: "To Do List",
    description: "Built in Python, with Tkinter module, I Built To Do List GUI. In this Project I have used the MySQL database. (Runs only in LocalHost)",
    tech: ["Python", "Tkinter", "MySQL"],
    status: "Completed",
    image: "./icons/2.jpg" 
  },
  {
    id: "SP-001",
    title: "Calculator GUI",
    description: "Built in Python, with Tkinter module, I Built Calculator GUI. It was my first GUI app built",
    tech: ["Python", "Tkinter"],
    status: "Completed",
    image: "./icons/1.jpg" 
  },
  
]