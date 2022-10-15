import React, { useCallback, useContext } from "react";
import { ObserverContext } from "../context/observer.context";
import { SidebarContext } from "../context/sidebar.context";

const Skills = () => {
  const { skillsObserver } = useContext(ObserverContext);
  const { skills } = useContext(SidebarContext);
  const setRefs = useCallback(
    (node) => {
      skills.current = node;
      skillsObserver(node);
    },
    [skills, skillsObserver]
  );
  return (
    <div
      ref={setRefs}
      className="flex flex-col justify-center items-center gap-5 h-screen my-1 text-center text-3xl md:text-4xl lg:snap-start"
    >
      <p className="md:w-full md:max-w-[1000px]">
        My Tools of choice are{" "}
        <span className="text-[#8D3030] uppercase">React</span>,{" "}
        <span className="text-[#8D3030] uppercase">NEXT.JS</span>,{" "}
        <span className="text-[#8D3030] uppercase">TailWindCss</span>,{" "}
        <span className="text-[#8D3030] uppercase">EXPRESS.js</span>, and{" "}
        <span className="text-[#8D3030] uppercase">mongodb</span>. I’m always
        open to learning any new technologies
      </p>
      <p>
        Visit my <span className="text-[#8D3030] uppercase">linkedin</span> or
        view my past <span className="text-[#8D3030] uppercase">work</span> for
        more information
      </p>
    </div>
  );
};

export default Skills;
