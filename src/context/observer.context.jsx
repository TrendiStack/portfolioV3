import { createContext } from "react";
import { useInView } from "react-intersection-observer";

export const ObserverContext = createContext({
  headerIsVisible: null,
  skillsIsVisible: null,
  workIsVisible: null,
  contactIsVisible: null,
});

export const ObserverProvider = ({ children }) => {
  const { ref: headerObserver, inView: headerIsVisible } = useInView();
  const { ref: skillsObserver, inView: skillsIsVisible } = useInView();
  const { ref: workObserver, inView: workIsVisible } = useInView();
  const { ref: contactObserver, inView: contactIsVisible } = useInView();

  return (
    <ObserverContext.Provider
      value={{
        headerObserver,
        headerIsVisible,
        skillsObserver,
        skillsIsVisible,
        workObserver,
        workIsVisible,
        contactObserver,
        contactIsVisible,
      }}
    >
      {children}
    </ObserverContext.Provider>
  );
};
