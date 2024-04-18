import * as yup from 'yup';

export const registrationValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must have at least 2 characters.')
    .max(30, "Name can't have more than 30 characters.")
    .required('Please provide a name.'),
  username: yup
    .string()
    .min(2, 'Username must have at least 2 characters.')
    .max(30, "Username can't have more than 30 characters.")
    .required('Please provide a username.'),
  email: yup.string().email('Please enter a valid email.').required('Please enter an email.'),
  password: yup
    .string()
    .min(4, 'Password must be at least 4 characters long.')
    .required('Please provide a password'),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Please provide a confirmation password')
});

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required('Please provide a username.'),
  password: yup.string().required('Please provide a password')
});
