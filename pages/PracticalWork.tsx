import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Hammer, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  Plus, 
  Clock, 
  Image as ImageIcon,
  Building,
  Home,
  ChevronDown,
  HelpCircle
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const PracticalWork: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = [
    'All',
    'Construction Work',
    'Interior Work',
    'Renovation',
    '3D Visualization'
  ];

  const projects = [
    {
      id: 1,
      title: "G+3 Residential Complex",
      cat: "Construction Work",
      status: "Ongoing",
      location: "Bidhannagar, Durgapur",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800",
      desc: "Structural RCC work in progress with strict quality checks."
    },
    {
      id: 2,
      title: "Luxury Penthouse Interior",
      cat: "Interior Work",
      status: "Completed",
      location: "City Centre, Durgapur",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
      desc: "Complete luxury makeover with bespoke Italian marble and wood finishes."
    },
    {
      id: 3,
      title: "Heritage Bungalow Restoration",
      cat: "Renovation",
      status: "Completed",
      location: "Bolpur, Shantiniketan",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
      desc: "Restoring 50-year-old structural elements while adding modern luxury."
    },
    {
      id: 4,
      title: "Commercial Facade Design",
      cat: "3D Visualization",
      status: "Completed",
      location: "Industrial Area, Durgapur",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
      desc: "Hyper-realistic walkthrough for an upcoming corporate hub."
    },
    {
      id: 5,
      title: "Duplex Concrete Pouring",
      cat: "Construction Work",
      status: "Ongoing",
      location: "Tapaban Abasan, Durgapur",
      img: "https://images.unsplash.com/photo-1503387762-592fca61450f?auto=format&fit=crop&q=80&w=800",
      desc: "Live site footage showing precision foundation work."
    },
    {
      id: 6,
      title: "Modern Minimalist Kitchen",
      cat: "Interior Work",
      status: "Ongoing",
      location: "Ambuja Colony, Durgapur",
      img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
      desc: "Cabinetry installation and modular fittings phase."
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.cat === filter);

  return (
    <div className="bg-ivory pt-20 overflow-hidden">
      {/* SECTION 1 – HERO */}
      <section className="relative h-[60vh] flex items-center bg-charcoal">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000" 
            alt="Live Construction Site Work" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/30"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase tracking-widest leading-tight">
            Practical Work & <span className="text-gold">Live Projects</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl font-light max-w-3xl mx-auto tracking-wide">
            Construction Sites, Interior Execution & Completed Projects by Konar Design Studio
          </p>
        </div>
      </section>

      {/* SECTION 2 – INTRO */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs mb-4 font-bold">Execution Excellence</h2>
            <h3 className="text-4xl font-heading font-bold text-charcoal uppercase tracking-widest mb-6 leading-tight">
              Real Work. <br />Real Sites. <span className="text-gold">Real Quality.</span>
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              This page showcases our actual construction sites, interior execution work, and completed projects. Clients can review practical progress, workmanship quality, and design execution before finalizing their project.
            </p>
            <div className="flex gap-6">
              <Link to="/booking" className="bg-charcoal text-white px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-gold hover:text-charcoal transition-all shadow-xl">
                Book Site Visit
              </Link>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="border border-charcoal/20 text-charcoal px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-charcoal hover:text-white transition-all">
                WhatsApp Inquiry
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 shadow-sm border border-gold/10">
              <Building className="text-gold mb-4" size={32} />
              <h4 className="font-heading font-bold text-charcoal uppercase text-xs tracking-widest mb-2">Live Sites</h4>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Transparency in Construction</p>
            </div>
            <div className="bg-white p-6 shadow-sm border border-gold/10">
              <Hammer className="text-gold mb-4" size={32} />
              <h4 className="font-heading font-bold text-charcoal uppercase text-xs tracking-widest mb-2">Workmanship</h4>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Expert Craftsmanship</p>
            </div>
            <div className="bg-white p-6 shadow-sm border border-gold/10">
              <CheckCircle2 className="text-gold mb-4" size={32} />
              <h4 className="font-heading font-bold text-charcoal uppercase text-xs tracking-widest mb-2">Completion</h4>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Timely Project Handover</p>
            </div>
            <div className="bg-white p-6 shadow-sm border border-gold/10">
              <Clock className="text-gold mb-4" size={32} />
              <h4 className="font-heading font-bold text-charcoal uppercase text-xs tracking-widest mb-2">Timeline</h4>
              <p className="text-gray-500 text-[10px] uppercase tracking-widest">Structured Milestones</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4 – FILTER & GALLERY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16 border-b border-charcoal/5 pb-8">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative ${filter === c ? 'text-charcoal bg-gold/5' : 'text-gray-400 hover:text-gold'}`}
              >
                {c}
                {filter === c && (
                  <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-gold"></div>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-ivory shadow-lg overflow-hidden border border-charcoal/5 flex flex-col transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(201,162,77,0.15)] animate-in zoom-in"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.img} 
                    alt={`${project.title} - ${project.cat} by Konar Design Studio`} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full border ${project.status === 'Ongoing' ? 'bg-royalBlue text-white border-royalBlue' : 'bg-gold text-charcoal border-gold'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gold text-[8px] font-bold uppercase tracking-widest">{project.cat}</span>
                    <span className="w-1 h-1 bg-charcoal/20 rounded-full"></span>
                    <span className="text-gray-400 text-[8px] font-bold uppercase tracking-widest">{project.location}</span>
                  </div>
                  <h4 className="text-xl font-heading font-bold text-charcoal uppercase tracking-widest group-hover:text-gold transition-colors">{project.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">{project.desc}</p>
                  <Link to="/booking" className="inline-flex items-center gap-2 text-royalBlue text-[10px] font-bold uppercase tracking-widest hover:text-gold transition-colors pt-4">
                    View Project Progress <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 – CLIENT PRESENTATION */}
      <section className="py-24 bg-charcoal text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gold/10 -rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80&w=1200" 
                alt="Professional Execution Team" 
                className="w-full h-[500px] object-cover grayscale opacity-80"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs font-bold">Client Presentation</h2>
              <h3 className="text-4xl font-heading font-bold uppercase tracking-widest">Transparent Work for <span className="text-gold">Confident Decisions</span></h3>
              <p className="text-gray-400 leading-relaxed font-light">
                We believe in absolute transparency. Before you sign your agreement, we invite you to our live sites to witness our structural integrity and material quality firsthand.
              </p>
              <ul className="space-y-4">
                {[
                  'Actual site photographs (No stock images used)',
                  'Live updates of ongoing project stages',
                  'Professional execution standards maintained strictly',
                  'Client-focused design & material presentation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-gold" size={18} />
                    <span className="text-gray-300 text-sm tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6 flex flex-wrap gap-6">
                <Link to="/booking" className="bg-gold text-charcoal px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all">
                  Request Portfolio PDF
                </Link>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="border border-white/20 text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-charcoal transition-all">
                  Schedule Office Meet
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 – CTA SECTION */}
      <section className="py-24 bg-gold">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-8 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-charcoal uppercase tracking-widest leading-tight">
            Want to see similar work for <span className="underline decoration-charcoal/20">your project?</span>
          </h2>
          <p className="text-charcoal/70 text-lg max-w-2xl mx-auto font-medium">
            Join 60+ premium homeowners who trusted Konar Design Studio for their legacy projects.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-charcoal text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-charcoal transition-all shadow-2xl flex items-center">
              <MessageSquare className="mr-3" size={18} /> WhatsApp Now
            </a>
            <Link to="/booking" className="bg-white text-charcoal px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-charcoal hover:text-white transition-all shadow-xl">
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 – SEO FAQ */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <HelpCircle className="text-gold mx-auto mb-4" size={48} />
          <h3 className="text-3xl font-heading font-bold text-charcoal uppercase tracking-widest">Practical <span className="text-gold">Work FAQ</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              q: "Can I visit your ongoing construction site?",
              a: "Absolutely. We encourage prospective clients to visit our live sites in Durgapur to verify our construction quality and project management."
            },
            {
              q: "Are these actual project photos?",
              a: "Yes, every image in our 'Practical Work' gallery is an original photograph from a project executed by Konar Design Studio."
            },
            {
              q: "Do you update site progress regularly?",
              a: "We maintain a strict reporting schedule for clients, providing site progress updates via WhatsApp and email on a weekly basis."
            },
            {
              q: "Do you handle both construction and interior work?",
              a: "Yes, we provide turnkey solutions covering everything from architectural planning and building construction to premium interior execution."
            }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-8 border border-charcoal/5 group hover:border-gold transition-all duration-500 shadow-sm">
              <h4 className="font-heading font-bold text-charcoal text-sm uppercase tracking-wider mb-4 group-hover:text-gold transition-colors">{faq.q}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LOCAL SEO FOOTER */}
      <div className="bg-ivory py-8 border-t border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">
            Actual Site Photographs • Construction Execution Durgapur • Interior Work Portfolio West Bengal
          </p>
        </div>
      </div>
    </div>
  );
};

export default PracticalWork;