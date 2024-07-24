import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { GoProjectSymlink } from 'react-icons/go';

const ProjectContent = () => {
  return (
    <div className="top-0 absolute border gap-4 z-20 w-6/12 flex flex-col items-end right-0 rounded-lg ">
      <h3 className=" shadow-lg text-2xl md:text-3xl font-bold text-white ">
        Halcyon Theme
      </h3>
      <p className="p-4 mt-4  bg-second pl-4 rounded text-lg">
        A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
        more. Available on Link 1 Link 2 , Link 3 , and Link 4 .
      </p>
      <p className="text-sm font-mono">{`React Styled Components Express Spotify API Heroku`}</p>
      <div className="flex flex-wrap gap-4 mt-4">
        <Link href="https://www.google.com/">
          <FaGithub size={25} />
        </Link>
        <Link href="https://www.google.com/">
          <GoProjectSymlink size={25} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectContent;
