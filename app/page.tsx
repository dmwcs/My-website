'use client';
import Hero from '@/app/sections/Hero';
import AboutMe from '@/app/sections/AboutMe';
import Job from '@/app/sections/Job';
import Project from '@/app/sections/Project';
import Contact from '@/app/sections/Contact';
import CursorFollow from '@/app/components/CoursorFollow';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Job />
      <Project />
      <Contact />
      <CursorFollow />
    </>
  );
}
