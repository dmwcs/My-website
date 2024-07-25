'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const taps = ['Hero', 'About', 'Job', 'Project', 'Contact'];

const NavBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // If scrolling up, show the navbar
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`shadow-2xl text-white px-10 py-8 flex justify-between fixed top-0 w-full transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'} bg-bg z-50`}
    >
      <Link href={`#Hero`}>
        <Image alt="loge" src="/logo.png" width={45} height={45} />
      </Link>
      <div className="flex gap-x-5 justify-between font-mono text-sm items-center">
        {taps.map((tap, index) => {
          return (
            <Link
              href={`#${tap}`}
              key={index}
              className="hover:text-second transition"
            >
              <span className="text-second">0{index + 1}. </span>
              {tap}
            </Link>
          );
        })}
        <button
          onClick={() => setShowNavbar(!showNavbar)}
          className="bg-gradient-to-r from-primary to-second text-white py-3 px-5 rounded shadow-2xl hover:-translate-y-[1px] hover:scale-110 transition duration-200"
        >
          Resume
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
