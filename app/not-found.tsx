import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Off the grid — Shelton Cui',
};

export default function NotFound() {
  return (
    <main className="relative mx-auto w-full max-w-reading px-6 py-40 text-center">
      <div className="flex items-center justify-center gap-3">
        <span className="signal-dot" />
        <span className="meta text-paper-dim">Signal lost</span>
      </div>
      <h1 className="type-hero mt-10 text-paper">404</h1>
      <p className="mt-8 font-display text-xl italic text-paper-dim">
        This page is off the grid.
      </p>
      <p className="mt-10">
        <Link href="/" className="link text-paper">
          Return to base →
        </Link>
      </p>
    </main>
  );
}
