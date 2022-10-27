import React, { useContext } from 'react';
import { Header, Footer, Loader } from 'components';
import { MainStyled } from './LayoutStyles';
import { GlobalContext } from 'providers';
import GlobalStyles from 'styles/GlobalStyles';

const Layout = ({ children, isDarkBackground }) => {
  const { overflowHidden } = useContext(GlobalContext);

  return (
    <>
      <GlobalStyles overflowHidden={overflowHidden} />
      <Loader />
      <Header />
      <MainStyled isDarkBackground={isDarkBackground}>{children}</MainStyled>
      <Footer />
    </>
  );
};

export default Layout;
