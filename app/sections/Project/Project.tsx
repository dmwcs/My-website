'use client';

import CardTitle from '@/app/components/CardTitle';
import ProjectCard from '@/app/components/ProjectCard';

const Project = () => {
  return (
    <div className="mx-auto max-w-[1000px] py-32">
      <CardTitle title="My projects" index={3}></CardTitle>
      <div className="space-y-36">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
