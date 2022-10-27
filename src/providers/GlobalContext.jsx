import React, {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback
} from 'react';
import { isHomePage } from 'utils';

export const GlobalContext = createContext({
  overflowHidden: null,
  animate: null,
  showMenu: false,
  transitionPage: false,
  handleToggleMenu: () => {},
  setOverflowHidden: () => {},
  setTransitionPage: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [overflowHidden, setOverflowHidden] = useState(null);
  const [animate, setAnimate] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [transitionPage, setTransitionPage] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setShowMenu(prevState => !prevState);
    setOverflowHidden(!showMenu);
  }, [showMenu]);

  const contextValue = useMemo(() => {
    return {
      overflowHidden,
      animate,
      showMenu,
      transitionPage,
      setOverflowHidden,
      handleToggleMenu,
      setTransitionPage
    };
  }, [
    overflowHidden,
    animate,
    showMenu,
    transitionPage,
    setOverflowHidden,
    handleToggleMenu,
    setTransitionPage
  ]);

  useEffect(() => {
    if (window.scrollY === 0 && isHomePage()) {
      setOverflowHidden(true);
      setAnimate(true);
    }

    const timer = setTimeout(() => {
      setOverflowHidden(false);
      setAnimate(false);
    }, 4800);

    return () => {
      setOverflowHidden(false);
      setAnimate(false);
      clearTimeout(timer);
    };
  }, []);

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
