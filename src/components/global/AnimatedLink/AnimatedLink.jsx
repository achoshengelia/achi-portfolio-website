import React from 'react';
import {
  LinkStyled,
  ArrowWrapperStyled,
  SvgStyled
} from './AnimatedLinkStyles';

const AnimatedLink = ({ noArrow, text, ...props }) => {
  return (
    <LinkStyled {...props}>
      {text}
      {!noArrow ? <Arrow /> : null}
    </LinkStyled>
  );
};

export default AnimatedLink;

const Arrow = () => {
  return (
    <ArrowWrapperStyled>
      {[1, 2].map(i => (
        <SvgStyled
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-6 -4 24 24"
          className={i === 2 ? 'animate' : ''}
        >
          <path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z" />
        </SvgStyled>
      ))}
    </ArrowWrapperStyled>
  );
};
