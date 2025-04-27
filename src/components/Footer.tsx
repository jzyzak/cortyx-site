import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0f1115] text-gray-400 px-6 md:px-20 py-12 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Brand + Message */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-lg">CORTYX</h2>
          <p className="text-sm mt-1">Empowering minds through intelligent learning.</p>
        </div>

        {/* Right - Navigation Links */}
        <div className="flex flex-wrap gap-6 justify-center text-sm">
          <Link to="/product" className="hover:text-primary transition">Product</Link>
          <Link to="/team" className="hover:text-primary transition">Team</Link>
          <Link to="/contact" className="hover:text-primary transition">Contact</Link>
          <Link to="/waitlist" className="hover:text-primary transition">Waitlist</Link>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-10 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} Cortyx. All rights reserved.
      </div>
    </footer>
  );
}
