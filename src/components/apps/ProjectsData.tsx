

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
    description: "Standard portfolios are boring. When it came time to showcase my work, I wanted recruiters to actually experience my software engineering skills, not just read a bulleted list. So, I built a web-based Operating System from scratch. \n\nUnder the hood, it’s powered by Next.js, TypeScript, and Tailwind, with Framer Motion handling the physics. But on the surface, it functions like a real desktop. I engineered a custom window manager with complex Z-index tracking, a smooth macOS-style dock, and native-feeling applications. You can open up my 'Credentials' app to see my education, open the 'Mission 34' terminal to read my project docs, or check out my 'Hobbies' in a sleek bento-box widget. It was a massive challenge in state management, but the result is a digital space that truly feels like mine.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/vitthalhumbe/m3400",
    live: "https://vitthalhumbe.me",
    status: "Completed",
    mediaUrl: "./images/m3400.png"
  },
  {
    id: "m3401",
    title: "M3401 – Crew",
    description: "Crew is a Flutter-based mobile productivity app designed to bridge the gap between formal task managers and informal study groups. It allows users to form 'crews' to tackle shared goals together. Whether it's a tight-knit private group of five students grinding through Data Structures and Algorithms, or a massive public community of up to 500 people practicing English fluency, Crew keeps everyone aligned and accountable.\n\nThe app operates on a simple Captain and Member dynamic. The Captain sets the agenda via a high-visibility Notice Board and assigns specific, actionable tasks—complete with descriptions, tips, and links—to the entire group at once. Members receive notifications, complete the tasks, and log their estimated time, eliminating the chaos of traditional group chats.\n\nTo keep motivation high, Crew gamifies the experience with a real-time leaderboard and individual progress bars, making it easy to see who is leading the pack.Additionally, the app tracks a global 'streak' for each user based on the days they complete tasks across all their active crews, rewarding daily consistency and momentum.",
    tech: ["Flutter", "Dart", "Firebase"],
    github: "https://github.com/vitthalhumbe/Crew",
    live: "https://github.com/vitthalhumbe/Crew/releases/tag/app",
    status: "Completed",
    mediaUrl: "/images/m3401.png",
  },
  {
    id: "m3402",
    title: "M3402 – MyAlgo",
    description: "It is a systems-oriented machine learning project that focuses on implementing **Linear Regression and Artificial Neural Networks (ANN) completely from scratch**, without relying on high-level ML libraries. The core idea of the project is to combine the **usability of Python** with the **performance of C++** by designing a hybrid architecture where Python acts as the user-facing interface and orchestration layer, while computationally intensive operations—such as matrix calculations, gradient descent, forward propagation, and backpropagation—are executed in C++. This design mirrors how real-world ML frameworks operate internally and demonstrates an understanding of both machine learning fundamentals and low-level system optimization.\n\nThe project exposes clean, Python-friendly APIs (for example, `fit()` and `predict()` methods) that internally delegate heavy numerical computation to a C++ backend, ensuring improved execution speed compared to pure Python implementations. By avoiding external ML frameworks and implementing the algorithms manually, the project emphasizes **conceptual clarity, mathematical correctness, and performance awareness**. Overall, MyAlgo serves as a learning-driven yet industry-inspired project that showcases skills in machine learning theory, Python–C++ interoperability, software architecture, and efficient algorithm implementation, making it a strong and distinctive contribution under **Mission 34**.",
    tech: ["C++", "Python"],
    github: "https://github.com/vitthalhumbe/MyAlgo",
    status: "Completed",
    image: "https://placehold.co/400x400/8b5cf6/ffffff?text=AI",
    mediaUrl: "/images/m3402.png",
    pdfDocUrl: "/documents/MyAlgo.pdf"
  },
  {
    id: "m3403",
    title: "M3403 – FishPond",
    description: "Fish Pond is an interactive artificial life simulation that explores the concepts of evolution and 'survival of the fittest'. In this digital ecosystem, a group of prey (fish) must survive being hunted by a predator (a shark). Initially, the fish behave chaotically and are easily caught. However, the simulation mimics natural selection: the fish that survive the longest pass their digital 'DNA' down to the next generation. Over time, without being explicitly programmed to do so, you can watch the population evolve entirely on its own. The fish progressively learn to group together into coordinated schools and master complex evasive maneuvers to outsmart the shark, beautifully demonstrating how highly intelligent group behaviors can emerge naturally over time.",
    tech: ["Python", "C++", "NumPy"],
    github: "https://github.com/vitthalhumbe/fishpond",
    status: "Completed",
    image: "https://placehold.co/400x400/f59e0b/ffffff?text=ML",
    mediaUrl: "/images/m3403.gif",
    pdfDocUrl: "/documents/FishPond.pdf"
  },
  {
    id: "m3404",
    title: "M3404 – TLDR",
    description: "TLDR is an AI-powered study companion designed to turn passive reading into active learning. When showcasing a project in a developer portfolio, it is highly recommended to clearly state the problem you are solving and the core technologies used. For this project, the goal was to help students actually retain information rather than just skimming long PDFs or YouTube lectures. Users can upload their study materials, and the application automatically breaks them down into clear summaries, customizable flashcards, and interactive quizzes. It also features a built-in AI tutor that understands the specific uploaded documents, allowing users to ask direct questions or conduct mock interviews to ensure they are fully prepared for their exams.",
    tech: ["Python", "RAG", "FastAPI", "LLMs", "React.js"],
    status: "In Progress"
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
    title: "Personal Finance Tracker",
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