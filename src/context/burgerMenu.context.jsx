import { createContext, useState, useEffect } from "react";

export const BurgerMenuContext = createContext({
  burgerState: "close",
  toggleBurger: () => {},
});

export const BurgerMenuProvider = ({ children }) => {
  const [burgerState, setBurgerState] = useState("close");
  const toggleBurger = () =>
    setBurgerState(burgerState === "close" ? "open" : "close");

  const onkeydown = (e) => {
    if (e.key === "Escape" && burgerState === "open") {
      toggleBurger();
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", onkeydown);
  });
  return (
    <BurgerMenuContext.Provider value={{ burgerState, toggleBurger }}>
      {children}
    </BurgerMenuContext.Provider>
  );
};
