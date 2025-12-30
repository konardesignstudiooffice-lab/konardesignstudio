import React from 'react';
import { 
  Home, 
  Layers, 
  Map, 
  PenTool, 
  Camera, 
  ShieldCheck, 
  Activity,
  Compass,
  FileText,
  Gavel
} from 'lucide-react';
import { ServiceCategory } from './types';

export const BUSINESS_INFO = {
  name: 'Konar Design Studio',
  phone: '+91 7602750071',
  email: 'info@konardesignstudio.in',
  office: 'B-4/5 Tapaban Abasan, 54 Feet Road, Durgapur – 713213',
  whatsapp: '917602750071'
};

export const SERVICES = [
  {
    id: 'arch',
    title: 'Architectural Planning',
    description: 'Bespoke architectural designs that blend functionality with aesthetic excellence.',
    category: ServiceCategory.Architecture,
    icon: <Home className="w-8 h-8 text-gold" />,
    img: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'int',
    title: 'Interior Design',
    description: 'Ultra-luxury interior spaces curated for the modern connoisseur.',
    category: ServiceCategory.Interior,
    icon: <Layers className="w-8 h-8 text-gold" />,
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'const',
    title: 'Construction & Renovation',
    description: 'Turnkey solutions for building and transforming luxury residences.',
    category: ServiceCategory.Construction,
    icon: <Activity className="w-8 h-8 text-gold" />,
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'legal-land',
    title: 'Legal Land Paperwork & Municipality',
    description: 'End-to-end legal support for Land Deeds, Porcha, NOC, Mutation, and Municipality approvals.',
    category: ServiceCategory.LandPaperwork,
    icon: <FileText className="w-8 h-8 text-gold" />,
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200',
    details: ['Deed Registration & Verification', 'Porcha & ROR Documentation', 'NOC from Authorities', 'Land Conversion & Mutation', 'Municipality Plan Approval']
  },
  {
    id: '3d',
    title: '3D Visualization',
    description: 'Hyper-realistic walkthroughs and animations to visualize your future space.',
    category: ServiceCategory.Visualization,
    icon: <Camera className="w-8 h-8 text-gold" />,
    img: 'https://images.unsplash.com/photo-1558227691-41ea78d1f631?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'vastu',
    title: 'Vastu & Scientific Design',
    description: 'Alignment of energy and space through ancient wisdom and modern science.',
    category: ServiceCategory.Vastu,
    icon: <Compass className="w-8 h-8 text-gold" />,
    img: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'legal',
    title: 'Municipality Approval',
    description: 'Hassle-free legal land paperwork and municipality approval drawings.',
    category: ServiceCategory.Legal,
    icon: <ShieldCheck className="w-8 h-8 text-gold" />,
    img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=1200'
  }
];

export const TESTIMONIALS = [
  {
    name: "Arunav Roy",
    role: "Homeowner, Durgapur",
    content: "The attention to detail and Vastu integration provided by Konar Design Studio is unmatched. Highly professional team.",
    rating: 5
  },
  {
    name: "Dr. S. Chatterjee",
    role: "Surgeon, Kolkata",
    content: "For my Kolkata penthouse, I needed a design that balanced modern medical precision with luxury. Their structural planning is top-notch.",
    rating: 5
  },
  {
    name: "Rajesh Agarwal",
    role: "Industrialist, Burdwan",
    content: "Konar Studio handled our office complex in Burdwan with absolute professionalism. Their facade automation engineering is futuristic.",
    rating: 5
  },
  {
    name: "Ananya Sen",
    role: "Resort Owner, Bolpur",
    content: "They understood the aesthetic soul of Bolpur. Our boutique resort reflects the perfect blend of tradition and high-end design.",
    rating: 5
  },
  {
    name: "Somnath Banerjee",
    role: "Businessman, Bankura",
    content: "The scientific Vastu correction they performed for my commercial site in Bankura has brought immense positive energy to our operations.",
    rating: 5
  },
  {
    name: "Vikramjit Singh",
    role: "Real Estate Developer, Kolkata",
    content: "As a developer, I value speed and accuracy. Their municipality approval drawings are always flawless and their designs sell themselves.",
    rating: 5
  },
  {
    name: "Priya Mukherjee",
    role: "Boutique Owner, Durgapur",
    content: "They transformed my commercial space into a luxury landmark. Their 3D walkthrough was exactly what the final project looked like.",
    rating: 5
  },
  {
    name: "Subhashis Das",
    role: "CEO, Tech Solutions",
    content: "Efficient planning and smooth municipality approvals. They took all the headache away from the construction process.",
    rating: 5
  }
];