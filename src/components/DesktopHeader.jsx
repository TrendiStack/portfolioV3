import React, { useContext, useCallback } from "react";
import { CursorContext } from "../context/cursor.context";
import { ObserverContext } from "../context/observer.context";
import { SidebarContext } from "../context/sidebar.context";

const DesktopHeader = () => {
  const { headerObserver } = useContext(ObserverContext);
  const { header } = useContext(SidebarContext);
  const { textEnter, textLeave } = useContext(CursorContext);

  const setHeaderRefs = useCallback(
    (node) => {
      header.current = node;
      headerObserver(node);
    },
    [header, headerObserver]
  );

  return (
    <div
      ref={setHeaderRefs}
      className="hidden h-screen my-1 lg:flex justify-center items-center lg:snap-start"
    >
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="text-9xl uppercase text-center"
      >
        Terel Phillips
      </h1>
    </div>
  );
};

export default DesktopHeader;
