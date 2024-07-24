import Image from 'next/image';
import CardTitle from '@/app/components/CardTitle';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';
import ProjectContent from './ProjectContent';

const ProjectCard = (prop) => {
  return (
    <div className="relative">
      <div className="relative w-7/12">
        <Image
          src="/img.png"
          alt="Project Screenshot"
          className="rounded-lg shadow-lg"
          width={700}
          height={500}
        />
        <div className="bg-primary opacity-50 hover:opacity-0 absolute inset-0 transition-opacity duration-300"></div>
      </div>

      <ProjectContent />
    </div>
  );
};

export default ProjectCard;
