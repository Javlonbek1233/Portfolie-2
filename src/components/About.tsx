import { motion } from 'motion/react';
import { Target, Heart, Award, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Lines of Web Code', value: '100K+', icon: Target, color: 'text-cyan-400' },
    { label: 'Committed Projects', value: '30+', icon: Award, color: 'text-purple-400' },
    { label: 'Hours Developing', value: '2500+', icon: Heart, color: 'text-blue-400' },
  ];

  return (
    <section id="about" className="relative py-24 overflow-hidden border-t border-white/5 bg-transparent">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center md:text-left md:flex md:items-center justify-between gap-12">
          {/* Main heading */}
          <div className="md:w-1/2">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
              01 // THE ARCHITECT
            </span>
            <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              A 16-Year-Old <br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Digital Creator
              </span>
            </h2>
            <p className="mt-6 text-sm sm:text-base text-slate-400 leading-relaxed">
              My name is <strong className="text-white">Xaitboyev Javlonbek</strong>. I am a highly motivated web developer based in Uzbekistan. I began my coding quest around four years ago, motivated by a simple curiosity to understand how software works. 
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              What started as small text templates quickly exploded into a passion for reactive ecosystems, fast state controllers, and interactive visuals. Being a young programmer has given me a fresh, continuous learning state of mind. I stay up-to-date with new tools and frameworks, with a particular love for <strong className="text-cyan-400">Next.js</strong>, <strong className="text-cyan-400">React</strong>, and highly structured <strong className="text-cyan-400">TypeScript</strong>.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                <Sparkles className="w-5 h-5 text-purple-400 shrink-0" />
                <div>
                  <h4 className="font-display font-medium text-white text-sm">Adaptive Mindset</h4>
                  <p className="text-xs text-slate-400 mt-1">Quick to adopt cutting edge standards (ESNext, React 19, Tailwind v4).</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex gap-3">
                <Target className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <h4 className="font-display font-medium text-white text-sm">Full-Stack Scope</h4>
                  <p className="text-xs text-slate-400 mt-1">Competent handling frontend pixels and secure express database architectures.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graphical display cards */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex flex-col justify-center gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="p-6 rounded-2xl glass-card relative group hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className="absolute top-4 right-4 p-1 rounded-lg bg-white/5 border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                      <Icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <span className="block text-3xl font-display font-bold text-white mt-4 tracking-tight group-hover:scale-105 origin-left transition-transform duration-350">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-sans text-slate-400 mt-2 leading-short">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Glowing terminal widget */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-5 rounded-2xl border border-white/5 bg-black/40 font-mono text-xs text-slate-400"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-2.5 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/50" />
                </div>
                <span className="text-[10px] text-slate-500">status_terminal.sh</span>
              </div>
              <p className="text-cyan-400/90">&gt; npm run query --author="javlonbek"</p>
              <p className="mt-1.5 text-slate-300">
                &gt; Searching nodes... Loaded 1 architect details.
              </p>
              <p className="text-slate-500 mt-1">
                // Age: 16 | Location: Uzbekistan | Focus: Next.js + React Full-Stack Solutions
              </p>
              <p className="text-green-400/90 mt-1.5">&gt; System optimization 100% complete.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
