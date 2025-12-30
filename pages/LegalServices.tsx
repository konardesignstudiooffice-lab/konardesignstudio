import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ShieldCheck, 
  Gavel, 
  Building2, 
  CheckCircle, 
  ArrowRight, 
  HelpCircle,
  AlertCircle,
  Scale
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const LegalServices: React.FC = () => {
  const legalFaqs = [
    {
      q: "What is a 'Porcha' or ROR?",
      a: "Porcha (Record of Rights) is a crucial document maintained by the BL&LRO office that proves land ownership, classification, and area. We help in obtaining and verifying digital Porcha copies."
    },
    {
      q: "Why do I need a Municipality Plan Approval?",
      a: "As per the West Bengal Municipal Act, any construction without a sanctioned plan is illegal and liable for demolition. We provide architect-certified drawings for smooth approval."
    },
    {
      q: "What kind of NOCs are required for construction?",
      a: "Depending on the site, you might need NOCs from the Fire Department, Pollution Control Board, Airport Authority, or the Forest Department. We handle the entire application process."
    },
    {
      q: "How does Land Mutation work?",
      a: "Mutation is the process of updating the government land records after a property transfer. It ensures the buyer's name is reflected as the new owner for tax and legal purposes."
    }
  ];

  return (
    <div className="bg-ivory pt-20 overflow-hidden">
      {/* 1. HERO SECTION - SEO Focused */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000" 
            alt="Legal Land Documents and Paperwork" 
            className="w-full h-full object-cover opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-in fade-in slide-in-from-left duration-1000">
            <h2 className="text-gold font-heading text-xs tracking-[0.5em] uppercase mb-6 font-bold">Regulatory Excellence</h2>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Legal Land Paperwork & <span className="text-gold">Municipality Approval</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl font-light mb-10 leading-relaxed">
              Durgapur's trusted consultancy for Land Deeds, Porcha (ROR), Mutation, NOCs, and Sanctioned Building Plans. We ensure your luxury project is built on a 100% legal foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/booking" className="bg-gold text-charcoal px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-2xl flex items-center justify-center">
                Book Legal Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="border border-white/30 text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-charcoal transition-all flex items-center justify-center">
                Call Legal Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs mb-4 font-bold">Full-Spectrum Support</h2>
          <h3 className="text-4xl font-heading font-bold text-charcoal uppercase tracking-widest">Our Legal <span className="text-gold">Expertise</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              icon: <Scale className="text-gold" size={32} />, 
              title: 'Land Deed & Porcha', 
              desc: 'Expert verification and drafting of Land Deeds. Assisting in ROR (Porcha) procurement from BL&LRO offices.' 
            },
            { 
              icon: <Building2 className="text-gold" size={32} />, 
              title: 'Municipality Sanction', 
              desc: 'End-to-end management of Building Plan approvals for DMC (Durgapur Municipal Corporation) and others.' 
            },
            { 
              icon: <ShieldCheck className="text-gold" size={32} />, 
              title: 'NOC & Clearances', 
              desc: 'Obtaining Fire NOC, Environmental Clearance, and other statutory approvals from West Bengal authorities.' 
            },
            { 
              icon: <FileText className="text-gold" size={32} />, 
              title: 'Mutation & Conversion', 
              desc: 'Hassle-free processing of Land Mutation and conversion from Agricultural to Bastu (Homestead).' 
            },
            { 
              icon: <Gavel className="text-gold" size={32} />, 
              title: 'Legal Search Reports', 
              desc: 'Comprehensive 13-year or 30-year land search reports to ensure clear title and encumbrance-free property.' 
            },
            { 
              icon: <AlertCircle className="text-gold" size={32} />, 
              title: 'Deviation Regularization', 
              desc: 'Expert guidance on regularizing minor deviations and handling municipality notices legally.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 border border-charcoal/5 hover:border-gold transition-all duration-500 shadow-sm hover:shadow-xl group">
              <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="font-heading font-bold text-charcoal uppercase tracking-widest text-sm mb-4">{item.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. WHY LEGAL MATTERS - SEO SECTION */}
      <section className="py-24 bg-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 border border-gold/20 -translate-x-4 -translate-y-4 -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200" 
                  alt="Professional Legal Consultation" 
                  className="w-full h-[500px] object-cover grayscale brightness-75"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs font-bold">Secure Your Investment</h2>
              <h3 className="text-4xl font-heading font-bold uppercase tracking-widest">Building on <span className="text-gold">Truth & Law</span></h3>
              <p className="text-gray-400 leading-relaxed font-light">
                At Konar Design Studio, we believe that luxury is not just visual—it's the peace of mind that comes from knowing your property is legally secure. Durgapur's land laws and municipality regulations can be complex; we simplify them for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  '100% Transparent Documentation',
                  'Vastu-Compliant Legal Layouts',
                  'DMC & WBSEDCL Liaison',
                  'High Success Rate in Approvals'
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="text-gold shrink-0" size={16} />
                    <span className="text-gray-300 text-xs tracking-wider uppercase font-bold">{point}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6">
                <Link to="/booking" className="inline-block bg-gold text-charcoal px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all">
                  Request Document Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION - For SEO Rich Snippets */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-gold/10 p-4 rounded-full inline-block mb-4 text-gold">
            <HelpCircle size={40} />
          </div>
          <h3 className="text-3xl font-heading font-bold text-charcoal uppercase tracking-widest">Legal & Approval <span className="text-gold">FAQ</span></h3>
        </div>

        <div className="space-y-6">
          {legalFaqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-8 border-l-4 border-gold shadow-sm">
              <h4 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider mb-4">{faq.q}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-royalBlue text-white">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold uppercase tracking-widest">Don't Let Red Tape <span className="text-gold">Stop Your Dream.</span></h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
            Whether you are buying a new plot or planning a high-rise construction in Durgapur, our legal experts ensure a smooth transition from land to home.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I%20need%20help%20with%20Land%20Paperwork%20and%20Municipality%20Approvals.`} target="_blank" rel="noopener noreferrer" className="bg-gold text-charcoal px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all">
              WhatsApp Legal Enquiry
            </a>
            <Link to="/booking" className="border border-white/30 text-white px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-charcoal transition-all">
              Schedule Office Visit
            </Link>
          </div>
        </div>
      </section>

      {/* LOCAL SEO KEYWORDS FOOTER */}
      <div className="bg-ivory py-12 border-t border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
            Land Deed Registration Durgapur • Porcha Verification West Bengal • Municipality Plan Sanction DMC • NOC for Building Construction Bengal • BL&LRO Liaison Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalServices;