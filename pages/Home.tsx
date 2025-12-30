import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { SERVICES, TESTIMONIALS, BUSINESS_INFO } from '../constants';

const Home: React.FC = () => {
  const mapAddress = encodeURIComponent(BUSINESS_INFO.office);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapAddress}`;

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Architecture and Modern Home Design" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_infinite]"
          />
          {/* Gradient restored to original flow */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/40 to-transparent"></div>
        </div>

        {/* Hero Content - Reverted to Left Side */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white pb-20">
          <div className="max-w-2xl space-y-6 text-left">
            {/* Shifted to the right by 1 inch (ml-24 = 96px) */}
            <h2 className="text-gold font-heading text-lg tracking-[0.4em] uppercase fade-in ml-24">Est. 2017 • Durgapur</h2>
            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight fade-in" style={{ animationDelay: '0.2s' }}>
              Where Science Meets <span className="text-gold">Symmetry.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light max-w-xl leading-relaxed fade-in" style={{ animationDelay: '0.4s' }}>
              Konar Design Studio creates timeless architectural narratives, balancing modern luxury with precision engineering and Vastu principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in" style={{ animationDelay: '0.6s' }}>
              <Link to="/booking" className="bg-gold text-charcoal px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center">
                Book Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/projects" className="border-2 border-white/30 text-white px-8 py-4 font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-charcoal transition-all text-center">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Metrics */}
        <div className="absolute bottom-[32px] left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 hidden lg:grid grid-cols-3 gap-8 text-center text-white z-20">
          <div className="glass p-6 rounded-sm border-gold/20 shadow-2xl backdrop-blur-xl bg-white/5 group hover:bg-white/10 transition-all duration-500">
            <div className="text-4xl font-heading text-gold mb-1 group-hover:scale-110 transition-transform">60+</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-bold border-t border-white/10 pt-2">Projects Completed</div>
          </div>
          <div className="glass p-6 rounded-sm border-gold/20 shadow-2xl backdrop-blur-xl bg-white/5 group hover:bg-white/10 transition-all duration-500">
            <div className="text-4xl font-heading text-gold mb-1 group-hover:scale-110 transition-transform">100%</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-bold border-t border-white/10 pt-2">Vastu Compliant</div>
          </div>
          <div className="glass p-6 rounded-sm border-gold/20 shadow-2xl backdrop-blur-xl bg-white/5 group hover:bg-white/10 transition-all duration-500">
            <div className="text-4xl font-heading text-gold mb-1 group-hover:scale-110 transition-transform">8+</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-300 font-bold border-t border-white/10 pt-2">Years of Excellence</div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-heading tracking-[0.3em] uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal">Design Disciplines</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service) => (
              <div 
                key={service.id} 
                className="group bg-white p-8 border-b-4 border-transparent hover:border-gold transition-all duration-500 shadow-sm hover:shadow-xl"
              >
                <div className="mb-6">{service.icon}</div>
                <h4 className="text-xl font-heading font-bold text-charcoal mb-4 uppercase tracking-wider">{service.title}</h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>
                <Link to="/services" className="text-xs font-bold uppercase tracking-widest text-royalBlue flex items-center group-hover:text-gold">
                  Explore Details <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy / Vastu Teaser */}
      <section className="bg-charcoal py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
              alt="Scientific Space Planning" 
              className="w-full h-[500px] object-cover rounded-sm shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gold flex flex-col items-center justify-center text-charcoal p-4 text-center">
              <span className="text-4xl font-heading font-bold">2017</span>
              <span className="text-[10px] uppercase font-bold tracking-widest border-t border-charcoal pt-1 mt-1">Est. Studio</span>
            </div>
          </div>
          <div className="text-white space-y-8">
            <h2 className="text-gold font-heading tracking-[0.3em] uppercase">The Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold">Scientific Space Planning</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              Konar Design Studio is professionally associated with Konar Associates, a firm established in 2017 with a strong foundation in professional architectural, construction, and allied consultancy services. Building on years of proven field experience, Konar Design Studio integrates modern design thinking, advanced visualization, and Vastu-based technical precision to deliver reliable, future-ready architectural solutions.
            </p>
            <ul className="space-y-4">
              {[
                'Energy-Balanced Interior Layouts',
                'Climate-Responsive Exterior Facades',
                'Strict Adherence to Vastu Principles',
                'Advanced 3D Structural Analysis'
              ].map((item) => (
                <li key={item} className="flex items-center space-x-3">
                  <CheckCircle className="text-gold w-5 h-5" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/vastu" className="inline-block bg-white text-charcoal px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-gold hover:text-charcoal transition-all">
              Discover Vastu Secrets
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof / Regional Trust */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <h2 className="text-gold font-heading tracking-[0.3em] uppercase mb-4">Regional Trust</h2>
              <h3 className="text-4xl font-heading font-bold text-charcoal uppercase tracking-tighter">Voices Across <span className="text-gold">Bengal</span></h3>
            </div>
            <Link to="/reviews" className="text-sm font-bold uppercase tracking-widest text-royalBlue flex items-center hover:text-gold">
              See All Reviews <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(1, 4).map((t, idx) => (
              <div key={idx} className="bg-ivory p-8 rounded-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Star className="w-16 h-16 text-charcoal" />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-gray-600 mb-8 italic leading-relaxed text-sm">"{t.content}"</p>
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-heading font-bold text-charcoal uppercase tracking-wider text-xs">{t.name}</h4>
                  <div className="flex items-center gap-1.5 mt-1 text-gold">
                    <MapPin size={10} />
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Visit Section */}
      <section className="bg-ivory py-24 border-t border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-heading tracking-[0.3em] uppercase mb-4">Visit Our Studio</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal uppercase tracking-widest">Our <span className="text-gold">Location</span></h3>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">Experience our design process firsthand at our Durgapur headquarters.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 border-l-4 border-gold shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gold/10 p-3 rounded-full">
                      <MapPin className="text-gold" size={24} />
                    </div>
                    <h4 className="font-heading font-bold text-charcoal uppercase tracking-widest text-sm">Address</h4>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {BUSINESS_INFO.office}
                </p>
                <a 
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold font-bold text-[10px] uppercase tracking-widest border border-gold/30 px-4 py-2 hover:bg-gold hover:text-charcoal transition-all"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>

              <div className="bg-white p-8 border-l-4 border-royalBlue shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-royalBlue/10 p-3 rounded-full">
                    <Phone className="text-royalBlue" size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-charcoal uppercase tracking-widest text-sm">Contact</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mobile: {BUSINESS_INFO.phone}<br />
                  Email: {BUSINESS_INFO.email}
                </p>
              </div>

              <div className="bg-white p-8 border-l-4 border-charcoal shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-charcoal/10 p-3 rounded-full">
                    <Clock className="text-charcoal" size={24} />
                  </div>
                  <h4 className="font-heading font-bold text-charcoal uppercase tracking-widest text-sm">Working Hours</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Mon - Sat: 10:00 AM - 08:00 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-2 bg-white p-2 shadow-2xl rounded-sm border border-charcoal/5 h-[450px] lg:h-full min-h-[450px]">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8546114812313!2d87.3119041!3d23.5204482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76e7371f5412b%3A0xf51034f77c38779b!2sB-4%2F5%20Tapaban%20Abasan%2C%2054%20Feet%20Road%2C%20Durgapur%20%E2%80%93%20713213!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Konar Design Studio Office Location"
                className="rounded-sm grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-royalBlue py-20">
        <div className="max-w-5xl mx-auto px-4 text-center text-white space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Ready to Elevate Your Space?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our expert consultants are ready to discuss your project. Book a site visit or office consultation today in Durgapur, Kolkata, or beyond.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/booking" className="bg-gold text-charcoal px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-all">
              Request A Quote
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="border border-white/30 px-10 py-4 font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
              Call Agent
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;