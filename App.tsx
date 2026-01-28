
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './pages/Projects';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black">
        {/* Texture Overlay */}
        <div className="fixed inset-0 grain-overlay z-[100] pointer-events-none" />

        {/* Dynamic Background Highlights */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute top-[10%] left-[10%] w-[40rem] h-[40rem] bg-zinc-900/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-zinc-800/20 rounded-full blur-[120px]" />
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
