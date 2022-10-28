import { useContext, useEffect, useState } from "react";
import { BurgerMenuContext } from "../context/burgerMenu.context";
import { CursorContext } from "../context/cursor.context";

const Nav = () => {
  const { mouseOver } = useContext(CursorContext);
  const { toggleBurger, burgerState } = useContext(BurgerMenuContext);
  const [screenState, setScreenState] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      window.innerWidth >= 1024 ? setScreenState(true) : setScreenState(false);
    };
    window.addEventListener("resize", handleResize);
  }, [screenState]);

  return (
    <nav
      className={`${
        burgerState === "close" ? "text-white" : "text-black"
      } fixed w-full md:max-w-[1440px] px-5 flex items-center justify-between uppercase bg-transparent text-2xl z-[102]`}
    >
      <a onMouseEnter={mouseOver} onMouseLeave={mouseOver} href="/">
        Terel
      </a>
      <div
        onMouseEnter={mouseOver}
        onMouseLeave={mouseOver}
        onClick={() => toggleBurger()}
        className="hidden xl:flex items-center gap-1 group"
      >
        <p>Menu</p>
        <div
          className={`${
            burgerState === "close" ? "bg-white" : "bg-black"
          } w-5 h-5 group-hover:my-rotate-x-180 group-hover:bg-[#8D3030] rounded-full duration-700`}
        ></div>
      </div>
      <div onClick={toggleBurger} className="xl:hidden menu-btn">
        <div
          className={`${burgerState} ${
            burgerState === "close" ? "bg-white" : "bg-black"
          }`}
        ></div>
        <div
          className={`${burgerState} ${
            burgerState === "close" ? "bg-white" : "bg-black"
          }`}
        ></div>
        <div
          className={`${burgerState} ${
            burgerState === "close" ? "bg-white" : "bg-black"
          }`}
        ></div>
      </div>
    </nav>
  );
};

export default Nav;
