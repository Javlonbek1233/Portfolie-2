import { motion } from 'motion/react';
import { TIMELINE_DATA } from '../data';
import { BookOpen, Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Timeline() {
  const getIcon = (type: 'learning' | 'experience' | 'achievement') => {
    switch (type) {
      case 'learning':
        return BookOpen;
      case 'experience':
        return Briefcase;
      case 'achievement':
        return GraduationCap;
    }
  };

  const getAccentColor = (type: 'learning' | 'experience' | 'achievement') => {
    switch (type) {
      case 'learning':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'experience':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      case 'achievement':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
    }
  };

  return (
    <section id="timeline" className="relative py-24 bg-transparent border-t border-white/5">
      {/* Visual neon light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
            04 // PROGRESS_LOG
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Journey & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            A linear trace of my coding study history, micro-SaaS achievements, and professional visual engineering, proving how my age is second to my capability.
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative border-l border-white/5 pl-6 sm:pl-10 ml-4.5 space-y-12">
          {TIMELINE_DATA.map((item, index) => {
            const Icon = getIcon(item.type);
            const accentClass = getAccentColor(item.type);

            return (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={item.id}
                className="relative group pr-4"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[45px] sm:-left-[53px] top-1.5 flex items-center justify-center">
                  <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${accentClass}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl glass-card relative group hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#030712] border border-white/5 font-mono text-xs text-cyan-400 font-semibold w-fit">
                      <Calendar className="w-3 h-3" />
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-widest leading-none">
                      {item.organization}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400/[0.01] to-purple-500/[0.01] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
