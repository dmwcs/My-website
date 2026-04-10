import type { Metadata } from 'next';
import Image from 'next/image';
import { ExperienceTabs } from './components/ExperienceTabs';

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

const projects: Array<{
  name: string;
  year: string;
  blurb: string;
  stack: string;
  image?: string;
  link?: { label: string; href: string };
}> = [
  {
    name: 'CamperDive',
    year: '2025',
    blurb:
      'Complete rebuild of an Australian spearfishing brand — migrated off Shopify onto a custom Next.js stack. Solo build covering architecture, database, payments, SEO and performance. 100/100/100 Lighthouse; content and commerce unified in one CMS for long-tail SEO.',
    stack: 'Next.js 16 · React 19 · TypeScript · Sanity · Supabase · Drizzle · Stripe · Vercel',
    image: '/camperdive.png',
    link: { label: 'camperdive.com', href: 'https://www.camperdive.com/' },
  },
  {
    name: 'Settly AI',
    year: '2025',
    blurb:
      'Hierarchical multi-agent assistant for Australian property settlement. Specialised LLM agents handle conversation, analysis, profile management, and loan calculations under a supervisor graph. Cut LLM costs ~35% through summarisation, prompt caching, and dynamic token budgeting.',
    stack: 'React · Python · LangGraph · LangChain · OpenAI · MongoDB · PostgreSQL · Redis',
  },
  {
    name: 'WP Campsite Checker',
    year: '2025',
    blurb:
      'Serverless app that watches Wilsons Promontory campsite availability and alerts users the moment a slot opens. Change-detection pipeline diffs availability snapshots and only fires on state transitions. Zero idle cost — runs entirely on AWS free-tier.',
    stack: 'Vite · React · AWS Lambda · DynamoDB · Cognito · SES · EventBridge',
    image: '/wpchecker.png',
    link: { label: 'campsite.sheltoncui.com', href: 'https://campsite.sheltoncui.com' },
  },
  {
    name: 'Meetly',
    year: '2022',
    blurb:
      'Global events platform where users publish events, set prices, and manage ticket sales via Stripe. Clerk auth, Stripe Checkout with webhook fulfilment, server-side search and pagination.',
    stack: 'Next.js · TypeScript · MongoDB · Clerk · Stripe · Tailwind · shadcn/ui',
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

/**
 * Wrap each character of a string in a <span.letter> with a staggered
 * CSS custom property --i for per-letter animation timing.
 */
function KineticTitle({ text, className = '' }: { text: string; className?: string }) {
  const chars = Array.from(text);
  return (
    <h1 className={`type-hero ${className}`} aria-label={text}>
      {chars.map((ch, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="letter"
          style={{ ['--i' as string]: i } as React.CSSProperties}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </span>
      ))}
    </h1>
  );
}

function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="mb-12" data-reveal>
      <span className="meta text-plum tabular-nums">— {num}</span>
      <h2 className="mt-3 font-display text-4xl italic leading-[0.95] text-paper sm:text-5xl">
        {children}
      </h2>
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
          HERO — the orchestrated opening
          ========================================================= */}
      <header className="relative">
        {/* Dateline strip */}
        <div
          className="flex items-center gap-3 animate-fade-in-slow"
          style={{ animationDelay: '100ms' }}
        >
          <span className="signal-dot" />
          <span className="meta text-paper-dim">
            Night shift · Filed from Melbourne
          </span>
        </div>

        {/* Kinetic name */}
        <div className="mt-10">
          <KineticTitle text="Shelton Cui" />
        </div>

        {/* Role + summary */}
        <p
          className="mt-8 max-w-xl font-display text-xl italic text-paper-dim animate-fade-in"
          style={{ animationDelay: '1100ms' }}
        >
          Full-stack engineer — building for the web, calm under pressure.
        </p>

        {/* Amber rule that draws in */}
        <div
          className="rule-plum mt-10 max-w-sm animate-draw-line"
          style={{ animationDelay: '1400ms' }}
        />

        {/* Contact links */}
        <ul
          className="mt-10 flex flex-wrap gap-x-7 gap-y-2 animate-fade-in"
          style={{ animationDelay: '1500ms' }}
        >
          {[
            { label: 'cui.shelton@gmail.com', href: 'mailto:cui.shelton@gmail.com' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shelton-cui/' },
            { label: 'GitHub', href: 'https://github.com/dmwcs' },
          ].map((l) => (
            <li key={l.label} className="meta">
              <a
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="link text-paper"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </header>

      {/* =========================================================
          ABOUT
          ========================================================= */}
      <section className="mt-28" data-reveal>
        <SectionLabel num="01">About</SectionLabel>
        <p className="font-serif text-[1.08rem] leading-relaxed text-paper/90">
          Full-stack engineer with 4+ years of experience building web
          applications on the cloud. Strong frontend focus — especially on
          performance and turning complex data into clean, usable interfaces.
          Work has spanned anti-fraud intelligence platforms, collaborative
          SaaS tooling, and custom e-commerce.
        </p>
        <p className="mt-6 font-serif text-[1.08rem] leading-relaxed text-paper/90">
          Outside of work:{' '}
          <span className="italic text-plum-bright">spearfishing and camping</span>.
          Which probably says something about how I approach problems — I like
          going deep, staying calm under pressure, and figuring things out in
          environments that aren&apos;t always predictable.
        </p>
      </section>

      {/* =========================================================
          EXPERIENCE — tabbed
          ========================================================= */}
      <section className="mt-32" data-reveal>
        <SectionLabel num="02">Experience</SectionLabel>
        <ExperienceTabs experiences={experiences} />
      </section>

      {/* =========================================================
          PROJECTS — card grid, whole card clickable when link exists
          ========================================================= */}
      <section className="mt-32">
        <SectionLabel num="03">Projects</SectionLabel>
        <div className="space-y-8">
          {projects.map((p, i) => {
            const inner = (
              <>
                <div className="project-thumb" aria-hidden="true">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={`${p.name} screenshot`}
                      fill
                      sizes="(min-width: 640px) 11rem, 100vw"
                      className="project-thumb-img"
                    />
                  ) : (
                    <div className="project-thumb-placeholder">
                      <span className="meta">Image</span>
                    </div>
                  )}
                </div>
                <div className="project-body">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-2xl italic text-plum-bright">
                      {p.name}
                    </h3>
                    <span className="meta tabular-nums text-paper-dim">
                      {p.year}
                    </span>
                  </div>
                  <p className="mt-3 text-paper/90">{p.blurb}</p>
                  <p className="meta mt-4">{p.stack}</p>
                  {p.link && (
                    <span className="project-cta">
                      <span>Visit {p.link.label}</span>
                      <span className="project-cta-arrow" aria-hidden="true">
                        →
                      </span>
                    </span>
                  )}
                </div>
              </>
            );

            const common = {
              'data-reveal': true,
              style: {
                ['--reveal-delay' as string]: `${i * 80}ms`,
              } as React.CSSProperties,
            };

            return p.link ? (
              <a
                key={p.name}
                href={p.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card project-card-link"
                {...common}
              >
                {inner}
              </a>
            ) : (
              <article key={p.name} className="project-card" {...common}>
                {inner}
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================
          SKILLS
          ========================================================= */}
      <section className="mt-32">
        <SectionLabel num="04">Skills</SectionLabel>
        <dl className="space-y-4" data-reveal>
          {skills.map(([label, items]) => (
            <div
              key={label}
              className="grid grid-cols-[6.5rem_1fr] gap-x-5 gap-y-1 border-b border-rule pb-3 sm:grid-cols-[8rem_1fr]"
            >
              <dt className="meta pt-[3px]">{label}</dt>
              <dd className="text-paper/90">{items}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* =========================================================
          EDUCATION
          ========================================================= */}
      <section className="mt-32">
        <SectionLabel num="05">Education</SectionLabel>
        <div className="space-y-3" data-reveal>
          <p className="text-paper/90">
            <span className="font-display text-xl italic text-paper">
              University of Adelaide
            </span>{' '}
            — Master of Computing and Innovation, 2022{' '}
            <span className="meta">(GPA 6/7)</span>
          </p>
          <p className="text-paper/90">
            <span className="font-display text-xl italic text-paper">
              AWS Certified Solutions Architect — Associate
            </span>
            , 2026
          </p>
        </div>
      </section>

      {/* =========================================================
          FOOTER
          ========================================================= */}
      <footer className="mt-32 pt-4" data-reveal>
        <div className="flex items-center gap-3">
          <span className="signal-dot" />
          <span className="meta text-paper-dim">
            Building next dispatch · Available for new work
          </span>
        </div>
        <p className="meta mt-6 text-muted">
          © 2026 Shelton Cui · Set in Fraunces &amp; Newsreader · Hand-built,
          no templates
        </p>
      </footer>
    </main>
  );
}
