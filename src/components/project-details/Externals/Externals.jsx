import React from 'react';
import { CenterWrapperStyled } from 'styles/utils';
import {
  ContainerStyled,
  ArrowWrapperStyled,
  LinkStyled,
  SvgStyled
} from './ExternalsStyles';

const Externals = () => {
  return (
    <ContainerStyled>
      <CenterWrapperStyled>
        <LinkStyled href="/">
          View website
          <Arrow />
        </LinkStyled>
        <LinkStyled href="/">
          View repository
          <Arrow />
        </LinkStyled>
        <LinkStyled href="/">
          Next project <Arrow isInternalLink />
        </LinkStyled>
      </CenterWrapperStyled>
    </ContainerStyled>
  );
};

export default Externals;

const Arrow = props => {
  const { isInternalLink } = props;

  return (
    <ArrowWrapperStyled>
      {isInternalLink ? (
        <>
          <SvgStyled
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-3 -5 24 24"
            width={55}
            {...props}
          >
            <path d="m10.586 5.657-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
          </SvgStyled>
          <SvgStyled
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-3 -5 24 24"
            width={55}
            className="animate"
            {...props}
          >
            <path d="m10.586 5.657-3.95-3.95A1 1 0 0 1 8.05.293l5.657 5.657a.997.997 0 0 1 0 1.414L8.05 13.021a1 1 0 1 1-1.414-1.414l3.95-3.95H1a1 1 0 1 1 0-2h9.586z" />
          </SvgStyled>
        </>
      ) : (
        <>
          <SvgStyled
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-6 -4 24 24"
            width={55}
            {...props}
          >
            <path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z" />
          </SvgStyled>
          <SvgStyled
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-6 -4 24 24"
            width={55}
            className="animate"
          >
            <path d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z" />
          </SvgStyled>
        </>
      )}
    </ArrowWrapperStyled>
  );
};
