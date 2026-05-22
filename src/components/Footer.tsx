import { Terminal, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-[#020617]/80 backdrop-blur-md border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding indicator */}
        <div className="flex items-center gap-2 font-display font-bold text-sm text-white">
          <Terminal className="w-4 h-4 text-cyan-400 stroke-[2.5]" />
          <span>Xaitboyev Javlonbek <span className="text-cyan-400">© {currentYear}</span></span>
        </div>

        {/* Status latency tag */}
        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500">
          <div className="flex items-center gap-1.5 border border-white/5 bg-white/[0.01] px-2.5 py-1 rounded">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span>CORE // ONLINE</span>
          </div>
          <div className="flex items-center gap-1.5 border border-white/5 bg-white/[0.01] px-2.5 py-1 rounded">
            <span>PING: 16ms</span>
          </div>
        </div>

        {/* Heart built by developer */}
        <p className="text-xs text-slate-500 flex items-center gap-1.5">
          <span>Engineered with React, Motion &</span>
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
          <span>by Javlonbek</span>
        </p>

      </div>
    </footer>
  );
}
