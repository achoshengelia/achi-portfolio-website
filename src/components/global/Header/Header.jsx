import React, { useContext } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { useScrollDirection } from 'hooks';
import { GlobalContext } from 'providers';
import { isBrowser, isHomePage } from 'utils';
import { CenterWrapperStyled } from 'styles/utils';
import { AnimatedLink } from '../AnimatedLink';
import Menu from './Menu/Menu';
import Hamburger from './Hamburger/Hamburger';
import { ContainerStyled, LiStyled, UlStyled } from './HeaderStyles';

const Header = () => {
  const scrollDirection = useScrollDirection();
  const { animate, showMenu, handleToggleMenu } = useContext(GlobalContext);

  return (
    <>
      <ContainerStyled
        scrollDirection={scrollDirection}
        animate={animate}
        isHomePage={isHomePage()}
      >
        <CenterWrapperStyled as="nav">
          <UlStyled>
            {listItems.map(({ link, text }, i) => (
              <LiStyled key={`${text}-${i}`}>
                <AnimatedLink
                  to={link}
                  text={text}
                  noArrow
                  $noUnderline={i === 0}
                />
              </LiStyled>
            ))}
            <li>
              <Hamburger />
            </li>
          </UlStyled>
        </CenterWrapperStyled>
      </ContainerStyled>
      {isBrowser &&
        createPortal(
          <AnimatePresence exitBeforeEnter>
            {showMenu ? (
              <Menu
                listItems={getMenuListItems(listItems)}
                handleClick={handleToggleMenu}
              />
            ) : null}
          </AnimatePresence>,
          document.getElementById('menu')
        )}
    </>
  );
};

export default Header;

const getMenuListItems = items => items.filter((_, i) => i !== 0);

const listItems = [
  {
    link: '/',
    text: 'achi shengelia'
  },
  {
    link: '#projects',
    text: 'projects'
  },
  {
    link: '/about',
    text: 'about'
  },
  {
    link: '#contact',
    text: 'contact'
  }
];
