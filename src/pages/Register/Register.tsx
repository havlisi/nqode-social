import Button from 'src/components/core/Button/Button';
import classes from 'src/pages/Register/Register.module.scss';
import { register } from 'src/services/AuthService';
import { FormikHelpers, useFormik } from 'formik';
import { CreateUser } from 'src/models/CreateUser';
import { registrationValidationSchema } from 'src/shared/schemas/validation';
import Card from 'src/components/Card/Card';
import Input from 'src/components/core/Input/Input';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ValidationMessage from 'src/components/core/ValidationMessage/ValidationMessage';

const Register = () => {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (values: CreateUser, actions: FormikHelpers<CreateUser>) => {
    register(values)
      .then((response) => {
        if (response) {
          localStorage.setItem('user', JSON.stringify(response.data));
          setErrorMessage('');
          navigate('/home');
        }
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
    actions.setSubmitting(true);
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmedPassword: ''
    },
    validationSchema: registrationValidationSchema,
    onSubmit
  });

  return (
    <form className={`${classes['c-register-form']}`} onSubmit={handleSubmit}>
      <Card title='Create an account'>
        <Input
          type='text'
          label='Name'
          placeholder='Please provide a name'
          value={values.name}
          name='name'
          onChange={handleChange}
          error={errors.name}
        />
        <Input
          type='text'
          label='Username'
          placeholder='Please provide a username'
          value={values.username}
          name='username'
          onChange={handleChange}
          error={errors.username}
        />
        <Input
          type='email'
          label='E-mail'
          placeholder='Please provide an e-mail'
          value={values.email}
          name='email'
          onChange={handleChange}
          error={errors.email}
        />
        <Input
          type='password'
          label='Password'
          placeholder='Please provide a password'
          value={values.password}
          name='password'
          onChange={handleChange}
          error={errors.password}
        />
        <Input
          type='password'
          label='Confirmation password'
          placeholder='Please provide a confirmation password'
          value={values.confirmedPassword}
          name='confirmedPassword'
          onChange={handleChange}
          error={errors.confirmedPassword}
        />
        <Button type='submit' label='Submit' />
        <ValidationMessage message={errorMessage} />
        <div className={`${classes['c-register-form__span']}`}>
          <span>Already have an account?</span>&nbsp;&nbsp;
          <Link className={`${classes['c-register-form__link']}`} to='/login'>
            Sign in
          </Link>
        </div>
      </Card>
    </form>
  );
};

export default Register;
