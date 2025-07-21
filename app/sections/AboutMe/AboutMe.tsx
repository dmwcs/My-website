import Image from 'next/image';
import { BsFillCaretRightFill } from 'react-icons/bs';
import CardTitle from '@/app/components/CardTitle';

const AboutMe = () => {
  const skills = [
    'TypeScript',
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Node.js',
    'AWS (EC2, Lambda, S3)',
    'GraphQL',
    'Redux',
    'Docker',
    'GitHub Actions',
    'PostgreSQL',
    'MongoDB',
    'Jest',
    'Tailwind CSS',
  ];

  return (
    <div className="flex flex-col gap-2 justify-center mx-auto max-w-[1100px] py-32 px-4">
      <div id="About" className="anchor">
        <CardTitle title="About Me" index={1}></CardTitle>

        <div className="flex lg:flex-row lg:items-start items-center flex-col lg:gap-28 gap-4">
          <div className="space-y-4 text-lg">
            <p>
              Hello, I'm Shelton Cui, a passionate and energetic Full-stack
              developer with solid skills in responsive and accessible design.
              I'm especially adept at identifying pain points and providing
              tailored solutions, including refactoring or optimizing legacy
              code to improve system performance and maintainability.
            </p>
            <p>
              With extensive hands-on experience in React, TypeScript, CI/CD
              pipelines, and unit testing, I excel at learning new technologies
              and adapting to new environments. My strong problem-solving skills
              enable me to write clean, maintainable, and reusable code, turning
              challenges into growth opportunities.
            </p>
            <p>
              I have a proven track record of enhancing application performance,
              implementing real-time features, optimizing API response times,
              and building comprehensive test suites with high coverage. I'm
              committed to delivering exceptional user experiences through
              modern development practices.
            </p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className="skills-grid grid grid-cols-2 lg:grid-cols-3 gap-2">
              {skills &&
                skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 font-mono text-sandGray"
                  >
                    <BsFillCaretRightFill className="text-second" size={10} />
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
          <Image
            className="hidden lg:block rounded-lg"
            alt="my picture"
            src="/me.jpg"
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
