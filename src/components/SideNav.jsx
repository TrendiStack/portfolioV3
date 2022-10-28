import React, { useContext } from "react";
import { CursorContext } from "../context/cursor.context";
import { ObserverContext } from "../context/observer.context";
import { SidebarContext } from "../context/sidebar.context";

const SideNav = () => {
  const { headerIsVisible, skillsIsVisible, workIsVisible, contactIsVisible } =
    useContext(ObserverContext);
  const { header, skills, work, contact } = useContext(SidebarContext);
  const { mouseOver } = useContext(CursorContext);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hidden lg:flex flex-col gap-2 fixed top-[50%] xl:left-[5%] left-5 -translate-y-[50%] transition-all duration-700">
      <div
        onMouseEnter={mouseOver}
        onMouseLeave={mouseOver}
        onClick={() => scrollTo(header)}
        className="flex items-center gap-2"
      >
        <div className="flex justify-center items-center w-5 h-5 group bg-white rounded-full">
          <div
            className={`${
              headerIsVisible ? "w-4 h-4" : "w-0 h-0"
            }  bg-black rounded-full transition-all duration-200`}
          ></div>
        </div>
        <p
          className={`${
            headerIsVisible ? "opacity-100" : "opacity-0"
          } transition-all duration-200`}
        >
          Me
        </p>
      </div>
      <div
        onMouseEnter={mouseOver}
        onMouseLeave={mouseOver}
        onClick={() => scrollTo(skills)}
        className="flex items-center gap-2"
      >
        <div className="flex justify-center items-center w-5 h-5 group bg-white rounded-full">
          <div
            className={`${
              skillsIsVisible ? "w-4 h-4" : "w-0 h-0"
            }  bg-black rounded-full transition-all duration-200`}
          ></div>
        </div>
        <p
          className={`${
            skillsIsVisible ? "opacity-100" : "opacity-0"
          } transition-all duration-200`}
        >
          SKills
        </p>
      </div>
      <div
        onMouseEnter={mouseOver}
        onMouseLeave={mouseOver}
        onClick={() => scrollTo(work)}
        className="flex items-center gap-2"
      >
        <div className="flex justify-center items-center w-5 h-5 group bg-white rounded-full">
          <div
            className={`${
              workIsVisible ? "w-4 h-4" : "w-0 h-0"
            } bg-black rounded-full transition-all duration-200`}
          ></div>
        </div>
        <p
          className={`${
            workIsVisible ? "opacity-100" : "opacity-0"
          } transition-all duration-200`}
        >
          Work
        </p>
      </div>
      <div
        onMouseEnter={mouseOver}
        onMouseLeave={mouseOver}
        onClick={() => scrollTo(contact)}
        className="flex items-center gap-2"
      >
        <div className="flex justify-center items-center w-5 h-5 group bg-white rounded-full">
          <div
            className={`${
              contactIsVisible ? "w-4 h-4" : "w-0 h-0"
            }  bg-black rounded-full transition-all duration-200`}
          ></div>
        </div>
        <p
          className={`${
            contactIsVisible ? "opacity-100" : "opacity-0"
          } transition-all duration-200`}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default SideNav;
