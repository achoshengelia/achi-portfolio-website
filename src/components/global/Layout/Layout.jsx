import React from 'react';
import { Header, Footer } from 'components';
import { MainStyled } from './LayoutStyles';

const Layout = ({ children, isDarkBackground }) => {
  return (
    <>
      <Header />
      <MainStyled isDarkBackground={isDarkBackground}>{children}</MainStyled>
      <Footer />
    </>
  );
};

export default Layout;
