import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA } from '../data';
import { Layers, Database, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'tools'>('all');

  const tabs = [
    { id: 'all', label: 'All Tech', icon: Sparkles },
    { id: 'frontend', label: 'Front-End', icon: Layers },
    { id: 'backend', label: 'Back-End', icon: Database },
    { id: 'tools', label: 'Tools', icon: Wrench },
  ];

  const filteredSkills = activeTab === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="relative py-24 border-t border-white/5 bg-transparent">
      {/* Visual neon orb accent */}
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
            02 // POWER_GRID
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            My Tech <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Power Stack</span>
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            A comprehensive list of systems, languages, and frameworks that I have mastered through structured learning and extensive freelance engineering.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'all' | 'frontend' | 'backend' | 'tools')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/20 scale-105'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/5 hover:border-white/10'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid of skill meters */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={skill.name}
                className="p-6 rounded-2xl glass-card relative group hover:border-white/10 transition-colors"
                style={{
                  boxShadow: `0 0 0px ${skill.color}00`,
                }}
                whileHover={{
                  boxShadow: `0 0 25px ${skill.color}15`,
                  borderColor: `${skill.color}35`
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <span 
                      className="w-2.5 h-2.5 rounded-full shadow-lg"
                      style={{ 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 8px ${skill.color}`
                      }}
                    />
                    <h3 className="font-display font-bold text-slate-200 group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-slate-400 font-bold">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar tracks */}
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`
                    }}
                  />
                </div>

                {/* Subtle dynamic background light */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}08, transparent 70%)`
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
