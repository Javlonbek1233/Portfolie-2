import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, Shield, Cpu, Activity, ArrowRight } from 'lucide-react';

// Modular Sections
import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadPercent, setLoadPercent] = useState(0);
  const [currentLog, setCurrentLog] = useState('BOOTING_PRODIGY_OS...');

  const logs = [
    'BOOTING_PRODIGY_OS...',
    'RESOLVING PORTFOLIO DIRECTORIES...',
    'CONNECTING DECENTRALIZED DATA NODES...',
    'INDEXING TSX COMPILED MODULES...',
    'DEPLOYING CANVASES & VECTOR NETWORKS...',
    'SYNCHRONIZING GEMINI DIGITAL CLONE...',
    'SYSTEM_SYNCHRONY_COMPLETE // 100%'
  ];

  useEffect(() => {
    // Progress increment timer
    const interval = setInterval(() => {
      setLoadPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 18);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Select log based on percentage landmarks
    const idx = Math.min(
      logs.length - 1,
      Math.floor((loadPercent / 100) * logs.length)
    );
    setCurrentLog(logs[idx]);

    if (loadPercent >= 100) {
      const wait = setTimeout(() => {
        setLoading(false);
      }, 700);
      return () => clearTimeout(wait);
    }
  }, [loadPercent]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          // Booting Terminal screen
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-[#02050e] flex flex-col items-center justify-center p-6 text-slate-300 font-mono"
          >
            <div className="w-full max-w-md p-6 rounded-2xl border border-white/5 bg-black/40 shadow-2xl relative overflow-hidden">
              {/* Card headers */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3.5 mb-5 select-none">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-500/50 animate-pulse" />
                </div>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold flex items-center gap-1">
                  <Activity className="w-3 h-3 text-cyan-400" /> SYS_CHECK
                </span>
              </div>

              {/* Status visual box */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" /> Core Kernel
                  </span>
                  <span className="text-xs font-bold text-green-400 font-semibold">[READY]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-purple-400" /> Security Layer
                  </span>
                  <span className="text-xs font-bold text-green-400 font-semibold">[SECURE]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" /> AI Co-Processor
                  </span>
                  <span className="text-xs font-bold text-cyan-400 font-semibold">[ONLINE]</span>
                </div>
              </div>

              {/* Loader bars */}
              <div className="mt-8">
                <div className="flex justify-between text-[11px] text-slate-400 mb-1.5 font-bold">
                  <span>DEPLOYMENT</span>
                  <span className="text-cyan-400">{loadPercent}%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full transition-all duration-100 ease-out shadow-lg shadow-cyan-400/40"
                    style={{ width: `${loadPercent}%` }}
                  />
                </div>
              </div>

              {/* Dynamic activity diagnostics log */}
              <div className="mt-6 p-3.5 rounded-xl bg-slate-950 border border-white/5 h-16 flex items-center">
                <span className="text-[10px] text-[#06b6d4] leading-relaxed uppercase tracking-wider">
                  &gt; {currentLog}
                </span>
              </div>

              {/* Decorative side accent glow */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
            </div>
          </motion.div>
        ) : (
          // Full Portfolio Application Dashboard
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative font-sans text-slate-200"
          >
            {/* Custom interactive elements */}
            <CustomCursor />
            <ParticleBackground />

            {/* Top Navigation Row */}
            <Header />

            {/* Scrolling Core content sections */}
            <main className="relative z-10 w-full overflow-x-hidden">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Timeline />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
