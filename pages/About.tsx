import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  UserCheck, 
  Quote, 
  Ruler, 
  Scale, 
  Zap, 
  Grid, 
  Image as ImageIcon, 
  Video, 
  Film, 
  Play, 
  MapPin,
  Award,
  BookOpen,
  PenTool
} from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const PORTFOLIO_GALLERY = [
  // KITCHEN - 2 IMAGES
  { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f', cat: 'Kitchen', title: 'Modern Modular Kitchen', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1556912173-3bb813e18138', cat: 'Kitchen', title: 'Luxury Culinary Space', status: 'Completed' },

  // SITE - 10 IMAGES
  { url: 'https://images.unsplash.com/photo-1503387762-592fca61450f', cat: 'Site', title: 'Foundation Execution', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5', cat: 'Site', title: 'Structural RCC Phase', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd', cat: 'Site', title: 'Slab Casting Monitoring', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1590644365607-1c5a519a9a37', cat: 'Site', title: 'Commercial Site Grading', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1531834685032-c744644a3075', cat: 'Site', title: 'Industrial Framework', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12', cat: 'Site', title: 'Precision Masonry', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1517089596392-db9a5e9478cc', cat: 'Site', title: 'Site Inspection Detail', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0', cat: 'Site', title: 'Heavy Structural Base', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1582266255745-9e509f3091ff', cat: 'Site', title: 'Safety & Execution', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1508450859948-4e04f9ad5b13', cat: 'Site', title: 'Multi-story Progress', status: 'Ongoing' },

  // 3D - 10 IMAGES
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750', cat: '3D', title: 'Villa Exterior Rendering', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', cat: '3D', title: 'Modern Facade Concept', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', cat: '3D', title: 'Landscape Visualization', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773', cat: '3D', title: 'Zen Garden 3D View', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3', cat: '3D', title: 'Living Space Perspective', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0', cat: '3D', title: 'Sunlight Simulation', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68', cat: '3D', title: 'Night Facade Lighting', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1600047509782-20d39509f26d', cat: '3D', title: 'Material Texture Render', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1600566752355-3979ff69a3bc', cat: '3D', title: 'Commercial Hub Concept', status: 'Completed' },
  { url: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f', cat: '3D', title: 'Contemporary Interior View', status: 'Completed' },

  // INTERIOR FOLDER - ONGOING & COMPLETED
  { url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace', cat: 'Interior', title: 'Luxury Suite - Execution Phase', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6', cat: 'Interior', title: 'Royal Regency Lounge', status: 'Completed' },

  // RESIDENTIAL FOLDER - ONGOING & COMPLETED
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', cat: 'Residential', title: 'The Emerald Heights', status: 'Ongoing' },
  { url: 'https://images.unsplash.com/photo-1613974055476-3d9a09d2358b', cat: 'Residential', title: 'The Sapphire Estate', status: 'Completed' },

  // EXTERIORS
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab', cat: 'Exterior', title: 'Commercial Glass Hub' },
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', cat: 'Exterior', title: 'Heritage Resort' },

  // MORE INTERIORS
  { url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c', cat: 'Interior', title: 'Ivory Master Suite' }
];

const PORTFOLIO_VIDEOS = [
  { url: 'https://assets.mixkit.io/videos/preview/mixkit-modern-apartment-with-a-view-43032-large.mp4', title: 'Penthouse 3D Perspective', cat: '3D' },
  { url: 'https://assets.mixkit.io/videos/preview/mixkit-interior-of-a-modern-house-with-a-staircase-44245-large.mp4', title: 'Spiral Staircase 3D Tour', cat: '3D' },
  { url: 'https://assets.mixkit.io/videos/preview/mixkit-modern-apartment-interior-design-32867-large.mp4', title: 'Premium Estate Walkthrough', cat: 'Residential' },
  { url: 'https://assets.mixkit.io/videos/preview/mixkit-luxury-home-with-pool-and-palm-trees-43035-large.mp4', title: 'Modern Villa Exterior', cat: '3D' },
  { url: 'https://assets.mixkit.io/videos/preview/mixkit-view-of-a-modern-dining-room-and-kitchen-43033-large.mp4', title: 'Gourmet Kitchen 3D View', cat: '3D' }
];

const About: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [mediaType, setMediaType] = useState<'Image' | 'Video'>('Image');

  const categories = ['All', 'Residential', 'Exterior', 'Interior', 'Kitchen', 'Site', '3D'];
  
  const filteredGallery = filter === 'All' 
    ? PORTFOLIO_GALLERY 
    : PORTFOLIO_GALLERY.filter(img => img.cat === filter);

  const filteredVideos = filter === 'All' 
    ? PORTFOLIO_VIDEOS 
    : PORTFOLIO_VIDEOS.filter(vid => vid.cat === filter);

  return (
    <div className="bg-ivory pt-32 overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 border-b border-charcoal/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="animate-in slide-in-from-left duration-1000">
            <h2 className="text-gold font-heading tracking-[0.3em] uppercase mb-4 text-xs font-bold">The Heritage</h2>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal leading-tight mb-8 uppercase tracking-widest">
              Designing <span className="text-gold">Tomorrow's</span> Legacy
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg font-light">
              Konar Design Studio, in professional association with Konar Associates (est. 2017), has redefined the architectural landscape of West Bengal. We represent the synergy of long-standing engineering experience and modern technological precision.
            </p>
          </div>
          <div className="relative group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
              alt="Konar Design Studio Architecture" 
              className="w-full h-[600px] object-cover rounded-sm shadow-2xl transition-transform duration-[3000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute -bottom-10 -left-10 bg-gold text-charcoal p-10 max-w-xs shadow-2xl z-10 border border-white/20 text-center">
              <div className="text-5xl font-heading font-bold mb-1">68+</div>
              <div className="text-[10px] uppercase tracking-[0.4em] font-bold border-t border-charcoal/20 pt-2 text-charcoal/80">Premium Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Principal Architect Section */}
      <section className="py-24 bg-white border-b border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/10 -z-10 rounded-full blur-3xl"></div>
              <div className="relative overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-charcoal/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Founder & Architect Prithwiraj Konar" 
                  className="w-full h-[550px] object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
              </div>
              <div className="absolute bottom-6 left-6 bg-white p-6 shadow-xl border-l-4 border-gold min-w-[200px]">
                <h4 className="font-heading font-bold text-charcoal text-sm uppercase tracking-widest">Prithwiraj Konar</h4>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mt-1">Founder & Principal Architect</p>
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2 animate-in slide-in-from-right duration-1000">
              <div className="space-y-4">
                <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs font-bold">The Visionary</h2>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal uppercase tracking-widest leading-tight">Leadership & <span className="text-gold">Innovation</span></h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-lg font-light italic">
                "Architecture is not just about building structures; it's about crafting experiences and balancing the cosmic energy of a space with modern engineering."
              </p>
              
              <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>
                  With a profound legacy starting from <strong>Konar Associates in 2017</strong>, Prithwiraj Konar has been a leading force in the architectural transformation of Durgapur and across West Bengal. His philosophy centers on the seamless integration of <strong>Scientific Vastu</strong> and ultra-modern design aesthetics.
                </p>
                <p>
                  Under his leadership, the studio has successfully delivered over 60 high-end residential and commercial landmarks, each reflecting a unique narrative of symmetry, light, and luxury.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-4 p-4 border border-charcoal/5 hover:border-gold transition-colors group">
                  <Award className="text-gold mt-1 shrink-0" size={24} />
                  <div>
                    <h5 className="font-heading font-bold text-charcoal text-xs uppercase tracking-widest">Design Excellence</h5>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">National recognition in structural innovation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 border border-charcoal/5 hover:border-gold transition-colors group">
                  <BookOpen className="text-gold mt-1 shrink-0" size={24} />
                  <div>
                    <h5 className="font-heading font-bold text-charcoal text-xs uppercase tracking-widest">Vastu Research</h5>
                    <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">Published expert in directional energy science.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link to="/booking" className="inline-flex items-center gap-3 bg-charcoal text-white px-10 py-5 font-bold uppercase tracking-widest text-[10px] hover:bg-gold hover:text-charcoal transition-all shadow-2xl">
                  Connect with Prithwiraj Konar <PenTool size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="portfolio" className="py-24 bg-ivory border-t border-charcoal/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gold font-heading tracking-[0.4em] uppercase text-xs mb-4 font-bold">Studio Vault</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-charcoal uppercase tracking-widest leading-tight">
              {mediaType === 'Image' ? `${PORTFOLIO_GALLERY.length} Records` : `${PORTFOLIO_VIDEOS.length} Walkthroughs`} <span className="text-gold">Archive</span>
            </h3>
            
            <div className="flex justify-center gap-2 mt-10">
              <button 
                onClick={() => setMediaType('Image')}
                className={`flex items-center gap-2 px-10 py-4 text-[10px] font-bold uppercase tracking-widest border transition-all ${mediaType === 'Image' ? 'bg-charcoal text-white border-charcoal shadow-2xl' : 'border-charcoal/10 text-gray-400 hover:text-charcoal'}`}
              >
                <ImageIcon size={14} /> Still Photos
              </button>
              <button 
                onClick={() => setMediaType('Video')}
                className={`flex items-center gap-2 px-10 py-4 text-[10px] font-bold uppercase tracking-widest border transition-all ${mediaType === 'Video' ? 'bg-charcoal text-white border-charcoal shadow-2xl' : 'border-charcoal/10 text-gray-400 hover:text-charcoal'}`}
              >
                <Video size={14} /> 3D Walkthroughs
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map(c => (
                <button 
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest border transition-all ${filter === c ? 'bg-gold border-gold text-charcoal' : 'border-charcoal/10 text-gray-400 hover:border-gold hover:text-gold'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {mediaType === 'Image' ? (
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {filteredGallery.map((item, idx) => (
                <div key={idx} className="relative group overflow-hidden bg-charcoal animate-in zoom-in duration-500 rounded-sm break-inside-avoid shadow-lg">
                  <img 
                    src={`${item.url}?auto=format&fit=crop&q=80&w=800`} 
                    alt={item.title} 
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                    loading="lazy" 
                  />
                  <div className="absolute top-2 left-2 pointer-events-none">
                    {(item as any).status && (
                      <span className={`px-3 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full border opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${(item as any).status === 'Ongoing' ? 'bg-royalBlue text-white border-royalBlue' : 'bg-gold text-charcoal border-gold'}`}>
                        {(item as any).status}
                      </span>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-gold text-[8px] font-bold uppercase tracking-[0.3em] mb-1 block">{item.cat}</span>
                    <h4 className="text-white text-[10px] font-heading font-bold uppercase tracking-widest">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video, idx) => (
                <div key={idx} className="relative group aspect-video overflow-hidden bg-charcoal rounded-sm shadow-2xl animate-in fade-in duration-700">
                  <video 
                    src={video.url} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
                    muted loop playsInline onMouseOver={e => e.currentTarget.play()} onMouseOut={e => {e.currentTarget.pause(); e.currentTarget.currentTime = 0;}}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent pointer-events-none p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 mb-2">
                       <Film size={12} className="text-gold" />
                       <span className="text-gold text-[8px] font-bold uppercase tracking-[0.3em]">{video.cat} Walkthrough</span>
                    </div>
                    <h4 className="text-white text-xs font-heading font-bold uppercase tracking-widest">{video.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;