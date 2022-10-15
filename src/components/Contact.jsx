import React, { useCallback, useContext } from "react";
import copyicon from "../assets/icons/copyicon.svg";
import { ObserverContext } from "../context/observer.context";
import { SidebarContext } from "../context/sidebar.context";

const Contact = () => {
  const { contactObserver } = useContext(ObserverContext);
  const { contact } = useContext(SidebarContext);
  const setRefs = useCallback(
    (node) => {
      contact.current = node;
      contactObserver(node);
    },
    [contact, contactObserver]
  );
  return (
    <div
      ref={setRefs}
      className="flex flex-col items-center justify-center h-screen my-1 text-center lg:snap-start"
    >
      <p className="text-4xl mb-3 ">
        If your’re cool with making the first move
        <span className="text-[#8D3030]">?</span>
      </p>

      <p className="roboto text-2xl mb-3">
        let’s start creating something awesome{" "}
        <a href="mailto:terel.phillips23@gmail.com" className="cursor-default">
          <span className="underline">terel.phillips23</span>
          <span className="text-[#8D3030]">@</span>
          <span className="underline">gmail.com</span>
        </a>
      </p>
      <img
        onClick={() => {
          navigator.clipboard.writeText("terel.phillips23@gmail.com");
        }}
        src={copyicon}
        alt="copy icon"
        className="disable-highlight"
      />
    </div>
  );
};

export default Contact;
