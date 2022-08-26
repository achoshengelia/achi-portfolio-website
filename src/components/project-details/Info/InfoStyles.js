import styled from 'styled-components';
import { MainHeadingStyled } from 'styles/typography';
import { ContainerStyled as Technologies } from 'components/global/Technologies/TechnologiesStyles';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const TextWrapperStyled = styled.p`
  font-size: 2rem;
`;

export const SubTitleStyled = styled.span`
  opacity: 0.4;
  font-size: 2rem;
`;

export const TimeStyled = styled.time`
  justify-self: end;
  opacity: 0.4;
  font-size: 2rem;
`;

export const ContainerStyled = styled.section`
  border-radius: 0 0 2rem 2rem;
  background-color: ${props => props.theme.colors.background.main};
  padding-bottom: 5rem;

  & ${CenterWrapperStyled} {
    display: grid;
    gap: 5rem;
    grid-template-columns: 0.8fr 2fr 0.4fr;
    align-items: center;
    width: 100%;
    padding-top: 5rem;
  }

  & ${MainHeadingStyled} {
    color: ${props => props.theme.colors.text.main};
    font-family: ${props => props.theme.fonts.secondary};
    text-transform: uppercase;
    margin: 0;
  }

  & ${Technologies} {
    align-self: flex-start;
    margin-top: 0.8rem;
  }

  ${customMediaQuery(1164)} {
    & ${MainHeadingStyled} {
      font-size: 6.5rem;
    }
  }

  ${customMediaQuery(973)} {
    & ${CenterWrapperStyled} {
      grid-template-columns: 1fr 2fr;
      align-items: start;
    }

    & ${SubTitleStyled} {
      grid-row: 2 /3;
    }

    & ${TimeStyled} {
      grid-row: 1/ 2;
      justify-self: start;
      margin-top: 1.7rem;
    }

    & ${TextWrapperStyled} {
      grid-column: 2 / -1;
      grid-row: 2 / 4;
    }

    & ${Technologies} {
      margin-top: 0;
    }
  }

  ${customMediaQuery(871)} {
    & ${MainHeadingStyled} {
      font-size: 5.8rem;
    }

    & ${TimeStyled} {
      margin-top: 0;
    }

    & ${Technologies} {
      font-size: 1.4rem;
    }
  }

  ${customMediaQuery(783)} {
    & ${CenterWrapperStyled} {
      grid-template-columns: 3fr 0.5fr;
      grid-template-rows: repeat(4, max-content);
      gap: 4rem;
    }

    & ${MainHeadingStyled} {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      font-size: 7rem;
    }

    & ${SubTitleStyled} {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    & ${TimeStyled} {
      grid-column: 2 / -1;
      grid-row: 3 / 4;
      justify-self: end;
    }

    & ${TextWrapperStyled} {
      grid-column: 1 / -1;
      grid-row: 2 / 3;
    }

    & ${Technologies} {
      grid-row: 4 / -1;
      grid-column: 1 / -1;
      max-width: none;
    }
  }

  ${customMediaQuery(594)} {
    & ${MainHeadingStyled} {
      font-size: 6rem;
    }
  }

  ${customMediaQuery(512)} {
    & ${CenterWrapperStyled} {
      gap: 3rem;
    }

    & ${MainHeadingStyled} {
      font-size: 5rem;
    }
  }

  ${customMediaQuery(432)} {
    & ${MainHeadingStyled} {
      font-size: 4.5rem;
    }

    & ${TextWrapperStyled}, ${TimeStyled},${SubTitleStyled} {
      font-size: 2rem;
    }

    & ${Technologies} {
      font-size: 1.2rem;
    }
  }

  ${customMediaQuery(394)} {
    & ${MainHeadingStyled} {
      font-size: 4rem;
    }
  }

  ${customMediaQuery(353)} {
    & ${MainHeadingStyled} {
      font-size: 3.5rem;
    }
  }
`;
