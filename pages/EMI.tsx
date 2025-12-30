
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  CreditCard, 
  Building2, 
  ShieldCheck, 
  FileCheck, 
  MessageSquare,
  HelpCircle,
  ChevronRight,
  Clock
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const EMI: React.FC = () => {
  const faqs = [
    {
      q: "Is EMI available for interior projects?",
      a: "Yes, our easy payment plans cover both comprehensive construction and full-scale luxury interior design projects."
    },
    {
      q: "What is the minimum project value?",
      a: "The EMI facility is specifically available for high-end projects with a total value starting from ₹10 Lakhs."
    },
    {
      q: "Which cities are covered?",
      a: "Currently, we provide EMI services in Durgapur, Kolkata, Burdwan, Bankura, and surrounding regions of West Bengal."
    },
    {
      q: "Is EMI interest applicable?",
      a: "Interest rates and processing fees are determined by our partnered financial institutions based on your eligibility and repayment tenure."
    },
    {
      q: "How long does approval take?",
      a: "Documentation and bank approval typically take 7-10 working days after the project agreement is signed."
    }
  ];

  return (
    <div className="bg-ivory pt-20 overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex items-center bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Construction Background" 
            className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_30s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <div className="max-w-3xl animate-in fade-in slide-in-from-bottom duration-1000">
            <h2 className="text-gold font-heading text-xs tracking-[0.5em] uppercase mb-6 font-bold">Financial Luxury</h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Easy EMI Available for <span className="text-gold">Construction</span> & Interior Projects
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 leading-relaxed">
              Premium Construction & Interior Solutions with Smart Monthly Installments — For Projects Above ₹10 Lakhs. Build your legacy now, pay at your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link to="/booking" className="bg-gold text-charcoal px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-2xl flex items-center justify-center">
                Check EMI Eligibility <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/booking" className="border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-charcoal transition-all flex items-center justify-center">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. EMI INTRO SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs mb-4 font-bold">Smart Financing</h2>
          <h3 className="text-4xl font-heading font-bold text-charcoal uppercase tracking-widest">Build Today. <span className="text-gold">Pay Comfortably.</span></h3>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed italic">
            Konar Design Studio now offers easy EMI options for construction and interior projects above ₹10 Lakhs. Our EMI facility is designed to make premium homes, interiors, and commercial projects accessible without financial stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <Building2 className="text-gold" size={32} />, title: 'Any Project Type', desc: 'Available for Residential & Commercial Projects' },
            { icon: <Clock className="text-gold" size={32} />, title: 'Project First', desc: 'EMI Starting After Project Approval' },
            { icon: <ShieldCheck className="text-gold" size={32} />, title: 'Fully Compliant', desc: 'Transparent & Legal Process' },
            { icon: <CreditCard className="text-gold" size={32} />, title: 'Banking Partners', desc: 'Trusted Financial Partners' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 border-b-2 border-transparent hover:border-gold transition-all duration-500 shadow-sm hover:shadow-xl group text-center">
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-heading font-bold text-charcoal uppercase tracking-widest text-xs mb-3">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROJECT ELIGIBILITY SECTION */}
      <section className="py-24 bg-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs mb-4 font-bold">Standard Requirements</h2>
              <h3 className="text-4xl font-heading font-bold mb-8 uppercase tracking-widest">Who Can <span className="text-gold">Avail EMI?</span></h3>
              <div className="space-y-6">
                {[
                  'Minimum project value: ₹10 Lakhs',
                  'Construction or Interior projects',
                  'Residential / Commercial buildings',
                  'Subject to financial partner approval',
                  'Valid ID & basic documentation required'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="bg-gold/10 p-2 rounded-full group-hover:bg-gold transition-colors">
                      <CheckCircle2 className="text-gold group-hover:text-charcoal" size={20} />
                    </div>
                    <span className="text-gray-300 font-light tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-[10px] text-gray-500 uppercase tracking-widest italic font-bold">
                Note: EMI approval is subject to terms and conditions of partnered financial institutions.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 border border-gold/20 translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1200" 
                alt="Architectural Planning" 
                className="w-full h-[450px] object-cover grayscale opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. HOW EMI WORKS (STEP FLOW) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs mb-4 font-bold">The Journey</h2>
          <h3 className="text-4xl font-heading font-bold text-charcoal uppercase tracking-widest">Simple <span className="text-gold">EMI Process</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {[
            'Free Design & Cost Consultation',
            'Project Finalization & Agreement',
            'EMI Eligibility Check',
            'Bank / NBFC Approval',
            'Project Execution Begins'
          ].map((step, idx) => (
            <div key={idx} className="relative group p-8 bg-white border border-charcoal/5 shadow-sm text-center">
              <div className="text-5xl font-heading font-bold text-gold/20 mb-4 group-hover:text-gold/40 transition-colors">0{idx + 1}</div>
              <p className="text-xs font-bold uppercase tracking-widest text-charcoal leading-relaxed">{step}</p>
              {idx < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-[-50%] z-20">
                  <ChevronRight className="text-gold/30" size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRUST & ASSURANCE SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs mb-4 font-bold">Why Us</h2>
          <h3 className="text-4xl font-heading font-bold text-charcoal mb-12 uppercase tracking-widest">Why Choose EMI with <span className="text-gold">Konar Design Studio?</span></h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left border-t border-gold/10 pt-12">
            {[
              'Experienced Architectural & Construction Team',
              'Legally Compliant Agreements',
              'Municipality Approval Support',
              'Transparent Pricing',
              'On-Time Project Execution'
            ].map((point, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <FileCheck className="text-gold" size={18} />
                <span className="text-gray-600 text-sm font-medium tracking-wide">{point}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </div>
      </section>

      {/* 6. CTA LEAD SECTION */}
      <section className="py-20 bg-charcoal relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-5xl mx-auto px-4 text-center text-white space-y-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-widest">
            Planning a Construction or Interior Project Above <span className="text-gold">₹10 Lakhs?</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light">
            Our financial advisors and design experts are ready to guide you through the smartest way to build your dream space.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I%20am%20interested%20in%20the%20EMI%20Payment%20Plans%20for%20my%20project.`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#25D366] text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all flex items-center"
            >
              <MessageSquare className="mr-2 w-4 h-4" /> WhatsApp EMI Inquiry
            </a>
            <Link to="/booking" className="bg-gold text-charcoal px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white transition-all flex items-center">
              Book EMI Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-gold/10 p-3 rounded-full inline-block mb-4 text-gold">
            <HelpCircle size={32} />
          </div>
          <h3 className="text-3xl font-heading font-bold text-charcoal uppercase tracking-widest">Frequently Asked <span className="text-gold">Questions</span></h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-8 border border-charcoal/5 group hover:border-gold transition-colors shadow-sm">
              <h4 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider mb-3 group-hover:text-gold transition-colors">{faq.q}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Local Footer Mention */}
      <div className="bg-ivory py-8 border-t border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
            Premium Construction EMI Facility Serving Durgapur, Kolkata, Burdwan, Bankura & West Bengal
          </p>
        </div>
      </div>
    </div>
  );
};

export default EMI;
