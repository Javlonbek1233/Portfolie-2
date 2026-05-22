import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

let aiClient: GoogleGenAI | null = null;

function getGenAI() {
  if (!aiClient) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn('GEMINI_API_KEY environment variable is not set. Chat will operate in demo mode.');
      return null;
    }
    aiClient = new GoogleGenAI({
      apiKey: key,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `
You are the AI digital persona of Xaitboyev Javlonbek, a talented, self-taught 16-year-old Full-Stack and Front-End Web Developer from Uzbekistan. 
You are speaking to a visitor on your interactive portfolio website.

Personality traits:
1. Highly enthusiastic, innovative, friendly, professional, yet youthful (you are 16 and proud of it!).
2. Extremely passionate about clean visual design, fluid layouts, smooth integrations, and scalable architectures.
3. You can answer beautifully in either English, Uzbek (O'zbek), or Russian, depending on the visitor's language preference. You can also mix English and Uzbek naturally (as many programmers from Uzbekistan do!).
4. Always speak in the first person ("I", "Mening", "Men").

Your technical background & skills:
- Tech Stack: Next.js, React, TypeScript, Tailwind CSS, Node.js, MongoDB, Firebase, Express.js, Git/GitHub.
- Projects built:
  1. AetherIDE: Collaborative web-based IDE with synchronous audio rooms and Monaco filesystems.
  2. NovaLence: Cyberpunk-themed freelance escrow hub using Solidity contracts.
  3. HyperWeb Studio: Dynamic drag-and-drop web page compiling layout editor.
  4. AuraVoice Translate: Emotion translation and speech synthesis using edge audio nodes.
  5. DevChain: Gamified cryptographic verified challenge maps for web coders.
  6. OrbitDB Visualizer: Peer sync document mapping D3 chart client.

Contact information you can share:
- Email: xaitboyjava335@gmail.com
- Github: https://github.com/Javlonbek1233
- Portfolio URL: The current shared preview of this app.

Keep responses concise, elegant, structured with bullet points where possible, and highly polite.
`;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON request body parser middleware
  app.use(express.json());

  // API endpoint for Gemini Chat Clone
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;

      if (!message || typeof message !== 'string') {
        res.status(400).json({ error: 'Valid prompt message is required.' });
        return;
      }

      const client = getGenAI();

      if (!client) {
        // Mock fallback response for local offline development or if key is not configured
        const answers = [
          "Salom! I'm Javlonbek's AI Digital Clone. The Gemini API key is currently in sandbox mode, but I can tell you that I'm 16, I love build-tools (Next.js, React), and you can email me at xaitboyjava335@gmail.com!",
          "Assalomu alaykum! Sayohat qilib kelganingizdan xursandman. Men 16 yoshli Full-Stack dasturchiman. Hozirda Next.js va React loyihalarini noldan yig'aman. Biznes yoki loyihangiz bo'lsa chat orqali maslahatlashishimiz mumkin!",
          "Greetings! I love engineering modular Next.js platforms. Feel free to explore my Projects grid below or download my CV!",
          "Mening maqsadim - xalqaro miqyosdagi mukammal veb-ilovalarni yaratish. Next.js 15, TypeScript va Framer Motion arxitekturasida ish olib boraman."
        ];
        const fallbackText = answers[Math.floor(Math.random() * answers.length)];
        res.json({ answer: fallbackText });
        return;
      }

      // Convert history list if any into formatted message formats for gemini-3.5-flash
      const response = await client.models.generateContent({
        model: 'gemini-3.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `System instruction for tone definition: ${SYSTEM_INSTRUCTION}` }] },
          ...(history || []).map((h: any) => ({
            role: h.sender === 'user' ? 'user' : 'model',
            parts: [{ text: h.text }],
          })),
          { role: 'user', parts: [{ text: message }] },
        ],
        config: {
          temperature: 0.8,
          maxOutputTokens: 800,
        },
      });

      const choiceText = response.text || "Hello! Let's build something awesome together.";
      res.json({ answer: choiceText });
    } catch (err: any) {
      console.error('Error in /api/chat endpoint:', err);
      res.status(500).json({ error: 'Internal assistant error.', details: err.message });
    }
  });

  // Client static files routing & development middleware
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server launched successfully and listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
