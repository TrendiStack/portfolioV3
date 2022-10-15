import React from "react";
import LinethroughText from "./LinethroughText";

const AnimatedText = () => {
  return (
    <div className="slider m-auto relative w-auto">
      <div className="slide-track flex ">
        <LinethroughText />
        <LinethroughText />
        <LinethroughText />
        <LinethroughText />
        <LinethroughText />
        <LinethroughText />
      </div>
    </div>
  );
};

export default AnimatedText;
