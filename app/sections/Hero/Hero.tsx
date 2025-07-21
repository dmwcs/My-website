import BigButton from '@/app/components/BigButton';
import Link from 'next/link';

const Hero = () => {
  return (
    <div
      className="flex flex-col gap-2 min-h-[100vh] justify-center mx-auto max-w-[1000px] px-4"
      id="Hero"
    >
      <div className="font-sans flex gap-8 flex-col">
        <div className="text-sm font-mono text-second">Hi, my name is</div>
        <div className="big-heading">Shelton Cui</div>

        <div className="big-heading text-sandGray">Welcome to my website.</div>
        <div className="text-lg whitespace-pre-line text-sandGray">
          I'm a passionate Full-stack developer with solid skills in React, TypeScript, and modern web technologies. 
          Currently, I'm working at {<span className="text-second">TechScrum</span>} on building an AI-powered 
          task management platform that supports natural language interaction for creating and managing tickets.
        </div>
        <div className="self-start pr-10">
          <BigButton>
            <Link href="/resume.pdf">Check my resume!</Link>
          </BigButton>
        </div>
      </div>
    </div>
  );
};

export default Hero;
