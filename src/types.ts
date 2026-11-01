export type EventType = 'wedding' | 'birthday' | 'community' | 'corporate' | 'festival';

export interface BudgetItem {
  id: string;
  category: string;
  allocated: number;
  spent: number;
  notes: string;
  status: 'on_track' | 'warning' | 'over';
}

export interface TimelineTask {
  id: string;
  title: string;
  timeOrOffset: string; // e.g. "6 Months Before", "10:00 AM"
  completed: boolean;
  notes: string;
  assignedTo?: string;
  category?: string;
}

export interface TimelinePhase {
  id: string;
  phaseName: string; // e.g., "6-12 Months Out", "1 Month Out", "Day of Event (Run of Show)"
  items: TimelineTask[];
}

export interface VendorItem {
  id: string;
  name: string;
  category: 'Venue' | 'Catering' | 'Photography' | 'Decor & Florist' | 'Music & DJ' | 'Attire & Styling' | 'Logistics & Security' | 'Other';
  contact: string;
  phone?: string;
  email?: string;
  status: 'researching' | 'contacted' | 'shortlisted' | 'booked' | 'paid';
  quote: number;
  deliverables: string[];
  checklist: { item: string; done: boolean }[];
  rating?: number;
}

export interface PersonalizedIdea {
  id: string;
  category: 'theme' | 'decor' | 'menu' | 'entertainment' | 'invitation' | 'speech_games';
  title: string;
  description: string;
  highlight?: string;
  tags: string[];
}

export interface GuestItem {
  id: string;
  name: string;
  category: 'VIP' | 'Family' | 'Friends' | 'Colleagues' | 'Community' | 'Vendor';
  status: 'confirmed' | 'pending' | 'declined';
  dietary: 'Veg' | 'Non-Veg' | 'Jain' | 'Vegan' | 'Gluten-Free' | 'None';
  plusOnes: number;
  table?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  actionTag?: string;
}

export interface EventPlan {
  id: string;
  title: string;
  type: EventType;
  date: string;
  daysRemaining: number;
  location: string;
  guestCount: number;
  totalBudget: number;
  currency: string;
  visionPrompt: string;
  theme: {
    name: string;
    colors: string[];
    aesthetic: string;
    dressCode: string;
  };
  budgetCategories: BudgetItem[];
  timeline: TimelinePhase[];
  vendors: VendorItem[];
  ideas: PersonalizedIdea[];
  guests: GuestItem[];
  copilotHistory: ChatMessage[];
}

