import { FaArrowRight } from "react-icons/fa6";
import {ReactNode} from "react";



const BigButton = ({ children }: {children: ReactNode}) => {
  return (
    <button className="group flex gap-4 items-center font-mono text-white py-3 px-5 rounded-2xl bg-gradient-to-r from-primary to-second shadow-2xl">
      <p>{children}</p>
      <div className=" transition duration-300 ease-in-out group-hover:translate-x-3">
        <FaArrowRight />
      </div>
    </button>
  );
};
export default BigButton;
