
export enum ServiceCategory {
  Architecture = 'Architecture',
  Interior = 'Interior',
  Construction = 'Construction / Renovation',
  Visualization = '3D Design & Walkthrough',
  Facade = 'Facade Automation',
  Legal = 'Legal & Approval',
  Vastu = 'Vastu Planning',
  LandPaperwork = 'Legal Land Paperwork'
}

export enum ProjectType {
  Residential = 'Residential',
  Commercial = 'Commercial'
}

export enum ConsultationMode {
  SiteVisit = 'Site Visit',
  OfficeVisit = 'Office Visit',
  OnlineCall = 'Online Call'
}

export interface BookingDetails {
  service: ServiceCategory;
  projectType: ProjectType;
  area: string;
  budget: string;
  location: string;
  vastuRequired: boolean;
  mode: ConsultationMode;
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  email: string;
  notes: string;
}

export type LeadPriority = 'HOT' | 'WARM' | 'COLD';
