import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'First name must be longer.')
    .max(30, 'First name is too long.')
    .required('Please provide a first name.'),
  lastName: yup
    .string()
    .min(2, 'Last name must be longer.')
    .max(30, 'Last name is too long.')
    .required('Please provide a last name.'),
  username: yup
    .string()
    .min(2, 'Username must be longer.')
    .max(30, 'Username is too long.')
    .required('Please provide a username.'),
  email: yup.string().email('Please enter a valid email.').required('Please enter an email.'),
  password: yup.string().min(4, 'Password must be longer.').required('Please provide a password'),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Please provide a confirmation password')
});

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required('Please provide a username.'),
  password: yup.string().required('Please provide a password')
});

export const updateUserValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, 'First name  must be longer.')
    .max(30, 'First name too long.')
    .required('Please provide a first name.'),
  lastName: yup
    .string()
    .min(2, 'Last name must be longer.')
    .max(30, 'Last name too long.')
    .required('Please provide a last name.'),
  username: yup
    .string()
    .min(2, 'Username must be longer.')
    .max(30, 'Username is too long..')
    .required('Please provide a username.'),
  email: yup.string().email('Please enter a valid email.').required('Please enter an email.')
});
