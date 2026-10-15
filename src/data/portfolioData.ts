import { ServiceItem, ProjectCaseStudy, TestimonialItem } from '../types/index.ts';

export const HERO_ASSETS = {
  portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAknM1NstFSpwBCN9Yp5_KaunWzHdyzxu6xB8QOA0LbonlKEBPsLyR9T9umzvtRhcPat9_77Lo1Sb9OYrdSFOiwBeljUoNcEd0YknurlukAISU85QVyjwxLOjGHNLiW3hdbZgA-z3P8Y27zI4YnBFhvf42mMa1xu7EE4VUQOCdcZIgeZtHkxCSZJn75PR53IoRCORsS4SCjPLJs_uPgODoL6d9DxAMm0tA9zFAwDu9wVq-iOTQFOvi_CObVbPw8yiAo',
  avatars: [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuDGRpjjv9cb_L7xDTe7z7Co7dj888TM8XjI-dODl1z9WRCl8HnPaaBK7MGvrrOYXEqOCdnKMIGB7LgoJbJ8FayDdLY-PNYncPTw7CUkp_sawdZS0YiuJudNHZZveY5bBj2QXStqonlrFtUKdRjEFoYqGkD9HFV3AyK0R8NIIBcwfiUdCg2bt9yWeVNf24Vktthyh7JHjkDL44Glb-IljyvGgVLWZG6b4tsTUGj_cis86BgJ1lRyGIs',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAl7fgkPIZdyN_LzKMh9hhSGsueB11X6WTTTufP00952R3eZ2eM1iE_LaKvGUAlObeeKkqPZhlIQTzcsF3a-Avd2xd5HT0FPUWoUkPAD8ZDcm6kOgOIdREhbfQGdkqZtPPtAQyIj1b2b7H79rl1Im5FXCOGm6GYQ6QSEMJ_2yS9t-vNgvYfJZZsugZKkTsbq1G0ttapgczbkiKDwwfF4_Rkal4BECzkAomB1xqBYQnVltqAfMnPUnA',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCPSa3kB0i2kq5-0klEv6_KelwK9kEOlnACJ6QETcopjWDeZ0h2LBuxoXOurByk1nk3M9ZiadnV9p_v2bk5wyk3IO1xRFh59mayCZMIT4fyfapNwVwPLiRjMkf9yW6K_hvqwbXcW6DQ5wiIJpMnhMXYftl5-apXDqN-ih_U67EyROQA9gZUEp59IJhHk8wSuSgooe3mWgwC8wwtKxqx6dqr9sLc5IhTpkej6arvxqqwkyZPPlN97Fg'
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    num: '01.',
    title: 'UI/UX Experience Design',
    tags: ['User Research', 'Information Architecture', 'Design Systems', 'Usability Testing'],
    description: 'Conducting in-depth customer journey mapping, intuitive user workflows, and comprehensive design architectures that align business goals with delightful human experiences.',
    ctaText: 'Start UI/UX Project',
    category: 'design'
  },
  {
    id: 'website-product-design',
    num: '02.',
    title: 'Website & Product Design',
    tags: ['Landing Page Design', 'Responsive Architecture', 'Wireframing & Prototyping', 'Custom Web UI/UX'],
    description: 'Designing sleek, user-friendly modern interfaces focused on seamless experiences, micro-interactions, conversion rate optimization, and brand elevation.',
    ctaText: 'Start Website Project',
    category: 'product'
  },
  {
    id: 'mobile-app-design',
    num: '03.',
    title: 'Mobile & Web Application Design',
    tags: ['iOS & Android UI', 'Native HIG & Material', 'Touch Gestures', 'React Native Compatible'],
    description: 'Crafting pixel-perfect, native-feel mobile and cross-platform applications with thumb-friendly controls, tactile feedback, and seamless offline-first interfaces.',
    ctaText: 'Start Mobile Project',
    category: 'mobile'
  },
  {
    id: 'dashboard-saas-engineering',
    num: '04.',
    title: 'Dashboard & SaaS Interface Engineering',
    tags: ['Data Visualization', 'Analytics UI', 'SaaS Architecture', 'Design Ops'],
    description: 'Structuring complex enterprise workflows, multi-tenant dashboards, and clean analytic visualizations into clutter-free, high-utility operational hubs.',
    ctaText: 'Start Dashboard Project',
    category: 'engineering'
  },
  {
    id: 'wireframing-systems-prototyping',
    num: '05.',
    title: 'Wireframing, Systems & Interactive Prototyping',
    tags: ['Low-fi to High-fi', 'Clickable Prototypes', 'Micro-interactions', 'Token Management'],
    description: 'Eliminating guesswork before development with realistic high-fidelity prototypes, production-ready Figma design tokens, and comprehensive developer handoffs.',
    ctaText: 'Start Prototype Project',
    category: 'systems'
  }
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'lumina-saas',
    title: 'Lumina Cloud Intelligence Dashboard',
    client: 'Lumina Analytics',
    category: 'dashboard',
    categoryLabel: 'SaaS & Dashboard',
    description: 'Enterprise data visualization suite handling 50M+ events/day with real-time anomaly detection and modular workspaces.',
    fullStory: 'Lumina required a complete reinvention of their core operational cockpit. We engineered a scalable design token library and implemented virtualized high-throughput charting components.',
    challenge: 'Enterprise users experienced cognitive overload and slow render times across multi-chart multi-tenant telemetry dashboards.',
    solution: 'Designed an adaptive modular widget architecture with sub-second filter responses, dark-first ergonomic UI, and contextual command palettes.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Figma Tokens'],
    year: '2025',
    metrics: '+185%',
    metricLabel: 'User Workflow Speed',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-amber-500/20 to-orange-600/20'
  },
  {
    id: 'solstice-pay',
    title: 'Solstice Mobile Fintech Banking App',
    client: 'Solstice Finance',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    description: 'Next-gen global treasury and multi-currency mobile wallet for international creators and remote contractors.',
    fullStory: 'Engineered an ultra-fluid iOS & Android banking client with biometrics, zero-lag conversion previews, and tactile haptic feedback.',
    challenge: 'Navigating multi-currency FX transfers with fluctuating spreads was confusing and resulted in high mid-funnel checkout drops.',
    solution: 'Introduced transparent real-time rate lock animations, one-swipe confirmation, and predictive cash flow summaries.',
    tags: ['iOS & Android', 'React Native', 'Design System', 'Micro-Interactions'],
    year: '2024',
    metrics: '$42M+',
    metricLabel: 'Monthly Volume',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-amber-600/20 to-neutral-800'
  },
  {
    id: 'vortex-ecommerce',
    title: 'Vortex Audio Flagship Storefront',
    client: 'Vortex Acoustics',
    category: 'web',
    categoryLabel: 'Web & Brand',
    description: 'Immersive luxury e-commerce experience for audiophile headphones featuring interactive 360 acoustic soundstage simulations.',
    fullStory: 'Replaced a legacy templated shop with a high-fidelity visual narrative that won 3 Awwwards Site of the Day honors.',
    challenge: 'Selling $1,200 studio reference headphones online without allowing customers to experience sound physics in a retail store.',
    solution: 'Built an interactive frequency response visualizer and interactive materials inspection tool with smooth scroll storytelling.',
    tags: ['Next.js', 'WebAudio API', 'Three.js', 'Tailwind CSS'],
    year: '2024',
    metrics: '+64%',
    metricLabel: 'Conversion Lift',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-amber-400/20 to-amber-900/30'
  },
  {
    id: 'prism-design-system',
    title: 'Prism Multi-Brand Design System',
    client: 'Apex Global Holdings',
    category: 'systems',
    categoryLabel: 'Design System',
    description: 'Unified cross-platform design token engine powering 14 product teams across web, iOS, Android, and desktop applications.',
    fullStory: 'Built from foundational atomic tokens to complex interactive enterprise component primitives with 100% WCAG AAA contrast compliance.',
    challenge: '14 disjointed squads were shipping fragmented design patterns, bloating bundle sizes and inflating release cycle times.',
    solution: 'Architected automated token sync via Style Dictionary and Figma REST API, reducing UI development cycle time by 40%.',
    tags: ['Figma Tokens', 'Storybook', 'TypeScript', 'WCAG AAA'],
    year: '2024',
    metrics: '14 Squads',
    metricLabel: 'Unified Workflow',
    imageUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    gradient: 'from-neutral-800 to-amber-950/40'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'lumina-vp',
    name: 'Elena Rostova',
    role: 'VP of Product Design',
    company: 'Lumina Analytics',
    avatarUrl: HERO_ASSETS.avatars[0],
    quote: 'Alex possesses that rare and potent synthesis of meticulous aesthetic sensibility and deep technical competence. He delivered our design system weeks ahead of schedule and the engineering team praised the cleanliness of his handoff.',
    rating: 5,
    highlightTag: 'Design System & SaaS'
  },
  {
    id: 'solstice-founder',
    name: 'Marcus Vance',
    role: 'Co-Founder & CEO',
    company: 'Solstice Finance',
    avatarUrl: HERO_ASSETS.avatars[1],
    quote: 'Working with Alex fundamentally elevated our product trajectory. He did not just execute wireframes; he re-examined our core checkout journey and helped boost onboarding completion by 38% in the first sprint.',
    rating: 5,
    highlightTag: 'Fintech Mobile App'
  },
  {
    id: 'vortex-creative',
    name: 'Chloe Sinclair',
    role: 'Head of Brand Experience',
    company: 'Vortex Acoustics',
    avatarUrl: HERO_ASSETS.avatars[2],
    quote: 'Alex is the designer every creative director dreams of finding. His attention to typographic rhythm, tactile micro-interactions, and responsive layout integrity made our flagship launch an immediate industry benchmark.',
    rating: 5,
    highlightTag: 'Brand & E-Commerce'
  }
];

export const MARQUEE_ITEMS = [
  'UI/UX DESIGN',
  'DASHBOARD ENGINEERING',
  'WEBSITE DESIGN',
  'WIREFRAMING & PROTOTYPING',
  'DESIGN SYSTEM ARCHITECTURE',
  'MOBILE APP DESIGN',
  'FULL-STACK WEB APPS',
  'INTERACTION DESIGN',
  'DESIGN OPS & TOKENS'
];
