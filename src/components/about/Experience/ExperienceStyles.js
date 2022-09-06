import styled from 'styled-components';
import {
  LinkStyled,
  SvgStyled
} from 'components/global/AnimatedLink/AnimatedLinkStyles';
import { MainHeadingStyled } from 'styles/typography';
import { CenterWrapperStyled } from 'styles/utils';
import { customMediaQuery } from 'utils';

export const DescriptionStyled = styled.p`
  font-size: 2rem;
  margin-top: 3rem;
`;

export const RoleYearStyled = styled.div`
  opacity: 0.5;
  font-size: 2.5rem;
  margin-top: 1rem;
`;

export const ExperienceStyled = styled.li`
  & > ${LinkStyled} {
    font-size: 3.5rem;

    & > span {
      width: 4rem;
      margin-left: 0.5rem;

      & ${SvgStyled} {
        width: 4rem;
        margin-top: 1rem;
      }
    }
  }
`;

export const ExperienceListStyled = styled.ul`
  flex-basis: 50%;
  margin-left: 8rem;

  & > * + * {
    margin-top: 5rem;
  }
`;

export const ContainerStyled = styled.section`
  & ${CenterWrapperStyled} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    & ${MainHeadingStyled} {
      flex-basis: 50%;
      position: sticky;
      top: 15%;
    }
  }

  ${customMediaQuery(980)} {
    & ${CenterWrapperStyled} {
      flex-direction: column;

      & ${MainHeadingStyled} {
        position: static;
        top: 0%;
      }

      & ${ExperienceListStyled} {
        margin-left: 0;
        max-width: 70%;
      }
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    & ${CenterWrapperStyled} {
      & ${ExperienceListStyled} {
        max-width: none;
      }
    }
  }
`;
