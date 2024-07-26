import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';

const SideBar = () => {
  return (
    <div className="hidden md:block">
      <div className="fixed left-14 bottom-0">
        <Link href="https://github.com/dmwcs" className="bg-white">
          <FaGithub
            size={20}
            className="hover:text-primary transition duration-300 hover:-translate-y-2 mb-8"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/shelton-cui/">
          <FaLinkedinIn
            size={20}
            className="hover:text-primary transition duration-300 hover:-translate-y-2 mb-8"
          />
        </Link>
        <div className="bg-white h-[100px] w-[1px] mx-auto" />
      </div>
      <div className="fixed right-14 bottom-0 space-y-8">
        <Link
          href="/"
          className="text-xs font-mono hover:text-primary transition duration-300 hover:-translate-y-2"
          style={{ writingMode: 'vertical-rl', letterSpacing: '5px' }}
        >
          damwcs@gmail.com
        </Link>
        <p className="bg-white h-[100px] w-[1px] mx-auto" />
      </div>
    </div>
  );
};

export default SideBar;
