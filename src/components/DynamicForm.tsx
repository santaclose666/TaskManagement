import React from 'react';
import {Formik} from 'formik';
import {stringVerify} from '../schema/formVerify';

interface DynamicFormProps {
  initVal: any[];
  onSubmit: (v: any) => void;
  children?: any;
}

const DynamicForm = ({initVal, onSubmit, children}: DynamicFormProps) => {
  return (
    <Formik
      initialValues={{fields: initVal}}
      validationSchema={stringVerify}
      onSubmit={onSubmit}>
      {children}
    </Formik>
  );
};

export default DynamicForm;
