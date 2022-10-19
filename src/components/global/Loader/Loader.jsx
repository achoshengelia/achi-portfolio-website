import React, { useCallback, useContext, useEffect } from 'react';
import { useAnimationControls } from 'framer-motion';
import { GlobalContext } from 'providers';
import { ContainerStyled, WallpaperStyled } from './LoaderStyles';

const Loader = () => {
  const { transitionPage } = useContext(GlobalContext);
  const controls = useAnimationControls();

  const sequence = useCallback(async () => {
    await controls.start('initial');
    await controls.start('animate');
    return await controls.start('exit');
  }, [controls]);

  useEffect(() => {
    if (transitionPage) {
      sequence();
    }
  }, [transitionPage, sequence]);

  return (
    <ContainerStyled variants={mainVariants} animate={controls}>
      {[0, 1, 2, 3, 4].map(i => (
        <WallpaperStyled key={i} variants={childVariants} />
      ))}
    </ContainerStyled>
  );
};

export default Loader;

const mainVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
      duration: 0.01,
      ease: 'easeInOut'
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.1,
      duration: 0.01,
      ease: 'easeInOut'
    }
  }
};

const childVariants = {
  initial: {
    y: '-150%'
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    y: '150%',
    transition: {
      type: 'spring',
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};
