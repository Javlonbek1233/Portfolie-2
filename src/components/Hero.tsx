import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Download, ArrowUpRight, Cpu, Layers, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState('');
  const roles = [
    'Full-Stack Developer',
    'Front-End Engineer',
    'Next.js Enthusiast',
    'Creative Web Architect',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedTitle(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 35);
    } else {
      timer = setTimeout(() => {
        setTypedTitle(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 75);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen py-32 flex items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 -translate-x-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Interactive Background Grid Grid Line Lines */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        {/* Floating Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-950/20 text-cyan-400 text-xs font-mono mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          SYSTEMS_READY_FOR_INNOVATION
        </motion.div>

        {/* Master Heading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm md:text-base font-mono tracking-widest text-[#06b6d4] uppercase"
        >
          Hi, I am Xaitboyev Javlonbek _
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 font-display font-bold text-4xl sm:text-6xl md:text-8xl text-white tracking-tight leading-none"
        >
          Visualizing the <br />
          <span className="lg:inline bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
            Future of Web
          </span>
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-2 h-8 font-mono text-lg md:text-2xl text-slate-300"
        >
          <span className="text-slate-400">&gt;</span>
          <span className="text-white font-semibold">{typedTitle}</span>
          <span className="w-2.5 h-6 bg-cyan-400 animate-pulse ml-0.5 inline-block" />
        </motion.div>

        {/* Bio summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 max-w-2xl text-sm md:text-base text-slate-400 leading-relaxed font-sans"
        >
          A 16-year-old passionate Full-Stack developer based in Uzbekistan. I combine clean visual code and cutting-edge technologies to engineer interactive, high-performance web products.
        </motion.p>

        {/* Core Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4.5"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-6 py-3.5 text-sm font-sans font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg overflow-hidden transition-colors"
          >
            <span>Explore My Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-mono text-slate-300 border border-slate-700 hover:border-slate-400 hover:text-white rounded-lg transition-colors"
          >
            <Terminal className="w-4 h-4" />
            CONNECT_NOW
          </a>
        </motion.div>

        {/* Floating tech badges */}
        <div className="absolute inset-x-0 bottom-12 flex justify-center gap-8 text-xs text-slate-500/80 font-mono tracking-widest select-none pointer-events-none flex-wrap px-6">
          <div className="flex items-center gap-1.5"><Layers className="w-3.5 h-3.5 text-blue-500" /> VITE // SPEED</div>
          <div className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-purple-500" /> FULL_STACK // SCALE</div>
          <div className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-cyan-500" /> UI_UX // CRAFT</div>
        </div>
      </div>
    </section>
  );
}
