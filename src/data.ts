import { Project, Skill, TimelineItem } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'scintillating-tartufo',
    title: 'Tartufo Creative Studio',
    description: 'An immersive interactive design studio capturing ultra-smooth scroll-triggered motion curves, bold geometric grid typography, and premium glassmorphic cards.',
    longDescription: 'Developed as a high-fidelity visual experience representing modular aesthetic layouts. Employs advanced state variables across animations, premium font sets, and responsive layout structures.',
    image: 'https://images.unsplash.com/photo-1541462608141-2f58c4809c57?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Bento Layouts'],
    liveUrl: 'https://scintillating-tartufo-cd678f.netlify.app',
    githubUrl: 'https://github.com/Javlonbek1233/scintillating-tartufo',
    featured: true,
    category: 'Front-End'
  },
  {
    id: 'astonishing-frangipane',
    title: 'Frangipane Modern SaaS',
    description: 'A fully loaded, blazing fast cloud management dashboard featuring rich analytical charting modules, adaptive workspace metrics, and user permission matrices.',
    longDescription: 'Frangipane is a state-wide collaborative portal supporting multiple workspace nodes, team permission filters, performance indicators, and asynchronous activity logs.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Express'],
    liveUrl: 'https://astonishing-frangipane-b47580.netlify.app',
    githubUrl: 'https://github.com/Javlonbek1233/astonishing-frangipane',
    featured: true,
    category: 'Full-Stack'
  },
  {
    id: 'bejewelled-eclair',
    title: 'Eclair Premium Retail',
    description: 'An elegant high-contrast fashion and jewelry showcase platform featuring rich product filtering, immersive checkout experiences, and fluid transitions.',
    longDescription: 'Eclair integrates beautiful visual detail modals, precise cart operations with persistent browser memory, search indexes, and custom dynamic item sliders.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'State Persist', 'Motion'],
    liveUrl: 'https://bejewelled-eclair-a3180a.netlify.app',
    githubUrl: 'https://github.com/Javlonbek1233/bejewelled-eclair',
    featured: true,
    category: 'Front-End'
  },
  {
    id: 'stellar-lollipop',
    title: 'Stellar Lollipop Node',
    description: 'A futuristic cybernetic interface using particle effects for voice and text feedback, ideal for monitoring peripheral micro-services or smart assistants.',
    longDescription: 'Stellar Lollipop embeds real-time simulation metrics, interactive layout structures, gorgeous glowing state cards, and a sleek central operational panel.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Motion'],
    liveUrl: 'https://stellar-lollipop-cc0886.netlify.app',
    githubUrl: 'https://github.com/Javlonbek1233/stellar-lollipop',
    featured: false,
    category: 'AI'
  },
  {
    id: 'phenomenal-cucurucho',
    title: 'Cucurucho Digital Space',
    description: 'A highly responsive, terminal-inspired decentralized directory charting community assets, technical certifications, and smart decentralized proofs.',
    longDescription: 'An interactive database client tracking security indicators, transaction receipts, cryptographic proof logs, and premium dark-mode custom grids.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Solidity', 'Web3.js'],
    liveUrl: 'https://phenomenal-cucurucho-0afb15.netlify.app',
    githubUrl: 'https://github.com/Javlonbek1233/phenomenal-cucurucho',
    featured: false,
    category: 'Web3'
  },
  {
    id: 'quiet-pony',
    title: 'QuietPony Audio Space',
    description: 'Minimalist serene audio application leveraging low-overhead web synthesis, custom volume sliders, and beautiful visualizer wave ripples.',
    longDescription: 'QuietPony allows custom playlist management, customizable soundscapes, integrated interactive play histories, and clean lightweight audio controls.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Web Audio API', 'State Hooks'],
    liveUrl: 'https://quiet-pony-2eb407.netlify.app',
    githubUrl: 'https://github.com/Javlonbek1233/quiet-pony',
    featured: false,
    category: 'Front-End'
  },
  {
    id: 'aether-ide',
    title: 'AetherIDE Terminal',
    description: 'An in-browser collaborative web-based IDE featuring real-time AI-powered code completion, compiler sandbox, and audio rooms.',
    longDescription: 'AetherIDE is an advanced coding environment built in React and TypeScript. It features full editor capabilities, custom virtual filesystem, built-in node-based runtime execution engine, and real-time multiplayer socket rooms.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Socket.io', 'WebRTC'],
    liveUrl: 'https://aether-ide.example.com',
    githubUrl: 'https://github.com/Javlonbek1233/aether-ide',
    featured: false,
    category: 'Full-Stack'
  }
];

export const SKILLS_DATA: Skill[] = [
  { name: 'Next.js', level: 95, category: 'frontend', color: '#3b82f6' },
  { name: 'React', level: 98, category: 'frontend', color: '#06b6d4' },
  { name: 'TypeScript', level: 92, category: 'frontend', color: '#8b5cf6' },
  { name: 'Tailwind CSS', level: 95, category: 'frontend', color: '#06b6d4' },
  { name: 'Node.js', level: 88, category: 'backend', color: '#3b82f6' },
  { name: 'Express.js', level: 90, category: 'backend', color: '#8b5cf6' },
  { name: 'MongoDB', level: 85, category: 'backend', color: '#3b82f6' },
  { name: 'Firebase', level: 90, category: 'backend', color: '#06b6d4' },
  { name: 'Git & GitHub', level: 93, category: 'tools', color: '#8b5cf6' }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'item-1',
    year: '2022',
    title: 'The Spark & Foundations',
    organization: 'Self-Study',
    description: 'Fell in love with web development. Started with simple HTML, CSS, and basic JavaScript. Mastered layouts and algorithmic fundamentals within months.',
    type: 'learning'
  },
  {
    id: 'item-2',
    year: '2023',
    title: 'TypeScript & React Breakthrough',
    organization: 'Self-Study / Community',
    description: 'Graduated to TypeScript and React architectures. Started building fully responsive frontend dashboards and realized the power of modern component design.',
    type: 'learning'
  },
  {
    id: 'item-3',
    year: '2024',
    title: 'Full-Stack Masterclass',
    organization: 'Independent Projects',
    description: 'Explored backend technologies. Set up express-based API gateways, connected secure non-relational MongoDB instances, and integrated Firebase for fast state delivery.',
    type: 'experience'
  },
  {
    id: 'item-4',
    year: '2025',
    title: 'Freelance & Applet Inception',
    organization: 'Freelancing Platforms / GitHub',
    description: 'Began building bespoke micro-SaaS web portals, collaborative sandboxes, and modern animated websites for local teams e.g., Uzbekistan web designs.',
    type: 'experience'
  },
  {
    id: 'item-5',
    year: '2026',
    title: 'Next-Gen Cyber Architectures',
    organization: 'Personal Milestone',
    description: 'At age 16, building scalable and secure systems using Vite, Next.js, and high performance animation tools (GSAP/Motion) to craft high-fidelity visual interactions.',
    type: 'achievement'
  }
];
