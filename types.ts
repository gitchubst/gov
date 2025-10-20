
export type Page = 
  'Home' | 
  'Candidate Profile' | 
  'Party History' | 
  'Speech' | 
  'Issues' | 
  'Brochure' | 
  'Interest Groups' | 
  'Campaign Items' | 
  'TV Commercial' |
  'Meet the Team' |
  'Events' |
  'Contribute';

export interface Issue {
  title: string;
  stance: string;
}

export interface InterestGroup {
  name: string;
  description: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface CampaignEvent {
  title: string;
  date: string;
  time: string;
  locationName: string;
  locationAddress: string;
  description: string;
}

export interface CampaignItem {
  name: string;
  price: string;
  src: string;
}

export type NavItem = Page | {
  title: string;
  children: Page[];
};