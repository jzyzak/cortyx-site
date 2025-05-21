import { motion } from "framer-motion";
import profile from "../assets/josh.jpeg"; 
import { useEffect, useState } from "react";

export default function Team() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveBlob = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveBlob);
    return () => window.removeEventListener("mousemove", moveBlob);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-20 py-24 text-white text-center">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          Meet the Team
        </h2>
      </div>

      {/* Static Background Blobs */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse z-0" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-purple-600/20 rounded-full filter blur-2xl opacity-30 animate-pulse z-0" />

      {/* Cursor-Following Blob */}
      <div
        className="pointer-events-none fixed z-0 w-40 h-40 bg-purple-600/30 blur-2xl rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          top: `${cursor.y}px`,
          left: `${cursor.x}px`,
        }}
      />

      {/* Profile Picture */}
      <motion.img
        src={profile}
        alt="Founder"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-60 h-60 rounded-full object-cover mb-6 border border-gray-600 shadow-lg"
      />

      {/* Bio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold mb-2">Hi! I'm Josh Zyzak!</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          I am the developer/founder of Cortyx. I'm going to cut straight to it: traditional education has its flaws that I've seen firsthand as a student.
          I can't begin to count how many people I've seen asleep or skip class and how much better people tend to learn either on their own or with others. With Cortyx,
          you can skip the awkward, cold connecting with fellow students and learn at a pace that works for you. I know that sounds like a lot of buzzwords, but I promise
          that Cortyx is different. It's not just another boring study tool — it's a social learning network that helps you avoid those awkward first interactions and jump
          straight to the good part. If you’re interested in joining the team — whether in design, frontend, backend, or product — or just want to chat,
          feel free to reach out at <a href="mailto:cortyxlabs@gmail.com" className="text-primary underline">cortyxlabs@gmail.com</a>
        </p>
      </motion.div>
    </main>
  );
}
