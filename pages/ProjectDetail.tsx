import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
// Fixed missing import of MoveHorizontal
import { ArrowLeft, Calendar, MapPin, Layers, Compass, ChevronLeft, ChevronRight, Maximize2, MoveHorizontal } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const [sliderPos, setSliderPos] = useState(50);
  const isResizing = useRef(false);

  // Mock database - In production, move to constants.tsx
  const projects = {
    'apex-plaza': {
      title: 'Apex Business Plaza',
      cat: 'Commercial',
      location: 'Durgapur, West Bengal',
      area: '45,000 Sq.Ft',
      status: 'Completed 2023',
      vastuScore: '98%',
      description: 'A landmark commercial hub designed to redefine the industrial skyline of Durgapur. Our approach focused on structural transparency and energy efficiency.',
      beforeImg: '/images/apex-before.jpg',
      afterImg: '/images/apex-after.jpg',
      gallery: [
        '/images/apex-1.jpg',
        '/images/apex-2.jpg',
        '/images/apex-3.jpg',
        '/images/apex-4.jpg',
        '/images/apex-5.jpg',
        '/images/apex-6.jpg'
      ]
    },
    'azure-lounge': {
      title: 'Azure Royal Lounge',
      cat: 'Interior',
      location: 'Kolkata, West Bengal',
      area: '3,200 Sq.Ft',
      status: 'Completed 2024',
      vastuScore: '100%',
      description: 'A masterclass in contemporary luxury. This penthouse renovation balanced bold aesthetics with scientific space planning to enhance air flow and natural light.',
      beforeImg: '/images/lounge-before.jpg',
      afterImg: '/images/lounge-after.jpg',
      gallery: [
        '/images/lounge-1.jpg',
        '/images/lounge-2.jpg',
        '/images/lounge-3.jpg',
        '/images/lounge-4.jpg'
      ]
    }
  };

  const project = projects[id as keyof typeof projects] || projects['apex-plaza'];

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isResizing.current) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  return (
    <div className="bg-ivory pt-24 pb-24 min-h-screen font-body">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <Link to="/projects" className="inline-flex items-center text-gray-400 hover:text-gold transition-colors text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} className="mr-2" /> Back to Archives
        </Link>
      </div>

      {/* Project Header */}
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] block mb-4">Case Study • {project.cat}</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal mb-8 leading-tight uppercase tracking-widest">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg font-light leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 border-l border-charcoal/10 pl-8">
            <div className="space-y-1">
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><MapPin size={12} className="text-gold"/> Location</span>
              <p className="text-charcoal font-heading font-bold uppercase text-xs">{project.location}</p>
            </div>
            <div className="space-y-1">
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Layers size={12} className="text-gold"/> Built Area</span>
              <p className="text-charcoal font-heading font-bold uppercase text-xs">{project.area}</p>
            </div>
            <div className="space-y-1">
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Calendar size={12} className="text-gold"/> Timeline</span>
              <p className="text-charcoal font-heading font-bold uppercase text-xs">{project.status}</p>
            </div>
            <div className="space-y-1">
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2"><Compass size={12} className="text-gold"/> Vastu Logic</span>
              <p className="text-charcoal font-heading font-bold uppercase text-xs">{project.vastuScore} Compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-widest text-charcoal">Scientific Transformation</h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4"></div>
        </div>
        
        <div 
          className="relative aspect-video overflow-hidden shadow-2xl rounded-sm cursor-col-resize select-none"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onMouseDown={() => isResizing.current = true}
          onMouseUp={() => isResizing.current = false}
          onMouseLeave={() => isResizing.current = false}
          onTouchStart={() => isResizing.current = true}
          onTouchEnd={() => isResizing.current = false}
        >
          {/* After (Top Image) */}
          <div 
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src={project.afterImg} 
              alt={`${project.title} - Completed Architectural Design`}
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100vw' }}
              onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000' }}
            />
            <div className="absolute top-8 left-8 bg-gold text-charcoal px-6 py-2 text-[10px] font-bold uppercase tracking-widest">Scientific Outcome</div>
          </div>

          {/* Before (Bottom Image) */}
          <img 
            src={project.beforeImg} 
            alt={`${project.title} - Initial Site Condition`}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000' }}
          />
          <div className="absolute top-8 right-8 bg-charcoal/50 backdrop-blur text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest">Initial Context</div>

          {/* Slider Handle */}
          <div 
            className="absolute top-0 bottom-0 z-20 w-1 bg-white flex items-center justify-center pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <MoveHorizontal size={24} className="text-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-heading font-bold uppercase tracking-widest text-charcoal">Design Details Gallery</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {project.gallery.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden bg-charcoal rounded-sm shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              <img 
                src={img} 
                alt={`${project.title} - Interior Detail ${idx + 1}`}
                className="w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                loading="lazy"
                onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800' }}
              />
              <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={16} className="text-white" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-charcoal py-24 mx-4 rounded-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8 uppercase tracking-widest leading-tight">
            Inspired by this <span className="text-gold">Project?</span>
          </h2>
          <p className="text-gray-400 text-lg font-light mb-12">
            Let's discuss how we can apply these scientific design principles to your upcoming luxury space in West Bengal.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/booking" className="bg-gold text-charcoal px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-xl">
              Start Your Journey
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="border border-white/20 text-white px-12 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-charcoal transition-all">
              Call Principal Architect
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;