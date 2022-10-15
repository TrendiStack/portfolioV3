import { FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { DiSass } from "react-icons/di";

const Tech = ({ tech }) => {
  const { name } = tech;
  const techIcons = {
    React: <FaReact className="text-white" />,
    Express: <SiExpress />,
    Tailwind: <SiTailwindcss />,
    Next: <SiNextdotjs />,
    Firebase: <SiFirebase />,
    Postgres: <SiPostgresql />,
    MongoDB: <SiMongodb />,
    Sass: <DiSass />,
  };
  return (
    <div className="flex items-center gap-1">
      {techIcons[name]}
      <h4 className="hidden lg:block roboto text-[#8D3030] capitalize text-xl">
        {name}
      </h4>
    </div>
  );
};

export default Tech;
