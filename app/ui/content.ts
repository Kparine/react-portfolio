/**
 * Site copy for the v2 UI. Only facts Kevin has confirmed belong here: no invented metrics or
 * outcomes. Unconfirmed sections are left out rather than shown as placeholders.
 */

export interface Bullet {
  lead?: string;
  text: string;
}

export interface Section {
  heading: string;
  paragraphs?: string[];
  bullets?: Bullet[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** Short label under the title in the Work selector. */
  kicker: string;
  /** One or two sentences shown on Work and as the page description. */
  summary: string;
  /** Subtitle line on the case study page. */
  context: string;
  role: string;
  /** Artwork served from public/. */
  art: string;
  sections: Section[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'build-once-promote-everywhere',
    title: 'Build once, promote everywhere',
    kicker: 'Platform · artifact promotion',
    summary:
      'One tested build, promoted to every environment, with URLs resolved at runtime instead of baked in at build time.',
    context: 'Frontend artifact promotion at FloQast',
    role: 'Senior Software Engineer · Lead, frontend implementation',
    art: '/art/promote.svg',
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          "FloQast is a SaaS platform for accounting teams' month-end close. Every one of its frontends was built separately for each environment, with URLs and configuration fixed at build time. Promoting a release meant rebuilding it, so the code running in production was never exactly the artifact QA had tested in staging.",
        ],
      },
      {
        heading: 'My role',
        paragraphs: [
          'I worked with one partner and took full ownership of the frontend side: moving every frontend client to promotable artifacts, and designing and publishing the shared URL resolution library they all depend on.',
        ],
      },
      {
        heading: 'The decision',
        paragraphs: [
          'Move configuration from build time to runtime. Each app now asks a config service for its settings when it starts, and the service fills in the right URLs based on the domain the browser is on. Any environment can serve the same artifact.',
          'I designed a shared library that every frontend client and shared package uses to build URLs. On startup, the app sets it up with the environment it received from the config service. If no environment is provided, the library works it out from the domain itself, so it stays correct even where the app hasn’t set it up.',
        ],
      },
      {
        heading: 'The tradeoff',
        paragraphs: [
          'Runtime configuration adds a blocking request to every app’s startup. I accepted that on purpose. The request is small with a tiny payload, and if it failed, the app would very likely have failed anyway. One small, predictable request at startup was worth getting rid of a separate build for each environment.',
        ],
      },
      {
        heading: 'Shipping it safely',
        bullets: [
          {
            lead: 'Rollback.',
            text: 'A feature flag let each client switch between fetching configuration at runtime and its previous build-time values.',
          },
          {
            lead: 'Release checks.',
            text: 'Automated checks verified that no hardcoded URLs remained: the kind of bug that makes one artifact behave differently from one environment to the next.',
          },
          {
            lead: 'Migration.',
            text: 'With a flag per client and a library that worked with or without the config service, clients moved over one at a time. No coordinated cutover was needed.',
          },
        ],
      },
      {
        heading: 'What changed',
        bullets: [
          {
            text: 'Every frontend client across the organization ships as one immutable artifact, and promotion reuses the exact build that was tested.',
          },
          {
            text: 'The shared URL library supports multi-region and ephemeral deployments without a rebuild.',
          },
        ],
      },
    ],
  },
  {
    slug: 'only-download-what-changed',
    title: 'Only download what changed',
    kicker: 'Platform · micro-frontend delivery',
    summary:
      'Each release gets its own URL, and one small import map lists the current release of every app, so users download only the apps that changed.',
    context: 'Micro-frontend delivery at FloQast',
    role: 'Senior Software Engineer · Project lead',
    art: '/art/cache.svg',
    sections: [
      {
        heading: 'The problem',
        paragraphs: [
          "FloQast is a SaaS platform for accounting teams' month-end close. Its frontend is made of many single-spa micro-frontends, each released on its own schedule. When the app starts, it requests an import map: one file that tells SystemJS where to find each micro-frontend’s bundle.",
          'Many of those apps release infrequently, so most of what a returning user needs hasn’t changed since their last visit. The goal was for users to download only what had.',
        ],
      },
      {
        heading: 'My role',
        paragraphs: [
          'I led and owned the project, building the resource map updater from a design by my engineering manager, with guidance from a senior engineer.',
        ],
      },
      {
        heading: 'How it works',
        bullets: [
          {
            lead: 'Every release gets its own URL.',
            text: 'Each build is published to a new versioned path, and a published bundle never changes, so it can be cached safely.',
          },
          {
            lead: 'Only the import map changes.',
            text: 'After a build, a shared GitHub Actions workflow calls the resource map updater, a Lambda function. It reads the current map from S3, replaces that one app’s entry, and writes the merged map back.',
          },
          {
            lead: 'The app reads the map when it starts.',
            text: 'Entries for apps that didn’t change still point to bundles the browser already has. Only an updated app has a new URL to fetch.',
          },
          {
            lead: 'Same stack as the app.',
            text: 'The bundles were already served from CloudFront, so the updater was built on S3, Lambda and GitHub Actions rather than a separate deployment service.',
          },
        ],
      },
      {
        heading: 'The tradeoff',
        paragraphs: [
          'Every app’s release writes to the same file, so two releases landing at once could overwrite each other’s change. The updater runs one update at a time and retries on conflict, so simultaneous releases are applied in turn instead of racing. Releases occasionally wait on each other; in exchange, they can’t overwrite each other’s entries.',
        ],
      },
      {
        heading: 'Safeguards',
        bullets: [
          {
            lead: 'Registration check.',
            text: 'The workflow blocks the release of any app that isn’t registered with the updater, so a typo or an unregistered app can’t add an entry to production’s map.',
          },
          {
            lead: 'Rollback without a rebuild.',
            text: 'Old releases stay at their own paths. If a client broke, an engineer could point its entry in the map back to the last good bundle.',
          },
        ],
      },
    ],
  },
];

