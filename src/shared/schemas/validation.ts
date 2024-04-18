import * as yup from 'yup';

export const userValidationSchema = yup.object().shape({
  name: yup.string().min(2).max(30).required('Please provide a name.'),
  username: yup.string().min(2).max(30).required('Please provide a username.'),
  email: yup.string().email('Please enter a valid email.').required('Please enter an email.'),
  password: yup.string().min(4).required('Please provide a password'),
  confirmedPassword: yup
    .string()
    .oneOf([yup.ref('password'), ''], 'Passwords must match')
    .required('Please provide a confirmation password')
});
