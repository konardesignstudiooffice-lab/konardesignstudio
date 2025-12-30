
import React from 'react';
import { Link } from 'react-router-dom';
import { TESTIMONIALS } from '../constants';
import { Star, Quote, MapPin, CheckCircle } from 'lucide-react';

const Reviews: React.FC = () => {
  return (
    <div className="bg-ivory pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-1 mb-6 border border-gold/30 rounded-full">
             <span className="text-gold font-bold text-[10px] uppercase tracking-[0.3em]">Verified Excellence</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-8">Client <span className="text-gold">Legacies</span></h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-body leading-relaxed">
            From the historic streets of Bolpur to the industrial heart of Durgapur and the skyline of Kolkata, our clients define our standard of luxury.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 shadow-sm border border-charcoal/5 relative group hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
              <div className="absolute top-6 right-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote size={48} className="text-charcoal" />
              </div>
              
              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className={`transition-transform duration-300 group-hover:scale-110 ${i < t.rating ? 'text-gold fill-gold' : 'text-gray-200'}`} />
                  ))}
                  <span className="ml-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verified</span>
                </div>

                <p className="text-gray-600 text-base italic leading-relaxed mb-10 relative z-10">
                  "{t.content}"
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-charcoal text-gold rounded-full flex items-center justify-center font-heading font-bold text-lg border border-gold/20 shadow-inner">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-charcoal uppercase tracking-wider text-sm">{t.name}</h4>
                    <div className="flex items-center gap-1.5 mt-1 text-gold">
                      <MapPin size={10} />
                      <p className="text-[10px] uppercase tracking-widest font-bold">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Bar */}
        <div className="mt-20 py-12 border-y border-charcoal/5 flex flex-wrap justify-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all">
           <div className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-xs"><CheckCircle size={16} className="text-gold" /> 100% Satisfaction</div>
           <div className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-xs"><CheckCircle size={16} className="text-gold" /> Vastu Certified</div>
           <div className="flex items-center gap-2 font-bold uppercase tracking-[0.2em] text-xs"><CheckCircle size={16} className="text-gold" /> Regional Authority</div>
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center bg-charcoal p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <h3 className="text-3xl font-heading font-bold text-white mb-6 uppercase tracking-widest">Experience the <span className="text-gold">Konar Standard</span></h3>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-sm">Join our portfolio of elite homeowners and industry leaders across West Bengal. Your legacy begins with a single consultation.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <a href="https://g.page/review/konardesignstudio" target="_blank" rel="noopener noreferrer" className="bg-gold text-charcoal px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-xl">Review on Google</a>
               <Link to="/booking" className="bg-transparent text-white border border-white/20 px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-charcoal transition-all">Start Your Project</Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
