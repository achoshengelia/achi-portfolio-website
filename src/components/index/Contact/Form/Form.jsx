import React, { Fragment } from 'react';
import { Formik } from 'formik';
import { initialValues, fields, isInfo, validationSchema } from '../constants';
import Button from './Button/Button';
import {
  ButtonWrapperStyled,
  FieldStyled,
  FieldsWrapperStyled,
  FormStyled
} from './FormStyles';

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
        <FormStyled noValidate>
          <FieldsWrapperStyled
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
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
                  $isError={errors[field]?.length}
                />
                {endText}
              </Fragment>
            ))}
          </FieldsWrapperStyled>
          <ButtonWrapperStyled
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
          >
            <Button>Send</Button>
          </ButtonWrapperStyled>
        </FormStyled>
      )}
    </Formik>
  );
};

export default Form;
