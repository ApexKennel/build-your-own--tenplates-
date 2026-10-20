// Auto-generated from README.md - 358 tutorials across 31 categories
export interface Tutorial {
  id: string;
  category: string;
  rawLanguage: string;
  languages: string[];
  title: string;
  url: string;
  format: 'Article' | 'Video' | 'PDF / Book' | 'Repository' | 'Interactive';
  extra?: string;
}

export interface CategoryMeta {
  name: string;
  icon: string;
  color: string;
  description: string;
  level: string;
  tags: string[];
  count: number;
}

export const CATEGORIES_META: Record<string, CategoryMeta> = {
  "Distributed Systems": {
    "name": "Distributed Systems",
    "icon": "Network",
    "color": "from-blue-600 to-indigo-600",
    "description": "Build fault-tolerant, scalable networked services like Kafka and distributed logs.",
    "level": "Advanced",
    "tags": [
      "Kafka",
      "Consensus",
      "Networking",
      "Streaming"
    ],
    "count": 1
  },
  "3D Renderer": {
    "name": "3D Renderer",
    "icon": "Box",
    "color": "from-purple-600 to-pink-600",
    "description": "Master ray tracing, rasterization, shaders, and rendering 3D worlds from scratch.",
    "level": "Intermediate - Advanced",
    "tags": [
      "Ray Tracing",
      "OpenGL",
      "Rasterization",
      "Linear Algebra"
    ],
    "count": 11
  },
  "AI Model": {
    "name": "AI Model",
    "icon": "Brain",
    "color": "from-violet-600 to-purple-600",
    "description": "Train and infer LLMs, diffusion models, and RAG search pipelines without opaque libraries.",
    "level": "Intermediate - Advanced",
    "tags": [
      "LLMs",
      "Diffusion",
      "Transformers",
      "RAG"
    ],
    "count": 3
  },
  "Augmented Reality": {
    "name": "Augmented Reality",
    "icon": "Glasses",
    "color": "from-amber-600 to-orange-600",
    "description": "Computer vision tracking, spatial anchors, and AR overlay experiences.",
    "level": "Intermediate",
    "tags": [
      "ARKit",
      "ARCore",
      "OpenCV",
      "Unity"
    ],
    "count": 6
  },
  "BitTorrent Client": {
    "name": "BitTorrent Client",
    "icon": "Share2",
    "color": "from-cyan-600 to-blue-600",
    "description": "Peer-to-peer protocols, Bencode serialization, tracker handshakes, and chunk verification.",
    "level": "Intermediate",
    "tags": [
      "P2P",
      "Bencode",
      "Sockets",
      "BitTorrent"
    ],
    "count": 5
  },
  "Blockchain / Cryptocurrency": {
    "name": "Blockchain / Cryptocurrency",
    "icon": "Coins",
    "color": "from-yellow-600 to-amber-600",
    "description": "Cryptographic hashing, consensus algorithms, wallets, and proof-of-work/stake chains.",
    "level": "Intermediate",
    "tags": [
      "Cryptography",
      "PoW",
      "PoS",
      "Ledger",
      "Transactions"
    ],
    "count": 21
  },
  "Bot": {
    "name": "Bot",
    "icon": "Bot",
    "color": "from-emerald-600 to-teal-600",
    "description": "Automate interactions for Discord, Telegram, Reddit, Slack, and IRC.",
    "level": "Beginner - Intermediate",
    "tags": [
      "Discord",
      "Telegram",
      "Webhooks",
      "Slack"
    ],
    "count": 15
  },
  "Command-Line Tool": {
    "name": "Command-Line Tool",
    "icon": "Terminal",
    "color": "from-green-600 to-emerald-600",
    "description": "Craft fast, ergonomic CLI utilities, argument parsers, and terminal visuals.",
    "level": "Beginner",
    "tags": [
      "CLI",
      "Terminal",
      "POSIX",
      "Productivity"
    ],
    "count": 9
  },
  "Database": {
    "name": "Database",
    "icon": "Database",
    "color": "from-blue-600 to-cyan-600",
    "description": "B-Trees, page caches, SQL engines, write-ahead logs, and Redis-style key-value stores.",
    "level": "Intermediate - Advanced",
    "tags": [
      "B-Tree",
      "Redis",
      "SQL",
      "Storage Engine",
      "WAL"
    ],
    "count": 13
  },
  "Docker": {
    "name": "Docker",
    "icon": "Container",
    "color": "from-sky-600 to-blue-600",
    "description": "Linux namespaces, cgroups, chroot, and layered filesystems.",
    "level": "Advanced",
    "tags": [
      "Linux",
      "Namespaces",
      "Cgroups",
      "Containers"
    ],
    "count": 6
  },
  "Emulator / Virtual Machine": {
    "name": "Emulator / Virtual Machine",
    "icon": "Cpu",
    "color": "from-indigo-600 to-violet-600",
    "description": "CHIP-8, GameBoy, NES, and custom bytecode virtual machines.",
    "level": "Intermediate - Advanced",
    "tags": [
      "CHIP-8",
      "GameBoy",
      "NES",
      "Opcodes",
      "Assembly"
    ],
    "count": 13
  },
  "Front-end Framework / Library": {
    "name": "Front-end Framework / Library",
    "icon": "Layout",
    "color": "from-pink-600 to-rose-600",
    "description": "Virtual DOM reconciliation, state machines (Redux), JSX compilation, and reactive signals.",
    "level": "Beginner - Intermediate",
    "tags": [
      "React",
      "Virtual DOM",
      "Redux",
      "Reactivity",
      "JSX"
    ],
    "count": 14
  },
  "Game": {
    "name": "Game",
    "icon": "Gamepad2",
    "color": "from-rose-600 to-red-600",
    "description": "Game loops, physics collision, tilemaps, Roguelikes, Tetris, and retro 2D/3D engines.",
    "level": "Beginner - Intermediate",
    "tags": [
      "Game Loop",
      "Roguelike",
      "Tetris",
      "SDL",
      "Canvas"
    ],
    "count": 34
  },
  "Git": {
    "name": "Git",
    "icon": "GitBranch",
    "color": "from-orange-600 to-amber-600",
    "description": "Blob hashing, trees, commits, refs, index staging, and git object stores.",
    "level": "Intermediate",
    "tags": [
      "Content Addressable",
      "SHA-1",
      "Objects",
      "VCS"
    ],
    "count": 7
  },
  "Memory Allocator": {
    "name": "Memory Allocator",
    "icon": "Binary",
    "color": "from-amber-600 to-yellow-600",
    "description": "Understand how malloc, free, heap fragmentation, and slab allocators work.",
    "level": "Advanced",
    "tags": [
      "malloc",
      "Heap",
      "Virtual Memory",
      "Low Level"
    ],
    "count": 1
  },
  "Network Stack": {
    "name": "Network Stack",
    "icon": "Radio",
    "color": "from-teal-600 to-cyan-600",
    "description": "TCP/IP packet parsing, ARP, Ethernet frames, VPNs, and raw socket programming.",
    "level": "Advanced",
    "tags": [
      "TCP/IP",
      "Ethernet",
      "Packets",
      "Sockets"
    ],
    "count": 4
  },
  "Neural Network": {
    "name": "Neural Network",
    "icon": "Sparkles",
    "color": "from-purple-600 to-pink-600",
    "description": "Backpropagation, tensors, perceptrons, convolutional layers, and autograd engines.",
    "level": "Intermediate - Advanced",
    "tags": [
      "Autograd",
      "Backprop",
      "Tensors",
      "CNN",
      "Deep Learning"
    ],
    "count": 16
  },
  "Operating System": {
    "name": "Operating System",
    "icon": "HardDrive",
    "color": "from-slate-600 to-zinc-600",
    "description": "x86 bootloaders, kernel paging, interrupt tables, multitasking, and system calls.",
    "level": "Master",
    "tags": [
      "Kernel",
      "Bootloader",
      "Interrupts",
      "x86",
      "ARM"
    ],
    "count": 19
  },
  "Physics Engine": {
    "name": "Physics Engine",
    "icon": "Orbit",
    "color": "from-cyan-600 to-teal-600",
    "description": "Rigid body dynamics, verlet integration, spatial partitioning, and impulse resolution.",
    "level": "Intermediate - Advanced",
    "tags": [
      "Rigid Body",
      "Collision",
      "Verlet",
      "Impulses"
    ],
    "count": 7
  },
  "Processor": {
    "name": "Processor",
    "icon": "Microchip",
    "color": "from-indigo-600 to-blue-600",
    "description": "Verilog hardware design, RISC-V CPU cores, and FPGA synthesis.",
    "level": "Master",
    "tags": [
      "RISC-V",
      "Verilog",
      "FPGA",
      "ALU"
    ],
    "count": 1
  },
  "Programming Language": {
    "name": "Programming Language",
    "icon": "Code",
    "color": "from-violet-600 to-indigo-600",
    "description": "Lexers, parsers, ASTs, bytecode interpreters, and optimizing compilers.",
    "level": "Intermediate - Master",
    "tags": [
      "Lexer",
      "Parser",
      "AST",
      "Compiler",
      "Lisp",
      "Interpreter"
    ],
    "count": 41
  },
  "Regex Engine": {
    "name": "Regex Engine",
    "icon": "SearchCode",
    "color": "from-fuchsia-600 to-purple-600",
    "description": "Thompsons NFA construction, DFA simulation, backtracking, and regular derivatives.",
    "level": "Intermediate",
    "tags": [
      "NFA",
      "DFA",
      "Automata",
      "Parsing"
    ],
    "count": 9
  },
  "Search Engine": {
    "name": "Search Engine",
    "icon": "Search",
    "color": "from-blue-600 to-sky-600",
    "description": "Inverted indexes, vector space model, TF-IDF scoring, and crawlers.",
    "level": "Intermediate",
    "tags": [
      "Inverted Index",
      "TF-IDF",
      "Ranking",
      "Crawler"
    ],
    "count": 6
  },
  "Shell": {
    "name": "Shell",
    "icon": "SquareTerminal",
    "color": "from-emerald-600 to-green-600",
    "description": "Process forks, execvp, pipeline pipes, file redirection, and signal handling.",
    "level": "Beginner - Intermediate",
    "tags": [
      "fork",
      "exec",
      "Pipes",
      "Signals",
      "POSIX"
    ],
    "count": 7
  },
  "Template Engine": {
    "name": "Template Engine",
    "icon": "FileCode2",
    "color": "from-amber-600 to-orange-600",
    "description": "String interpolation, variable scopes, loop constructs, and template caching.",
    "level": "Beginner",
    "tags": [
      "Interpolation",
      "AST",
      "Compilation",
      "HTML"
    ],
    "count": 5
  },
  "Text Editor": {
    "name": "Text Editor",
    "icon": "FileEdit",
    "color": "from-teal-600 to-emerald-600",
    "description": "VT100 terminal escapes, gap buffers, piece tables, syntax highlighting, and Kilo clones.",
    "level": "Beginner - Intermediate",
    "tags": [
      "Kilo",
      "Terminal UI",
      "Gap Buffer",
      "Syntax Highlighting"
    ],
    "count": 6
  },
  "Visual Recognition System": {
    "name": "Visual Recognition System",
    "icon": "Eye",
    "color": "from-rose-600 to-pink-600",
    "description": "License plate readers, facial recognition pipelines, and computer vision classification.",
    "level": "Intermediate",
    "tags": [
      "OpenCV",
      "Face Detection",
      "OCR",
      "TensorFlow"
    ],
    "count": 2
  },
  "Voxel Engine": {
    "name": "Voxel Engine",
    "icon": "Boxes",
    "color": "from-amber-600 to-yellow-600",
    "description": "Chunk meshing, greedy meshing, 3D block terrains like Minecraft.",
    "level": "Intermediate",
    "tags": [
      "Voxel",
      "Minecraft",
      "Meshing",
      "Chunks"
    ],
    "count": 1
  },
  "Web Browser": {
    "name": "Web Browser",
    "icon": "Globe",
    "color": "from-sky-600 to-cyan-600",
    "description": "HTML tokenizers, CSS cascade layout engines, text flow, and paint trees.",
    "level": "Advanced",
    "tags": [
      "DOM",
      "CSS Engine",
      "Layout",
      "Rendering"
    ],
    "count": 2
  },
  "Web Server": {
    "name": "Web Server",
    "icon": "Server",
    "color": "from-indigo-600 to-blue-600",
    "description": "HTTP/1.1 parsing, socket listen loops, request routing, headers, and async IO.",
    "level": "Beginner - Intermediate",
    "tags": [
      "HTTP",
      "TCP",
      "Routing",
      "Headers",
      "Sockets"
    ],
    "count": 11
  },
  "Uncategorized": {
    "name": "Uncategorized",
    "icon": "Sparkle",
    "color": "from-slate-600 to-gray-600",
    "description": "Fascinating miscellaneous builds: DNS servers, video players, VR headsets, load balancers, and more.",
    "level": "All Levels",
    "tags": [
      "DNS",
      "Load Balancer",
      "NAND to Tetris",
      "Package Manager"
    ],
    "count": 62
  }
};

