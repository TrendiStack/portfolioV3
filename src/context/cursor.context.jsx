import { createContext, useEffect, useState } from "react";

export const CursorContext = createContext({
  variants: null,
  trailVariants: null,
  mousePosition: { x: 0, y: 0 },
  cursorVariant: "default",
  trail: "trailingCursor",
  textEnter: () => {},
  textLeave: () => {},
  mouseOver: () => {},
});

export const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: -10, y: -10 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [trail, setTrail] = useState("trailingCursor");

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
      mixBlendMode: "difference",
    },
  };

  const trailVariants = {
    trailingCursor: {
      x: mousePosition.x - 37,
      y: mousePosition.y - 37,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
      borderRadius: "50%",
      rotate: [180, 0, 0],
    },
    hover: {
      x: mousePosition.x - 37,
      y: mousePosition.y - 37,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: "easeOut",
      },
      borderRadius: "0%",
      rotate: [0, 0, 180],
    },
  };

  const handleMouseMove = (e) =>
    setMousePosition({ x: e.clientX, y: e.clientY });

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  const mouseOver = () =>
    setTrail(trail === "trailingCursor" ? "hover" : "trailingCursor");

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
        trailVariants,
        trail,
        mousePosition,
        cursorVariant,
        textEnter,
        textLeave,
        mouseOver,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
