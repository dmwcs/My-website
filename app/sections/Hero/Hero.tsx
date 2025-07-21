import BigButton from '@/app/components/BigButton';
import { useState } from 'react';
import classNames from 'classnames';

const Hero = () => {
  const [showMainButton, setShowMainButton] = useState(true);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('About');
    if (aboutSection) {
      setShowMainButton(false);
      setTimeout(() => {
        setShowMainButton(true);
      }, 800);
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          I'm a passionate Full-stack developer with solid skills in React,
          TypeScript, and modern web technologies. Currently, I'm working on
          building an AI-powered task management platform that supports natural
          language interaction for creating and managing tickets.
        </div>
        <div className="self-start pr-10">
          <div
            className={classNames('transition duration-300', {
              'translate-x-10 opacity-0': !showMainButton,
            })}
            onClick={scrollToAbout}
          >
            <BigButton>
              <span className="cursor-pointer">Know more about me!</span>
            </BigButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
