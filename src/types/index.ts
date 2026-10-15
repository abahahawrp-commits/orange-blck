export interface ServiceItem {
  id: string;
  num: string;
  title: string;
  tags: string[];
  description: string;
  ctaText: string;
  category: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'dashboard' | 'systems';
  categoryLabel: string;
  description: string;
  fullStory: string;
  challenge: string;
  solution: string;
  tags: string[];
  year: string;
  metrics: string;
  metricLabel: string;
  imageUrl: string;
  gradient: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  quote: string;
  rating: number;
  highlightTag: string;
}
