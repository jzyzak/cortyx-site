import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient"; // <-- Make sure you create this

export default function Waitlist() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const moveBlob = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveBlob);
    return () => window.removeEventListener("mousemove", moveBlob);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    const { data, error } = await supabase.from("waitlist").insert([{ email }]);
    if (error) {
      setError("This email may already be on the list or is invalid.");
    } else {
      setSuccess(true);
      setEmail("");
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-white px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary">
          Want to have first access to the future of education/networking?
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-xl text-center relative z-10"
      >
        <h1 className="text-3xl font-bold mb-4">Join the Waitlist</h1>
        <p className="text-gray-300 mb-6">
          Get early access to Cortyx and be the first to try our AI-powered learning tools.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 rounded-lg bg-dark text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            type="submit"
            className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-primary transition cursor-pointer"
          >
            Join Waitlist
          </button>
        </form>
        {success && <p className="text-green-400 mt-4">You're on the list!</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </motion.div>
    </main>
  );
}
