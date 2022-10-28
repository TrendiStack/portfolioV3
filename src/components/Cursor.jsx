import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../context/cursor.context";
import { BurgerMenuContext } from "../context/burgerMenu.context";

const Cursor = () => {
  const { burgerState } = useContext(BurgerMenuContext);
  const { variants, cursorVariant, trailVariants, trail } =
    useContext(CursorContext);
  const [cursorColor, setCursorColor] = useState("white");

  useEffect(() => {
    if (burgerState === "open") {
      setCursorColor("black");
    } else {
      setCursorColor("white");
    }
  }, [burgerState]);

  return (
    <>
      <motion.div
        className={`${
          cursorVariant === "default" ? "opacity-1" : "opacity-0"
        } cursor fixed border border-[#8D3030] w-16 h-16 top-0 left-0 pointer-events-none z-[105]`}
        variants={trailVariants}
        animate={trail}
      />
      <motion.div
        className={` cursor bg-${cursorColor} fixed h-[20px] w-[20px] top-0 left-0 rounded-full pointer-events-none z-[105]`}
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
};

export default Cursor;
