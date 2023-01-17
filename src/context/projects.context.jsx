import { createContext, useState } from 'react';

export const ProjectContext = createContext({
  projectNum: 0,
  modal: false,
  gifState: false,
  handleModal: () => {},
  setProjectNum: () => {},
  setGifState: () => {},
});

export const ProjectProvider = ({ children }) => {
  const [projectNum, setProjectNum] = useState(0);
  const [modal, setModal] = useState(false);
  const [gifState, setGifState] = useState(false);
  const handleModal = () => {
    setModal(!modal);
    setGifState(false);
  };

  return (
    <ProjectContext.Provider
      value={{
        projectNum,
        modal,
        gifState,
        handleModal,
        setProjectNum,
        setGifState,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
