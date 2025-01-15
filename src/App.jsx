import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MainContent from './pages/Home';
import ScrollToTop from './ScrollToTop';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <ScrollToTop/>
      <div className="py-4 sm:py-6 overflow-visible lg:py-8">
        <div className="mainGrid overflow-visible mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <Routes>
            <Route path="/" element={<MainContent isMobile={isMobile} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;