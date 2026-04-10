'use client';

import { useState } from 'react';

type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  blurb: string;
  highlights: string[];
  stack: string;
};

/**
 * Tabbed experience panel — keeps all three roles in the same vertical
 * footprint. Clicking a company name slides its content into view.
 */
export function ExperienceTabs({ experiences }: { experiences: Experience[] }) {
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <div>
      {/* Tab row */}
      <div
        role="tablist"
        aria-label="Work experience"
        className="flex flex-wrap items-end border-b border-rule"
      >
        {experiences.map((e, i) => {
          const isActive = i === active;
          return (
            <button
              key={e.company}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`exp-panel-${i}`}
              id={`exp-tab-${i}`}
              onClick={() => setActive(i)}
              className={`exp-tab ${isActive ? 'is-active' : ''}`}
            >
              <span className="exp-tab-label">{e.company}</span>
              <span className="exp-tab-period">{e.period}</span>
            </button>
          );
        })}
      </div>

      {/* Active panel — keyed on company so the fade re-runs per switch */}
      <article
        key={exp.company}
        id={`exp-panel-${active}`}
        role="tabpanel"
        aria-labelledby={`exp-tab-${active}`}
        className="mt-8 animate-fade-in"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-xl font-bold text-paper">
            {exp.role},{' '}
            <span className="text-ember-bright">{exp.company}</span>
          </h3>
          <span className="meta tabular-nums text-paper-dim">{exp.location}</span>
        </div>
        <p className="mt-4 text-[0.96rem] text-paper/90">{exp.blurb}</p>
        <ul className="mt-5 space-y-2.5">
          {exp.highlights.map((h, j) => (
            <li
              key={j}
              className="pl-5 -indent-5 text-[0.94rem] text-paper/85 before:mr-3 before:text-ember before:content-['—']"
            >
              {h}
            </li>
          ))}
        </ul>
        <p className="meta mt-6">{exp.stack}</p>
      </article>
    </div>
  );
}
