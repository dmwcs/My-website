'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * NIGHT SHIFT — client chrome.
 *
 * One file hosts every bit of client-side-only atmosphere so the layout
 * stays a server component:
 *  - Custom plum cursor (tracks mousemove, grows on interactive hover)
 *  - Horizontal scroll progress bar at the top of the viewport
 *  - Live AEST clock shown in the top-right corner
 *  - Scroll-reveal observer that toggles [data-reveal].is-visible
 */
export function ClientChrome() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string | null>(null);

  // -------- cursor (1:1 follow) + scroll progress
  useEffect(() => {
    const isTouch = matchMedia('(hover: none), (pointer: coarse)').matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    const progress = progressRef.current;

    const onMove = (e: MouseEvent) => {
      if (!cursor) return;
      // Position the cursor directly at the pointer — zero latency.
      // The translate(-50%, -50%) centers the dot on the coordinate.
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const onOver = (e: MouseEvent) => {
      if (!cursor) return;
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest('a, button, [data-magnetic]');
      cursor.classList.toggle('is-hover', Boolean(interactive));
    };

    const onScroll = () => {
      if (!progress) return;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const pct = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      progress.style.transform = `scaleX(${pct})`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // -------- Live AEST clock (top-right corner)
  useEffect(() => {
    const format = () => {
      try {
        return new Intl.DateTimeFormat('en-AU', {
          timeZone: 'Australia/Melbourne',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
      } catch {
        const d = new Date();
        const pad = (n: number) => String(n).padStart(2, '0');
        return `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
      }
    };
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);

  // -------- Scroll-reveal observer
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const els = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0.05 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Atmosphere layers (fixed, non-interactive) */}
      <div aria-hidden="true" className="lamp" />
      <div aria-hidden="true" className="lamp-far" />
      <div aria-hidden="true" className="grain" />

      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        aria-hidden="true"
        className="scroll-progress"
        style={{ width: '100%', transform: 'scaleX(0)' }}
      />

      {/* Custom cursor */}
      <div ref={cursorRef} aria-hidden="true" className="cursor-dot" />

      {/* Live clock — hidden when a drawer is open (body.is-drawer-open) */}
      <div
        aria-hidden="true"
        className="clock-fixed pointer-events-none fixed right-6 top-6 z-40 hidden items-center sm:flex"
      >
        <span className="prompt">❯</span>
        <span className="meta text-paper-dim tabular-nums">
          {time ?? '—— :—— :——'} AEST
        </span>
      </div>
    </>
  );
}
