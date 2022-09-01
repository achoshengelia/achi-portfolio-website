import styled, { css } from 'styled-components';
import { Field, Form } from 'formik';
import { Shake } from 'styles/animations';
import { ButtonStyled } from './Button/ButtonStyles';

const AnimateField = css`
  animation: ${Shake} 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
`;

export const FieldStyled = styled(Field)`
  display: inline-block;
  background: transparent;
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.text.light};
  opacity: ${({ $isEmpty }) => ($isEmpty ? '.5' : '1')};
  padding: 0.5em 0.2em;
  color: ${props => props.theme.colors.text.light};
  font-size: 2.5rem;
  border-color: ${({ $isError, theme }) =>
    $isError ? theme.colors.text.accent : null};
  ${({ $isError }) => ($isError ? AnimateField : null)};

  &::placeholder {
    opacity: 1;
  }

  &:hover,
  :focus {
    opacity: 1;
  }
`;

export const FieldsWrapperStyled = styled.div``;

export const FormStyled = styled(Form)`
  color: ${props => props.theme.colors.text.light};
  font-size: 5rem;
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 4rem;

    & ${FieldsWrapperStyled} {
      display: flex;
      flex-direction: column;
    }

    & ${FieldStyled} {
      font-size: 2rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 3rem;

    & ${FieldsWrapperStyled} {
      display: flex;
      flex-direction: column;
    }

    & ${FieldStyled} {
      font-size: 1.8rem;
    }
  }

  @media ${props => props.theme.breakpoints.xs} {
    & ${ButtonStyled} {
      width: 100%;
    }
  }
`;
