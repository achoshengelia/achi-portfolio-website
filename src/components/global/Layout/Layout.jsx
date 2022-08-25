import React from 'react';
import { MainStyled } from './LayoutStyles';

const Layout = ({ children, isDarkBackground }) => {
  return (
    <>
      <MainStyled isDarkBackground={isDarkBackground}>{children}</MainStyled>
    </>
  );
};

export default Layout;
