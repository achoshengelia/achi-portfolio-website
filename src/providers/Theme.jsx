import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/themes/default';

export const Theme = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
