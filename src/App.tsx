import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './pages/Product';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Waitlist from './pages/Waitlist';
import './index.css';


function App() {
  
  return (
    <Router>
      <div className="bg-background min-h-screen text-white font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/waitlist" element={<Waitlist />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;