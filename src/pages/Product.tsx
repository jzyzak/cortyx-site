import { motion } from "framer-motion";
import socialImage from "../assets/network.png";
import aiImage from "../assets/ai-tutor.png";    
import { useEffect, useState } from "react";

export default function Product() {
    const [cursor, setCursor] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveBlob = (e: MouseEvent) => {
        setCursor({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", moveBlob);
        return () => window.removeEventListener("mousemove", moveBlob);
    }, []);

  return (
    <main className="min-h-screen px-4 sm:px-8 md:px-20 py-24 text-white space-y-32">
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

      {/* Page Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-6xl font-extrabold tracking-tight text-primary drop-shadow-md">CORTYX</h1>
        <p className="text-gray-300 mt-3 text-xl italic tracking-wide animate-pulse">
            Fixing education and connecting since no one else will.
        </p>
      </motion.div>

      {/* Social Network Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl mx-auto"
      >
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Learn. Connect. Collaborate. Grow.</h2>
          <p className="text-gray-300 text-xl">
            Cortyx is more than just a study tool — it's a social learning network that helps you avoid those awkward first interactions and connect seamlessly. 
            Students are matched with peers or project partners based on shared classes, interests, and goals. Whether you're looking to study for finals,
            build your next side project, or just brainstorm together, Cortyx helps you find the right teammates in seconds.
          </p>
          <ul className="text-gray-400 list-disc list-inside text-lg space-y-1">
            <li>🎯 Personalized peer matching based on classes or interests/skills</li>
            <li>📆 Host or join local meetups, virtual sessions, or hackathons</li>
            <li>🌐 Explore a vibrant community of learners and builders</li>
          </ul>
        </div>
        <img
          src={socialImage}
          alt="Social learning"
          className="lg:w-1/2 rounded-xl shadow-md border border-white/10"
        />
      </motion.section>

      {/* AI Chatbot Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto"
      >
        <img
          src={aiImage}
          alt="AI Tutor"
          className="lg:w-1/2 rounded-xl shadow-md border border-white/10"
        />
        <div className="lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Your AI Learning Companion</h2>
          <p className="text-gray-300 text-xl">
            Cortyx's intelligent assistant is available 24/7 to help you master anything. Whether you’re studying physics,
            writing a paper, or reviewing notes before an exam, Cortyx adapts to your learning style to make concepts
            click faster.
          </p>
          <ul className="text-gray-400 list-disc list-inside text-lg space-y-1">
            <li>🧠 On-demand tutoring, Q&A, and explanation generation as well as note transcription</li>
            <li>🗂️ Automatically create flashcards, summaries, and quizzes</li>
            <li>📚 Implements proven learning methods Feynman, spaced repetition, active recall into your studying routine</li>
          </ul>
        </div>
      </motion.section>
    </main>
  );
}
