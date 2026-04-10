'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { DispatchProject } from './DispatchItem';

type ProjectDrawerProps = {
  project: DispatchProject | null;
  onClose: () => void;
};

/**
 * Full-bleed project detail drawer — slides in from the right with a
 * dimmed backdrop. Replaces the inline accordion so the card grid
 * never gets torn apart by a single expanded item.
 */
export function ProjectDrawer({ project, onClose }: ProjectDrawerProps) {
  const open = project !== null;
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // ESC to close + scroll lock + hide the fixed clock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('is-drawer-open');

    // Move focus into the drawer
    queueMicrotask(() => closeBtnRef.current?.focus());

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.body.classList.remove('is-drawer-open');
    };
  }, [open, onClose]);

  // Stack chips — split the stack string once, guard for no project
  const stackChips =
    project?.stack
      .split('·')
      .map((s) => s.trim())
      .filter(Boolean) ?? [];

  const fileSlug = project?.name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return (
    <div
      className={`drawer-root ${open ? 'is-open' : ''}`}
      aria-hidden={!open}
    >
      {/* Backdrop — click to close */}
      <button
        type="button"
        className="drawer-backdrop"
        onClick={onClose}
        aria-label="Close details"
        tabIndex={open ? 0 : -1}
      />

      {/* Panel */}
      <aside
        className="drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {project && (
          <>
            {/* Top bar — terminal path + close button */}
            <header className="drawer-topbar">
              <span className="drawer-path">
                <span className="prompt" aria-hidden="true">
                  ❯
                </span>
                projects/{fileSlug}.md
              </span>
              <div className="drawer-topbar-actions">
                <kbd className="drawer-kbd">ESC</kbd>
                <button
                  ref={closeBtnRef}
                  type="button"
                  className="drawer-close"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <span aria-hidden="true">✕</span>
                </button>
              </div>
            </header>

            {/* Scrollable body */}
            <div className="drawer-body">
              <p className="drawer-meta">
                <span>{project.year}</span>
                <span className="dispatch-meta-sep" aria-hidden="true" />
                <span>{project.kind}</span>
              </p>

              <h2 id="drawer-title" className="drawer-title">
                {project.name}
              </h2>

              <p className="drawer-tagline">{project.tagline}</p>

              {project.image && (
                <div className="drawer-banner">
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    sizes="(min-width: 720px) 800px, 100vw"
                    className="drawer-banner-img"
                  />
                </div>
              )}

              <section className="drawer-section">
                <p className="drawer-section-label">{'// overview'}</p>
                <p className="drawer-prose">{project.blurb}</p>
              </section>

              {project.highlights && project.highlights.length > 0 && (
                <section className="drawer-section">
                  <p className="drawer-section-label">{'// highlights'}</p>
                  <ul className="drawer-highlights">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="drawer-highlight">
                        <span aria-hidden="true" className="drawer-bullet">
                          ──
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="drawer-section">
                <p className="drawer-section-label">{'// stack'}</p>
                <ul className="drawer-chips">
                  {stackChips.map((s) => (
                    <li key={s} className="drawer-chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </section>

              {project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="drawer-cta"
                >
                  <span className="drawer-cta-label">
                    Visit {project.link.label}
                  </span>
                  <span className="drawer-cta-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              )}
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
