import PageContainer from "@/app/components/PageContainer";
import Image from "next/image";
import { BsFillCaretRightFill } from "react-icons/bs";
import CardTitle from "@/app/components/CardTitle";

const AboutMe = () => {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Eleventy",
    "Node.js",
    "WordPress",
  ];

  return (
    <div className="flex flex-col gap-2 justify-center mx-auto max-w-[900px]">
      <div id="About" className="anchor">
        <CardTitle title="About Me" index={1}></CardTitle>

        <div className="flex gap-4 ">
          <div className="whitespace-pre-line space-y-4 text-sandGray">
            <p>
              {`Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!`}
            </p>
            <p>
              {`Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.`}
            </p>
            <p>
              {`I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.`}
            </p>
            <p>{`Here are a few technologies I’ve been working with recently:`}</p>
            <ul className="skills-grid text-sm">
              {skills &&
                skills.map((skill, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <BsFillCaretRightFill className="text-second" />
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
          <Image
            className="self-start"
            alt="my picture"
            src="/cat.jpg"
            width={200}
            height={200}
            objectPosition="center"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
