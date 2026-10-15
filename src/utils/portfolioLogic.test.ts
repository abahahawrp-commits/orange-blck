import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProjects,
  calculateProjectEstimate,
  validateContactForm,
  formatReviewSummary,
  type ProjectItem,
} from './portfolioLogic.ts';

const mockProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'Fintech Dashboard',
    client: 'Vaultly',
    category: 'dashboard',
    description: 'Real-time analytics portal',
    tags: ['React', 'D3'],
    year: '2025',
    metrics: '+44% engagement',
    imageUrl: 'https://example.com/1.jpg',
  },
  {
    id: '2',
    title: 'Mobile Banking App',
    client: 'Kudo Pay',
    category: 'mobile',
    description: 'iOS & Android finance experience',
    tags: ['React Native', 'Figma'],
    year: '2024',
    metrics: '4.9 App Store',
    imageUrl: 'https://example.com/2.jpg',
  },
];

test('filterProjects returns all items when category is "all"', () => {
  const result = filterProjects(mockProjects, 'all');
  assert.equal(result.length, 2);
});

test('filterProjects filters strictly by given category', () => {
  const dashboards = filterProjects(mockProjects, 'dashboard');
  assert.equal(dashboards.length, 1);
  assert.equal(dashboards[0].id, '1');

  const empty = filterProjects(mockProjects, 'systems');
  assert.equal(empty.length, 0);
});

test('calculateProjectEstimate computes costs correctly', () => {
  const estimate = calculateProjectEstimate('starter', 0, false);
  assert.equal(estimate.estimatedMinUsd, 4500);
  assert.equal(estimate.estimatedMaxUsd, 7500);
  assert.equal(estimate.estimatedWeeks, 3);

  const rushEstimate = calculateProjectEstimate('growth', 2, true);
  assert.ok(rushEstimate.estimatedMinUsd > 8500);
  assert.ok(rushEstimate.estimatedWeeks <= 4);
});

test('validateContactForm checks required fields and email regex', () => {
  const invalid = validateContactForm({
    fullName: '',
    email: 'bad-email',
    service: '',
    budget: '',
    message: 'short',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.service);
  assert.ok(invalid.errors.message);

  const valid = validateContactForm({
    fullName: 'Sarah Chen',
    email: 'sarah@example.com',
    service: 'website',
    budget: '$10k-$20k',
    message: 'Looking for a redesign of our enterprise SaaS dashboard and landing page.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('formatReviewSummary formats rating string as expected', () => {
  const text = formatReviewSummary(4.9, 350);
  assert.equal(text, '★ 4.9 of 5 (350+ Reviews)');
});
