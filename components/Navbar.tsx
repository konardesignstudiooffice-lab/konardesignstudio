
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'EMI Plans', path: '/emi-construction-interior' },
    { name: 'Vastu', path: '/vastu' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
  ];

  const getTextColor = () => {
    if (scrolled) return 'text-white';
    if (location.pathname === '/') return 'text-white md:text-charcoal';
    return 'text-charcoal';
  };

  const getActiveColor = () => 'text-gold';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-charcoal/95 backdrop-blur-md py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="bg-gold w-10 h-10 flex items-center justify-center rounded-sm transition-transform group-hover:rotate-6">
              <span className="text-charcoal font-bold text-xl font-heading">K</span>
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-heading font-bold tracking-[0.2em] leading-none transition-colors duration-500 ${getTextColor()}`}>KONAR</span>
              <span className="text-[9px] tracking-[0.3em] text-gold uppercase font-bold mt-1">Design Studio</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:text-gold hover:tracking-[0.3em] ${
                  location.pathname === link.path ? getActiveColor() : (scrolled ? 'text-gray-300' : (location.pathname === '/' ? 'text-charcoal' : 'text-charcoal'))
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-gold hover:bg-white text-charcoal px-8 py-3 rounded-sm text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-500 shadow-xl"
            >
              Consultation
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 ${scrolled || location.pathname !== '/' ? 'text-white' : 'text-charcoal'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-charcoal transition-all duration-700 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
        <div className="flex flex-col h-full justify-center items-center px-4 space-y-8">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 text-white hover:text-gold"
          >
            <X size={32} />
          </button>
          
          <div className="flex flex-col items-center mb-12">
            <div className="bg-gold w-16 h-16 flex items-center justify-center rounded-sm mb-4">
              <span className="text-charcoal font-bold text-3xl font-heading">K</span>
            </div>
            <span className="text-2xl font-heading font-bold text-white tracking-[0.3em]">KONAR</span>
            <span className="text-[10px] tracking-[0.4em] text-gold uppercase font-bold mt-2">Design Studio</span>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-heading tracking-widest uppercase transition-colors duration-300 ${location.pathname === link.path ? 'text-gold' : 'text-white hover:text-gold'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-8">
            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-charcoal px-12 py-5 font-bold tracking-[0.3em] uppercase text-xs shadow-2xl hover:bg-white transition-all"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
