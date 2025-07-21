'use client';
import BigButton from '@/app/components/BigButton';
import { useState } from 'react';
import classNames from 'classnames';
import { FaPhone, FaEnvelope, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  const [showMainButton, setShowMainButton] = useState(true);
  const handleClick = () => {
    setShowMainButton(false);
    setTimeout(() => {
      setShowMainButton(true);
    }, 800);
  };

  const contactInfo = [
    { icon: <FaPhone />, text: '0451722033', href: 'tel:0451722033' },
    { icon: <FaEnvelope />, text: 'cui.shelton@gmail.com', href: 'mailto:cui.shelton@gmail.com' },
    { icon: <FaLinkedin />, text: 'linkedin.com/in/shelton-cui', href: 'https://www.linkedin.com/in/shelton-cui/' },
    { icon: <FaGlobe />, text: 'sheltoncui.me', href: 'http://sheltoncui.me' },
  ];

  return (
    <div
      className="flex flex-col gap-6 items-center mx-auto max-w-[600px] py-32 justify-center mb-32 px-4"
      id="Contact"
    >
      <div className="font-mono text-second">04. The next step</div>
      <div className="text-4xl sm:text-5xl md:text-6xl text-center">Contact with Me</div>
      <p className="text-base sm:text-lg md:text-xl text-center">
        I'm currently open to new opportunities. Whether you have a question or
        just want to say hi, my inbox is always open. I'll do my best to get
        back to you as soon as possible!
      </p>
      
      <div className="flex flex-col md:flex-row gap-4 flex-wrap justify-center my-4">
        {contactInfo.map((info, index) => (
          <a 
            key={index} 
            href={info.href} 
            className="flex items-center gap-2 text-lg hover:text-second transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-second">{info.icon}</span>
            <span>{info.text}</span>
          </a>
        ))}
      </div>
      
      <div
        className={classNames('transition duration-300 mt-6', {
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
