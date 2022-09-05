import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import defaultTheme from 'styles/themes/default';
import { GlobalContext } from './GlobalContext';

export const Theme = ({ children }) => {
  const { overflowHidden } = useContext(GlobalContext);

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles overflowHidden={overflowHidden} />
      {children}
    </ThemeProvider>
  );
};
