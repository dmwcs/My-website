'use client';
import React, { useState, useEffect, useRef } from 'react';
import useIndicator from '@/app/utils/useIndicator';
import CardTitle from '@/app/components/CardTitle';
import { BsFillCaretRightFill } from 'react-icons/bs';

const tabs = ['TripTribe', 'Melfish'];

const experiences = [
  {
    company: 'TripTribe',
    position: 'Full-stack developer',
    duration: 'Feb 2024 – Present',
    details: [
      'Designed and implemented frontend pages using Material-UI for interface building and Context API for global state management.',
      'Developed backend services using Nest.js Pages Router to build RESTful APIs, implementing user authentication, course management, and other features.',
      'Wrote unit tests and integration tests, achieving high test coverage using Jest and Testing Library to ensure code quality and stability.',
      'Collaborated with the team, participated in requirements analysis, feature design, and iterative development, delivering high-quality products on time',
    ],
  },
  {
    company: 'Melfish',
    position: 'Front-end developer',
    duration: 'Oct 2023 – Feb 2024',
    details: [
      'Developed a Meetup-like website from scratch, enabling users to create and join interest groups and activities. All page designs were coordinated with a professional Figma team without using component libraries.',
      'Collaborated with the Figma Design team to transform wireframes, prototypes, and high-fidelity mock-ups into functional web pages and components. Used TypeScript to enhance collaboration, maintainability, and bug detection efficiency.',
      'Utilized Tailwind CSS for responsive design, unifying the theme style with the UI team. Optimized complex form actions using React Hook Form, simplifying form logic and state management.',
      'Implemented RESTful APIs using Next.js’s API routes feature, simplifying file system-based routing. Configured the project from scratch, including Prettier and ESLint rules, to ensure consistent code formatting and linting.',
    ],
  },
];
const Job = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { indicatorStyle, tabRefs } = useIndicator(selectedTab);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 每次 selectedTab 变化时重新触发动画
    if (contentRef.current) {
      contentRef.current.classList.remove('animate-fadeIn');
      void contentRef.current.offsetWidth; // 触发重排以重新开始动画
      contentRef.current.classList.add('animate-fadeIn');
    }
  }, [selectedTab]);

  return (
    <div className="mx-auto max-w-[900px] py-32 relative" id="Job">
      <CardTitle index={2} title="Where I've Worked" />
      <div className="flex">
        <div className="relative flex flex-col gap-4">
          <div
            className="flex absolute left-0 w-[2px] bg-second transition-all duration-300"
            style={indicatorStyle}
          />
          {tabs.map((tab, index) => (
            <div
              key={index}
              ref={(el) => {
                tabRefs.current[index] = el as HTMLDivElement;
              }}
              className={`transition duration-300 hover:bg-second/30 cursor-pointer font-mono text-sm p-4 text-center ${selectedTab === index ? 'text-second' : 'text-gray-400'}`}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div ref={contentRef} className="pl-8 animate-fadeIn ">
          <h2 className="text-xl font-bold">
            {experiences[selectedTab].position} @{' '}
            {experiences[selectedTab].company}
          </h2>
          <p className="text-sm text-gray-500">
            {experiences[selectedTab].duration}
          </p>
          <ul className="mt-4 space-y-2 ">
            {experiences[selectedTab].details.map((detail, index) => (
              <li key={index} className="flex gap-2">
                <BsFillCaretRightFill
                  size={15}
                  className="text-second flex-shrink-0 mt-1"
                />
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Job;