export const ALL_TUTORIALS: Tutorial[] = [
  {
    "id": "tut-1",
    "category": "Distributed Systems",
    "rawLanguage": "Java",
    "languages": [
      "Java"
    ],
    "title": "Building Your Own Kafka-like System From Scratch: A Step-by-Step Guide",
    "url": "https://github.com/buildthingsuseful/build-your-own-kafka",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-2",
    "category": "3D Renderer",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Introduction to Ray Tracing: a Simple Method for Creating 3D Images",
    "url": "https://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-ray-tracing/how-does-it-work",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-3",
    "category": "3D Renderer",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "How OpenGL works: software rendering in 500 lines of code",
    "url": "https://github.com/ssloy/tinyrenderer/wiki",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-4",
    "category": "3D Renderer",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Raycasting engine of Wolfenstein 3D",
    "url": "http://lodev.org/cgtutor/raycasting.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-5",
    "category": "3D Renderer",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Physically Based Rendering:From Theory To Implementation",
    "url": "http://www.pbr-book.org/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-6",
    "category": "3D Renderer",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Ray Tracing in One Weekend",
    "url": "https://raytracing.github.io/books/RayTracingInOneWeekend.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-7",
    "category": "3D Renderer",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Rasterization: a Practical Implementation",
    "url": "https://www.scratchapixel.com/lessons/3d-basic-rendering/rasterization-practical-implementation/overview-rasterization-algorithm",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-8",
    "category": "3D Renderer",
    "rawLanguage": "C# / TypeScript / JavaScript",
    "languages": [
      "C#",
      "TypeScript",
      "JavaScript"
    ],
    "title": "Learning how to write a 3D soft engine from scratch in C#, TypeScript or JavaScript",
    "url": "https://www.davrous.com/2013/06/13/tutorial-series-learning-how-to-write-a-3d-soft-engine-from-scratch-in-c-typescript-or-javascript/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-9",
    "category": "3D Renderer",
    "rawLanguage": "Java / JavaScript",
    "languages": [
      "Java",
      "JavaScript"
    ],
    "title": "Build your own 3D renderer",
    "url": "https://avik-das.github.io/build-your-own-raytracer/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-10",
    "category": "3D Renderer",
    "rawLanguage": "Java",
    "languages": [
      "Java"
    ],
    "title": "How to create your own simple 3D render engine in pure Java",
    "url": "http://blog.rogach.org/2015/08/how-to-create-your-own-simple-3d-render.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-11",
    "category": "3D Renderer",
    "rawLanguage": "JavaScript / Pseudocode",
    "languages": [
      "JavaScript",
      "Pseudocode"
    ],
    "title": "Computer Graphics from scratch",
    "url": "http://www.gabrielgambetta.com/computer-graphics-from-scratch/introduction.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-12",
    "category": "3D Renderer",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A 3D Modeller",
    "url": "http://aosabook.org/en/500L/a-3d-modeller.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-13",
    "category": "AI Model",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A Large Language Model (LLM)",
    "url": "https://github.com/rasbt/LLMs-from-scratch",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-14",
    "category": "AI Model",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Diffusion Models for Image Generation",
    "url": "https://huggingface.co/learn/diffusion-course/en/unit1/3",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-15",
    "category": "AI Model",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "RAG for Document Search",
    "url": "https://github.com/langchain-ai/rag-from-scratch",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-16",
    "category": "Augmented Reality",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "How To: Augmented Reality App Tutorial for Beginners with Vuforia and Unity 3D",
    "url": "https://www.youtube.com/watch?v=uXNjNcqW4kY",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-17",
    "category": "Augmented Reality",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "How To Unity ARCore",
    "url": "https://www.youtube.com/playlist?list=PLKIKuXdn4ZMjuUAtdQfK1vwTZPQn_rgSv",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-18",
    "category": "Augmented Reality",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "AR Portal Tutorial with Unity",
    "url": "https://www.youtube.com/playlist?list=PLPCqNOwwN794Gz5fzUSi1p4OqLU0HTmvn",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-19",
    "category": "Augmented Reality",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "How to create a Dragon in Augmented Reality in Unity ARCore",
    "url": "https://www.youtube.com/watch?v=qTSDPkPyPqs",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-20",
    "category": "Augmented Reality",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "How to Augmented Reality AR Tutorial: ARKit Portal to the Upside Down",
    "url": "https://www.youtube.com/watch?v=Z5AmqMuNi08",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-21",
    "category": "Augmented Reality",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Augmented Reality with Python and OpenCV",
    "url": "https://bitesofcode.wordpress.com/2017/09/12/augmented-reality-with-python-and-opencv-part-1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-22",
    "category": "BitTorrent Client",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "Building a BitTorrent client from scratch in C#",
    "url": "https://www.seanjoflynn.com/research/bittorrent.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-23",
    "category": "BitTorrent Client",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Building a BitTorrent client from the ground up in Go",
    "url": "https://blog.jse.li/posts/torrent/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-24",
    "category": "BitTorrent Client",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a Bencode Parser",
    "url": "https://xmonader.github.io/nimdays/day02_bencode.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-25",
    "category": "BitTorrent Client",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Write your own bittorrent client",
    "url": "https://allenkim67.github.io/programming/2016/05/04/how-to-make-your-own-bittorrent-client.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-26",
    "category": "BitTorrent Client",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A BitTorrent client in Python 3.5",
    "url": "http://markuseliasson.se/article/bittorrent-in-python/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-27",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "ATS",
    "languages": [
      "ATS"
    ],
    "title": "Functional Blockchain",
    "url": "https://beta.observablehq.com/@galletti94/functional-blockchain",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-28",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Crystal",
    "languages": [
      "Crystal"
    ],
    "title": "Write your own blockchain and PoW algorithm using Crystal",
    "url": "https://medium.com/@bradford_hamilton/write-your-own-blockchain-and-pow-algorithm-using-crystal-d53d5d9d0c52",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-29",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Building Blockchain in Go",
    "url": "https://jeiwan.net/posts/building-blockchain-in-go-part-1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-30",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Code your own blockchain in less than 200 lines of Go",
    "url": "https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-31",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Java",
    "languages": [
      "Java"
    ],
    "title": "Creating Your First Blockchain with Java",
    "url": "https://medium.com/programmers-blockchain/create-simple-blockchain-java-tutorial-from-scratch-6eeed3cb03fa",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-32",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "A cryptocurrency implementation in less than 1500 lines of code",
    "url": "https://github.com/conradoqg/naivecoin",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-33",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build your own Blockchain in JavaScript",
    "url": "https://github.com/nambrot/blockchain-in-js",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-34",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Learn & Build a JavaScript Blockchain",
    "url": "https://medium.com/digital-alchemy-holdings/learn-build-a-javascript-blockchain-part-1-ca61c285821e",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-35",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Creating a blockchain with JavaScript",
    "url": "https://github.com/SavjeeTutorials/SavjeeCoin",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-36",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "How To Launch Your Own Production-Ready Cryptocurrency",
    "url": "https://hackernoon.com/how-to-launch-your-own-production-ready-cryptocurrency-ab97cb773371",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-37",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Writing a Blockchain in Node.js",
    "url": "https://www.smashingmagazine.com/2020/02/cryptocurrency-blockchain-node-js/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-38",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Kotlin",
    "languages": [
      "Kotlin"
    ],
    "title": "Let’s implement a cryptocurrency in Kotlin",
    "url": "https://medium.com/@vasilyf/lets-implement-a-cryptocurrency-in-kotlin-part-1-blockchain-8704069f8580",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-39",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Learn Blockchains by Building One",
    "url": "https://hackernoon.com/learn-blockchains-by-building-one-117428612f46",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-40",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Build your own blockchain: a Python tutorial",
    "url": "http://ecomunsing.com/build-your-own-blockchain",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-41",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A Practical Introduction to Blockchain with Python",
    "url": "http://adilmoujahid.com/posts/2018/03/intro-blockchain-bitcoin-python/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-42",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Let’s Build the Tiniest Blockchain",
    "url": "https://medium.com/crypto-currently/lets-build-the-tiniest-blockchain-e70965a248b",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-43",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Programming Blockchains Step-by-Step (Manuscripts Book Edition)",
    "url": "https://github.com/yukimotopress/programming-blockchains-step-by-step",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-44",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Scala",
    "languages": [
      "Scala"
    ],
    "title": "How to build a simple actor-based blockchain",
    "url": "https://medium.freecodecamp.org/how-to-build-a-simple-actor-based-blockchain-aac1e996c177",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-45",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "TypeScript",
    "languages": [
      "TypeScript"
    ],
    "title": "Naivecoin: a tutorial for building a cryptocurrency",
    "url": "https://lhartikk.github.io/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-46",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "TypeScript",
    "languages": [
      "TypeScript"
    ],
    "title": "NaivecoinStake: a tutorial for building a cryptocurrency with the Proof of Stake consensus",
    "url": "https://naivecoinstake.learn.uno/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-47",
    "category": "Blockchain / Cryptocurrency",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Building A Blockchain in Rust & Substrate",
    "url": "https://hackernoon.com/building-a-blockchain-in-rust-and-substrate-a-step-by-step-guide-for-developers-kc223ybp",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-48",
    "category": "Bot",
    "rawLanguage": "Haskell",
    "languages": [
      "Haskell"
    ],
    "title": "Roll your own IRC bot",
    "url": "https://wiki.haskell.org/Roll_your_own_IRC_bot",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-49",
    "category": "Bot",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Creating a Simple Facebook Messenger AI Bot with API.ai in Node.js",
    "url": "https://tutorials.botsfloor.com/creating-a-simple-facebook-messenger-ai-bot-with-api-ai-in-node-js-50ae2fa5c80d",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-50",
    "category": "Bot",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "How to make a responsive telegram bot",
    "url": "https://www.sohamkamani.com/blog/2016/09/21/making-a-telegram-bot/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-51",
    "category": "Bot",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Create a Discord bot",
    "url": "https://discordjs.guide/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-52",
    "category": "Bot",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "gifbot - Building a GitHub App",
    "url": "https://blog.scottlogic.com/2017/05/22/gifbot-github-integration.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-53",
    "category": "Bot",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Building A Simple AI Chatbot With Web Speech API And Node.js",
    "url": "https://www.smashingmagazine.com/2017/08/ai-chatbot-web-speech-api-node-js/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-54",
    "category": "Bot",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "How to Build Your First Slack Bot with Python",
    "url": "https://www.fullstackpython.com/blog/build-first-slack-bot-python.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-55",
    "category": "Bot",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "How to build a Slack Bot with Python using Slack Events API & Django under 20 minute",
    "url": "https://medium.com/freehunch/how-to-build-a-slack-bot-with-python-using-slack-events-api-django-under-20-minute-code-included-269c3a9bf64e",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-56",
    "category": "Bot",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Build a Reddit Bot",
    "url": "https://pythonforengineers.com/blog/build-a-reddit-bot-part-1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-57",
    "category": "Bot",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "How To Make A Reddit Bot",
    "url": "https://www.youtube.com/watch?v=krTUf7BpTc0",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-58",
    "category": "Bot",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "How To Create a Telegram Bot Using Python",
    "url": "https://www.freecodecamp.org/news/how-to-create-a-telegram-bot-using-python/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-59",
    "category": "Bot",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Create a Twitter Bot in Python Using Tweepy",
    "url": "https://medium.freecodecamp.org/creating-a-twitter-bot-in-python-with-tweepy-ac524157a607",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-60",
    "category": "Bot",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Creating Reddit Bot with Python & PRAW",
    "url": "https://www.youtube.com/playlist?list=PLIFBTFgFpoJ9vmYYlfxRFV6U_XhG-4fpP",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-61",
    "category": "Bot",
    "rawLanguage": "R",
    "languages": [
      "R"
    ],
    "title": "Build A Cryptocurrency Trading Bot with R",
    "url": "https://towardsdatascience.com/build-a-cryptocurrency-trading-bot-with-r-1445c429e1b1",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-62",
    "category": "Bot",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "A bot for Starcraft in Rust, C or any other language",
    "url": "https://habr.com/en/post/436254/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-63",
    "category": "Command-Line Tool",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Visualize your local git contributions with Go",
    "url": "https://flaviocopes.com/go-git-contributions/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-64",
    "category": "Command-Line Tool",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Build a command line app with Go: lolcat",
    "url": "https://flaviocopes.com/go-tutorial-lolcat/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-65",
    "category": "Command-Line Tool",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Building a cli command with Go: cowsay",
    "url": "https://flaviocopes.com/go-tutorial-cowsay/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-66",
    "category": "Command-Line Tool",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Go CLI tutorial: fortune clone",
    "url": "https://flaviocopes.com/go-tutorial-fortune/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-67",
    "category": "Command-Line Tool",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a stow alternative to manage dotfiles",
    "url": "https://xmonader.github.io/nimdays/day06_nistow.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-68",
    "category": "Command-Line Tool",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Create a CLI tool in Javascript",
    "url": "https://citw.dev/tutorial/create-your-own-cli-tool",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-69",
    "category": "Command-Line Tool",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Command line apps in Rust",
    "url": "https://rust-cli.github.io/book/index.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-70",
    "category": "Command-Line Tool",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Writing a Command Line Tool in Rust",
    "url": "https://mattgathu.dev/2017/08/29/writing-cli-app-rust.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-71",
    "category": "Command-Line Tool",
    "rawLanguage": "Zig",
    "languages": [
      "Zig"
    ],
    "title": "Build Your Own CLI App in Zig from Scratch",
    "url": "https://rebuild-x.github.io/docs/#/./zig/terminal/cli",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-72",
    "category": "Database",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Let's Build a Simple Database",
    "url": "https://cstack.github.io/db_tutorial/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-73",
    "category": "Database",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Build Your Own Redis from Scratch",
    "url": "https://build-your-own.org/redis",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-74",
    "category": "Database",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "Build Your Own Database",
    "url": "https://www.codeproject.com/Articles/1029838/Build-Your-Own-Database",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-75",
    "category": "Database",
    "rawLanguage": "Clojure",
    "languages": [
      "Clojure"
    ],
    "title": "An Archaeology-Inspired Database",
    "url": "http://aosabook.org/en/500L/an-archaeology-inspired-database.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-76",
    "category": "Database",
    "rawLanguage": "Crystal",
    "languages": [
      "Crystal"
    ],
    "title": "Why you should build your own NoSQL Database",
    "url": "https://medium.com/@marceloboeira/why-you-should-build-your-own-nosql-database-9bbba42039f5",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-77",
    "category": "Database",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Build Your Own Database from Scratch: From B+Tree To SQL in 3000 Lines",
    "url": "https://build-your-own.org/database/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-78",
    "category": "Database",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Code a database in 45 steps: a series of test-driven small coding puzzles",
    "url": "https://trialofcode.org/database/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-79",
    "category": "Database",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Build Your Own Redis from Scratch",
    "url": "https://www.build-redis-from-scratch.dev/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-80",
    "category": "Database",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Dagoba: an in-memory graph database",
    "url": "http://aosabook.org/en/500L/dagoba-an-in-memory-graph-database.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-81",
    "category": "Database",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "DBDB: Dog Bed Database",
    "url": "http://aosabook.org/en/500L/dbdb-dog-bed-database.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-82",
    "category": "Database",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Write your own miniature Redis with Python",
    "url": "http://charlesleifer.com/blog/building-a-simple-redis-server-with-python/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-83",
    "category": "Database",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Build your own fast, persistent KV store in Ruby",
    "url": "https://dineshgowda.com/posts/build-your-own-persistent-kv-store/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-84",
    "category": "Database",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Build your own Redis client and server",
    "url": "https://tokio.rs/tokio/tutorial/setup",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-85",
    "category": "Docker",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Linux containers in 500 lines of code",
    "url": "https://blog.lizzie.io/linux-containers-in-500-loc.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-86",
    "category": "Docker",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Build Your Own Container Using Less than 100 Lines of Go",
    "url": "https://www.infoq.com/articles/build-a-container-golang",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-87",
    "category": "Docker",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Building a container from scratch in Go",
    "url": "https://www.youtube.com/watch?v=8fi7uSYlOdc",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-88",
    "category": "Docker",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A workshop on Linux containers: Rebuild Docker from Scratch",
    "url": "https://github.com/Fewbytes/rubber-docker",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-89",
    "category": "Docker",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A proof-of-concept imitation of Docker, written in 100% Python",
    "url": "https://github.com/tonybaloney/mocker",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-90",
    "category": "Docker",
    "rawLanguage": "Shell",
    "languages": [
      "Shell"
    ],
    "title": "Docker implemented in around 100 lines of bash",
    "url": "https://github.com/p8952/bocker",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-91",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Home-grown bytecode interpreters",
    "url": "https://medium.com/bumble-tech/home-grown-bytecode-interpreters-51e12d59b25c",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-92",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Virtual machine in C",
    "url": "http://web.archive.org/web/20200121100942/https://blog.felixangell.com/virtual-machine-in-c/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-93",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Write your Own Virtual Machine",
    "url": "https://justinmeiners.github.io/lc3-vm/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-94",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Writing a Game Boy emulator, Cinoop",
    "url": "https://cturt.github.io/cinoop.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-95",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "How to write an emulator (CHIP-8 interpreter)",
    "url": "http://www.multigesture.net/articles/how-to-write-an-emulator-chip-8-interpreter/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-96",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Emulation tutorial (CHIP-8 interpreter)",
    "url": "http://www.codeslinger.co.uk/pages/projects/chip8.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-97",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Emulation tutorial (GameBoy emulator)",
    "url": "http://www.codeslinger.co.uk/pages/projects/gameboy.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-98",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Emulation tutorial (Master System emulator)",
    "url": "http://www.codeslinger.co.uk/pages/projects/mastersystem/memory.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-99",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "NES Emulator From Scratch",
    "url": "https://www.youtube.com/playlist?list=PLrOv9FMX8xJHqMvSGB_9G9nZZ_4IgteYf",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-100",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "Common Lisp",
    "languages": [
      "Common Lisp"
    ],
    "title": "CHIP-8 in Common Lisp",
    "url": "http://stevelosh.com/blog/2016/12/chip8-cpu/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-101",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "GameBoy Emulation in JavaScript",
    "url": "http://imrannazar.com/GameBoy-Emulation-in-JavaScript",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-102",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Emulation Basics: Write your own Chip 8 Emulator/Interpreter",
    "url": "http://omokute.blogspot.com.br/2012/06/emulation-basics-write-your-own-chip-8.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-103",
    "category": "Emulator / Virtual Machine",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "0dmg: Learning Rust by building a partial Game Boy emulator",
    "url": "https://jeremybanks.github.io/0dmg/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-104",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "WTF is JSX (Let's Build a JSX Renderer)",
    "url": "https://jasonformat.com/wtf-is-jsx/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-105",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "A DIY guide to build your own React",
    "url": "https://github.com/hexacta/didact",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-106",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Building React From Scratch",
    "url": "https://www.youtube.com/watch?v=_MAD4Oly9yg",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-107",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Gooact: React in 160 lines of JavaScript",
    "url": "https://medium.com/@sweetpalma/gooact-react-in-160-lines-of-javascript-44e0742ad60f",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-108",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Learn how React Reconciler package works by building your own lightweight React DOM",
    "url": "https://hackernoon.com/learn-you-some-custom-react-renderers-aed7164a4199",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-109",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build Yourself a Redux",
    "url": "https://zapier.com/engineering/how-to-build-redux/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-110",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Let’s Write Redux!",
    "url": "https://www.jamasoftware.com/blog/lets-write-redux/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-111",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Redux: Implementing Store from Scratch",
    "url": "https://egghead.io/lessons/react-redux-implementing-store-from-scratch",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-112",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build Your own Simplified AngularJS in 200 Lines of JavaScript",
    "url": "https://blog.mgechev.com/2015/03/09/build-learn-your-own-light-lightweight-angularjs/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-113",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Make Your Own AngularJS",
    "url": "http://teropa.info/blog/2013/11/03/make-your-own-angular-part-1-scopes-and-digest.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-114",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "How to write your own Virtual DOM",
    "url": "https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-115",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Building a frontend framework, from scratch, with components (templating, state, VDOM)",
    "url": "https://mfrachet.github.io/create-frontend-framework/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-116",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build your own React",
    "url": "https://pomb.us/build-your-own-react/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-117",
    "category": "Front-end Framework / Library",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Building a Custom React Renderer",
    "url": "https://youtu.be/CGpMlWVcHok",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-118",
    "category": "Game",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Handmade Hero",
    "url": "https://handmadehero.org/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-119",
    "category": "Game",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "How to Program an NES game in C",
    "url": "https://nesdoug.com/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-120",
    "category": "Game",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Chess Engine In C",
    "url": "https://www.youtube.com/playlist?list=PLZ1QII7yudbc-Ky058TEaOstZHVbT-2hg",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-121",
    "category": "Game",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Let's Make: Dangerous Dave",
    "url": "https://www.youtube.com/playlist?list=PLSkJey49cOgTSj465v2KbLZ7LMn10bCF9",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-122",
    "category": "Game",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Learn Video Game Programming in C",
    "url": "https://www.youtube.com/playlist?list=PLT6WFYYZE6uLMcPGS3qfpYm7T_gViYMMt",
    "format": "Video",
    "extra": ""
  },
  {
    "id": "tut-123",
    "category": "Game",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Coding A Sudoku Solver in C",
    "url": "https://www.youtube.com/playlist?list=PLkTXsX7igf8edTYU92nU-f5Ntzuf-RKvW",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-124",
    "category": "Game",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Coding a Rogue/Nethack RPG in C",
    "url": "https://www.youtube.com/playlist?list=PLkTXsX7igf8erbWGYT4iSAhpnJLJ0Nk5G",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-125",
    "category": "Game",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "On Tetris and Reimplementation",
    "url": "https://brennan.io/2015/06/12/tetris-reimplementation/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-126",
    "category": "Game",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Breakout",
    "url": "https://learnopengl.com/In-Practice/2D-Game/Breakout",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-127",
    "category": "Game",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Beginning Game Programming v2.0",
    "url": "http://lazyfoo.net/tutorials/SDL/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-128",
    "category": "Game",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Tetris tutorial in C++ platform independent focused in game logic for beginners",
    "url": "http://javilop.com/gamedev/tetris-tutorial-in-c-platform-independent-focused-in-game-logic-for-beginners/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-129",
    "category": "Game",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Remaking Cavestory in C++",
    "url": "https://www.youtube.com/watch?v=ETvApbD5xRo&list=PLNOBk_id22bw6LXhrGfhVwqQIa-M2MsLa",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-130",
    "category": "Game",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Reconstructing Cave Story",
    "url": "https://www.youtube.com/playlist?list=PL006xsVEsbKjSKBmLu1clo85yLrwjY67X",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-131",
    "category": "Game",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Space Invaders from Scratch",
    "url": "http://nicktasios.nl/posts/space-invaders-from-scratch-part-1.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-132",
    "category": "Game",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "Learn C# by Building a Simple RPG",
    "url": "http://scottlilly.com/learn-c-by-building-a-simple-rpg-index/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-133",
    "category": "Game",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "Creating a Roguelike Game in C#",
    "url": "https://roguesharp.wordpress.com/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-134",
    "category": "Game",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "Build a C#/WPF RPG",
    "url": "https://scottlilly.com/build-a-cwpf-rpg/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-135",
    "category": "Game",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Games With Go",
    "url": "https://www.youtube.com/playlist?list=PLDZujg-VgQlZUy1iCqBbe5faZLMkA3g2x",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-136",
    "category": "Game",
    "rawLanguage": "Java",
    "languages": [
      "Java"
    ],
    "title": "Code a 2D Game Engine using Java - Full Course for Beginners",
    "url": "https://www.youtube.com/watch?v=025QFeZfeyM",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-137",
    "category": "Game",
    "rawLanguage": "Java",
    "languages": [
      "Java"
    ],
    "title": "3D Game Development with LWJGL 3",
    "url": "https://lwjglgamedev.gitbooks.io/3d-game-development-with-lwjgl/content/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-138",
    "category": "Game",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "2D breakout game using Phaser",
    "url": "https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_breakout_game_Phaser",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-139",
    "category": "Game",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "How to Make Flappy Bird in HTML5 With Phaser",
    "url": "http://www.lessmilk.com/tutorial/flappy-bird-phaser-1",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-140",
    "category": "Game",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Developing Games with React, Redux, and SVG",
    "url": "https://auth0.com/blog/developing-games-with-react-redux-and-svg-part-1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-141",
    "category": "Game",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build your own 8-Ball Pool game from scratch",
    "url": "https://www.youtube.com/watch?v=aXwCrtAo4Wc",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-142",
    "category": "Game",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "How to Make Your First Roguelike",
    "url": "https://gamedevelopment.tutsplus.com/tutorials/how-to-make-your-first-roguelike--gamedev-13677",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-143",
    "category": "Game",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Think like a programmer: How to build Snake using only JavaScript, HTML & CSS",
    "url": "https://medium.freecodecamp.org/think-like-a-programmer-how-to-build-snake-using-only-javascript-html-and-css-7b1479c3339e",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-144",
    "category": "Game",
    "rawLanguage": "Lua",
    "languages": [
      "Lua"
    ],
    "title": "BYTEPATH",
    "url": "https://github.com/SSYGEN/blog/issues/30",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-145",
    "category": "Game",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Developing Games With PyGame",
    "url": "https://pythonprogramming.net/pygame-python-3-part-1-intro/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-146",
    "category": "Game",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Making Games with Python & Pygame",
    "url": "https://inventwithpython.com/makinggames.pdf",
    "format": "PDF / Book",
    "extra": "pdf"
  },
  {
    "id": "tut-147",
    "category": "Game",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Roguelike Tutorial Revised",
    "url": "http://rogueliketutorials.com/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-148",
    "category": "Game",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Developing Games With Ruby",
    "url": "https://leanpub.com/developing-games-with-ruby/read",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-149",
    "category": "Game",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Ruby Snake",
    "url": "https://www.diatomenterprises.com/gamedev-on-ruby-why-not/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-150",
    "category": "Game",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Adventures in Rust: A Basic 2D Game",
    "url": "https://a5huynh.github.io/posts/2018/adventures-in-rust/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-151",
    "category": "Game",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Roguelike Tutorial in Rust + tcod",
    "url": "https://tomassedovic.github.io/roguelike-tutorial/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-152",
    "category": "Git",
    "rawLanguage": "Haskell",
    "languages": [
      "Haskell"
    ],
    "title": "Reimplementing “git clone” in Haskell from the bottom up",
    "url": "http://stefan.saasen.me/articles/git-clone-in-haskell-from-the-bottom-up/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-153",
    "category": "Git",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Gitlet",
    "url": "http://gitlet.maryrosecook.com/docs/gitlet.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-154",
    "category": "Git",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build GIT - Learn GIT",
    "url": "https://kushagra.dev/blog/build-git-learn-git/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-155",
    "category": "Git",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Just enough of a Git client to create a repo, commit, and push itself to GitHub",
    "url": "https://benhoyt.com/writings/pygit/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-156",
    "category": "Git",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Write yourself a Git!",
    "url": "https://wyag.thb.lt/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-157",
    "category": "Git",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "ugit: Learn Git Internals by Building Git Yourself",
    "url": "https://www.leshenko.net/p/ugit/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-158",
    "category": "Git",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Rebuilding Git in Ruby",
    "url": "https://robots.thoughtbot.com/rebuilding-git-in-ruby",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-159",
    "category": "Memory Allocator",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Malloc is not magic -- Implementing your own memory allocator",
    "url": "https://medium.com/p/e0354e914402",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-160",
    "category": "Network Stack",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Beej's Guide to Network Programming",
    "url": "http://beej.us/guide/bgnet/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-161",
    "category": "Network Stack",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Let's code a TCP/IP stack",
    "url": "http://www.saminiir.com/lets-code-tcp-ip-stack-1-ethernet-arp/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-162",
    "category": "Network Stack",
    "rawLanguage": "C / Python",
    "languages": [
      "C",
      "Python"
    ],
    "title": "Build your own VPN/Virtual Switch",
    "url": "https://github.com/peiyuanix/build-your-own-zerotier",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-163",
    "category": "Network Stack",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "How to build a network stack in Ruby",
    "url": "https://medium.com/geckoboard-under-the-hood/how-to-build-a-network-stack-in-ruby-f73aeb1b661b",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-164",
    "category": "Neural Network",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "Neural Network OCR",
    "url": "https://www.codeproject.com/Articles/11285/Neural-Network-OCR",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-165",
    "category": "Neural Network",
    "rawLanguage": "F#",
    "languages": [
      "F#"
    ],
    "title": "Building Neural Networks in F#: Part 1",
    "url": "https://medium.com/data-science/building-neural-networks-in-f-part-1-a2832ae972e6",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-166",
    "category": "Neural Network",
    "rawLanguage": "F#",
    "languages": [
      "F#"
    ],
    "title": "Building Neural Networks in F#: Part 2",
    "url": "https://medium.com/data-science/building-neural-networks-in-f-part-2-training-evaluation-5e3a68889da6",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-167",
    "category": "Neural Network",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Build a multilayer perceptron with Golang",
    "url": "https://made2591.github.io/posts/neuralnetwork",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-168",
    "category": "Neural Network",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "How to build a simple artificial neural network with Go",
    "url": "https://sausheong.github.io/posts/how-to-build-a-simple-artificial-neural-network-with-go/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-169",
    "category": "Neural Network",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Building a Neural Net from Scratch in Go",
    "url": "https://datadan.io/blog/neural-net-with-go",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-170",
    "category": "Neural Network",
    "rawLanguage": "JavaScript / Java",
    "languages": [
      "JavaScript",
      "Java"
    ],
    "title": "Neural Networks - The Nature of Code",
    "url": "https://www.youtube.com/playlist?list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-171",
    "category": "Neural Network",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Neural networks from scratch for JavaScript linguists (Part1 — The Perceptron)",
    "url": "https://hackernoon.com/neural-networks-from-scratch-for-javascript-linguists-part1-the-perceptron-632a4d1fbad2",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-172",
    "category": "Neural Network",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A Neural Network in 11 lines of Python",
    "url": "https://iamtrask.github.io/2015/07/12/basic-python-network/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-173",
    "category": "Neural Network",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Implement a Neural Network from Scratch",
    "url": "https://victorzhou.com/blog/intro-to-neural-networks/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-174",
    "category": "Neural Network",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Optical Character Recognition (OCR)",
    "url": "http://aosabook.org/en/500L/optical-character-recognition-ocr.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-175",
    "category": "Neural Network",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Traffic signs classification with a convolutional network",
    "url": "https://navoshta.com/traffic-signs-classification/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-176",
    "category": "Neural Network",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Generate Music using LSTM Neural Network in Keras",
    "url": "https://towardsdatascience.com/how-to-generate-music-using-a-lstm-neural-network-in-keras-68786834d4c5",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-177",
    "category": "Neural Network",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "An Introduction to Convolutional Neural Networks",
    "url": "https://victorzhou.com/blog/intro-to-cnns-part-1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-178",
    "category": "Neural Network",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Neural Networks: Zero to Hero",
    "url": "https://www.youtube.com/playlist?list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
    "format": "Video",
    "extra": ""
  },
  {
    "id": "tut-179",
    "category": "Neural Network",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "SlowTorch: Implementation of PyTorch from the ground up in 100% pure Python",
    "url": "https://github.com/xames3/slowtorch",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-180",
    "category": "Operating System",
    "rawLanguage": "Assembly",
    "languages": [
      "Assembly"
    ],
    "title": "Writing a Tiny x86 Bootloader",
    "url": "http://joebergeron.io/posts/post_two.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-181",
    "category": "Operating System",
    "rawLanguage": "Assembly",
    "languages": [
      "Assembly"
    ],
    "title": "Baking Pi – Operating Systems Development",
    "url": "http://www.cl.cam.ac.uk/projects/raspberrypi/tutorials/os/index.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-182",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Building a software and hardware stack for a simple computer from scratch",
    "url": "https://www.youtube.com/watch?v=ZjwvMcP3Nf0&list=PLU94OURih-CiP4WxKSMt3UcwMSDM3aTtX",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-183",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Operating Systems: From 0 to 1",
    "url": "https://tuhdo.github.io/os01/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-184",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "The little book about OS development",
    "url": "https://littleosbook.github.io/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-185",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Roll your own toy UNIX-clone OS",
    "url": "http://jamesmolloy.co.uk/tutorial_html/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-186",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Kernel 101 – Let’s write a Kernel",
    "url": "https://arjunsreedharan.org/post/82710718100/kernel-101-lets-write-a-kernel",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-187",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Kernel 201 – Let’s write a Kernel with keyboard and screen support",
    "url": "https://arjunsreedharan.org/post/99370248137/kernel-201-lets-write-a-kernel-with-keyboard",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-188",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Build a minimal multi-tasking kernel for ARM from scratch",
    "url": "https://github.com/jserv/mini-arm-os",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-189",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "How to create an OS from scratch",
    "url": "https://github.com/cfenollosa/os-tutorial",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-190",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Malloc tutorial",
    "url": "https://danluu.com/malloc-tutorial/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-191",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Hack the virtual memory",
    "url": "https://blog.holbertonschool.com/hack-the-virtual-memory-c-strings-proc/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-192",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Learning operating system development using Linux kernel and Raspberry Pi",
    "url": "https://github.com/s-matyukevich/raspberry-pi-os",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-193",
    "category": "Operating System",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Operating systems development for Dummies",
    "url": "https://medium.com/@lduck11007/operating-systems-development-for-dummies-3d4d786e8ac",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-194",
    "category": "Operating System",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Write your own Operating System",
    "url": "https://www.youtube.com/playlist?list=PLHh55M_Kq4OApWScZyPl5HhgsTJS9MZ6M",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-195",
    "category": "Operating System",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Writing a Bootloader",
    "url": "http://3zanders.co.uk/2017/10/13/writing-a-bootloader/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-196",
    "category": "Operating System",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Writing an OS in Rust",
    "url": "https://os.phil-opp.com/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-197",
    "category": "Operating System",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Add RISC-V Rust Operating System Tutorial",
    "url": "https://osblog.stephenmarz.com/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-198",
    "category": "Operating System",
    "rawLanguage": "(any)",
    "languages": [
      "any"
    ],
    "title": "Linux from scratch",
    "url": "https://linuxfromscratch.org/lfs",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-199",
    "category": "Physics Engine",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Video Game Physics Tutorial",
    "url": "https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-200",
    "category": "Physics Engine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Game physics series by Allen Chou",
    "url": "http://allenchou.net/game-physics-series/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-201",
    "category": "Physics Engine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "How to Create a Custom Physics Engine",
    "url": "https://gamedevelopment.tutsplus.com/series/how-to-create-a-custom-physics-engine--gamedev-12715",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-202",
    "category": "Physics Engine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "3D Physics Engine Tutorial",
    "url": "https://www.youtube.com/playlist?list=PLEETnX-uPtBXm1KEr_2zQ6K_0hoGH6JJ0",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-203",
    "category": "Physics Engine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "How Physics Engines Work",
    "url": "http://buildnewgames.com/gamephysics/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-204",
    "category": "Physics Engine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Broad Phase Collision Detection Using Spatial Partitioning",
    "url": "http://buildnewgames.com/broad-phase-collision-detection/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-205",
    "category": "Physics Engine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build a simple 2D physics engine for JavaScript games",
    "url": "https://developer.ibm.com/tutorials/wa-build2dphysicsengine/?mhsrc=ibmsearch_a&mhq=2dphysic",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-206",
    "category": "Processor",
    "rawLanguage": "Verilog",
    "languages": [
      "Verilog"
    ],
    "title": "From Blinker to RISC-V",
    "url": "https://github.com/BrunoLevy/learn-fpga/tree/master/FemtoRV/TUTORIALS/FROM_BLINKER_TO_RISCV",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-207",
    "category": "Programming Language",
    "rawLanguage": "(any)",
    "languages": [
      "any"
    ],
    "title": "mal - Make a Lisp",
    "url": "https://github.com/kanaka/mal#mal---make-a-lisp",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-208",
    "category": "Programming Language",
    "rawLanguage": "Assembly",
    "languages": [
      "Assembly"
    ],
    "title": "Jonesforth",
    "url": "https://github.com/nornagon/jonesforth/blob/master/jonesforth.S",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-209",
    "category": "Programming Language",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Baby's First Garbage Collector",
    "url": "http://journal.stuffwithstuff.com/2013/12/08/babys-first-garbage-collector/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-210",
    "category": "Programming Language",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Build Your Own Lisp: Learn C and build your own programming language in 1000 lines of code",
    "url": "http://www.buildyourownlisp.com/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-211",
    "category": "Programming Language",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Writing a Simple Garbage Collector in C",
    "url": "http://maplant.com/gc.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-212",
    "category": "Programming Language",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "C interpreter that interprets itself.",
    "url": "https://github.com/lotabout/write-a-C-interpreter",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-213",
    "category": "Programming Language",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "A C & x86 version of the \"Let's Build a Compiler\" by Jack Crenshaw",
    "url": "https://github.com/lotabout/Let-s-build-a-compiler",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-214",
    "category": "Programming Language",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "A journey explaining how to build a compiler from scratch",
    "url": "https://github.com/DoctorWkt/acwj",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-215",
    "category": "Programming Language",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Writing Your Own Toy Compiler Using Flex",
    "url": "https://gnuu.org/2009/09/18/writing-your-own-toy-compiler/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-216",
    "category": "Programming Language",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "How to Create a Compiler",
    "url": "https://www.youtube.com/watch?v=eF9qWbuQLuw",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-217",
    "category": "Programming Language",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Kaleidoscope: Implementing a Language with LLVM",
    "url": "https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-218",
    "category": "Programming Language",
    "rawLanguage": "F#",
    "languages": [
      "F#"
    ],
    "title": "Understanding Parser Combinators",
    "url": "https://fsharpforfunandprofit.com/posts/understanding-parser-combinators/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-219",
    "category": "Programming Language",
    "rawLanguage": "Elixir",
    "languages": [
      "Elixir"
    ],
    "title": "Demystifying compilers by writing your own",
    "url": "https://www.youtube.com/watch?v=zMJYoYwOCd4",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-220",
    "category": "Programming Language",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "The Super Tiny Compiler",
    "url": "https://github.com/hazbo/the-super-tiny-compiler",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-221",
    "category": "Programming Language",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Lexical Scanning in Go",
    "url": "https://www.youtube.com/watch?v=HxaD_trXwRE",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-222",
    "category": "Programming Language",
    "rawLanguage": "Haskell",
    "languages": [
      "Haskell"
    ],
    "title": "Let's Build a Compiler",
    "url": "https://g-ford.github.io/cradle/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-223",
    "category": "Programming Language",
    "rawLanguage": "Haskell",
    "languages": [
      "Haskell"
    ],
    "title": "Write You a Haskell",
    "url": "http://dev.stephendiehl.com/fun/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-224",
    "category": "Programming Language",
    "rawLanguage": "Haskell",
    "languages": [
      "Haskell"
    ],
    "title": "Write Yourself a Scheme in 48 Hours",
    "url": "https://en.wikibooks.org/wiki/Write_Yourself_a_Scheme_in_48_Hours",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-225",
    "category": "Programming Language",
    "rawLanguage": "Haskell",
    "languages": [
      "Haskell"
    ],
    "title": "Write You A Scheme",
    "url": "https://www.wespiser.com/writings/wyas/home.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-226",
    "category": "Programming Language",
    "rawLanguage": "Java",
    "languages": [
      "Java"
    ],
    "title": "Crafting interpreters: A handbook for making programming languages",
    "url": "http://www.craftinginterpreters.com/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-227",
    "category": "Programming Language",
    "rawLanguage": "Java",
    "languages": [
      "Java"
    ],
    "title": "Creating JVM Language",
    "url": "http://jakubdziworski.github.io/categories.html#Enkel-ref",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-228",
    "category": "Programming Language",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "The Super Tiny Compiler",
    "url": "https://github.com/jamiebuilds/the-super-tiny-compiler",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-229",
    "category": "Programming Language",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "The Super Tiny Interpreter",
    "url": "https://github.com/keyanzhang/the-super-tiny-interpreter",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-230",
    "category": "Programming Language",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Little Lisp interpreter",
    "url": "https://maryrosecook.com/blog/post/little-lisp-interpreter",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-231",
    "category": "Programming Language",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "How to implement a programming language in JavaScript",
    "url": "http://lisperator.net/pltut/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-232",
    "category": "Programming Language",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Let’s go write a Lisp",
    "url": "https://idiocy.org/lets-go-write-a-lisp/part-1.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-233",
    "category": "Programming Language",
    "rawLanguage": "OCaml",
    "languages": [
      "OCaml"
    ],
    "title": "Writing a C Compiler",
    "url": "https://norasandler.com/2017/11/29/Write-a-Compiler.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-234",
    "category": "Programming Language",
    "rawLanguage": "OCaml",
    "languages": [
      "OCaml"
    ],
    "title": "Writing a Lisp, the series",
    "url": "https://bernsteinbear.com/blog/lisp/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-235",
    "category": "Programming Language",
    "rawLanguage": "Pascal",
    "languages": [
      "Pascal"
    ],
    "title": "Let's Build a Compiler",
    "url": "https://compilers.iecc.com/crenshaw/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-236",
    "category": "Programming Language",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A Python Interpreter Written in Python",
    "url": "http://aosabook.org/en/500L/a-python-interpreter-written-in-python.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-237",
    "category": "Programming Language",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "lisp.py: Make your own Lisp interpreter",
    "url": "http://khamidou.com/compilers/lisp.py/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-238",
    "category": "Programming Language",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "How to Write a Lisp Interpreter in Python",
    "url": "http://norvig.com/lispy.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-239",
    "category": "Programming Language",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Let’s Build A Simple Interpreter",
    "url": "https://ruslanspivak.com/lsbasi-part1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-240",
    "category": "Programming Language",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Make Your Own Simple Interpreted Programming Language",
    "url": "https://www.youtube.com/watch?v=dj9CBS3ikGA&list=PLZQftyCk7_SdoVexSmwy_tBgs7P0b97yD&index=1",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-241",
    "category": "Programming Language",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "From Source Code To Machine Code: Build Your Own Compiler From Scratch",
    "url": "https://build-your-own.org/compiler/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-242",
    "category": "Programming Language",
    "rawLanguage": "Racket",
    "languages": [
      "Racket"
    ],
    "title": "Beautiful Racket: How to make your own programming languages with Racket",
    "url": "https://beautifulracket.com/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-243",
    "category": "Programming Language",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "A Compiler From Scratch",
    "url": "https://www.destroyallsoftware.com/screencasts/catalog/a-compiler-from-scratch",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-244",
    "category": "Programming Language",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Markdown compiler from scratch in Ruby",
    "url": "https://blog.beezwax.net/2017/07/07/writing-a-markdown-compiler/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-245",
    "category": "Programming Language",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Learning Parser Combinators With Rust",
    "url": "https://bodil.lol/parser-combinators/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-246",
    "category": "Programming Language",
    "rawLanguage": "Swift",
    "languages": [
      "Swift"
    ],
    "title": "Building a LISP from scratch with Swift",
    "url": "https://www.uraimo.com/2017/02/05/building-a-lisp-from-scratch-with-swift/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-247",
    "category": "Programming Language",
    "rawLanguage": "TypeScript",
    "languages": [
      "TypeScript"
    ],
    "title": "Build your own WebAssembly Compiler",
    "url": "https://blog.scottlogic.com/2019/05/17/webassembly-compiler.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-248",
    "category": "Regex Engine",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "A Regular Expression Matcher",
    "url": "https://www.cs.princeton.edu/courses/archive/spr09/cos333/beautiful.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-249",
    "category": "Regex Engine",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Regular Expression Matching Can Be Simple And Fast",
    "url": "https://swtch.com/~rsc/regexp/regexp1.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-250",
    "category": "Regex Engine",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "How to build a regex engine from scratch",
    "url": "https://rhaeguard.github.io/posts/regex",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-251",
    "category": "Regex Engine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build a Regex Engine in Less than 40 Lines of Code",
    "url": "https://nickdrane.com/build-your-own-regex/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-252",
    "category": "Regex Engine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "How to implement regular expressions in functional javascript using derivatives",
    "url": "http://dpk.io/dregs/toydregs",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-253",
    "category": "Regex Engine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Implementing a Regular Expression Engine",
    "url": "https://deniskyashif.com/2019/02/17/implementing-a-regular-expression-engine/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-254",
    "category": "Regex Engine",
    "rawLanguage": "Perl",
    "languages": [
      "Perl"
    ],
    "title": "How Regexes Work",
    "url": "https://perl.plover.com/Regex/article.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-255",
    "category": "Regex Engine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Build Your Own Regular Expression Engines: Backtracking, NFA, DFA",
    "url": "https://build-your-own.org/b2a/r0_intro",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-256",
    "category": "Regex Engine",
    "rawLanguage": "Scala",
    "languages": [
      "Scala"
    ],
    "title": "No Magic: Regular Expressions",
    "url": "https://rcoh.svbtle.com/no-magic-regular-expressions",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-257",
    "category": "Search Engine",
    "rawLanguage": "CSS",
    "languages": [
      "CSS"
    ],
    "title": "A search engine in CSS",
    "url": "https://stories.algolia.com/a-search-engine-in-css-b5ec4e902e97",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-258",
    "category": "Search Engine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Building a search engine using Redis and redis-py",
    "url": "http://www.dr-josiah.com/2010/07/building-search-engine-using-redis-and.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-259",
    "category": "Search Engine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Building a Vector Space Indexing Engine in Python",
    "url": "https://boyter.org/2010/08/build-vector-space-search-engine-python/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-260",
    "category": "Search Engine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Building A Python-Based Search Engine",
    "url": "https://www.youtube.com/watch?v=cY7pE7vX6MU",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-261",
    "category": "Search Engine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Making text search learn from feedback",
    "url": "https://medium.com/filament-ai/making-text-search-learn-from-feedback-4fe210fd87b0",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-262",
    "category": "Search Engine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Finding Important Words in Text Using TF-IDF",
    "url": "https://stevenloria.com/tf-idf/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-263",
    "category": "Shell",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Tutorial - Write a Shell in C",
    "url": "https://brennan.io/2015/01/16/write-a-shell-in-c/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-264",
    "category": "Shell",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Let's build a shell!",
    "url": "https://github.com/kamalmarhubi/shell-workshop",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-265",
    "category": "Shell",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Writing a UNIX Shell",
    "url": "https://indradhanush.github.io/blog/writing-a-unix-shell-part-1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-266",
    "category": "Shell",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Build Your Own Shell",
    "url": "https://github.com/tokenrove/build-your-own-shell",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-267",
    "category": "Shell",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Write a shell in C",
    "url": "https://danishpraka.sh/posts/write-a-shell/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-268",
    "category": "Shell",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Writing a simple shell in Go",
    "url": "https://sj14.gitlab.io/post/2018-07-01-go-unix-shell/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-269",
    "category": "Shell",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Build Your Own Shell using Rust",
    "url": "https://www.joshmcguigan.com/blog/build-your-own-shell-rust/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-270",
    "category": "Template Engine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "JavaScript template engine in just 20 lines",
    "url": "http://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-271",
    "category": "Template Engine",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Understanding JavaScript Micro-Templating",
    "url": "https://medium.com/wdstack/understanding-javascript-micro-templating-f37a37b3b40e",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-272",
    "category": "Template Engine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Approach: Building a toy template engine in Python",
    "url": "http://alexmic.net/building-a-template-engine/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-273",
    "category": "Template Engine",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A Template Engine",
    "url": "http://aosabook.org/en/500L/a-template-engine.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-274",
    "category": "Template Engine",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "How to write a template engine in less than 30 lines of code",
    "url": "http://bits.citrusbyte.com/how-to-write-a-template-library/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-275",
    "category": "Text Editor",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Build Your Own Text Editor",
    "url": "https://viewsourcecode.org/snaptoken/kilo/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-276",
    "category": "Text Editor",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Designing a Simple Text Editor",
    "url": "http://www.fltk.org/doc-1.1/editor.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-277",
    "category": "Text Editor",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Python Tutorial: Make Your Own Text Editor",
    "url": "https://www.youtube.com/watch?v=xqDonHEYPgA",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-278",
    "category": "Text Editor",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Create a Simple Python Text Editor!",
    "url": "http://www.instructables.com/id/Create-a-Simple-Python-Text-Editor/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-279",
    "category": "Text Editor",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Build a Collaborative Text Editor Using Rails",
    "url": "https://blog.aha.io/text-editor/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-280",
    "category": "Text Editor",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Hecto: Build your own text editor in Rust",
    "url": "https://www.flenker.blog/hecto/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-281",
    "category": "Visual Recognition System",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Developing a License Plate Recognition System with Machine Learning in Python",
    "url": "https://medium.com/devcenter/developing-a-license-plate-recognition-system-with-machine-learning-in-python-787833569ccd",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-282",
    "category": "Visual Recognition System",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Building a Facial Recognition Pipeline with Deep Learning in Tensorflow",
    "url": "https://hackernoon.com/building-a-facial-recognition-pipeline-with-deep-learning-in-tensorflow-66e7645015b8",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-283",
    "category": "Voxel Engine",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Let's Make a Voxel Engine",
    "url": "https://sites.google.com/site/letsmakeavoxelengine/home",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-284",
    "category": "Web Browser",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Let's build a browser engine",
    "url": "https://limpet.net/mbrubeck/2014/08/08/toy-layout-engine-1.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-285",
    "category": "Web Browser",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Browser Engineering",
    "url": "https://browser.engineering",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-286",
    "category": "Web Server",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "Writing a Web Server from Scratch",
    "url": "https://www.codeproject.com/Articles/859108/Writing-a-Web-Server-from-Scratch",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-287",
    "category": "Web Server",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Build Your Own Web Server From Scratch In JavaScript",
    "url": "https://build-your-own.org/webserver/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-288",
    "category": "Web Server",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Let's code a web server from scratch with NodeJS Streams",
    "url": "https://www.codementor.io/@ziad-saab/let-s-code-a-web-server-from-scratch-with-nodejs-streams-h4uc9utji",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-289",
    "category": "Web Server",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "lets-build-express",
    "url": "https://github.com/antoaravinth/lets-build-express",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-290",
    "category": "Web Server",
    "rawLanguage": "PHP",
    "languages": [
      "PHP"
    ],
    "title": "Writing a webserver in pure PHP",
    "url": "http://station.clancats.com/writing-a-webserver-in-pure-php/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-291",
    "category": "Web Server",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A Simple Web Server",
    "url": "http://aosabook.org/en/500L/a-simple-web-server.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-292",
    "category": "Web Server",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Let’s Build A Web Server.",
    "url": "https://ruslanspivak.com/lsbaws-part1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-293",
    "category": "Web Server",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Web application from scratch",
    "url": "https://defn.io/2018/02/25/web-app-from-scratch-01/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-294",
    "category": "Web Server",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Building a basic HTTP Server from scratch in Python",
    "url": "http://joaoventura.net/blog/2017/python-webserver/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-295",
    "category": "Web Server",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Implementing a RESTful Web API with Python & Flask",
    "url": "http://blog.luisrei.com/articles/flaskrest.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-296",
    "category": "Web Server",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Building a simple websockets server from scratch in Ruby",
    "url": "http://blog.honeybadger.io/building-a-simple-websockets-server-from-scratch-in-ruby/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-297",
    "category": "Uncategorized",
    "rawLanguage": "(any)",
    "languages": [
      "any"
    ],
    "title": "From NAND to Tetris: Building a Modern Computer From First Principles",
    "url": "http://nand2tetris.org/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-298",
    "category": "Uncategorized",
    "rawLanguage": "(any)",
    "languages": [
      "any"
    ],
    "title": "build-your-own-x-vibe-coding: BYOX-style tutorials adapted for vibe coding",
    "url": "https://github.com/inFaaa/build-your-own-x-vibe-coding",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-299",
    "category": "Uncategorized",
    "rawLanguage": "Alloy",
    "languages": [
      "Alloy"
    ],
    "title": "The Same-Origin Policy",
    "url": "http://aosabook.org/en/500L/the-same-origin-policy.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-300",
    "category": "Uncategorized",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "How to Write a Video Player in Less Than 1000 Lines",
    "url": "http://dranger.com/ffmpeg/ffmpeg.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-301",
    "category": "Uncategorized",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Learn how to write a hash table in C",
    "url": "https://github.com/jamesroutley/write-a-hash-table",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-302",
    "category": "Uncategorized",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "The very basics of a terminal emulator",
    "url": "https://www.uninformativ.de/blog/postings/2018-02-24/0/POSTING-en.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-303",
    "category": "Uncategorized",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Write a System Call",
    "url": "https://brennan.io/2016/11/14/kernel-dev-ep3/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-304",
    "category": "Uncategorized",
    "rawLanguage": "C",
    "languages": [
      "C"
    ],
    "title": "Sol - An MQTT broker from scratch",
    "url": "https://codepr.github.io/posts/sol-mqtt-broker",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-305",
    "category": "Uncategorized",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Build your own VR headset for $200",
    "url": "https://github.com/relativty/Relativ",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-306",
    "category": "Uncategorized",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "How X Window Managers work and how to write one",
    "url": "https://seasonofcode.com/posts/how-x-window-managers-work-and-how-to-write-one-part-i.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-307",
    "category": "Uncategorized",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Writing a Linux Debugger",
    "url": "https://blog.tartanllama.xyz/writing-a-linux-debugger-setup/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-308",
    "category": "Uncategorized",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "How a 64k intro is made",
    "url": "http://www.lofibucket.com/articles/64k_intro.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-309",
    "category": "Uncategorized",
    "rawLanguage": "C++",
    "languages": [
      "C++"
    ],
    "title": "Make your own Game Engine",
    "url": "https://www.youtube.com/playlist?list=PLlrATfBNZ98dC-V-N3m0Go4deliWHPFwT",
    "format": "Video",
    "extra": ""
  },
  {
    "id": "tut-310",
    "category": "Uncategorized",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "C# Networking: Create a TCP chater server, TCP games, UDP Pong and more",
    "url": "https://16bpp.net/tutorials/csharp-networking",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-311",
    "category": "Uncategorized",
    "rawLanguage": "C#",
    "languages": [
      "C#"
    ],
    "title": "Loading and rendering 3D skeletal animations from scratch in C# and GLSL",
    "url": "https://www.seanjoflynn.com/research/skeletal-animation.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-312",
    "category": "Uncategorized",
    "rawLanguage": "Clojure",
    "languages": [
      "Clojure"
    ],
    "title": "Building a spell-checker",
    "url": "https://bernhardwenzel.com/articles/clojure-spellchecker/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-313",
    "category": "Uncategorized",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Build A Simple Terminal Emulator In 100 Lines of Golang",
    "url": "https://ishuah.com/2021/03/10/build-a-terminal-emulator-in-100-lines-of-go/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-314",
    "category": "Uncategorized",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Let's Create a Simple Load Balancer",
    "url": "https://kasvith.me/posts/lets-create-a-simple-lb-go/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-315",
    "category": "Uncategorized",
    "rawLanguage": "Go",
    "languages": [
      "Go"
    ],
    "title": "Video Encoding from Scratch",
    "url": "https://github.com/kevmo314/codec-from-scratch",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-316",
    "category": "Uncategorized",
    "rawLanguage": "Java",
    "languages": [
      "Java"
    ],
    "title": "How to Build an Android Reddit App",
    "url": "https://www.youtube.com/playlist?list=PLgCYzUzKIBE9HUJU-upNvl3TRVAo9W47y",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-317",
    "category": "Uncategorized",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build Your Own Module Bundler - Minipack",
    "url": "https://github.com/ronami/minipack",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-318",
    "category": "Uncategorized",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Learn JavaScript Promises by Building a Promise from Scratch",
    "url": "https://levelup.gitconnected.com/understand-javascript-promises-by-building-a-promise-from-scratch-84c0fd855720",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-319",
    "category": "Uncategorized",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Implementing promises from scratch (TDD way)",
    "url": "https://www.mauriciopoppe.com/notes/computer-science/computation/promises/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-320",
    "category": "Uncategorized",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Implement your own — call(), apply() and bind() method in JavaScript",
    "url": "https://blog.usejournal.com/implement-your-own-call-apply-and-bind-method-in-javascript-42cc85dba1b",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-321",
    "category": "Uncategorized",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "JavaScript Algorithms and Data Structures",
    "url": "https://github.com/trekhleb/javascript-algorithms",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-322",
    "category": "Uncategorized",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build a ride hailing app with React Native",
    "url": "https://pusher.com/tutorials/ride-hailing-react-native",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-323",
    "category": "Uncategorized",
    "rawLanguage": "JavaScript",
    "languages": [
      "JavaScript"
    ],
    "title": "Build Your Own AdBlocker in (Literally) 10 Minutes",
    "url": "https://levelup.gitconnected.com/building-your-own-adblocker-in-literally-10-minutes-1eec093b04cd",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-324",
    "category": "Uncategorized",
    "rawLanguage": "Kotlin",
    "languages": [
      "Kotlin"
    ],
    "title": "Build Your Own Cache",
    "url": "https://github.com/kezhenxu94/cache-lite",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-325",
    "category": "Uncategorized",
    "rawLanguage": "Lua",
    "languages": [
      "Lua"
    ],
    "title": "Building a CDN from Scratch to Learn about CDN",
    "url": "https://github.com/leandromoreira/cdn-up-and-running",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-326",
    "category": "Uncategorized",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a Redis Protocol Parser",
    "url": "https://xmonader.github.io/nimdays/day12_resp.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-327",
    "category": "Uncategorized",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a Build system",
    "url": "https://xmonader.github.io/nimdays/day11_buildsystem.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-328",
    "category": "Uncategorized",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a MiniTest Framework",
    "url": "https://xmonader.github.io/nimdays/day08_minitest.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-329",
    "category": "Uncategorized",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a DMIDecode Parser",
    "url": "https://xmonader.github.io/nimdays/day01_dmidecode.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-330",
    "category": "Uncategorized",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a INI Parser",
    "url": "https://xmonader.github.io/nimdays/day05_iniparser.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-331",
    "category": "Uncategorized",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a Link Checker",
    "url": "https://xmonader.github.io/nimdays/day04_asynclinkschecker.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-332",
    "category": "Uncategorized",
    "rawLanguage": "Nim",
    "languages": [
      "Nim"
    ],
    "title": "Writing a URL Shortening Service",
    "url": "https://xmonader.github.io/nimdays/day07_shorturl.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-333",
    "category": "Uncategorized",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Build a static site generator in 40 lines with Node.js",
    "url": "https://www.webdevdrops.com/en/build-static-site-generator-nodejs-8969ebe34b22/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-334",
    "category": "Uncategorized",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Building A Simple Single Sign On(SSO) Server And Solution From Scratch In Node.js.",
    "url": "https://codeburst.io/building-a-simple-single-sign-on-sso-server-and-solution-from-scratch-in-node-js-ea6ee5fdf340",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-335",
    "category": "Uncategorized",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "How to create a real-world Node CLI app with Node",
    "url": "https://medium.freecodecamp.org/how-to-create-a-real-world-node-cli-app-with-node-391b727bbed3",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-336",
    "category": "Uncategorized",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Build a DNS Server in Node.js",
    "url": "https://engineerhead.github.io/dns-server/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-337",
    "category": "Uncategorized",
    "rawLanguage": "Node.js",
    "languages": [
      "Node.js"
    ],
    "title": "Build a Synchronization Engine with Node.js and Y.js",
    "url": "https://greenvitriol.com/posts/sync-engine-for-everyone",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-338",
    "category": "Uncategorized",
    "rawLanguage": "PHP",
    "languages": [
      "PHP"
    ],
    "title": "Write your own MVC from scratch in PHP",
    "url": "https://chaitya62.github.io/2018/04/29/Writing-your-own-MVC-from-Scratch-in-PHP.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-339",
    "category": "Uncategorized",
    "rawLanguage": "PHP",
    "languages": [
      "PHP"
    ],
    "title": "Make your own blog",
    "url": "https://ilovephp.jondh.me.uk/en/tutorial/make-your-own-blog",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-340",
    "category": "Uncategorized",
    "rawLanguage": "PHP",
    "languages": [
      "PHP"
    ],
    "title": "Modern PHP Without a Framework",
    "url": "https://kevinsmith.io/modern-php-without-a-framework",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-341",
    "category": "Uncategorized",
    "rawLanguage": "PHP",
    "languages": [
      "PHP"
    ],
    "title": "Code a Web Search Engine in PHP",
    "url": "https://boyter.org/2013/01/code-for-a-search-engine-in-php-part-1/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-342",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Build a Deep Learning Library",
    "url": "https://www.youtube.com/watch?v=o64FV-ez6Gw",
    "format": "Video",
    "extra": "video"
  },
  {
    "id": "tut-343",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "How to Build a Kick-Ass Mobile Document Scanner in Just 5 Minutes",
    "url": "https://www.pyimagesearch.com/2014/09/01/build-kick-ass-mobile-document-scanner-just-5-minutes/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-344",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Continuous Integration System",
    "url": "http://aosabook.org/en/500L/a-continuous-integration-system.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-345",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Recommender Systems in Python: Beginner Tutorial",
    "url": "https://www.datacamp.com/community/tutorials/recommender-systems-python",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-346",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Write SMS-spam detector with Scikit-learn",
    "url": "https://medium.com/@kopilov.vlad/detect-sms-spam-in-kaggle-with-scikit-learn-5f6afa7a3ca2",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-347",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "A Simple Content-Based Recommendation Engine in Python",
    "url": "http://blog.untrod.com/2016/06/simple-similar-products-recommendation-engine-in-python.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-348",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Stock Market Predictions with LSTM in Python",
    "url": "https://www.datacamp.com/community/tutorials/lstm-python-stock-market",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-349",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Building a simple Generative Adversarial Network (GAN) using Tensorflow",
    "url": "https://blog.paperspace.com/implementing-gans-in-tensorflow/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-350",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Learn ML Algorithms by coding: Decision Trees",
    "url": "https://lethalbrains.com/learn-ml-algorithms-by-coding-decision-trees-439ac503c9a4",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-351",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "JSON Decoding Algorithm",
    "url": "https://github.com/cheery/json-algorithm",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-352",
    "category": "Uncategorized",
    "rawLanguage": "Python",
    "languages": [
      "Python"
    ],
    "title": "Build your own Git plugin with python",
    "url": "https://joshburns-xyz.vercel.app/posts/build-your-own-git-plugin",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-353",
    "category": "Uncategorized",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "A Pedometer in the Real World",
    "url": "http://aosabook.org/en/500L/a-pedometer-in-the-real-world.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-354",
    "category": "Uncategorized",
    "rawLanguage": "Ruby",
    "languages": [
      "Ruby"
    ],
    "title": "Creating a Linux Desktop application with Ruby",
    "url": "https://iridakos.com/tutorials/2018/01/25/creating-a-gtk-todo-application-with-ruby",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-355",
    "category": "Uncategorized",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Building a DNS server in Rust",
    "url": "https://github.com/EmilHernvall/dnsguide/blob/master/README.md",
    "format": "Repository",
    "extra": ""
  },
  {
    "id": "tut-356",
    "category": "Uncategorized",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "Writing Scalable Chat Service from Scratch",
    "url": "https://nbaksalyar.github.io/2015/07/10/writing-chat-in-rust.html",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-357",
    "category": "Uncategorized",
    "rawLanguage": "Rust",
    "languages": [
      "Rust"
    ],
    "title": "WebGL + Rust: Basic Water Tutorial",
    "url": "https://www.chinedufn.com/3d-webgl-basic-water-tutorial/",
    "format": "Article",
    "extra": ""
  },
  {
    "id": "tut-358",
    "category": "Uncategorized",
    "rawLanguage": "TypeScript",
    "languages": [
      "TypeScript"
    ],
    "title": "Tiny Package Manager: Learns how npm or Yarn works",
    "url": "https://github.com/g-plane/tiny-package-manager",
    "format": "Repository",
    "extra": ""
  }
];
