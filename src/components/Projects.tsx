import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { Github, ExternalLink, Code2, Layers3, X } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Full-Stack' | 'Front-End' | 'Web3' | 'AI'>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories: ('All' | 'Full-Stack' | 'Front-End' | 'Web3' | 'AI')[] = [
    'All', 'Full-Stack', 'Front-End', 'Web3', 'AI'
  ];

  const filteredProjects = filter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <section id="projects" className="relative py-24 bg-transparent border-t border-white/5">
      {/* Background neon elements */}
      <div className="absolute top-1/3 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
            03 // PORTFOLIO
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Selected <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Digital Works</span>
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            A handpicked registry of web systems that demonstrate my core focus on real-time integrations, interactive client layouts, and scalable fullstack backends.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-sans font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-600 text-slate-900 font-bold glow-cyan scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid List */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45 }}
                key={project.id}
                className="group rounded-2xl overflow-hidden glass-card relative flex flex-col justify-between border border-white/5 hover:border-cyan-500/25 transition-all duration-300"
              >
                <div>
                  {/* Aspect image frame */}
                  <div className="relative aspect-video overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />
                    
                    {/* Category Label */}
                    <span className="absolute top-4 left-4 px-3 py-1 rounded bg-[#030712]/80 backdrop-blur-md border border-white/5 text-[10px] font-mono font-bold tracking-widest text-[#06b6d4]">
                      {project.category}
                    </span>
                  </div>

                  {/* Body textuals */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-lg text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech stack pills */}
                    <div className="mt-4.5 flex flex-wrap gap-2">
                      {project.tech.map((term) => (
                        <span
                          key={term}
                          className="px-2 py-0.5 rounded bg-white/5 text-[9px] font-mono text-slate-300 hover:bg-white/10"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Foot interactions */}
                <div className="p-6 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-400 hover:text-cyan-400 cursor-none"
                  >
                    <Layers3 className="w-3.5 h-3.5" />
                    SPECS_
                  </button>
                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 px-2.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-[11px] font-mono flex items-center gap-1 cursor-none"
                        title="GitHub Code"
                      >
                        <Github className="w-3.5 h-3.5" />
                        SRC
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1 px-2.5 rounded bg-cyan-400/10 hover:bg-cyan-400/20 text-cyan-400 text-[11px] font-mono flex items-center gap-1 cursor-none"
                        title="Live Preview"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        LIVE
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic description detail modal */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveProjectModal(null)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              />

              {/* Box frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-2xl rounded-2xl glass-card overflow-hidden shadow-2xl z-10"
              >
                {/* Header Image */}
                <div className="relative aspect-video w-full bg-slate-900/60">
                  <img
                    src={activeProjectModal.image}
                    alt={activeProjectModal.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent" />
                  
                  {/* Close trigger button */}
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-slate-300 hover:text-white border border-white/5 cursor-none"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Content body layout */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-cyan-950 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                      {activeProjectModal.category}
                    </span>
                  </div>
                  <h3 className="mt-2 font-display font-medium text-2xl text-white">
                    {activeProjectModal.title}
                  </h3>
                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {activeProjectModal.longDescription || activeProjectModal.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-xs font-mono text-slate-400 uppercase tracking-widest">// STACK_DEPLOYED</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {activeProjectModal.tech.map((term) => (
                        <span
                          key={term}
                          className="px-2.5 py-1 rounded bg-white/5 text-xs font-mono text-slate-300"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions summary */}
                  <div className="mt-8 flex items-center justify-end gap-3.5 border-t border-white/5 pt-5">
                    {activeProjectModal.githubUrl && (
                      <a
                        href={activeProjectModal.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 text-xs font-mono cursor-none"
                      >
                        <Github className="w-4 h-4" />
                        VIEW_CODE_GIT
                      </a>
                    )}
                    {activeProjectModal.liveUrl && (
                      <a
                        href={activeProjectModal.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-xs font-mono cursor-none"
                      >
                        <ExternalLink className="w-4 h-4" />
                        LAUNCH_PREVIEW_
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
