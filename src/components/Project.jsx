import { useContext } from "react";
import { ProjectContext } from "../context/projects.context";
import { AiOutlineExpand } from "react-icons/ai";

import Tech from "./Tech";

const Project = ({ project }) => {
  const { handleModal, setProjectNum } = useContext(ProjectContext);

  const { id, name, subtitle, fromAndTo, description, link, github, tech } =
    project;

  return (
    <div className="max-w-[970px]">
      <h3 className="underline text-2xl md:text-xl 2xl:text-2xl">
        {name} - {subtitle}
      </h3>
      <div className="flex flex-row lg:flex-col gap-1 lg:gap-1 my-1">
        <h4 className="roboto text-[#8D3030] capitalize text-xl md:text-lg 2xl:text-xl">
          {fromAndTo}
        </h4>
        <div className="flex gap-5 lg:gap-4">
          {tech.map((tech) => (
            <Tech key={tech.id} tech={tech} />
          ))}
        </div>
      </div>
      <p className="roboto text-xl 2xl:text-xl">{description}</p>
      <div className="flex items-center justify-between text-4xl">
        <div className="flex">
          <a
            href={link}
            className="bg-[#8D3030] text-white text-sm px-5 py-2 mr-2 rounded-md mt-2 cursor-none"
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
          <a
            href={github}
            className="bg-transparent border-solid border-2 border-[#8D3030] text-white text-sm px-5 py-2 rounded-md mt-2 cursor-none"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
        <div
          onClick={() => {
            handleModal();
            setProjectNum(id - 1);
          }}
          className="flex items-center gap-2 text-xl"
        >
          <p>Mockups</p>
          <div className="bg-black">
            <AiOutlineExpand />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
