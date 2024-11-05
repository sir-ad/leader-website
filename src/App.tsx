import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import BuildingOneAI from './pages/BlogPost/BuildingOneAI';
import UPSCToProduct from './pages/BlogPost/UPSCToProduct';
import ProductMentorship from './pages/BlogPost/ProductMentorship';

function App() {
  return (
    <div className="min-h-screen bg-navy-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/building-one-ai" element={<BuildingOneAI />} />
          <Route path="/blog/upsc-to-product-leadership" element={<UPSCToProduct />} />
          <Route path="/blog/art-of-product-mentorship" element={<ProductMentorship />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;