'use client';

import Image from 'next/image';

export type DispatchProject = {
  name: string;
  year: string;
  kind: string;
  /** One-line summary, always visible on the card. */
  tagline: string;
  /** Full description shown in the detail drawer. */
  blurb: string;
  /** Optional bullet highlights shown in the drawer. */
  highlights?: string[];
  stack: string;
  image?: string;
  imageScale?: number;
  imageOffsetY?: number;
  link?: { label: string; href: string };
};

/**
 * A projects-section dispatch card. Clicking "Open" hands off to a
 * full-screen drawer owned by the parent — the card itself stays a
 * simple, fixed-height teaser so the list rhythm is never disrupted.
 */
export function DispatchItem({
  project,
  index,
  reversed,
  onOpen,
}: {
  project: DispatchProject;
  index: number;
  reversed: boolean;
  onOpen: () => void;
}) {
  const hasImage = !!project.image;

  const bannerStyle =
    project.imageScale || project.imageOffsetY
      ? ({
          ['--img-scale' as string]: project.imageScale ?? 1,
          ['--img-offset-y' as string]: `${project.imageOffsetY ?? 0}%`,
        } as React.CSSProperties)
      : undefined;

  const banner = hasImage && (
    <button
      type="button"
      className="dispatch-banner dispatch-banner-button"
      style={bannerStyle}
      onClick={onOpen}
      aria-label={`Open ${project.name} details`}
    >
      <span className="dispatch-tag">{project.kind}</span>
      <Image
        src={project.image!}
        alt={`${project.name} screenshot`}
        fill
        sizes="(min-width: 720px) 440px, 100vw"
        className="dispatch-banner-img"
        priority={index === 0}
      />
    </button>
  );

  const className = [
    'dispatch',
    reversed && 'dispatch-reverse',
    !hasImage && 'dispatch-text-only',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={className}>
      {banner}

      <div className="dispatch-body">
        <div className="dispatch-meta">
          <span>{project.year}</span>
          <span className="dispatch-meta-sep" aria-hidden="true" />
          <span>{project.kind}</span>
        </div>

        <h3 className="dispatch-title">{project.name}</h3>
        <p className="dispatch-tagline">{project.tagline}</p>

        <button
          type="button"
          className="dispatch-open"
          onClick={onOpen}
          aria-label={`View ${project.name} details`}
        >
          <span className="dispatch-open-bracket" aria-hidden="true">
            [
          </span>
          <span className="dispatch-open-label">View details</span>
          <span className="dispatch-open-arrow" aria-hidden="true">
            ↗
          </span>
          <span className="dispatch-open-bracket" aria-hidden="true">
            ]
          </span>
        </button>
      </div>
    </article>
  );
}
