export default function Footer() {
  return (
    <footer className="bg-[#1a1d29] text-gray-300 px-6 md:px-10 py-8 border-t border-gray-600">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left - Brand + Message */}
        <div className="text-center md:text-left">
          <h2 className="text-white font-bold text-lg tracking-tight">Cortyx Labs</h2>
          <p className="text-sm mt-1 tracking-wide">Empowering the next generation of innovators.</p>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Cortyx Labs. All rights reserved.
      </div>
    </footer>
  );
}