export function findCaseStudy(slug: string | undefined): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export const contact = {
  email: 'kparine314@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kevin-parine/',
  github: 'https://github.com/Kparine',
};

/** Existing hosted résumé (same link the legacy site uses). */
export const resumePdf =
  'https://drive.google.com/file/d/1jdKGghlL0t8JoxwfYYijd2nw9DHfvYGQ/view?usp=sharing';

export interface Role {
  title: string;
  org: string;
  where: string;
  dates: string;
  bullets: { text: string; caseStudy?: string }[];
}

export const experience: Role[] = [
  {
    title: 'Senior Software Engineer',
    org: 'FloQast',
    where: 'Remote',
    dates: 'Jun 2022 – Present',
    bullets: [
      {
        text: 'Led frontend implementation for artifact promotion across the whole organization and all frontend clients, replacing environment-specific builds with immutable artifacts and runtime configuration.',
        caseStudy: 'build-once-promote-everywhere',
      },
      {
        text: 'Conceived, architected, and published a shared runtime URL resolution library used across frontend clients and libraries to generate URLs for hosted environments, supporting multi-region and ephemeral deployments with feature flags for rollback and automated release checks.',
      },
      {
        text: 'Built hosted import maps on AWS CloudFront, centralizing micro-frontend module resolution and caching import maps at the edge.',
      },
      {
        text: 'Owned and modernized shared React application templates, migrating builds from webpack 4 to Rsbuild and adopting Vitest for testing.',
      },
      { text: 'Built tooling to preserve repository history during monorepo migrations.' },
      {
        text: 'Lead engineering for Chat and Artifacts on the Core AI team, guiding product architecture, feature delivery, and operational support.',
      },
      {
        text: 'Built Model Context Protocol (MCP) connector interfaces for granular tool permissions, authentication configuration, and integration with AI Chat.',
      },
    ],
  },
  {
    title: 'Software Development Engineer',
    org: 'Microsoft (contract via Amplify Consulting Partners)',
    where: 'Redmond, WA',
    dates: 'Nov 2020 – Jun 2022',
    bullets: [
      { text: 'Served as primary engineer for the Azure Virtual Machine Selection Tool pricing application.' },
      {
        text: 'Supported the Azure Pricing Calculator, resolving issues in legacy code and refactoring TypeScript and React components.',
      },
    ],
  },
  {
    title: 'Software Developer',
    org: 'Atomic Infotech',
    where: 'Seattle, WA',
    dates: 'May 2019 – Oct 2020',
    bullets: [
      { text: 'Built reusable React tools for a retail intranet and worked with clients and designers to define features.' },
      { text: 'Refactored Node.js and SQL components and troubleshot issues across the application.' },
    ],
  },
];

export const earlierExperience = [
  { title: 'Geotechnical Field Inspector', org: 'Materials Testing and Consulting', dates: 'Apr 2017 – Aug 2018' },
  {
    title: 'Hydrographic Survey Technician',
    org: 'National Oceanic and Atmospheric Administration',
    dates: 'Mar 2015 – Feb 2016',
  },
];

export const education = [
  { title: 'Certificate, Software Development', org: 'Galvanize', dates: 'Sep 2018 – Mar 2019' },
  { title: 'B.Sc. Geology, geophysics focus', org: 'Western Washington University', dates: 'Dec 2011' },
];

export const skills =
  'TypeScript, JavaScript, React, Redux, single-spa, Node.js, Nx, Rsbuild, AWS (ECS, Lambda, S3, CloudFront, CloudWatch, Route 53), Git, GitHub, PostgreSQL';
