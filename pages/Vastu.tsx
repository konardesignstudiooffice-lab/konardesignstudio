import React from 'react';
import { Compass, Sun, Wind, Droplets, Map, Zap, Moon, Anchor, Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCategory } from '../types';

const Vastu: React.FC = () => {
  const elements = [
    { title: 'Air (Vayu)', icon: <Wind className="text-blue-400" />, desc: 'Northwest - Governs movement and communication flow.' },
    { title: 'Fire (Agni)', icon: <Zap className="text-orange-500" />, desc: 'Southeast - Energy, heat, and metabolic fire.' },
    { title: 'Water (Jal)', icon: <Droplets className="text-blue-600" />, desc: 'Northeast - Clarity, wisdom, and spiritual peace.' },
    { title: 'Earth (Prithvi)', icon: <Map className="text-amber-700" />, desc: 'Southwest - Stability, strength, and grounding.' }
  ];

  const vastuSectors = [
    { dir: 'NW', label: 'Northwest', purpose: 'Guest / Movement', element: 'Air', icon: <Wind size={14} className="text-blue-400" /> },
    { dir: 'N', label: 'North', purpose: 'Wealth / Kuber', element: 'Water', icon: <Anchor size={14} className="text-blue-500" /> },
    { dir: 'NE', label: 'Northeast', purpose: 'Spiritual / Entry', element: 'Water', icon: <Droplets size={14} className="text-blue-600" /> },
    { dir: 'W', label: 'West', purpose: 'Social / Study', element: 'Space', icon: <Moon size={14} className="text-indigo-400" /> },
    { dir: 'C', label: 'Brahmasthan', purpose: 'Sacred Center', element: 'Ether', icon: <Sparkles size={14} className="text-gold" /> },
    { dir: 'E', label: 'East', purpose: 'Health / Social', element: 'Sun', icon: <Sun size={14} className="text-orange-400" /> },
    { dir: 'SW', label: 'Southwest', purpose: 'Master Bed', element: 'Earth', icon: <Map size={14} className="text-amber-700" /> },
    { dir: 'S', label: 'South', purpose: 'Strength', element: 'Earth', icon: <ShieldCheck size={14} className="text-red-800" /> },
    { dir: 'SE', label: 'Southeast', purpose: 'Kitchen / Fire', element: 'Fire', icon: <Zap size={14} className="text-orange-600" /> },
  ];

  return (
    <div className="bg-ivory pt-32 min-h-screen">
      {/* Vastu Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in slide-in-from-left duration-1000">
            <h2 className="text-gold font-heading tracking-[0.4em] uppercase mb-4 text-xs font-bold">The Science of Direction</h2>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-charcoal mb-8 leading-tight">Scientific Vastu Design</h1>
            <p className="text-gray-600 leading-relaxed text-lg mb-8 font-light max-w-lg">
              We align modern luxury with ancient cosmic geometry. Our planning ensures your space breeds health, wealth, and profound peace of mind through precise directional calibration.
            </p>
            <div className="flex gap-4">
                <Link 
                  to="/booking" 
                  state={{ service: ServiceCategory.Vastu }}
                  className="inline-block bg-charcoal text-white px-10 py-4 font-bold uppercase tracking-widest text-[10px] hover:bg-gold hover:text-charcoal transition-all shadow-xl"
                >
                  Consult Vastu Expert
                </Link>
                <div className="flex items-center gap-2">
                    <Compass className="text-gold animate-spin-slow" />
                    <span className="text-[10px] uppercase font-bold tracking-widest text-charcoal/40">100% Scientific Approach</span>
                </div>
            </div>
          </div>
          <div className="relative group overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
              alt="Vastu Interior" 
              className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/0 transition-colors"></div>
            <div className="absolute top-0 right-0 p-8">
              <div className="bg-gold text-charcoal p-4 text-center shadow-2xl">
                <span className="block text-2xl font-heading font-bold">100%</span>
                <span className="text-[8px] uppercase font-bold tracking-widest">Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Mandala Grid Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-gold font-heading tracking-[0.4em] uppercase mb-4 text-sm font-bold">The Vastu Purusha Mandala</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">Spatial Energy Matrix</h3>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm font-light leading-relaxed">The 9-sector grid represents the balanced architectural body. Every room has its designated cosmic coordinate.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
                <div className="grid grid-cols-3 grid-rows-3 w-full aspect-square border-8 border-white/5 bg-white/5 shadow-2xl overflow-hidden">
                    {vastuSectors.map((sector, i) => (
                    <div 
                        key={i} 
                        className={`border border-white/10 flex flex-col items-center justify-center p-4 text-center transition-all duration-500 hover:bg-gold hover:scale-[1.02] group relative ${i === 4 ? 'bg-gold/10' : ''}`}
                    >
                        <div className="mb-2 text-gold group-hover:text-charcoal transition-colors">{sector.icon}</div>
                        <span className="text-[11px] text-white/30 font-bold uppercase tracking-widest mb-1 group-hover:text-charcoal/50">{sector.dir}</span>
                        <span className="text-[12px] text-white font-bold uppercase tracking-tight mb-1 group-hover:text-charcoal">{sector.label}</span>
                        <span className="text-[8px] text-gold font-medium uppercase italic group-hover:text-charcoal/80">{sector.purpose}</span>
                    </div>
                    ))}
                </div>
            </div>

            <div className="order-1 lg:order-2 space-y-12">
                <div>
                    <h4 className="text-white font-heading font-bold text-2xl uppercase tracking-widest mb-4">Sun & Earth Alignment</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        True Vastu is scientific. We calculate the solar trajectory to ensure your living rooms receive the disinfectant morning sun, while blocking the harsh infrared heat in the afternoon. 
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-heading font-bold text-2xl uppercase tracking-widest mb-4">Magnetic North Integrity</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        The human brain responds to the Earth's magnetic fields. Our planning aligns bed positions and work desks to prevent neurological stress and enhance cognitive performance.
                    </p>
                </div>
                <div className="pt-8">
                    <Link 
                      to="/booking" 
                      state={{ service: ServiceCategory.Vastu }}
                      className="border border-gold text-gold px-12 py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-gold hover:text-charcoal transition-all"
                    >
                        Request Site Vastu Audit
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vastu;