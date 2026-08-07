// Lead and Project Types
export interface Lead {
  id: string;
  name: string;
  mobile: string;
  email: string;
  occupation?: string;
  currentCity?: string;
  preferredContactTime?: string;
  whatsappConsent: boolean;
  status: LeadStatus;
  score: number;
  createdAt: Date;
  updatedAt: Date;
  requirements: ProjectRequirements;
  consultation?: Consultation;
  files: UploadedFile[];
}

export type LeadStatus =
  | 'new'
  | 'verified'
  | 'ai-qualified'
  | 'assigned'
  | 'consultation'
  | 'concept-design'
  | 'quotation'
  | 'negotiation'
  | 'agreement'
  | 'execution'
  | 'completed'
  | 'lost';

export interface ProjectRequirements {
  location: {
    state: string;
    city: string;
    climate?: string;
  };
  plot: {
    size: number;
    length?: number;
    width?: number;
    roadFacing: 'north' | 'south' | 'east' | 'west';
    isCorner: boolean;
    layoutFiles?: string[];
  };
  housePurpose: string;
  architecturalStyles: string[];
  floors: string;
  budget: number;
  timeline: string;
  familySize: {
    adults: number;
    children: number;
    parents: number;
    guests: number;
    pets: number;
  };
  lifestyle: {
    homeOffice: boolean;
    library: boolean;
    prayerRoom: boolean;
    courtyard: boolean;
    swimmingPool: boolean;
    homeTheatre: boolean;
    gym: boolean;
    servantQuarter: boolean;
    evCharging: boolean;
    rainwaterHarvesting: boolean;
    solar: boolean;
    organicGarden: boolean;
    cowShed: boolean;
    guestHouse: boolean;
    workshop: boolean;
  };
  interiorPreference: string;
  specialRequirements: string;
  inspirationFiles: string[];
}

export interface Consultation {
  date: Date;
  time: string;
  type: 'video' | 'phone' | 'site-visit' | 'office-visit';
  notes?: string;
}

export interface UploadedFile {
  id: string;
  filename: string;
  url: string;
  type: string;
  uploadedAt: Date;
}

// Wizard State
export interface WizardState {
  currentStep: number;
  mode: 'wizard' | 'ai-conversation';
  requirements: Partial<ProjectRequirements>;
  contactInfo: Partial<{
    name: string;
    mobile: string;
    email: string;
    occupation: string;
    currentCity: string;
    preferredContactTime: string;
    whatsappConsent: boolean;
  }>;
  isComplete: boolean;
}
