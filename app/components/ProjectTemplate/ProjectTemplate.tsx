import Image from "next/image";

interface Props {
  imgUrl: string;
  patter: "lr" | "rl";
  content: {
    title: string;
  };
}

const ProjectTemplate = (props: Props) => {
  return (
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
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on
              <a href="#" className="text-teal-500 underline">
                {" "}
                Link 1
              </a>
              ,
              <a href="#" className="text-teal-500 underline">
                {" "}
                Link 2
              </a>
              ,
              <a href="#" className="text-teal-500 underline">
                {" "}
                Link 3
              </a>
              , and
              <a href="#" className="text-teal-500 underline">
                Link 4
              </a>
              .
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <a href="#" className="text-teal-500 underline">
                Link A
              </a>
              <a href="#" className="text-teal-500 underline">
                Link B
              </a>
              <a href="#" className="text-teal-500 underline">
                Link C
              </a>
              <a href="#" className="text-teal-500 underline">
                Link D
              </a>
              <a href="#" className="text-teal-500 underline">
                Link E
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
