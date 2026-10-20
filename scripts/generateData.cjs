const fs = require('fs');

const raw = fs.readFileSync('tutorials_parsed.json', 'utf-8');
const data = JSON.parse(raw);

// Enhance categories with metadata
const categoryMeta = {
  'Distributed Systems': {
    icon: 'Network',
    color: 'from-blue-600 to-indigo-600',
    description: 'Build fault-tolerant, scalable networked services like Kafka and distributed logs.',
    level: 'Advanced',
    tags: ['Kafka', 'Consensus', 'Networking', 'Streaming']
  },
  '3D Renderer': {
    icon: 'Box',
    color: 'from-purple-600 to-pink-600',
    description: 'Master ray tracing, rasterization, shaders, and rendering 3D worlds from scratch.',
    level: 'Intermediate - Advanced',
    tags: ['Ray Tracing', 'OpenGL', 'Rasterization', 'Linear Algebra']
  },
  'AI Model': {
    icon: 'Brain',
    color: 'from-violet-600 to-purple-600',
    description: 'Train and infer LLMs, diffusion models, and RAG search pipelines without opaque libraries.',
    level: 'Intermediate - Advanced',
    tags: ['LLMs', 'Diffusion', 'Transformers', 'RAG']
  },
  'Augmented Reality': {
    icon: 'Glasses',
    color: 'from-amber-600 to-orange-600',
    description: 'Computer vision tracking, spatial anchors, and AR overlay experiences.',
    level: 'Intermediate',
    tags: ['ARKit', 'ARCore', 'OpenCV', 'Unity']
  },
  'BitTorrent Client': {
    icon: 'Share2',
    color: 'from-cyan-600 to-blue-600',
    description: 'Peer-to-peer protocols, Bencode serialization, tracker handshakes, and chunk verification.',
    level: 'Intermediate',
    tags: ['P2P', 'Bencode', 'Sockets', 'BitTorrent']
  },
  'Blockchain / Cryptocurrency': {
    icon: 'Coins',
    color: 'from-yellow-600 to-amber-600',
    description: 'Cryptographic hashing, consensus algorithms, wallets, and proof-of-work/stake chains.',
    level: 'Intermediate',
    tags: ['Cryptography', 'PoW', 'PoS', 'Ledger', 'Transactions']
  },
  'Bot': {
    icon: 'Bot',
    color: 'from-emerald-600 to-teal-600',
    description: 'Automate interactions for Discord, Telegram, Reddit, Slack, and IRC.',
    level: 'Beginner - Intermediate',
    tags: ['Discord', 'Telegram', 'Webhooks', 'Slack']
  },
  'Command-Line Tool': {
    icon: 'Terminal',
    color: 'from-green-600 to-emerald-600',
    description: 'Craft fast, ergonomic CLI utilities, argument parsers, and terminal visuals.',
    level: 'Beginner',
    tags: ['CLI', 'Terminal', 'POSIX', 'Productivity']
  },
  'Database': {
    icon: 'Database',
    color: 'from-blue-600 to-cyan-600',
    description: 'B-Trees, page caches, SQL engines, write-ahead logs, and Redis-style key-value stores.',
    level: 'Intermediate - Advanced',
    tags: ['B-Tree', 'Redis', 'SQL', 'Storage Engine', 'WAL']
  },
  'Docker': {
    icon: 'Container',
    color: 'from-sky-600 to-blue-600',
    description: 'Linux namespaces, cgroups, chroot, and layered filesystems.',
    level: 'Advanced',
    tags: ['Linux', 'Namespaces', 'Cgroups', 'Containers']
  },
  'Emulator / Virtual Machine': {
    icon: 'Cpu',
    color: 'from-indigo-600 to-violet-600',
    description: 'CHIP-8, GameBoy, NES, and custom bytecode virtual machines.',
    level: 'Intermediate - Advanced',
    tags: ['CHIP-8', 'GameBoy', 'NES', 'Opcodes', 'Assembly']
  },
  'Front-end Framework / Library': {
    icon: 'Layout',
    color: 'from-pink-600 to-rose-600',
    description: 'Virtual DOM reconciliation, state machines (Redux), JSX compilation, and reactive signals.',
    level: 'Beginner - Intermediate',
    tags: ['React', 'Virtual DOM', 'Redux', 'Reactivity', 'JSX']
  },
  'Game': {
    icon: 'Gamepad2',
    color: 'from-rose-600 to-red-600',
    description: 'Game loops, physics collision, tilemaps, Roguelikes, Tetris, and retro 2D/3D engines.',
    level: 'Beginner - Intermediate',
    tags: ['Game Loop', 'Roguelike', 'Tetris', 'SDL', 'Canvas']
  },
  'Git': {
    icon: 'GitBranch',
    color: 'from-orange-600 to-amber-600',
    description: 'Blob hashing, trees, commits, refs, index staging, and git object stores.',
    level: 'Intermediate',
    tags: ['Content Addressable', 'SHA-1', 'Objects', 'VCS']
  },
  'Memory Allocator': {
    icon: 'Binary',
    color: 'from-amber-600 to-yellow-600',
    description: 'Understand how malloc, free, heap fragmentation, and slab allocators work.',
    level: 'Advanced',
    tags: ['malloc', 'Heap', 'Virtual Memory', 'Low Level']
  },
  'Network Stack': {
    icon: 'Radio',
    color: 'from-teal-600 to-cyan-600',
    description: 'TCP/IP packet parsing, ARP, Ethernet frames, VPNs, and raw socket programming.',
    level: 'Advanced',
    tags: ['TCP/IP', 'Ethernet', 'Packets', 'Sockets']
  },
  'Neural Network': {
    icon: 'Sparkles',
    color: 'from-purple-600 to-pink-600',
    description: 'Backpropagation, tensors, perceptrons, convolutional layers, and autograd engines.',
    level: 'Intermediate - Advanced',
    tags: ['Autograd', 'Backprop', 'Tensors', 'CNN', 'Deep Learning']
  },
  'Operating System': {
    icon: 'HardDrive',
    color: 'from-slate-600 to-zinc-600',
    description: 'x86 bootloaders, kernel paging, interrupt tables, multitasking, and system calls.',
    level: 'Master',
    tags: ['Kernel', 'Bootloader', 'Interrupts', 'x86', 'ARM']
  },
  'Physics Engine': {
    icon: 'Orbit',
    color: 'from-cyan-600 to-teal-600',
    description: 'Rigid body dynamics, verlet integration, spatial partitioning, and impulse resolution.',
    level: 'Intermediate - Advanced',
    tags: ['Rigid Body', 'Collision', 'Verlet', 'Impulses']
  },
  'Processor': {
    icon: 'Microchip',
    color: 'from-indigo-600 to-blue-600',
    description: 'Verilog hardware design, RISC-V CPU cores, and FPGA synthesis.',
    level: 'Master',
    tags: ['RISC-V', 'Verilog', 'FPGA', 'ALU']
  },
  'Programming Language': {
    icon: 'Code',
    color: 'from-violet-600 to-indigo-600',
    description: 'Lexers, parsers, ASTs, bytecode interpreters, and optimizing compilers.',
    level: 'Intermediate - Master',
    tags: ['Lexer', 'Parser', 'AST', 'Compiler', 'Lisp', 'Interpreter']
  },
  'Regex Engine': {
    icon: 'SearchCode',
    color: 'from-fuchsia-600 to-purple-600',
    description: 'Thompsons NFA construction, DFA simulation, backtracking, and regular derivatives.',
    level: 'Intermediate',
    tags: ['NFA', 'DFA', 'Automata', 'Parsing']
  },
  'Search Engine': {
    icon: 'Search',
    color: 'from-blue-600 to-sky-600',
    description: 'Inverted indexes, vector space model, TF-IDF scoring, and crawlers.',
    level: 'Intermediate',
    tags: ['Inverted Index', 'TF-IDF', 'Ranking', 'Crawler']
  },
  'Shell': {
    icon: 'SquareTerminal',
    color: 'from-emerald-600 to-green-600',
    description: 'Process forks, execvp, pipeline pipes, file redirection, and signal handling.',
    level: 'Beginner - Intermediate',
    tags: ['fork', 'exec', 'Pipes', 'Signals', 'POSIX']
  },
  'Template Engine': {
    icon: 'FileCode2',
    color: 'from-amber-600 to-orange-600',
    description: 'String interpolation, variable scopes, loop constructs, and template caching.',
    level: 'Beginner',
    tags: ['Interpolation', 'AST', 'Compilation', 'HTML']
  },
  'Text Editor': {
    icon: 'FileEdit',
    color: 'from-teal-600 to-emerald-600',
    description: 'VT100 terminal escapes, gap buffers, piece tables, syntax highlighting, and Kilo clones.',
    level: 'Beginner - Intermediate',
    tags: ['Kilo', 'Terminal UI', 'Gap Buffer', 'Syntax Highlighting']
  },
  'Visual Recognition System': {
    icon: 'Eye',
    color: 'from-rose-600 to-pink-600',
    description: 'License plate readers, facial recognition pipelines, and computer vision classification.',
    level: 'Intermediate',
    tags: ['OpenCV', 'Face Detection', 'OCR', 'TensorFlow']
  },
  'Voxel Engine': {
    icon: 'Boxes',
    color: 'from-amber-600 to-yellow-600',
    description: 'Chunk meshing, greedy meshing, 3D block terrains like Minecraft.',
    level: 'Intermediate',
    tags: ['Voxel', 'Minecraft', 'Meshing', 'Chunks']
  },
  'Web Browser': {
    icon: 'Globe',
    color: 'from-sky-600 to-cyan-600',
    description: 'HTML tokenizers, CSS cascade layout engines, text flow, and paint trees.',
    level: 'Advanced',
    tags: ['DOM', 'CSS Engine', 'Layout', 'Rendering']
  },
  'Web Server': {
    icon: 'Server',
    color: 'from-indigo-600 to-blue-600',
    description: 'HTTP/1.1 parsing, socket listen loops, request routing, headers, and async IO.',
    level: 'Beginner - Intermediate',
    tags: ['HTTP', 'TCP', 'Routing', 'Headers', 'Sockets']
  },
  'Uncategorized': {
    icon: 'Sparkle',
    color: 'from-slate-600 to-gray-600',
    description: 'Fascinating miscellaneous builds: DNS servers, video players, VR headsets, load balancers, and more.',
    level: 'All Levels',
    tags: ['DNS', 'Load Balancer', 'NAND to Tetris', 'Package Manager']
  }
};

const output = `// Auto-generated from README.md - 358 tutorials across 31 categories
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

export const CATEGORIES_META: Record<string, CategoryMeta> = ${JSON.stringify(
  data.categories.reduce((acc, cat) => {
    const meta = categoryMeta[cat] || {
      icon: 'Code',
      color: 'from-indigo-600 to-blue-600',
      description: 'Hands-on guide to building software systems from scratch.',
      level: 'Intermediate',
      tags: ['Engineering', 'Hands-on']
    };
    acc[cat] = {
      name: cat,
      ...meta,
      count: data.tutorials.filter(t => t.category === cat).length
    };
    return acc;
  }, {}),
  null,
  2
)};

export const ALL_TUTORIALS: Tutorial[] = ${JSON.stringify(data.tutorials, null, 2)};
`;

fs.writeFileSync('src/data/tutorialsData.ts', output);
console.log('Successfully generated src/data/tutorialsData.ts!');
