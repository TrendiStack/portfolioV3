import { useContext } from "react";
import { BurgerMenuContext } from "../context/burgerMenu.context";

const Footer = () => {
  const { burgerState } = useContext(BurgerMenuContext);

  return (
    <footer
      className={`${
        burgerState === "close" ? "text-white" : "text-black"
      } fixed w-full md:max-w-[1440px] px-5 bottom-5 flex items-center justify-between uppercase z-[100]`}
    >
      <div className="flex lg:flex-col items-center lg:items-start gap-1 lg:text-2xl">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.5 15C27.5 21.9036 21.9036 27.5 15 27.5M27.5 15C27.5 8.09644 21.9036 2.5 15 2.5M27.5 15H2.5M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15M15 27.5C18.1266 24.0771 19.9034 19.635 20 15C19.9034 10.365 18.1266 5.92294 15 2.5M15 27.5C11.8734 24.0771 10.0966 19.635 10 15C10.0966 10.365 11.8734 5.92294 15 2.5M2.5 15C2.5 8.09644 8.09644 2.5 15 2.5"
            stroke={`${burgerState === "close" ? "#fff" : "#000"}`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <p>2022-2023</p>
      </div>
      <div className="flex lg:flex-col-reverse items-center lg:items-end gap-1 lg:text-2xl">
        <p>Front End Dev</p>
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 26.25H20M15 21.25V26.25M5 3.75H25C26.3807 3.75 27.5 4.86929 27.5 6.25V18.75C27.5 20.1307 26.3807 21.25 25 21.25H5C3.61929 21.25 2.5 20.1307 2.5 18.75V6.25C2.5 4.86929 3.61929 3.75 5 3.75Z"
            stroke={`${burgerState === "close" ? "#fff" : "#000"}`}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
