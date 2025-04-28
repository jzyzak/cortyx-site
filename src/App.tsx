import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Team from "./pages/Team";
import Waitlist from "./pages/Waitlist";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/team" element={<Team />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}
