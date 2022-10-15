import { createContext, useEffect, useState } from "react";

export const CursorContext = createContext({
  variants: null,
  mousePosition: { x: 0, y: 0 },
  cursorVariant: "default",
  textEnter: () => {},
  textLeave: () => {},
});

export const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: -10, y: -10 });
  const [cursorVariant, setCursorVariant] = useState("default");

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        type: "tween",
        duration: 0.1,
        ease: "easeOut",
      },
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 8,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const handleMouseMove = (e) =>
    setMousePosition({ x: e.clientX, y: e.clientY });

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchstart", handleMouseMove);
    window.addEventListener("touchend", handleMouseMove);
    window.addEventListener("touchcancel", handleMouseMove);
    window.addEventListener("touchleave", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
      window.removeEventListener("touchend", handleMouseMove);
      window.removeEventListener("touchcancel", handleMouseMove);
      window.removeEventListener("touchleave", handleMouseMove);
    };
  }, []);

  return (
    <CursorContext.Provider
      value={{
        variants,
        mousePosition,
        cursorVariant,
        textEnter,
        textLeave,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
