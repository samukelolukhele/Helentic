import { useState } from "react";
import { BiDownArrow } from "react-icons/bi";

type Props = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full border-b border-gray-700">
      <div
        className="flex justify-between items-center py-3 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <p className="">{title}</p>
        <BiDownArrow
          className={`${isActive ? "rotate-180" : "rotate-0"} duration-300`}
        />
      </div>
      <code
        className={`${
          isActive
            ? "z-0 relative opacity-100 duration-300 ease-in"
            : "absolute z-[-50] opacity-0"
        }  w-full bg-[#111] py-8`}
      >
        <p className="!font-extralight py-4">{content}</p>
      </code>
    </div>
  );
};

export default Accordion;
