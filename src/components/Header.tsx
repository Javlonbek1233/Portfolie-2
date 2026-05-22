import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Github, Linkedin, MessageSquareCode } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Hero', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-45 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-[#020617]/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' 
          : 'py-5 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Console Identifier */}
        <a href="#hero" className="flex items-center gap-2.5 font-display font-bold text-lg text-white group">
          <div className="relative flex items-center justify-center w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-cyan-400 group-hover:scale-105 transition-transform duration-350">
            <Terminal className="w-4.5 h-4.5 text-black stroke-[2.5]" />
          </div>
          <span className="tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Javlonbek<span className="text-cyan-400">.dev</span>
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] text-purple-400 border border-purple-500/30 px-1.5 py-0.5 rounded ml-2 bg-purple-900/10">
            AGE // 16
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-sans text-slate-300 hover:text-cyan-400 tracking-wide transition-colors relative py-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right side interactions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Javlonbek1233"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-bold tracking-wider text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded transition-colors overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <MessageSquareCode className="w-3.5 h-3.5" />
              HIRE_ME_
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-300 hover:text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#020617]/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-2 text-base font-sans font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="h-px bg-white/5 my-2" />
              <div className="flex items-center justify-between pb-2">
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Javlonbek1233"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-bold text-slate-900 bg-cyan-400 rounded"
                >
                  <MessageSquareCode className="w-3.5 h-3.5" />
                  HIRE_ME_
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
