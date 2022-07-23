import styled from 'styled-components';
import { customMediaQuery } from 'utils';

export const MainHeadingStyled = styled.h1`
  font-size: 15rem;
  color: ${props => props.theme.colors.text.light};

  @media ${({ theme }) => theme.breakpoints.lg} {
    font-size: 13rem;
  }

  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: 11rem;
  }

  ${customMediaQuery(631)} {
    font-size: 9rem;
  }

  ${customMediaQuery(516)} {
    font-size: 7rem;
  }

  ${customMediaQuery(410)} {
    font-size: 5rem;
  }

  @media ${({ theme }) => theme.breakpoints.sm} {
    font-size: 4rem;
  }
`;
