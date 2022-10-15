import React from "react";
import AnimatedText from "./AnimatedText";

const MobileHeader = () => {
  return (
    <div className="lg:hidden flex flex-col justify-between items-center h-screen text-3xl overflow-hidden">
      <AnimatedText />
      <h1 className="my-20 text-center">
        Hi there<span className="text-[#8D3030]">,</span> my names Terel
        Phillips
        <span className="text-[#8D3030]">!</span>
      </h1>
      <AnimatedText />
    </div>
  );
};

export default MobileHeader;
