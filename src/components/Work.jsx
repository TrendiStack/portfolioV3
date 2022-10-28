import { useCallback, useContext } from "react";
import { ObserverContext } from "../context/observer.context";
import { SidebarContext } from "../context/sidebar.context";
import { ProjectContext } from "../context/projects.context";
import Project from "./Project";
import { projectData } from "../projectData";
import Mockup from "./Mockup";
import { BurgerMenuContext } from "../context/burgerMenu.context";

const Work = () => {
  const { workObserver } = useContext(ObserverContext);
  const { projectNum } = useContext(ProjectContext);
  const { work } = useContext(SidebarContext);
  const { burgerState } = useContext(BurgerMenuContext);
  const setRefs = useCallback(
    (node) => {
      work.current = node;
      workObserver(node);
    },
    [work, workObserver]
  );

  return (
    <div
      ref={setRefs}
      className="flex justify-center w-full lg:h-screen lg:snap-start py-24 md:py-0"
    >
      <div
        className={`${
          burgerState === "close" ? "relative z-[101]" : ""
        } flex flex-col justify-center gap-10 md:gap-1 2xl:gap-10 h-screen`}
      >
        {projectData.map((project) => (
          <Project key={project.id} project={project} />
        ))}
        <Mockup image={projectData[projectNum].image} />
      </div>
    </div>
  );
};

export default Work;
