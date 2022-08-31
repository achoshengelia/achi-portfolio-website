import React from 'react';
import { Footer } from 'components';
import { MainStyled } from './LayoutStyles';

const Layout = ({ children, isDarkBackground }) => {
  return (
    <>
      <MainStyled isDarkBackground={isDarkBackground}>{children}</MainStyled>
      <Footer />
    </>
  );
};

export default Layout;
