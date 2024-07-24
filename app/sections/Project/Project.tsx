'use client';

import CardTitle from '@/app/components/CardTitle';
import ProjectCard from '@/app/components/ProjectCard';

const projects = [
  {
    img: '/img.png',
    title: 'Project Alpha',
    description:
      'This is a description for Project Alpha. It involves building a scalable web application.',
    techs: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/user/project-alpha',
    website: 'https://project-alpha.com',
  },
  {
    img: '/img.png',
    title: 'Project Beta',
    description:
      'This is a description for Project Beta. It focuses on machine learning and data analysis.',
    techs: ['Python', 'TensorFlow', 'Pandas'],
    github: 'https://github.com/user/project-beta',
    website: 'https://project-gamma.com',
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
    <div className="mx-auto max-w-[1000px] py-32">
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
