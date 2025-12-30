import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Vastu from './pages/Vastu';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Reviews from './pages/Reviews';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import EMI from './pages/EMI';
import AIAgent from './components/AIAgent';
import FloatingActions from './components/FloatingActions';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/emi-construction-interior" element={<EMI />} />
            <Route path="/vastu" element={<Vastu />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </main>
        <Footer />
        <AIAgent />
        <FloatingActions />
      </div>
    </Router>
  );
};

export default App;