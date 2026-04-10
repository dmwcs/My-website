import type { Metadata } from 'next';
import Image from 'next/image';
import { ExperienceTabs } from './components/ExperienceTabs';
import { TypewriterHero } from './components/TypewriterHero';
import { ProjectsSection } from './components/ProjectsSection';
import type { DispatchProject } from './components/DispatchItem';

export const metadata: Metadata = {
  title: 'Shelton Cui',
};

// ---------------------------------------------------------------------
// CONTENT
// ---------------------------------------------------------------------

const experiences = [
  {
    company: 'TechScrum',
    role: 'Full-stack Developer',
    location: 'Melbourne',
    period: 'Jan 2025 — Oct 2025',
    blurb:
      'Project management SaaS platform for distributed teams to track work and collaborate in real time.',
    highlights: [
      'Designed a unified component library on Tailwind CSS to standardise UI patterns across the product.',
      'Refactored a legacy codebase into a modular architecture, reducing technical debt and unblocking long-term maintainability.',
      'Architected a real-time update system over WebSocket, eliminating redundant polling and cutting MongoDB read load by ~40%.',
      'Built a serverless pipeline with S3, SQS, and Lambda for asynchronous file processing and reliable database ingestion.',
      'Implemented AWS Cognito for identity federation and SSO with OAuth 2.0 across multiple third-party providers.',
      'Developed AI-powered input optimisation via LLM function calling, turning natural language into structured database commands.',
      'Achieved 80%+ test coverage with Jest and React Testing Library; led code reviews and enforced team standards.',
    ],
    stack: 'React · TypeScript · Next.js · Tailwind · Node.js · Express · MongoDB · WebSocket · Redis · AWS (Fargate, Cognito, S3, SQS) · Jest · Cypress · GitHub Actions',
  },
  {
    company: 'AnyStay',
    role: 'Software Developer',
    location: 'Brisbane',
    period: 'Sep 2024 — Jan 2025',
    blurb:
      'AI-powered accommodation marketplace helping guests find their ideal stay with minimal friction.',
    highlights: [
      'Translated Figma designs into responsive, accessible components across desktop, tablet, and mobile.',
      'Implemented Next.js App Router with SSR and SSG, cutting initial page load time by ~40% and improving SEO.',
      'Optimised Core Web Vitals (LCP, FID, CLS) through image optimisation, code splitting, and lazy loading, hitting 90+ Lighthouse scores.',
      'Built type-safe GraphQL queries with code generation to keep frontend-backend contracts consistent.',
      'Configured AWS CloudFront CDN over S3 to reduce global latency.',
      'Automated deployment pipelines with GitHub Actions for zero-downtime releases to AWS EC2.',
    ],
    stack: 'React · Next.js · TypeScript · GraphQL · Styled Components · Docker · AWS (EC2, S3, CloudFront) · GitHub Actions',
  },
  {
    company: 'Melfish',
    role: 'Full-stack Developer',
    location: 'Melbourne',
    period: 'Oct 2023 — Sep 2024',
    blurb:
      'Community-driven platform for event discovery and social networking — organisers host events, users browse and join.',
    highlights: [
      'Built and maintained responsive, accessible SPA interfaces.',
      'Designed and implemented scalable RESTful APIs with pagination and advanced query handling.',
      'Refactored frontend legacy code for scalability and future feature expansion.',
      'Built a comprehensive TDD-based unit test suite reaching 80% coverage.',
      'Collaborated with UI/UX designers and a cross-functional Agile team through requirements analysis and iterative Scrum delivery.',
    ],
    stack: 'React · Next.js · TypeScript · MUI · Redux Toolkit · Node.js · Express · MongoDB · Jest',
  },
];

