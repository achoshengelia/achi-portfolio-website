import styled from 'styled-components';
import {
  LinkStyled,
  SvgStyled
} from 'components/global/AnimatedLink/AnimatedLinkStyles';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const ContainerStyled = styled.section`
  color: ${props => props.theme.colors.text.light};
  padding: 10rem 0;

  & > ${CenterWrapperStyled} {
    align-items: flex-start;

    & > * + * {
      margin-top: 5rem;
    }
  }

  @media ${props => props.theme.breakpoints.lg} {
    padding: 5rem 0;
  }

  @media ${props => props.theme.breakpoints.md} {
    padding-top: 0;
  }

  @media ${props => props.theme.breakpoints.sm} {
    min-height: 0;
    margin-bottom: 5rem;

    & ${LinkStyled} {
      font-size: 4rem;
    }

    & ${SvgStyled} {
      width: 5rem;
      margin-top: 0.5rem;
    }
  }

  ${customMediaQuery(352)} {
    & ${LinkStyled} {
      font-size: 3rem;
    }

    & ${SvgStyled} {
      width: 4rem;
      margin-top: 1.3rem;
    }
  }
`;
