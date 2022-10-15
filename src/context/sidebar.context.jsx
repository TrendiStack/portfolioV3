import { createContext, useRef } from "react";
export const SidebarContext = createContext({
  header: null,
  skills: null,
  work: null,
  contact: null,
});

export const SidebarProvider = ({ children }) => {
  const header = useRef(null);
  const skills = useRef(null);
  const work = useRef(null);
  const contact = useRef(null);
  return (
    <SidebarContext.Provider value={{ header, skills, work, contact }}>
      {children}
    </SidebarContext.Provider>
  );
};
