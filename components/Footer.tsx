
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="bg-gold w-10 h-10 flex items-center justify-center rounded-sm transition-transform group-hover:rotate-6">
                <span className="text-charcoal font-bold text-xl font-heading">K</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-heading font-bold tracking-[0.2em] uppercase leading-none">KONAR</span>
                <span className="text-[9px] tracking-[0.3em] text-gold uppercase font-bold mt-1">Design Studio</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm font-light">
              Creating architectural masterpieces that stand the test of time. Expert planning, Vastu integration, and premium construction in Durgapur.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-all hover:-translate-y-1"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all hover:-translate-y-1"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-all hover:-translate-y-1"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-gold uppercase tracking-widest">Explore</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/services" className="hover:text-gold transition-colors">Design Services</Link></li>
              <li><Link to="/vastu" className="hover:text-gold transition-colors">Vastu Planning</Link></li>
              <li><Link to="/projects" className="hover:text-gold transition-colors">Portfolio Archive</Link></li>
              <li><Link to="/booking" className="hover:text-gold transition-colors">Book Consultation</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">Our Legacy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-gold uppercase tracking-widest">Connect</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span className="font-light">{BUSINESS_INFO.office}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span className="font-light">{BUSINESS_INFO.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span className="font-light">{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>

          {/* Studio Ethos */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-gold uppercase tracking-widest">The Ethos</h3>
            <p className="text-gray-400 text-sm italic font-light leading-relaxed">
              "Architecture is the learned game, correct and magnificent, of forms assembled in the light."
            </p>
            <div className="pt-4">
              <Link to="/booking" className="border border-gold text-gold hover:bg-gold hover:text-charcoal px-8 py-3 transition-all inline-block text-[10px] font-bold uppercase tracking-[0.2em]">
                Inquire Project
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-500 uppercase tracking-[0.3em] font-medium">
          <p>© {new Date().getFullYear()} Konar Design Studio. Professional Architectural Heritage.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-gold cursor-pointer transition-colors">Legal</span>
            <span className="hover:text-gold cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-gold cursor-pointer transition-colors">Credits</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
