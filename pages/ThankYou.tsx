
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Home } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ThankYou: React.FC = () => {
  return (
    <div className="bg-ivory pt-32 pb-24 min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="bg-white p-12 shadow-2xl rounded-sm">
          <div className="flex justify-center mb-8">
            <CheckCircle className="text-gold w-16 h-16" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-charcoal mb-6 uppercase tracking-wider">Request Received</h1>
          <p className="text-gray-600 text-lg mb-10">
            Thank you for reaching out to Konar Design Studio. Your consultation details have been sent. Our team will contact you shortly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="bg-charcoal text-white px-10 py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center">
              <Home className="mr-2 w-4 h-4" /> Home Page
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="bg-gold text-charcoal px-10 py-4 font-bold uppercase tracking-widest text-xs flex items-center justify-center">
              <Phone className="mr-2 w-4 h-4" /> Priority Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
