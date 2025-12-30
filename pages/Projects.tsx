import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Hammer, X, Calendar, Phone, Clock, Send, Play } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const GALLERY_PHOTOS = [
  // 1-6: KITCHEN ARCHIVE
  { url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f', cat: 'Kitchen' },
  { url: 'https://images.unsplash.com/photo-1556912173-3bb813e18138', cat: 'Kitchen' },
  { url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136', cat: 'Kitchen' },
  { url: 'https://images.unsplash.com/photo-1556909114-89e7f2220870', cat: 'Kitchen' },
  { url: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1', cat: 'Kitchen' },
  { url: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf', cat: 'Kitchen' },

  // 7-16: LUXURY INTERIORS
  { url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1616486701797-0f33f61038ec', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20', cat: 'Interior' },
  { url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45', cat: 'Interior' },

  // 17-24: EXTERIORS & FACADES
  { url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811', cat: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d', cat: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750', cat: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab', cat: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb', cat: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6', cat: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1513584684374-8bdb74838a0f', cat: 'Exterior' },
  { url: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739', cat: 'Exterior' },

  // 25-30: RESIDENTIAL ESTATES
  { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', cat: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1613974055476-3d9a09d2358b', cat: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1600047509782-20d39509f26d', cat: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3', cat: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b', cat: 'Residential' },
  { url: 'https://images.unsplash.com/photo-1600566752355-3979ff69a3bc', cat: 'Residential' },

  // 31-33: LIVE SITE PROGRESS
  { url: 'https://images.unsplash.com/photo-1503387762-592fca61450f', cat: 'Site' },
  { url: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5', cat: 'Site' },
  { url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd', cat: 'Site' },

  // 34-36: COMMERCIAL HUB
  { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c', cat: 'Commercial' },
  { url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2', cat: 'Commercial' },
  { url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174', cat: 'Commercial' }
];

interface Project {
  id: string;
  title: string;
  cat: string;
  location: string;
  media: string;
  videoUrl?: string;
  desc: string;
  status: 'Completed' | 'Ongoing';
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div 
      className="group relative overflow-hidden aspect-[16/10] bg-charcoal shadow-2xl border border-charcoal/5 hover:shadow-[0_0_30px_rgba(201,162,77,0.2)] transition-all duration-700 animate-in zoom-in duration-700"
    >
      <div className="absolute top-4 left-4 z-30 pointer-events-none">
        <span className={`px-4 py-1 text-[8px] font-bold uppercase tracking-widest rounded-full border ${project.status === 'Ongoing' ? 'bg-royalBlue text-white border-royalBlue animate-pulse' : 'bg-gold text-charcoal border-gold'}`}>
          {project.status}
        </span>
      </div>

      <div className="w-full h-full relative overflow-hidden">
        {project.videoUrl ? (
          <video 
            src={project.videoUrl} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-700"
            autoPlay 
            muted 
            loop 
            playsInline
          />
        ) : (
          <img 
            src={project.media} 
            alt={`${project.title} Luxury Architecture Durgapur`} 
            className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
          />
        )}
        <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors duration-700"></div>
        {project.videoUrl && (
          <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full border border-white/20">
            <Play size={12} className="text-white fill-white" />
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 md:p-12 pointer-events-none group-hover:pointer-events-auto">
        <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-[1px] w-8 bg-gold"></div>
            <span className="text-gold text-[10px] font-bold uppercase tracking-[0.3em]">{project.cat}</span>
          </div>
          <h3 className="text-white font-heading font-bold text-2xl md:text-3xl uppercase tracking-widest leading-tight mb-3">
            {project.title}
          </h3>
          <p className="text-white/80 text-[10px] md:text-xs font-light max-w-md mb-6">{project.desc}</p>
          <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-gold text-[10px] font-bold uppercase tracking-widest border-b border-gold/30 pb-2 pointer-events-auto">
            View Details <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Interior');
  const [isLoading, setIsLoading] = useState(false);
  
  const categories = ['Master Gallery', 'Commercial', 'Interior', 'Residential', '3D Walkthrough'];
  
  const projectList: Project[] = [
    { 
      id: 'royal-regency-lounge', 
      title: 'Royal Regency Lounge', 
      cat: 'Interior', 
      location: 'Kolkata', 
      media: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      status: 'Completed',
      desc: 'Flagship luxury interior project featuring royal architectural motifs and modern bespoke lounge seating.'
    },
    { 
      id: 'luxury-suite-execution', 
      title: 'Obsidian Master Suite', 
      cat: 'Interior', 
      location: 'Durgapur City Centre', 
      media: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
      status: 'Ongoing',
      desc: 'Execution stage for a high-end master suite featuring bespoke millwork and premium finishes.'
    },
    { 
      id: 'emerald-heights', 
      title: 'The Emerald Heights', 
      cat: 'Residential', 
      location: 'Durgapur', 
      media: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      status: 'Ongoing',
      desc: 'Ongoing premium residential project focusing on scientific layout and modern facade design.'
    },
    { 
      id: 'sapphire-estate', 
      title: 'The Sapphire Estate', 
      cat: 'Residential', 
      location: 'Burdwan', 
      media: 'https://images.unsplash.com/photo-1613974055476-3d9a09d2358b',
      status: 'Completed',
      desc: 'A completed structural marvel blending traditional heritage with modern amenities.'
    },
    { 
      id: 'apex-plaza', 
      title: 'Apex Business Plaza', 
      cat: 'Commercial', 
      location: 'Durgapur', 
      media: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      status: 'Ongoing',
      desc: '12-story high-tech corporate center featuring sustainable glass facade automation.'
    },
    { 
      id: 'spiral-tour', 
      title: 'Spiral Staircase Walkthrough', 
      cat: '3D Walkthrough', 
      location: 'Conceptual Studio', 
      media: 'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4',
      videoUrl: 'https://assets.mixkit.io/videos/preview/mixkit-interior-of-a-modern-house-with-a-staircase-44245-large.mp4',
      status: 'Completed',
      desc: 'Hyper-realistic 3D walkthrough showcasing intricate structural joinery and light flow analysis.'
    },
    { 
      id: 'villa-exterior-tour', 
      title: 'Modern Villa Walkthrough', 
      cat: '3D Walkthrough', 
      location: 'Durgapur', 
      media: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811',
      videoUrl: 'https://assets.mixkit.io/videos/preview/mixkit-luxury-home-with-pool-and-palm-trees-43035-large.mp4',
      status: 'Ongoing',
      desc: 'Comprehensive exterior walkthrough featuring landscaped pools and contemporary facade lighting.'
    }
  ];

  const handleFilterChange = (newFilter: string) => {
    setIsLoading(true);
    setFilter(newFilter);
    setTimeout(() => setIsLoading(false), 500);
  };

  const filteredProjects = projectList.filter(p => p.cat === filter);

  return (
    <div className="bg-ivory pt-32 pb-24 min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal mb-4 uppercase tracking-widest">
            Design <span className="text-gold">Archives</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-4 mt-12 border-b border-charcoal/10 pb-4">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => handleFilterChange(c)}
                className={`px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative ${filter === c ? 'text-charcoal' : 'text-gray-400 hover:text-gold'}`}
              >
                {c}
                {filter === c && (
                  <div className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-gold animate-in slide-in-from-left duration-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {filter === 'Master Gallery' ? (
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {GALLERY_PHOTOS.map((img, idx) => (
              <div key={idx} className="relative group overflow-hidden bg-charcoal rounded-sm shadow-xl break-inside-avoid">
                <img 
                  src={`${img.url}?auto=format&fit=crop&q=80&w=600`} 
                  alt="Konar Design Studio Archive" 
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-[8px] font-bold uppercase tracking-widest border border-white/20 px-2 py-1">{img.cat} Record</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-24 text-center">
                <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">Records pending in this specific category.</p>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;