import { Link, useLocation } from "react-router-dom";
import logo from "../assets/FullLogo.jpg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "Meet the Team", path: "/team" },
  { name: "Join the Waitlist", path: "/waitlist" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full px-6 md:px-8 py-4 flex justify-between items-center bg-[#0f1115] text-white fixed top-0 left-0 z-50 shadow-md">
      {/* Logo + Brand */}
      <Link to="/" className="flex items-center gap-4">
        <img
          src={logo}
          alt="Cortyx Logo"
          className="h-14 w-auto object-contain"
        />
        <span className="text-2xl font-semibold tracking-wider text-primary">CORTYX</span>
      </Link>

      {/* Navigation Links */}
      <ul className="flex gap-6 md:gap-8 text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`relative transition-all duration-300 pb-1 ${
                location.pathname === link.path ? "text-primary" : "text-gray-300"
              } hover:text-primary`}
            >
              {link.name}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
