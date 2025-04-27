import logo from "../assets/FullLogo.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const features = [
    {
      title: "AI-Powered Tutoring",
      desc: "Get real-time help powered by the most advanced language models.",
    },
    {
      title: "Smart Note System",
      desc: "Organize your knowledge with AI-curated notes, flashcards, and summaries.",
    },
    {
      title: "Peer Collaboration",
      desc: "Find study partners and project collaborators in a few clicks.",
    },
  ];

  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveBlob = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveBlob);
    return () => window.removeEventListener("mousemove", moveBlob);
  }, []);

  return (
    <main className="min-h-screen text-white px-4 sm:px-8 md:px-20 pt-32 relative overflow-hidden">
      {/* Optional Title Centerpiece */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          Meet Cortyx
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


      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10"
      >
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Redefining the Learning Experience <br />
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Cortyx is the next-gen AI platform for students and professionals — combining
            personalized tutoring, intelligent note management, and peer-to-peer learning.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link
              to="/product"
              className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-white hover:text-black transition duration-300 hover:bg-primary transition cursor-pointer"
            >
              Explore Features
            </Link>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex justify-center md:justify-end md:pr-4"
        >
          <div className="p-4 md:p-6 rounded-2xl border border-gray-700 shadow-xl bg-[#0f1115]">
            <img
              src={logo}
              alt="Cortyx Brain Logo"
              className="w-64 md:w-80 h-auto object-contain"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-32 mb-32 grid gap-8 md:grid-cols-3 text-center relative z-10"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-primary hover:shadow-md transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </motion.section>
    </main>
  );
}
