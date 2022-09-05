import React, { createContext, useState, useLayoutEffect } from 'react';
import { isBrowser, isHomePage } from 'utils';

export const GlobalContext = createContext({
  overflowHidden: null,
  animate: null,
  showMenu: false,
  handleToggleMenu: () => {},
  setOverflowHidden: () => {}
});

export const GlobalContextProvider = ({ children }) => {
  const [overflowHidden, setOverflowHidden] = useState(null);
  const [animate, setAnimate] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(prevState => !prevState);
    setOverflowHidden(!showMenu);
  };

  const contextValue = {
    overflowHidden,
    animate,
    showMenu,
    setOverflowHidden,
    handleToggleMenu
  };

  useLayoutEffect(() => {
    if (window.scrollY === 0 && isHomePage) {
      setOverflowHidden(true);
      setAnimate(true);
    }

    setTimeout(() => {
      setOverflowHidden(false);
      setAnimate(false);
    }, 5300);
  }, [setOverflowHidden]);

  if (!isBrowser) return null;

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};
