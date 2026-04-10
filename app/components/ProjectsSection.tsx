'use client';

import { useState } from 'react';
import { DispatchItem, type DispatchProject } from './DispatchItem';
import { ProjectDrawer } from './ProjectDrawer';

/**
 * Owns the currently-open project state so the drawer can be rendered
 * once at the section root while individual dispatch items trigger
 * it via a callback. Keeps the page.tsx file a server component.
 */
export function ProjectsSection({ projects }: { projects: DispatchProject[] }) {
  const [active, setActive] = useState<DispatchProject | null>(null);

  return (
    <>
      {projects.map((p, i) => {
        const isReversed = !!p.image && i % 2 === 1;
        return (
          <div
            key={p.name}
            data-reveal
            style={
              {
                ['--reveal-delay' as string]: `${i * 40}ms`,
              } as React.CSSProperties
            }
          >
            <DispatchItem
              project={p}
              index={i}
              reversed={isReversed}
              onOpen={() => setActive(p)}
            />
            {i < projects.length - 1 && (
              <hr className="dispatch-sep" aria-hidden="true" />
            )}
          </div>
        );
      })}

      <ProjectDrawer project={active} onClose={() => setActive(null)} />
    </>
  );
}
