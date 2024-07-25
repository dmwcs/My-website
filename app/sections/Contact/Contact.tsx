'use client';
import BigButton from '@/app/components/BigButton';
import { useState } from 'react';
import classNames from 'classnames';

const Contact = () => {
  const [showMainButton, setShowMainButton] = useState(true);
  const handleClick = () => {
    setShowMainButton(false);
    setTimeout(() => {
      setShowMainButton(true);
    }, 800); // 主按钮滑动消失的时间
  };
  return (
    <div
      className="flex flex-col gap-6 items-center mx-auto max-w-[600px] py-32 justify-center mb-32"
      id="Contact"
    >
      <div className="font-mono text-second">04. Say Hello!</div>
      <div className="text-6xl">Connect with Me</div>
      <p className="text-xl text-center">
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, my inbox is always open. I'll do my best to get
        back to you as soon as possible!
      </p>
      <div
        className={classNames('transition duration-300', {
          'translate-x-10 opacity-0': !showMainButton,
        })}
        onClick={handleClick}
      >
        <BigButton>say hello</BigButton>
      </div>
    </div>
  );
};

export default Contact;
