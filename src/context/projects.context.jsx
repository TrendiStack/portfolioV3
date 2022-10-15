import { createContext, useState } from "react";

export const ProjectContext = createContext({
  projectNum: 0,
  modal: false,
  handleModal: () => {},
  setProjectNum: () => {},
});

export const ProjectProvider = ({ children }) => {
  const [projectNum, setProjectNum] = useState(0);
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };

  return (
    <ProjectContext.Provider
      value={{ projectNum, modal, handleModal, setProjectNum }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
