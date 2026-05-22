1. Frontend (Mijoz qismi)
React 18 & Vite: Portfelning tezkor yuklanishi, interaktiv ishlashi va SPA (Single Page Application) tizimini ta'minlaydi.
TypeScript: Tizimning barqarorligini ta'minlash, xatoliklarni oldini olish va mukammal kod tuzilishi uchun mo'ljallangan.
Tailwind CSS (v4): Mukammal dizayn, toza joylashuvlar va siz so'ragan zamonaviy "Frosted Glass" (Giralashgan oyna) dizayn stillarini yaratish uchun ishlatilgan.
Motion (Framer Motion): Sahifaning yuklanishi, bo'limlar o'tishi va tugmalarning silliq, interaktiv animatsiyalari uchun javobgar.
Lucide React: Minimalist va o'ta nafis vektor ikonalar to'plami.
2. Backend (Server qismi)
Node.js & Express.js: Portfeldagi barcha server-side so'rovlarni boshqarish hamda API xizmatlarini ishga tushirish uchun qo'llanilgan.
Google Gemini API (@google/genai modern SDK): Sizning shaxsiy sun'iy intellektli raqamli kloningiz ("Javlonbek Digital Clone") bilan suhbatlashish uchun xavfsiz server orqali gemini-3.5-flash modeliga bog'langan.
Esbuild: Server kodini optimallashtirgan holda bitta faylga yig'adi va bulutli platformalarda (Vercel, Cloud Run va h.k.) o'ta tezkor ishlashini ta'minlaydi.
Loyiha butunlay tayyor, optimallashtirilgan va Hech qanday xatoliklarsiz muvaffaqiyatli yig'ilgan (Compiled successfully)!
lightbulb
Thought for 14 seconds
Ha, albatta! Ushbu portfolioni eng so'nggi va mukammal texnologiyalar asosida yig'dik.
Sizga loyihaning arxitekturasi va uni Vercel / Next.js muhitiga qanday oson ko'chirish haqida to'liq tushuntirib beraman:
🚀 Amaldagi Arxitektura va Next.js ko'prigi:
Hozirgi AI Studio muhitida ilovamiz Full-Stack (React 19, TypeScript, Vite, Express va Gemini AI) arxitekturasida ishlamoqda. Bu sizga eng tez yuklanish (Fast Loading) va real vaqtda jonli Gemini AI Chat (Javlonbekning AI Kloni) tizimini taqdim etadi.
Vercel-ga deploy qilish va to'liq Next.js loyihasiga aylantirish uchun yozgan kodimiz 1-ga-1 mos keladi:
Frontend qismlari (/src/components/*): Next.js loyihangizdagi components/ katalogiga to'liq o'tadi ('use client' direktivasi bilan).
AI Chat API yo'nalishi (/server.ts): Next.js loyihasida app/api/chat/route.ts fayliga osongina o'tkaziladi.
