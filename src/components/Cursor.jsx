import React, { useContext } from "react";
import { motion } from "framer-motion";
import { CursorContext } from "../context/cursor.context";
import { BurgerMenuContext } from "../context/burgerMenu.context";

const Cursor = () => {
  const { burgerState } = useContext(BurgerMenuContext);
  const { variants, cursorVariant } = useContext(CursorContext);

  return (
    <motion.div
      className={`${
        burgerState === "close" ? "bg-white" : "bg-black"
      } fixed h-[20px] w-[20px] top-0 left-0 rounded-full pointer-events-none z-[105]`}
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default Cursor;
