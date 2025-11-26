import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/FullLogo.jpg";

const navLinks = [
  { name: "About", anchor: "#about" },
  { name: "FAQ", anchor: "#faq" },
  { name: "Contact", anchor: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`w-full px-6 md:px-12 py-4 flex items-center justify-between fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#1a1d29]/95 via-[#1a1d29]/98 to-[#1a1d29]/95 backdrop-blur-xl shadow-2xl border-b border-primary/20"
          : "bg-gradient-to-r from-[#1a1d29]/80 via-[#1a1d29]/85 to-[#1a1d29]/80 backdrop-blur-md shadow-lg"
      }`}
    >
      {/* Animated background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50 animate-pulse pointer-events-none" />
      
      {/* Logo - Far Left */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >
        <Link to="/" className="flex items-center gap-3 shrink-0 relative z-10">
          <img
            src={logo}
            alt="Cortyx Labs Logo"
            className="h-12 w-auto object-contain"
          />
          <span className="text-2xl font-semibold tracking-tight text-white">Cortyx Labs</span>
        </Link>
      </motion.div>

      {/* Centered Nav Links */}
      <motion.ul 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="hidden md:flex gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-base font-medium tracking-wide bg-gradient-to-r from-white/10 via-white/15 to-white/10 backdrop-blur-md px-8 py-2 rounded-full shadow-lg border border-white/20 z-10"
      >
        {navLinks.map((link, index) => (
          <motion.li 
            key={link.name}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          >
            <a
              href={link.anchor}
              onClick={(e) => {
                e.preventDefault();
                
                // Dispatch custom event to trigger section animation
                window.dispatchEvent(new CustomEvent('sectionNavigate', { detail: { anchor: link.anchor } }));
                
                // Use scrollIntoView which respects scroll-margin-top automatically
                setTimeout(() => {
                  const element = document.querySelector(link.anchor);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }, 50);
              }}
              className="transition-all duration-300 pb-1 text-gray-100 hover:text-primary cursor-pointer relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </motion.li>
        ))}
      </motion.ul>

      {/* Apply Button - Between center and far right */}
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        href="https://forms.gle/WXAanYWVfoqzyRMQ9"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto relative z-10 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 bg-clip-padding backdrop-filter backdrop-blur-md border border-primary/30 text-white px-6 py-2 rounded-full font-semibold shadow-lg shadow-primary/20 hover:scale-105 hover:bg-opacity-100 transition-all duration-300 hover:shadow-primary/40"
        style={{
          boxShadow: "0 4px 32px 0 rgba(0, 217, 255, 0.3)",
        }}
      >
        <span className="relative z-10">Apply</span>
        <span className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/40 to-primary/30 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 blur-sm" />
      </motion.a>
    </motion.nav>
  );
}
