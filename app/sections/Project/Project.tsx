'use client';

import CardTitle from '@/app/components/CardTitle';
import ProjectCard from '@/app/components/ProjectCard';

const projects = [
  {
    img: '/meetly.png',
    title: 'Meetly',
    description:
      'An event organization web app for creating and participating in global events. Users can easily publish events, set prices, locations, and times, and manage ticket sales using Stripe’s payment integration.',
    techs: ['MongoDB', 'Stripe', 'Clerk', 'Next.js', 'TailwindCss'],
    github: 'https://github.com/dmwcs/Meetly',
    website: 'https://evently-nine-pi.vercel.app/',
  },
  {
    img: '/img.jpg',
    title: 'Blog-platform',
    description:
      'A blog platform where users can create and manage posts, share information, and engage with each other.',
    techs: ['React', 'PostgreSQL', 'Prisma', 'Auth.js', 'Docker'],
    github: 'https://github.com/dmwcs/My-Blog-Platform',
    website: 'https://github.com/dmwcs/My-Blog-Platform',
  },
  {
    img: '/my-website.jpg',
    title: 'My-website',
    description:
      'My personal website, built with Tailwind CSS and TypeScript without relying on component libraries, features dynamic animations and engaging layout effects. ',
    techs: ['TypeScript', 'TailwindCss', 'Next.js', 'CustomHooks'],
    github: 'https://github.com/dmwcs/My-website',
    website: 'https://github.com/dmwcs/My-website',
  },
];

const Project = () => {
  return (
    <div className="mx-auto max-w-[1000px] py-32" id="Project">
      <CardTitle title="My projects" index={3}></CardTitle>
      <div className="space-y-36">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              project={project}
              key={index}
              direct={index % 2 === 0 ? 'left' : 'right'}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
