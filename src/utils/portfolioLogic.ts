export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'dashboard' | 'systems';
  description: string;
  tags: string[];
  year: string;
  metrics: string;
  imageUrl: string;
  liveUrl?: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function filterProjects(projects: ProjectItem[], category: string): ProjectItem[] {
  if (!category || category === 'all') {
    return projects;
  }
  return projects.filter((p) => p.category === category);
}

export function calculateProjectEstimate(
  baseTier: 'starter' | 'growth' | 'enterprise',
  featuresCount: number = 0,
  isRushDelivery: boolean = false
): { estimatedMinUsd: number; estimatedMaxUsd: number; estimatedWeeks: number } {
  let baseMin = 4500;
  let baseMax = 7500;
  let baseWeeks = 3;

  if (baseTier === 'growth') {
    baseMin = 8500;
    baseMax = 14000;
    baseWeeks = 5;
  } else if (baseTier === 'enterprise') {
    baseMin = 18000;
    baseMax = 28000;
    baseWeeks = 8;
  }

  // Feature expansion
  const addPerFeature = 800;
  const featureMin = featuresCount * addPerFeature;
  const featureMax = featuresCount * (addPerFeature * 1.3);

  let finalMin = baseMin + featureMin;
  let finalMax = baseMax + featureMax;
  let finalWeeks = baseWeeks + Math.floor(featuresCount / 2);

  if (isRushDelivery) {
    finalMin = Math.round(finalMin * 1.25);
    finalMax = Math.round(finalMax * 1.25);
    finalWeeks = Math.max(1, Math.round(finalWeeks * 0.6));
  }

  return {
    estimatedMinUsd: finalMin,
    estimatedMaxUsd: finalMax,
    estimatedWeeks: finalWeeks,
  };
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your name (at least 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  if (!data.service || data.service === '') {
    errors.service = 'Please select a service interest';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please share a brief project summary (at least 10 characters)';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function formatReviewSummary(score: number, totalReviews: number): string {
  const rounded = score.toFixed(1);
  return `★ ${rounded} of 5 (${totalReviews}+ Reviews)`;
}
