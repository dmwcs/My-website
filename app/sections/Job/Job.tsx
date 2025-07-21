'use client';
import React, { useState, useEffect, useRef } from 'react';
import useIndicator from '@/app/utils/useIndicator';
import CardTitle from '@/app/components/CardTitle';
import { BsFillCaretRightFill } from 'react-icons/bs';

const tabs = ['TechScrum', 'AnyStay', 'Melfish'];

const experiences = [
  {
    company: 'TechScrum',
    position: 'Software Developer',
    duration: 'Jan 2025 – Present',
    details: [
      'Developed responsive and reusable UI components using React, TypeScript, and Tailwind CSS',
      'Built an intuitive drag-and-drop task board interface with smooth animations using React DnD',
      'Improved frontend performance by implementing code splitting and lazy loading, reducing initial load time by 30%',
      'Achieved 20% improvement in API response time by optimizing MongoDB aggregation pipelines for data retrieval',
      'Enhanced user collaboration experience by implementing real-time board updates with WebSocket technology',
      'Improved system resilience by solving service blocking issues under high concurrency with RabbitMQ task queuing',
      'Maintained exceptional code quality with comprehensive TDD testing, achieving 90% test coverage',
    ],
  },
  {
    company: 'AnyStay',
    position: 'Software Developer',
    duration: 'Sep 2024 – Jan 2025',
    details: [
      'Enhanced code maintainability through development of shared component library and modular design patterns',
      'Boosted React application performance using advanced techniques including lazy loading and efficient state management',
      'Reduced infrastructure overhead with serverless architecture implementation using AWS Lambda and API Gateway',
      'Decreased manual QA workload by 50% through streamlined GitHub Action and Cypress-based CI/CD pipelines',
      'Ensured consistent deployment environments across staging and production using Docker with AWS EC2',
    ],
  },
  {
    company: 'Melfish',
    position: 'Front-end Developer',
    duration: 'Oct 2023 – Feb 2024',
    details: [
      'Built responsive, accessible SPA interfaces using React, Next.js, and TypeScript',
      'Implemented consistent data flow across the application with Redux Toolkit for shopping cart state management',
      'Improved API capabilities by designing and implementing RESTful endpoints with pagination and advanced query handling',
      'Maintained high engineering standards through active code reviews and adherence to Git branching strategies',
      'Successfully delivered features on schedule by participating in Agile team processes and Scrum methodology',
    ],
  },
];
const Job = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { indicatorStyle, tabRefs } = useIndicator(selectedTab);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.classList.remove('animate-fadeIn');
      void contentRef.current.offsetWidth; 
      contentRef.current.classList.add('animate-fadeIn');
    }
  }, [selectedTab]);

  return (
    <div className="mx-auto max-w-[900px] py-32 relative px-4" id="Job">
      <CardTitle index={2} title="Where I've Worked" />
      <div className="flex sm:flex-row flex-col gap-4">
        <div className="relative sm:flex-col flex">
          <div
            className="absolute left-0 w-[2px] bg-second transition-all duration-300 lg:block hidden"
            style={indicatorStyle}
          />
          {tabs.map((tab, index) => (
            <div
              key={index}
              ref={(el) => {
                tabRefs.current[index] = el as HTMLDivElement;
              }}
              className={`transition-transform duration-300 hover:bg-second/30 cursor-pointer font-mono text-sm sm:p-4 p-2 text-center ${selectedTab === index ? 'text-second  border-b-2 sm:border-0 border-second' : 'text-gray-400'}`}
              onClick={() => setSelectedTab(index)}
            >
              {tab}
            </div>
          ))}
        </div>
        <div ref={contentRef} className="animate-fadeIn text-lg">
          <h2 className="text-xl font-bold">
            {experiences[selectedTab].position} @{' '}
            {experiences[selectedTab].company}
          </h2>
          <p className="text-sm text-gray-500">
            {experiences[selectedTab].duration}
          </p>
          <ul className="mt-4 space-y-3">
            {experiences[selectedTab].details.map((detail, index) => (
              <li key={index} className="flex gap-3">
                <BsFillCaretRightFill
                  size={15}
                  className="text-second flex-shrink-0 mt-1.5"
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Job;