const projects: DispatchProject[] = [
  {
    name: 'CamperDive',
    year: '2025',
    kind: 'Production · Solo',
    tagline:
      'An online store for an Australian spearfishing brand, rebuilt from scratch.',
    blurb:
      'A complete solo rebuild of an Australian spearfishing brand. The existing Shopify store had hit a wall: rigid URLs were holding SEO back, and media-heavy product pages were too slow for a brand where visuals drive conversions. I migrated everything onto a custom Next.js 16 stack and shipped it end-to-end — architecture, database, payments, SEO, performance, and a custom admin dashboard.',
    highlights: [
      '100 / 100 / 100 on Lighthouse for Performance, Accessibility, and SEO.',
      'Commerce and content unified in one Sanity CMS — tutorials and products live together for long-tail SEO.',
      'Full control over routing, metadata, and JSON-LD structured data (Product, Breadcrumb, HowTo).',
      'Edge-based geo detection for international shipping.',
      'Custom admin dashboard for order and inventory management.',
    ],
    stack: 'Next.js 16  ·  React 19  ·  TypeScript  ·  Sanity  ·  Supabase  ·  Drizzle  ·  Stripe  ·  Vercel',
    image: '/camperdive.png',
    link: { label: 'camperdive.com', href: 'https://www.camperdive.com/' },
  },
  {
    name: 'Settly AI',
    year: '2025',
    kind: 'Applied LLM',
    tagline:
      'An AI assistant that walks first home buyers through Australian property settlement.',
    blurb:
      'A hierarchical multi-agent system that guides users through Australian property settlement. Specialised LLM agents handle conversation, data analysis, profile management, and loan calculations, coordinated by a supervisor graph. Shipped with streaming responses, session persistence, and aggressive cost optimisation.',
    highlights: [
      'Cut LLM API costs by ~35% through conversation summarisation, prompt caching, and dynamic token budgeting.',
      'Architected the hierarchical multi-agent system on top of LangGraph with specialised worker agents.',
      'Built a custom stream parser with sub-100ms latency and metadata-driven routing.',
      'Designed production React hooks for real-time message streaming, thread lifecycle, and user-initiated cancellation.',
      'Integrated a cloud thread API for session persistence, metadata search, and optimistic UI updates.',
    ],
    stack: 'React  ·  Python  ·  LangGraph  ·  LangChain  ·  OpenAI  ·  MongoDB Atlas  ·  PostgreSQL  ·  Redis  ·  Docker  ·  AWS EC2  ·  SSE',
    image: '/settlyai.png',
    link: { label: 'settlyai.com', href: 'https://settlyai.com/' },
  },
  {
    name: 'WP Campsite Checker',
    year: '2025',
    kind: 'Serverless · Solo',
    tagline:
      'Watches Wilsons Promontory campsites and emails you the moment a spot opens up.',
    blurb:
      'A serverless app that monitors campsite availability at Wilsons Promontory National Park and notifies users the moment a reservation slot opens up. Popular sites get released in small batches and booked within seconds, so manual checking is impractical. Built solo, end-to-end — frontend, backend, infrastructure, auth, email delivery, and DNS.',
    highlights: [
      'Change-detection pipeline that diffs availability snapshots and only fires on state transitions.',
      'Automated background checks every 15 minutes via EventBridge cron.',
      'Quick-check view for the next 8 weekends or any custom date range, with per-night tracking.',
      'Zero idle cost — runs entirely on AWS free-tier and pay-per-invocation services.',
      'Custom SES email verification on top of Cognito for passwordless onboarding.',
    ],
    stack: 'Vite  ·  React  ·  TypeScript  ·  AWS Lambda  ·  API Gateway  ·  DynamoDB  ·  Cognito  ·  SES  ·  EventBridge  ·  CloudFront  ·  Serverless Framework',
    image: '/wpchecker.png',
    link: { label: 'campsite.sheltoncui.com', href: 'https://campsite.sheltoncui.com' },
  },
  {
    name: 'Meetly',
    year: '2022',
    kind: 'Full-stack · Side',
    tagline:
      'A marketplace for anyone to publish events and sell tickets to them.',
    blurb:
      'A platform for creating and participating in global events. Users publish events, set prices and locations, and manage ticket sales through Stripe. A proper side project built to learn a full payments stack end-to-end.',
    highlights: [
      'Clerk authentication with role-aware dashboards for organisers vs. attendees.',
      'Stripe Checkout with webhook-based order fulfilment.',
      'Server-side search, category filtering, and pagination.',
      'Image uploads via UploadThing; form validation with Zod + React Hook Form.',
    ],
    stack: 'Next.js 14  ·  TypeScript  ·  MongoDB  ·  Mongoose  ·  Clerk  ·  Stripe  ·  UploadThing  ·  Tailwind  ·  shadcn/ui  ·  Zod  ·  React Hook Form',
    image: '/meetly.png',
    link: { label: 'meetly.sheltoncui.com', href: 'https://meetly.sheltoncui.com/' },
  },
];

const skills: [string, string][] = [
  ['Languages', 'TypeScript · JavaScript · Python · HTML · CSS'],
  ['Frontend', 'React · Next.js · Tailwind CSS · Styled Components · Redux · GraphQL'],
  ['Backend', 'Node.js · Express · REST APIs · WebSocket · SSE'],
  ['Applied AI', 'LangGraph · LangChain · OpenAI API · RAG pipelines · vector databases · prompt engineering'],
  ['Databases', 'PostgreSQL · MongoDB · MySQL · Redis'],
  ['Cloud & DevOps', 'AWS (EC2, Lambda, S3, API Gateway, SQS, Cognito) · Vercel · Docker · GitHub Actions'],
  ['Testing', 'Jest · React Testing Library · Cypress'],
];

// ---------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------

function SectionHeader({
  comment,
  title,
}: {
  comment: string;
  title: string;
}) {
  return (
    <div className="section-header" data-reveal>
      <p className="section-header-comment">// {comment}</p>
      <h2 className="section-header-title">{title}</h2>
    </div>
  );
}

// ---------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------

