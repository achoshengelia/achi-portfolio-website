import styled from 'styled-components';
import { MainHeadingStyled } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const SkillStyled = styled.li`
  font-size: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.text.dark};
  width: max-content;
`;

export const SkillsWrapperStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  row-gap: 3rem;
  column-gap: 7rem;
  flex-basis: 50%;
  margin: 3rem 0 0 8rem;
`;

export const ContainerStyled = styled.section`
  margin-bottom: 10rem;

  & ${CenterWrapperStyled} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    & ${MainHeadingStyled} {
      flex-basis: 50%;
      color: ${props => props.theme.colors.text.main};
    }
  }

  ${customMediaQuery(930)} {
    & ${CenterWrapperStyled} {
      flex-direction: column;

      & ${SkillsWrapperStyled} {
        width: 100%;
        margin-left: 0;
        column-gap: 10rem;
      }
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    & ${CenterWrapperStyled} {
      & ${SkillsWrapperStyled} {
        column-gap: 5rem;

        & ${SkillStyled} {
          font-size: 2.4rem;
        }
      }
    }
  }

  ${customMediaQuery(400)} {
    & ${CenterWrapperStyled} {
      & ${SkillsWrapperStyled} {
        display: flex;
        overflow-x: scroll;
        margin-top: 0;
        padding-bottom: 3rem;
        gap: 0;

        & * + * {
          margin-left: 1.5rem;
        }

        & ${SkillStyled} {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
