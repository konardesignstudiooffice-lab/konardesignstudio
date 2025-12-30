import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="bg-ivory pt-32">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <h2 className="text-gold font-heading tracking-[0.3em] uppercase mb-4">The Studio</h2>
        <h1 className="text-5xl font-heading font-bold text-charcoal">Our Design Disciplines</h1>
      </section>

      {SERVICES.map((service, idx) => (
        <section key={service.id} className={`py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-charcoal text-white'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className={idx % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full aspect-video object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className={`space-y-6 ${idx % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
              <div className="flex items-center gap-4">
                <span className={`text-gold inline-block ${service.id === 'vastu' ? 'animate-slow-rotate' : 'animate-subtle-pulse'}`}>
                  {service.icon}
                </span>
                <h2 className="text-3xl font-heading font-bold uppercase tracking-widest">{service.title}</h2>
              </div>
              <p className={idx % 2 === 0 ? 'text-gray-600' : 'text-gray-400'}>
                Konar Design Studio is professionally associated with Konar Associates, established in 2017 with a strong background in professional architectural, construction, and allied consultancy services. Building on years of dedicated field experience, we integrate modern design thinking and technical precision to ensure every project exceeds international standards while respecting regional requirements.
              </p>
              <ul className="space-y-3">
                {(service as any).details ? (service as any).details.map((item: string) => (
                  <li key={item} className="flex items-center text-sm gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                    {item}
                  </li>
                )) : (
                  ['Custom Concept Design', 'Structural Engineering', 'Post-Design Supervision'].map(item => (
                    <li key={item} className="flex items-center text-sm gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      {item}
                    </li>
                  ))
                )}
              </ul>
              <div className="pt-6">
                <Link to="/booking" className={`inline-block px-10 py-4 font-bold uppercase tracking-widest text-xs transition-all ${idx % 2 === 0 ? 'bg-charcoal text-white hover:bg-gold hover:text-charcoal' : 'bg-gold text-charcoal hover:bg-white'}`}>
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;