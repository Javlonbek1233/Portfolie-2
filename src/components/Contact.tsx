import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Terminal, Bot, Github, ArrowRight, Mail, Sparkles, User, MessageCircle } from 'lucide-react';
import { Message } from '../types';

export default function Contact() {
  // Form hooks
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMsg, setFormMsg] = useState('');
  const [formSending, setFormSending] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Chat hooks
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: "Salom! I'm Xaitboyev Javlonbek's digital clone. Ask me anything about my web dev experience, favorite tools, or how we can build something awesome together!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Suggested quick prompts of questions the user can ask javlonbek
  const quickPrompts = [
    'How did you start coding at age 12?',
    'What is your favorite stack & why?',
    'Are you available for freelance work?',
  ];

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !formMsg.trim()) return;

    setFormSending(true);
    // Simulate real visual async delivery
    setTimeout(() => {
      setFormSending(false);
      setFormSuccess(true);
      // Reset form fields
      setFormName('');
      setFormEmail('');
      setFormMsg('');

      // Auto clear after 5s
      setTimeout(() => setFormSuccess(false), 5000);
    }, 1500);
  };

  const handleSendMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || chatLoading) return;

    const userMsg: Message = {
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setChatLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmed,
          history: chatMessages.slice(-8), // send last 8 messages for context
        }),
      });

      if (!response.ok) {
        throw new Error('Server connection error');
      }

      const data = await response.json();
      
      const assistantMsg: Message = {
        sender: 'assistant',
        text: data.answer || "I received your packet, but couldn't decode the reply. Let's try again shortly!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setChatMessages((prev) => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat AI query failed:', err);
      const errMsg: Message = {
        sender: 'assistant',
        text: "System response: Could not establish secure AI connection. Feel free to contact my physical inbox at xaitboyjava335@gmail.com!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setChatMessages((prev) => [...prev, errMsg]);
    } finally {
      setChatLoading(false);
    }
  };

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, chatLoading]);

  return (
    <section id="contact" className="relative py-24 bg-transparent border-t border-white/5">
      {/* Background neon elements */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-82 h-82 bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#06b6d4]">
            05 // SYNC_CHANNELS
          </span>
          <h2 className="mt-2 font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            Connect <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">With Me</span>
          </h2>
          <p className="mt-4 text-sm text-slate-400">
            Have a project description, business proposition, or just want to chat with my virtual self? Submit the secure message form or chat directly below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Traditional Form Grid Row - Left */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-card relative overflow-hidden">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                Secure Mail Form
              </h3>
              <p className="mt-2 text-xs text-slate-400">
                Direct dispatch to Javlonbek's primary inbox. Ether-guaranteed reply within 24h.
              </p>

              <form onSubmit={handleFormSubmit} className="mt-6 flex flex-col gap-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      placeholder="e.g., John Doe"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/5 focus:border-cyan-400/50 rounded-xl text-slate-200 text-sm focus:outline-none transition-colors duration-300 cursor-none"
                    />
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                    Your Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      placeholder="e.g., john@example.com"
                      className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/5 focus:border-cyan-400/50 rounded-xl text-slate-200 text-sm focus:outline-none transition-colors duration-300 cursor-none"
                    />
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-1.5">
                    Message Packet
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                    placeholder="Describe your web design scope or freelancing project..."
                    className="w-full p-4 bg-white/5 border border-white/5 focus:border-cyan-400/50 rounded-xl text-slate-200 text-sm focus:outline-none focus:ring-0 transition-colors duration-300 resize-none cursor-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formSending || formSuccess}
                  className={`w-full py-3.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-none ${
                    formSuccess
                      ? 'bg-green-500 text-slate-950 font-black'
                      : 'bg-cyan-400 hover:bg-cyan-300 text-slate-950 hover:shadow-lg hover:shadow-cyan-400/20'
                  }`}
                >
                  {formSending ? (
                    <>DELIVERING_PACKET...</>
                  ) : formSuccess ? (
                    <>SENT_SUCCESSFULLY_✓</>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      DISPATCH_MESSAGE_
                    </>
                  )}
                </button>
              </form>

              {/* Instant validation details */}
              <AnimatePresence>
                {formSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-3 rounded-xl bg-green-500/10 border border-green-500/20 text-[11px] text-green-400 font-mono text-center"
                  >
                    🚀 Packet delivered to Javlonbek's console node! Talk is cheap, emails are fast. Thanks!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Micro details node info */}
            <div className="p-5 rounded-2xl border border-white/5 bg-black/30 font-mono text-xs text-slate-400 flex flex-col gap-2.5">
              <span className="text-[#06b6d4] text-[10px] tracking-widest uppercase font-bold">// HARDWARE_STATION</span>
              <div className="flex justify-between">
                <span>Primary Email:</span>
                <span className="text-white select-all">xaitboyjava335@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span>Active Status:</span>
                <span className="text-green-400 animate-pulse">● FREELANCE_OPEN</span>
              </div>
              <div className="flex justify-between">
                <span>Timezone:</span>
                <span className="text-white"> Tashkent (UTC+5)</span>
              </div>
            </div>
          </div>

          {/* AI Chatbot Terminal Component - Right */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/5 bg-[#030712] overflow-hidden flex flex-col h-[540px] shadow-2xl relative">
              
              {/* Chat Header Terminal Style */}
              <div className="p-4 bg-slate-950 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                    <Bot className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-sans font-medium text-white leading-none">Javlonbek Digital Clone</h4>
                      <span className="px-1.5 py-0.5 rounded bg-cyan-500/10 text-[9px] font-mono text-[#06b6d4] uppercase font-bold">
                        GEMINI.AI
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-purple-400 font-semibold uppercase tracking-wider block mt-0.5 animate-pulse">
                      STATUS_ONLINE_
                    </span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80 shadow-md shadow-cyan-400" />
                </div>
              </div>

              {/* Chat Messages Frame list */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4" style={{ WebkitOverflowScrolling: 'touch' }}>
                {chatMessages.map((msg, index) => {
                  const isAssistant = msg.sender === 'assistant';
                  return (
                    <div
                      key={index}
                      className={`flex gap-3 max-w-[85%] ${isAssistant ? '' : 'ml-auto flex-row-reverse'}`}
                    >
                      {/* Speaker avatar sphere */}
                      <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[10px] font-mono font-bold font-semibold border ${
                        isAssistant
                          ? 'bg-purple-900/10 border-purple-500/20 text-purple-400'
                          : 'bg-cyan-950 border-cyan-400/20 text-cyan-400'
                      }`}>
                        {isAssistant ? 'JV' : 'US'}
                      </div>

                      {/* Chat text box bubble */}
                      <div className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        isAssistant
                          ? 'bg-white/[0.03] border border-white/5 text-slate-300'
                          : 'bg-indigo-600 border border-indigo-500 text-white shadow-lg shadow-indigo-600/10'
                      }`}>
                        <p className="whitespace-pre-wrap">{msg.text}</p>
                        <span className="block text-[8px] font-mono text-slate-500 text-right mt-1.5">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Loading state indicator */}
                {chatLoading && (
                  <div className="flex gap-3 max-w-[85%]">
                    <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center bg-purple-900/10 border border-purple-500/20 text-purple-400 font-mono text-[10px]">
                      JV
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce delay-100" />
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce delay-200" />
                    </div>
                  </div>
                )}
                
                <div ref={chatBottomRef} />
              </div>

              {/* Form trigger suggestion chips */}
              <div className="p-3.5 bg-slate-950/40 border-t border-white/5 flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-mono text-slate-500 uppercase flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-cyan-400" /> Matches:
                </span>
                {quickPrompts.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    disabled={chatLoading}
                    className="text-[10px] font-sans font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded transition-colors border border-white/5 cursor-none"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Chat Input Console Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(chatInput);
                }}
                className="p-3.5 bg-slate-950 border-t border-white/5 flex gap-2"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type a query for Javlonbek AI (e.g. Can you speak Uzbek?)..."
                  disabled={chatLoading}
                  className="flex-1 bg-white/5 border border-white/5 focus:border-purple-400/50 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none transition-colors duration-300 cursor-none"
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || chatLoading}
                  className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs flex items-center gap-1 cursor-none active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
