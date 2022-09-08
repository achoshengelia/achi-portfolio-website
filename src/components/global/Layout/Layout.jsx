import React from 'react';
import { Header, Footer, Loader } from 'components';
import { MainStyled } from './LayoutStyles';

const Layout = ({ children, isDarkBackground }) => {
  return (
    <>
      <Loader />
      <Header />
      <MainStyled isDarkBackground={isDarkBackground}>{children}</MainStyled>
      <Footer />
    </>
  );
};

export default Layout;
