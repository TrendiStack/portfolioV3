import { FaReact } from 'react-icons/fa';
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
  SiFramer,
} from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import sanity from '../assets/icons/sanity.png';

const Sanity = () => {
  return (
    <div>
      <img src={sanity} alt="sanity" className="w-9 h-4 grayscale -ml-2" />
    </div>
  );
};

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
    Sanity: <Sanity />,
    'Framer-motion': <SiFramer />,
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
