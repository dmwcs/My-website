"use client";

import PageContainer from "@/app/components/PageContainer";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import Link from "next/link";

const Project = () => {
  return (
    <div className="flex flex-col gap-2 min-h-[100vh] justify-center mx-auto">
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Some Things I’ve Built
          </h2>
          <div className="relative md:flex md:items-center">
            <div className="md:w-7/12 relative z-10">
              <Image
                src="/img.png"
                alt="Project Screenshot"
                className="rounded-lg shadow-lg w-full h-auto"
                width={700}
                height={500}
              />
            </div>
            <div className="z-20 lg:w-6/12 w-8/12 flex flex-col items-end absolute md:right-0 rounded-lg ">
              <h3 className=" shadow-lg text-2xl md:text-3xl font-bold text-white ">
                Halcyon Theme
              </h3>
              <p className="p-4 mt-4 md:text-[18px] text-gray-400 bg-blue-950 bg-opacity-90 pl-4 rounded">
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Link 1 Link 2 , Link 3 , and Link
                4 .
              </p>
              <p>{`React Styled Components Express Spotify API Heroku`}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link href="https://www.google.com/">
                  <FaGithub size={25} />
                </Link>
                <Link href="https://www.google.com/">
                  <GoProjectSymlink size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