export default function Home() {
  return (
    <main className="relative mx-auto w-full max-w-reading px-6 py-20 sm:py-28">
      {/* =========================================================
          HERO — terminal opener
          ========================================================= */}
      <header className="relative">
        <div
          className="flex items-center animate-fade-in-slow"
          style={{ animationDelay: '100ms' }}
        >
          <span className="prompt" aria-hidden="true">❯</span>
          <span className="meta text-paper-dim">~/shelton/profile.tsx</span>
        </div>

        {/* Typewriter name */}
        <div className="mt-10">
          <TypewriterHero />
        </div>

        <div className="rule-ember mt-10 max-w-sm" />

        {/* Contact chips */}
        <ul className="contact-grid mt-8">
          {[
            {
              label: 'Email',
              value: 'cui.shelton@gmail.com',
              href: 'mailto:cui.shelton@gmail.com',
              icon: '@',
            },
            {
              label: 'LinkedIn',
              value: 'in/shelton-cui',
              href: 'https://www.linkedin.com/in/shelton-cui/',
              icon: 'in',
            },
            {
              label: 'GitHub',
              value: 'github.com/dmwcs',
              href: 'https://github.com/dmwcs',
              icon: '{ }',
            },
          ].map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="contact-chip"
              >
                <span className="contact-chip-icon" aria-hidden="true">
                  {l.icon}
                </span>
                <span className="contact-chip-body">
                  <span className="contact-chip-label">{l.label}</span>
                  <span className="contact-chip-value">{l.value}</span>
                </span>
                <span className="contact-chip-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* =========================================================
          ABOUT — portrait + text, 2-column on desktop
          ========================================================= */}
      <section className="mt-36" data-reveal>
        <SectionHeader comment="01 — about" title="Who I am" />
        <div className="about-layout">
          <figure className="about-portrait">
            <div className="hero-portrait-frame">
              <Image
                src="/me.jpg"
                alt="Shelton Cui"
                fill
                sizes="(min-width: 640px) 170px, 100vw"
                className="hero-portrait-img"
                priority
              />
              <span className="hero-portrait-corner" aria-hidden="true" />
            </div>
            <figcaption className="hero-portrait-caption">fig.01 · self</figcaption>
          </figure>

          <div>
            <p className="text-[0.98rem] leading-relaxed text-paper/90">
              Full-stack engineer with 4+ years of experience building web
              applications on the cloud. I care about performance and turning
              complex data into clean, usable interfaces. Work has spanned
              anti-fraud intelligence platforms, collaborative SaaS tooling,
              and custom e-commerce.
            </p>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-paper/90">
              Outside of work:{' '}
              <span className="text-ember-bright">
                spearfishing and camping
              </span>
              . Which probably says something about how I approach problems —
              I like going deep, staying calm under pressure, and figuring
              things out in environments that aren&apos;t always predictable.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          EXPERIENCE — tabbed
          ========================================================= */}
      <section className="mt-36" data-reveal>
        <SectionHeader comment="02 — experience" title="Where I've worked" />
        <ExperienceTabs experiences={experiences} />
      </section>

      {/* =========================================================
          PROJECTS — side-by-side README dispatches + drawer
          ========================================================= */}
      <section className="mt-36">
        <SectionHeader comment="03 — projects" title="What I've built" />
        <ProjectsSection projects={projects} />
      </section>

      {/* =========================================================
          SKILLS
          ========================================================= */}
      <section className="mt-36">
        <SectionHeader comment="04 — skills" title="The kit" />
        <dl className="space-y-4" data-reveal>
          {skills.map(([label, items]) => (
            <div
              key={label}
              className="grid grid-cols-[6.5rem_1fr] gap-x-5 gap-y-1 border-b border-rule pb-3 sm:grid-cols-[8rem_1fr]"
            >
              <dt className="meta pt-[3px]">{label}</dt>
              <dd className="text-[0.94rem] text-paper/90">{items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* =========================================================
          EDUCATION
          ========================================================= */}
      <section className="mt-36">
        <SectionHeader comment="05 — credentials" title="Paperwork" />
        <div className="space-y-3" data-reveal>
          <p className="text-[0.98rem] text-paper/90">
            <span className="font-bold text-paper">University of Adelaide</span>{' '}
            — Master of Computing and Innovation, 2022{' '}
            <span className="meta">(GPA 6/7)</span>
          </p>
          <p className="text-[0.98rem] text-paper/90">
            <span className="font-bold text-paper">
              AWS Certified Solutions Architect — Associate
            </span>
            , 2026
          </p>
        </div>
      </section>

      {/* =========================================================
          FOOTER
          ========================================================= */}
      <footer className="mt-36 pt-4" data-reveal>
        <div className="flex items-center">
          <span className="prompt" aria-hidden="true">❯</span>
          <span className="meta text-paper-dim">
            status: open to work · based in Melbourne
          </span>
        </div>
        <p className="meta mt-6 text-muted normal-case tracking-normal">
          © 2026 Shelton Cui · Typeset in JetBrains Mono · Hand-built, no
          templates
        </p>
      </footer>
    </main>
  );
}
