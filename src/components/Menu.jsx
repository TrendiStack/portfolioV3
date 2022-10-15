import React, { useContext } from "react";
import devicon from "../assets/icons/devicon.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import cv from "../assets/resume/SoftwareEngineerResume2 (2) (1).pdf";
import { BurgerMenuContext } from "../context/burgerMenu.context";
import { ObserverContext } from "../context/observer.context";
import { SidebarContext } from "../context/sidebar.context";

const Menu = () => {
  const { toggleBurger, burgerState } = useContext(BurgerMenuContext);
  const { headerIsVisible, skillsIsVisible, workIsVisible, contactIsVisible } =
    useContext(ObserverContext);
  const { header, skills, work, contact } = useContext(SidebarContext);

  const scrollTo = (ref) => {
    toggleBurger();
    setTimeout(() => {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  return (
    <div
      className={`${
        burgerState === "open"
          ? "w-full h-screen transition-all duration-500 rounded-none opacity-100"
          : "w-5 h-5 z-[100] rounded-full opacity-0"
      } flex flex-col justify-between fixed top-0 right-0 bg-white text-black text-center py-20 transition-all duration-500 z-[1]`}
    >
      <p className="uppercase text-3xl">
        <a href={cv} target="blank">
          my resume
        </a>
      </p>
      <p
        onClick={() => scrollTo(header)}
        className={`${
          headerIsVisible ? "text-[#8D3030]" : ""
        } uppercase text-3xl`}
      >
        About
      </p>
      <p
        onClick={() => scrollTo(skills)}
        className={`${
          skillsIsVisible ? "text-[#8D3030]" : ""
        } uppercase text-3xl`}
      >
        Skills
      </p>
      <p
        onClick={() => scrollTo(work)}
        className={`${
          workIsVisible ? "text-[#8D3030]" : ""
        } uppercase text-3xl`}
      >
        Work
      </p>
      <p
        onClick={() => scrollTo(contact)}
        className={`${
          contactIsVisible ? "text-[#8D3030]" : ""
        } uppercase text-3xl`}
      >
        Contact
      </p>
      <div className="flex justify-center gap-5">
        <a
          href="https://www.linkedin.com/in/terel-phillips-9a8038222/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin icon"
            className="hover:rotate-[-360deg] transition-all duration-700"
          />
        </a>
        <a href="https://github.com/UziStacks" target="_blank" rel="noreferrer">
          <img
            src={github}
            alt="github icon"
            className="hover:rotate-[-360deg] transition-all duration-700"
          />
        </a>
        <a href="https://dev.to/uzistacks" target="_blank" rel="noreferrer">
          <img
            src={devicon}
            alt="dev.to icon"
            className="hover:rotate-[-360deg] transition-all duration-700"
          />
        </a>
      </div>
      <address>
        <a
          href="mailto:terel.phillips23@gmail.com"
          className="uppercase text-3xl cursor-default"
        >
          Terel.phillips23@gmail.com
        </a>
      </address>
    </div>
  );
};

export default Menu;
