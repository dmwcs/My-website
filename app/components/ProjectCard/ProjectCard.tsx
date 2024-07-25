import Image from 'next/image';
import CardTitle from '@/app/components/CardTitle';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
import ProjectContent from './ProjectContent';

interface Project {
  img: string;
  title: string;
  description: string;
  techs: string[];
  github?: string;
  website?: string;
}
interface Props {
  project: Project;
  direct: 'left' | 'right';
}

const ProjectCard = ({ project, direct = 'left' }: Props) => {
  const { img, title, description, techs, github, website } = project;
  return (
    <div className="relative">
      <div className={`relative w-7/12 ${direct === 'left' ? '' : 'ml-auto'}`}>
        <Image
          src={img}
          alt="Project Screenshot"
          className="rounded-lg shadow-lg"
          width={700}
          height={500}
        />
        <div className="bg-bg opacity-50 hover:opacity-0 absolute inset-0 transition-opacity duration-300"></div>
      </div>

      <ProjectContent
        description={description}
        title={title}
        techs={techs}
        github={github}
        website={website}
        direct={direct}
      />
    </div>
  );
};

export default ProjectCard;
