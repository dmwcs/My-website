import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';

interface Props {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  website?: string;
  direct: 'left' | 'right';
}

const ProjectContent = ({
  title,
  description,
  techs,
  github = '/',
  website = '/',
  direct = 'left',
}: Props) => {
  return (
    <div
      className={`top-1/2 -translate-y-1/2 absolute gap-4 z-20 w-6/12 flex flex-col ${direct === 'left' ? 'items-end right-0' : 'items-start left-0'} rounded-lg `}
    >
      <h3 className="shadow-lg text-2xl font-bold text-white">{title}</h3>
      <p className="p-4 mt-4 bg-test/90 pl-4 rounded text-sm sm:text-base md:text-lg shadow-2xl">
        {description}
      </p>
      <div className="flex gap-4">
        {techs.map((tech, index) => (
          <p className="text-sm font-mono" key={index}>
            {tech}
          </p>
        ))}
      </div>
      <div className="flex flex-wrap gap-4 mt-4">
        <Link href={github!}>
          <FaGithub size={25} />
        </Link>
        <Link href={website!}>
          <GoProjectSymlink size={25} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectContent;
