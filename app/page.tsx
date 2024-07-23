'use client';
import Hero from '@/app/components/Hero';
import AboutMe from '@/app/components/AboutMe';
import Job from '@/app/components/Job';
import Project from '@/app/components/Project';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Hero />
      <AboutMe />
      <Job />
      <Project />
      <div
        className="pointer-events-none fixed inset-0 -z-50"
        style={{
          background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(218, 105, 193, 0.15), transparent 30%)`,
        }}
      />
    </>
  );
}
