'use client';

import { useEffect, useState } from 'react';

const PHRASES = ['Shelton Cui', 'Full-stack engineer'];

const TYPE_MS = 110;          // speed while typing
const DELETE_MS = 50;         // speed while deleting (faster)
const PAUSE_AFTER_TYPE = 1800; // how long to hold a finished phrase
const PAUSE_AFTER_DELETE = 400; // breath before typing the next one

type Phase = 'typing' | 'holding' | 'deleting' | 'resting';

/**
 * Hero headline with a continuous typewriter loop —
 * types a phrase, holds it, deletes it, then types the next.
 * The block cursor keeps blinking through all phases.
 */
export function TypewriterHero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState(PHRASES[0]);
  const [phase, setPhase] = useState<Phase>('holding');

  useEffect(() => {
    const current = PHRASES[idx];
    let timer: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (text.length < current.length) {
        timer = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_MS,
        );
      } else {
        timer = setTimeout(() => setPhase('holding'), 0);
      }
    } else if (phase === 'holding') {
      timer = setTimeout(() => setPhase('deleting'), PAUSE_AFTER_TYPE);
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer = setTimeout(
          () => setText(text.slice(0, -1)),
          DELETE_MS,
        );
      } else {
        timer = setTimeout(() => setPhase('resting'), 0);
      }
    } else if (phase === 'resting') {
      timer = setTimeout(() => {
        setIdx((i) => (i + 1) % PHRASES.length);
        setPhase('typing');
      }, PAUSE_AFTER_DELETE);
    }

    return () => clearTimeout(timer);
  }, [text, phase, idx]);

  return (
    <h1 className="type-hero" aria-label={PHRASES[0]}>
      <span className="type-hero-text">{text}</span>
      <span className="block-cursor" aria-hidden="true" />
    </h1>
  );
}
