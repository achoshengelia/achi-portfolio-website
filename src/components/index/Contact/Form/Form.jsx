import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { initialValues, fields, isInfo, validationSchema } from '../constants';
import Button from './Button/Button';
import { FieldStyled, FieldsWrapperStyled, FormStyled } from './FormStyles';

const Form = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={() => console.log('submitted')}
    >
      {({ errors, values, handleChange, handleBlur }) => (
        <FormStyled>
          <FieldsWrapperStyled>
            {fields.map(({ startText, field, type, placeholder, endText }) => (
              <Fragment key={field}>
                {startText}
                <FieldStyled
                  type={!isInfo(field) ? type : null}
                  as={isInfo(field) ? 'textarea' : null}
                  rows={isInfo(field) ? '1' : null}
                  name={field}
                  placeholder={placeholder}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  $isEmpty={!values[field].length}
                  $isError={Boolean(errors[field]?.length)}
                />
                {endText}
              </Fragment>
            ))}
          </FieldsWrapperStyled>
          <Button>Send</Button>
        </FormStyled>
      )}
    </Formik>
  );
};

export default Form;
