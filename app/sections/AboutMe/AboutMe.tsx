import Image from 'next/image';
import { BsFillCaretRightFill } from 'react-icons/bs';
import CardTitle from '@/app/components/CardTitle';
import { FaUser, FaCode, FaChartLine, FaLayerGroup } from 'react-icons/fa';

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
          <div className="space-y-8 text-lg">
            {/* Paragraph 1 */}
            <div className="bg-gradient-to-r from-bg to-transparent p-4 border-l-4 border-second rounded-r">
              <div className="flex items-center gap-3 mb-2">
                <FaUser className="text-second" size={18} />
                <h3 className="text-xl font-semibold">Profile</h3>
              </div>
              <p className="leading-relaxed">
                Hello, I'm Shelton Cui, a passionate and energetic Full-stack
                developer with solid skills in responsive and accessible design.
                I'm especially adept at identifying pain points and providing
                tailored solutions, including refactoring or optimizing legacy
                code to improve system performance and maintainability.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="bg-gradient-to-l from-bg to-transparent p-4 border-r-4 border-second rounded-l">
              <div className="flex items-center gap-3 mb-2 justify-end">
                <h3 className="text-xl font-semibold">Expertise</h3>
                <FaCode className="text-second" size={18} />
              </div>
              <p className="leading-relaxed">
                With extensive hands-on experience in React, TypeScript, CI/CD
                pipelines, and unit testing, I excel at learning new
                technologies and adapting to new environments. My strong
                problem-solving skills enable me to write clean, maintainable,
                and reusable code, turning challenges into growth opportunities.
              </p>
            </div>

            {/* Paragraph 3 */}
            <div className="bg-gradient-to-r from-bg to-transparent p-4 border-l-4 border-second rounded-r">
              <div className="flex items-center gap-3 mb-2">
                <FaChartLine className="text-second" size={18} />
                <h3 className="text-xl font-semibold">Achievements</h3>
              </div>
              <p className="leading-relaxed">
                I have a proven track record of enhancing application
                performance, implementing real-time features, optimizing API
                response times, and building comprehensive test suites with high
                coverage. I'm committed to delivering exceptional user
                experiences through modern development practices.
              </p>
            </div>

            {/* Tech Stack Title */}
            <div className="relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bg px-4 z-10 flex items-center gap-2">
                <FaLayerGroup className="text-primary" size={20} />
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-second inline-block text-transparent bg-clip-text text-center">
                  MY TECH STACK
                </h3>
                <FaLayerGroup className="text-second" size={20} />
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-second to-transparent"></div>
            </div>

            <ul className="skills-grid grid grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
              {skills &&
                skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 font-mono text-sandGray hover:text-second transition-colors duration-300"
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
