'use client';

import CardTitle from '@/app/components/CardTitle';
import ProjectCard from '@/app/components/ProjectCard';

const projects = [
  {
    img: '/img.png',
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
  {
    img: '/img.png',
    title: 'Project Gamma',
    description:
      'This is a description for Project Gamma. It is a mobile application for social networking.',
    techs: ['Flutter', 'Firebase', 'Dart'],
    github: 'abc',
    website: 'https://project-gamma.com',
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
