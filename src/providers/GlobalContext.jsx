import React, {
  createContext,
  useState,
  useLayoutEffect,
  useMemo,
  useCallback
} from 'react';
import { isBrowser, isHomePage } from 'utils';

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

  useLayoutEffect(() => {
    if (window.scrollY === 0 && isHomePage()) {
      setOverflowHidden(true);
      setAnimate(true);
    }

    setTimeout(() => {
      setOverflowHidden(false);
      setAnimate(false);
    }, 4800);
  }, []);

  if (!isBrowser) return null;

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
