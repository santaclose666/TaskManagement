import * as Yup from 'yup';

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const stringVerify = Yup.object().shape({
  fields: Yup.array().of(
    Yup.object().shape({
      value: Yup.string().required('Required'),
    }),
  ),
});
