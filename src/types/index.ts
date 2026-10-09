export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  accentColor: string;
  iconName: string;
}

export interface PillarCard {
  id: string;
  title: string;
  description: string;
  bgClass: string;
  textClass: string;
  iconClass: string;
  iconName: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
}

export interface InquiryFormData {
  name: string;
  organization: string;
  email: string;
  phone: string;
  projectType: string;
  services: string[];
  message: string;
}
