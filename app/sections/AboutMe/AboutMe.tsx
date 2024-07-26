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
    <div className="flex flex-col gap-2 justify-center mx-auto max-w-[1100px] py-32">
      <div id="About" className="anchor">
        <CardTitle title="About Me" index={1}></CardTitle>

        <div className="flex md:flex-row md:items-start items-center flex-col md:gap-28 gap-4">
          <div className="space-y-4">
            <p>
              Hello, I’m Shelton Cui, a dedicated JavaScript Engineer with over
              3 years of development experience and 1 year of professional work
              experience. I specialize in React development and am skilled in
              many technologies such as Next.js, TypeScript, Tailwind CSS, and
              Prisma.
            </p>
            <p>
              I excel at learning new technologies and adapting to new
              environments, thriving in dynamic settings. My strong
              problem-solving skills enable me to write clean, maintainable, and
              reusable code, turning challenges into growth opportunities.
            </p>
            <p>
              I am eager to contribute to projects that push the boundaries of
              technology and collaborate with teams to drive success. I look
              forward to applying my skills and enthusiasm to make a meaningful
              impact.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className="skills-grid text-sm">
              {skills &&
                skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-xs font-mono text-sandGray"
                  >
                    <BsFillCaretRightFill className="text-second" size={10} />
                    {skill}
                  </li>
                ))}
            </ul>
          </div>
          <Image
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
