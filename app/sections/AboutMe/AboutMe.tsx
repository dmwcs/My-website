import PageContainer from '@/app/components/PageContainer/PageContainer';
import Image from 'next/image';
import { BsFillCaretRightFill } from 'react-icons/bs';
import CardTitle from '@/app/components/CardTitle';

const AboutMe = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Next.js',
    'Nest.js',
    'AWS EC2',
    'MUI',
    'PostgreSQL',
    'MongoDB ',
    'Jest',
  ];

  return (
    <div className="flex flex-col gap-2 justify-center mx-auto max-w-[1000px]">
      <div id="About" className="anchor">
        <CardTitle title="About Me" index={1}></CardTitle>

        <div className="flex gap-4 ">
          <div className="whitespace-pre-line space-y-4 text-sandGray">
            <p>
              {`Hello, I’m Shelton Cui, a dedicated JavaScript Engineer with over 3 years of
               development experience and 1 year of professional work experience. I specialize
                in React development and am skilled in using tools and technologies such as 
                Next.js, TypeScript, Tailwind CSS, and Prisma.`}
            </p>
            <p>
              {`One of my strengths is my ability to quickly learn new technologies and adapt to new 
              environments. Whether it’s a new tool, framework, or working in a different type of 
              project, I excel at rapidly acquiring the necessary skills and integrating them into 
              my work. This adaptability allows me to thrive in dynamic and innovative settings 
              where challenges are viewed as opportunities for growth.`}
            </p>
            <p>
              {`I am eager to contribute to projects that push the boundaries of technology and 
              collaborate with teams to drive success. I look forward to applying my skills and 
              enthusiasm to make a meaningful impact.`}
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
